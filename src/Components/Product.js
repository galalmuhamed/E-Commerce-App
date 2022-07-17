import React, { useState } from 'react';
import {
	ProductContainer,
	HeartBtn,
	ImageContainer,
	Image,
	InfoContainer,
	ItemTitle,
	ItemPrice,
	Btn,
} from './Styles/Product.styled';
import { BsFillHeartFill } from 'react-icons/bs';
import {
	addToCart,
	removeFromCart,
	addWishList,
	removeWishList,
} from '../Redux/Actions/Users';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
	MdOutlineAddCircleOutline,
	MdRemoveCircleOutline,
} from 'react-icons/md';

const Product = ({ item, flexDirection }) => {
	const authedUser = useSelector(state => state.AuthedUser);
	const Users = useSelector(state => state.Users);
	const user = Users[authedUser];
	const wishlist = user ? user.wishlist : null;
	const cart = user ? user.cart : null;
	const cartID = cart && cart.map(elm => elm.id);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleAddToCart = () => {
		if (!authedUser) {
			alert('You Must Login');
			navigate('/login');
		} else {
			alert('add to Cart Successful');
			dispatch(addToCart(authedUser, item.id, item.qty));
		}
	};
	const handleRemoveCart = () => {
		if (authedUser && cart && cart.length > 0) {
			dispatch(removeFromCart(authedUser, item.id));
			alert('Remove from Cart Successful');
		}
	};

	//
	const HandleaddToWishlist = () => {
		if (!authedUser) {
			alert('You Must Login');
			navigate('/login');
		} else {
			alert('add to wish list Successful');
			dispatch(addWishList(authedUser, item.id));
		}
	};
	const handleRemoveWishlist = () => {
		if (authedUser && wishlist && wishlist.length > 0) {
			dispatch(removeWishList(authedUser, item.id));
			alert('Remove from wishList Successful');
		}
	};

	return (
		<ProductContainer flexDirection={flexDirection}>
			<HeartBtn>
				{wishlist && wishlist.includes(item.id) ? (
					<BsFillHeartFill
						className="activeHeart"
						onClick={handleRemoveWishlist}
					/>
				) : (
					<BsFillHeartFill onClick={HandleaddToWishlist} />
				)}
			</HeartBtn>
			<ImageContainer to={`/${item.id}`}>
				<Image src={item.coverImg} flexDirection={flexDirection} />
			</ImageContainer>
			<InfoContainer>
				<ItemTitle>{item.name}</ItemTitle>
				<ItemPrice>{`EGP ${item.price.toLocaleString('en-us')}`}</ItemPrice>
				{cart && cartID.includes(item.id) ? (
					<Btn onClick={handleRemoveCart}>
						<MdRemoveCircleOutline color="red" />
						Remove from Cart
					</Btn>
				) : (
					<Btn onClick={handleAddToCart}>
						<MdOutlineAddCircleOutline color="black" />
						ADD To Cart
					</Btn>
				)}
			</InfoContainer>
		</ProductContainer>
	);
};

export default Product;

/*

	const handleAddToCart = () => {
		if (!authedUser) {
			alert('You Must Login');
			navigate('/login');
		} else {
			alert('add to Cart Successful');
			dispatch(addToCart(authedUser, item.id));
		}
	};
	const handleRemoveCart = () => {
		if (authedUser && cart && cart.length > 0) {
			dispatch(removeFromCart(authedUser, item.id));
			alert('Remove from Cart Successful');
		}
	};
*/
