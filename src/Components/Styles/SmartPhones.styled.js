import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const SmartPhoneContainer = styled.div`
	padding: 20px 35px;
`;
export const Container = styled.div`
	margin: 10px 0;
`;
export const Title = styled.h2`
	font-family: 'Luxurious Roman', cursive;
	margin-bottom: 10px;
`;
export const LinksBanner = styled.div`
	display: flex;
	background-color: #f4f5f7;
	height: 20vh;
	justify-content: space-around;
	align-items: center;
`;
export const Brand = styled(Link)`
	width: 25%;
	height: 80%;
	background-color: white;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 20px;
	font-size: 45px;
	color: #${props => props.color};
	& > :nth-child(1) {
		transition: all 0.5s ease;
		&:hover {
			transform: scale(1.2);
			cursor: pointer;
		}
	}
`;
