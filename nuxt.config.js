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
    '@nuxtjs/auth',
    '@nuxtjs/proxy',
    'nuxt-webfontloader'
  ],

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
    baseURL: "//dev.happywedding.id/api",
    proxy: true
  },

  proxy: {
    '/api': {
      target: '//dev.happywedding.id',
      // pathRewrite: { '^/api': '/' }
    }
  },

  auth: {
    strategies: {
      local: {
        provider: 'laravel/jwt',
        url: '//dev.happywedding.id',
        token: {
          property: 'token',
          maxAge: 1800,
          // type: 'Bearer'
        },
        refreshToken: {
          property: 'access_token',
          data: 'access_token',
          maxAge: 60 * 60 * 24 * 30
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
        // autoLogout: false
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
