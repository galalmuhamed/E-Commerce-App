import React from 'react';
import { useSelector } from 'react-redux';
import TableBody from '../Components/TableBody';
import {
	CartContainer,
	CartNav,
	CartTitle,
	WishlistTitle,
	CartItemContainer,
	DivContainer,
	WishListContainer,
	Summary,
	SContainer,
	STitle,
	STotal,
	CheckOutBtn,
	NoItem,
} from '../Components/Styles/Cart.styled';
import RestTableCart from '../Components/RestTableCart';
import Table from '../Components/Table';

const Cart = ({ cart, setCart }) => {
	const users = useSelector(state => state.Users);
	const authedUser = useSelector(state => state.AuthedUser);
	const products = useSelector(state => state.Products);

	const allProducts = {
		...products.smartPhones,
		...products.laptops,
		...products.smartWatches,
	};
	const user = users[authedUser];
	const userCart = user ? user.cart : null;
	const userWishlist = user ? user.wishlist : null;
	const cartID = userCart && userCart.map(elm => elm.id);

	const summary =
		userCart &&
		userCart
			.map(
				elm => (allProducts[elm.id] = { ...allProducts[elm.id], qty: elm.qty })
			)
			.reduce((a, b) => {
				return a + b.price * b.qty;
			}, 0);

	return (
		<CartContainer>
			<CartNav>
				<CartTitle onClick={() => setCart('cart')} cart={cart}>
					{userCart && userCart.length > 0 && userCart.length} Shopping Cart
				</CartTitle>
				<WishlistTitle onClick={() => setCart('wishlist')} cart={cart}>
					{userWishlist && userWishlist.length > 0 && userWishlist.length}{' '}
					Wishlist
				</WishlistTitle>
			</CartNav>
			<CartItemContainer>
				{cart === 'cart' ? (
					userCart && userCart.length > 0 ? (
						<>
							<DivContainer>
								<Table cart={cart}>
									{userCart.map(elm => (
										<TableBody
											key={elm.id}
											PID={allProducts[elm.id]}
											cart={cart}
											user={user}
											userCart={userCart}
											userWishlist={userWishlist}
											cartID={cartID}
										>
											<RestTableCart
												PID={allProducts[elm.id]}
												user={user}
												userQty={elm.qty}
											/>
										</TableBody>
									))}
								</Table>
							</DivContainer>
							<Summary>
								<SContainer>
									<STitle>Summary</STitle>
									<STotal>
										Order Total:
										<p>{summary && `EGP ${summary.toLocaleString('en-us')}`}</p>
									</STotal>
									<CheckOutBtn>Proceed To Checkout</CheckOutBtn>
								</SContainer>
							</Summary>
						</>
					) : (
						<NoItem> No Items</NoItem>
					)
				) : userWishlist && userWishlist.length > 0 ? (
					<WishListContainer>
						<Table>
							{userWishlist.map((id, idx) => (
								<TableBody
									key={idx}
									PID={allProducts[id]}
									cart={cart}
									user={user}
									userCart={userCart}
									userWishlist={userWishlist}
									cartID={cartID}
								/>
							))}
						</Table>
					</WishListContainer>
				) : (
					<NoItem> No Items</NoItem>
				)}
			</CartItemContainer>
		</CartContainer>
	);
};

export default Cart;
