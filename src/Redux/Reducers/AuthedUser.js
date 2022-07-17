import { SET_AUTHEDUSER, LOGGED_OUT } from '../Actions/ActionsTypes';

const AuthedUser = (state = null, action) => {
	switch (action.type) {
		case SET_AUTHEDUSER:
			return action.id;
		case LOGGED_OUT:
			return null;
		default:
			return state;
	}
};
export default AuthedUser;
