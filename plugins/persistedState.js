// import createPersistedState from 'vuex-persistedstate';
// import * as Cookies from 'js-cookie';
// import cookie from 'cookie';

import createPersistedState from "vuex-persistedstate";
import SecureLS from "secure-ls";
let ls = new SecureLS({ isCompression: false });

export default ({ store, req }) => {
  // createPersistedState({
  //   key: 'cart',
  //   paths: ['cart.cart', 'auth.user'],
  //   storage: {
  //     getItem: (key) => {
  //       // See https://nuxtjs.org/guide/plugins/#using-process-flags
  //       if (process.server) {
  //         const parsedCookies = cookie.parse(req.headers.cookie);
  //         return parsedCookies[key];
  //       } else {
  //         return Cookies.get(key);
  //       }
  //     },
  //     // Please see https://github.com/js-cookie/js-cookie#json, on how to handle JSON.
  //     setItem: (key, value) =>
  //       Cookies.set(key, value, { expires: 365, secure: false }),
  //     removeItem: key => Cookies.remove(key)
  //   }
  // })(store);

  createPersistedState({
    key: 'cart',
    paths: ['cart.cart'],
    storage: {
      getItem: key => ls.get(key),
      setItem: (key, value) => ls.set(key, value),
      removeItem: key => ls.remove(key)
    },
    reducer: (state) => {
      if (state.auth.user === false || state.auth.user === null) {
        return {}
      }
      return state
    }
  })(store)
};
