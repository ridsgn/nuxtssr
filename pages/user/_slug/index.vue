<template>
	<div class="container min-h-screen mx-auto mt-32">
		<div class="flex w-full">
			<div class="flex flex-col flex-grow flex-shrink-0 max-w-xs mr-4 space-y-4 left-content">
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
					class="flex flex-col flex-grow flex-shrink-0 max-w-xs px-12 py-12 space-y-4 bg-white rounded-md shadow-xs"
				>
					<div class="items-center">
						<nuxt-link :to="{ query: { tab: 'account' } }" exact class="flex-none font-medium hover:text-teal-500"
							>Account Information</nuxt-link
						>
					</div>
					<div class="items-center">
						<nuxt-link :to="{ query: { tab: 'notif' } }" exact class="font-medium hover:text-teal-500">Notification</nuxt-link>
					</div>
					<div class="items-center">
						<nuxt-link :to="{ query: { tab: 'pass' } }" exact class="font-medium hover:text-teal-500">Password & Security</nuxt-link>
					</div>
					<div class="items-center">
						<nuxt-link :to="{ query: { tab: 'payment' } }" exact class="font-medium hover:text-teal-500">Payment History</nuxt-link>
					</div>
				</div>
			</div>
			<div class="flex flex-grow right-content">
				<div class="items-center flex-grow px-4 py-4 bg-white rounded-md shadow">
					adasd
					sefsefefe
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
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