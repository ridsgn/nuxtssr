<template>
  <div>
    <payment-card
      :product="this.$route.query.expires ? data.data : product"
    ></payment-card>
    <!-- <pre>{{ data.data }}</pre> -->
  </div>
</template>

<script>
import PaymentCard from "~/components/payment/PaymentCard.vue";
export default {
  components: { PaymentCard },
  layout: "payment",
  head() {
    return {
      script: [
        {
          src: "https://app.sandbox.midtrans.com/snap/snap.js",
          "data-client-key": "SB-Mid-client-Q0fAI3TTlUCQpc4X",
        },
      ],
    };
  },
  data() {
    return {};
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
    app,
    error,
  }) {
    try {
      if (query.expires) {
        const data = await app.$axios.$get(
          `api/request-payment/${params.id}?expires=${query.expires}&signature=${query.signature}`
        );
        return { data };
      } else return;
    } catch (e) {
      return error({ message: e.message, statusCode: e.response.status });
    }
  },
  computed: {
    product() {
      return this.$store.state.cart.vendor;
    },
  },
  beforeDestroy() {
    this.$store.dispatch("cart/mampus");
  },
};
</script>

<style lang="scss" scoped></style>
