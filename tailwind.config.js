/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
module.exports = {
  important: true,
  theme: {
    extend: {
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
      gridTemplateColumns: {
        'card-4': 'repeat(4, minmax(min-content, max-content))',
        'card-3': 'repeat(3, minmax(min-content, max-content))',
        'card-2': 'repeat(2, minmax(min-content, max-content))',
      },
      fontFamily: {
        'monts': ['Montserrat', 'sans-serif'],
      },
      colors: {
        main: "#fffffe",
        headline: "#00214d",
        paragraph: "#1b2d45",
        highlight: "#fde24f",
        tertiary: {
          50: "#ffaab8",
          100: "#ff98a9",
          200: "#ff879b",
          300: "#ff768d",
          400: "#ff657e",
          500: "#ff5470",
          600: "#E00038",
          700: "#cc435a",
          800: "#b33b4e",
          900: "#993243"
        },
        secondary: {
          50: "#C2FFF6",
          100: "#99FFF0",
          200: "#70FFEA",
          300: "#47FFE3",
          400: "#1FFFDD",
          500: "#00EBC7",
          600: "#00CCAD",
          700: "#00A38B",
          800: "#007A68",
          900: "#005245"
        }
      }
    }
  },
  variants: {},
  plugins: [],
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
