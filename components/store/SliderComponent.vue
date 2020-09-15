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
  props: {
    number: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      // number: null,
      items: [1, 2, 3, 4, 5, 6, 7, 8],
      swiperOption: {
        slidesPerView: "auto",
        spaceBetween: 24,
        slidesOffsetBefore: 14,
        slidesOffsetAfter: 14,
        breakpoints: {
          640: {
            slidesOffsetBefore: this.number,
            slidesOffsetAfter: 80
          }
        }
      }
    };
  },


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
