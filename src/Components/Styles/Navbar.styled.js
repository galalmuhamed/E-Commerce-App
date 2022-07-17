import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavContainer = styled.div`
	display: flex;
	min-height: 50px;
	background-color: #f4f5f7;
`;
// left side
export const Left = styled.div`
	flex: 0.3;
	display: flex;
	align-items: center;
	& > .menuIcon {
		font-size: 22px;
		margin-left: 20px;
		cursor: pointer;
	}
`;
export const Logo = styled(Link)`
	margin-left: 10px;
	color: black;
	text-decoration: none;
	font-size: 20px;
	font-weight: bold;
	font-family: 'Luxurious Roman', cursive;
`;
// center
export const Center = styled.div`
	flex: 0.4;
	display: flex;
	align-items: center;
`;
//search bar
export const InputContainer = styled.div`
	position: relative;
	width: 100%;
	display: flex;
	align-items: center;
	padding: 5px;
	border-radius: 10px;
	background-color: white;
	border: 2px solid gray;
	& > :nth-child(1) {
		margin-right: 5px;
		font-size: 22px;
		color: gray;
	}
	&:focus-within {
		border-color: black;
		box-shadow: 0px 0px 10px 4px rgb(159 159 159 / 75%);
		& > :nth-child(1) {
			color: black;
		}
	}
`;
export const Input = styled.input`
	width: 100%;
	height: 25px;
	outline: none;
	border: none;
`;
// right side
export const Right = styled.div`
	flex: 0.3;
	display: flex;
	align-items: center;
	justify-content: flex-end;
`;
export const SignContainer = styled.div`
	display: flex;
	align-items: center;
	margin-right: 10px;
`;
export const SignLink = styled(Link)`
	color: black;
	text-decoration: none;
	margin: 0 5px;
	font-weight: bold;
	font-size: 14px;
	color: gray;
	transition: all 0.5s ease;
	&:hover {
		color: black;
	}
`;
export const UserName = styled.div`
	font-size: 12px;
	text-transform: capitalize;
	font-weight: bold;
	& > span {
		font-style: italic;
		color: #7b7a7a;
	}
`;
export const IconsContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin-right: 10px;
`;
export const HeartIcon = styled(Link)`
	color: black;
	position: relative;
	margin: 0 8px;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 20px;
	cursor: pointer;
`;
export const Span = styled.span`
	text-decoration: none;
	font-size: 12px;
	background-color: #a9a9a9c2;
	border-radius: 50%;
	padding: 0 3px;
	font-weight: 800;
	position: absolute;
	top: -10px;
	right: -8px;
	width: 18px;
	text-align: center;
`;
export const ChartIcon = styled(HeartIcon)`
	${HeartIcon}
`;
export const LogOutIcon = styled(HeartIcon)`
	${HeartIcon}
`;

//Search Bar
export const SearchContainer = styled.ol`
	background-color: white;
	position: absolute;
	top: 37px;
	left: 0;
	z-index: 2;
	width: 100%;
	border: 1px solid lightgray;
	max-height: 400px;
	overflow-x: scroll;
	&::-webkit-scrollbar {
		display: none;
	}
`;
export const ProductCard = styled.li`
	background-color: white;
	list-style: none;
	padding: 10px;
	border-bottom: 1px solid lightgray;
`;

export const ProductLink = styled(Link)`
	color: black;
	text-decoration: none;
	display: flex;
	align-items: center;
	font-weight: 600;
	font-size: 14px;
`;
export const ImgProduct = styled.img`
	width: 50px;
	height: 50px;
	object-fit: contain;
	margin-right: 10px;
`;

export const ProductCardTitle = styled.li`
	padding: 10px 15px 3px 20px;
	list-style: none;
	border-bottom: 1px solid black;
	color: gray;
`;
