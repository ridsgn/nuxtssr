export const state = () => ({
  products: [],
  product: null,
  cart: [],
});

// GETTER

export const getters = {
  productsSouvenir(state) {
    return state.products.filter(product => product.category === "Raw Souvenir");
  },
  productsWeddingku(state) {
    return state.products.filter(product => product.category === "Wedding Merchandise");
  },
  oneProduct(state) {
    return state.product[0]
  },
  regex(state, getters) {
    return getters.oneProduct.price.replace(/[IDR\s.]/g, '');
  },
  discount(state, getters) {
    const number = Number(getters.regex);
    const formatter = new Intl.NumberFormat('id-ID', {
      style: 'decimal',
      currency: 'IDR',
    })

    return formatter.format(number - (number * 0.24));
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
      total += item.afterDiscount * (item.quantity * 1000)
    });

    return formatter.format(total);
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
  }
}

// ACTION

export const actions = {
  async getProducts({ commit }) {
    try {
      const products = await this.$axios.$get('http://localhost:4000/stores')
      commit('SET_PRODUCTS', products);
    } catch (e) {
      console.log(e);
    }
  },

  async getProduct({ commit }, slug) {
    const product = await this.$axios.$get(`http://localhost:4000/stores?slug=${slug}`);
    commit('SET_PRODUCT', product);
  },

  async storeProduct({ state }, user_id) {
    const item = state.cart.map(product => product.product)

    await this.$axios.$post('http://localhost:8000/api/cart', {
      user_id: user_id.id,
      product_id: item.map(ids => ids.id),
      quantity: state.cart.map(quantity => quantity.quantity)
    });
  },

  addProductToCart({ commit }, { product, afterDiscount, quantity }) {
    commit('ADD_TO_CART', { product, afterDiscount, quantity });
  },

  quantityUpdate({ commit }, { productId, quantity }) {
    commit('UPDATE_QUANTITY', { productId, quantity });
  },

  removeItemFromCart({commit}, product) {
    commit('REMOVE_ITEM_CART', product);
  }
}
