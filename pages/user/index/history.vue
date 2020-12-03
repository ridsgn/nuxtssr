<template>
	<div>
		<section class="text-gray-700 body-font">
			<div class="container px-5 py-5 mx-auto">
				<div class="flex flex-col w-full mb-6 text-center">
					<h1
						class="mb-2 text-3xl font-medium text-gray-900 sm:text-4xl title-font"
					>
						Payment History
					</h1>
				</div>
				<div class="w-full mx-auto overflow-auto">
					<!-- <table class="w-full text-left whitespace-no-wrap table-auto">
						<thead>
							<tr>
								<th
									class="px-4 py-3 text-sm font-medium tracking-wider text-gray-900 bg-gray-200 rounded-tl rounded-bl title-font"
								>
									#
								</th>
								<th
									class="px-4 py-3 text-sm font-medium tracking-wider text-gray-900 bg-gray-200 title-font"
								>
									Date
								</th>
								<th
									class="px-4 py-3 text-sm font-medium tracking-wider text-gray-900 bg-gray-200 title-font"
								>
									Trx. ID
								</th>
								<th
									class="px-4 py-3 text-sm font-medium tracking-wider text-gray-900 bg-gray-200 title-font"
								>
									Total Price
								</th>
								<th
									class="px-4 py-3 text-sm font-medium tracking-wider text-gray-900 bg-gray-200 title-font"
								>
									Status
								</th>
								<th
									class="px-4 py-3 text-sm font-medium tracking-wider text-gray-900 bg-gray-200 rounded-tr rounded-br title-font"
								>
									Action
								</th>
							</tr>
						</thead>
						<tbody>
							<tr v-for="(item, index) in data.data[0]" :key="item.id">
								<td class="px-4 py-6">{{ index + 1 }}</td>
								<td class="px-4 py-6">
									{{ new Date(item.date).toDateString() }}
								</td>
								<td class="px-4 py-6">{{ item.order_id }}</td>
								<td class="px-4 py-6">{{ Number(item.price) }}</td>
								<td class="px-4 py-6">
									<code
										:class="{
											'text-yellow-800 bg-yellow-200':
												item.status === 'pending',
										}"
										class="inline-flex px-2 text-xs font-semibold leading-5 rounded-full"
										>{{ item.status }}</code
									>
								</td>
								<td>
									<t-button variant="cta" class="text-xs"
										><svg
											xmlns="http://www.w3.org/2000/svg"
											width="18"
											height="18"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											stroke-width="2"
											stroke-linecap="round"
											stroke-linejoin="round"
											class="mr-2 feather feather-info"
										>
											<circle cx="12" cy="12" r="10"></circle>
											<line x1="12" y1="16" x2="12" y2="12"></line>
											<line x1="12" y1="8" x2="12.01" y2="8"></line></svg
										><span>Detail</span></t-button
									>
								</td>
							</tr>
							<tr>
                <td class="px-4 py-3 border-t-2 border-b-2 border-gray-200">4</td>
								<td class="px-4 py-3 border-t-2 border-b-2 border-gray-200">
									454484JYUW
								</td>
								<td class="px-4 py-3 border-t-2 border-b-2 border-gray-200">
									48 Mb/s
								</td>
								<td class="px-4 py-3 border-t-2 border-b-2 border-gray-200">
									120 GB
								</td>
								<td
									class="px-4 py-3 text-lg text-gray-900 border-t-2 border-b-2 border-gray-200"
								>
									<code class="inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full">Success</code>
								</td>
							</tr>
						</tbody>
					</table> -->
					<table>
						<thead>
							<tr>
								<th
									v-for="(col, index) in columns"
									v-on:click="sortTable(col)"
									:key="index"
								>
									{{ col }}
									<div
										class="arrow"
										v-if="col == sortColumn"
										v-bind:class="[ascending ? 'arrow_up' : 'arrow_down']"
									></div>
								</th>
								<th>Action</th>
							</tr>
						</thead>
						<tbody>
							<tr v-for="(row, index) in get_rows()" :key="index">
								<td v-for="(col, index) in columns" :key="index">
									{{ row[col] }}
								</td>
								<td>
									<t-button @click="check(row.order_details)" variant="cta" class="w-full text-xs">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="18"
											height="18"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											stroke-width="2"
											stroke-linecap="round"
											stroke-linejoin="round"
											class="mr-2 feather feather-info"
										>
											<circle cx="12" cy="12" r="10"></circle>
											<line x1="12" y1="16" x2="12" y2="12"></line>
											<line x1="12" y1="8" x2="12.01" y2="8"></line>
										</svg>
										<span>Detail</span>
									</t-button>
								</td>
							</tr>
						</tbody>
					</table>
					<div class="pagination">
						<div
							class="number"
							v-for="(i, index) in num_pages()"
							v-bind:class="[i == currentPage ? 'active' : '']"
							v-on:click="change_page(i)"
							:key="index"
						>
							{{ i }}
						</div>
					</div>
				</div>
			</div>
		</section>
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
		};
	},
	async asyncData({
		isDev,
		route,
		store,
		env,
		params,
		query,
		req,
		res,
		redirect,
		error,
		$axios,
	}) {
		const rows = await $axios.$get(`api/payment/history`);
		// console.log(data)

		return { rows };
	},
	methods: {
		sortTable: function sortTable(col) {
			if (this.sortColumn === col) {
				this.ascending = !this.ascending;
			} else {
				this.ascending = true;
				this.sortColumn = col;
			}

			var ascending = this.ascending;

			this.rows.data.historyPayment.sort(function (a, b) {
				if (a[col] > b[col]) {
					return ascending ? 1 : -1;
				} else if (a[col] < b[col]) {
					return ascending ? -1 : 1;
				}
				return 0;
			});
		},
		num_pages: function num_pages() {
			return Math.ceil(
				this.rows.data.historyPayment.length / this.elementsPerPage
			);
		},
		get_rows: function get_rows() {
			var start = (this.currentPage - 1) * this.elementsPerPage;
			var end = start + this.elementsPerPage;
			return this.rows.data.historyPayment.slice(start, end);
		},
		change_page: function change_page(page) {
			this.currentPage = page;
		},
		check(index) {
			console.log(index);
		}
	},
	computed: {
		columns: function columns() {
			const allowed = ["order_details", "id"];
			if (this.rows.data.historyPayment.length == 0) {
				return [];
			}
			return Object.keys(this.rows.data.historyPayment[0]).filter(
				(key) => !allowed.includes(key)
			);
		},
	},
};
</script>

