<template>
	<div>
    {{ vendor.content }}
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