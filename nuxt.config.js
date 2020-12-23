export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Happy Wedding',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  loading: { color: '#38b2a7' },

  router: {
    middleware: [
      'clearValidationErrors',
      // 'isLoggedIn'
      'auth'
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    'swiper/css/swiper.css',
    '~/assets/style.scss'
    // '@braid/vue-formulate/dist/snow.min.css'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '~/plugins/vee-validate',
    { src: '~/plugins/vue-tailwind' },
    { src: '~/plugins/nuxt-swiper-plugin.js', mode: 'client' },
    { src: '~/plugins/persistedState.js', mode: 'client' },
    { src: '~/plugins/vue-select.js', mode: 'client' },

    // "./plugins/mixins/user.js",
    "~/plugins/mixins/validation",
    "~/plugins/axios"
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/toast',
    '@nuxtjs/auth-next',
    '@nuxtjs/proxy',
    'nuxt-webfontloader'
  ],

  toast: {
    position: 'top-center',
    register: [ // Register custom toasts
      {
        name: 'my-error',
        message: 'Oops...Something went wrong',
        options: {
          type: 'error'
        }
      }
    ]
  },

  webfontloader: {
    custom: {
      families: [
        'Montserrat:n3,n4,n5,n6,n7',
        'Poppins:n3,n4,n5,n6,n7',
        'Open Sans:n3,n4',
        'Roboto:n3,n7'
      ],
      urls: [
        // for each Google Fonts add url + options you want
        // here add font-display option
        'https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap',
        'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap',
        'https://fonts.googleapis.com/css?family=Open+Sans:300,400&display=swap',
        'https://fonts.googleapis.com/css?family=Roboto:300,700&display=swap'
      ]
    }
  },

  // proxy: {
  //   '/api': {
  //     target: 'https://api.eatmekitchens.com',
  //     // pathRewrite: {
  //     //   '^/api': '/'
  //     // }
  //   }
  // },

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {
<<<<<<< HEAD
    // baseURL: "http://ecommerce.test/",
=======
    // baseURL: "https://dev.happywedding.id/",
    // baseURL: "http://localhost:8000/",
>>>>>>> testing-old-branch
    proxy: true
  },

  proxy: {
    '/api': {
      target: 'https://dev.happywedding.id',
      // target: 'http://localhost:8000',
      // pathRewrite: { '^/api': '/' }
    }
  },

  auth: {
    redirect: {
      login: '/auth/login',
    },
    localStorage: false,
    strategies: {
      'laravelJWT': {
        // scheme: 'refresh',
        provider: 'laravel/jwt',
        url: 'https://dev.happywedding.id/',
<<<<<<< HEAD
        // url: 'http://ecommerce.test/',
=======
        // url: 'http://localhost:8000/',
>>>>>>> testing-old-branch
        token: {
          property: 'access_token',
          maxAge: 30 * 60, // 30 minutes of ttl
          // type: 'Bearer'
        },
        refreshToken: {
          maxAge: 20160 * 60 // 2 weeks of ttl
        },
        user: {
          property: 'user',
          // autoFetch: true
        },
        endpoints: {
          login: { url: 'api/login', method: 'post' },
          refresh: { url: 'api/refresh/token', method: 'post' },
          user: { url: 'api/user', method: 'get' },
          logout: { url: 'api/logout', method: 'post' }
        },
        // autoLogout: true
      }
    }
  },


  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    transpile: [
      "vee-validate/dist/rules",
    ],
  }
}
