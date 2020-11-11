<template>
	<div class="grid grid-cols-4 grid-rows-2 gap-6 mt-12 mb-12">
    <vendor-store-list v-for="(product, index) in products" :product="product" :key="index"></vendor-store-list>
  </div>
</template>

<script>
export default {
	props: {
		products: {
			type: Array,
			required: true,
		},
	},
};
</script>

<style scoped>
</style>