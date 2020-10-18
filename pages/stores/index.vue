<template>
	<div>
		<TheBanner></TheBanner>
		<StoreList label="Happy Life Merchandise" :products="weddingku" :offsetBefore="80" />
		<StoreList label="Raw Souvenir" :products="souvenir" :offsetBefore="80" />
	</div>
</template>

<script>
export default {
	name: "PageStore",
	mounted() {
		this.$store.dispatch('cart/getProducts');
	},
};
</script>

<style lang="scss" scoped>
</style>