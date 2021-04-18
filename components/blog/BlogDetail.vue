<template>
  <div class="p-4 lg:p-0 lg:py-4">
    <div class="lg:flex border-b-2 border-gray-600">
      <section class="flex-1 lg:mr-4 pb-4">
        <article class="mb-4">
          <h1 class="font-semibold text-lg lg:text-2xl">{{ blog.title }}</h1>
          <h5 class="font-crete text-hw-brown">Honeymoon Destination</h5>
          <h6 class="text-xs">{{ $date(blog.created_at) }}</h6>
          <div class="mt-2 blog" v-html="blog.body"></div>
        </article>
        <div class="text-sm inline">
          <span class="font-semibold no-underline mr-2">Related:</span>
          <ul class="space-x-1 text-xs">
            <li class="inline">Wedding Inspiration,</li>
            <li class="inline">Real Wedding,</li>
            <li class="inline">Blog,</li>
            <li class="inline">Dress</li>
          </ul>
        </div>
        <div class="text-sm inline">
          <span class="font-semibold mr-2">Credit to vendors:</span>
          <ul class="space-x-1 text-xs">
            <li class="inline">Wedding Inspiration,</li>
            <li class="inline">Real Wedding,</li>
            <li class="inline">Blog,</li>
            <li class="inline">Dress</li>
          </ul>
        </div>
      </section>
      <!-- <aside v-if="!$device.isMobile">test</aside> -->
    </div>
    <section>
      <blog-comment :slug="blog.id" />
    </section>
  </div>
</template>

<script>
import BlogComment from "./BlogComment.vue";
export default {
  components: { BlogComment },
  props: {
    blog: {
      type: Object,
      required: true
    }
  }
};
</script>

<style lang="scss">
.blog {
  p,
  h3 {
    margin-top: 16px;
  }

  ol {
    list-style: decimal;
    margin-left: 2rem;
    padding-top: 1rem;
  }
  
  .embedded_image {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-top: 1rem;
    padding-bottom: 1rem;

    img{
      align-self: center;
    }

    p {
      text-align: center;
    }
  }
}
</style>
