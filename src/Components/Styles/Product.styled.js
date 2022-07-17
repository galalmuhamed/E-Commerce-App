import styled from 'styled-components';
import { PrimaryBtnTwo } from './Global.styled';
import { Link } from 'react-router-dom';

export const ProductsContainer = styled.div`
	padding: 10px 0;
`;
export const Title = styled.h1`
	font-family: 'Luxurious Roman', cursive;
	margin: 10px 0;
`;
//
export const Banner = styled.div`
	width: 100%;
	display: flex;
	height: 30vh;
	background-color: #f4f5f7;
	justify-content: center;
	align-items: center;
`;
export const BannerTitle = styled.div`
	flex: 0.7;
	display: flex;
	align-items: center;
	justify-content: center;
	& > p {
		font-family: 'Luxurious Roman', cursive;
		font-size: 40px;
		font-weight: bold;
	}
`;
export const BannerImg = styled.div`
	flex: 0.3;
	height: 80%;
	background-color: white;
	border-radius: 10px;
	margin-right: 10px;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const ImageBan = styled.img`
	width: 100%;
	height: 100%;
	object-fit: contain;
`;
//
export const MainProducts = styled.div`
	margin-top: 10px;
	display: flex;
`;
export const SideBarFilter = styled.div`
	flex: 0.2;
	padding: 15px 10px;
	background-color: #f4f5f7;
	margin-right: 5px;
	margin-top: 10px;
	height: fit-content;
`;
export const SideBarContainer = styled.ol`
	background-color: white;
	padding: 5px;
	list-style: none;
`;
export const SideBarTitle = styled.li`
	font-size: 16px;
	font-weight: bold;
	padding-left: 10px;
	border-bottom: 1px solid lightgray;
	margin: 10px 0;
`;
export const SideBarList = styled.li`
	font-size: 12px;
	padding: 5px 10px;
	cursor: pointer;
	font-weight: 600;
	color: gray;
	transition: all 0.5s ease;
	&:hover {
		color: black;
	}
`;
//
export const ProductsItems = styled.div`
	flex: 0.8;
	padding: 10px;
`;
//sorted
export const SortedContainer = styled.div`
	padding-top: 10px;
	background-color: #f4f5f7;
	width: 100%;
	display: flex;
	justify-content: space-between;
`;
export const Display = styled.div`
	margin-left: 10px;
	display: flex;
	align-items: center;
	border-radius: 2px;
	background-color: lightgray;
`;
export const SpanOne = styled.span`
	padding: 3px;
	font-size: 25px;
	cursor: pointer;
	display: flex;
	align-items: center;
	background-color: ${props => (props.direction === 'row' ? '#8b8b8b' : '')};
	color: ${props => (props.direction === 'row' ? '#4e4c4c' : 'darkgray')};
`;
export const SpanTwo = styled.span`
	padding: 3px;
	font-size: 25px;
	cursor: pointer;
	display: flex;
	align-items: center;
	background-color: ${props => (props.direction === 'column' ? '#8b8b8b' : '')};
	color: ${props => (props.direction === 'column' ? '#4e4c4c' : 'darkgray')};
`;
export const SortedPrice = styled.div`
	font-size: 14px;
	margin-right: 10px;
	& > select {
		margin-left: 5px;
		font-size: 12px;
		border: none;
		outline: none;
		border-bottom: 2px solid black;
		text-align: center;
		background-color: #f4f5f7;
	}
`;
//  ol container
export const ProductItem = styled.ol`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
	flex-direction: ${props => props.flexDirection};
	background-color: #f4f5f7;
`;
// just li element

export const ProductContainer = styled.li`
	position: relative;
	list-style: none;
	flex: 1;
	margin: 10px;
	background-color: white;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 50vh;
	min-width: ${props => (props.flexDirection === 'row' ? '350px' : '100%')};
`;
export const HeartBtn = styled.div`
	position: absolute;
	top: 15px;
	right: 20px;
	cursor: pointer;
	& > :nth-child(1) {
		color: lightgray;
		font-size: 23px;
		transition: all 0.5s ease;
		&:hover {
			color: red;
		}
	}
	& > .activeHeart {
		color: red;
	}
`;

//

export const ImageContainer = styled(Link)`
	flex: 0.7;
	width: 100%;
	height: 60%;
	display: flex;
	align-items: center;
	justify-content: center;
	padding-top: 10px;
`;
export const Image = styled.img`
	width: ${props => (props.flexDirection === 'row' ? '100%' : '200px')};
	height: 70%;
	object-fit: contain;
`;

//

export const InfoContainer = styled.div`
	flex: 0.3;
	width: 100%;
	height: 100%;
	margin-top: 5px;
	padding: 5px 10px;
	font-weight: 600;
	text-align: center;
`;
export const ItemTitle = styled.div`
	letter-spacing: 3px;
	border-bottom: 2px solid lightgray;
	margin-bottom: 5px;
	width: 100%;
	font-size: 14px;
`;
export const ItemPrice = styled.div`
	border-bottom: 2px solid lightgray;
`;
export const Btn = styled(PrimaryBtnTwo)`
	margin-top: 10px;
	display: flex;
	align-items: center;
	justify-content: center;
	color: black;
	& > :nth-child(1) {
		margin-right: 5px;
		font-size: 20px;
		color: ${props => props.color};
	}
	${PrimaryBtnTwo}
`;
// pagination

export const Pagination = styled.div`
	background-color: #f4f5f7;
	padding-bottom: 10px;
	width: 100%;
	display: flex;
	justify-content: center;
	& > .paginationBtn {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 80%;
		height: 40px;
		list-style: none;
		& a {
			display: flex;
			width: 40px;
			justify-content: center;
			align-items: center;
			margin: 7px;
			padding: 10px;
			border-radius: 5px;
			border: 1px solid gray;
			color: gray;
			cursor: pointer;
			transition: all 0.5s ease;
			&:hover {
				color: white;
				background-color: grey;
			}
		}
	}
	& .activeBtn a {
		color: white;
		background-color: grey;
	}
`;
