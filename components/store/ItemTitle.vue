<template>
  <div>
    <div class="flex h-full w-full mx-auto">
      <div class="flex flex-grow h-full mx-0">
        <div class="flex items-center mr-3">
          <img
            class="h-12 w-12 rounded-full"
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt="Avatar"
            tabindex="0"
          />
        </div>
        <div class="flex flex-grow flex-col items-start justify-between py-1 xl:mr-8 mr-2">
          <div class="font-poppins font-medium">Wedding's Ring</div>
          <div class="font-poppins font-normal text-xs">
            by
            <nuxt-link to="/vendors/1" class="font-poppins font-semibold">Tasya Accessories</nuxt-link> - Wedding Packages
          </div>
          <div class="font-poppins font-light text-xs pt-1">Jakarta, ID</div>
        </div>
        <div class="flex items-center justify-end">
          <div class="mr-2">
            <button aria-label="Share">
              <!-- <span class="iconify text-lg" data-inline="false" data-icon="carbon:share"></span> -->
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-share-2 text-lg"
              >
                <circle cx="18" cy="5" r="3" />
                <circle cx="6" cy="12" r="3" />
                <circle cx="18" cy="19" r="3" />
                <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
                <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
              </svg>
            </button>
          </div>
          <div>
            <button aria-label="Love">
              <!-- {{-- <span class="iconify text-lg" data-inline="false" data-icon="bytesize:heart"></span> --}} -->
              <svg
                class="text-lg"
                width="22"
                height="20"
                viewBox="0 0 20 18"
                :fill="color.fill ? 'pink' : 'none'"
                xmlns="http://www.w3.org/2000/svg"
                @click="changeColor"
              >
                <path
                  d="M2.5 9.0001C0.625 6.5001 1.25 2.7501 4.375 1.5001C7.5 0.250102 9.375 2.7501 10 4.0001C10.625 2.7501 13.125 0.250101 16.25 1.5001C19.375 2.7501 19.375 6.5001 17.5 9.0001C15.625 11.5001 10 16.5001 10 16.5001C10 16.5001 4.375 11.5001 2.5 9.0001Z"
                  stroke="black"
                  stroke-width="1.3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      color: {
        fill: false,
      },
    };
  },
  methods: {
    changeColor() {
      this.color.fill = !this.color.fill;
    },
  },
};
</script>
