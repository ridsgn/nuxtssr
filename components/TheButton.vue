<template>
  <component :is="type" :href="href" :to="to">
    <div class="button flex items-center justify-center">
      <slot />
    </div>
  </component>
</template>

<script>
export default {
  props: {
    href: {
      type: String,
      default: null
    },
    to: {
      type: String,
      default: null
    }
  },
  computed: {
    type() {
      return this.to ? "nuxt-link" : "button";
      // return this.href ? "a" : "button";
    }
  }
};
</script>

<style scoped>
.button {
  @apply w-16 h-8 rounded-md bg-secondary-500;
}
</style>
