<template>
  <div>
    <section class="text-gray-700 body-font">
      <div class="container px-5 py-5 mx-auto">
        <div class="flex flex-col w-full mb-6 text-center">
          <h1 class="mb-2 text-3xl font-medium text-gray-900 sm:text-4xl title-font">
            Payment History
          </h1>
        </div>
        <t-button :class="['mb-4']" v-on:click="switcher = !switcher">{{
          switcher ? "HLI's Product" : "Vendor's Product"
        }}</t-button>
        <HistoryComponent :data="product" />
        <!-- <pre>{{ rows.data.historyPayment }}</pre> -->
      </div>
    </section>
  </div>
</template>

<script>
export default {
  head: {
    title: "Happy Wedding | Payment History",
  },
  data() {
    return {
      switcher: false,
    };
  },
  async asyncData({
    isDev,
    route,
    store,
    env,
    params,
    query,
    req,
    res,
    redirect,
    error,
    $axios,
  }) {
    const rows = await $axios.$get(`api/payment/history`);
    // console.log(rows)

    return { rows };
  },

  computed: {
    product() {
      return this.switcher
        ? this.rows.data.historyPayment.admin
        : this.rows.data.historyPayment.vendor;
    },
  },
};
</script>
