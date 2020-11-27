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
				<div class="inline-flex mb-2 space-x-2">
					<t-button>Products</t-button>
					<t-button>Services</t-button>
				</div>
				<div class="w-full mx-auto overflow-auto">
					<table class="w-full text-left whitespace-no-wrap table-auto">
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
							<tr v-for="(item, index) in data.data" :key="item.id">
                <td class="px-4 py-3">{{ index+1 }}</td>
								<td class="px-4 py-3">{{ new Date(item.date).toDateString() }}</td>
								<td class="px-4 py-3">{{ item.order_id }}</td>
								<td class="px-4 py-3">{{ Number(item.price) }}</td>
								<td class="px-4 py-3"><code :class="{ 'text-yellow-800 bg-yellow-200' : item.status === 'pending' }" class="inline-flex px-2 text-xs font-semibold leading-5 rounded-full">{{ item.status }}</code></td>
							</tr>
							<!--
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
							</tr> -->
						</tbody>
					</table>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
export default {
	data() {
		return {}
	},
	async asyncData ({isDev, route, store, env, params, query, req, res, redirect, error, $axios}) {
		const data = await $axios.$get(`api/payment/history`)

		return {data}

	},
	computed: {
		totalPrice: function () {
			return this.data
		}
	}
};
</script>

<style scoped>
</style>
