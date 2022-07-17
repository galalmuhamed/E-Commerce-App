import styled from 'styled-components';

export const Container = styled.div`
	position: relative;
	width: 100%;
	height: 30px;
	background-color: #7b7a7a;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 14px;
	color: white;
	visibility: visible;
	transition: all 1.5s ease;
	&.activeFlash {
		visibility: hidden;
		height: 0;
	}
`;

export const CloseFlashSale = styled.span`
	position: absolute;
	right: 40px;
	color: black;
	font-weight: bold;
	cursor: pointer;
`;
