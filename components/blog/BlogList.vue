<template>
  <div class="my-4 space-y-4">
    <article
      v-for="blog in data"
      :key="blog.id"
      class="card p-4 lg:p-8 bg-white md:rounded md:shadow-lg max-w-4xl"
    >
      <div class="card__header mb-1 lg:mb-2">
        <figure
          class="card__figure lg:h-80 md:h-36 w-full rounded-md bg-gray-500"
        >
          <img
            :src="blog.featured_image"
            alt=""
            class="card__image lg:h-full md:h-36 w-full rounded-md object-cover object-center"
          />
        </figure>
      </div>
      <div class="card__body">
        <div class="flex items-center flex-wrap">
          <h2
            class="card__category font-crete text-xs lg:text-base text-hw-brown inline-flex items-center"
          >
            Honeymoon Destination
          </h2>
          <span
            class="text-gray-400 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm py-1 border-gray-200"
          >
            <svg
              class="w-4 h-4 mr-1"
              stroke="currentColor"
              stroke-width="2"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              viewBox="0 0 24 24"
            >
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
              <circle cx="12" cy="12" r="3"></circle></svg
            >{{ blog.views }}
          </span>
          <!-- <span
            class="text-gray-400 inline-flex items-center leading-none text-sm"
          >
            <svg
              class="w-4 h-4 mr-1"
              stroke="currentColor"
              stroke-width="2"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              viewBox="0 0 24 24"
            >
              <path
                d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"
              ></path></svg
            >6
          </span> -->
        </div>
        <h3 class="card__subtitle text-gray-600 text-xs mb-3">
          oleh {{ blog.author }} <strong>|</strong> {{ $date(blog.updated_at) }}
        </h3>
        <nuxt-link
          :to="`/blog/${blog.slug}`"
          class="card__title font-calistoga lg:text-2xl capitalize"
        >
          {{ blog.title }}
        </nuxt-link>
        <p
          class="card__copy text-gray-500 text-sm lg:text-base line-clamp-4 lg:line-clamp-3"
        >
          {{ blog.summary }}
        </p>
      </div>
      <footer class="card__footer hidden lg:block">
        <div class="card__actions text-right pt-4 px-4">
          <nuxt-link :to="`/blog/${blog.slug}`">
            <button class="button">Read more...</button>
          </nuxt-link>
        </div>
      </footer>
    </article>
  </div>
</template>

<script>
export default {
  name: "BlogList",
  props: {
    data: {
      type: Array,
      required: true
    }
  }
};
</script>
