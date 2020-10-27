<template>
	<div class="fixed top-0 z-50 w-full bg-white">
		<header class="border-b">
			<div
				class="container flex flex-row items-center justify-between px-4 py-3 mx-auto xl:px-6"
			>
				<div class="flex flex-row items-start">
					<a class="block md:hidden" href="#">
						<svg
							class="w-auto h-8"
							fill="none"
							viewBox="0 0 35 32"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fill="#fde24f"
								d="M15.258 26.865a4.043 4.043 0 01-1.133 2.917A4.006 4.006 0 0111.253 31a3.992 3.992 0 01-2.872-1.218 4.028 4.028 0 01-1.133-2.917c.009-.698.2-1.382.557-1.981.356-.6.863-1.094 1.47-1.433-.024.109.09-.055 0 0l1.86-1.652a8.495 8.495 0 002.304-5.793c0-2.926-1.711-5.901-4.17-7.457.094.055-.036-.094 0 0A3.952 3.952 0 017.8 7.116a3.975 3.975 0 01-.557-1.98 4.042 4.042 0 011.133-2.918A4.006 4.006 0 0111.247 1a3.99 3.99 0 012.872 1.218 4.025 4.025 0 011.133 2.917 8.521 8.521 0 002.347 5.832l.817.8c.326.285.668.551 1.024.798.621.33 1.142.826 1.504 1.431a3.902 3.902 0 01-1.504 5.442c.033-.067-.063.036 0 0a8.968 8.968 0 00-3.024 3.183 9.016 9.016 0 00-1.158 4.244zM19.741 5.123c0 .796.235 1.575.676 2.237a4.01 4.01 0 001.798 1.482 3.99 3.99 0 004.366-.873 4.042 4.042 0 00.869-4.386 4.02 4.02 0 00-1.476-1.806 3.994 3.994 0 00-5.058.501 4.038 4.038 0 00-1.175 2.845zM23.748 22.84c-.792 0-1.567.236-2.226.678a4.021 4.021 0 00-1.476 1.806 4.042 4.042 0 00.869 4.387 3.99 3.99 0 004.366.873A4.01 4.01 0 0027.08 29.1a4.039 4.039 0 00-.5-5.082 4 4 0 00-2.832-1.18zM34 15.994c0-.796-.235-1.574-.675-2.236a4.01 4.01 0 00-1.798-1.483 3.99 3.99 0 00-4.367.873 4.042 4.042 0 00-.869 4.387 4.02 4.02 0 001.476 1.806 3.993 3.993 0 002.226.678 4.003 4.003 0 002.832-1.18A4.04 4.04 0 0034 15.993z"
							/>
							<path
								fill="#fde24f"
								d="M5.007 11.969c-.793 0-1.567.236-2.226.678a4.021 4.021 0 00-1.476 1.807 4.042 4.042 0 00.869 4.386 4.001 4.001 0 004.366.873 4.011 4.011 0 001.798-1.483 4.038 4.038 0 00-.5-5.08 4.004 4.004 0 00-2.831-1.181z"
							/>
						</svg>
					</a>
					<a class="hidden md:block" href="/">
						<h1 class="flex text-xl font-semibold font-poppins sm:text-2xl">
							Happy Wedding
						</h1>
					</a>
				</div>
				<div class="flex items-center mt-0">
					<div class="relative ml-4">
						<input
							type="text"
							class="w-full px-3 py-1 pl-8 text-sm bg-gray-100 rounded-md text-main focus:outline-none focus:shadow-outline sm:w-64"
							placeholder="Search..."
						/>
						<div class="absolute top-0 flex items-center h-full ml-2">
							<svg class="w-4 text-gray-400 fill-current" viewBox="0 0 24 24">
								<path
									class="hericon-ui"
									d="M16.32 14.9l5.39 5.4a1 1 0 01-1.42 1.4l-5.38-5.38a8 8 0 111.41-1.41zM10 16a6 6 0 100-12 6 6 0 000 12z"
								/>
							</svg>
						</div>
					</div>
					<div
						class="relative ml-4"
						@mouseenter="cart = true"
						@mouseleave="cart = false"
					>
						<div
							v-show="itemCount"
							class="absolute top-0 right-0 px-1 -mt-1 -mr-2 text-xs font-bold text-white bg-red-700 rounded-full"
						>
							{{ itemCount }}
						</div>
						<button
							class="p-1 pl-1 text-gray-400 transition duration-150 ease-in-out border-2 border-transparent rounded-full hover:text-paragraph focus:outline-none"
							aria-label="Cart"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="1.5em"
								height="1.5em"
								preserveAspectRatio="xMidYMid meet"
								viewBox="0 0 24 24"
								style="
									-ms-transform: rotate(360deg);
									-webkit-transform: rotate(360deg);
									transform: rotate(360deg);
								"
							>
								<path
									d="M10 20a2 2 0 1 1 0-4a2 2 0 0 1 0 4zm7 0a2 2 0 1 1 0-4a2 2 0 0 1 0 4zM3.962 5.923a.962.962 0 0 1 0-1.923h1.151c.902 0 1.682.626 1.878 1.506l1.253 5.642c.196.88.976 1.506 1.878 1.506h7.512l1.442-5.77H9.731a.962.962 0 0 1 0-1.922h9.345a1.923 1.923 0 0 1 1.866 2.39L19.5 13.12a1.923 1.923 0 0 1-1.866 1.457h-7.512a3.846 3.846 0 0 1-3.755-3.012L5.113 5.923H3.962z"
									fill="currentColor"
								/>
							</svg>
						</button>
						<div
							v-show="cart"
							class="absolute right-0 z-50 rounded-md shadow-lg"
							@mouseenter="cart = true"
							@mouseleave="cart = false"
						>
							<div
								class="flex flex-col pb-4 pl-4 bg-white rounded-md shadow-xs"
								role="menu"
								aria-orientation="vertical"
								aria-labelledby="user-menu"
							>
								<ul
									class="flex flex-col items-center flex-grow py-4 pr-4 space-y-4"
									:class="
										isEmptyCart ? '' : 'max-h overflow-hidden overflow-y-scroll'
									"
								>
										<li
											v-for="item in carts"
											:key="item.product.id"
											@click="cart = false"
											class="flex p-4 transition duration-500 ease-in-out transform bg-gray-200 rounded-md cursor-pointer select-none hover:-translate-y-1 hover:shadow-lg"
										>
											<nuxt-link
												:to="{
													name: 'stores-slug',
													params: { slug: item.product.slug },
												}"
												class="flex"
												@click="cart = false"
											>
												<img
													class="flex items-center justify-center flex-shrink-0 w-10 h-10 mr-4 bg-gray-300 rounded-md"
													:src="item.product.img"
                          :alt="item.product.title"
												/>
												<div class="flex max-w-sm">
													<div>
														<div class="text-sm font-medium truncate max">
															{{ item.product.title }}
														</div>
														<div class="flex justify-between flex-grow-0">
															<div class="text-xs text-gray-600">
																{{ item.quantity * 100 }} pax
															</div>
															<div class="self-center text-xs text-gray-600">
																&times; {{ item.afterDiscount }}
															</div>
														</div>
													</div>
												</div>
											</nuxt-link>
											<div
												class="self-center w-4 h-4 ml-16 text-red-700 rounded-full cursor-pointer hover:bg-red-200"
												@click="removeItem(item.product)"
											>
												<svg
													xmlns="http://www.w3.org/2000/svg"
													width="100%"
													height="100%"
													fill="none"
													viewBox="0 0 24 24"
													stroke="currentColor"
													stroke-width="2"
													stroke-linecap="round"
													stroke-linejoin="round"
													class="feather feather-trash-2"
												>
													<polyline points="3 6 5 6 21 6"></polyline>
													<path
														d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"
													></path>
													<line x1="10" y1="11" x2="10" y2="17"></line>
													<line x1="14" y1="11" x2="14" y2="17"></line>
												</svg>
											</div>
										</li>
										<li
											v-show="isEmptyCart"
											class="flex justify-center w-64 p-4 text-xs bg-gray-200 rounded-md"
										>
											Its empty, order some at our store
										</li>
								</ul>
								<div class="mt-4 mr-4">
									<div class="flex items-center justify-between py-4">
										<p class="text-lg font-bold">Total</p>
										<p class="">IDR {{ totalPrice }}</p>
									</div>
									<nuxt-link :to="{ name: 'checkout' }">
										<button
											@click="cart = false"
											class="w-full px-5 py-2 font-medium text-white transition duration-150 ease-in-out bg-teal-500 border-0 rounded-lg focus:outline-none focus:shadow-outline hover:bg-teal-600"
										>
											Checkout
										</button>
									</nuxt-link>
								</div>
							</div>
						</div>
					</div>
					<div
						class="relative ml-4"
						@mouseleave="isAva = false"
						@mouseenter="isAva = true"
						v-if="$auth.loggedIn"
					>
						<div class="flex items-center">
							<button
								id="user-menu"
								aria-label="User Menu"
								aria-haspopup="true"
								class="transition duration-150 ease-in-out border-2 border-transparent rounded-full focus:outline-none focus:border-gray-700"
							>
								<img
									src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
									alt="avatar"
									class="w-6 rounded-full"
								/>
							</button>
							<p class="hidden ml-2 md:block">{{ $auth.user.name }}</p>
						</div>
						<transition
							enter-active-class="transition duration-100 ease-out"
							enter-class="transform scale-95 opacity-0"
							enter-to-class="transform scale-100 opacity-100"
							leave-active-class="transition duration-75 ease-in"
							leave-class="transform scale-100 opacity-100"
							leave-to-class="transform scale-95 opacity-0"
						>
							<div
								v-show="isAva"
								class="absolute right-0 w-40 mt-1 origin-top-right rounded-md shadow-lg"
								@mouseleave="isAva = false"
								@mouseenter="isAva = true"
							>
								<div
									class="py-1 bg-white rounded-md shadow-xs"
									role="menu"
									aria-orientation="vertical"
									aria-labelledby="user-menu"
								>
									<nuxt-link
										:to="{
											name: 'user-slug',
											params: { slug: $auth.user.name },
										}"
										class="block px-4 py-2 text-sm leading-5 text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
										role="menuitem"
										>{{ $auth.user.name }}</nuxt-link
									>
									<nuxt-link
										:to="{
											name: 'user-slug',
											params: { slug: $auth.user.name },
											query: { tab: 'account' },
										}"
										class="block px-4 py-2 text-sm leading-5 text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
										role="menuitem"
										>Settings</nuxt-link
									>
									<a
										@click.prevent="logout"
										role="menuitem"
										class="block w-full px-4 py-2 text-sm leading-5 text-left text-gray-700 transition duration-150 ease-in-out cursor-pointer hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
										>Logout</a
									>
								</div>
							</div>
						</transition>
					</div>
					<div class="ml-4 cursor-pointer" v-else>
						<t-button
							class="text-sm font-medium truncate"
							tagName="a"
							:to="{ name: 'auth-login' }"
							>Sign In</t-button
						>
					</div>
				</div>
			</div>
		</header>
		<nav class="hidden shadow lg:block" id="nav">
			<div
				class="container flex flex-row items-center justify-between px-4 mx-auto xl:px-6"
			>
				<div class="flex flex-col items-start lg:flex-row">
					<ul class="flex py-2 mt-6 -mb-px space-x-8 text-sm lg:mt-0">
						<li>
							<nuxt-link
								:to="{ name: 'index' }"
								class="py-2 hover:text-teal-500 on"
								exact
								>Home</nuxt-link
							>
						</li>
						<li>
							<nuxt-link class="py-2 hover:text-teal-500 on" to="/stores"
								>Store</nuxt-link
							>
						</li>
						<li>
							<nuxt-link class="py-2 hover:text-teal-500 on" to="/vendors"
								>Vendor</nuxt-link
							>
						</li>
						<li>
							<nuxt-link class="py-2 hover:text-teal-500 on" to="/events"
								>Events</nuxt-link
							>
						</li>
						<li>
							<nuxt-link class="py-2 hover:text-teal-500 on" to="/blog"
								>Blog</nuxt-link
							>
						</li>
						<li>
							<nuxt-link class="py-2 hover:text-teal-500 on" to="/real-wedding"
								>Real Wedding</nuxt-link
							>
						</li>
						<li>
							<nuxt-link class="py-2 hover:text-teal-500 on" to="/app"
								>Get Our App</nuxt-link
							>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	</div>
</template>

<script>
export default {
	name: "TheHeading",
	data() {
		return {
			isAva: false,
			cart: false,
			empty: false,
		};
	},
	computed: {
		carts() {
			return this.$store.state.cart.cart;
		},
		isEmptyCart() {
			return !(typeof this.carts !== "undefined" && this.carts.length > 0);
		},
	},
	methods: {
		async logout() {
			this.isAva = false;
      await this.$store.dispatch("cart/storeProduct", this.$store.state.auth.user);

      try {
        await this.$auth.logout();
        location.replace("/auth/login");
      } catch (e) {
        console.log(e);
      }

		},
		removeItem(product) {
			this.$store.dispatch("cart/removeItemFromCart", product);
		},
	},
};
</script>

<style lang="scss" scoped>
#nav {
	.nuxt-link-active {
		@apply border-b-2 border-teal-500;
	}
}

.max {
	max-width: 14rem;
	min-width: 14rem;
}

.max-h {
	max-height: 16rem;
}
</style>
