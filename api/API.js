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

	async getAnime(offset = 0, limit = 20) {
		let result

		await axios.get(`${this.url}/edge/anime?page[limit]=${limit}&page[offset]=${offset}`)
			.then(response => result = response.data)

		return result
	}
}

const api = new API("https://kitsu.io/api")

export default api