<template>
	<div class="container flex justify-center mx-auto mt-32">
		<VendorList :vendors="vendors"></VendorList>
	</div>
</template>

<script>
export default {
  name: "VendorsPage",
	data() {
		return {};
	},
	async asyncData({ $axios, error }) {
		const vendors = await $axios
			.$get("https://my-json-server.typicode.com/rizuki96/jsontest/vendors")
			.catch((err) => {
				error({ statusCode: err, message: "Error" });
			});
		// console.log(vendors);
		// debugger;
		return { vendors };
	},
};
</script>

<style lang="scss" scoped>
</style>