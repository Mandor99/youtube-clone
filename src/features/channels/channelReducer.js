import {
	REQ__CHANNEL,
	SUCCESS__CHANNEL,
	FAIL__CHANNEL,
	SET__SUBSCRIBE__STATUS,
	REQ__CHANNEL__PAGE,
	SUCCESS__CHANNEL__PAGE,
	FAIL__CHANNEL__PAGE,
	REQ__VIDEOS__CHANNEL,
	SUCCESS__VIDEOS__CHANNEL,
	FAIL__VIDEOS__CHANNEL,
} from './channelAction';

const channelState = {
	load: true,
	details: {},
	subscribeStatus: false,
	error: null,
};

const initChannelPageState = {
	load: true,
	videos: [],
	error: null,
};

const initVideosChannel = {
	load: true,
	videos: [],
	error: null,
};

export const channelReducer = (
	state = channelState,
	{ type, payload, status },
) => {
	switch (type) {
		case REQ__CHANNEL:
			return {
				...state,
				load: true,
			};
		case SUCCESS__CHANNEL:
			return {
				...state,
				load: false,
				details: payload,
			};
		case FAIL__CHANNEL:
			return {
				...state,
				load: false,
				error: payload,
			};
		case SET__SUBSCRIBE__STATUS:
			return {
				...state,
				subscribeStatus: status,
			};
		default:
			return state;
	}
};

export const subscriptionsReducer = (
	state = initChannelPageState,
	{ type, payload },
) => {
	switch (type) {
		case REQ__CHANNEL__PAGE:
			return {
				...state,
				load: true,
			};
		case SUCCESS__CHANNEL__PAGE:
			return {
				...state,
				load: false,
				videos: payload,
			};
		case FAIL__CHANNEL__PAGE:
			return {
				...state,
				load: false,
				error: payload,
			};
		default:
			return state;
	}
};

export const videosChannelReducer = (
	state = initVideosChannel,
	{ type, payload },
) => {
	switch (type) {
		case REQ__VIDEOS__CHANNEL:
			return {
				...state,
				load: true,
			};
		case SUCCESS__VIDEOS__CHANNEL:
			return {
				...state,
				load: false,
				videos: payload,
			};
		case FAIL__VIDEOS__CHANNEL:
			return {
				...state,
				load: false,
				error: payload,
			};
		default:
			return state;
	}
};
