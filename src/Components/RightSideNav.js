import React from 'react';
import {
	SignContainer,
	SignLink,
	IconsContainer,
	HeartIcon,
	Span,
	ChartIcon,
	LogOutIcon,
	UserName,
} from './Styles/Navbar.styled';
import { BsHeartFill } from 'react-icons/bs';
import { MdLogout, MdShoppingCart } from 'react-icons/md';
import { useSelector, useDispatch } from 'react-redux';
import { loggedOut } from '../Redux/Actions/AuthedUser';

const RightSideNav = ({ setCart, setLogin }) => {
	const authedUser = useSelector(state => state.AuthedUser);
	const Users = useSelector(state => state.Users);

	const dispatch = useDispatch();
	const logOut = () => {
		dispatch(loggedOut());
	};
	const user = authedUser ? Users[authedUser] : null;
	return (
		<>
			<SignContainer>
				{authedUser ? (
					<UserName>
						Hello, <span>{`${user.firstName} ${user.lastName}`}</span>
					</UserName>
				) : (
					<>
						<SignLink to="/login" onClick={() => setLogin('signUp')}>
							Register
						</SignLink>
						<SignLink to="/login" onClick={() => setLogin('signIn')}>
							Sign in
						</SignLink>
					</>
				)}
			</SignContainer>
			<IconsContainer>
				<HeartIcon to="/cart" onClick={() => setCart('wishlist')}>
					<BsHeartFill className="rightIcon" />
					{authedUser && user.wishlist.length > 0 && (
						<Span>{user.wishlist.length}</Span>
					)}
				</HeartIcon>
				<ChartIcon to="/cart" onClick={() => setCart('cart')}>
					<MdShoppingCart className="rightIcon" />
					{authedUser && user.cart.length > 0 && (
						<Span>{user.cart.length}</Span>
					)}
				</ChartIcon>
				{authedUser && (
					<LogOutIcon onClick={logOut} to="/">
						<MdLogout />
					</LogOutIcon>
				)}
			</IconsContainer>
		</>
	);
};

export default RightSideNav;
