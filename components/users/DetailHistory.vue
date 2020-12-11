<template>
  <div>
    <h1 class="text-center">{{ detail.status }}</h1>
    <div class="max-w-sm">
      <div class="px-2 py-4 bg-gray-400 rounded-t-md">Header</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    detail: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style></style>
