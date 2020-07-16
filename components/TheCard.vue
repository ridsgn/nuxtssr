<template>
  <div
    class="flex w-16 h-16 rounded-md bg-blue-300"
    :class="{ shadow: hasShadow }"
  ></div>
</template>

<script>
export default {
  props: {
    hasShadow: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style scoped></style>
