<template>
  <div class="container mx-auto">
    <!-- <LazyMobileTab v-if="$device.isMobile" /> -->
    <vendor-filter class="mt-28" theme="blog">Artikel</vendor-filter>
    <div class="md:flex justify-center">
      <blog-list :data="posts" />
      <!-- <div class="md:mt-4 md:ml-5 md:w-1/3 md:border-l-2">
        <app-card theme="featured" :item="images" />
      </div> -->
    </div>
  </div>
</template>

<script>
import BlogList from '~/components/blog/BlogList.vue'
// import AppCard from '~/components/card/AppCard.vue'
import VendorFilter from '~/components/vendors/VendorFilter.vue'
export default {
  components: { VendorFilter, BlogList },

  computed: {
    posts() {
      return this.$store.state.inspiration.posts
    },
  },

  created() {
    this.$store.dispatch('inspiration/getBlogList')
  },
}
</script>