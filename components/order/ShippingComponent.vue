<template>
  <div class="container flex justify-between w-full mx-auto mt-20 space-x-6 lg:px-6 xl:px-0">
    <div class="w-7/12">
      <h1>Customer Info</h1>
      <form>
        <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
          <div>
            <label class="text-gray-700" for="firstName">First Name</label>
            <input
              id="firstName"
              type="text"
              class="block w-full px-4 py-2 mt-2 text-gray-800 bg-white border border-gray-300 rounded focus:border-blue-500 focus:outline-none focus:shadow-outline"
            />
          </div>

          <div>
            <label class="text-gray-700" for="lastName">Last Name</label>
            <input
              id="lastName"
              type="text"
              class="block w-full px-4 py-2 mt-2 text-gray-800 bg-white border border-gray-300 rounded focus:border-blue-500 focus:outline-none focus:shadow-outline"
            />
          </div>
          <div>
            <label class="text-gray-700" for="email">Email</label>
            <input
              id="email"
              type="email"
              class="block w-full px-4 py-2 mt-2 text-gray-800 bg-white border border-gray-300 rounded focus:border-blue-500 focus:outline-none focus:shadow-outline"
            />
          </div>

          <div>
            <label class="text-gray-700" for="phoneNumber">Phone Number</label>
            <input
              id="phoneNumber"
              type="text"
              class="block w-full px-4 py-2 mt-2 text-gray-800 bg-white border border-gray-300 rounded focus:border-blue-500 focus:outline-none focus:shadow-outline"
            />
          </div>
        </div>
        <div class="mt-12 space-y-4">
          <h1>Shipping Information</h1>
        </div>
        <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
          <div class="row-span-1">
            <label class="text-gray-700" for="password">Address</label>
            <textarea
              class="block w-full px-4 py-2 mt-2 text-gray-800 bg-white border border-gray-300 rounded focus:border-blue-500 focus:outline-none focus:shadow-outline"
              id="address"
              cols="10"
              rows="5"
            ></textarea>
          </div>
          <div class="row-span-3">
            <label class="text-gray-700" for="password">Notes</label>
            <textarea
              class="block w-full px-4 py-2 mt-2 text-gray-800 bg-white border border-gray-300 rounded focus:border-blue-500 focus:outline-none focus:shadow-outline"
              id="notes"
              cols="10"
              rows="13"
            ></textarea>
          </div>
          <div class="row-span-1">
            <label class="text-gray-700" for="lastName">State</label>
            <input
              id="lastName"
              type="text"
              class="block w-full px-4 py-2 mt-2 text-gray-800 bg-white border border-gray-300 rounded focus:border-blue-500 focus:outline-none focus:shadow-outline"
            />
          </div>

          <div class="row-span-1">
            <label class="text-gray-700" for="lastName">Country</label>
            <input
              id="lastName"
              type="text"
              class="block w-full px-4 py-2 mt-2 text-gray-800 bg-white border border-gray-300 rounded focus:border-blue-500 focus:outline-none focus:shadow-outline"
            />
          </div>
        </div>

        <div class="flex justify-end mt-4">
          <b-button @click="$emit('test-on')">Submit</b-button>
          <!-- <button
            class="px-4 py-2 text-gray-200 bg-gray-800 rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
          >Submit</button> -->
        </div>
      </form>
    </div>
    <div class="w-5/12">
      <h1>Order Summary</h1>
      <div class="flex flex-col flex-shrink p-4 space-y-4 border-b-2">
        <div class="flex max-w-sm rounded-lg">
          <img
            class="w-32 mr-4 bg-no-repeat bg-contain rounded-lg h-28"
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
        <div class="flex max-w-sm rounded-lg">
          <img
            class="w-32 mr-4 bg-no-repeat bg-contain rounded-lg h-28"
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
      <div class="flex flex-col flex-shrink p-4 space-y-4 border-b-2">
        <label class="text-gray-700" for="discount">Gift card/Discount Code</label>
        <div class="flex">
          <input
            type="text"
            id="discount"
            class="w-full px-4 py-2 mr-2 text-gray-800 bg-white border border-gray-300 rounded focus:border-blue-500 focus:outline-none focus:shadow-outline"
          />
          <button
            class="px-4 py-2 text-gray-200 bg-gray-800 rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
          >Apply</button>
        </div>
      </div>
      <div class="flex flex-col flex-shrink p-4 space-y-4 border-b-2">
        <div class="flex justify-between">
          <h1>Shipping</h1>
          <p>0</p>
        </div>
        <div class="flex justify-between">
          <h1>Discount</h1>
          <p>0</p>
        </div>
        <div class="flex justify-between">
          <h1>TOTAL</h1>
          <p>0</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

};
</script>

<style lang="scss" scoped>
</style>