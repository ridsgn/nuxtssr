<template>
  <div class="fixed bg-main top-0 w-full">
    <header class="border-b">
      <div
        class="container mx-auto flex flex-row items-center justify-between px-4 py-3"
      >
        <div class="flex flex-row items-start">
          <a class="block md:hidden" href="#">
            <svg
              class="h-8 w-auto"
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
            <h1
              class="w-40 flex font-semibold text-xl sm:text-2xl text-highlight"
            >
              Happy Life
            </h1>
          </a>
        </div>
        <div class="flex items-center mt-0">
          <div class="relative">
            <input
              type="text"
              class="bg-gray-100 text-main text-sm rounded-md focus:outline-none focus:shadow-outline w-full sm:w-64 px-3 pl-8 py-1"
              placeholder="Search..."
            />
            <div class="absolute top-0 flex items-center h-full ml-2">
              <svg class="fill-current text-gray-400 w-4" viewBox="0 0 24 24">
                <path
                  class="hericon-ui"
                  d="M16.32 14.9l5.39 5.4a1 1 0 01-1.42 1.4l-5.38-5.38a8 8 0 111.41-1.41zM10 16a6 6 0 100-12 6 6 0 000 12z"
                />
              </svg>
            </div>
          </div>
          <div class="ml-6">
            <button
              class="p-1 border-2 border-transparent text-gray-400 rounded-full hover:text-paragraph focus:outline-none focus:text-white focus:bg-gray-300 transition duration-150 ease-in-out"
              aria-label="Cart"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                width="1.5em"
                height="1.5em"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 24 24"
                style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);"
              >
                <path
                  d="M10 20a2 2 0 1 1 0-4a2 2 0 0 1 0 4zm7 0a2 2 0 1 1 0-4a2 2 0 0 1 0 4zM3.962 5.923a.962.962 0 0 1 0-1.923h1.151c.902 0 1.682.626 1.878 1.506l1.253 5.642c.196.88.976 1.506 1.878 1.506h7.512l1.442-5.77H9.731a.962.962 0 0 1 0-1.922h9.345a1.923 1.923 0 0 1 1.866 2.39L19.5 13.12a1.923 1.923 0 0 1-1.866 1.457h-7.512a3.846 3.846 0 0 1-3.755-3.012L5.113 5.923H3.962z"
                  fill="currentColor"
                />
              </svg>
            </button>
          </div>
          <div class="ml-4 relative">
            <button
              @click="isAva = !isAva"
              @blur="isAva = false"
              id="user-menu"
              aria-label="User Menu"
              aria-haspopup="true"
              class="border-2 border-transparent rounded-full focus:outline-none focus:border-gray-700 transition duration-150 ease-in-out"
            >
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt="avatar"
                class="rounded-full w-6"
              />
            </button>
            <transition
              enter-active-class="transition ease-out duration-100"
              enter-class="transform opacity-0 scale-95"
              enter-to-class="transform opacity-100 scale-100"
              leave-active-class="transition ease-in duration-75"
              leave-class="transform opacity-100 scale-100"
              leave-to-class="transform opacity-0 scale-95"
            >
              <div
                v-if="isAva"
                class="origin-top-right absolute right-0 mt-2 w-40 rounded-md shadow-lg"
              >
                <div
                  class="py-1 rounded-md bg-white shadow-xs"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="user-menu"
                >
                  <a
                    href="#"
                    class="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"
                    role="menuitem"
                    >Your Profile</a
                  >
                  <a
                    href="#"
                    class="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"
                    role="menuitem"
                    >Settings</a
                  >
                  <a
                    href="#"
                    class="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"
                    role="menuitem"
                    >Sign out</a
                  >
                </div>
              </div>
            </transition>
          </div>
        </div>
      </div>
    </header>
    <nav class="shadow hidden lg:block">
      <div
        class="container mx-auto flex flex-row items-center justify-between px-4"
      >
        <div class="flex flex-col lg:flex-row items-start">
          <ul class="flex space-x-8 mt-6 lg:mt-0">
            <li class="py-2 border-b-2 border-tertiary-500">
              <nuxt-link :to="{ name: 'index' }">Home</nuxt-link>
            </li>
            <li class="py-2 hover:text-tertiary-500"><a href="#">Store</a></li>
            <li class="py-2 hover:text-tertiary-500"><a href="#">Vendor</a></li>
            <li class="py-2 hover:text-tertiary-500"><a href="#">Events</a></li>
            <li class="py-2 hover:text-tertiary-500"><a href="#">Blog</a></li>
            <li class="py-2 hover:text-tertiary-500">
              <a href="#">Get Our App</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isAva: false
    };
  }
};
</script>

<style lang="scss" scoped></style>
