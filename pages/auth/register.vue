<template>
  <div>
    <!-- <t-alert
			:dismissible="false"
			variant="danger"
			class="container w-full max-w-lg mx-auto mt-32"
			:show="vErrors.email"
		>
			<ul class="ml-4 list-disc">
				<li v-if="vErrors.username">{{ vErrors.username[0] }}</li>
				<li v-if="vErrors.email">{{ vErrors.email[0] }}</li>
				<li v-if="vErrors.password">{{ vErrors.password[0] }}</li>
			</ul>
		</t-alert>
		<t-alert
			:dismissible="false"
			variant="success"
			class="container w-full max-w-lg mx-auto mt-32"
			:show="res != null"
		>
			<ul class="ml-4 list-disc">
				<li>{{ res }}</li>
			</ul>
		</t-alert> -->
    <div class="bg-white mx-auto lg:max-w-4xl lg:rounded-lg h-screen lg:h-auto flex justify-center items-center lg:block">
      <div
        class="lg:flex rounded-lg max-w-sm mx-auto overflow-hidden lg:max-w-4xl mt-0 lg:mt-32"
      >
        <div class="hidden bg-cover lg:block lg:w-1/2 img"></div>

        <div class="w-full px-6 py-8 md:px-8 lg:w-1/2">
          <!-- <h2 class="text-2xl font-semibold text-center text-gray-700 font-poppins">Happy Life</h2> -->

          <a
            @click="socialLogin('google')"
            class="relative flex items-center justify-center mt-4 cursor-pointer text-white rounded-lg shadow-md hover:bg-gray-100"
          >
            <div class="absolute left-0 px-4 py-3">
              <svg class="w-6 h-6" viewBox="0 0 40 40">
                <path
                  d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                  fill="#FFC107"
                />
                <path
                  d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z"
                  fill="#FF3D00"
                />
                <path
                  d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z"
                  fill="#4CAF50"
                />
                <path
                  d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                  fill="#1976D2"
                />
              </svg>
            </div>

            <span class="w-5/6 px-4 py-3 font-bold text-center text-gray-600"
              >Sign Up with Google</span
            >
          </a>

          <div class="flex items-center justify-between mt-4">
            <span class="w-1/5 border-b lg:w-1/4"></span>

            <div class="text-xs text-center text-gray-500 uppercase">or with email</div>

            <span class="w-1/5 border-b lg:w-1/4"></span>
          </div>

          <ValidationObserver ref="form" v-slot="{ invalid, reset }">
            <form @submit.prevent="userRegister" @reset.prevent="reset(onReset)">
              <div class="mt-6">
                <ValidationProvider rules="required" v-slot="{ errors, classes }">
                  <label
                    class="block mb-2 text-sm font-medium text-gray-600"
                    for="Fullname"
                    >Full Name</label
                  >
                  <div class="content" :class="classes">
                    <input
                      id="Fullname"
                      v-model.trim="form.username"
                      class="w-full px-3 py-2 leading-none border border-gray-300 rounded outline-none border-box focus:border-teal-500"
                      type="text"
                      :class="classes"
                    />
                    <span>{{ errors[0] }}</span>
                  </div>
                </ValidationProvider>
              </div>

              <div class="mt-6">
                <ValidationProvider rules="required|email" v-slot="{ errors, classes }">
                  <label
                    class="block mb-2 text-sm font-medium text-gray-600"
                    for="Email Address"
                    >Email Address</label
                  >
                  <div class="content" :class="classes">
                    <input
                      id="Email Address"
                      v-model.trim="form.email"
                      class="w-full px-3 py-2 leading-none border border-gray-300 rounded outline-none border-box focus:border-teal-500"
                      type="text"
                      :class="classes"
                    />
                    <span>{{ errors[0] }}</span>
                  </div>
                </ValidationProvider>
              </div>

              <div class="mt-6">
                <ValidationProvider
                  rules="required|confirmed:confirmation"
                  v-slot="{ errors, classes }"
                >
                  <div class="flex justify-between">
                    <label
                      class="block mb-2 text-sm font-medium text-gray-600"
                      for="Password"
                      >Password</label
                    >
                  </div>
                  <div class="content" :class="classes">
                    <input
                      name="Password"
                      type="password"
                      v-model="form.password"
                      class="w-full px-3 py-2 leading-none border border-gray-300 rounded outline-none border-box focus:border-teal-500"
                      :class="classes"
                    />
                    <span>{{ errors[0] }}</span>
                  </div>
                </ValidationProvider>
              </div>

              <div class="mt-6">
                <ValidationProvider
                  v-slot="{ errors, classes }"
                  vid="confirmation"
                  rules="required"
                >
                  <div class="flex justify-between">
                    <label
                      class="block mb-2 text-sm font-medium text-gray-600"
                      for="Password Confirmation"
                      >Password Confirmation</label
                    >
                  </div>
                  <div class="content" :class="classes">
                    <input
                      name="Password Confirmation"
                      type="password"
                      v-model="confirmation"
                      class="w-full px-3 py-2 leading-none border border-gray-300 rounded outline-none border-box focus:border-teal-500"
                      :class="classes"
                    />
                    <span>{{ errors[0] }}</span>
                  </div>
                </ValidationProvider>
              </div>

              <div class="mt-8">
                <t-button
                  type="submit"
                  :class="[
                    'w-full font-bold',
                    { 'cursor-not-allowed': invalid || loading },
                  ]"
                  :variant="{ disabled: invalid || loading }"
                  :disabled="invalid || loading"
                  >{{ loading ? "Please wait..." : "Sign Up" }}</t-button
                >
              </div>
            </form>
          </ValidationObserver>

          <div class="flex items-center justify-between mt-4">
            <span class="w-1/6 border-b md:w-1/5"></span>

            <nuxt-link
              :to="{ name: 'auth-login' }"
              class="text-xs text-gray-500 uppercase underline"
              >login instead</nuxt-link
            >

            <span class="w-1/6 border-b md:w-1/5"></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  auth: false,
  // middleware: 'guest',
  layout: "withoutFooter",
  data() {
    return {
      res: null,
      loading: false,
      visibility: false,
      form: {
        username: "",
        email: "",
        password: "",
      },
      confirmation: "",
    };
  },
  methods: {
    onReset() {
      this.$refs.form.reset();
    },

    socialLogin(service) {
      window.location.href = `https://dev.happywedding.id/api/login/${service}`;
    },

    async userRegister() {
      this.loading = true;
      try {
        const res = await this.$axios.post("api/register", this.form);
        this.loading = false;
        if (res.status === 200) {
          this.$router.push("/auth/login");
          this.$toast.success(res.data.message).goAway(3000);
        }
      } catch (err) {
        this.loading = false;
        this.$toast.error(this.vErrors.email[0]).goAway(3000);
      } finally {
        this.form.password = "";
        this.confirmation = "";
        this.onReset();
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.img {
  background-image: url("https://images.unsplash.com/photo-1546032996-6dfacbacbf3f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=655&q=80");
}
</style>
