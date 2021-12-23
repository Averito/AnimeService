import axios from "axios"

class API {
	constructor(url) {
		this.url = url
	}

	set() {
		throw new Error("Запрещено изменять свойства")
	}
	get() {
		return this.url
	}

	async getAnimeList(offset = 0, limit = 20, filters = { text: "" }) {
		let result

		const { text } = filters

		await axios.get(`${this.url}/edge/anime?page[offset]=${offset}&page[limit]=${limit}${text.length === 0 ? "" : `&filter[text]=${text}`}`)
			.then(response => result = response.data)

		return result
	}
	async getAnimeInfo(text) {
		let result

		await axios.get(`${this.url}/edge/anime?filter[text]=${text}`)
			.then(response => result = response.data)

		return result
	}
}

const api = new API("https://kitsu.io/api")

export default api