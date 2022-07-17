import styled, { createGlobalStyle } from 'styled-components';
import { Link } from 'react-router-dom';

const GlobalStyle = createGlobalStyle`
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family: 'Poppins', sans-serif;
}
`;
//font-family: 'Luxurious Roman', cursive;

//navbar color #f4f5f7
// flashcolor #7b7a7a
export const PrimaryBtn = styled(Link)`
	color: grey;
	border: 2px solid white;
	text-decoration: none;
	padding: 15px;
	background-color: white;
	border-radius: 20px;
	font-weight: bold;
	transition: all 0.5s ease;
	&:hover {
		color: black;
		border-color: gray;
	}
`;
export const PrimaryBtnTwo = styled.button`
	width: 100%;
	background-color: transparent;
	outline: none;
	border: none;
	padding: 5px 10px;
	background-color: lightgray;
	color: white;
	font-weight: bold;
	border-radius: 5px;
	letter-spacing: 2px;
	cursor: pointer;
	&:hover {
		background-color: darkgray;
	}
`;

export default GlobalStyle;
