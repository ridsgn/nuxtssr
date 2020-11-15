export default function ({ $axios, store }) {
  $axios.onError(error => {
    const code = parseInt(error.response && error.response.status)

    if (code === 422) {
      store.dispatch('validation/setErrors', error.response.data.errors)
    }

    if (code === 401 || code === 403) {
      store.dispatch('validation/setErrors', error.response.data)
      store.dispatch('cart/checkAuth');
    } 

    return Promise.reject(error);
  });

  $axios.onRequest(() => {
    store.dispatch('validation/clearErrors')
  });

  // const token = $auth.token.get()
  // $axios.setToken(token, 'Bearer')
};
