const getDefaultState = () => {
  return {
    products: [],
    product: {},
    cart: [],
  }
}

export const state = getDefaultState()

// GETTER

export const getters = {
  // productsSouvenir(state) {
  //   return state.products.filter(product => product.category === "Raw Souvenir");
  // },
  // productsWeddingku(state) {
  //   return state.products.filter(product => product.category === "Wedding Merchandise");
  // },
  oneProduct(state) {
    return state.product.product
  },
  // regex(state, getters) {
  //   return getters.oneProduct.price.replace(/[IDR\s.]/g, '');
  // },
  discount(state, getters) {
    const price = getters.oneProduct.price;
    const formatter = new Intl.NumberFormat('id-ID', {
      style: 'decimal',
      currency: 'IDR',
    })

    return price - (price * 0.24);
  },
  cartItemCount(state) {
    return state.cart.length;
  },
  cartTotalPrice(state) {
    const formatter = new Intl.NumberFormat('id-ID', {
      style: 'decimal',
      currency: 'IDR',
    })
    let total = 0;

    state.cart.forEach(item => {
      total += (item.afterDiscount * item.quantity)
    });

    return total;
  }
}

// MUTATION

export const mutations = {
  SET_PRODUCTS(state, products) {
    state.products = products
  },

  SET_PRODUCT(state, product) {
    state.product = product;
  },

  ADD_TO_CART(state, { product, afterDiscount, quantity }) {
    let productInCart = state.cart.find(item => {
      return item.product.id === product.id;
    })

    if (productInCart) {
      productInCart.quantity += quantity;
      return;
    }

    state.cart.push({ product, afterDiscount, quantity });
  },

  UPDATE_QUANTITY(state, { productId, quantity }) {
    let productInCart = state.cart.find(item => {
      return item.product.id === productId
    })

    if (productInCart) {
      productInCart.quantity = quantity;
    }
  },

  REMOVE_ITEM_CART(state, product) {
    state.cart = state.cart.filter(item => {
      return item.product.id !== product.id;
    })
  },

  RESET_STATE(state) {
    Object.assign(state, getDefaultState())
  }
}

// ACTION

export const actions = {
  async getProducts({ commit }) {
    try {
      const products = await this.$axios.$get('/products')
      commit('SET_PRODUCTS', products.data);
    } catch (e) {
      console.log(e);
    }
  },

  async getProduct({ commit }, slug) {
    const product = await this.$axios.$get(`/product/${slug}`);
    commit('SET_PRODUCT', product.data);
  },

  async storeProduct({ state }, user_id) {
    const item = state.cart.map(product => product.product)

    await this.$axios.$post('/cart', {
      user_id: user_id.id,
      product_id: item.map(ids => ids.id),
      quantity: state.cart.map(quantity => quantity.quantity)
    });
  },

  async processOrder({ state, commit }, shipping) {
    const items = state.cart
    const clone = JSON.parse(JSON.stringify(items))
    const ship = Object.values(shipping)
    
    for (let index = 0; index < clone.length; index++) {
      clone[index].price = clone[index].product.price
      clone[index].qty = clone[index]['quantity']
      clone[index].id_product = clone[index].product.id
      clone[index].id_vendor = null
      clone[index].disc = 24
      
      delete clone[index].afterDiscount
      delete clone[index].quantity
      delete clone[index].product
    }

    try {
      const order = await this.$axios.$post('/order', {
        data: clone,
        shipping: ship
      })

      const midtrans = await this.$axios.$post('/payment/get-token', {
        id_order: order.id_order
      })
      
      window.open(midtrans.redirect_url, "_blank")

      commit('RESET_STATE')

    } catch (e) {
      console.log(e);
    }
  },

  addProductToCart({ commit }, { product, afterDiscount, quantity }) {
    commit('ADD_TO_CART', { product, afterDiscount, quantity });
  },

  quantityUpdate({ commit }, { productId, quantity }) {
    commit('UPDATE_QUANTITY', { productId, quantity });
  },

  removeItemFromCart({ commit }, product) {
    commit('REMOVE_ITEM_CART', product);
  }
}
