import { SET_AUTHEDUSER, LOGGED_OUT } from './ActionsTypes';

export const setAuthedUser = id => {
	return {
		type: SET_AUTHEDUSER,
		id,
	};
};

export const loggedOut = () => {
	return {
		type: LOGGED_OUT,
	};
};
