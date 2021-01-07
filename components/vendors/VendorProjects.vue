<template>
  <div
    class="block lg:grid grid-cols-4 gap-6 mt-12 mb-12"
    v-if="projects && projects.length > 0"
  >
    <vendor-project-list
      v-for="(project, index) in projects"
      :project="project"
      :key="index"
    ></vendor-project-list>
  </div>
  <div class="flex items-center justify-center h-28" v-else>
    No projects found.
  </div>
</template>

<script>
export default {
  props: {
    projects: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
</style>
