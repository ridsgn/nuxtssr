<template>
	<div class="container flex flex-col justify-center mx-auto mt-32">
		<the-dropdown></the-dropdown>
		<vendor-list :vendors="vendors" :key="Math.random()"></vendor-list>
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
		};
	},
	async asyncData({ $axios, error }) {
		const vendors = await $axios
			.$get("https://my-json-server.typicode.com/rizuki96/jsontest/vendors")
			.catch((err) => {
				error({ statusCode: err, message: "Error" });
			});

		return { vendors };
	},
};
</script>

<style lang="scss" scoped>
</style>
