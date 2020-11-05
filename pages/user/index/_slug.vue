<template>
  <div>
    {{ $route.params.slug }}
  </div>
</template>

<script>
  export default {
    head () {
      return {
        title: this.$route.params.slug,
      }
    },
  }
</script>

<style scoped>

</style>