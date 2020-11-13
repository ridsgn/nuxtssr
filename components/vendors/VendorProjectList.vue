<template>
	<div>
		<div
			class="inline rounded-lg card-img"
			@click.prevent
			@mouseenter="isHover = true"
			@mouseleave="isHover = false"
			@click="isHover = false"
		>
			<div class="relative">
				<VuePureLightbox :thumbnail="project.image" :images="project.images" />

				<div
					class="absolute bottom-0 left-0 w-full h-20 bg-white rounded-b-lg"
					v-bind:class="[isHover ? activeClass : inactiveClass]"
				>
					<div class="flex w-full h-full p-2">
						<div class="flex flex-col items-start justify-between w-full">
							<nuxt-link
								to="#"
								class="w-9/12 font-semibold leading-tight text-teal-500 text-md"
								>{{ project.title }}</nuxt-link
							>
							<div class="flex justify-between w-full">
								<h4 class="text-xs font-medium tracking-tight text-gray-800">
									{{ project.name }}
								</h4>
								<div class="text-xs font-medium text-gray-500">
									{{ project.category }}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import VuePureLightbox from "vue-pure-lightbox";
import styles from "vue-pure-lightbox/dist/VuePureLightbox.css";

export default {
	components: { VuePureLightbox },
	data() {
		return {
			isHover: false,
			activeClass: ["block", "z-10"],
			inactiveClass: "hidden",
		};
	},
	props: {
		project: {
			type: Object,
			required: true,
		},
	},
};
</script>

<style>
.lightbox {
	z-index: 9999;
}
.lightbox__thumbnail img {
	border-radius: 0.5rem;
}
.lightbox__element {
	width: 50em;
}
</style>