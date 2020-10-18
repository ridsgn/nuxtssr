export const state = () => ({
	errors: {},
	message: {},
});

// getters
export const getters = {
	errors(state) {
		return state.errors;
	},

	message(state) {
		return state.message;
	}
};

// mutations
export const mutations = {
	SET_VALIDATION_ERRORS(state, errors) {
		state.errors = errors;
	},

	SET_RESPONSE_MESSAGE(state, res) {
		state.message = res;
	}
};

// actions
export const actions = {
	setErrors({ commit }, errors) {
		commit("SET_VALIDATION_ERRORS", errors);
	},
	setMessage({ commit }, res) {
		commit("SET_RESPONSE_MESSAGE", res);
	},
	clearErrors({ commit }) {
		commit("SET_VALIDATION_ERRORS", {});
		commit("SET_RESPONSE_MESSAGE", {});
	}
};
