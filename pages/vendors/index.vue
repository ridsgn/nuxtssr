<template>
  <div class="container px-4 mx-auto">
    <div class="flex items-end justify-end mt-6">
      <v-dropdown />
    </div>
    <div
      class="grid justify-center grid-cols-none gap-5 mt-20 sm:grid-cols-card-2 lg:grid-cols-card-3 xl:grid-cols-card-4"
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
    "v-dropdown": TheDrop,
  },
  data() {
    return {
      id: "",
    };
  },
  async asyncData({ $axios, error }) {
    const data = await $axios.$get(
      "https://my-json-server.typicode.com/rizuki96/jsontest/vendors"
    ).catch(err => {
      error({ statusCode: err, message: 'Error' })
    });
    // console.log(data);
    // debugger;
    return { data };
  },
  methods: {},
};
</script>

<style></style>
