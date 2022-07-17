import { RECEIVES_PRODUCTS } from './ActionsTypes';

export const receiveProducts = products => {
	return {
		type: RECEIVES_PRODUCTS,
		products,
	};
};
