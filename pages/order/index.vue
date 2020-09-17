<template>
  <div class="pt-24">
    <div class="my-8">
      <div class="flex justify-center items-center space-x-40">
        <div class="flex flex-col justify-center items-center">
          <div
            class="flex items-center justify-center w-12 h-12 rounded-full bg-transparent border border-gray-500"
          >
            <div class="flex items-center justify-center w-10 h-10 rounded-full bg-yellow-300">1</div>
          </div>
          <p class="flex justify-center">Shipping</p>
        </div>
        <div class="flex flex-col justify-center items-center">
          <div class="flex items-center justify-center w-12 h-12 rounded-full">
            <div class="flex items-center justify-center w-10 h-10 rounded-full bg-gray-500">2</div>
          </div>
          <p class="flex justify-center">Review</p>
        </div>
        <div class="flex flex-col justify-center items-center">
          <div class="flex items-center justify-center w-12 h-12 rounded-full">
            <div class="flex items-center justify-center w-10 h-10 rounded-full bg-gray-500">3</div>
          </div>
          <p class="flex justify-center">Finish</p>
        </div>
      </div>
    </div>
    <div class="flex container mx-auto justify-between lg:px-6 space-x-6">
      <div class="w-7/12">
        <h1>Customer Info</h1>
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
            <div>
              <label class="text-gray-700" for="email">Email</label>
              <input
                id="email"
                type="email"
                class="w-full mt-2 px-4 py-2 block rounded bg-white text-gray-800 border border-gray-300 focus:border-blue-500 focus:outline-none focus:shadow-outline"
              />
            </div>

            <div>
              <label class="text-gray-700" for="phoneNumber">Phone Number</label>
              <input
                id="phoneNumber"
                type="text"
                class="w-full mt-2 px-4 py-2 block rounded bg-white text-gray-800 border border-gray-300 focus:border-blue-500 focus:outline-none focus:shadow-outline"
              />
            </div>
          </div>
          <div class="mt-12 space-y-4">
            <h1>Shipping Information</h1>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
            <div class="row-span-1">
              <label class="text-gray-700" for="password">Address</label>
              <textarea
                class="w-full mt-2 px-4 py-2 block rounded bg-white text-gray-800 border border-gray-300 focus:border-blue-500 focus:outline-none focus:shadow-outline"
                name="address"
                id="address"
                cols="10"
                rows="5"
              ></textarea>
            </div>
            <div class="row-span-3">
              <label class="text-gray-700" for="password">Notes</label>
              <textarea
                class="w-full mt-2 px-4 py-2 block rounded bg-white text-gray-800 border border-gray-300 focus:border-blue-500 focus:outline-none focus:shadow-outline"
                name="address"
                id="address"
                cols="10"
                rows="13"
              ></textarea>
            </div>
            <div class="row-span-1">
              <label class="text-gray-700" for="lastName">State</label>
              <input
                id="lastName"
                type="text"
                class="w-full mt-2 px-4 py-2 block rounded bg-white text-gray-800 border border-gray-300 focus:border-blue-500 focus:outline-none focus:shadow-outline"
              />
            </div>

            <div class="row-span-1">
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
            >Submit</button>
          </div>
        </form>
      </div>
      <div class="w-5/12">
        <h1>Order Summary</h1>
        <div class="flex flex-col flex-shrink space-y-4 p-4 border-b-2">
          <div class="flex rounded-lg max-w-sm">
            <img
              class="w-32 h-28 bg-no-repeat bg-contain rounded-lg mr-4"
              src="https://picsum.photos/380/250.jpg?random=1"
              alt="any"
            />
            <div class="flex flex-col space-y-2">
              <h4>A Hand of Married Couple</h4>
              <div>test</div>
              <p class="self-end">Rp 5.0000.000</p>
            </div>
            <div class="ml-4">tes</div>
          </div>
          <div class="flex rounded-lg max-w-sm">
            <img
              class="w-32 h-28 bg-no-repeat bg-contain rounded-lg mr-4"
              src="https://picsum.photos/380/250.jpg?random=1"
              alt="any"
            />
            <div class="flex flex-col space-y-2">
              <h4>A Hand of Married Couple</h4>
              <div>test</div>
              <p class="self-end">Rp 5.0000.000</p>
            </div>
            <div class="ml-4">tes</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout(context) {
    return "navbar";
  },
};
</script>

<style scoped>
</style>
