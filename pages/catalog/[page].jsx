import { useEffect, useState } from "react"
import { useRouter } from "next/router"
import Head from "next/head"
import { Input, Pagination } from "antd"

import API from "../../api/API"
import { AnimeComponent } from "../../components/anime/AnimeComponent"
import { AnimeCards } from "../../components/home/Home.styled"
import { useInput } from "../../hooks/useInput"

const LIMIT = 20

export default function Page({ animeList }) {

	const router = useRouter()

	// useState
	const [search, setSearch] = useInput("")

	const [counter, setCounter] = useState(0)
	const [animeListState, setAnimeListState] = useState(animeList)
	// useState

	// methods
	const onChangePaginationHandler = (page) => {
		const regexp = new RegExp(/[0-9]/)
		const nextPath = router.asPath.split("/")
		nextPath.splice(nextPath.findIndex(el => el.search(regexp) === -1 ? 0 : el.search(regexp)), 1, page)
		router.push(`${window.location.origin}${nextPath.join("/")}`)
	}
	// methods

	useEffect(() => {
		const getDataFromServer = async () => {
			try {
				const currentPage = Number(router.query.page)
				const textFilter = encodeURI(search).replaceAll("/", "%2F")

				const animeL = await API.getAnimeList((currentPage - 1) * LIMIT, LIMIT, { text: textFilter })

				setAnimeListState(prev => prev = animeL)
			} catch {
				router.push(`${window.location.origin}/catalog/1`)
			}
		}

		getDataFromServer()
	}, [search, router.query.page, router])

	return (
		<>
			<Head>
				<title>AnimeService - Catalog</title>
			</Head>
			<Pagination style={{ margin: "0 0 10px 0" }} current={Number(router.query.page)}
									total={Math.ceil(animeListState.meta.count / 20 * 10)} onChange={onChangePaginationHandler} />
			<Input style={{ margin: "0 0 10px 0", maxWidth: "300px" }} type="text" placeholder="Search" value={search}
						 onChange={setSearch} />
			<AnimeCards>
				{animeListState.data.map(anime => (
					<AnimeComponent anime={anime} key={anime.id} />
				))}
			</AnimeCards>
		</>
	)
}
export const getServerSideProps = async (context) => {
	try {
		const currentPage = Number(context.params.page)
		const filterText = context.params.filter

		console.log(context.params)

		const animeList = await API.getAnimeList((currentPage - 1) * LIMIT, LIMIT)

		return {
			props: { animeList }
		}
	} catch (err) {
		console.log(err)
	}
}