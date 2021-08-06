import {
	REQUEST__COMMENTS,
	SUCCESS__COMMENTS,
	FAIL__COMMENTS,
} from './commentsAction';

const initState = {
	load: true,
	comments: [],
	error: null,
};

export const commentsReducer = (state = initState, { type, payload }) => {
	switch (type) {
		case REQUEST__COMMENTS:
			return {
				...state,
				load: true,
			};

		case SUCCESS__COMMENTS:
			return {
				...state,
				load: false,
				comments: payload,
			};

		case FAIL__COMMENTS:
			return {
				...state,
				error: payload,
			};

		default:
			return state;
	}
};
