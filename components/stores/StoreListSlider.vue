<template>
	<div>
		<div class="w-full mb-6 select-none">
			<div class="relative pb-64">
				<a href="#" class="cursor-pointer">
					<img
						class="absolute object-cover w-full h-40 border-b rounded-lg shadow-md cursor-pointer md:h-full"
						src="https://picsum.photos/160/160"
						:alt="product.name"
					/>
				</a>
			</div>

			<div class="relative px-2 -mt-32 md:px-4 md:-mt-16">
				<div class="bg-white border rounded-lg shadow-lg">
					<div class="px-4 pt-3 md:p-5">
						<div class="flex flex-wrap items-center justify-between">
							<nuxt-link
								class="block max-w-xs overflow-hidden text-sm font-medium leading-tight text-gray-800 lg:text-base hover:underline trunk"
								:to="{ name: 'stores-slug', params: { slug: product.slug } }"
							>
								{{ capitalize(product.name) }}
							</nuxt-link>

							<span
								class="hidden px-3 py-1 text-xs text-red-500 bg-red-200 rounded-full select-none"
							>
								Out Of Stock
							</span>
						</div>

						<div class="mt-px text-xs opacity-75">
							<a class="hover:underline" href="#"> Happy Wedding ID </a>
						</div>
					</div>

					<div class="flex items-center justify-between px-4 pb-3 mt-3 md:mt-1">
						<div>
							<div class="text-lg text-gray-800">
								<span class="font-semibold">IDR {{ price(product.price) }}</span>
							</div>
						</div>

						<div>
							<a
								class="flex items-center text-xs text-indigo-600 btn-link hover:underline"
								href="#"
							>
								Details &rarr;
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "StoreListSlider",
	props: {
		product: {
			required: true,
			type: Object,
		},
	},
	data() {
		return {};
	},
	methods: {
		price(value) {
			const formatter = new Intl.NumberFormat('id-ID', {
				style: 'decimal',
				currency: 'IDR',
			});

			return formatter.format(value);
		},
		capitalize(value) {
			return value.replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase())));
		}
	},
};
</script>

<style lang="scss" scoped>
.trunk {
	max-height: 3rem;
	display: -webkit-box;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
}

@media (min-width: 640px) {
	.trunk {
		max-height: 3.5rem;
		// min-height: 2.5rem;
	}
}
</style>
