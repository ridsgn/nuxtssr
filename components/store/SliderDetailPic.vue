<template>
  <div class="thumb-example">
    <!-- swiper1 -->
    <swiper class="swiper gallery-top" :options="swiperOptionTop" ref="swiperTop">
      <swiper-slide class="slide-1"></swiper-slide>
      <swiper-slide class="slide-2"></swiper-slide>
      <swiper-slide class="slide-3"></swiper-slide>
      <swiper-slide class="slide-4"></swiper-slide>
      <swiper-slide class="slide-5"></swiper-slide>
    </swiper>
    <!-- swiper2 Thumbs -->
    <swiper class="swiper gallery-thumbs" :options="swiperOptionThumbs" ref="swiperThumbs">
      <swiper-slide class="slide-1"></swiper-slide>
      <swiper-slide class="slide-2"></swiper-slide>
      <swiper-slide class="slide-3"></swiper-slide>
      <swiper-slide class="slide-4"></swiper-slide>
      <swiper-slide class="slide-5"></swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: "swiper-example-thumbs-gallery",
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
    background-size: cover;
    background-position: center;
    &.slide-1 {
      border-radius: 8px;
      background-image: url("https://picsum.photos/380/250.jpg?random=1");
    }
    &.slide-2 {
      border-radius: 8px;
      background-image: url("https://picsum.photos/380/250.jpg?random=2");
    }
    &.slide-3 {
      border-radius: 8px;
      background-image: url("https://picsum.photos/380/250.jpg?random=3");
    }
    &.slide-4 {
      border-radius: 8px;
      background-image: url("https://picsum.photos/380/250.jpg?random=4");
    }
    &.slide-5 {
      border-radius: 8px;
      background-image: url("https://picsum.photos/380/250.jpg?random=5");
    }
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
    height: 40rem;
  }

  .swiper {
    &.gallery-top {
      height: 424px;
      width: 100%;
      margin-bottom: 1.3rem;
    }
    &.gallery-thumbs {
      height: 20%;
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
