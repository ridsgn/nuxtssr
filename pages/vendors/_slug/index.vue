<template>
  <div class="mt-12 mb-12 grid grid-cols-4 grid-rows-2 gap-6">
    <v-project-card v-for="(item, index) in 8" :key="index"></v-project-card>
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
</style>