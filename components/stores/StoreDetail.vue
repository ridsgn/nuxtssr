<template>
	<div>
		<div class="lg:w-8/12">
			<the-breadcrumbs class="px-4 mb-4 lg:px-0" />
			<store-detail-title :is-vendor="isVendor" />
		</div>
		<div class="lg:flex">
			<div class="lg:w-8/12">
				<client-only>
					<store-detail-image />
				</client-only>
			</div>
			<div class="lg:w-4/12">
				<store-detail-price :is-vendor="isVendor" />
			</div>
		</div>
		<div class="lg:w-8/12">
			<store-detail-terms />
		</div>
	</div>
</template>

<script>
export default {
  props: {
    isVendor: {
      type: Boolean,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
