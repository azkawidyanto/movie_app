import { render, screen } from "@testing-library/react";
import HomePage from "./HomePage";
import { BrowserRouter } from "react-router-dom";
import { MOCK_DATA } from "./mockData";
import MovieCard from "./Component/MovieCard";

describe("Test Home Page", () => {
	test("Home Page Movie Button", () => {
		render(
			<BrowserRouter>
				<HomePage />
			</BrowserRouter>,
		);
		const movie_button = screen.queryByText("Search Movie");
		expect(movie_button).toBeInTheDocument();
	});

	test("Home Page Movie Card", () => {
		render(
			<BrowserRouter>
				<MovieCard
					image={MOCK_DATA[0].backdrop_path || MOCK_DATA[0].poster_path}
					overview={MOCK_DATA[0].overview}
					title={MOCK_DATA[0].title}
					rating={MOCK_DATA[0].vote_average}
					release_date={MOCK_DATA[0].release_date}
				/>
			</BrowserRouter>,
		);
		const movie_button = screen.queryByText("...read more");
		expect(movie_button).toBeInTheDocument();
	});
});
