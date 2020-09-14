<template>
  <div class="w-3/12">
    <!-- image wrapper -->
    <div class="rounded-lg">
      <a href="#">
        <img class="rounded-lg" src="https://picsum.photos/267/216.jpg" alt="store image" />
      </a>
    </div>

    <!-- title wrapper -->
    <div class="flex flex-col p-2">
      <div class="flex mb-4 min-w-0">
        <div class="flex flex-col min-w-0 leading-none">
          <h1 class="font-medium text-base tracking-tight mb-1">Engangement Package</h1>
          <p class="text-xs tracking-tight truncate">
            by
            <span class="font-bold">Amana</span> &sdot; Engagement Package awdawdawd
          </p>
        </div>
        <button class="flex flex-grow flex-shrink-0 items-center justify-end ml-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            aria-hidden="true"
            focusable="false"
            width="1.5em"
            height="1.5em"
            style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 32 32"
          >
            <g
              fill="none"
              stroke="#626262"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
            >
              <path d="M4 16C1 12 2 6 7 4s8 2 9 4c1-2 5-6 10-4s5 8 2 12s-12 12-12 12s-9-8-12-12z" />
            </g>
            <rect x="0" y="0" width="32" height="32" fill="rgba(0, 0, 0, 0)" />
          </svg>
        </button>
      </div>
      <div class="flex min-w-0">
        <div class="flex flex-col min-w-0 leading-none">
          <p class="font-thin text-sm line-through mb-1">25.000.000</p>
          <h1 class="font-semibold tracking-wide text-xl">12.600.000</h1>
        </div>
        <div class="flex flex-grow flex-shrink-0 items-end justify-end text-xs ml-4">
          <button class="flex items-center justify-center text-tertiary-500 hover:underline">
            <span class="font-medium text-xs leading-none">Details</span>
            <svg class="w-5 ml-1" viewBox="0 0 32 32">
              <path d="M22 16L12 26l-1.4-1.4l8.6-8.6l-8.6-8.6L12 6z" fill="#ff5470" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>