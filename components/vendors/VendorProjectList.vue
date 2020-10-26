<template>
	<div
		class="relative rounded-lg shadow card-img"
		@click.prevent
		@mouseenter="isHover = true"
		@mouseleave="isHover = false"
	>
		<a href="#">
			<img
				class="rounded-lg"
				src="https://picsum.photos/500/500"
				alt="project image"
			/>
		</a>
		<div
			class="absolute bottom-0 left-0 w-full h-20 bg-white border-2 border-gray-400 rounded-b-lg"
			v-bind:class="[isHover ? activeClass : inactiveClass]"
		>
			<div class="flex w-full h-full p-2">
				<div class="flex flex-col items-start justify-between">
					<nuxt-link
						to="#"
						class="w-9/12 text-sm font-medium leading-tight text-teal-500"
						>Mini Wedding di Medina Cafe & Bistro</nuxt-link
					>
					<div class="flex justify-between w-full">
						<h4 class="text-xs font-medium tracking-tight">
							Sirih Gading Catering
						</h4>
						<div class="text-xs font-medium text-gray-500">Catering</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			isHover: false,
			activeClass: ["block", "z-10"],
			inactiveClass: "hidden",
		};
	},
};
</script>

<style scoped>
.card-img {
}
</style>