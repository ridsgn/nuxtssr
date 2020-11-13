export const state = () => ({
	vErrors: {},
	message: {},
});

// getters
export const getters = {
	vErrors(state) {
		return state.vErrors;
	},

	message(state) {
		return state.message;
	}
};

// mutations
export const mutations = {
	SET_VALIDATION_ERROR(state, vErrors) {
		state.vErrors = vErrors;
	},

	SET_RESPONSE_MESSAGE(state, res) {
		state.message = res;
	}
};

// actions
export const actions = {
	setErrors({ commit }, vErrors) {
		commit("SET_VALIDATION_ERROR", vErrors);
	},
	setMessage({ commit }, res) {
		commit("SET_RESPONSE_MESSAGE", res);
	},
	clearErrors({ commit }) {
		commit("SET_VALIDATION_ERROR", {});
		commit("SET_RESPONSE_MESSAGE", {});
	},
};
