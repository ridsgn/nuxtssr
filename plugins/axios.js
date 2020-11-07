export default function ({ $axios, store, redirect, $auth }) {
  $axios.onError(error => {
    const code = parseInt(error.response && error.response.status)

    if (code === 422) {
      store.dispatch('validation/setErrors', error.response.data.errors)
    }

    if (code === 401) {
      store.dispatch('validation/setErrors', error.response.data)
      store.dispatch('validation/checkAuth');
		  // redirect('/auth/login')
    } 

    return Promise.reject(error);
  });

  $axios.onRequest(() => {
    store.dispatch('validation/clearErrors')
  });

  // const token = $auth.token.get()
  // $axios.setToken(token, 'Bearer')
};
