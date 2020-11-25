<template>
	<div>
		<div class="container flex items-center justify-center h-screen mx-auto">
			<section
				class="relative p-0 m-0 overflow-visible bg-white rounded-md shadow"
			>
				<div class="p-4 border-b-4">
					<div class="">
						<div class="flex">
							<input
								type="text"
								class="flex-grow-0 flex-shrink-0 px-5 py-2 mr-2 bg-gray-200 rounded-md flex-basis focus:outline-none focus:shadow-outline"
								placeholder="Input voucher code"
							/>

							<t-button variant="disabled" class="w-full">Apply</t-button>
						</div>
					</div>
				</div>
				<div class="p-4">
					<h4 class="font-bold text-gray-800">Order Summary</h4>
					<div class="my-4">
						<div class="space-y-2">
							<client-only>
								<div
									v-for="item in product"
									:key="item.index"
									class="flex flex-wrap items-center justify-between"
								>
									<!-- <div>1</div> -->
									<div class="w-48">{{ item.product.name }}</div>
									<!-- <div class="w-48">oyy</div> -->
									<code>&times;{{ item.qty }}</code>
									<div>IDR {{ item.pay === 'full' ? price(item.product.price) : price(item.product.price * (item.product.down_payment / 100)) }}</div>
									<!-- <div>IDR {{ price(item.product.price) }}</div> -->
									<!-- <div>IDR {{price(394797324)}}</div> -->
								</div>
							</client-only>
						</div>
					</div>
					<div class="mt-6">
						<div>
							<t-button variant="cta" @click="processOrder()" class="w-full"
								>Pay Now
							</t-button>
						</div>
					</div>
				</div>
				<!-- <pre> {{ product }} </pre> -->
			</section>
		</div>
	</div>
</template>

<script>
export default {
	layout: "payment",
	methods: {
		price(value) {
			const formatter = new Intl.NumberFormat("id-ID", {
				style: "decimal",
				currency: "IDR",
			});

			return formatter.format(value);
		},
		async processOrder() {
			try {
				await this.$store.dispatch("cart/processOrder", {
					shipping: false,
					vendor: true,
					nego: this.$route.params.id ? this.$route.params.id : false,
				});
			} catch (err) {
				alert(err)
			}
		},
	},
	computed: {
		firstPayment() {
			let price = this.product.price * (this.product.down_payment / 100);

			return this.price(this.product.price - price);
		},
		product() {
			return this.$store.state.cart.vendor;
		},
	},
	mounted() {
		let midtrans = document.createElement("script");
		midtrans.setAttribute(
			"src",
			"https://app.sandbox.midtrans.com/snap/snap.js"
		);
		midtrans.setAttribute("data-client-key", "SB-Mid-client-Q0fAI3TTlUCQpc4X");
		document.head.appendChild(midtrans);
	},
	created() {
		if (this.$route.query.expires) {
			this.$store.dispatch("cart/getNego", {
				id: this.$route.params.id,
				expires: this.$route.query.expires,
				signature: this.$route.query.signature,
			});
		}
	},
};
</script>

<style lang="scss" scoped>
</style>
