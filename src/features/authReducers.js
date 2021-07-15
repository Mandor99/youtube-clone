import {
	REQ__TYPE,
	SUCCESS__TYPE,
	FAIL__TYPE,
	LOGOUT__TYPE,
	PROFILE__TYPE,
} from './authActions';

const initState = {
	loading: false,
	user: sessionStorage.getItem('yt-userInfo')
		? JSON.parse(sessionStorage.getItem('yt-userInfo'))
		: null,
	token: sessionStorage.getItem('yt-userToken')
		? sessionStorage.getItem('yt-userToken')
		: null,
	error: null,
	// user: null,
	// token: null,
};

export const authReducer = (state = initState, { type, payload }) => {
	switch (type) {
		case REQ__TYPE:
			return {
				...state,
				loading: true,
			};

		case SUCCESS__TYPE:
			return {
				...state,
				token: payload,
				loading: false,
			};

		case FAIL__TYPE:
			return {
				...state,
				token: null,
				loading: false,
				error: payload,
			};

		case LOGOUT__TYPE:
			return {
				...state,
				token: null,
				user: null,
			};

		case PROFILE__TYPE:
			return {
				...state,
				user: payload,
			};
		default:
			return state;
	}
};
