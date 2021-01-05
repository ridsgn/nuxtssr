<template>
	<div>
		<TheBanner></TheBanner>
		<StoreList label="Happy Wedding Merchandise" :products="products" :offsetBefore="80" />
		<!-- <StoreList label="Raw Souvenir" :products="souvenir" :offsetBefore="80" /> -->
	</div>
</template>

<script>
export default {
  middleware: 'auth',
	name: "PageStore",
	computed: {
		products() {
			return this.$store.state.cart.products
		}
	},
	created() {
		this.$store.dispatch('cart/getProducts');
	},
};
</script>

<style lang="scss" scoped>
</style>
