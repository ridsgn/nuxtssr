<template>
	<div class="block lg:grid grid-cols-4 gap-6 mt-12 mb-12" v-if="products && products.length > 0">
		<vendor-store-list
			v-for="(product, index) in fixProducts"
			:product="product"
			:key="index"
		></vendor-store-list>
	</div>
  <div class="flex items-center justify-center h-28" v-else>

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
