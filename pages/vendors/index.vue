<template>
  <div>
    <h1>This is vendor's index page</h1>

    <input type="text" v-model="id" />
    <button @click="loadUser">Load User</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: ""
    };
  },
  methods: {
    loadUser() {
      this.$router.push(`/vendors/${this.id}`);
    }
  }
};
</script>

<style></style>
