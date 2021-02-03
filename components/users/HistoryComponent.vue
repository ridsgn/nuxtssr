<template>
  <div>
    <div v-if="rows">
      <t-table
        :headers="['ID', 'Date', 'Order ID', 'Price', 'Status', 'Action']"
        :data="get_rows()"
      >
        <template v-if="!rows.length" v-slot:tbody="props">
          <tbody :class="props.tbodyClass">
            <tr :class="[props.trClass, 'text-center']">
              <td :class="props.tdClass" colspan="6">
                <t-alert show :dismissible="false" variant="danger">
                  No data was found!
                </t-alert>
              </td>
            </tr>
          </tbody>
        </template>
        <template v-else slot="row" slot-scope="props">
          <tr
            :class="[
              props.trClass,
              props.rowIndex % 2 === 0 ? 'bg-gray-100' : '',
            ]"
          >
            <td :class="props.tdClass">
              {{ props.rowIndex + 1 }}
            </td>
            <td :class="props.tdClass">
              {{ props.row.date }}
            </td>
            <td :class="props.tdClass">
              {{ props.row.order_id }}
            </td>
            <td :class="props.tdClass">
              <span> IDR {{ props.row.total_price }} </span>
            </td>
            <td :class="[props.tdClass, 'text-center']">
              <span
                v-if="props.row.status === 'pending'"
                class="px-5 py-2 text-xs font-bold text-yellow-900 bg-yellow-200 rounded-full d-flex"
              >
                {{ props.row.status }}
              </span>
              <span
                v-else
                class="px-5 py-2 text-sm font-bold text-gray-900 bg-gray-200 rounded-full d-flex"
              >
                {{ props.row.status }}
              </span>
            </td>
            <td :class="[props.tdClass, 'flex']">
              <t-button
                @click="$modal.show('details', props.row.order_details)"
                variant="cta"
              >
                <span class="text-xs">Details</span>
              </t-button>
              <t-button
                :disabled="props.row.status !== 'pending'"
                :class="['ml-4', { hidden: props.row.status !== 'pending' }]"
                @click="$modal.show('cancel', props.row.order_id)"
                :variant="{
                  outline: props.row.status === 'pending',
                  disabledOutline: props.row.status !== 'pending',
                }"
              >
                <span class="text-xs">Cancel Order</span>
              </t-button>
            </td>
          </tr>
        </template>
        <template
          slot="tfoot"
          slot-scope="{ tfootClass, trClass, tdClass, renderResponsive }"
        >
          <tfoot :class="tfootClass">
            <tr :class="trClass">
              <td :class="tdClass" :colspan="6">
                <t-pagination
                  :hide-prev-next-controls="renderResponsive"
                  :total-items="rows.length"
                  :per-page="elementsPerPage"
                  v-model="currentPage"
                />
              </td>
            </tr>
          </tfoot>
        </template>
      </t-table>

      <t-modal name="details" @before-open="onBeforeOpen" variant="clean-full">
        <template v-slot:header> Order Details </template>
        <div v-if="detail">
          <div class="grid grid-cols-4 gap-6 mb-8">
            <t-card header="Order ID"> {{ detail.order_id }} </t-card>
            <t-card header="Total Amount"> {{ detail.amount }} </t-card>
            <t-card header="Payment Type"> {{ detail.payment_type }} </t-card>
            <t-card header="Transaction Time">
              {{ detail.transaction_time }}
            </t-card>
          </div>

          <div class="mb-8">
            <t-card header="Product Details">
              <t-table
                :headers="[
                  'ID',
                  'Product',
                  'Price',
                  'Qty',
                  'Category',
                  'Type',
                  'Resi',
                  'Action',
                ]"
                :data="detail.item_detail"
              >
                <template v-if="!rows.length" v-slot:tbody="props">
                  <tbody :class="props.tbodyClass">
                    <tr :class="[props.trClass, 'text-center']">
                      <td :class="props.tdClass" colspan="6">
                        <t-alert show :dismissible="false" variant="danger">
                          No data was found!
                        </t-alert>
                      </td>
                    </tr>
                  </tbody>
                </template>
                <template
                  slot="row"
                  slot-scope="{ trClass, tdClass, rowIndex, row }"
                >
                  <tr
                    :class="[trClass, rowIndex % 2 === 0 ? 'bg-gray-100' : '']"
                  >
                    <td :class="[tdClass]">{{ rowIndex + 1 }}</td>
                    <td :class="[tdClass]">
                      {{ row.product.name }}
                    </td>
                    <td :class="[tdClass]">
                      {{ row.price }}
                    </td>
                    <td :class="[tdClass]">
                      {{ row.quantity }}
                    </td>
                    <td :class="[tdClass]">
                      {{ row.product.category }}
                    </td>
                    <td :class="[tdClass]">
                      <span
                        v-if="row.product.type === 'Service'"
                        class="px-5 py-2 text-sm font-bold text-green-900 bg-green-200 rounded-full d-flex"
                      >
                        Service
                      </span>
                      <span
                        v-else
                        class="px-5 py-2 text-sm font-bold text-gray-900 bg-gray-200 rounded-full d-flex"
                      >
                        Physical Goods
                      </span>
                    </td>
                    <td>
                      <span
                        v-if="row.product.type !== 'Service' && row.resi"
                        class="hover:underline cursor-pointer"
                        @click="checkShipStatus(row.resi)"
                      >
                        {{ row.resi }}
                      </span>
                    </td>
                    <td :class="[tdClass, 'text-center']">
                      <t-dropdown
                        :class="{ hidden: detail.status === 'pending' }"
                      >
                        <template slot="button">
                          <svg
                            version="1.1"
                            viewBox="0 0 16 16"
                            class="text-gray-600 fill-current svg-icon svg-fill"
                            heigth="20"
                            style="width: 20px"
                          >
                            <path
                              pid="0"
                              d="M13 7a2 2 0 1 1 .001 3.999A2 2 0 0 1 13 7zM8 7a2 2 0 1 1 .001 3.999A2 2 0 0 1 8 7zM3 7a2 2 0 1 1 .001 3.999A2 2 0 0 1 3 7z"
                            />
                          </svg>
                        </template>
                        <button
                          v-if="row.product.type === 'Service'"
                          class="block w-full px-4 py-2 text-left text-gray-800 hover:text-white hover:bg-hw-teal"
                          @click="$modal.show('approve', row.id)"
                        >
                          Project Done
                        </button>
                        <button
                          v-else
                          class="block w-full px-4 py-2 text-left text-gray-800 hover:text-white hover:bg-hw-teal"
                          @click="$modal.show('complaint', row.id)"
                        >
                          Complaint
                        </button>
                      </t-dropdown>
                    </td>
                  </tr>
                  <!-- <pre>{{ detail }}</pre> -->
                </template>
              </t-table>
            </t-card>
            <p
              v-if="loading"
              class="flex mt-10 w-full justify-center items-center"
            >
              <span class="loading"></span>
            </p>
            <p v-else-if="error">Error while fetching mountains 🤬</p>
            <t-card v-else-if="status">{{ status.data }}</t-card>
          </div>
          <!-- <pre>{{ detail }}</pre> -->
          <!-- <div
            class="flex mb-4 space-x-4"
            v-for="item in detail.item_detail"
            :key="item.id"
          >
            <p>{{ item.id }}</p>
            <button @click="$modal.show('approve', item.id)">button</button>
          </div> -->
        </div>
        <div v-else>oppsss it's empty</div>
      </t-modal>

      <t-modal name="approve" @before-open="approveBeforeOpen" variant="clean">
        <template v-slot:header> Are you sure ? </template>
        <p>{{ id }}</p>
        <template v-slot:footer>
          <div class="flex justify-between">
            <t-button variant="outline" type="button">Cancel</t-button>
            <t-button @click="processApprove(id)">Terima Barang</t-button>
          </div>
        </template>
      </t-modal>

      <ValidationObserver>
        <t-modal
          name="complaint"
          @before-open="complaintBeforeOpen"
          variant="clean"
        >
          <template v-slot:header> Any Problem ? </template>
          <div>
            <v-select v-model="complaint.reason" class="mb-4 px-4 style-chooser" label="reason" :options="[1, 2, 3]" :clearable="false" placeholder="Select Reason"></v-select>
            <v-select v-model="complaint.solution" class="mb-4 px-4 style-chooser" label="solution" :options="[1, 2, 3]" :clearable="false" placeholder="Select Solution"></v-select>
            <ValidationProvider
              class="flex-grow"
              rules="required"
              v-slot="{ errors, classes }"
            >
              <label
                class="block mb-2 text-xs font-medium text-gray-600"
                for="Description"
                >Description</label
              >
              <div class="content" :class="classes">
                <input
                  id="Description"
                  v-model="complaint.description"
                  class="w-full px-3 py-2 text-xs leading-none border border-gray-300 rounded outline-none border-box focus:border-teal-500"
                  type="text"
                  :disabled="checkbox"
                  :class="classes"
                />
                <span>{{ errors[0] }}</span>
              </div>
            </ValidationProvider>
          </div>
          <template v-slot:footer>
            <div class="flex justify-between">
              <t-button variant="outline" type="button">Cancel</t-button>
              <t-button @click="processComplaint(id)">Send</t-button>
            </div>
          </template>
        </t-modal>
      </ValidationObserver>

      <t-modal name="cancel" @before-open="cancelBeforeOpen" variant="clean">
        <template v-slot:header> Are you sure to cancel your order ? </template>
        <p>{{ orderId }}</p>
        <template v-slot:footer>
          <div class="flex justify-between">
            <t-button variant="outline" type="button">No</t-button>
            <t-button @click="processCancel(orderId)">Yes</t-button>
          </div>
        </template>
      </t-modal>
    </div>
    <div v-else>oppss</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentPage: 1,
      elementsPerPage: 10,
      ascending: false,
      sortColumn: "",
      detail: undefined,
      id: undefined,
      orderId: undefined,
      approvedModal: false,
      loading: false,
      error: undefined,
      status: undefined,
      complaint: {
        id: undefined,
        reason: undefined,
        solution: undefined,
        description: undefined,
      },
    };
  },

  props: {
    data: {
      required: true,
      type: Array,
    },
  },

  methods: {
    async checkShipStatus(resi) {
      try {
        this.loading = true;
        this.status = await this.$axios.$get(
          `api/shipping?courier=jne&awb=${resi}`
        );
        this.loading = false;
      } catch (error) {
        this.error = error;
      }
    },

    async processComplaint(id) {
      try {
        this.$modal.hide("complaint");
        await this.$axios.$post('api/complaint/store', {
          order_detail: id,
          vendor: 4,
          reason: this.complaint.reason,
          solution: this.complaint.solution,
          description: this.complaint.description,
        });
        this.$toast.success("Complaint has been sent").goAway(1500);
      } catch (error) {
        this.error = error;
      }
    },

    async processApprove(id) {
      try {
        this.$toast.show("Processing...").goAway(1500);
        await this.$axios.$post(`api/approved/${id}`, {
          approved: 1,
        });
        this.$modal.hide("approve");
        this.$modal.hide("details");
        this.$toast.success("Successfully approve").goAway(1500);
        window.location.reload();
      } catch (e) {
        this.$toast.error("Error while approving");
      }
    },
    async processCancel(id) {
      try {
        this.$toast.show("Processing...").goAway(1500);
        await this.$axios.$post(`api/payment/cancel/${id}`);
        this.$modal.hide("approve");
        this.$modal.hide("details");
        this.$toast.success("Successfully approve").goAway(1500);
        window.location.reload();
      } catch (e) {
        this.$toast.error("Error while approving");
      }
    },
    approveBeforeOpen({ params, cancel }) {
      // you can add a condition to cancel the modal opening
      if (false) {
        cancel();
      }

      this.id = params;
    },
    complaintBeforeOpen({ params, cancel }) {
      // you can add a condition to cancel the modal opening
      if (false) {
        cancel();
      }

      this.id = params;
    },
    cancelBeforeOpen({ params, cancel }) {
      // you can add a condition to cancel the modal opening
      if (false) {
        cancel();
      }

      this.orderId = params;
    },
    onBeforeOpen({ params, cancel }) {
      // you can add a condition to cancel the modal opening
      if (false) {
        cancel();
      }

      this.detail = params;
    },
    sortTable: function sortTable(col) {
      if (this.sortColumn === col) {
        this.ascending = !this.ascending;
      } else {
        this.ascending = true;
        this.sortColumn = col;
      }

      var ascending = this.ascending;

      this.rows.sort(function (a, b) {
        if (a[col] > b[col]) {
          return ascending ? 1 : -1;
        } else if (a[col] < b[col]) {
          return ascending ? -1 : 1;
        }
        return 0;
      });
    },
    num_pages: function num_pages() {
      return Math.ceil(this.rows.length / this.elementsPerPage);
    },
    get_rows: function get_rows() {
      var start = (this.currentPage - 1) * this.elementsPerPage;
      var end = start + this.elementsPerPage;
      return this.rows.slice(start, end);
    },
    change_page: function change_page(page) {
      this.currentPage = page;
    },
    check(item) {
      console.log(item);
    },
  },

  computed: {
    columns: function columns() {
      const allowed = ["order_details"];
      if (this.rows.length == 0) {
        return [];
      }
      return Object.keys(this.rows[0]).filter((key) => !allowed.includes(key));
    },
    headers() {
      const newColumns = [];
      for (let i = 0; i < this.columns.length; i++) {
        newColumns.push(this.columns[i].split("_").join(" "));
      }

      newColumns.push("action");
      return newColumns;
    },
    rows() {
      return this.data.filter((row) => row.total_price !== "0");
    },
  },
};
</script>

<style scoped>
.loading {
  display: flex;
  width: 1.5rem;
  height: 1.5rem;
  border: 4px solid rgba(9, 133, 81, 0.705);
  border-radius: 50%;
  border-top-color: #158876;
  animation: spin 1s ease-in-out infinite;
}

@keyframes spin {
  to {
    -webkit-transform: rotate(360deg);
  }
}
</style>
