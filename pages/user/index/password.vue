<template>
  <div>
    <section class="text-gray-700 body-font">
      <div class="container px-5 py-5 mx-auto">
        <div class="flex flex-col w-full mb-6 text-center">
          <h1 class="mb-2 text-3xl font-medium text-gray-900 sm:text-4xl title-font">
            Change Password
          </h1>
        </div>

        <t-alert
          :dismissible="false"
          :variant="{ danger: !success, success: success }"
          class="container w-full max-w-lg mx-auto"
          :show="alert"
        >
          <ul class="ml-4">
            <li v-if="vErrors.current_password">
              {{ vErrors.current_password[0] }}
            </li>
            <li v-else>{{ res }}</li>
          </ul>
        </t-alert>

        <div class="max-w-md mx-auto">
          <ValidationObserver ref="form" v-slot="{ invalid, reset }">
            <form @submit.prevent="change" @reset="reset(onReset)">
              <div class="mt-6">
                <ValidationProvider rules="required" v-slot="{ errors, classes }">
                  <label
                    class="block mb-2 text-sm font-medium text-gray-600"
                    for="Old Password"
                    >Old Password</label
                  >
                  <div class="content" :class="classes">
                    <input
                      id="Old Password"
                      v-model="current_password"
                      class="w-full px-3 py-2 leading-none border border-gray-300 rounded outline-none border-box focus:border-teal-500"
                      type="password"
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
                      >New Password</label
                    >
                  </div>
                  <div class="content" :class="classes">
                    <input
                      name="Password"
                      type="password"
                      v-model="new_password"
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
                    'inline float-right font-bold',
                    { 'cursor-not-allowed': invalid || loading },
                  ]"
                  :disabled="invalid || loading"
                  :variant="{ disabled: invalid || loading }"
                  >{{ loading ? "Please wait..." : "Save" }}</t-button
                >
              </div>
            </form>
          </ValidationObserver>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  head: {
    title: "Happy Wedding | Password",
  },
  data() {
    return {
      res: undefined,
      loading: false,
      alert: false,
      success: false,
      current_password: "",
      new_password: "",
      confirmation: "",
    };
  },
  methods: {
    async change() {
      this.$refs.form.validate().then(async (success) => {
        if (!success) {
          return;
        }

        try {
          this.loading = true;

          const res = await this.$axios.$post("api/change-password", {
            current_password: this.current_password,
            new_password: this.new_password,
            confirmation: this.confirmation,
          });

          if (res.status === "Success") {
            this.current_password = this.new_password = this.confirmation = "";
            this.res = res.message;
            this.success = success;
            this.alert = true;

            this.$nextTick(() => {
              this.$refs.form.reset();
            });
          }

          return { res };
        } catch (err) {
          this.success = false;
          this.alert = true;
        } finally {
          this.loading = false;
        }
      });
    },
  },
};
</script>

<style scoped></style>
