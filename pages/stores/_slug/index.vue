<template>
	<div class="container mx-auto mt-20 lg:mt-32">
		<StoreDetail v-for="product in products" :key="product.id" :product="products.product" />
		<!-- <pre>{{ product[0] }}</pre> -->
	</div>
</template>

<script>
export default {
	name: "PageStoreDetail",
	computed: {
		products() {
			return this.$store.state.cart.product;
		},
	},
	created() {
		this.$store.dispatch("cart/getProduct", {
			slug: this.$route.params.slug,
			vendor: this.$route.query.vendor,
		});
  },
};
</script>

<style lang="scss" scoped>
</style>
