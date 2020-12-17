<template>
  <div>
    <section class="text-gray-700 body-font">
      <div class="container px-5 py-5 mx-auto">
        <div class="flex flex-col w-full mb-6 text-center">
          <h1 class="mb-2 text-3xl font-medium text-gray-900 sm:text-4xl title-font">
            Account Information
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
            <form action="">
              <div class="flex justify-center mb-4 space-x-4">
                <ValidationProvider
                  class="flex-grow"
                  rules="required"
                  v-slot="{ errors, classes }"
                >
                  <label
                    class="block mb-2 text-sm font-medium text-gray-600"
                    for="Recipient Name"
                    >Recipient Name</label
                  >
                  <div class="content" :class="classes">
                    <input
                      id="Recipient Name"
                      v-model="shipping.name"
                      class="w-full px-3 py-2 leading-none border border-gray-300 rounded outline-none border-box focus:border-teal-500"
                      type="text"
                      :class="classes"
                      :disabled="checkbox"
                    />
                    <span>{{ errors[0] }}</span>
                  </div>
                </ValidationProvider>
                <ValidationProvider rules="required|numeric" v-slot="{ errors, classes }">
                  <label
                    class="block mb-2 text-xs font-medium text-gray-600"
                    for="Phone Number"
                    >Phone Number</label
                  >
                  <div class="content" :class="classes">
                    <input
                      id="Phone Number"
                      v-model.trim="shipping.phone"
                      class="w-full px-3 py-2 leading-none border border-gray-300 rounded outline-none border-box focus:border-teal-500"
                      type="text"
                      :disabled="checkbox"
                      :class="classes"
                    />
                    <span>{{ errors[0] }}</span>
                  </div>
                </ValidationProvider>
              </div>
              <div class="flex justify-center mb-4 space-x-4">
                <ValidationProvider
                  class="flex-grow"
                  rules="required"
                  v-slot="{ errors, classes }"
                >
                  <label class="block mb-2 text-xs font-medium text-gray-600" for="City"
                    >City or District</label
                  >
                  <div class="content" :class="classes">
                    <input
                      id="City"
                      v-model="shipping.city"
                      class="w-full px-3 py-2 leading-none border border-gray-300 rounded outline-none border-box focus:border-teal-500"
                      type="text"
                      :disabled="checkbox"
                      :class="classes"
                    />
                    <span>{{ errors[0] }}</span>
                  </div>
                </ValidationProvider>
                <ValidationProvider
                  class="flex-1"
                  rules="required"
                  v-slot="{ errors, classes }"
                >
                  <label
                    class="block mb-2 text-xs font-medium text-gray-600"
                    for="Postal Code"
                    >Postal Code</label
                  >
                  <div class="content" :class="classes">
                    <input
                      id="Postal Code"
                      v-model.trim="shipping.postal"
                      class="w-full px-3 py-2 leading-none border border-gray-300 rounded outline-none border-box focus:border-teal-500"
                      type="text"
                      :disabled="checkbox"
                      :class="classes"
                    />
                    <span>{{ errors[0] }}</span>
                  </div>
                </ValidationProvider>
              </div>
              <div class="flex justify-center space-x-4">
                <ValidationProvider
                  class="flex-1"
                  rules="required"
                  v-slot="{ errors, classes }"
                >
                  <label
                    class="block mb-2 text-xs font-medium text-gray-600"
                    for="Address"
                    >Address</label
                  >
                  <div class="content" :class="classes">
                    <textarea
                      id="Address"
                      v-model="shipping.address"
                      class="w-full px-3 py-2 leading-none border border-gray-300 rounded outline-none border-box focus:border-teal-500"
                      type="text"
                      :class="classes"
                      :disabled="checkbox"
                      maxlength="200"
                    ></textarea>
                    <span>{{ errors[0] }}</span>
                  </div>
                </ValidationProvider>
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
    title: "Happy Wedding | User Information",
  },
  data() {
    return {
      shipping: {
        name: this.$auth.user.name,
        phone: this.$auth.user.phone,
        city: this.$auth.user.city,
        postal: this.$auth.user.postal_code,
        address: this.$auth.user.address,
      },
    };
  },
};
</script>

<style scoped></style>
