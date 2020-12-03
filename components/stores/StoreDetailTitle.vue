<template>
	<div class="px-4 mb-4 lg:px-0">
		<div class="flex w-full h-full mx-auto">
			<div class="flex flex-grow h-full mx-0">
				<div class="flex items-center flex-shrink-0 mr-3">
					<img
						class="w-16 h-16 rounded-full"
						:src="oneProduct.photo_profile ? oneProduct.photo_profile : 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'"
						alt="Avatar"
						tabindex="0"
					/>
				</div>
				<div
					class="flex flex-col items-start justify-between flex-grow max-w-xs py-1 mr-2 truncate xl:max-w-full xl:mr-8"
				>
					<p class="font-medium truncate font-poppins">{{ capitalize(oneProduct.name) }}</p>
					<div class="text-xs font-normal font-poppins">
						by
						<nuxt-link :to="`/vendors/${oneProduct.vendor_id}`" class="font-semibold font-poppins"
							>{{ this.$route.query.vendor ? oneProduct.vendor_name : 'Happy Wedding ID' }}</nuxt-link
						>
						- {{ this.$route.query.vendor ? oneProduct.category : 'Product' }}
					</div>
					<div class="pt-1 text-xs font-light font-poppins">{{ this.$route.query.vendor ? oneProduct.city : 'Jakarta' }}, ID</div>
				</div>
				<div class="flex items-center justify-end">
					<div class="mr-2">
						<button aria-label="Share">
							<!-- <span class="text-lg iconify" data-inline="false" data-icon="carbon:share"></span> -->
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="1.5"
								stroke-linecap="round"
								stroke-linejoin="round"
								class="text-lg feather feather-share-2"
							>
								<circle cx="18" cy="5" r="3" />
								<circle cx="6" cy="12" r="3" />
								<circle cx="18" cy="19" r="3" />
								<line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
								<line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
							</svg>
						</button>
					</div>
					<div>
						<button aria-label="Love">
							<!-- {{-- <span class="text-lg iconify" data-inline="false" data-icon="bytesize:heart"></span> --}} -->
							<svg
								class="text-lg"
								width="22"
								height="20"
								viewBox="0 0 20 18"
								fill="pink"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M2.5 9.0001C0.625 6.5001 1.25 2.7501 4.375 1.5001C7.5 0.250102 9.375 2.7501 10 4.0001C10.625 2.7501 13.125 0.250101 16.25 1.5001C19.375 2.7501 19.375 6.5001 17.5 9.0001C15.625 11.5001 10 16.5001 10 16.5001C10 16.5001 4.375 11.5001 2.5 9.0001Z"
									stroke="black"
									stroke-width="1.3"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
							</svg>
						</button>
					</div>
				</div>
			</div>
		</div>
		<!-- <pre>{{ prod }}</pre> -->
	</div>
</template>

<script>
export default {
	methods: {
		capitalize(value) {
			return value.replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase())));
		}
	}
};
</script>

<style lang="scss" scoped>
</style>
