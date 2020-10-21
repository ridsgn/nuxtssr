<template>
	<div class="container flex px-5 mx-auto mt-32 mother-container">
		<div class="mb-10 mr-10 mother-container-left-side">
			<div class="min-h-full p-4 bg-white rounded-md shadow left-side-content">
				<ul class="">
					<div class="space-y-4">
						<li
							v-for="(item, index) in carts"
							:key="item.product.id"
							class="min-w-full p-4 bg-gray-200 rounded-md"
						>
							<div class="">
								<div class="mb-2 --top-section">
									<div class="flex items-start">
										<div class="img-wrapper">
											<div class="relative flex-shrink-0 w-20 h-20">
												<div class="absolute top-0 left-0 w-20 h-20">
													<div class="relative">
														<div class="absolute top-0 left-0 w-20 h-20">
															<img
																class="w-20 h-20 rounded-md"
																:src="item.product.img"
																:alt="item.product.title"
															/>
														</div>
													</div>
												</div>
											</div>
										</div>
										<div class="pl-4 product-wrapper">
											<div class="">
												<div class="mb-2 --product-name">
													<nuxt-link to="#">
														{{ item.product.title }}
													</nuxt-link>
												</div>
												<div class="--product-price">
													<del class="inline-block">{{
														item.product.price
													}}</del>
													<b class="inline-block"
														>IDR {{ item.afterDiscount }}</b
													>
												</div>
											</div>
										</div>
									</div>
								</div>

								<div class="--bottom-section">
									<div class="flex justify-between">
										<div class="--left-item">catatan</div>
										<div class="--right-item">
											<div class="inline-flex space-x-4">
												<div>
													<svg
														xmlns="http://www.w3.org/2000/svg"
														class="icon icon-tabler icon-tabler-heart"
														width="22"
														height="22"
														viewBox="0 0 24 24"
														stroke-width="1.5"
														stroke="#000"
														fill="none"
														stroke-linecap="round"
														stroke-linejoin="round"
													>
														<path stroke="none" d="M0 0h24v24H0z" fill="none" />
														<path
															d="M19.5 13.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572"
														/>
													</svg>
												</div>
												<div>
													<svg
														xmlns="http://www.w3.org/2000/svg"
														class="icon icon-tabler icon-tabler-trash"
														width="22"
														height="22"
														viewBox="0 0 24 24"
														stroke-width="1.5"
														stroke="#000"
														fill="none"
														stroke-linecap="round"
														stroke-linejoin="round"
													>
														<path stroke="none" d="M0 0h24v24H0z" fill="none" />
														<line x1="4" y1="7" x2="20" y2="7" />
														<line x1="10" y1="11" x2="10" y2="17" />
														<line x1="14" y1="11" x2="14" y2="17" />
														<path
															d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"
														/>
														<path
															d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"
														/>
													</svg>
												</div>
                        
												<div class="flex">
													<i
														><svg
															xmlns="http://www.w3.org/2000/svg"
															class="icon icon-tabler icon-tabler-circle-minus"
															width="22"
															height="22"
															viewBox="0 0 24 24"
															stroke-width="1.5"
															stroke="#000"
															fill="none"
															stroke-linecap="round"
															stroke-linejoin="round"
														>
															<path
																stroke="none"
																d="M0 0h24v24H0z"
																fill="none"
															/>
															<circle cx="12" cy="12" r="9" />
															<line x1="9" y1="12" x2="15" y2="12" /></svg
													></i>
													<input
														type="text"
														@keyup="updateQty(item.product.id, $event)"
														@change="updateQty(item.product.id, $event)"
														class="w-10"
														:value="item.quantity"
                            ref="input"
													/>
													<i @click="submit(index)">
														<svg
															xmlns="http://www.w3.org/2000/svg"
															class="icon icon-tabler icon-tabler-circle-plus"
															width="22"
															height="22"
															viewBox="0 0 24 24"
															stroke-width="1.5"
															stroke="#000"
															fill="none"
															stroke-linecap="round"
															stroke-linejoin="round"
														>
															<path
																stroke="none"
																d="M0 0h24v24H0z"
																fill="none"
															/>
															<circle cx="12" cy="12" r="9" />
															<line x1="9" y1="12" x2="15" y2="12" />
															<line x1="12" y1="9" x2="12" y2="15" />
														</svg>
													</i>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</li>
					</div>
				</ul>
			</div>
		</div>
		<div class="flex-shrink-0 w-4/12 mother-container-right-side">
			<div class="sticky top right-side-content">
				<div class="absolute top-0 left-0 bottom-auto right-auto z-10 w-full">
					<div class="relative">
						<div class="translate-y-0 opacity-100">
							<div>
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

												<t-button class="w-full">Apply</t-button>
											</div>
										</div>
									</div>
									<div class="p-4">
										<h4 class="font-bold text-gray-800">Order Summary</h4>
										<div class="my-4">
											<div>
												<div class="flex items-center justify-between">
													<div>Total Price</div>
													<div>{{ totalPrice }}</div>
												</div>
											</div>
										</div>
										<div class="mt-6">
											<div>
												<t-button class="w-full">Buy ({{ totalQty }})</t-button>
											</div>
										</div>
									</div>
								</section>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
  data() {
    return {
      test: null
    }
  },
	methods: {
    updateQty(id, event) {
			this.$store.dispatch("cart/quantityUpdate", {
				productId: id,
				quantity: (event.target.value != "") ? event.target.value : 1,
			});
    },
    submit(index) {
      return this.$refs.input[index].value = (parseInt(this.$refs.input[index].value) + 1).toString()
    }
	},
	computed: {
		carts() {
			return this.$store.state.cart.cart;
    },
    totalQty() {
      let total = 0;

      this.carts.forEach(item => {
        total += parseInt(item.quantity)
      })

      return total
    }
	},
};
</script>

<style lang="scss" scoped>
.mother-container-left-side {
	width: calc(100% - 400px);
}

.top {
	top: 8rem;
}

.flex-basis {
	flex-basis: 60%;
}
</style>