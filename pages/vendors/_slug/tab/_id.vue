<template>
  <div>
    <h2>this is vendor's id {{ $route.params.id }}</h2>
    <div class="container mx-auto px-4 mt-10">
      <h5 v-for="post in posts" :key="post.id">{{ post.title }}</h5>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      posts: "",
    };
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
    $axios,
  }) {
    const data = await $axios.$get(
      "https://jsonplaceholder.typicode.com/todos"
    );
    return { posts: data };
  },
  head() {
    return {
      title: "Vendor List",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "custom description",
        },
      ],
    };
  },
  validate({ params, query, store }) {
    return /^\d+$/.test(params.id);
  },
};
</script>

<style></style>
