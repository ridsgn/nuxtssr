<template>
  <div>
    <div class="max-w-sm px-4 py-4 mx-auto mt-6 bg-white rounded-lg shadow-lg">
			<div class="w-full px-4">
				<h3 class="font-medium tracking-tight">Review this vendor</h3>
				<p class="py-1 text-sm text-gray-700">
					give your opinion about this vendor.
				</p>
				<button
					class="px-3 py-1 mt-2 text-gray-800 bg-gray-100 border border-gray-400 rounded"
				>
					write a review
				</button>
			</div>
		</div>
    <div class="grid grid-flow-row-dense grid-cols-2 gap-6 mt-12 mb-12">
			<vendor-review-list v-for="(item, index) in 3" :key="index"></vendor-review-list>
		</div>
  </div>
</template>

<script>
  export default {
    props: {
      vendor: {
        type: Object,
        required: true
      }
    }
  }
</script>

<style scoped>

</style>