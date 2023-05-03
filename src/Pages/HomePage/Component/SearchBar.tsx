import { ChangeEvent } from "react";
import styled from "styled-components";
const StyledContainer = styled.div`
	width: 50vw;
	padding: 2vw 25vw;
	display: flex;
	flex-direction: row;
	background-color: grey;
`;
const StyledInput = styled.input`
	width: 20vw;
	margin-right: 2vw;
`;
const Button = styled.button`
	width: 8vw;
	padding: 1vw;
	color: white;
	background-color: black;
`;

interface SearchBarProps {
	onChange: (e: ChangeEvent<HTMLInputElement>) => void;
	onSubmit: () => void;
}
const SearchBar = ({ onChange, onSubmit }: SearchBarProps) => {
	return (
		<StyledContainer>
			<StyledInput onChange={onChange} placeholder="Search Movie by Name" />
			<Button onClick={onSubmit}> Search Movie</Button>
		</StyledContainer>
	);
};

export default SearchBar;
