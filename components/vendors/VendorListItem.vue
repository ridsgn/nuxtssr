<template>
	<div
		class="container max-w-sm mx-auto transition duration-500 ease-in-out transform bg-white rounded-lg shadow-lg cursor-pointer select-none card h-card w-card hover:-translate-y-1 hover:shadow-2xl"
	>
		<div class="container p-6 mx-auto">
			<div class="flex flex-col items-center">
				<div
					class="flex items-center justify-center bg-teal-100 rounded-full w-28 h-28"
				>
					<a href="#">
						<img class="w-24 h-24 rounded-full" :src="vendor.image" alt="pic" />
					</a>
				</div>
				<div class="flex flex-col items-center justify-center mt-5">
					<h1
						class="text-lg font-semibold tracking-tight text-teal-600 truncate"
					>
						<nuxt-link :to="`/vendors/${vendor.id}`">{{
							capitalize(vendor.name)
						}}</nuxt-link>
					</h1>
					<ul class="flex items-center justify-center text-xs font-normal">
						<li>
							<a href="#">{{ vendor.service_category }}</a>
						</li>
						<span class="mx-1">|</span>
						<li>
							<a href="#">{{ vendor.service_location }}</a>
						</li>
					</ul>
					<div class="flex flex-col items-center justify-center">
						<client-only>
							<star-rating
								class="mb-1"
								:increment="0.01"
								inactive-color="#858720"
								:rating="0"
								:glow="10"
								:star-size="18"
								:show-rating="false"
								:rounded-corners="true"
								:read-only="true"
								:star-points="star"
							></star-rating>
						</client-only>
						<div class="mb-4 text-xs font-light font-monts">
							<a href="#">{{ vendor.reviews }} reviews</a>
						</div>
					</div>
					<a :href="`/vendors/${vendor.id}`">
						<t-button class="w-24 text-xs font-semibold whitespace-no-wrap">Price List</t-button>
					</a>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import StarRating from "vue-star-rating";

export default {
	name: "VendorListItem",
	components: {
		StarRating,
	},
	props: {
		vendor: {
			required: true,
			type: Object,
		},
	},
	data() {
		return {
			star: [
				23,
				2,
				14,
				17,
				0,
				19,
				10,
				34,
				7,
				50,
				23,
				43,
				38,
				50,
				36,
				34,
				46,
				19,
				31,
				17,
			],
		};
	},
	methods: {
		capitalize(value) {
			return value.replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase())));
		}
	},
};
</script>
