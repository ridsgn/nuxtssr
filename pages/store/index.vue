<template>
  <div>
    <v-banner></v-banner>
    <div class="my-10 sm:my-20">
      <v-slider-card :number="80"></v-slider-card>
    </div>
  </div>
</template>

<script>
import TheBanner from "@/components/TheBanner";
import Slider from "@/components/store/SliderComponent"

export default {
  name: "swiper-nuxt",
  components: {
    "v-banner": TheBanner,
    "v-slider-card": Slider,
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
</style>
