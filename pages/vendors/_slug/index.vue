<template>
  <div>
    <div class="mt-12 grid grid-cols-4 grid-rows-2 gap-6">
      <v-project-card v-for="(item, index) in 8" :key="index"></v-project-card>
    </div>
  </div>
</template>

<script>
import TheProjectCard from "@/components/vendors/TheProjectCard.vue";

export default {
  components: {
    "v-project-card": TheProjectCard,
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
.nuxt-link-active {
  @apply border-tertiary-500 text-blue-800 border-b-2;
}
</style>