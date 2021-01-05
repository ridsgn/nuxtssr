<template>
  <div>
    <div class="loader"></div>
    <p class="flex w-full justify-center items-center h-screen">Please wait...</p>
  </div>
</template>

<script>
export default {
  auth: false,
  // middleware: 'guest',
  data() {
    return {
      token: this.$route.query.token ? this.$route.query.token : null,
    };
  },

  mounted() {
    // this.$auth.setToken('laravelJWT', 'Bearer ' + this.$token);
    // this.$auth.setStrategy('laravelJWT');

    // this.$auth.fetchUser().then(() => {
    //   return this.$router.push('/');
    // }).catch(() => {
    //   this.$auth.logout();
    //   return this.$router.push(`/auth/${this.$route.query.origin ? this.$route.query.origin : 'register'}?error=1`);
    // })

    this.$auth.loginWith('laravelJWT', { data: { token: this.token } }).then(() => {
      return this.$router.push('/discovery');
    }).catch((e) => {
      return this.$router.push(
        "/auth/login?error=Your token appeared to be invalid, please try again"
      );
    });
  },
};
</script>

<style>
.loader {
    margin: 20px auto;
    border: 8px solid #f3f3f3;
    border-radius: 50%;
    border-top: 8px solid #3B5998;
    border-bottom: 8px solid #3B5998;
    width: 60px;
    height: 60px;
    -webkit-animation: spin 1.2s linear infinite;
    animation: spin 1.2s linear infinite;
}
@-webkit-keyframes spin {
    0% { -webkit-transform: rotate(0deg); }
    100% { -webkit-transform: rotate(360deg); }
}
@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}
</style>
