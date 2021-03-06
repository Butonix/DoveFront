import $api from "@/handler/axios"
import urls from "@/urls.json"
const util = require("util")

const eventUrl = urls.event

const state = {
	events: {},
	lastCreatedEvent: {},
	event: {},
	eventPhotos: {},
	eventVideoUrls: {},
	statistics: {},
	comments: {},
	formErrors: {},
	detailTab: null,
}

const mutations = {
	SET_EVENTS(state, value) {
		state.events = value
	},
	SET_EVENT(state, value) {
		state.event = value
	},
	SET_EVENT_FORM_ERRORS(state, value) {
		state.formErrors = value
	},
	SET_EVENT_STATISTICS(state, value) {
		state.statistics = value
	},
	SET_EVENT_COMMENTS(state, value) {
		state.comments = value
	},
	SET_DETAIL_TAB(state, value) {
		state.detailTab = value
	}
}

const getters = {
	list: state => state.events,
	detail: state => state.event,
	detailTab: state => state.detailTab,
	formErrorsList: state => state.formErrors,
	statisticsDetail: state=> state.statistics,
	commentsList: state=> state.comments
}

const actions = {
	clearFormErrors({commit}) {
		commit("SET_EVENT_FORM_ERRORS", {})
	},

	async fetchSingle({commit}, {id: id}) {
		const response = await $api.get(util.format(eventUrl.detail, id))
		commit("SET_EVENT", response)
	},

	async create({commit}, {body: body}) {
		try {
			await $api.post(eventUrl.list, body)
			return true
		} catch(e) {
			if (parseInt(e.response.status.toString()) === 400) {
				commit("SET_EVENT_FORM_ERRORS", e.response.data)
			}
			return false
		}
	},
	async patch({commit}, {id: id, body: body}) {
		try {
			await $api.patch(util.format(eventUrl.detail, id), body)
			return true
		} catch(e) {
			if (parseInt(e.response.status.toString()) === 400) {
				commit("SET_EVENT_FORM_ERRORS", e.response.data)
			}
			return false
		}
	},

	async update({commit}, {id: id, body: body}) {
		try {
			await $api.put(util.format(eventUrl.detail, id), body)
			return true
		} catch(e) {
			if (parseInt(e.response.status.toString()) === 400) {
				commit("SET_EVENT_FORM_ERRORS", e.response.data)
			}
			return false
		}
	},

	async delete({commit}, {id: id}) {
		try {
			await $api.delete(util.format(eventUrl.detail, id))
			return true
		} catch {
			return false
		}
	},

	async deleteVideoUrl({commit}, {id: id}) {
		try {
			await $api.delete(util.format(eventUrl.videoUrlDetail, id))
			return true
		} catch {
			return false
		}
	},

	async deleteVideo({commit}, {id: id}) {
		try {
			await $api.delete(util.format(eventUrl.videoDetail, id))
			return true
		} catch {
			return false
		}
	},

	async deleteImage({commit}, {id: id}) {
		try {
			await $api.delete(util.format(eventUrl.imageDetail, id))
			return true
		} catch {
			return false
		}
	},

	async filter({commit}, payload) {
		try {
			const response = await $api.getWithPayload(eventUrl.list, payload)
			commit("SET_EVENTS", response)
			return true
		} catch {
			return false
		}
	},

	async approve({commit}, {id: id}) {
		try {
			await $api.put(util.format(eventUrl.toggleApproval, id))
			return true
		} catch {
			return false
		}
	},

	async disapprove({commit}, {id: id}) {
		try {
			await $api.delete(util.format(eventUrl.toggleApproval, id))
			return true
		} catch {
			return false
		}
	},

	async fetchStatistics({commit}, {id: id}) {
		try {
			const response = await $api.get(util.format(eventUrl.interestStatistics, id))
			commit("SET_EVENT_STATISTICS", response)
			return response
		} catch (e) {
			return false
		}
	},

	async toggleInterestedStatus({}, {id: id,}) {
		try {
			await $api.post(util.format(eventUrl.toggleInterestedStatus, id))
			return true
		} catch (e) {
			return false
		}
	},
	async toggleGoingStatus({}, {id: id}) {
		try {
			await $api.post(util.format(eventUrl.toggleGoingStatus, id))
			return true
		} catch (e) {
			return false
		}
	},
	async fetchCommentsFor({commit}, {id: id}) {
		try {
			const response = await $api.getWithPayload(eventUrl.commentList, {event: id})
			commit("SET_EVENT_COMMENTS", response)
			return true
		} catch (e) {
			return false
		}
	},
	async addCommentFor({}, {body: body}) {
		try {
			await $api.post(eventUrl.commentList, body)
			return true
		} catch (e) {
			return false
		}
	},
	async updateComment({}, {id: id, body: body}) {
		try {
			await $api.patch(util.format(eventUrl.commentDetail, id), body)
			return true
		} catch (e) {
			return false
		}
	},
	async addImageListFor({}, {id: id, body: body}) {
		try {
			await $api.post(util.format(eventUrl.addImageList, id), body)
			return true
		} catch (e) {
			return false
		}
	},
	async addVideoListFor({}, {id: id, body: body}) {
		try {
			await $api.post(util.format(eventUrl.addVideoList, id), body)
			return true
		} catch (e) {
			return false
		}
	},
	async addVideoUrlListFor({}, {id: id, body: body}) {
		try {
			await $api.post(util.format(eventUrl.addVideoUrlList, id), body)
			return true
		} catch (e) {
			return false
		}
	}
}

export default {
	namespaced: true,
	state,
	mutations,
	getters,
	actions
}
