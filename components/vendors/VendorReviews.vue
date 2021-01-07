<template>
  <div>
    <div
      v-if="myReview"
      class=" bg-white hover:bg-gray-100 cursor-pointer border rounded-md shadow-md card mt-6 relative"
    >
    <div class="">
      <div class="py-4 pl-3 pr-6">
        <div class="flex">
          <img
            class="w-12 h-12 mr-4 rounded-full"
            :src="`https://ui-avatars.com/api/?background=38b2ac&color=fff&name=${myReview.username}`"
            alt="ava"
          />
          <div class="flex flex-col flex-1 min-w-0">
            <div class="flex items-center justify-between mb-4">
              <div class="flex flex-col leading-tight">
                <p class="text-base font-medium">{{ myReview.username }}</p>
                <span class="text-xs italic font-medium text-gray-400">{{
                  myReview.time
                }}</span>
              </div>
              <div class="flex">
                <div>
                  <client-only>
                    <star-rating
                      class="mb-1"
                      inactive-color="#858720"
                      :rating="myReview.rating"
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
            <h1 class="mb-4 text-xs italic font-bold">{{ myReview.title }}</h1>
            <p
              class="flex flex-wrap text-xs font-normal tracking-tight text-justify"
            >
              {{ myReview.review }}
            </p>
          </div>
        </div>
      </div>
    </div>
    </div>
    <div
      v-else
      class="max-w-sm px-4 py-4 mx-auto mt-6 bg-white rounded-lg shadow-lg"
    >
      <div class="w-full px-4">
        <h3 class="font-medium tracking-tight">Review this vendor</h3>
        <p class="py-1 text-sm text-gray-700">
          give your opinion about this vendor.
        </p>
        <button
          class="px-3 py-1 mt-2 text-gray-800 bg-gray-100 border border-gray-400 rounded"
          @click="$modal.show('review', reviews[1])"
        >
          write a review
        </button>
      </div>
    </div>

    <!-- Modal Review -->
    <ValidationObserver ref="form" v-slot="{ invalid }">
      <t-modal name="review" @before-open="onBeforeOpen" variant="clean">
        <template v-slot:header>
          Review a Vendor
          <div class="flex w-full mt-2">
            <star-rating
              class="mx-auto"
              padding="1"
              inactive-color="#858720"
              v-model="rating.rating"
              :glow="10"
              :star-size="24"
              :show-rating="false"
              :rounded-corners="true"
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
          </div>
        </template>
        <form action="">
          <div class="flex justify-center mb-4 space-x-4">
            <ValidationProvider
              class="flex-grow"
              rules="required"
              v-slot="{ errors, classes }"
            >
              <label
                class="block mb-2 text-xs font-medium text-gray-600"
                for="Title"
                placeholder="Review Title"
                >Title</label
              >
              <div class="content" :class="classes">
                <input
                  id="Recipient Name"
                  v-model="rating.title"
                  class="w-full px-3 py-2 text-xs leading-none border border-gray-300 rounded outline-none border-box focus:border-teal-500"
                  type="text"
                  :class="classes"
                />
                <span>{{ errors[0] }}</span>
              </div>
            </ValidationProvider>
          </div>
          <div class="flex justify-center space-x-4">
            <ValidationProvider
              class="flex-1"
              rules="required"
              v-slot="{ errors, classes }"
            >
              <label
                class="block mb-2 text-xs font-medium text-gray-600"
                for="Your Review"
                >Your Review</label
              >
              <div class="content" :class="classes">
                <textarea
                  id="Address"
                  v-model="rating.body"
                  class="w-full px-3 py-2 text-xs leading-none border border-gray-300 rounded outline-none border-box focus:border-teal-500"
                  type="text"
                  :class="classes"
                  maxlength="200"
                ></textarea>
                <span>{{ errors[0] }}</span>
              </div>
            </ValidationProvider>
          </div>
        </form>
        <template v-slot:footer>
          <div class="flex justify-between">
            <t-button variant="outline" type="button"> Cancel</t-button>
            <t-button
              @click="process()"
              :disabled="invalid || rating.rating === 0"
              :variant="{ disabled: invalid || rating.rating === 0 }"
              >Submit</t-button
            >
          </div>
        </template>
      </t-modal>
    </ValidationObserver>

    <!-- Review List -->
    <div class="block lg:grid grid-flow-row-dense grid-cols-2 gap-6 mt-12 mb-12">
      <vendor-review-list
        v-for="review in publishedReview"
        :key="review.id"
        :review="review"
      ></vendor-review-list>
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
    reviews: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      rating: {
        id: undefined,
        title: undefined,
        body: undefined,
        rating: 0,
      },
    };
  },
  methods: {
    onBeforeOpen({ params, cancel }) {
      // you can add a condition to cancel the modal opening
      if (false) {
        cancel();
      }

      this.rating.id = params;
    },
    async process() {
      try {
        this.$modal.hide("review");
        await this.$axios.$post("/api/review", {
          id_vendor: this.rating.id,
          title: this.rating.title,
          review: this.rating.body,
          rating: this.rating.rating,
        });
        window.location.reload(true);
      } catch (e) {
        //
      }
    },
  },

  computed: {
    publishedReview() {
      return this.reviews[0].filter((review) => {
        return (
          review.user_id !== this.$auth.user.id && review.status === "publish"
        );
      });
    },

    myReview() {
      const review = this.reviews[0].filter((review) => {
        return review.user_id === this.$auth.user.id;
      });

      return review[0];
    },
  },
};
</script>

<style scoped></style>
