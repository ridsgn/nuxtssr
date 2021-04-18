<template>
  <component
    :is="tag"
    :type="type"
    :disabled="disableButton"
    :class="[btnClass, colorVariants]"
    :variant="variant"
    :variant-type="variantType"
    :size="size"
    :href="href"
    :to="to"
    v-on="$listeners"
  >
    <slot />
  </component>
</template>

<script>
export default {
  name: 'BaseButton',
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
    variant: {
      type: String,
      default: 'primary',
    },
    variantType: {
      type: String,
      default: 'normal',
    },
    size: {
      type: String,
      default: 'normal',
    },
    rounded: {
      type: String,
      default: 'medium',
    },
    type: {
      type: String,
      default: '',
    },
    href: {
      type: String,
      default: null,
    },
    to: {
      type: String,
      default: null,
    },
  },
  data() {
    return {
      loading: false,
      disableButton: this.disabled,
    }
  },
  computed: {
    tag() {
      if (this.href) {
        return 'a'
      } else if (this.to) {
        return 'nuxt-link'
      } else {
        return 'button'
      }
    },

    btnClass() {
      return {
        'base-spinner': this.loading === true,
        'cursor-not-allowed': this.disableButton === true,
        'base-button inline-flex items-center justify-center font-crete text-center cursor-pointer font-medium focus:outline-none border-2': true,

        'rounded-lg': this.rounded === 'medium',
        'rounded-full': this.rounded === 'large',

        'px-6 py-2': this.size === 'normal',
        'px-4 py-1': this.size === 'small',
      }
    },

    colorVariants() {
      let style
      switch (this.variant) {
        case 'primary':
          switch (this.variantType) {
            case 'normal':
              style = this.disableButton
                ? 'border-hw-brown-300 bg-hw-brown-300 text-white cursor-not-allowed'
                : 'border-hw-brown-300 bg-hw-brown-300 hover:bg-hw-brown-500 hover:border-hw-brown-500 text-white'
              break
            case 'outline':
              style =
                'border-hw-brown-200 text-hw-brown-300 hover:text-hw-brown-500'
              break
            default:
              break
          }
          break
        case 'danger':
          switch (this.variantType) {
            case 'normal':
              switch (this.disableButton) {
                case true:
                  return 'border-red-300 bg-red-300 text-white'
                default:
                  break
              }
              return 'border-red-600 bg-red-600 hover:bg-red-700 hover:border-red-700 text-white'
            case 'outline':
              return 'border-gray-200 text-red-500 hover:text-red-600'
            default:
              break
          }
          break
        case 'warning':
          switch (this.variantType) {
            case 'normal':
              return 'border-orange-600 bg-orange-600 hover:bg-orange-700 hover:border-orange-700 text-white'
            default:
              break
          }
          break
        case 'success':
          switch (this.variantType) {
            case 'normal':
              switch (this.disableButton) {
                case true:
                  return 'border-green-300 bg-green-300 text-white'
                default:
                  break
              }
              return 'border-green-600 bg-green-600 hover:bg-green-700 hover:border-green-700 text-white'
            case 'outline':
              return 'border-2 border-gray-200 text-green-500 hover:text-green-700'
            default:
              break
          }
          break
        case 'white':
          switch (this.variantType) {
            case 'normal':
              return 'border-white bg-white text-blue-600 hover:text-blue-800'
            default:
              break
          }
          break
        case 'secondary':
          switch (this.variantType) {
            case 'outline':
              return 'border-gray-300 text-gray-500 hover:text-blue-500'
            default:
              break
          }
          break
        default:
          break
      }

      return style
    },
  },

  methods: {
    startLoading() {
      this.loading = true
      this.disableButton = true
    },
    stopLoading() {
      this.loading = false
      this.disableButton = false
    },
  },
}
</script>

<style scoped>
.base-button + .base-button {
  margin-left: 1em;
}

@keyframes spinner {
  to {
    transform: rotate(360deg);
  }
}

.base-spinner {
  position: relative;
  overflow: hidden;
}

.base-spinner::before {
  content: '';
  box-sizing: border-box;
  position: absolute;
  background-color: inherit;
  width: 100%;
  height: 100%;
  display: block;
  z-index: 1;
  top: 0;
  left: 0;
}

.base-spinner::after {
  content: '';
  box-sizing: border-box;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 20px;
  height: 20px;
  margin-top: -10px;
  margin-left: -10px;
  border-radius: 50%;
  border: 2px solid rgba(255, 255, 255, 0.45);
  border-top-color: inherit;
  animation: spinner 0.6s linear infinite;
  z-index: 2;
}
</style>
