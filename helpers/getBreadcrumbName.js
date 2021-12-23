export const getBreadcrumbName = (name) => {
	let resName = name

	return resName[0].toUpperCase() + resName.slice(1)
}