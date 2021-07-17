import {
	REQ__VIDEO__POPULAR,
	SUCCESS__VIDEO__POPULAR,
	FAIL__VIDEO__POPULAR,
} from './videosActions';

const initState = {
	load: false,
	// category: 'all',
	nextPageToken: null,
	items: [],
	error: null,
};

export const videoReducer = (state = initState, { type, payload }) => {
	switch (type) {
		case REQ__VIDEO__POPULAR:
			return {
				...state,
				load: true,
			};
		case SUCCESS__VIDEO__POPULAR:
			return {
				...state,
				load: false,
				items: payload.items,
				nextPageToken: payload.nextPageToken,
			};
		case FAIL__VIDEO__POPULAR:
			return {
				...state,
				load: false,
				error: payload,
			};

		default:
			return state;
	}
};
