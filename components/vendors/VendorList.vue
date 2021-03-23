<template>
  <div>
    <div class="">
      <!-- <p v-if="vendors.data.length < 0">Vendor Not Found</p> -->
      <div
        class="grid justify-center grid-cols-none gap-5 mt-10"
        :class="[
          {
            'sm:grid-cols-card-2 lg:grid-cols-card-3 xl:grid-cols-card-4':
              vendors.length > 1
          }
        ]"
        v-if="vendors.length > 0"
      >
        <VendorListItem
          v-for="vendor in vendors"
          :vendor="vendor"
          :key="vendor.id"
        />
      </div>
      <div v-else class="grid justify-center">
        <p>Sorry, vendor you are looking for is not in our database.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "VendorList",
  props: {
    vendors: {
      required: true,
      type: Array
    }
  },
  computed: {}
};
</script>

<style scoped></style>
