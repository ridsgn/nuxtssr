<template>
  <div class="mt-12 mb-12">
    <v-store-card></v-store-card>
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