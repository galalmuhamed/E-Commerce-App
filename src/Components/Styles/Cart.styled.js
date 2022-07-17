import styled from 'styled-components';
import { QuantityBtn } from './ProductPage.styled';
import { PrimaryBtnTwo } from './Global.styled';

export const CartContainer = styled.div`
	margin: 20px 30px;
	background-color: #f4f5f7;
	padding: 10px;
	border-radius: 10px;
`;
export const CartNav = styled.div`
	width: 50%;
	margin: 0 auto;
	background-color: grey;
	border-radius: 20px;
	display: flex;
`;

export const CartTitle = styled.div`
	font-size: 14px;
	font-weight: 600;
	width: 50%;
	text-align: center;
	border-radius: 20px;
	padding: 5px 0;
	cursor: pointer;
	color: lightgray;
	background-color: ${props => (props.cart === 'cart' ? 'lightgray' : '')};
	color: ${props => (props.cart === 'cart' ? 'black' : '')};
`;
export const WishlistTitle = styled.div`
	font-size: 14px;
	font-weight: 600;
	width: 50%;
	text-align: center;
	border-radius: 20px;
	padding: 5px 0;
	cursor: pointer;
	color: lightgray;
	background-color: ${props => (props.cart === 'wishlist' ? 'lightgray' : '')};
	color: ${props => (props.cart === 'wishlist' ? 'black' : '')};
`;
//

export const CartItemContainer = styled.div`
	margin-top: 20px;
	display: flex;
`;

// products cartItems table
//border-collapse:collapse
//firstBox

export const DivContainer = styled.div`
	flex: 0.7;
	width: 100%;
	margin: 0 5px;
	border-radius: 10px;
`;

//table
export const TableContainer = styled.table`
	width: 100%;
	margin: 10px 0;
	background-color: white;
	border-collapse: collapse;
	border-radius: 10px;
	overflow: hidden;
`;
export const TableHeader = styled.thead`
	font-weight: bold;
	& > :nth-child(1) {
		border-bottom: 1px solid black;
		text-align: left;
		& > th {
			padding: 10px 15px;
		}
	}
`;
export const TR = styled.tr``;
export const TH = styled.th``;

/// body
export const TableBodyContainer = styled.tbody`
	& > :nth-child(1) {
		& > td {
			padding: 20px 10px;
		}
	}
	& > :nth-child(2) {
		& > td {
			padding: 0 20px;
			border-bottom: 1px solid lightgray;
		}
	}
`;
export const TD = styled.td``;
export const TDItem = styled.td`
	display: flex;
	align-items: center;
`;
export const InfoItem = styled.div`
	font-size: 14px;
	font-weight: 600;
`;

export const Image = styled.img`
	margin-right: 5px;
	width: 50px;
	height: 50px;
	object-fit: contain;
`;

export const TDPrice = styled.td`
	font-weight: 600;
`;
export const QuantityContainer = styled.div`
	display: flex;
	align-items: center;
`;
export const QuantityBtnTable = styled.button`
	background: transparent;
	border: none;
	outline: none;
	margin: 0 3px;
	display: flex;
	align-items: center;
	font-size: 12px;
	cursor: pointer;
`;
export const TableFoot = styled.tfoot``;
export const IconsContainer = styled.div`
	padding: 5px 20px;
	font-size: 20px;
	display: flex;
	justify-content: flex-end;
	align-items: center;
	color: darkgray;
	& > :nth-child(1),
	& > :nth-child(2) {
		cursor: pointer;
		transition: all 0.5s ease;
		margin-right: 5px;
		&:hover {
			color: black;
		}
	}
`;

//summary second
export const Summary = styled.div`
	flex: 0.3;
	background-color: white;
	border-radius: 10px;
	height: fit-content;
	margin-top: 10px;
`;

export const SContainer = styled.div`
	padding: 20px;
`;
export const STitle = styled.div`
	letter-spacing: 3px;
	border-bottom: 2px solid black;
	font-weight: 600;
	font-size: 18px;
	margin-bottom: 15px;
`;
export const STotal = styled.div`
	display: flex;
	justify-content: space-between;
	font-size: 18px;
	font-weight: 600;
	margin-bottom: 22px;
`;

export const CheckOutBtn = styled(PrimaryBtnTwo)`
	${PrimaryBtnTwo}
`;

export const NoItem = styled.div`
	width: 100%;
	text-align: center;
	padding: 10px;
	font-weight: 600;
	font-size: 20px;
`;

export const WishListContainer = styled.div`
	margin: 0 5px;
	display: flex;
	flex-direction: column;
	border-radius: 10px;
	width: 100%;
	height: 100%;
`;
