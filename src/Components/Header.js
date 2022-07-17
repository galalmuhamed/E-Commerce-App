import React from 'react';
import FlashSale from './FlashSale';
import Navbar from './Navbar';

const Header = ({ menuIsOpen, setMenuIsOpen, setCart, setLogin }) => {
	return (
		<>
			<FlashSale />
			<Navbar
				menuIsOpen={menuIsOpen}
				setMenuIsOpen={setMenuIsOpen}
				setCart={setCart}
				setLogin={setLogin}
			/>
		</>
	);
};

export default Header;
