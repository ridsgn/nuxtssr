<template>
	<div class="thumb-example">
		<!-- swiper1 -->
		<swiper
			class="swiper gallery-top"
			:options="swiperOptionTop"
			ref="swiperTop"
		>
			<swiper-slide v-for="(item, index) in oneProduct.image" :key="index" :alt="item" :style="{ backgroundImage: 'url(' + item + ')' }"></swiper-slide>
			<!-- <swiper-slide class="slide-2" :style="slide2"></swiper-slide>
			<swiper-slide class="slide-3" :style="slide3"></swiper-slide>
			<swiper-slide class="slide-4" :style="slide4"></swiper-slide>
			<swiper-slide class="slide-5" :style="slide5"></swiper-slide> -->
		</swiper>
		<!-- swiper2 Thumbs -->
		<swiper
			class="swiper gallery-thumbs"
			:options="swiperOptionThumbs"
			ref="swiperThumbs"
		>
			<swiper-slide v-for="(item, index) in oneProduct.image" :key="index" :alt="item" :style="{ backgroundImage: 'url(' + item + ')' }"></swiper-slide>
			<!-- <swiper-slide class="slide-2"></swiper-slide>
			<swiper-slide class="slide-3"></swiper-slide>
			<swiper-slide class="slide-4"></swiper-slide>
			<swiper-slide class="slide-5"></swiper-slide> -->
		</swiper>
	</div>
</template>

<script>
export default {
	name: "StoreDetailImage",
	title: "Thumbs gallery with Two-way control",
	data() {
		return {
			swiperOptionTop: {
				loop: true,
				loopedSlides: 5, // looped slides should be the same
				spaceBetween: 10,
			},
			swiperOptionThumbs: {
				loop: true,
				loopedSlides: 5, // looped slides should be the same
				spaceBetween: 10,
				centeredSlides: true,
				slidesPerView: "auto",
				touchRatio: 0.2,
				slideToClickedSlide: true,
      },
      radius: 8
		};
	},
	mounted() {
		this.$nextTick(() => {
			const swiperTop = this.$refs.swiperTop.$swiper;
			const swiperThumbs = this.$refs.swiperThumbs.$swiper;
			swiperTop.controller.control = swiperThumbs;
			swiperThumbs.controller.control = swiperTop;
		});
	},
};
</script>

<style lang="scss" scoped>
.thumb-example {
  height: 15.5625rem;
}
.swiper {
	.swiper-slide {
		background-size: contain;
		background-position: center;
		background-repeat: no-repeat;
	}
	&.gallery-top {
		height: 100%;
		width: 80%;
		margin-bottom: 1.3rem;
	}
	&.gallery-thumbs {
		height: 30%;
		box-sizing: border-box;
		padding: 2px 0;
	}
	&.gallery-thumbs .swiper-slide {
		width: 20%;
		height: 100%;
		opacity: 0.4;
	}
	&.gallery-thumbs .swiper-slide-active {
		opacity: 1;
	}
}

@media (min-width: 1024px) {
	.thumb-example {
		height: auto;
	}

	.swiper {
		&.gallery-top {
			height: 500px;
			width: 100%;
			margin-bottom: 1.3rem;
		}
		&.gallery-thumbs {
			height: 160px;
			box-sizing: border-box;
			padding: 2px 0;
		}
		&.gallery-thumbs .swiper-slide {
			width: 20%;
			height: 100%;
			opacity: 0.4;
		}
		&.gallery-thumbs .swiper-slide-active {
			opacity: 1;
		}
	}
}
</style>
