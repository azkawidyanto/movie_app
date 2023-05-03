import axios from "axios";
import SearchBar from "./Component/SearchBar";
import { ChangeEvent, useState } from "react";
import MovieCard from "./Component/MovieCard";
import styled from "styled-components";

const StyledMovieContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
`;
const HomePage = () => {
	const BASE_URL = process.env.REACT_APP_API_LINK;
	const API_KEY = process.env.REACT_APP_API_KEY;

	const [search, setSearch] = useState("");
	const [movieData, setMovieData] = useState<any[]>([]);

	const fetchData = () => {
		axios
			.get(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${search}`)
			.then((response) => setMovieData(response.data.results));
	};
	console.log(movieData);
	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const element = e.target as HTMLInputElement;

		setSearch(element.value);
	};
	const handleSearch = () => {
		fetchData();
	};

	return (
		<div>
			<SearchBar onChange={handleChange} onSubmit={handleSearch} />
			<StyledMovieContainer>
				{movieData?.length > 0 &&
					movieData?.map((element) => (
						<MovieCard
							image={element.poster_path}
							title={element.title}
							rating={element.vote_average}
							overview={element.overview}
							release_date={element.release_date}
						/>
					))}
			</StyledMovieContainer>
		</div>
	);
};

export default HomePage;
