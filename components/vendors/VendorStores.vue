<template>
	<div class="grid grid-cols-4 grid-rows-2 gap-6 mt-12 mb-12">
		<vendor-store-list
			v-for="(product, index) in fixProducts"
			:product="product"
			:key="index"
		></vendor-store-list>
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
	computed: {
		fixProducts() {
			return this.products.filter((product) => {
				return product.price > 0
			});
		},
	},
};
</script>

<style scoped>
</style>