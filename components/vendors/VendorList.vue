<template>
	<div>
		<div class="grid justify-center grid-cols-none gap-5 mt-20 sm:grid-cols-card-2 lg:grid-cols-card-3 xl:grid-cols-card-4">
			<VendorListItem
				v-for="vendor in vendors"
				:vendor="vendor"
				:key="vendor.id"
			/>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		vendors: {
			required: true,
			type: Array,
		},
	},
};
</script>

<style scoped>

</style>