import axios from "axios"

const api = {
	setHeaders: function (contentType) {
		return axios.create({
			baseURL: "http://localhost:8000/api/",
			headers: {
				"Content-Type": contentType || "application/json",
				Accept: "application/json",
				Authorization: "Token e56cee33ea093d83ec13202b276f5905e750a69a"
				// localStorage.getItem("access_token") === null
				// 	? null
				// 	: `Token ${localStorage.getItem("access_token")}`
			}
		})
	},
	async get(target, contentType) {
		try {
			const instance = await this.setHeaders(contentType)
			const response = await instance.get(target)
			return response.data
		} catch (e) {
			throw e
		}
	},
	async getWithPayload(target, payload) {
		try {
			const instance = await this.setHeaders()
			const response = await instance.get(target, { params: payload })
			return response.data
		} catch (e) {
			throw e
		}
	},
	async post(target, body, contentType) {
		try {
			const instance = await this.setHeaders(contentType)
			const response = await instance.post(target, body)
			return response.data
		} catch (e) {
			throw e
		}
	},
	async put(target, body, contentType) {
		try {
			const instance = await this.setHeaders(contentType)
			const response = await instance.put(target, body)
			return response.data
		} catch (e) {
			throw e
		}
	},
	async patch(target, body, contentType) {
		try {
			const instance = await this.setHeaders(contentType)
			const response = await instance.patch(target, body)
			return response.data
		} catch (e) {
			throw e
		}
	},
	async delete(target) {
		try {
			const instance = await this.setHeaders()
			const response = await instance.delete(target)
			return response.data
		} catch (e) {
			throw e
		}
	}
}

export default api
