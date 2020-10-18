import Vue from "vue";
import { mapGetters } from "vuex";

const Validation = {
	install(Vue, options) {
		Vue.mixin({
			computed: {
				...mapGetters({
					errors: "validation/errors",
					message: "validation/message",
					souvenir: 'cart/productsSouvenir',
					weddingku: 'cart/productsWeddingku',
					oneProduct: 'cart/oneProduct',
					afterDiscount: 'cart/discount',
					itemCount: 'cart/cartItemCount',
					totalPrice: 'cart/cartTotalPrice'
				})
			}
		});
	}
};

Vue.use(Validation);
