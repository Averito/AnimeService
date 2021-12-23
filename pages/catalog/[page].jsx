import { useRouter } from "next/router"
import Head from "next/head"
import { Pagination } from "antd"

import API from "../../api/API"
import { AnimeComponent } from "../../components/anime/AnimeComponent"
import { AnimeCards } from "../../components/home/Home.styled"

export default function Page({animeList}) {

	const router = useRouter()

	// methods
	const onChangePaginationHandler = (page) => {
		const regexp = new RegExp(/[0-9]/)
		const nextPath = router.asPath.split("/")
		nextPath.splice(nextPath.findIndex(el => el.search(regexp) === -1 ? 0 : el.search(regexp)), 1, page)
		router.push(`${window.location.origin}${nextPath.join("/")}`)
	}
	// methods

	return (
		<>
			<Head>
				<title>AnimeService - Catalog</title>
			</Head>
			<Pagination style={{margin: "0 0 10px 0"}} total={Math.ceil(animeList.meta.count / 20 * 10)} onChange={onChangePaginationHandler} />
			<AnimeCards>
				{animeList.data.map(anime => (
					<AnimeComponent anime={anime} key={anime.id} />
				))}
			</AnimeCards>
		</>
	)
}
export const getServerSideProps = async (context) => {
	try {
		const currentPage = Number(context.params.page)
		const limit = 20

		const animeList = await API.getAnimeList((currentPage - 1) * limit, limit)

		return {
			props: { animeList }
		}
	} catch (err) {
		console.log(err)
	}
}