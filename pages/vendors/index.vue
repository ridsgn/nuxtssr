<template>
  <div class="container mx-auto px-4">
    <div class="flex items-end justify-end">
      <v-dropdown />
    </div>
    <div
      class="grid justify-center grid-cols-none sm:grid-cols-card-2 lg:grid-cols-card-3 xl:grid-cols-card-4 gap-5 mt-20"
    >
      <v-card v-for="vendor in data" :key="vendor.id" :vendor="vendor" />
    </div>
  </div>
</template>

<script>
import TheCard from "@/components/TheCard.vue";
import TheDrop from "@/components/TheDrop.vue";

export default {
  components: {
    "v-card": TheCard,
    "v-dropdown": TheDrop
  },
  data() {
    return {
      id: "",
      vendors: []
    };
  },
  async asyncData({ $axios }) {
    const data = await $axios.$get(
      "https://my-json-server.typicode.com/rizuki96/jsontest/vendors"
    );
    return { data };
  },
  methods: {}
};
</script>

<style></style>
