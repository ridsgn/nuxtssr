<template>
  <div class="flex justify-evenly">
    <article
      v-for="(image, index) in images"
      :key="index"
      class="max-w-xs p-5 bg-white shadow-md card"
    >
      <div class="card__header">
        <figure class="card__figure">
          <img
            :src="require(`~/assets/${image}`)"
            alt=""
            class="w-full bg-cover card__image"
          />
        </figure>
      </div>
      <div class="card__body">
        <h2 class="mt-4 font-calistoga card__title">Depok Vendor Permai</h2>
        <h3 class="card__subtitle">Card Subtitle</h3>
        <p class="mt-2 text-sm card__copy">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, mollis
          non donec sollicitudin.
        </p>
      </div>
    </article>
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
    }
  },
}
</script>

<style scoped>
.card {
  width: 297px;
  height: 364px;
}

.card,
img {
  border-radius: 30px 10px;
}
</style>
