import React from 'react';
import {
	NavContainer,
	Left,
	Logo,
	Center,
	Right,
} from './Styles/Navbar.styled';
import SearchBarNav from './SearchBarNav';
import RightSideNav from './RightSideNav';
import { IoMdMenu, IoMdClose } from 'react-icons/io';

const Navbar = ({ menuIsOpen, setMenuIsOpen, setCart, setLogin }) => {
	return (
		<NavContainer>
			<Left>
				{menuIsOpen ? (
					<IoMdClose
						className="menuIcon"
						onClick={() => setMenuIsOpen(false)}
					/>
				) : (
					<IoMdMenu className="menuIcon" onClick={() => setMenuIsOpen(true)} />
				)}
				<Logo to="/">G-Store</Logo>
			</Left>
			<Center>
				<SearchBarNav />
			</Center>
			<Right>
				<RightSideNav setCart={setCart} setLogin={setLogin} />
			</Right>
		</NavContainer>
	);
};

export default Navbar;
