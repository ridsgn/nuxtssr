<template>
	<div class="example">
		<!-- component: only render Swiper on browser env -->
		<div id="container">
			{{ text }}
		</div>
		<client-only>
			<swiper
				ref="carousel"
				class="swiper"
				:options="swiperOptions"
				@clickSlide="onSwiperClickSlide"
			>
				<!-- @ready="onSwiperRedied"
				@slideChangeTransitionStart="onSwiperSlideChangeTransitionStart" -->
				<swiper-slide v-for="test in 6" :key="test">
					<!-- item 1 -->
					<div class="w-full mb-6 select-none">
						<div class="relative pb-64">
							<a href="#" class="cursor-pointer">
								<img
									class="absolute object-cover w-full h-full border-b rounded-lg shadow-md cursor-pointer"
									src="https://images.unsplash.com/photo-1574920162043-b872873f19c8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=80"
									alt="product name"
								/>
							</a>
						</div>

						<div class="relative px-4 -mt-16">
							<div class="bg-white border rounded-lg shadow-lg">
								<div class="p-5">
									<div class="flex items-center justify-between">
										<div class="text-xs opacity-75">
											<a class="hover:underline" href="#"> Apple </a>
										</div>

										<span
											class="px-3 py-1 text-xs text-red-500 bg-red-200 rounded-full select-none"
										>
											Out Of Stock
										</span>
									</div>

									<a
										class="block mt-2 text-lg font-medium text-gray-800 truncate hover:underline"
										href="#"
									>
										Apple Airpods
									</a>
								</div>

								<div class="flex items-center justify-between px-4 pb-3">
									<div>
										<div class="text-lg text-gray-800">
											<span class="font-medium">$249</span>
										</div>
									</div>

									<div>
										<a
											class="flex items-center text-xs text-indigo-600 btn-link hover:underline"
											href="#"
										>
											View Product &rarr;
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>

					<!-- item 2 -->

					<!-- item 3 -->
				</swiper-slide>
			</swiper>
		</client-only>
		<!-- directive: render origin html on server & render Swiper on browser -->
		<!-- You can get the swiper instance object in current component context by the name: "mySwiper"  -->
		<!-- <div
      class="swiper"
      v-swiper:myDirectiveSwiper="swiperOptions"
      @ready="onSwiperRedied"
      @click-slide="onSwiperClickSlide"
      @slide-change-transition-start="onSwiperSlideChangeTransitionStart"
    >
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="index in 6" :key="index">
          <span>Slide {{ index }}</span>
        </div>
      </div>
      <div class="swiper-pagination swiper-pagination-bullets"></div>
    </div> -->
	</div>
</template>

<script>
import StarRating from "vue-star-rating";

export default {
	name: "CardStoreSlider",
	components: {
		StarRating,
	},
	props: {
		label: {
			required: true,
			type: String,
		},
		offsetBefore: {
			required: true,
			type: Number,
		},
	},
	data() {
		return {
			text: this.label,
			swiperOptions: {
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
		height: 14rem;
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