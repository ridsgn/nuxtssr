<template>
	<div class="grid grid-cols-4 grid-rows-2 gap-6 mt-12 mb-12">
    <vendor-store-list v-for="(item, index) in 4" :key="index"></vendor-store-list>
  </div>
</template>

<script>
export default {
	props: {
		vendor: {
			type: Object,
			required: true,
		},
	},
};
</script>

<style scoped>
</style>