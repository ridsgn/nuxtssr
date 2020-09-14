<template>
  <div class="card">
    <div class="relative">
      <div class="discount-flag"></div>
      <nuxt-link to="/store/detail/haha">
        <img class="card__image" src="https://picsum.photos/400" alt />
      </nuxt-link>
    </div>
    <div class="card__content">
      <div class="mb-2">
        <h3 class="truncate font-medium text-base font-poppins max-w-full">Wedding's Ring</h3>
        <h4 class="text-xs font-light w-full truncate text-gray-700">
          by
          <span class="font-medium">BJ Catering & Wedding Organizer</span> - Wedding Packages
        </h4>
      </div>
      <div class="flex justify-between">
        <div class="flex flex-col leading-none">
          <div class="line-through font-poppins text-xs font-light">Rp. 6.000.000</div>
          <div class="font-medium font-poppins text-base">Rp. 4.000.000</div>
        </div>
        <div class="flex items-end">
          <div class="font-normal text-xs">Details ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  border-radius: 9px;
  background-color: white;
  width: 267px;
  height: 100%;
  box-sizing: border-box;
}

.card__image {
  height: 216px;
  width: 100%;
  object-fit: fill;
  border-radius: 8px;
}

.card__content {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  margin: 6px 10px;
}
</style>
