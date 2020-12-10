<template>
  <div class="py-4 pl-3 pr-6 bg-white border rounded-md shadow-md card">
    <div class="flex">
      <img
        class="w-12 h-12 mr-4 rounded-full"
        src="https://picsum.photos/100/100.jpg"
        alt="ava"
      />
      <div class="flex flex-col flex-1 min-w-0">
        <div class="flex items-center justify-between mb-4">
          <div class="flex flex-col leading-tight">
            <p class="text-base font-medium">{{ review.username }}</p>
            <span class="text-xs italic font-medium text-gray-400">{{
              review.time
            }}</span>
          </div>
          <div class="flex">
            <div>
              <client-only>
                <star-rating
                  class="mb-1"
                  inactive-color="#858720"
                  :rating="review.rating"
                  :glow="10"
                  :star-size="18"
                  :show-rating="false"
                  :rounded-corners="true"
                  :read-only="true"
                  :star-points="[
                    23,
                    2,
                    14,
                    17,
                    0,
                    19,
                    10,
                    34,
                    7,
                    50,
                    23,
                    43,
                    38,
                    50,
                    36,
                    34,
                    46,
                    19,
                    31,
                    17,
                  ]"
                ></star-rating>
              </client-only>
            </div>
          </div>
        </div>
        <h1 class="mb-4 text-xs italic font-bold">{{ review.title }}</h1>
        <p class="flex flex-wrap text-xs font-normal tracking-tight text-justify">
          {{ review.review }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import StarRating from "vue-star-rating";

export default {
  components: {
    StarRating,
  },
  props: {
    review: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped></style>
