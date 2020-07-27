<template>
  <div class="card container mx-auto bg-white max-w-sm h-card w-card rounded-lg shadow-lg">
    <div class="container mx-auto p-6">
      <div class="flex flex-col items-center">
        <div class="flex items-center justify-center w-28 h-28 rounded-full bg-secondary-50">
          <a href="#">
            <img class="w-24 h-24 rounded-full" :src="vendor.img" alt="pic" />
          </a>
        </div>
        <div class="flex flex-col justify-center items-center mt-5">
          <h1 class="font-monts font-semibold text-lg truncate tracking-tight text-secondary-500">
            <nuxt-link :to="{ name: 'vendors-slug', params: { slug:'2' } }">{{ vendor.title }}</nuxt-link>
          </h1>
          <ul class="flex items-center justify-center font-monts font-normal text-xs">
            <li>
              <a href="#">Catering</a>
            </li>
            <span class="mx-1">|</span>
            <li>
              <a href="#">{{ vendor.location }}, {{ vendor.country }}</a>
            </li>
          </ul>
          <div class="flex flex-col items-center justify-center">
            <client-only>
              <star-rating
                class="mb-1"
                :increment="0.01"
                inactive-color="#858720"
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
            <div class="mb-4 font-monts font-light text-xs">
              <a href="#">{{ vendor.review }} reviews</a>
            </div>
          </div>
          <a href="#">
            <button
              class="font-monts font-medium text-sm w-16 h-8 rounded-md bg-secondary-500 hover:bg-secondary-600"
            >{{ vendor.price }}</button>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import StarRating from "vue-star-rating";

export default {
  name: "vendor",
  components: {
    StarRating,
  },
  props: ["vendor"],
  data() {
    return {};
  },
  computed: {},
};
</script>
