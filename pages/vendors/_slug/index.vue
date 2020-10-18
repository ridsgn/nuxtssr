<template>
	<div class="container mx-auto mt-32">
		<!-- vendor detail card -->
		<DetailCard :vendor="data" />
		<!-- vendor tab nav -->
		<VTabs>
			<VTab name="Projects" :selected="true">
				<VendorProjects :vendor="data" />
			</VTab>
			<VTab name="Stores">
				<VendorStores :vendor="data"/>
			</VTab>
			<VTab name="Reviews">
				<VendorReviews :vendor="data"/>
			</VTab>
		</VTabs>
		<pre>{{ data }}</pre>
	</div>
</template>

<script>
export default {
	name: "VendorDetailPage",
	data() {
		return {
			selected: "home",
		};
	},
	async asyncData({
		isDev,
		route,
		store,
		env,
		params,
		query,
		req,
		res,
		redirect,
		error,
		$axios,
	}) {
		const data = await $axios.$get(
			`http://fakeapi.jsonparseronline.com/posts/${params.slug}`
		);

		return { data };
	},
	methods: {
		setSelected(tab) {
			this.selected = tab;
		},
	},
};
</script>

<style lang="scss" scoped>
</style>