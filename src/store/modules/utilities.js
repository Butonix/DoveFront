import $api from "@/handler/axios";

const state = {
	services: [],
	gallery: [],
	feedbacks: {},
	feedback: {},
	feedbackType: "0",
	feedbackErrors: {}
}

const getters = {
	serviceList: state => state.services.results,
	galleryList: state => state.gallery.results,
	feedbackList: state => state.feedbacks,
	feedbackType: state => state.feedbackType,
	feedbackPostErrors: state => state.feedbackErrors
}

const mutations = {
	SET_SERVICES(state, value) {
		state.services = value
	},
	SET_GALLERY_IMAGES(state, value) {
		state.gallery = value
	},
	SET_FEEDBACKS(state, value){
		state.feedbacks = value
	},
	SET_FEEDBACK_TYPE(state, value){
		state.feedbackType = value
	},
	SET_FEEDBACK_ERRORS(state, value){
		state.feedbackErrors = value
	}
}

const actions = {
	async fetchServices({commit}) {
		try {
			const res = await $api.get("service")
			commit("SET_SERVICES", res)
			return true
		} catch (e) {
			return false
		}
	},
	async fetchGalleryImages({commit}) {
		try {
			const res = await $api.get("showcase-gallery")
			commit("SET_GALLERY_IMAGES", res)
			return true
		} catch (e) {
			return false
		}
	},
	async fetchFeedbacks({commit}, payload) {
		try {
			const res = await $api.getWithPayload("feedback", payload)
			console.log(res)
			commit("SET_FEEDBACKS", res)
			return true
		} catch (e) {
			return false
		}
	},
	async postFeedback({commit}, formData) {
		try {
			await $api.post("feedback/", formData)
			return true
		} catch (e) {
			const status = parseInt(e.response.status.toString())
			if (status === 400) {
				commit("SET_FEEDBACK_ERRORS", e.response.data)
			}
			return false
		}
	},
	async deleteFeedback({}, id) {
		try {
			await $api.delete("feedback/" + id)
			return true
		} catch (e) {
			return false
		}
	}
}

export default {
	namespaced: true,
	state,
	getters,
	actions,
	mutations
}
