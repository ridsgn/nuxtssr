// import router from '../.nuxt/router'

const getDefaultState = () => {
  return {
    products: [],
    product: {},
    cart: [],
    vendor: {},
  }
}

export const state = getDefaultState

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

  // isValid(state) {
  //   return state.cart.some(product => {
  //     if (product.product.quantity !== product.quantity) return true;

  //     return false;
  //   })
  // },

  vendorProduct(state) {
    return state.vendor
  },
  // regex(state, getters) {
  //   return getters.oneProduct.price.replace(/[IDR\s.]/g, '');
  // },
  discount(state, getters) {
    if (!getters.oneProduct) { return }

    const price = getters.oneProduct.price;
    const disc = getters.oneProduct.disc;
    const formatter = new Intl.NumberFormat('id-ID', {
      style: 'decimal',
      currency: 'IDR',
    })

    return disc ? price - (price * (disc / 100)) : 0;
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

  ADD_TO_CART(state, { product, afterDiscount, quantity, pay = null }) {
    let productInCart = state.cart.find(item => {
      return item.product.id === product.id;
    })

    if (productInCart) {
      productInCart.quantity += quantity;
      return;
    }

    state.cart.push({ product, afterDiscount, quantity, pay });
  },

  VENDOR_PRODUCT(state, { product, date, qty, pay }) {
    state.vendor.push({ product, date, qty, pay })
  },

  VENDOR_PRODUCT_NEGO(state, product) {
    state.vendor = Object.values(product.product);
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
  },

  EMPTY_VENDOR(state) {
    state.vendor = [];
  },

  REDIRECT(state, url) {
    if (process.browser) {
      window.location.replace(url);
    }
  }
}

// ACTION

export const actions = {
  async getProducts({ commit }) {
    try {
      const products = await this.$axios.$get('api/products')
      commit('SET_PRODUCTS', products.data.product);
    } catch (e) {
      console.log(e);
    }
  },

  async getProduct({ commit }, { slug, vendor }) {
    const product = vendor ? await this.$axios.$get(`api/vendor-product/${slug}`) : await this.$axios.$get(`api/product/${slug}`)
    commit('SET_PRODUCT', product.data);
  },

  async storeProduct({ state }, user_id) {
    const item = state.cart.map(product => product.product)

    await this.$axios.$post('api/cart', {
      user_id: user_id.id,
      product_id: item.map(ids => ids.id),
      quantity: state.cart.map(quantity => quantity.quantity)
    });
  },

  async processOrder({ state, commit }, { shipping, vendor, nego }) {
    const items = vendor ? state.vendor : state.cart
    const product = JSON.parse(JSON.stringify(items))
    const ship = (vendor || !shipping) ? false : shipping

    for (let index = 0; index < product.length; index++) {
      product[index].price = product[index].product.price
      product[index].qty = vendor ? product[index].qty : product[index]['quantity']
      product[index].id_product = nego ? product[index].product.id_product : product[index].product.id
      product[index].down_payment = product[index].product.down_payment
      product[index].id_vendor = vendor ? product[index].product.vendor_id : null
      product[index].disc = vendor ? null : product[index].product.disc

      delete product[index].afterDiscount
      delete product[index].quantity
      delete product[index].product
    }

    const order = await this.$axios.$post('api/order', {
      data: product,
      shipping: ship,
      vendor: vendor,
      nego: nego
    })

    const midtrans = await this.$axios.$post('api/payment/get-token', {
      order_id: order.order_id,
      vendor: vendor,
      nego: nego
    })

    snap.pay(midtrans.token, {
      onSuccess(result) {
        console.log('success');
        // this.app.router.push(result.finish_redirect_url)
        commit('RESET_STATE')
      },
      onPending(result) {
        console.log('pending');
        // console.log(result);
        commit('REDIRECT', result.finish_redirect_url)
        commit('RESET_STATE')
      }
    });
  },

  // async getNego({ commit }, { id, expires, signature }) {
  //   // commit('EMPTY_VENDOR', [])
  //   // commit('RESET_STATE')
  //   const nego = await this.$axios.$get(`api/request-payment/${id}?expires=${expires}&signature=${signature}`);
  //   console.log(nego);
  //   commit('VENDOR_PRODUCT_NEGO', nego.data);
  // },

  mampus({ commit }) {
    commit('EMPTY_VENDOR', [])
    // commit('RESET_STATE')
  },

  addProductNegoVendor({ commit }, product) {
    commit('EMPTY_VENDOR', [])
    commit('VENDOR_PRODUCT_NEGO', product )
  },
  
  addProductVendor({ commit }, { date, product, qty, pay }) {
    commit('EMPTY_VENDOR', [])
    commit('VENDOR_PRODUCT', { date, product, qty, pay })
  },

  addProductToCart({ commit }, { product, afterDiscount, quantity }) {
    commit('ADD_TO_CART', { product, afterDiscount, quantity });
  },

  quantityUpdate({ commit }, { productId, quantity, isValid }) {
    commit('UPDATE_QUANTITY', { productId, quantity, isValid });
  },

  removeItemFromCart({ commit }, product) {
    commit('REMOVE_ITEM_CART', product);
  },

  checkAuth({ commit }) {
    if (this.$auth.loggedIn) {
      commit('RESET_STATE')
      this.$auth.logout()
      this.$router.push('/auth/login');
    }
  }
}
