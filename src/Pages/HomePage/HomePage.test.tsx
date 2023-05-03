import { render, screen } from "@testing-library/react";
import HomePage from "./index";
import { BrowserRouter } from "react-router-dom";

test("Home Page", () => {
	render(
		<BrowserRouter>
			<HomePage />
		</BrowserRouter>,
	);
	const movie_button = screen.queryByText("Search Movie");

	expect(movie_button).toBeInTheDocument();
});
