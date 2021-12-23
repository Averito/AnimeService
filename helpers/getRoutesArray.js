export const getRoutesArray = (routes) => {
	let pathNames = routes.split("/").filter(el => el !== "")
	let result = []

	pathNames.forEach(el => {
		result = [...result, (result[result.length - 1] || "") + "/" + el]
	})

	return result
}