<template>
	<div class="container flex flex-col justify-center mx-auto">
		<the-dropdown :data="categories"></the-dropdown>
		<vendor-list :vendors="vendors.data" :key="Math.random()"></vendor-list>
	</div>
</template>

<script>
import VendorList from "~/components/vendors/VendorList";
import TheDropdown from "~/components/TheDropdown";
export default {
	name: "VendorsPage",
	components: { VendorList, TheDropdown },
	data() {
		let vendors;
		return {
			vendors,
			categories: [
				{ name: 'All Categories', 					slug: 'all' },
				{ name: 'Boutonnieres & Corsages', 	slug: 'boutonnieres-corsages' },
				{ name: 'Bridal', 									slug: 'bridal' },
				{ name: 'Catering', 								slug: 'catering' },
				{ name: 'Dance & Choreography', 		slug: 'dance-choreography' },
				{ name: 'Decoration & Lighting', 		slug: 'decoration' },
				{ name: 'Dress & Attire', 					slug: 'wedding-dress' },
				{ name: 'Entertainment (DJ)', 			slug: 'entertainment-dj' },
				{ name: 'Entertainment (MC)', 			slug: 'entertainment-mc' },
				{ name: 'Entertainment (Music)', 		slug: 'entertainment-music' },
				{ name: 'Event Rentals', 						slug: 'event-rentals' },
				{ name: 'Favor & Gifts', 						slug: 'wedding-gifts' },
				{ name: 'Flowers', 									slug: 'wedding-flowers' },
				{ name: 'Hair & Makeup', 						slug: 'hair-makeup' },
				{ name: 'Health & Beauty', 					slug: 'health-beauty' },
				{ name: 'Honeymoon', 								slug: 'honeymoon' },
				{ name: 'Invitations', 							slug: 'invitations' },
				{ name: 'Jewelry', 									slug: 'jewelry' },
				{ name: 'Men\'s Formal Wear', 			slug: 'mens-formal-wear' },
				{ name: 'Officiants', 							slug: 'officiants' },
				{ name: 'Others (Unique Sercices)', slug: 'others-unique-service' },
				{ name: 'Photo Booth', 							slug: 'photo-booth' },
				{ name: 'Photography', 							slug: 'photography' },
				{ name: 'Sweet Corner', 						slug: 'sweet-corner' },
				{ name: 'Venue', 										slug: 'venue' },
				{ name: 'Videography', 							slug: 'videography' },
				{ name: 'Wedding Accessories', 			slug: 'wedding-accessories' },
				{ name: 'Wedding Cake', 						slug: 'wedding-cake' },
				{ name: 'Wedding Planning', 				slug: 'wedding-planning' },
				{ name: 'Wedding Shoes', 						slug: 'wedding-shoes' },
			]
		};
	},
	async asyncData({ $axios, error }) {
		const vendors = await $axios
			.$get("/vendors")
			// .then(res => console.log(res))
			.catch((err) => {
				error({ statusCode: err, message: "Error" });
			});

		return { vendors };
	},
};
</script>

<style lang="scss" scoped>
</style>
