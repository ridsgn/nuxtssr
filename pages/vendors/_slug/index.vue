<template>
	<div class="container mx-auto mt-32">
		<!-- vendor detail card -->
		<DetailCard :vendor="data" />
		<!-- vendor tab nav -->
		<tabs class="mt-8">
			<tab title="Projects">
				<LazyVendorProjects :projects="data.projects" />
			</tab>
			<tab title="Stores">
				<LazyVendorStores :products="data.products" />
			</tab>
			<tab title="Reviews">
				<LazyVendorReviews :reviews="[data.reviews, data.id]" />
			</tab>
		</tabs>
		<!-- <pre>{{ this.$route.params.slug }}</pre> -->
	</div>
</template>

<script>
import { Tabs, Tab } from "vue-slim-tabs";

export default {
	components: {
		Tabs,
		Tab,
	},
	name: "VendorDetailPage",
	data() {
		return {};
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
		const data = await $axios.$get(`api/vendor/${params.slug}`);
		return data;
	},
	methods: {
		setSelected(tab) {
			this.selected = tab;
		},
	},
};
</script>

<style>
.vue-tablist {
	@apply font-medium text-sm;
	list-style: none;
	display: flex;
	padding-left: 0;
	border-bottom: 1px solid #38b2ac;
}

.vue-tab {
	padding: 5px 10px;
	margin: 0 2px;
	cursor: pointer;
	user-select: none;
	border: 1px solid transparent;
	border-bottom-color: #38b2ac;
	border-radius: 3px 3px 0 0;
	background-color: white;
	position: relative;
	bottom: -1px;
}

.vue-tab[aria-selected="true"] {
	@apply border-teal-500 text-teal-500;
	padding: 6px 12px;
	border-bottom-color: transparent;
}

.vue-tab[aria-disabled="true"] {
	cursor: not-allowed;
	color: #999;
}
</style>