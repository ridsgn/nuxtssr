<template>
  <div>
    <div class="max-w-sm px-4 py-4 mx-auto mt-6 bg-white rounded-lg shadow-lg">
			<div class="px-4 py-4 mb-1 tracking-wide">
				<h2 class="mt-1 font-semibold text-gray-800">67 Users reviews</h2>
				<div class="px-8 pb-3 -mx-8 border-b">
					<div class="flex items-center mt-1">
						<div class="w-1/5 tracking-tighter text-teal-500">
							<span>5 star</span>
						</div>
						<div class="w-3/5">
							<div class="w-full h-2 bg-gray-300 rounded-lg">
								<div class="w-7/12 h-2 bg-teal-600 rounded-lg"></div>
							</div>
						</div>
						<div class="w-1/5 pl-3 text-gray-700">
							<span class="text-sm">51%</span>
						</div>
					</div>
					<!-- first -->
					<div class="flex items-center mt-1">
						<div class="w-1/5 tracking-tighter text-teal-500">
							<span>4 star</span>
						</div>
						<div class="w-3/5">
							<div class="w-full h-2 bg-gray-300 rounded-lg">
								<div class="w-1/5 h-2 bg-teal-600 rounded-lg"></div>
							</div>
						</div>
						<div class="w-1/5 pl-3 text-gray-700">
							<span class="text-sm">17%</span>
						</div>
					</div>
					<!-- second -->
					<div class="flex items-center mt-1">
						<div class="w-1/5 tracking-tighter text-teal-500">
							<span>3 star</span>
						</div>
						<div class="w-3/5">
							<div class="w-full h-2 bg-gray-300 rounded-lg">
								<div class="w-3/12 h-2 bg-teal-600 rounded-lg"></div>
							</div>
						</div>
						<div class="w-1/5 pl-3 text-gray-700">
							<span class="text-sm">19%</span>
						</div>
					</div>
					<!-- thierd -->
					<div class="flex items-center mt-1">
						<div class="w-1/5 tracking-tighter text-teal-500">
							<span>2 star</span>
						</div>
						<div class="w-3/5">
							<div class="w-full h-2 bg-gray-300 rounded-lg">
								<div class="w-1/5 h-2 bg-teal-600 rounded-lg"></div>
							</div>
						</div>
						<div class="w-1/5 pl-3 text-gray-700">
							<span class="text-sm">8%</span>
						</div>
					</div>
					<!-- 4th -->
					<div class="flex items-center mt-1">
						<div class="w-1/5 tracking-tighter text-teal-500">
							<span>1 star</span>
						</div>
						<div class="w-3/5">
							<div class="w-full h-2 bg-gray-300 rounded-lg">
								<div class="w-2/12 h-2 bg-teal-600 rounded-lg"></div>
							</div>
						</div>
						<div class="w-1/5 pl-3 text-gray-700">
							<span class="text-sm">5%</span>
						</div>
					</div>
					<!-- 5th -->
				</div>
			</div>
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