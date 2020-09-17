<template>
  <div>
    <v-header />
    <nuxt />
  </div>
</template>

<script>
import TheNav from "@/components/TheNav.vue";

export default {
  components: {
    "v-header": TheNav,
  },
};
</script>

<style>
</style>
