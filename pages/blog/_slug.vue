<template>
  <div class="container mx-auto">
    <!-- <vendor-filter class="mt-28" theme="blog">Artikel</vendor-filter> -->
    <blog-detail class="mt-20 mb-12" :blog="detail.post" />
  </div>
</template>

<script>
import BlogDetail from "~/components/blog/BlogDetail.vue";
// import VendorFilter from '~/components/vendors/VendorFilter.vue'
export default {
  name: "BlogDetailPage",
  components: {
    // VendorFilter,
    BlogDetail
  },

  async asyncData({
    isDev,
    route,
    store,
    env,
    params,
    query,
    req,
    res,
    redirect,
    error,
    $axios
  }) {
    const detail = await $axios.$get(`blog/v1/post/${params.slug}`);
    return { detail };
  }
};
</script>
