import {
	RECEIVES_USERS,
	ADD_USER,
	ADD_TO_CART,
	REMOVE_FROM_CART,
	INCREASE_QUANTITY,
	DECREASE_QUANTITY,
	ADD_TO_WISHLIST,
	REMOVE_WISHLIST,
	TOGGLE_WISHLIST_TO_CART,
	TOGGLE_CART_TO_WISHLIST,
} from './ActionsTypes';
import { _saveUser } from '../../Utils/Data';
import { setAuthedUser } from './AuthedUser';

export const receiveUsers = users => {
	return {
		type: RECEIVES_USERS,
		users,
	};
};
export const addUser = user => {
	return {
		type: ADD_USER,
		user,
	};
};
export const handleAddUser = (id, firstName, lastName, email, password) => {
	return dispatch => {
		dispatch(addUser({ id, firstName, lastName, email, password }));
		dispatch(setAuthedUser(id));
		return _saveUser({ id, firstName, lastName, email, password });
	};
};

//
export const addToCart = (authedUser, PID, qty) => {
	return {
		type: ADD_TO_CART,
		authedUser,
		PID,
		qty,
	};
};
export const removeFromCart = (authedUser, PID) => {
	return {
		type: REMOVE_FROM_CART,
		authedUser,
		PID,
	};
};
export const increaseQty = (authedUser, PID) => {
	return {
		type: INCREASE_QUANTITY,
		authedUser,
		PID,
	};
};

export const decreaseQty = (authedUser, PID) => {
	return {
		type: DECREASE_QUANTITY,
		authedUser,
		PID,
	};
};

export const addWishList = (authedUser, PID) => {
	return {
		type: ADD_TO_WISHLIST,
		authedUser,
		PID,
	};
};
export const removeWishList = (authedUser, PID) => {
	return {
		type: REMOVE_WISHLIST,
		authedUser,
		PID,
	};
};
export const toggleWishlistCart = (authedUser, PID, qty) => {
	return {
		type: TOGGLE_WISHLIST_TO_CART,
		authedUser,
		PID,
		qty,
	};
};

export const toggleCartWishlist = (authedUser, PID) => {
	return {
		type: TOGGLE_CART_TO_WISHLIST,
		authedUser,
		PID,
	};
};
