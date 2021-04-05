<template>
  <div class="ide">
    <client-only>
      <swiper ref="carousel" class="swiper" :options="swiperOptions">
        <swiper-slide v-for="(image, index) in images" :key="index">
          <article
            class="card__blog p-4 lg:p-8 bg-white md:rounded md:shadow-lg"
          >
            <div class="card__header mb-1 lg:mb-2">
              <figure
                class="card__figure lg:h-64 xl:h-auto md:h-36 w-full rounded-md bg-gray-500"
              >
                <img
                  :src="require(`~/assets/${image}`)"
                  alt=""
                  class="card__image lg:h-full md:h-36 w-full rounded-md object-cover object-center"
                />
              </figure>
            </div>
            <div class="card__body">
              <div class="flex items-center flex-wrap">
                <h2
                  class="card__category font-crete text-sm lg:text-base text-hw-brown inline-flex items-center"
                >
                  Honeymoon Destination
                </h2>
                <span
                  class="text-gray-400 mr-2 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-2 py-1 border-r-2 border-gray-200"
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
                      d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"
                    ></path>
                    <circle cx="12" cy="12" r="3"></circle></svg
                  >1.2K
                </span>
                <span
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
                </span>
              </div>
              <h3 class="card__subtitle text-gray-600 text-xs mb-3">
                20 Sept, 2020
              </h3>
              <nuxt-link
                :to="`/blogs/1`"
                class="card__title font-calistoga capitalize line-clamp-1 mb-1"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </nuxt-link>
              <p
                class="card__copy text-gray-500 text-sm lg:text-lg line-clamp-4 lg:line-clamp-3 xl:line-clamp-2"
              >
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos ad
                blanditiis totam labore accusamus. Eaque, modi enim error
                possimus eius obcaecati facere molestias tenetur magni animi
                dolore fugiat accusamus cupiditate.
              </p>
            </div>
          </article>
        </swiper-slide>
      </swiper>
    </client-only>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [
        'pexels-castorly-stock-3641059.png',
        'pexels-andrea-piacquadio-3755706.png',
        'pexels-craig-adderley-2306281.png',
        'pexels-brent-keane-1702373.png',
      ],
      swiperOptions: {
        slidesPerView: 'auto',
        slidesOffsetBefore: 150,
        slidesOffsetAfter: 20,
        spaceBetween: 16,
      },
    }
  },
}
</script>

<style scoped>
.card__blog {
  border-radius: 30px 10px;
  width: 516px;
  height: auto;
  overflow: hidden;
}

.swiper-slide {
  width: auto;
}

.ide .swiper.swiper-container .swiper-wrapper .swiper-slide,
.ide .swiper.swiper-container .swiper-wrapper,
.ide .swiper.swiper-container,
.ide {
  height: calc(100% + 15px);
}
</style>
