import React from 'react';
import {
	Container,
	HeaderSideBar,
	DivSign,
	Span,
	SignLink,
	Opacity,
} from './Styles/SideBar.styled';
import { IoPersonCircleSharp } from 'react-icons/io5';
import { useSelector } from 'react-redux';
import SideBarLinks from './SideBarLinks';

const SideBar = ({ setMenuIsOpen, menuIsOpen }) => {
	const authedUser = useSelector(state => state.AuthedUser);
	const Users = useSelector(state => state.Users);
	const user = authedUser ? Users[authedUser] : null;
	return (
		<>
			<Container left={menuIsOpen ? '0' : '-300px'}>
				<HeaderSideBar>
					<IoPersonCircleSharp />
					<DivSign>
						Hello,
						{authedUser ? (
							<Span>{` ${user.firstName} ${user.lastName}`}</Span>
						) : (
							<SignLink to="/login">{` Sign-In`} </SignLink>
						)}
					</DivSign>
				</HeaderSideBar>
				<SideBarLinks />
			</Container>
			{menuIsOpen && (
				<Opacity
					opacity={menuIsOpen ? '0.5' : '1'}
					background={menuIsOpen ? 'black' : 'none'}
					onClick={() => setMenuIsOpen(false)}
				></Opacity>
			)}
		</>
	);
};

export default SideBar;
