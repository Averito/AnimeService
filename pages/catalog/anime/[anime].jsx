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
				<title>AnimeServce - {router.query.anime.replaceAll("%20", " ")}</title>
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
				animeInfo: requestResult.data.find(anime => anime.attributes.canonicalTitle === animeName.replaceAll("%20", " "))
			}
		}
	} catch (error) {
		console.log(error)
		return { props: {} }
	}
}