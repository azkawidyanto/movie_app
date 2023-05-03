import { useState } from "react";
import styled from "styled-components";
interface MovieCardProps {
	image: string;
	title: string;
	rating: string;
	overview: string;
	release_date: string;
}

const StyledCard = styled.div`
	width: 20vw;
	display: flex;
	flex-direction: column;
	background-color: beige;
	margin: 1vw;
	padding: 1vw;
	align-items: center;
	justify-content: space-between;
`;
const StyledContainer = styled.div`
	width: 16vw;
	display: flex;
	flex-direction: column;
`;
const StyledImage = styled.img`
	width: 10vw;
	display: flex;
	flex-direction: column;
`;
const MovieCard = ({
	image,
	title,
	overview,
	rating,
	release_date,
}: MovieCardProps) => {
	const [isReadMore, setIsReadMore] = useState(true);
	const toggleReadMore = () => {
		setIsReadMore(!isReadMore);
	};
	return (
		<StyledCard>
			<StyledImage
				src={`https://image.tmdb.org/t/p/original/${image}`}
				alt="image"
			/>
			<StyledContainer style={{ fontSize: "20px", fontWeight: "700" }}>
				{title}
			</StyledContainer>
			<StyledContainer>
				{isReadMore ? overview.slice(0, 150) : overview}
				<span onClick={toggleReadMore} className="read-or-hide">
					{isReadMore ? "...read more" : " show less"}
				</span>
			</StyledContainer>
			<StyledContainer>{`Release Date: ${release_date}`}</StyledContainer>
			<StyledContainer
				style={{ fontWeight: 700 }}
			>{`rating: ${rating}`}</StyledContainer>
		</StyledCard>
	);
};

export default MovieCard;
