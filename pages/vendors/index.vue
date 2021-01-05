<template>
	<div class="container flex flex-col justify-center mt-24 lg:mt-32 mx-auto">
		<client-only>

				<v-select v-model="category" class="mb-4 px-4 style-chooser" label="name" :options="categories" :clearable="false" :reduce="name => name.id" placeholder="Select Category"></v-select>
				<v-select v-model="location" class="px-4 style-chooser" label="name" :options="locations" :clearable="false" :reduce="name => name.id" placeholder="Select City"></v-select>

		</client-only>
		<t-button class="mt-4 mx-4" @click="$fetch">Search</t-button>
		<p v-if="$fetchState.pending" class="flex mt-40 w-full justify-center items-center">
      <span class="loading"></span>
    </p>
    <p v-else-if="$fetchState.error">Error while fetching mountains 🤬</p>
		<vendor-list v-else :vendors="vendors.data" :key="Math.random()"></vendor-list>
	</div>
</template>

<script>
import VendorList from "~/components/vendors/VendorList";

export default {
	name: "VendorsPage",
	components: { VendorList },
	data() {
		return {
			vendors: [],
			category: "",
			location: "",
			categories: [
				{ name: 'All Categories', 					slug: 'all',										id: ''},
				{ name: 'Boutonnieres & Corsages', 	slug: 'boutonnieres-corsages', 	id: 10},
				{ name: 'Bridal', 									slug: 'bridal',									id: 2},
				{ name: 'Catering', 								slug: 'catering',								id: 1},
				{ name: 'Dance & Choreography', 		slug: 'dance-choreography',			id: 14},
				{ name: 'Decoration & Lighting', 		slug: 'decoration',							id: 15},
				{ name: 'Dress & Attire', 					slug: 'wedding-dress',					id: 3	},
				{ name: 'Entertainment (DJ)', 			slug: 'entertainment-dj',				id: 16},
				{ name: 'Entertainment (MC)', 			slug: 'entertainment-mc',				id: 17},
				{ name: 'Entertainment (Music)', 		slug: 'entertainment-music',		id: 18},
				{ name: 'Event Rentals', 						slug: 'event-rentals',					id: 4	},
				{ name: 'Favor & Gifts', 						slug: 'wedding-gifts',					id: 19},
				{ name: 'Flowers', 									slug: 'wedding-flowers',				id: 5	},
				{ name: 'Hair & Makeup', 						slug: 'hair-makeup',						id: 20},
				{ name: 'Health & Beauty', 					slug: 'health-beauty',					id: 21},
				{ name: 'Honeymoon', 								slug: 'honeymoon',							id: 6	},
				{ name: 'Invitations', 							slug: 'invitations',						id: 9	},
				{ name: 'Jewelry', 									slug: 'jewelry',								id: 8	},
				{ name: 'Men\'s Formal Wear', 			slug: 'mens-formal-wear',				id: 22},
				{ name: 'Officiants', 							slug: 'officiants',							id: 23},
				{ name: 'Others (Unique Sercices)', slug: 'others-unique-service', 	id: 7	},
				{ name: 'Photo Booth', 							slug: 'photo-booth',						id: 24},
				{ name: 'Photography', 							slug: 'photography',						id: 25},
				{ name: 'Sweet Corner', 						slug: 'sweet-corner',						id: 26},
				{ name: 'Venue', 										slug: 'venue',									id: 27},
				{ name: 'Videography', 							slug: 'videography',						id: 28},
				{ name: 'Wedding Accessories', 			slug: 'wedding-accessories',		id: 29},
				{ name: 'Wedding Cake', 						slug: 'wedding-cake',						id: 30},
				{ name: 'Wedding Planning', 				slug: 'wedding-planning',				id: 31},
				{ name: 'Wedding Shoes', 						slug: 'wedding-shoes',					id: 32},
			],
			locations: [
				{ name: 'All Cities', id: ''},
				{ name: 'Banda Aceh', id: 20},
				{ name: 'Banyuasin', id: 40}
			]
		};
	},

	async fetch() {
		if (this.category != null || this.location != null) {
			this.vendors = await this.$axios.$get(`api/vendors?filter[category]=${this.category}&filter[vendors_name]=&filter[location]=${this.location}`)
		} else {
			this.vendors = await this.$axios.$get(`api/vendors`)
		}
	},
	// async asyncData({ $axios, error }) {
	// 	const vendors = await $axios
	// 		.$get(`api/vendors?filter[category]=&filter[vendors_name]=&filter[location]=`)
	// 		.catch((err) => {
	// 			error({ statusCode: err, message: "Error" });
	// 		});

	// 	return { vendors };
	// },
};
</script>

<style scoped>
.loading {
  display: flex;
  width: 1.5rem;
  height: 1.5rem;
  border: 4px solid rgba(9, 133, 81, 0.705);
  border-radius: 50%;
  border-top-color: #158876;
  animation: spin 1s ease-in-out infinite;
}

@keyframes spin {
  to {
    -webkit-transform: rotate(360deg);
  }
}
</style>
