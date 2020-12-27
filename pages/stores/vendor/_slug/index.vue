<template>
  <div class="container mx-auto mt-20 lg:mt-32">
    <StoreDetail v-for="product in products" :key="product.id" :is-vendor="isVendor" />
    <!-- <pre>{{ products }}</pre> -->
  </div>
</template>

<script>
export default {
  name: "PageVendorStoreDetail",
  // async fetch({ store, params }) {
  //   await store.dispatch("cart/vendorProduct", {
  //     slug: params.slug,
  //   });
  // },
  beforeCreate() {
    this.$store.dispatch("cart/clearProduct");
  },
  created() {
    this.$store.dispatch("cart/vendorProduct", {
      slug: this.$route.params.slug,
    });
  },
  computed: {
    products() {
      return this.$store.state.cart.product;
    },
    isVendor: function () {
      return this.products.product.hasOwnProperty("vendor_id");
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
