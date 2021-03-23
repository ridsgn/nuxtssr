<template>
  <div
    class="block lg:grid grid-cols-4 gap-6 mt-12 mb-12"
    v-if="products && products.length > 0"
  >
    <vendor-store-list
      v-for="(product, index) in fixProducts"
      :product="product"
      :key="index"
    ></vendor-store-list>
  </div>
  <div class="flex items-center justify-center h-28" v-else>
    <p>
      Vendor ini belum memiliki produk, silahkan ke bagian
      <span class="underline font-bold">store</span> untuk menacari produk yang
      anda inginkan.
    </p>
  </div>
</template>

<script>
export default {
  props: {
    products: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    fixProducts() {
      return this.products.filter(product => {
        return product.price > 0;
      });
    }
  }
};
</script>

<style scoped></style>
