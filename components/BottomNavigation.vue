<template>
  <footer class="sticky bottom-0 z-10 flex bg-white border-t border-gray-600">
    <nuxt-link class="flex items-center justify-center w-1/4 py-3 text-gray-500" to="/discovery">
      <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather w-6 h-6 feather-home"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
    </nuxt-link>
    <nuxt-link class="flex items-center justify-center w-1/4 py-3 text-gray-500" to="/stores">
      <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather w-6 h-6 feather-shopping-bag"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
    </nuxt-link>
    <nuxt-link class="flex items-center justify-center w-1/4 py-3 text-gray-500" to="/vendors">
      <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather w-6 h-6 feather-briefcase"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
    </nuxt-link>
    <nuxt-link class="flex items-center justify-center w-1/4 py-3 text-gray-500" to="/checkout">
      <div class="relative">
        <div
          v-show="itemCount"
          class="absolute top-0 right-0 px-1 -mt-1 -mr-2 text-xs font-bold text-white bg-red-700 rounded-full"
        >
          {{ itemCount }}
        </div>
        <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather w-6 h-6 feather-shopping-cart"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
      </div>
    </nuxt-link>
  </footer>
</template>

<script>
export default {

}
</script>

<style>

</style>
