<template>
  <div
    class="card-img relative shadow rounded-lg"
    @click.prevent
    @mouseenter="isHover = true"
    @mouseleave="isHover = false"
  >
    <a href="#">
      <img class="rounded-lg" src="https://picsum.photos/500/500.jpg" alt="project image" />
    </a>
    <div
      class="absolute bottom-0 left-0 w-full h-20 bg-main rounded-b-lg border-2 border-gray-400"
      v-bind:class="[ isHover ? activeClass : inactiveClass ]"
    >
      <div class="flex h-full w-full p-2">
        <div class="flex flex-col items-start justify-between">
          <nuxt-link
            to="#"
            class="font-medium text-sm text-secondary-500 leading-tight w-9/12"
          >Mini Wedding di Medina Cafe & Bistro</nuxt-link>
          <div class="flex justify-between w-full">
            <h4 class="font-medium text-xs tracking-tight">Sirih Gading Catering</h4>
            <div class="font-medium text-xs text-gray-500">Catering</div>
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
      isHover: false,
      activeClass: ["block", "z-10"],
      inactiveClass: "hidden",
    };
  },
};
</script>

<style scoped>
.card-img {
}
</style>