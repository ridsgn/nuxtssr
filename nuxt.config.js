
export default {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'universal',
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'server',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: "stylesheet", href: "https://use.fontawesome.com/releases/v5.2.0/css/all.css" }
    ]
  },
  /*
  ** Global CSS
  */
  css: [
    '~assets/scss/bulma.scss',
    'swiper/css/swiper.css'
  ],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
    './plugins/mixins/user.js',
    './plugins/axios.js',
    './plugins/mixins/validation.js',
    { src: '@/plugins/nuxt-swiper-plugin.js', ssr: false },
  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/auth',
    ['nuxt-buefy', { css: false }],
    '@nuxtjs/style-resources'
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    baseURL: "http://localhost:8000/api"
  },
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
  },

  auth: {
    strategies: {
      local: {
        endpoints: {
          login: {
            url: 'login',
            method: 'post',
            propertyName: 'meta.token'
          },
          user: {
            url: 'user',
            method: 'get',
            propertyName: 'data'
          },
          logout: {
            url: 'logout',
            method: 'post'
          }
        }
      }
    }
  }
}
