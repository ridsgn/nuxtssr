<template>
  <div class="card py-4 pl-3 pr-6 shadow-md rounded-md border">
    <div class="flex">
      <img class="w-12 h-12 mr-4 rounded-full" src="https://picsum.photos/100/100.jpg" alt="ava" />
      <div class="flex flex-1 min-w-0 flex-col">
        <div class="flex justify-between items-center mb-4">
          <div class="flex flex-col leading-tight">
            <p class="font-medium text-base">Leonardus Eric</p>
            <span class="font-medium italic text-gray-400 text-xs">24 June 2020, 18:07 WIB</span>
          </div>
          <div class="flex">
            <div>
              <client-only>
                <star-rating
                  class="mb-1"
                  inactive-color="#858720"
                  :rating="3"
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
                  17
                ]"
                ></star-rating>
              </client-only>
            </div>
          </div>
        </div>
        <h1 class="font-bold italic text-xs mb-4">Mantull</h1>
        <p
          class="flex flex-wrap font-normal text-xs text-justify tracking-tight"
        >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde, dolores. Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
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
};
</script>

<style scoped>
</style>