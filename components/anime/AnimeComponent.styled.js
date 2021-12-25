import styled from "@emotion/styled"

export const AnimeCard = styled.div`
	height: 450px;
	background: url("${props => props.image}") 0 0/cover no-repeat;
	cursor: pointer;
	border-radius: 4px;
	div {border-radius: 4px;}
`
export const AnimeCardInfo = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	height: 100%;
	background: transparent;
	transition: all 0.2s ease;
	padding: 0 10px;
	h2 {text-align: center;}
	h2,p,a {
		font-weight: 600;
		color: transparent;
	}
	&:hover {
		background: #323232;
		opacity: 0.7;
		h2,p,a {
			color: white;
		}
		a:hover {
			color: #0C90FF;
		}
	}
	p:last-of-type {
		text-align: center;
	}
`
