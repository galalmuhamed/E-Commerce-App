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
} from '../Actions/ActionsTypes';
const Users = (state = {}, action) => {
	switch (action.type) {
		case RECEIVES_USERS:
			return {
				...state,
				...action.users,
			};
		case ADD_USER:
			const { id, firstName, lastName, email, password } = action.user;
			return {
				...state,
				[id]: {
					id,
					firstName,
					lastName,
					email,
					password,
					wishlist: [],
					cart: [],
				},
			};
		case ADD_TO_CART:
			return {
				...state,
				[action.authedUser]: {
					...state[action.authedUser],
					cart: state[action.authedUser].cart.concat([
						{ id: action.PID, qty: action.qty },
					]),
				},
			};
		case REMOVE_FROM_CART:
			return {
				...state,
				[action.authedUser]: {
					...state[action.authedUser],
					cart: state[action.authedUser].cart.filter(
						elm => elm.id !== action.PID
					),
				},
			};
		case INCREASE_QUANTITY:
			return {
				...state,
				[action.authedUser]: {
					...state[action.authedUser],
					cart: state[action.authedUser].cart.map(elm =>
						elm.id === action.PID
							? Object.assign({}, elm, { qty: elm.qty + 1 })
							: elm
					),
				},
			};
		case DECREASE_QUANTITY:
			return {
				...state,
				[action.authedUser]: {
					...state[action.authedUser],
					cart: state[action.authedUser].cart.map(elm =>
						elm.id === action.PID
							? Object.assign({}, elm, { qty: elm.qty - 1 })
							: elm
					),
				},
			};
		case ADD_TO_WISHLIST:
			return {
				...state,
				[action.authedUser]: {
					...state[action.authedUser],
					wishlist: state[action.authedUser].wishlist.concat([action.PID]),
				},
			};
		case REMOVE_WISHLIST:
			return {
				...state,
				[action.authedUser]: {
					...state[action.authedUser],
					wishlist: state[action.authedUser].wishlist.filter(
						id => id !== action.PID
					),
				},
			};

		case TOGGLE_WISHLIST_TO_CART:
			return {
				...state,
				[action.authedUser]: {
					...state[action.authedUser],
					wishlist: state[action.authedUser].wishlist.filter(
						id => id !== action.PID
					),
					cart: state[action.authedUser].cart.concat([
						{ id: action.PID, qty: action.qty },
					]),
				},
			};
		case TOGGLE_CART_TO_WISHLIST:
			return {
				...state,
				[action.authedUser]: {
					...state[action.authedUser],
					wishlist: state[action.authedUser].wishlist.concat([action.PID]),
					cart: state[action.authedUser].cart.filter(
						elm => elm.id !== action.PID
					),
				},
			};

		default:
			return state;
	}
};
export default Users;