<style scoped>
table {
	font-family: "Open Sans", sans-serif;
	width: 750px;
	border-collapse: collapse;
	border: 3px solid #44475c;
	margin: 10px 10px 0 10px;
}

table th {
	text-transform: uppercase;
	text-align: left;
	background: #44475c;
	color: #fff;
	cursor: pointer;
	padding: 8px;
	min-width: 30px;
}
table th:hover {
	background: #717699;
}
table td {
	text-align: left;
	padding: 8px;
	border-right: 2px solid #7d82a8;
}
table td:last-child {
	border-right: none;
}
table tbody tr:nth-child(2n) td {
	background: #d4d8f9;
}

table {
	font-family: "Open Sans", sans-serif;
	width: 750px;
	border-collapse: collapse;
	border: 3px solid #44475c;
	margin: 10px 10px 0 10px;
}

table th {
	text-transform: uppercase;
	text-align: left;
	background: #44475c;
	color: #fff;
	cursor: pointer;
	padding: 8px;
	min-width: 30px;
}
table th:hover {
	background: #717699;
}
table td {
	text-align: left;
	padding: 8px;
	border-right: 2px solid #7d82a8;
}
table td:last-child {
	border-right: none;
}
table tbody tr:nth-child(2n) td {
	background: #d4d8f9;
}

.pagination {
	font-family: "Open Sans", sans-serif;
	text-align: right;
	width: 750px;
	padding: 8px;
}

