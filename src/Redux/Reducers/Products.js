import { RECEIVES_PRODUCTS } from '../Actions/ActionsTypes';

const Products = (state = {}, action) => {
	switch (action.type) {
		case RECEIVES_PRODUCTS:
			return {
				...state,
				...action.products,
			};
		default:
			return state;
	}
};

export default Products;
