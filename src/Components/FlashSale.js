import React, { useState } from 'react';
import { Container, CloseFlashSale } from './Styles/FlashSale.styled';

const FlashSale = () => {
	const [flashIsClose, setflashIsClose] = useState(false);
	return (
		<Container className={flashIsClose ? 'activeFlash' : ''}>
			Super Deal! Free Shipping On Order Over $1000EGP
			<CloseFlashSale onClick={() => setflashIsClose(true)}>X</CloseFlashSale>
		</Container>
	);
};

export default FlashSale;
