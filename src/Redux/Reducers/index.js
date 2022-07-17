import { combineReducers } from 'redux';
import Users from './Users';
import Products from './Products';
import AuthedUser from './AuthedUser';

export default combineReducers({
	AuthedUser,
	Users,
	Products,
});
