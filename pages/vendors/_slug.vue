<template>
  <div class="container px-24 mx-auto">
    <div class="relative flex h-40 mt-12 bg-white border rounded-lg shadow-xl card-container">
      <div class="absolute top-0 right-0" style="top: -4px;">
        <div class="flex flex-col items-center justify-center mr-6">
          <button class="mb-4">
            <svg class="w-6 h-6" viewBox="0 0 36 36">
              <path
                class="clr-i-outline clr-i-outline-path-1"
                d="M26 34a2 2 0 0 1-1.41-.58L18 26.82l-6.54 6.52A2 2 0 0 1 8 31.93V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v28a2 2 0 0 1-2 2zm0-2V4H10v27.93L18 24z"
                fill="#ff5470"
              />
              <rect x="0" y="0" width="36" height="36" fill="rgba(0, 0, 0, 0)" />
            </svg>
          </button>
          <button>
            <svg class="w-6 h-6" viewBox="0 0 32 32">
              <path
                d="M23 20a5 5 0 0 0-3.89 1.89l-7.31-4.57a4.46 4.46 0 0 0 0-2.64l7.31-4.57A5 5 0 1 0 18 7a4.79 4.79 0 0 0 .2 1.32l-7.31 4.57a5 5 0 1 0 0 6.22l7.31 4.57A4.79 4.79 0 0 0 18 25a5 5 0 1 0 5-5zm0-16a3 3 0 1 1-3 3a3 3 0 0 1 3-3zM7 19a3 3 0 1 1 3-3a3 3 0 0 1-3 3zm16 9a3 3 0 1 1 3-3a3 3 0 0 1-3 3z"
                fill="#626262"
              />
              <rect x="0" y="0" width="32" height="32" fill="rgba(0, 0, 0, 0)" />
            </svg>
          </button>
        </div>
      </div>
      <div class="flex items-center justify-start w-1/2 p-4 pr-0">
        <div class="flex items-center justify-center w-32 h-32 mr-5 rounded-full bg-secondary-50">
          <img class="rounded-full w-28 h-28" src="https://picsum.photos/200/300/?blur" alt="pic" />
        </div>
        <div class="flex flex-col justify-between h-full p-1 pl-0">
          <div class="flex flex-col justify-start">
            <div
              class="text-2xl font-semibold leading-tight text-secondary-500"
            >Sirih Gading Catering</div>
            <div class="text-xs font-semibold text-headline">Catering</div>
            <div class="text-xs font-medium text-paragraph">Online 12 hours ago &#8739; Jakarta, ID</div>
          </div>
          <div class="flex">
            <v-button class="mr-4 text-xs tracking-wide">Send Message</v-button>
            <v-button class="text-xs tracking-wide">Vendor's Info</v-button>
          </div>
        </div>
      </div>
      <div class="mx-4 my-8 border"></div>
      <div class="flex items-center justify-start w-1/2 p-4 pl-0">
        <div class="flex items-start flex-1">
          <div class="flex flex-col items-center justify-center flex-1">
            <h1 class="text-lg font-medium">Projects Done</h1>
            <div class="text-2xl font-bold">123</div> 
            <!-- {{ response.data.hits }} -->
          </div>
          <div class="flex flex-col items-center justify-center flex-grow">
            <div class="flex-none">
              <h1 class="text-lg font-medium">Ratings</h1>
              <div class="flex flex-row">
                <div class="mr-2 text-2xl font-bold">4.9</div>
                <div>
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
                      :star-points="star"
                    ></star-rating>
                  </client-only>
                </div>
              </div>
              <div class="text-xs font-medium text-tertiary-500">
                <a class="hover:underline" href>See vendor's statistic</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-6 tab-link">
      <ul class="flex space-x-4 border-b">
        <li class="-mb-px">
          <nuxt-link
            class="inline-block px-4 py-2 font-medium text-blue-500 hover:text-tertiary-500"
            :to="{ name: 'vendors-slug' }"
            exact
          >Projects</nuxt-link>
        </li>
        <li class="-mb-px">
          <nuxt-link
            class="inline-block px-4 py-2 font-medium text-blue-500 hover:text-tertiary-500"
            :to="{ name: 'vendors-slug-store' }"
          >Store</nuxt-link>
        </li>
        <li class="-mb-px">
          <nuxt-link
            class="inline-block px-4 py-2 font-medium text-blue-500 hover:text-tertiary-500"
            :to="{ name: 'vendors-slug-review' }"
          >Reviews</nuxt-link>
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
  data() {
    return {
      star: [
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
      ],
    };
  },
  // async asyncData({ $axios, params }) {
  //   let response = await $axios.get(
  //     `http://fakeapi.jsonparseronline.com/posts/${params.slug}`
  //   );
  //   // console.log(response);
  //   // debugger;
  //   return { response };
  // },
};
</script>

<style scoped>
.nuxt-link-active {
  @apply border-tertiary-500 text-blue-800 border-b-2;
}
</style>