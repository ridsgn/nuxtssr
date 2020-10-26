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
					<div
						class="flex flex-col items-center justify-center w-64 md:max-w-xs md:w-full"
					>
						<img
							class="w-64 h-40 max-w-xs bg-gray-300 bg-center bg-cover rounded-lg shadow-md md:w-full md:h-56"
							src="
						https://images.unsplash.com/photo-1553102674-af685bb5fe40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80;;;;;;;;
					"
						/>

						<div
							class="w-48 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64"
						>
							<h3
								class="py-2 text-sm font-bold text-center text-teal-500 uppercase md:text-base md:tracking-wide"
							>
								Alissha Bride
							</h3>

							<div
								class="flex items-center justify-between px-3 py-1 bg-gray-200 md:py-2"
							>
								<span class="font-bold text-gray-800">
									<client-only>
										<star-rating
											class="mb-1"
											:increment="0.01"
											inactive-color="#858720"
											:rating="4.2"
											:glow="10"
											:star-size="18"
											:show-rating="false"
											:rounded-corners="true"
											:read-only="true"
											:star-points="star"
										></star-rating>
									</client-only>
								</span>
								<t-tag tag-name="span">Pro</t-tag>
							</div>
						</div>
					</div>
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
			star: [23,2,14,17,0,19,10,34,7,50,23,43,38,50,36,34,46,19,31,17],
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
			width: 20rem;
		}

		.swiper-container {
			height: 18rem;
		}
	}
}
</style>