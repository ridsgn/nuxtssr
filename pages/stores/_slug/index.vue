<template>
	<div class="container mx-auto mt-32">
		<StoreDetail v-for="(product) in products" :key="product.id" />
    <!-- <pre>{{ product[0] }}</pre> -->
	</div>
</template>

<script>
export default {
  name: "PageStoreDetail",
  computed: {
    products() {
      return this.$store.state.cart.product
    },
  },
	created() {
		this.$store.dispatch("cart/getProduct", this.$route.params.slug);
	},
};
</script>

<style lang="scss" scoped>
</style>