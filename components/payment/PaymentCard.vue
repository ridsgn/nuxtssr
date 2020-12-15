<template>
  <div class="container flex items-center justify-center h-screen mx-auto">
    <section class="relative p-0 m-0 overflow-visible bg-white rounded-md shadow">
      <div class="p-4 border-b-4">
        <div class="">
          <div class="flex">
            <input
              type="text"
              class="flex-grow-0 flex-shrink-0 px-5 py-2 mr-2 bg-gray-200 rounded-md flex-basis focus:outline-none focus:shadow-outline"
              placeholder="Input voucher code"
            />

            <t-button variant="disabled" class="w-full">Apply</t-button>
          </div>
        </div>
      </div>
      <div class="p-4">
        <h4 class="font-bold text-gray-800">Order Summary</h4>
        <div class="my-4">
          <div class="space-y-2">
            <div
              v-for="item in product"
              :key="item.index"
              class="flex flex-wrap items-center justify-between"
            >
              <div class="w-48">{{ item.product.name }}</div>
              <code>&times;{{ item.qty }}</code>
              <div>
                IDR
                {{
                  item.pay === "full"
                    ? item.product.unit_type === "pax"
                      ? price(item.product.price / item.product.quantity)
                      : price(item.product.price)
                    : price(item.product.price * (item.product.down_payment / 100))
                }}
              </div>
            </div>
          </div>
        </div>
        <div class="mt-6">
          <div>
            <t-button variant="cta" @click="processOrder()" class="w-full"
              >Pay Now
            </t-button>
          </div>
        </div>
      </div>
    </section>
    <pre> {{ product }} </pre>
  </div>
</template>

<script>
export default {
  props: {
    product: {
      required: true,
      type: Array,
    },
  },
  methods: {
    price(value) {
      const formatter = new Intl.NumberFormat("id-ID", {
        style: "decimal",
        maximumSignificantDigits: 4,
        currency: "IDR",
      });

      return formatter.format(value);
    },
    async processOrder() {
      try {
        if (this.$route.query.expires) {
          await this.$store.dispatch("cart/addProductNegoVendor", {
            product: this.product,
            // pay: "full"
          });

          await this.$store.dispatch("cart/processOrder", {
            shipping: false,
            vendor: true,
            nego: this.$route.params.id ? this.$route.params.id : false,
          });
        } else {
          await this.$store.dispatch("cart/processOrder", {
            shipping: false,
            vendor: true,
            nego: this.$route.params.id ? this.$route.params.id : false,
          });
        }
      } catch (err) {
        alert(err);
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
