<template>
	<div>
		<div class="lg:w-8/12">
			<the-breadcrumbs class="px-4 mb-4 lg:px-0" />
			<store-detail-title :product="product" />
		</div>
		<div class="lg:flex">
			<div class="lg:w-8/12">
				<client-only>
					<store-detail-image :product="product" />
				</client-only>
			</div>
			<div class="lg:w-4/12">
				<store-detail-price :product="product" />
			</div>
		</div>
		<div class="lg:w-8/12">
			<store-detail-terms :product="product" />
		</div>
	</div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      required: true,
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
