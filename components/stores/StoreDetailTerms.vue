<template>
	<div class="px-4 mt-8 lg:px-0">
		<div
			class="relative h-full mb-8 border-2 border-gray-500 border-solid rounded-lg xl:inline-flex"
		>
			<div class="absolute pr-1 ml-1 -mt-4 bg-gray-200">
				<div class="font-medium font-poppins">Terms & Conditions</div>
			</div>
			<div
				class="p-4 text-xs font-normal leading-relaxed text-left font-poppins"
			>
				<div
					v-html="
						this.$route.query.vendor
							? product.terms_and_conditions
							: product.description
					"
				>
					<!-- {{ this.$route.query.vendor ? oneProduct.terms_and_conditions : oneProduct.description }} -->
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
