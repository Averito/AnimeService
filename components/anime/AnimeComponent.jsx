import Link from "next/link"

import { AnimeCard, AnimeCardInfo } from "./AnimeComponent.styled"

export const AnimeComponent = ({anime}) => {

	const { attributes } = anime

	return (
		<AnimeCard image={attributes.posterImage.original}>
			<AnimeCardInfo>
				<div>
					<h2 style={{cursor: "pointer"}}>
						<Link passHref href={`/catalog/anime/${encodeURI(attributes.canonicalTitle).replaceAll("/", "%2F")}`}>
							{attributes.canonicalTitle}
						</Link>
					</h2>
					<p>Episodes: {attributes.episodeCount || "No information"}</p>
				</div>
				<p>{attributes.description && attributes.description.slice(0, 300)}{attributes.description?.length > 299 ? "..." : ""}</p>
			</AnimeCardInfo>
		</AnimeCard>
	)
}