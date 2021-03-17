<template>
	<div class="container flex mx-auto mt-32">
		<div class="flex-shrink-0 w-3/12 mb-10 mr-10 ------left-side">
			<div class="sticky top">
				<div class="absolute top-0 left-0 bottom-auto right-auto z-10 w-full">
					<div class="relative">
						<div class="translate-y-0 opacity-100">
							<div class="space-y-4">
								<section
									class="relative p-0 m-0 overflow-visible bg-white rounded-md shadow"
								>
									<div class="p-4">
										<div
											class="flex flex-col items-center flex-grow flex-shrink-0"
										>
											<img
												src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
												alt="avatar"
												class="w-32 rounded-full"
											/>
											<h1 class="mt-2 text-lg font-semibold">
												M Rizky Firmansyah
											</h1>
											<p class="text-xs font-normal text-gray-500">The Groom</p>
										</div>
									</div>
								</section>
								<section
									class="relative p-0 m-0 overflow-visible bg-white rounded-md shadow"
								>
									<div class="p-12">
										<ul class="items-center space-y-4">
											<li v-for="(user, index) in users" :key="index">
												<nuxt-link
													:to="'/user/' + user.slug"
													exact
													class="flex-none font-medium hover:text-teal-500"
													>{{ user.title }}</nuxt-link
												>
											</li>
										</ul>
									</div>
								</section>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="------right-side">
			<div class="min-h-full p-4 bg-white rounded-md shadow">
				<NuxtChild :key="$route.params.slug" />
			</div>
		</div>
		<!-- <div class="relative flex w-full">
			<div>
				<div
					class="absolute left-0 flex flex-col flex-grow flex-shrink-0 max-w-xs mr-4 space-y-4 left-content"
				>
					<div
						class="flex flex-col items-center flex-grow flex-shrink-0 max-w-xs px-4 py-4 bg-white rounded-md shadow"
					>
						<img
							src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
							alt="avatar"
							class="w-32 rounded-full"
						/>
						<h1 class="mt-2 text-lg font-semibold">M Rizky Firmansyah</h1>
						<p class="text-xs font-normal text-gray-500">The Groom</p>
					</div>
					<div
						class="flex flex-col flex-grow flex-shrink-0 max-w-xs px-12 py-12 bg-white rounded-md shadow-xs"
					>
						<ul class="items-center space-y-4">
							<li v-for="(user, index) in users" :key="index">
								<nuxt-link
									:to="'/user/' + user.slug"
									exact
									class="flex-none font-medium hover:text-teal-500"
									>{{ user.title }}</nuxt-link
								>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div class="flex flex-grow w-40 right-content">
				<div
					class="items-center flex-grow px-4 py-4 bg-white rounded-md shadow"
				>
					<NuxtChild :key="$route.params.slug" />
				</div>
			</div>
		</div> -->
	</div>
</template>

<script>
export default {
	data() {
		return {
			users: [
				{ title: "Account Information", slug: "account" },
				{ title: "Notification", slug: "notif" },
				{ title: "Password & Security", slug: "password" },
				{ title: "Payment History", slug: "history" },
			],
		};
	},
};
</script>

<style lang="scss" scoped>
.top {
	top: 8rem;
}

.------right-side {
	width: calc(100% - 360px);
}

.nuxt-link-active {
	box-sizing: border-box;
	position: relative;
	display: block;
	transform: scale(var(--ggs, 1));

	&:after {
		content: "";
		display: block;
		box-sizing: border-box;
		position: absolute;
		width: 10px;
		height: 10px;
		border-bottom: 2px solid;
		border-right: 2px solid;
		transform: rotate(-45deg);
		right: 6px;
		top: 7px;
	}
}
</style>
