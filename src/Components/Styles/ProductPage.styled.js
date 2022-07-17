import styled from 'styled-components';
import { PrimaryBtnTwo } from './Global.styled';

export const Container = styled.div`
	padding: 30px 20px;
`;
//first box
export const FirstBox = styled.div`
	padding: 10px;
	background-color: #f4f5f7;
	display: flex;
	align-items: center;
	height: 70vh;
	border-radius: 10px;
`;
// left side
export const Left = styled.div`
	flex: 0.3;
	background-color: white;
	height: 80%;
	border-radius: 10px;
	display: flex;
	justify-content: center;
	align-items: center;
`;
export const Image = styled.img`
	width: 80%;
	height: 80%;
	object-fit: contain;
`;
//center side
export const Center = styled.div`
	flex: 0.4;
	height: 80%;
	padding: 0 10px;
	display: flex;
	align-items: center;
	flex-direction: column;
`;
export const Title = styled.h3`
	letter-spacing: 2px;
	text-transform: capitalize;
	margin-bottom: 10px;
	font-family: 'Luxurious Roman', cursive;
`;
export const Specs = styled.ol`
	height: 100%;
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	background-color: white;
	border-radius: 10px;
	padding: 10px;
`;
export const List = styled.li`
	width: 50%;
	display: flex;
	list-style: none;
	margin: 5px 0;
`;
export const IconContainer = styled.div`
	flex: 0.2;
	font-size: 25px;
	display: flex;
	justify-content: center;
	align-items: center;
	color: gray;
`;
export const Details = styled.div`
	flex: 0.8;
	display: flex;
	flex-direction: column;
	justify-content: center;
`;
export const DetailsTitle = styled.p`
	font-weight: bold;
	font-size: 12px;
	color: gray;
`;
export const DetailsInfo = styled.p`
	font-size: 12px;
	color: gray;
`;
// right side
export const Right = styled.div`
	flex: 0.3;
	background-color: white;
	height: 80%;
	border-radius: 10px;
`;

export const Price = styled.h3`
	padding: 15px 10px;
	text-align: center;
	letter-spacing: 2px;
`;
export const CartContainr = styled.div`
	margin: 0 10px;
	display: flex;
	flex-direction: column;
`;

export const CartBtn = styled(PrimaryBtnTwo)`
	border-radius: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	margin-bottom: 10px;
	transition: all 0.5s ease;
	& > :nth-child(1) {
		margin-right: 5px;
	}
	${PrimaryBtnTwo}
`;

export const WishList = styled(PrimaryBtnTwo)`
	border-radius: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	margin-bottom: 20px;
	transition: all 0.5s ease;
	& > :nth-child(1) {
		margin-right: 5px;
		transition: all 0.5s ease;
	}
	&:hover > :nth-child(1) {
		color: red;
	}
	& > .activeHeart {
		color: red;
	}
	${PrimaryBtnTwo}
`;
export const Variety = styled.div`
	display: flex;
	align-items: center;
	font-size: 14px;
	font-weight: 600;
	margin-bottom: 10px;
	& > :nth-child(1) {
		font-size: 20px;
		margin-right: 5px;
	}
`;
export const Payment = styled.img`
	width: 100%;
	height: 20px;
	object-fit: contain;
	margin-top: 10px;
`;
