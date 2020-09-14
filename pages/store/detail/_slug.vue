<template>
  <div class="xl:flex-col xl:container xl:mx-auto xl:px-12">
    <div class="xl:w-8/12 xl:flex-none mt-16 py-6 xl:mt-16">
      <v-title></v-title>
    </div>
    <div class="xl:flex">
      <div class="xl:w-8/12">
        <div>
          <v-pic-slider></v-pic-slider>
        </div>
      </div>
      <div class="xl:w-4/12">
        <div class="container mx-auto xl:pl-4 xl:pr-0 px-4 xl:mt-0 mt-32">
          <div class="grid grid-cols-2 xl:grid-cols-1 gap-3 mb-3">
            <div class="relative h-28 rounded-lg border-2 border-solid border-gray-200">
              <div class="absolute out">
                <div class="w-20 h-8 bg-red-300 rounded-full">
                  <div class="flex h-full items-center justify-center">
                    <div class="font-bold text-white" style="font-size: 18px;">24%&nbsp;</div>
                    <div class="font-light text-white" style="font-size: 11px;">OFF</div>
                  </div>
                </div>
              </div>
              <div class="flex flex-col items-center h-full justify-center pt-4">
                <div class="font-poppins font-light text-xs line-through">Rp. 6.000.000</div>
                <div class="font-poppins font-medium text-lg">Rp. 4.000.000</div>
              </div>
            </div>
            <div class="rounded-lg border-2 border-solid border-gray-200">
              <div class="flex flex-col items-center h-full justify-center">2</div>
            </div>
          </div>
          <div class="grid grid-cols-2 gap-3">
            <div class="h-10 rounded-lg border-2 border-solid border-red-300">
              <div class="flex flex-col items-center h-full justify-center">
                <div class="font-poppins font-medium text-red-300">Message Vendor</div>
              </div>
            </div>
            <div class="bg-red-300 rounded-lg">
              <div class="flex flex-col items-center h-full justify-center">
                <div class="font-poppins font-medium text-white">Order Now</div>
              </div>
            </div>
          </div>
          <div class="relative h-full my-8 rounded-lg border-2 border-solid border-gray-200">
            <div class="absolute out-title bg-white pr-1">
              <div class="font-poppins font-medium">Details</div>
            </div>
            <div class="p-4 font-normal font-poppins text-xs leading-relaxed text-justify">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eget diam venenatis, iaculis ante a, consequat augue. Sed in porttitor lorem, ac euismod ex.</p>
            </div>
          </div>
          <div class="relative h-full mb-8 rounded-lg border-2 border-solid border-gray-200">
            <div class="absolute out-title bg-white pr-1">
              <div class="font-poppins font-medium">Terms & Conditions</div>
            </div>
            <div class="p-4 font-normal font-poppins text-xs leading-relaxed text-justify">
              <p>
                - Down Payment is 50% of the value of the shoes; to be paid before the production. Once the Down Payment have been paid, there will be no refund due to any cancellation.
                <br />- Customer must complete the full payment before we ship the shoes/Customer takes the shoes.
                <br />- Major changes are not allowed after the shoes are made. (Minor changes such as additional embellishment is allowed with extra charge.)
                <br />- We don't accept any return / exchange / refund once the shoes have been shipped / used by the customer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div>
      <!-- <store-wrapper :is-sub="false" title="Other product you might like"></store-wrapper> -->
    </div>
  </div>
</template>

<script>
import ItemTitle from "@/components/store/ItemTitle";
import ItemPic from "@/components/store/SliderDetailPic";

export default {
  components: {
    "v-title": ItemTitle,
    "v-pic-slider": ItemPic,
  },
};
</script>

<style scoped>
.out {
  top: 0.8rem;
  left: -0.6rem;
}
.out-title {
  top: -0.8rem;
  left: 0.6rem;
}
</style>