<template>
  <div class="error-500">
    <h1>Sorry to say</h1>
    <p>Our server is down, we're trying the best to get you back.</p>
  </div>
</template><script>
export default {
  name: 'error-500',
  props: {
    error: {
      type: Object,
      default: () => {},
    },
  },
};
</script>