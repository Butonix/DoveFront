const state = {
	snack: false,
	snackColor: "",
	snackText: "",
	snackTimeout: 3000
}

const mutations = {
	SET_SNACK(state, value) {
		state.snack = value
	},
	SET_SNACK_COLOR(state, value) {
		state.snackColor = value
	},
	SET_SNACK_TEXT(state, value) {
		state.snackText = value
	},
	SET_SNACK_TIMEOUT(state, value) {
		state.snackTimeout = value
	}
}

const getters = {
	snackState: state => state.snack,
	snackText: state => state.snackText,
	snackColor: state => state.snackColor,
	snackTimeout: state => state.snackTimeout
}

const actions = {
	setSnackState({commit}, value) {
		commit("SET_SNACK", value)
	},
	setSnackText({commit}, value) {
		commit("SET_SNACK_TEXT", value)
	},
	setSnackColor({commit}, value) {
		commit("SET_SNACK_COLOR", value)
	},
	setSnackTimeout({commit}, value) {
		commit("SET_SNACK_TIMEOUT", value)
	}
}

export default {
	namespaced: true,
	state,
	getters,
	actions,
	mutations
}
