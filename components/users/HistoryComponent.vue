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
          <tr :class="[props.trClass, props.rowIndex % 2 === 0 ? 'bg-gray-100' : '']">
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
            <td :class="props.tdClass">
              {{ props.row.status }}
            </td>
            <td :class="props.tdClass">
              <t-button
                @click="$modal.show('details', props.row.order_details)"
                variant="cta"
              >
                <span class="text-xs">Details</span>
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
          <pre>{{ detail }}</pre>
          <div
            class="flex mb-4 space-x-4"
            v-for="item in detail.item_detail"
            :key="item.id"
          >
            <p>{{ item.id }}</p>
            <button @click="$modal.show('approve', item.id)">button</button>
          </div>
        </div>
        <div v-else>oppsss it's empty</div>
      </t-modal>

      <t-modal name="approve" @before-open="approveBeforeOpen" variant="clean">
        <template v-slot:header> Are you sure ? </template>
        <p>oyyyy {{ id }}</p>
        <template v-slot:footer>
          <div class="flex justify-between">
            <t-button variant="outline" type="button">Cancel</t-button>
            <t-button @click="processApprove(id)">Terima Barang</t-button>
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
      approvedModal: false,
    };
  },

  props: {
    data: {
      required: true,
      type: Object,
    },
  },

  methods: {
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
        this.$toast.global.my_error();
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

<style scoped></style>
