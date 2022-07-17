import { receiveUsers } from './Users';
import { receiveProducts } from './Products';
import { _getUsers, _getProducts } from '../../Utils/Data';

export const handleIntialData = () => {
	return dispatch => {
		return Promise.all([_getUsers(), _getProducts()]).then(
			([users, products]) => {
				dispatch(receiveUsers(users));
				dispatch(receiveProducts(products));
			}
		);
	};
};
