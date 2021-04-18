<template>
	<div class="flex flex-col h-screen">
		<TheHeader />
		<nuxt class="flex-1 mb-6" keep-alive :keep-alive-props="{ max: 10 }" />
		<BottomNavigation class="block lg:hidden"/>
		<TheFooter class="hidden lg:block" />
	</div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;700&display=swap');
</style>

<style lang="scss">
html {
	@apply font-display bg-gray-200;
}
</style>
