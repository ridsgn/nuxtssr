<template>
	<div class="home">
		<div class="banner">
      <div class="banner__section bg-cover">
			  <div class="overlay absolute inset-0 bg-center bg-cover"></div>
        <div class="wrapper absolute inset-0 w-full mx-auto">
          <div class="left__section text-white px-4 pt-16 w-full relative">
            <p class="mb-4">Wujudkan pernikahan bahagia bersama <span class="font-semibold">Happy Wedding</span></p>
            <div class="text-3xl font-display font-bold leading-tight">20K+ Curated Vendors</div>
            <div class="benefits mb-16"></div>
            <div class="btn__wrap space-y-4">
              <t-button :to="{ name: 'auth-login' }" class="w-full font-bold">Sign Up or Login</t-button>
              <t-button variant="outline" class="w-full font-bold">Learn More</t-button>
            </div>
          </div>
        </div>
      </div>
		</div>
		<div class="relative inline-block w-full">
			<img src="~/assets/blue-bg.png" alt="ahay" class="float-right" />
      <!-- <div class="ooyy"></div> -->
		</div>
	</div>
</template>

<script>
export default {
  auth: false,
	layout: "landing",
};
</script>

<style scoped>
.overlay {
	background-image: url("../assets/photo.png");
}

.banner__section {
  background-image: url("../assets/heroimg.png");
  background-position: 50% center;
}

.banner__section, .overlay {
  height: 568px;
}

/* .ooyy {
  background-image: url("../assets/blue-bg.png");
} */

/* .center {
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
	z-index: 1;
} */
@media (min-width: 768px) {
  .banner__section, .overlay {
    height: 100vh;
  }
}

</style>
