<template>
  <div class="block">
    <div class="relative w-full h-auto hero">
      <div class="absolute max-w-6xl text-white center font-garamond">
        <div class="text-center">
          <div class="text-6xl font-semibold">
            <p class="inline">Wujudkan Pernikahan yang Happy bersama</p>
            <span class="font-bold">Happy Wedding</span>
          </div>
          <!-- <AppButton class="w-full font-bold tracking-wide bg-hw-brown"
            >Sign Up</AppButton
          >
          <AppButton
            class="w-full font-bold tracking-wide text-hw-brown border-2 border-hw-brown"
            >Login</AppButton
          > -->
        </div>
      </div>
      <div class="absolute inset-0 w-full bg-center bg-contain img"></div>
      <div class="block">
        <img
          class="object-cover w-full h-screen"
          src="~/assets/heroimg.png"
          alt="img"
        />
      </div>
    </div>

    <div class="relative">
      <div class="absolute center1 z-10 w-1/2">
        <VendorFilter class="" theme="landing" @filter-vendor="haha" />
      </div>
      <div class="blue-img">
        <div class="relative h-full">
          <img
            class="absolute top-0 right-0 w-2/3 lg:w-1/5"
            src="~/assets/leaves-tr.png"
            alt="leaves1"
          />
          <img
            class="absolute leaves-2"
            src="~/assets/leaves-tl.png"
            alt="leaves2"
          />
          <img
            class="absolute leaves-3"
            src="~/assets/leaves-b.png"
            alt="leaves3"
          />
        </div>
      </div>
      <div class="container relative mx-auto">
        <div class="featured-vendor">
          <div class="relative flex items-center justify-center h-full">
            <div class="w-full">
              <div
                class="mb-16 text-4xl font-bold leading-tight text-center text-hw-brown font-garamond"
              >
                Featured Vendor
              </div>
              <div class="">
                <FeaturedVendor />
              </div>
            </div>
          </div>
        </div>

        <div class="review">
          <div class="relative flex items-center justify-between w-full">
            <img
              class="absolute flex-none leaves-4"
              src="~/assets/img/reviews/leaves-t.png"
              alt="leaves4"
            />
            <img
              class="absolute flex-none leaves-5"
              src="~/assets/img/reviews/leaves-r.png"
              alt="leaves5"
            />
            <img
              class="absolute flex-none leaves-6"
              src="~/assets/img/reviews/leaves-l.png"
              alt="leaves6"
            />
            <div class="px-4 max-w-md">
              <div
                v-if="$device.isMobile"
                class="w-full grid place-items-center mb-8"
              >
                <img
                  class="h-auto w-3/4"
                  src="~/assets/img/reviews/review.png"
                  alt="img"
                />
              </div>
              <div class="mb-8 text-3xl text-hw-brown font-upright">
                Tentang Happy Wedding
              </div>
              <div class="text space-y-4">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus
                  nibh volutpat feugiat imperdiet. Ornare faucibus pulvinar
                  nulla viverra purus, ut habitant et.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus
                  nibh volutpat feugiat imperdiet. Ornare faucibus pulvinar
                  nulla viverra purus, ut habitant et.
                </p>
              </div>
              <button
                type="button"
                class="px-20 py-4 mt-12 text-white outline-none font-crete bg-hw-teal btn shadow-hw-shadow"
              >
                Learn More
              </button>
            </div>
            <div v-if="!$device.isMobile" class="flex">
              <div class="relative card__tumpuk">
                <div class="w-full">
                  <img
                    class="absolute top-0 right-0 card-1 card__image"
                    src="~/assets/img/reviews/pexels-natasha-fernandez-759668.png"
                    alt="leaves4"
                  />
                  <img
                    class="absolute card-2 card__image"
                    src="~/assets/img/reviews/pexels-tae-fuller-1616113.png"
                    alt="leaves5"
                  />
                  <img
                    class="absolute card-3 card__image"
                    src="~/assets/img/reviews/alif-f-nurhanda-2qsmezj9WEA-unsplash.png"
                    alt="leaves6"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="featured-vendor">
          <div
            class="relative flex flex-col items-center justify-center h-full"
          >
            <div class="w-full">
              <div
                class="mb-10 text-4xl font-bold leading-tight font-garamond text-hw-brown"
              >
                Ide Pernikahan
              </div>
            </div>
            <div class="screen">
              <ide-pernikahan />
            </div>
          </div>
        </div>
      </div>
      <div class="blue-img bottom"></div>
    </div>
  </div>
</template>

<script>
export default {
  auth: false,
  methods: {
    haha() {
      alert('hayoloo')
    },
  },
}
</script>

<style scoped>
.screen {
  width: calc(100vw - 24px);
}

.blue-img {
  background-image: url('../assets/blue-bg.png');
  background-repeat: no-repeat;
  background-position: right top;
  position: absolute;
  height: 810px;
  width: 100%;
}

.card__subtitle {
  margin-top: 11px;
  font-size: 14px;
}

.btn {
  border-radius: 20px 5px;
}

.blue-img.bottom {
  -webkit-transform: scaleX(-1);
  transform: scaleX(-1);
  bottom: 0;
  z-index: -1;
}

.featured-vendor {
  position: relative;
  height: 810px;
  width: 100%;
}

.leaves-2 {
  top: 60px;
}

.leaves-3 {
  bottom: -65px;
  right: 0;
}

.leaves-4 {
  top: -45px;
  left: -50px;
}

.leaves-5 {
  bottom: 40px;
  left: -65px;
  z-index: -1;
}

.leaves-6 {
  bottom: -30px;
  left: 220px;
}

.card-2 {
  left: 0;
  top: 50%;
  transform: translateY(-50%);
}

.card-3 {
  bottom: 0;
  right: 20%;
}

.card {
  border-radius: 30px 10px;
  width: 297px;
  height: 364px;
}

.card__blog {
  border-radius: 30px 10px;
  width: 516px;
  height: 486px;
}

.card__tumpuk {
  width: 704px;
  height: 526px;
}

.card__image {
  border-radius: 30px 10px;
}

.review {
  min-height: 858px;
  position: relative;
  display: flex;
}

.img {
  background-image: url('../assets/overlay.png');
}

.center {
  width: 100%;
  padding: 0 20px;
  left: 50%;
  top: 40%;
  transform: translate(-50%, -50%);
  z-index: 1;
}

.center1 {
  top: 0;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
