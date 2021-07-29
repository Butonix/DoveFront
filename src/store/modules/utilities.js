import $api from "@/handler/axios";

const state = {
	services: [],
	gallery: []
}

const getters = {
	serviceList: state => state.services.results,
	galleryList: state => state.gallery.results
}

const mutations = {
	SET_SERVICES(state, value) {
		state.services = value
	},
	SET_GALLERY_IMAGES(state, value) {
		state.gallery = value
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
	}
}

export default {
	namespaced: true,
	state,
	getters,
	actions,
	mutations
}
