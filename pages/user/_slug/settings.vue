<template>
  <div class="container mx-auto mt-4">
    <div class="wrapper max-h-full min-w-full">
      <div class="flex w-full">
        <div class="flex-col space-y-6 mr-6">
          <div class="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden mx-auto">
            <img
              class="w-full h-56 object-cover"
              src="https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
              alt="avatar"
            />

            <div class="py-5 text-center">
              <a href="#" class="block text-2xl text-gray-800 font-bold">John Doe</a>
              <span class="text-sm text-gray-700">Software Engineer</span>
            </div>
          </div>
          <div class="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden mx-auto">
            sdasdasda
            adasdasd
          </div>
        </div>
        <div class="flex w-full">
          <div class="w-full p-6 bg-white rounded-md shadow-md">
            <h2 class="text-lg text-gray-700 font-semibold capitalize">Account settings</h2>

            <form>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
                <div>
                  <label class="text-gray-700" for="firstName">First Name</label>
                  <input
                    id="firstName"
                    type="text"
                    class="w-full mt-2 px-4 py-2 block rounded bg-white text-gray-800 border border-gray-300 focus:border-blue-500 focus:outline-none focus:shadow-outline"
                  />
                </div>

                <div>
                  <label class="text-gray-700" for="lastName">Last Name</label>
                  <input
                    id="lastName"
                    type="text"
                    class="w-full mt-2 px-4 py-2 block rounded bg-white text-gray-800 border border-gray-300 focus:border-blue-500 focus:outline-none focus:shadow-outline"
                  />
                </div>
              </div>
              <div class="mt-4 space-y-4">
                <div>
                  <label class="text-gray-700" for="password">Email</label>
                  <input
                    id="email"
                    type="email"
                    class="w-full mt-2 px-4 py-2 block rounded bg-white text-gray-800 border border-gray-300 focus:border-blue-500 focus:outline-none focus:shadow-outline"
                  />
                </div>
                <div>
                  <label class="text-gray-700" for="password">Contact Number</label>
                  <input
                    id="email"
                    type="email"
                    class="w-full mt-2 px-4 py-2 block rounded bg-white text-gray-800 border border-gray-300 focus:border-blue-500 focus:outline-none focus:shadow-outline"
                  />
                </div>
                <div>
                  <label class="text-gray-700" for="password">Address</label>
                  <textarea
                    class="w-full mt-2 px-4 py-2 block rounded bg-white text-gray-800 border border-gray-300 focus:border-blue-500 focus:outline-none focus:shadow-outline"
                    name="address"
                    id="address"
                    cols="10"
                    rows="5"
                  ></textarea>
                </div>
              </div>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
                <div>
                  <label class="text-gray-700" for="firstName">City</label>
                  <input
                    id="firstName"
                    type="text"
                    class="w-full mt-2 px-4 py-2 block rounded bg-white text-gray-800 border border-gray-300 focus:border-blue-500 focus:outline-none focus:shadow-outline"
                  />
                </div>

                <div>
                  <label class="text-gray-700" for="lastName">State</label>
                  <input
                    id="lastName"
                    type="text"
                    class="w-full mt-2 px-4 py-2 block rounded bg-white text-gray-800 border border-gray-300 focus:border-blue-500 focus:outline-none focus:shadow-outline"
                  />
                </div>

                <div>
                  <label class="text-gray-700" for="lastName">Zip Code</label>
                  <input
                    id="lastName"
                    type="text"
                    class="w-full mt-2 px-4 py-2 block rounded bg-white text-gray-800 border border-gray-300 focus:border-blue-500 focus:outline-none focus:shadow-outline"
                  />
                </div>

                <div>
                  <label class="text-gray-700" for="lastName">Country</label>
                  <input
                    id="lastName"
                    type="text"
                    class="w-full mt-2 px-4 py-2 block rounded bg-white text-gray-800 border border-gray-300 focus:border-blue-500 focus:outline-none focus:shadow-outline"
                  />
                </div>
              </div>

              <div class="flex justify-end mt-4">
                <button
                  class="px-4 py-2 bg-gray-800 text-gray-200 rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
                >Save</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
</style>
