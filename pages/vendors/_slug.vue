<template>
  <div class="container mx-auto px-24">
    <div class="card-container flex bg-white shadow-xl rounded-lg h-40 mt-12">
      <div class="flex w-6/12 p-4 pr-0 items-center justify-start">
        <div class="flex items-center justify-center w-32 h-32 mr-5 rounded-full bg-secondary-50">
          <img class="w-28 h-28 rounded-full" src="https://picsum.photos/200/300/?blur" alt="pic" />
        </div>
        <div class="flex flex-col justify-between h-full p-1 pl-0">
          <div class="flex flex-col justify-start">
            <div
              class="font-semibold text-2xl text-secondary-500 leading-tight"
            >Sirih Gading Catering</div>
            <div class="font-semibold text-xs text-headline">Catering</div>
            <div class="font-medium text-xs text-paragraph">Online 12 hours ago | Jakarta, ID</div>
          </div>
          <div class="flex">
            <v-button class="text-xs tracking-wide mr-4">Send Message</v-button>
            <v-button class="text-xs tracking-wide">Vendor's Info</v-button>
          </div>
        </div>
      </div>
      <div class="flex w-6/12 p-4 pl-0 items-center justify-start">
        <div class="flex flex-col flex-shrink items-center justify-center">
          <h1 class="font-medium text-lg">Projects Done</h1>
          <div class="font-bold text-2xl">257</div>
        </div>
        <div class="flex flex-col flex-grow items-center justify-center">
          <h1 class="font-medium text-lg">Ratings</h1>
          <div class="flex flex-row">
            <div class="font-bold text-2xl mr-2">4.9</div>
            <div>
              <client-only>
                <star-rating
                  class="mb-1"
                  :increment="0.01"
                  :rating="4.9"
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
          <div class="font-medium text-xs text-tertiary-500">
            <a class="hover:underline" href>See vendor's statistic</a>
          </div>
        </div>
      </div>
    </div>
    <div class="tab-link mt-6">
      <ul class="flex border-b space-x-4">
        <li class="-mb-px">
          <nuxt-link
            class="inline-block py-2 px-4 text-blue-500 hover:text-tertiary-500 font-medium"
            :to="{ name: 'vendors-slug', params: { slug:'2' } }"
            exact
          >Projects</nuxt-link>
        </li>
        <li>
          <nuxt-link
            class="inline-block py-2 px-4 text-blue-500 hover:text-tertiary-500 font-medium"
            to="#over"
          >Store</nuxt-link>
        </li>
        <li>
          <nuxt-link
            class="inline-block py-2 px-4 text-blue-500 hover:text-tertiary-500 font-medium"
            to="#ha"
          >Reviews</nuxt-link>
        </li>
        <li>
          <nuxt-link
            class="inline-block py-2 px-4 text-blue-500 hover:text-tertiary-500 font-medium"
            to="#hm"
          >Tab</nuxt-link>
        </li>
      </ul>
    </div>
    <nuxt-child />
  </div>
</template>

<script>
import TheButton from "@/components/TheButton.vue";
import StarRating from "vue-star-rating";

export default {
  components: {
    "v-button": TheButton,
    StarRating,
  },
};
</script>

<style lang="scss" scoped>
</style>