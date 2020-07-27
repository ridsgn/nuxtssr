<template>
  <div class="mt-12 mb-12 grid grid-cols-4 grid-rows-2 col-gap-6 row-gap-8">
    <v-store-card v-for="(item, index) in 6" :key="index"></v-store-card>
  </div>
</template>

<script>
import TheStoreCard from "@/components/vendors/TheStoreCard.vue";

export default {
  components: {
    "v-store-card": TheStoreCard,
  },
  data() {
    return {};
  },
};
</script>

<style>
</style>