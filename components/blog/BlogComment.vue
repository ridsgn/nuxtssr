<template>
  <div class="mt-4">
    <section class="flex items-center justify-between">
      <h1 class="font-semibold text-lg">Comments</h1>
      <button @click="getComments" class="text-xs lg:text-base underline">
        view all comment
      </button>
    </section>
    <div class="w-full flex items-center justify-center py-4">
      <span v-if="loading" class="loading"></span>
    </div>
    <section
      v-if="!isEmpty"
      class="grid grid-flow-row-dense divide-y grid-cols-1 lg:divide-y-0 bg-white lg:bg-transparent lg:gap-6 mt-2 mb-10 space-y-2 lg:space-y-0"
    >
      <article
        v-for="item in comments"
        :key="item.id"
        class="pt-2 lg:py-10 lg:px-8 lg:my-0 lg:mr-0 lg:bg-white lg:shadow-lg lg:rounded-2xl"
      >
        <div class="flex">
          <figure
            class="w-10 h-10 md:w-16 md:h-16 xl:w-24 xl:h-24 justify-center md:mr-2 lg:mr-4 mr-4"
          >
            <img
              src="https://ui-avatars.com/api/?background=random&color=fff&name=Rizky+Firmansyah"
              alt="Rizky Firmansyah"
              class="w-10 h-10 md:w-16 md:h-16 xl:w-24 xl:h-24 rounded-full"
            />
          </figure>
          <section class="flex-shrink w-11/12">
            <header class="flex justify-between mb-2">
              <div class="text-xs lg:text-lg leading-tight">
                <h1 class="font-semibold capitalize">{{ item.name }}</h1>
              </div>
              <p class="text-xs font-normal text-gray-500 lg:text-sm">
                {{ $date(item.created_at) }}
              </p>
              <!-- <client-only>
                <star-rating
                  class="xl:mb-1 -ml-1"
                  :increment="0.01"
                  inactive-color="#858720"
                  :rating="4"
                  :glow="10"
                  :star-size="16"
                  :show-rating="false"
                  :rounded-corners="true"
                  :read-only="true"
                ></star-rating>
              </client-only> -->
            </header>
            <div class="flex text-xs lg:block line-clamp-2">
              <p class="lg:text-sm">
                <!-- <span class="font-black capitalize">
                  {{ item.title }}&nbsp;
                </span> -->
                <span class="text-gray-700">{{ item.comment }}</span>
              </p>
            </div>
          </section>
        </div>
      </article>
    </section>
    <section class="flex lg:block">
      <div class="max-w-xs lg:max-w-full mr-2 lg:mr-0 flex-1">
        <textarea
          v-model="comment"
          type="text"
          name="comment"
          class="py-2 px-4 w-full h-10 lg:h-40 border border-gray-400 rounded-md text-sm lg:mb-2"
          placeholder="Write your comment.."
        />
      </div>
      <div>
        <app-button
          @click="postComment"
          class="text-white bg-hw-brown lg:float-right"
          >Submit</app-button
        >
      </div>
    </section>
  </div>
</template>

<script>
import AppButton from "../AppButton.vue";
export default {
  components: { AppButton },
  props: {
    slug: {
      type: String,
      required: true
    }
  },

  data() {
    return {
      loading: false,
      comment: "",
      comments: []
    };
  },

  computed: {
    isEmpty() {
      return !this.comments.length;
    }
  },

  methods: {
    async getComments() {
      if (this.isEmpty) {
        this.loading = true;
        this.comments = await this.ambilData();
        this.loading = false;
      }
    },

    async ambilData() {
      return await fetch(
        `https://dev.happywedding.id/api/comment/blog/${this.slug}`
      ).then(res => res.json().then(json => json.data));
    },

    async postComment() {
      if (this.$auth.loggedIn && this.comment !== "") {
        await this.$axios
          .$post("api/comment/store", {
            article_id: this.slug,
            comment: this.comment
          })
          .then(res => this.$toast.success(res.message).goAway(2000))
          .then(window.location.reload());
      }
    }
  }
};
</script>

<style scoped>
.loading {
  display: flex;
  width: 1.5rem;
  height: 1.5rem;
  border: 4px solid rgba(9, 133, 81, 0.705);
  border-radius: 50%;
  border-top-color: #158876;
  animation: spin 1s ease-in-out infinite;
}
</style>
