<template>
	<div class="px-4 lg:px-0">
		<div class="mt-32 lg:pl-8 lg:pr-0 lg:mt-0">
			<div class="grid grid-cols-3 gap-3 mb-3 xl:grid-cols-3">
				<div
					class="relative col-span-3 border-2 border-gray-500 border-solid rounded-lg h-28"
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
							IDR {{ price(oneProduct.price) }}
						</div>
						<div class="text-2xl font-semibold">IDR {{ afterDiscount }}</div>
					</div>
				</div>

				<p class="flex items-center justify-end">Quantity</p>
				<div
					class="w-full border-2 border-gray-500 border-solid rounded-lg outline-none justify-self-end"
				>
					<input
						type="text"
						maxlength="3"
						onkeyup="this.value = this.value.replace(/\D/g,'')"
						v-model="qty"
						class="h-full p-2 bg-transparent bg-none"
					/>
				</div>
				<cite class="flex items-center justify-start">pcs</cite>
			</div>

			<div class="flex flex-col">
				<div
					class="relative order-last h-full mt-8 border-2 border-gray-500 border-solid rounded-lg lg:my-8 lg:order-first"
				>
					<div class="absolute pr-1 ml-1 -mt-4 bg-gray-200">
						<div class="font-medium font-poppins">Details</div>
					</div>
					<div
						class="max-w-sm p-4 text-xs font-normal leading-relaxed text-left font-poppins"
					>
						<p>
							{{ oneProduct.details }}
						</p>
					</div>
				</div>

				<div class="flex justify-between space-x-3">
					<t-button
						variant="outline"
						class="flex-1 flex-shrink w-2/4 font-medium"
						>Chat</t-button
					>
					<t-button
						:variant="qty == 0 ? 'disabled' : ''"
						:disabled="qty == 0"
						@click="addToCart()"
						class="flex-grow w-2/4 font-medium"
						>Order Now</t-button
					>
				</div>
			</div>
		</div>
		<!--		 <pre>{{ test }}</pre>-->
	</div>
</template>

<script>
export default {
	data() {
		return {
			qty: 1,
		};
	},
	methods: {
		price(value) {
			const formatter = new Intl.NumberFormat("id-ID", {
				style: "decimal",
				currency: "IDR",
			});

			return formatter.format(value);
		},
		addToCart() {
			if (!this.$store.state.auth.loggedIn) {
				this.$router.push("/auth/login");
			} else {
				this.$store.dispatch("cart/addProductToCart", {
					product: this.oneProduct,
					afterDiscount: this.afterDiscount,
					quantity: parseInt(this.qty),
				});
			}
		},
	},
	created() {
		return this.qty = this.oneProduct.quantity;
	}
};
</script>

<style lang="scss" scoped>
</style>
