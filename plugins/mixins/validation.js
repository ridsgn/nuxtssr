import Vue from "vue";
import { mapGetters, mapState } from "vuex";

const Validation = {
	install(Vue, options) {
		Vue.mixin({
			computed: {
				...mapGetters({
					vErrors: "validation/vErrors",
					message: "validation/message",
					// souvenir: 'cart/productsSouvenir',
					// weddingku: 'cart/productsWeddingku',
					oneProduct: 'cart/oneProduct',
					afterDiscount: 'cart/discount',
					itemCount: 'cart/cartItemCount',
					totalPrice: 'cart/cartTotalPrice',
				})
			}
		});
	}
};

Vue.use(Validation);
