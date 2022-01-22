import Img from "next/image"

import { MainSection } from "./SelectedAnimeComponent.styled"

export const SelectedAnimeComponent = ({anime}) => {

	const { attributes } = anime

	console.log(attributes)

	const loaderImgPoster = () => {
		return attributes.posterImage.original
	}

	return (
		<MainSection>
			<div className="poster-and-smallinfo">
				<img src={attributes.posterImage.original} alt="Потерялась" />
				<div>
					This page don&apos;t completed!
				</div>
			</div>
			<h2>{attributes.canonicalTitle}</h2>
			<div>
				{attributes.description}
			</div>
		</MainSection>
	)
}