.arrow_down {
	background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB8AAAAaCAYAAABPY4eKAAAAAXNSR0IArs4c6QAAAvlJREFUSA29Vk1PGlEUHQaiiewslpUJiyYs2yb9AyRuJGm7c0VJoFXSX9A0sSZN04ULF12YEBQDhMCuSZOm1FhTiLY2Rky0QPlQBLRUsICoIN/0PCsGyox26NC3eTNn3r3n3TvnvvsE1PkwGo3yUqkkEQqFgw2Mz7lWqwng7ztN06mxsTEv8U0Aam5u7r5EInkplUol/f391wAJCc7nEAgE9Uwmkzo4OPiJMa1Wq6cFs7Ozt0H6RqlUDmJXfPIx+qrX69Ti4mIyHA5r6Wq1egND+j+IyW6QAUoul18XiUTDNHaSyGazKcZtdgk8wqhUKh9o/OMvsVgsfHJy0iWqVrcQNRUMBnd6enqc9MjISAmRP3e73T9al3XnbWNjIw2+KY1Gc3imsNHR0YV4PP5+d3e32h3K316TySQFoX2WyWR2glzIO5fLTSD6IElLNwbqnFpbWyO/96lCoai0cZjN5kfYQAYi5H34fL6cxWIZbya9iJyAhULBHAqFVlMpfsV/fHxMeb3er+Vy+VUzeduzwWC45XA4dlD/vEXvdDrj8DvURsYEWK3WF4FA4JQP9mg0WrHZbEYmnpa0NxYgPVObm5teiLABdTQT8a6vrwdRWhOcHMzMzCiXlpb2/yV6qDttMpkeshEzRk4Wo/bfoe4X9vb2amzGl+HoXNT29vZqsVi0sK1jJScG+Xx+HGkL4Tew2TPi5zUdQQt9otPpuBk3e0TaHmMDh1zS7/f780S0zX6Yni+NnBj09fUZUfvudDrNZN+GkQbl8Xi8RLRtHzsB9Hr9nfn5+SjSeWUCXC7XPq5kw53wsNogjZNohYXL2EljstvtrAL70/mVaW8Y4OidRO1/gwgbUMvcqGmcDc9aPvD1gnTeQ+0nmaInokRj0nHh+uvIiVOtVvt2a2vLv7Ky0tL3cRTXIcpPAwMDpq6R4/JXE4vFQ5FI5CN+QTaRSFCYc8vLy1l0rge4ARe5kJ/d27kYkLXoy2Jo4C7K8CZOsEBvb+9rlUp1xNXPL7v3IDwxvPD6AAAAAElFTkSuQmCC");
}
.arrow_up {
	background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAaCAYAAACgoey0AAAAAXNSR0IArs4c6QAAAwpJREFUSA21Vt1PUmEYP4dvkQ8JFMwtBRocWAkDbiqXrUWXzU1rrTt0bdVqXbb1tbW16C9IBUSmm27cODdneoXjputa6069qwuW6IIBIdLvdaF4OAcOiGeDc87zPs/vd57P96WpFq7p6enbGo1mjKZpeTabjU1MTCRagGnOZHFxcXxtbe1XKpUq7+zslJeXl//Mz8+Hy+Uy3RxSE9qTk5M3otFooVQqgef4Wl9f343FYoEmoISrxuNxFX5f9vb2jhn/PxUKhfLS0tIPfFifUESRUMV8Pv/M6XReRm5rTGQyGeXxeGxYe1ezeBpBOBx2rKysbO7v79d4Wy3Y2Nj4GQqFbgnhaugxwiuGJx99Pp9FLBbXxYTXvTqd7v3MzIy6riIWGxJnMpl7AwMD14xGYyMsSq1WUyQdUqn0eSPlusQIsbGrq+vl4OCgvhFQZd1utyv1en0gEolcqsi47nWJlUrlG5fLZVcoFFy2nDKSDpIWlUoVTCQSEk4lCHmJMZ2GTCbTiMVikfIZ88l7enoos9l8dXt7+z6fDicxSJUokqDX6xXcl2wCROoc0vQCWL3sNfLOSdzR0fHY4XC4tVotl40gmVwup9xuN4OQv+UyqCFGH9rg7SOGYVRcBs3IEG4J0nVnamrqOtvuBDGGgQg9+wHFcVEi4a0LNkbdd6TrPKo8ODc311mteIIYjT/a398/jK+s1jnVM0kXoufCFvq0GuiIGEVgQIhfoygM1QrteEa9dAL7ITiYCt4RMabOK5AyKKzKWtvupLcRciu8D5J0EuDDPyT/Snd39yh6VtY2NhYQSR9G79Ds7OxdskRjEyAufvb7/cPoO5Z6e1+xtVKrq6vfcFzyi/A3ZrPZ3GdNSlwgo5ekE4X2RIQGf2C1WlufFE0GBeGWYQ8YERWLxQtnUVB830MKLZfL9RHir8lkssCn2G751tZWEWe03zTKm15YWPiEiXXTYDB0Ig/t7yd8PRws4EicwWHxO4jHD8/C5HiTTqd1BwcHFozKU89origB+y/kmzgYpgOBQP4fGmUiZmJ+WNgAAAAASUVORK5CYII=");
}
.arrow {
	float: right;
	width: 12px;
	height: 15px;
	background-repeat: no-repeat;
	background-size: contain;
	background-position-y: bottom;
}

.number {
	display: inline-block;
	padding: 4px 10px;
	color: #fff;
	border-radius: 4px;
	background: #44475c;
	margin: 0px 5px;
	cursor: pointer;
}
.number:hover,
.number.active {
	background: #717699;
}
</style>
