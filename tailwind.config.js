module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  theme: {
    extend: {
      screens: {
        '2xl': '1536px',
      },
      fontFamily: {
        'display': ['Montserrat'],
        'poppins': ['Poppins'],
        'body': ['Roboto']
      },
      gridTemplateColumns: {
        'card-4': 'repeat(4, minmax(min-content, max-content))',
        'card-3': 'repeat(3, minmax(min-content, max-content))',
        'card-2': 'repeat(2, minmax(min-content, max-content))',
      },
      spacing: {
        128: '32rem',
        28: '7rem'
      },
      width: {
        card: '16.75rem',
      },
      height: {
        card: '20.375rem',
      },
    }
  },
  variants: {},
  plugins: [
    require('@tailwindcss/custom-forms')
  ],
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js'
    ]
  }
}

