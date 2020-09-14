<template>
  <swiper class="swiper" :options="swiperOption">
    <swiper-slide v-for="item in items" :key="item.id">
      <content-card></content-card>
    </swiper-slide>
  </swiper>
</template>

<script>
import ContentCard from "@/components/store/ContentCard";

export default {
  components: {
    ContentCard
  },
  data() {
    return {
      // newDisplay: false,
      items: [1, 2, 3, 4, 5, 6, 7, 8],
      swiperOption: {
        slidesPerView: "auto",
        spaceBetween: 24,
        slidesOffsetBefore: 14,
        slidesOffsetAfter: 14,
        breakpoints: {
          640: {
            slidesOffsetBefore: 80,
            slidesOffsetAfter: 80
          }
        }
      }
    };
  }
  // methods: {
  //   onResize() {
  //     console.log(window.innerWidth);
  //     if (window.innerWidth > 640) {
  //       this.newDisplay = true;
  //     } else {
  //       this.newDisplay = false;
  //     }
  //   }
  // },
  // created() {
  //   window.addEventListener("resize", this.onResize);
  // },
  // beforeDestroy() {
  //   window.removeEventListener("resize", this.onResize);
  // }
};
</script>

<style scoped>
.swiper-slide {
  width: 267px;
}

.swiper-container {
  height: 100%;
}
</style>
