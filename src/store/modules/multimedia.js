import $api from "@/handler/axios"
import urls from "@/urls.json"

const multimediaUrl = urls.multimedia
const util = require("util")


const defaultFormErrors = {
	video: null,
	audio: null,
	image: null,
	video_url: null,
	title: null,
	description: null,
	next: null
}

const state = {
	multimedias: [],
	multimedia: {},
	formErrors: {
		... defaultFormErrors
	},
	multimediaExtraStatus: {},
	toView: null,
}

const mutations = {
	SET_MULTIMEDIAS(state, value) {
		state.multimedias = value
	},
	SET_MULTIMEDIA(state, value) {
		state.multimedia = value
	},
	SET_FORM_ERRORS(state, value) {
		state.formErrors = value
	},
	SET_MULTIMEDIA_TO_VIEW(state, value) {
		state.toView = value
	},
	MERGE_MULTIMEDIAS(state, value) {
		state.multimedias.push(...value)
		// making set unique
		const temp = []
		state.multimedias.forEach(item => {
			if(!temp.find(element => element.id === item.id)) {
				temp.push(item)
			}
		})
		state.multimedias = temp
	},
	SET_NEXT(state, value) {
		state.next = value
	}
}

const getters = {
	list: state => state.multimedias,
	formErrors: state => state.formErrors,
	multimediaDetail: state => state.multimedia,
	inView: state => state.toView,
	next: state => state.next
}

const actions = {
	clearFormErrors({ commit }) {
		commit("SET_FORM_ERRORS", { ... defaultFormErrors })
	},

	async filter({commit}, payload) {
		const response = await $api.getWithPayload(multimediaUrl.set, payload)
		commit("SET_MULTIMEDIAS", response.results)
		commit("SET_NEXT", {count: response.count, previous: response.previous, next: response.next})
	},

	async getSingle({commit}, {id: id}) {
		try {
			const response = await $api.get(multimediaUrl.set + id)
			commit("SET_MULTIMEDIA", response)
			return true
		} catch (e) {
			return false
		}
	},

	async createPost({commit}, body) {
		try {
			await $api.post(multimediaUrl.createWithList, body)
			return true
		} catch (e) {
			const status = parseInt(e.response.status.toString())
			if (status === 400 || status === 404) {
				commit("SET_FORM_ERRORS", e.response.data)
			}
			return false
		}
	},

	async patch({commit}, {id: id, body: body}) {
		try {
			const response = await $api.patch(multimediaUrl.set + id + "/", body)
			commit("SET_MULTIMEDIA", response)
			return true
		} catch (e) {
			const status = parseInt(e.response.status.toString())
			if (status === 400 || status === 404) {
				commit("SET_FORM_ERRORS", e.response.data)
			}
			return false
		}
	},

	async delete({}, payload) {
		try {
			await $api.delete(util.format(multimediaUrl.detail, payload.id))
			return true
		} catch (e) {
			return false
		}
	},
	async deleteVideoUrl({}, {id: id}) {
		try {
			await $api.delete(util.format(multimediaUrl.videoUrlDetail, id))
			return true
		} catch (e) {
			return false
		}
	},
	async deleteVideo({}, {id: id}) {
		try {
			await $api.delete(util.format(multimediaUrl.videoDetail, id))
			return true
		} catch (e) {
			return false
		}
	},
	async deleteImage({}, {id: id}) {
		try {
			await $api.delete(util.format(multimediaUrl.imageDetail, id))
			return true
		} catch (e) {
			return false
		}
	},


	async approve({}, {id: id}) {
		try {
			await $api.post(util.format(multimediaUrl.toggleApproval, id))
			return true
		} catch (e) {
			return false
		}
	},
	async disapprove({}, {id: id}) {
		try {
			await $api.delete(util.format(multimediaUrl.toggleApproval, id))
			return true
		} catch (e) {
			return false
		}
	},

	async fetchMyStatus({commit}, {id: id}) {
		try {
			return await $api.get(util.format(multimediaUrl.extraStatus, id))
		} catch (e) {
			return false
		}
	},

	async setLove({}, {id: id}) {
		try {
			await $api.post(util.format(multimediaUrl.toggleLove, id))
			return true;
		} catch (e) {
			return false
		}
	},
	async revokeLove({}, {id: id}) {
		try {
			await $api.delete(util.format(multimediaUrl.toggleLove, id))
			return true;
		} catch (e) {
			return false
		}
	},

	async setBookmark({}, {id: id}) {
		try {
			await $api.post(util.format(multimediaUrl.toggleBookmark, id))
			return true
		} catch (e) {
			return false
		}
	},

	async removeBookmark({}, {id: id}) {
		try {
			await $api.delete(util.format(multimediaUrl.toggleBookmark, id))
			return true
		} catch (e) {
			return false
		}
	},

	async pin({}, {id: id}) {
		try {
			await $api.post(util.format(multimediaUrl.togglePin, id))
			return true;
		} catch (e) {
			return false
		}
	},

	async revokePinStatus({}, {id: id}) {
		try {
			await $api.delete(util.format(multimediaUrl.togglePin, id))
			return true;
		} catch (e) {
			return false
		}
	},

	async fetchCommentsForId({}, {id: id}) {
		try {
			return await $api.getWithPayload(urls.multimedia.commentList, {multimedia: id})
		} catch (e) {
			return false
		}
	},

	async postComment({}, {body: body}) {
		try {
			await $api.post(urls.multimedia.commentList, body)
			return true
		} catch (e) {
			const status = parseInt(e.response.status.toString())
			if (status === 400 || status === 404) {
				return e.response.data
			}
			return 500
		}
	},

	async updateComment({}, {id: id, comment: comment}) {
		try{
			await $api.patch(util.format(urls.multimedia.commentDetail, id), {comment: comment})
			return true
		} catch (e) {
			return false
		}
	},

	async deleteComment({}, {id: id}) {
		try {
			await $api.delete(util.format(urls.multimedia.commentDetail, id))
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
