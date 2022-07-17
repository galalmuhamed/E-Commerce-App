import React from 'react';
import {
	TableBodyContainer,
	TR,
	TD,
	TDItem,
	InfoItem,
	TDPrice,
	Image,
	IconsContainer,
} from './Styles/Cart.styled';
import { MdDeleteOutline, MdShoppingCart } from 'react-icons/md';
import { BsHeartFill } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import {
	removeFromCart,
	removeWishList,
	toggleWishlistCart,
	toggleCartWishlist,
} from '../Redux/Actions/Users';

const TableBody = ({
	PID,
	cart,
	user,
	userCart,
	userWishlist,
	cartID,
	children,
}) => {
	const dispatch = useDispatch();

	//
	const handleRemoveCart = () => {
		if (user.id && userCart && userCart.length > 0) {
			dispatch(removeFromCart(user.id, PID.id));
			alert('Remove from Cart Successful');
		}
	};
	const handleRemoveWishlist = () => {
		if (user.id && userWishlist && userWishlist.length > 0) {
			dispatch(removeWishList(user.id, PID.id));
			alert('Remove from wishList Successful');
		}
	};

	const handleToggleWishlistToCart = () => {
		if (userCart && cartID.includes(PID.id)) {
			alert(`this Product ${PID.name} alreday in Your Cart `);
		} else {
			dispatch(toggleWishlistCart(user.id, PID.id, PID.qty));
		}
	};
	const handleToggleCartToWishlist = () => {
		if (userWishlist && userWishlist.includes(PID.id)) {
			alert(`this Product ${PID.name} alreday in Your Wishlist `);
		} else {
			dispatch(toggleCartWishlist(user.id, PID.id));
		}
	};
	console.log(cartID.includes(PID.id));
	return (
		<TableBodyContainer>
			<TR>
				<TDItem>
					<Image src={PID.coverImg} />
					<InfoItem>{`${PID.name}, ${PID.storage}GB, ${PID.color}`}</InfoItem>
				</TDItem>
				<TDPrice>{`EGP ${PID.price.toLocaleString('en-us')}`}</TDPrice>
				{children}
			</TR>
			<TR>
				<TD colSpan="4">
					<IconsContainer>
						{cart === 'cart' ? (
							<BsHeartFill onClick={handleToggleCartToWishlist} />
						) : (
							<MdShoppingCart onClick={handleToggleWishlistToCart} />
						)}
						{cart === 'cart' ? (
							<MdDeleteOutline onClick={handleRemoveCart} />
						) : (
							<MdDeleteOutline onClick={handleRemoveWishlist} />
						)}
					</IconsContainer>
				</TD>
			</TR>
		</TableBodyContainer>
	);
};

export default TableBody;

/*

	const handleToggleWishlistToCart = () => {
		if (userCart && userCart.includes(PID.id)) {
			alert(`this Product ${PID.name} alreday in Your Cart `);
		} else {
			dispatch(toggleWishlistCart(user.id, PID.id));
		}
	};
	const handleToggleCartToWishlist = () => {
		if (userWishlist && userWishlist.includes(PID.id)) {
			alert(`this Product ${PID.name} alreday in Your Cart `);
		} else {
			dispatch(toggleCartWishlist(user.id, PID.id));
		}
	};



*/
