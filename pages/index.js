import API from "../api/API"
import { AnimeComponent } from "../components/anime/AnimeComponent"
import { AnimeCards } from "../components/home/Home.styled"

export default function Home({ animeList, context }) {

	const animeL = animeList?.data || []

	return (
		<>
			<AnimeCards>
				{animeL.map(anime => (
					<AnimeComponent anime={anime} key={anime.id} />
				))}
			</AnimeCards>
		</>
	)
}

Home.getInitialProps = async (context) => {
	try {
		const animeList = await API.getAnimeList()

		return { animeList }
	} catch (err) {
		console.log(err)
	}
}
