<template>
  <div>
    <div class="hidden">
      <nav
        class="fixed top-0 z-50 flex items-center justify-between w-full px-4 py-3 mx-auto bg-hw-light-teal xl:px-24"
      >
        <h1 class="text-hw-teal">Happy Wedding</h1>
        <ul class="absolute flex -mb-px space-x-8 text-sm center-y lg:mt-0">
          <li>
            <nuxt-link
              to="/discovery"
              class="py-3 font-medium hover:text-teal-500"
              exact
              >Home</nuxt-link
            >
          </li>
          <li>
            <nuxt-link class="py-3 font-medium hover:text-teal-500" to="/stores"
              >Store</nuxt-link
            >
          </li>
          <li>
            <nuxt-link
              class="py-3 font-medium hover:text-teal-500"
              to="/vendors"
              >Vendor</nuxt-link
            >
          </li>
          <li>
            <nuxt-link class="py-3 font-medium hover:text-teal-500" to="/events"
              >Events</nuxt-link
            >
          </li>
          <li>
            <nuxt-link class="py-3 font-medium hover:text-teal-500" to="/events"
              >Blogs</nuxt-link
            >
          </li>
          <!-- <li>
                <nuxt-link class="py-2 hover:text-teal-500 on" :to="{ name: 'blog' }"
                  >Blog</nuxt-link
                >
              </li>
              <li>
                <nuxt-link class="py-2 hover:text-teal-500 on" :to="{ name: 'real-wedding' }"
                  >Real Wedding</nuxt-link
                >
              </li>
              <li>
                <nuxt-link class="py-2 hover:text-teal-500 on" :to="{ name: 'app' }"
                  >Get Our App</nuxt-link
                >
              </li> -->
        </ul>
        <h1>Login</h1>
      </nav>
    </div>
    <!-- <div class="bg-hw-light-teal">
      <div class="w-full px-24 pt-3">
        <div class="flex items-start justify-between">
          <h1 class="text-hw-teal">Happy Wedding</h1>
          <NavBar>
            <NavBarList href="/" nav exact> Home </NavBarList>
            <NavBarList href="/stores" nav> Store </NavBarList>
            <NavBarList href="/vendors" nav> Vendor </NavBarList>
            <NavBarList href="/events" nav> Events </NavBarList>
          </NavBar>
          <h1>Login</h1>
        </div>
      </div>
    </div> -->
    <nuxt />
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.nuxt-link-active {
  @apply border-b-4 text-hw-teal border-hw-teal;
}

.center-y {
  left: 50%;
  transform: translate(-50%);
}
</style>
