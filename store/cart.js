export const state = () => ({
  products: [],
  product: [],
  cart: [],
});

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
    return getters.oneProduct.price.replace(/[\IDR\s\.]/g, '');
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
      return;
    }
  },

  REMOVE_ITEM_CART(state, product) {
    state.cart = state.cart.filter(item => {
      return item.product.id !== product.id;
    })
  }
}

export const actions = {
  async getProducts({ commit }) {
    const products = await this.$axios.$get('http://localhost:4000/stores');
    commit('SET_PRODUCTS', products);
  },

  async getProduct({ commit }, slug) {
    const product = await this.$axios.$get(`http://localhost:4000/stores?slug=${slug}`);
    commit('SET_PRODUCT', product);
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