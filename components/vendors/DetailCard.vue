<template>
	<div>
		<div
			class="flex max-w-full mx-auto overflow-hidden bg-white rounded-lg shadow-lg"
		>
			<img class="w-32" :src="vendor.image" />

			<div class="flex flex-col w-6/12 p-4 md:p-4">
				<h1 class="text-2xl font-bold text-gray-900">{{ vendor.name }}</h1>

				<p class="text-sm font-medium text-gray-600">{{ vendor.category }}</p>

				<p class="mt-1 text-xs text-gray-500">
					Online 12 hours ago | Jakarta, ID
				</p>

				<div class="flex self-start flex-1 mt-4 space-x-4 place-items-end">
					<t-button class="text-xs font-semibold">Message Vendor</t-button>
					<t-button @click="showModal = true" class="text-xs font-semibold"
						>Vendor's Info</t-button
					>
				</div>
			</div>
			<div class="mx-4 my-8 border"></div>
			<div class="flex w-6/12 p-4 md:p-4">
				<div class="flex items-center justify-start flex-1 w-1/2">
					<div class="flex items-start flex-1">
						<div class="flex flex-col items-center justify-center">
							<h1 class="text-lg font-medium">Real Wedding</h1>
							<div class="text-2xl font-bold">{{ vendor.projects.length }}</div>
						</div>
						<div class="flex flex-col items-center justify-center flex-grow">
							<div class="flex-none">
								<h1 class="text-lg font-medium">Ratings</h1>
								<div class="flex flex-row">
									<div class="mr-2 text-2xl font-bold">
										{{ vendor.rating }}
									</div>
									<div>
										<client-only>
											<star-rating
												class="mb-1"
												:increment="0.01"
												inactive-color="#858720"
												:rating="vendor.rating"
												:glow="10"
												:star-size="18"
												:show-rating="false"
												:rounded-corners="true"
												:read-only="true"
												:star-points="star"
											></star-rating>
										</client-only>
									</div>
								</div>
								<!-- <div class="text-xs font-medium text-teal-500">
									<a class="hover:underline" href>See vendor's statistic</a>
								</div> -->
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<t-modal v-model="showModal" variant="clean">
			<template v-slot:header>
				<p class="capitalize">{{ vendor.name }}'s Info</p>
			</template>
			Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic, laboriosam
			quibusdam. Odio debitis id esse libero voluptates doloribus modi assumenda
			impedit repellat, vel, nostrum totam deleniti laborum quas unde eos.
		</t-modal>
	</div>
</template>

<script>
import StarRating from "vue-star-rating";

export default {
	name: "DetailCard",
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
			showModal: false,
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
};
</script>

<style scoped>
</style>