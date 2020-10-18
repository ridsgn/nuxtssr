<template>
	<article>
		<header class="mt-6">
			<ul class="flex space-x-4 border-b">
				<li
					class="-mb-px cursor-pointer"
					v-for="(tab, index) in tabs"
					:key="index"
				>
					<a :href="tab.href"
						:class="[
							'inline-block px-4 py-2 font-medium hover:text-teal-500',
							{ 'text-teal-500 border-teal-500 border-b-2': tab.isActive },
						]"
						@click="selectTab(tab)"
					>
						{{ tab.name }}
					</a>
				</li>
			</ul>
		</header>
		<section class="">
			<slot></slot>
		</section>
	</article>
</template>

<script>
export default {
	data() {
		return {
			tabs: [],
		};
	},
	methods: {
		selectTab(selectedTab) {
			this.tabs.forEach((tab) => {
				tab.isActive = tab.name === selectedTab.name;
			});
		},
	},
	created() {
		this.tabs = this.$children;
	},
};
</script>

<style scoped>
</style>