<template>
	<div class="mt-6">
		<!-- image wrapper -->
		<div class="flex items-center justify-center rounded-lg">
			<nuxt-link :to="{ name: 'stores-vendor-slug', params: { slug: product.slug } }">
				<img
					class="rounded-lg"
					:src="product.image"
					alt="store image"
				/>
			</nuxt-link>
		</div>

		<!-- title wrapper -->
		<div class="flex flex-col p-2">
			<div class="flex min-w-0 mb-4">
				<div class="flex flex-col min-w-0 leading-normal">
					<h1 class="font-medium tracking-tight">
						{{ product.name }}
					</h1>
					<p class="text-xs tracking-tight truncate">
						by
						<span class="font-bold">Amana</span> &sdot; Engagement Package
						awdawdawd
					</p>
				</div>
				<button
					class="flex items-center justify-end flex-grow flex-shrink-0 ml-4"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						xmlns:xlink="http://www.w3.org/1999/xlink"
						aria-hidden="true"
						focusable="false"
						width="1.5em"
						height="1.5em"
						style="
							-ms-transform: rotate(360deg);
							-webkit-transform: rotate(360deg);
							transform: rotate(360deg);
						"
						preserveAspectRatio="xMidYMid meet"
						viewBox="0 0 32 32"
					>
						<g
							fill="none"
							stroke="#626262"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
						>
							<path
								d="M4 16C1 12 2 6 7 4s8 2 9 4c1-2 5-6 10-4s5 8 2 12s-12 12-12 12s-9-8-12-12z"
							/>
						</g>
						<rect x="0" y="0" width="32" height="32" fill="rgba(0, 0, 0, 0)" />
					</svg>
				</button>
			</div>
			<div class="flex min-w-0">
				<div class="flex flex-col min-w-0 leading-none">
					<p class="mb-1 text-xs font-thin line-through">IDR 25.000.000</p>
					<h1 class="text-xl font-semibold tracking-wide">
						IDR {{ price(product.price) }}
					</h1>
				</div>
				<div
					class="flex items-end justify-end flex-grow flex-shrink-0 ml-4 text-xs"
				>
					<button
						class="flex items-center justify-center text-teal-500 hover:underline"
					>
						<span class="text-xs font-medium leading-none">Details</span>
						<svg class="w-5 ml-1" viewBox="0 0 32 32">
							<path
								d="M22 16L12 26l-1.4-1.4l8.6-8.6l-8.6-8.6L12 6z"
								fill="#38b2ac"
							/>
						</svg>
					</button>
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
			required: true,
		},
	},
	methods: {
		price(value) {
			const formatter = new Intl.NumberFormat("id-ID", {
				style: "decimal",
				currency: "IDR",
			});

			return formatter.format(value);
		},
	},
};
</script>

<style lang="scss" scoped>
</style>
