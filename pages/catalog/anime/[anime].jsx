import { useRouter } from "next/router"
import Head from "next/head"

import API from "../../../api/API"

export default function Anime({animeInfo}) {

	const router = useRouter()

	const { attributes } = animeInfo

	console.log(animeInfo)

	return (
		<div>
			<Head>
				<title>AnimeServce - {decodeURI(router.query.anime)}</title>
			</Head>
			{attributes.canonicalTitle}
		</div>
	)
}

export const getServerSideProps = async (context) => {
	try {
		const animeName = context.params.anime

		const requestResult = await API.getAnimeInfo(animeName)

		return {
			props: {
				animeInfo: requestResult.data.find(anime => anime.attributes.canonicalTitle === decodeURI(animeName))
			}
		}
	} catch (error) {
		console.log(error)
		return { props: {} }
	}
}