<template>
	<div class="example">
		<p id="container">{{ label }}</p>
		<client-only>
			<swiper
				ref="carousel"
				class="swiper"
				:options="options"
				@clickSlide="onSwiperClickSlide"
			>
				<swiper-slide v-for="product in products" :key="product.id">
					<store-list-slider :product="product"/>
				</swiper-slide>
			</swiper>
		</client-only>
	</div>
</template>

<script>
export default {
	name: "StoreList",
	props: {
		label: {
			required: true,
			type: String,
		},
		offsetBefore: {
			required: true,
			type: Number,
		},
		products: {
			required: true,
			type: Array
		}
	},
	data() {
		return {
			options: {
				slidesPerView: "auto",
				spaceBetween: 24,
				slidesOffsetBefore: 14,
				slidesOffsetAfter: 14,
				breakpoints: {
					640: {
						slidesOffsetBefore: this.offsetBefore,
						slidesOffsetAfter: 80,
					},
				},
			},
		};
	},
	methods: {
		onSwiperRedied(swiper) {
			console.log("Swiper redied!", swiper);
		},
		onSwiperSlideChangeTransitionStart() {
			console.log("SwiperSlideChangeTransitionStart!");
		},
		onSwiperClickSlide(index, reallyIndex) {
			console.log("Swiper click slide!", index);
		},
	},
};
</script>

<style lang="scss" scoped>
.example {
	.swiper-slide {
		width: 16rem;
	}

	.swiper-container {
		height: 16rem;
	}
}

#container {
	@apply ml-6 font-bold text-2xl mb-4 mt-10;
}

@media (min-width: 640px) {
	.example {
		.swiper-slide {
			width: 26rem;
		}

		.swiper-container {
			height: 22rem;
		}
	}
}
</style>