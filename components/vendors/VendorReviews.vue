<template>
  <div>
    {{ vendor.imageUrl }}
  </div>
</template>

<script>
  export default {
    props: {
      vendor: {
        type: Object,
        required: true
      }
    }
  }
</script>

<style scoped>

</style>