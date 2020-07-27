<template>
  <div class="mt-12 mb-12 grid grid-cols-2 grid-flow-row-dense gap-6">
    <v-review-card v-for="(item, index) in 3" :key="index"></v-review-card>
  </div>
</template>

<script>
import TheReviewCard from "@/components/vendors/TheReviewCard.vue";

export default {
  components: {
    "v-review-card": TheReviewCard,
  },
  data() {
    return {};
  },
};
</script>

<style>
</style>