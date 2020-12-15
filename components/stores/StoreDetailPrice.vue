<template>
  <div>
    <div class="px-4 lg:px-0">
      <div class="mt-32 lg:pl-8 lg:pr-0 lg:mt-0">
        <div class="grid grid-cols-3 gap-3 mb-3">
          <div
            class="relative col-span-3 border-2 border-gray-500 border-solid rounded-lg h-28"
          >
            <div v-if="afterDiscount" class="absolute -mt-4 -ml-2 lg :mt-1">
              <div class="w-20 h-8 bg-teal-600 rounded-full">
                <div class="flex items-center justify-center h-full">
                  <div class="text-sm font-bold text-white">
                    {{ oneProduct.disc }}%&nbsp;
                  </div>
                  <div class="text-xs font-light text-white">OFF</div>
                </div>
              </div>
            </div>

            <div class="flex flex-col items-center justify-center h-full pt-2">
              <div
                v-show="afterDiscount && isDiscounted"
                class="text-sm font-light leading-none line-through"
              >
                IDR {{ price(oneProduct.price) }}
              </div>
              <div class="text-2xl font-semibold">
                IDR
                {{ price(afterDiscount ? afterDiscount * qty : perItem * qty) }}
              </div>
              <code
                v-if="oneProduct.quantity > 1 && this.$route.query.vendor"
                class="absolute text-xs bottom-0 right-0 mr-1"
              >
                {{ perItem }} / pcs
              </code>
            </div>
          </div>

          <p class="flex items-center justify-end">Quantity</p>
          <div class="relative">
            <input
              type="number"
              maxlength="3"
              v-model="qty"
              class="w-full border-2 border-gray-500 border-solid rounded-lg outline-none justify-self-end p-2 bg-transparent bg-none"
            />
            <span v-if="qty < oneProduct.quantity" class="text-xs w-full center absolute"
              >min.order {{ oneProduct.quantity }}</span
            >
          </div>
          <cite class="flex items-center justify-start">pcs</cite>
        </div>

        <div class="flex flex-col">
          <div
            class="relative order-last h-full mt-8 border-2 border-gray-500 border-solid rounded-lg lg:my-8 lg:order-first"
          >
            <div class="absolute pr-1 ml-1 -mt-4 bg-gray-200">
              <div class="font-medium font-poppins">Details</div>
            </div>
            <div
              class="max-w-sm p-4 text-xs font-normal leading-relaxed text-left font-poppins"
            >
              <div
                v-html="
                  this.$route.query.vendor ? oneProduct.description : oneProduct.details
                "
              >
                <!-- {{
									this.$route.query.vendor
										? oneProduct.description
										: oneProduct.details
								}} -->
              </div>
            </div>
          </div>

          <div class="flex justify-between space-x-3">
            <t-button
              tagName="a"
              :href="link"
              variant="outline"
              class="flex-1 flex-shrink w-2/4 font-medium"
              target="_blank"
              >{{ this.$route.query.vendor ? "Chat Vendor" : "Chat" }}</t-button
            >
            <t-button
              :variant="qty < oneProduct.quantity ? 'disabled' : ''"
              :disabled="qty < oneProduct.quantity"
              @click="addToCart()"
              class="flex-grow w-1/4 font-medium"
              >{{ this.$route.query.vendor ? "Order Now" : "Add to Cart" }}</t-button
            >
          </div>
        </div>
      </div>
    </div>
    <t-modal v-model="showModal" variant="clean">
      <template v-slot:header> Select Your Service Date </template>
      <div class="flex items-center justify-center">
        <t-datepicker
          :disabled-dates="disabledDates"
          v-model="date"
          inline
          placeholder="Please select your service date"
        >
          <template slot="day" slot-scope="{ day, dayFormatted }">
            <span v-if="day < new Date()"> &times; </span>
            <span v-else>
              {{ dayFormatted }}
            </span>
          </template>
        </t-datepicker>
      </div>
      <p v-show="!oneProduct.down_payment" class="mt-2 text-xs text-center text-gray-500">
        *this product don't have installment payment method
      </p>
      <template v-slot:footer>
        <div class="flex justify-between">
          <t-button
            :variant="{ outline: !date }"
            @click="processOrder('full')"
            :disabled="!date"
            type="button"
            >{{ loading ? "Please wait..." : "Pay Full" }}</t-button
          >
          <t-button
            @click="processOrder('down')"
            :disabled="!date || !oneProduct.down_payment"
            :variant="{ disabled: !date || !oneProduct.down_payment }"
            >{{ loading ? "Please wait..." : "Pay in Installments" }}</t-button
          >
        </div>
      </template>
    </t-modal>
  </div>
</template>

<script>
export default {
  data() {
    return {
      qty: 1,
      showModal: false,
      loading: false,
      date: "",
      disabledDates: [
        // new Date()
        function (date) {
          var myDate = new Date();
          return date < myDate;
        },
      ],
    };
  },
  methods: {
    price(value) {
      const formatter = new Intl.NumberFormat("id-ID", {
        style: "decimal",
        currency: "IDR",
      });

      return formatter.format(value);
    },
    addToCart() {
      if (!this.$store.state.auth.loggedIn) {
        this.$router.push("/auth/login");
      } else {
        if (this.$route.query.vendor) {
          this.showModal = true;
        } else {
          this.$store.dispatch("cart/addProductToCart", {
            product: this.oneProduct,
            afterDiscount: parseInt(this.afterDiscount),
            quantity: parseInt(this.qty),
          });
        }
      }
    },
    processOrder(value) {
      this.loading = true;

      this.$store.dispatch("cart/addProductVendor", {
        date: this.date,
        product: this.oneProduct,
        qty: parseInt(this.qty),
        pay: value,
      });

      this.$router.push("/payment");
    },
  },
  created() {
    return (this.qty = this.oneProduct.quantity);
  },
  computed: {
    isDiscounted() {
      return this.afterDiscount === this.oneProduct.price;
    },
    link() {
      return `https://api.whatsapp.com/send/?phone=6285395814064&text=Hi+${this.oneProduct.vendor_name}+I%27m+interested+in+your+product+for+sale`;
    },
    perItem() {
      return this.oneProduct.price / this.oneProduct.quantity;
    },
  },
};
</script>

<style lang="scss" scoped>
.center {
  left: 50%;
  bottom: -18px;
  transform: translateX(-50%);
}
</style>
