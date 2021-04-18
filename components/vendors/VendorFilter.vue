<template>
  <div class="py-6 xl:py-8 px-10 bg-white shadow-md rounded-3xl">
    <div class="xl:flex space-y-4 xl:space-y-0 xl:space-x-4 text-sm">
      <!-- <div class="xl:flex xl:flex-grow xl:w-2/6 relative">
        <input
          type="text"
          class="xl:flex-grow w-full px-8 xl:px-12 py-3 bg-hw-gray rounded-xl focus:outline-none focus:shadow-outline"
          placeholder="Search..."
        />
        <div class="absolute top-0 flex items-center h-full ml-2 xl:ml-4">
          <svg class="w-6 text-gray-400 fill-current" viewBox="0 0 24 24">
            <path
              class="hericon-ui"
              d="M16.32 14.9l5.39 5.4a1 1 0 01-1.42 1.4l-5.38-5.38a8 8 0 111.41-1.41zM10 16a6 6 0 100-12 6 6 0 000 12z"
            />
          </svg>
        </div>
      </div> -->
      <client-only>
        <v-select
          v-model="category"
          label="name"
          class="style-chooser flex-1 order-first"
          :options="categories"
          title="Temukan vendor terbaik berdasarkan category"
          placeholder="Temukan vendor terbaik berdasarkan category"
          @input="setCategory"
        />
        <v-select
          v-if="isVendor"
          v-model="rating"
          class="style-chooser xl:w-1/6"
          :options="options"
          placeholder="Rating"
          @input="setRating"
        />
        <v-select
          v-if="isVendor || isLanding"
          v-model="city"
          label="city_name"
          class="style-chooser xl:w-1/6"
          :options="cities"
          placeholder="City"
          @input="setCity"
        />
      </client-only>
      <app-button variant="warning" @click="$emit('filter-vendor')"
        >Cari <slot>vendor</slot></app-button
      >
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import AppButton from '../AppButton.vue'

export default {
  components: { AppButton },
  props: {
    theme: {
      type: String,
      default: 'vendor',
      validator(value) {
        return ['vendor', 'landing', 'blog'].includes(value)
      },
    },
  },

  async fetch() {
    const response = await fetch(
      'https://dev.happywedding.id/api/city'
    ).then((res) => res.json())

    await fetch(
      'https://dev.happywedding.id/api/service/category'
    ).then((res) => res.json().then((json) => (this.categories = json.data)))

    this.cities = response.data
  },

  data() {
    return {
      rating: null,
      category: null,
      city: null,
      cities: [],
      categories: [],
      options: ['foo', 'bar', 'baz'],
    }
  },

  computed: {
    isVendor() {
      return this.theme === 'vendor'
    },
    isLanding() {
      return this.theme === 'landing'
    },
  },

  methods: {
    ...mapMutations({
      setCity: 'search/setCity',
      setCategory: 'search/setCategory',
      setRating: 'search/setRating',
    }),
  },
}
</script>
