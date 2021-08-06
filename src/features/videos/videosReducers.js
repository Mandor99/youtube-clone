import {
	REQ__VIDEO__POPULAR,
	SUCCESS__VIDEO__POPULAR,
	FAIL__VIDEO__POPULAR,
	REQ__VIDEO__ID,
	SUCCESS__VIDEO__ID,
	FAIL__VIDEO__ID,
	REQ__RELATED__VIDEOS,
	SUCCESS__RELATED__VIDEOS,
	FAIL__RELATED__VIDEOS,
	REQ__SEARCH__KEYWORD,
	SUCCESS__SEARCH__KEYWORD,
	FAIL__SEARCH__KEYWORD,
} from './videosActions';

const initState = {
	load: true,
	category: 'all',
	nextPageToken: '',
	items: [],
	error: null,
};

const initVideoIdState = {
	load: true,
	data: {},
	error: null,
};

const initRelatedVideos = {
	load: true,
	videos: [],
	error: null,
};

const initSearchVideos = {
	load: true,
	videos: [],
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
				// items: payload.items,
				//i'll make it in items [...prevVideos, newVideos] => because of infinite scroll component
				items:
					state.category === payload.category
						? [...state.items, ...payload.items]
						: payload.items,
				nextPageToken: payload.nextPageToken,
				category: payload.category,
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

export const VideoIdReducer = (state = initVideoIdState, { type, payload }) => {
	switch (type) {
		case REQ__VIDEO__ID:
			return {
				...state,
				load: true,
			};
		case SUCCESS__VIDEO__ID:
			return {
				...state,
				load: false,
				data: payload,
			};
		case FAIL__VIDEO__ID:
			return {
				...state,
				load: false,
				error: payload,
			};
		default:
			return state;
	}
};

export const relatedVideosReducer = (
	state = initRelatedVideos,
	{ type, payload },
) => {
	switch (type) {
		case REQ__RELATED__VIDEOS:
			return {
				...state,
				load: true,
			};
		case SUCCESS__RELATED__VIDEOS:
			return {
				...state,
				load: false,
				videos: payload,
			};
		case FAIL__RELATED__VIDEOS:
			return {
				...state,
				load: false,
				error: payload,
			};
		default:
			return state;
	}
};

export const searchedVideosReducer = (
	state = initSearchVideos,
	{ type, payload },
) => {
	switch (type) {
		case REQ__SEARCH__KEYWORD:
			return {
				...state,
				load: true,
			};
		case SUCCESS__SEARCH__KEYWORD:
			return {
				...state,
				load: false,
				videos: payload,
			};
		case FAIL__SEARCH__KEYWORD:
			return {
				...state,
				load: false,
				error: payload,
			};
		default:
			return state;
	}
};
