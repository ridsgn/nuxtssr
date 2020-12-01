<template>
	<div>
		<div class="relative w-full">
			<div
				class="absolute text-6xl text-center text-white center font-garamond"
			>
				Wujudkan Pernikahan yang Happy bersama Happy Wedding
			</div>
			<div class="absolute inset-0 w-full bg-center bg-contain img"></div>
			<img
				class="w-full bg-center bg-contain"
				src="~/assets/heroimg.png"
				alt="img"
			/>
		</div>
		<div class="relative inline-block w-full">
			<img src="~/assets/blue-bg.png" alt="ahay" class="float-right" />
      <!-- <div class="ooyy"></div> -->
		</div>
	</div>
</template>

<script>
export default {
	layout: "landing",
};
</script>

<style scoped>
.img {
	background-image: url("../assets/photo.png");
}

.ooyy {
  background-image: url("../assets/blue-bg.png");
}

.center {
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
	z-index: 1;
}
</style>