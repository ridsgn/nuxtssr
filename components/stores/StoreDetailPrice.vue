<template>
	<div class="px-4 lg:px-0">
		<div class="mt-32 lg:pl-8 lg:pr-0 lg:mt-0">
			<div class="grid grid-cols-2 gap-3 mb-3 xl:grid-cols-1">
				<div
					class="relative border-2 border-gray-500 border-solid rounded-lg h-28"
				>
					<div class="absolute -mt-4 -ml-2 lg :mt-1">
						<div class="w-20 h-8 bg-teal-600 rounded-full">
							<div class="flex items-center justify-center h-full">
								<div class="text-sm font-bold text-white">24%&nbsp;</div>
								<div class="text-xs font-light text-white">OFF</div>
							</div>
						</div>
					</div>

					<div class="flex flex-col items-center justify-center h-full pt-2">
						<div class="text-sm font-light leading-none line-through">
							{{ oneProduct.price }}
						</div>
						<div class="text-2xl font-semibold">IDR {{ afterDiscount }}</div>
					</div>
				</div>

				<div class="border-2 border-gray-500 border-solid rounded-lg">
					<input class="flex flex-col items-center justify-center w-full h-full p-2 bg-transparent bg-none" />
				</div>
			</div>

			<div class="flex flex-col">
				<div
					class="relative order-last h-full mt-8 border-2 border-gray-500 border-solid rounded-lg lg:my-8 lg:order-first"
				>
					<div class="absolute pr-1 ml-1 -mt-4 bg-gray-200">
						<div class="font-medium font-poppins">Details</div>
					</div>
					<div
						class="p-4 text-xs font-normal leading-relaxed text-justify font-poppins"
					>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
							eget diam venenatis, iaculis ante a, consequat augue. Sed in
							porttitor lorem, ac euismod ex. Lorem ipsum dolor sit amet,
							consectetur adipisicing elit. Corrupti aperiam culpa optio veniam,
							dolorum quia, libero quae repellendus architecto asperiores cum
							praesentium, autem laudantium voluptates explicabo ab dolore
							facere minus.
						</p>
					</div>
				</div>

				<div class="flex justify-between space-x-3">
					<t-button class="w-2/4 font-medium">Message Vendor</t-button>
					<t-button class="w-2/4 font-medium" @click="addToCart()"
						>Order Now</t-button
					>
				</div>
			</div>
		</div>
		<!-- <pre>{{ oneProduct.id }}</pre> -->
	</div>
</template>

<script>
export default {
	methods: {
		addToCart() {
			this.$store.dispatch("cart/addProductToCart", {
				product: this.oneProduct,
				afterDiscount: this.afterDiscount,
				quantity: 1,
			});
		},
	},
};
</script>

<style lang="scss" scoped>
</style>