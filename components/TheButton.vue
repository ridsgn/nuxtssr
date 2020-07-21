<template>
  <component :is="type" :href="href" :to="to">
    <div class="button inline-flex items-center justify-center">
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
  @apply h-8 p-2 rounded bg-secondary-500;
}
</style>
