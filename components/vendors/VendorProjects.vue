<template>
  <div class="grid grid-cols-4 grid-rows-2 gap-6 mt-12 mb-12">
    <vendor-project-list v-for="(project, index) in projects" :project="project" :key="index"></vendor-project-list>
  </div>
</template>

<script>
  export default {
    props: {
      projects: {
        type: Array,
        required: true
      }
    }
  }
</script>

<style scoped>

</style>