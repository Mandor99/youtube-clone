import videoReqInstance from '../../api';

export const REQ__CHANNEL = 'req_channel';
export const SUCCESS__CHANNEL = 'success_channel';
export const FAIL__CHANNEL = 'fail_channel';

export const SET__SUBSCRIBE__STATUS = 'set_subscribe_status';

export const REQ__CHANNEL__PAGE = 'req_channel_page';
export const SUCCESS__CHANNEL__PAGE = 'success_channel_page';
export const FAIL__CHANNEL__PAGE = 'fail_channel_page';

export const REQ__VIDEOS__CHANNEL = 'req_videos_channel';
export const SUCCESS__VIDEOS__CHANNEL = 'success_videos_channel';
export const FAIL__VIDEOS__CHANNEL = 'fail_videos_channel';
//action creator
const REQ__CHANNEL__DETAILS = () => {
	return { type: REQ__CHANNEL };
};
const SUCCESS__CHANNEL__DETAILS = (details) => {
	return { type: SUCCESS__CHANNEL, payload: details };
};
const FAIL__CHANNEL__DETAILS = (error) => {
	return { type: FAIL__CHANNEL, payload: error };
};
const SUBSCRIBE__STATUS = (status) => {
	return { type: SET__SUBSCRIBE__STATUS, status: status };
};

const REQ_CHANNEL_PAGE = () => {
	return { type: REQ__CHANNEL__PAGE };
};
const SUCCESS_CHANNEL_PAGE = (videos) => {
	return { type: SUCCESS__CHANNEL__PAGE, payload: videos };
};
const FAIL_CHANNEL_PAGE = (error) => {
	return { type: FAIL__CHANNEL__PAGE, payload: error };
};

const REQ_VIDEOS_CHANNEL = () => {
	return { type: REQ__VIDEOS__CHANNEL };
};
const SUCCESS_VIDEOS_CHANNEL = (videos) => {
	return { type: SUCCESS__VIDEOS__CHANNEL, payload: videos };
};
const FAIL_VIDEOS_CHANNEL = (error) => {
	return { type: FAIL__VIDEOS__CHANNEL, payload: error };
};

//async action creator functions
export const getChannelDetails = (id) => async (dispatch, getState) => {
	try {
		dispatch(REQ__CHANNEL__DETAILS());
		const { data } = await videoReqInstance('/channels', {
			params: {
				id: id,
				part: 'snippet, statistics',
			},
		});
		dispatch(SUCCESS__CHANNEL__DETAILS(data?.items[0]));
	} catch (err) {
		dispatch(FAIL__CHANNEL__DETAILS(err.message));
	}
};

export const setSubscribeStatus = (channelId) => async (dispatch, getState) => {
	try {
		const { data } = await videoReqInstance('/subscriptions', {
			params: {
				forChannelId: channelId,
				part: 'snippet',
				mine: true, // to show if the user subscribe or not => it need the authorization
			},
			headers: {
				Authorization: `Bearer ${getState().auth.token}`,
			},
		});
		// const { items } = data;
		console.log(data?.items);
		dispatch(SUBSCRIBE__STATUS(data?.items.length !== 0 ? true : false)); //item.length !== 0 => to be true if he has items in this channel
		// dispatch({
		// 	type: SET__SUBSCRIBE__STATUS,
		// 	status: data?.items?.length !== 0,
		// }); //item.length !== 0 => to be true if he has items in this channel
		console.log(data?.items);
	} catch (err) {
		console.log(err.message);
	}
};

export const getMySubscription = () => async (dispatch, getState) => {
	try {
		dispatch(REQ_CHANNEL_PAGE());
		const { data } = await videoReqInstance('/subscriptions', {
			params: {
				mine: true,
				part: 'snippet, contentDetails',
			},
			headers: {
				Authorization: `Bearer ${getState().auth.token}`,
			},
		});
		dispatch(SUCCESS_CHANNEL_PAGE(data?.items));
	} catch (err) {
		dispatch(FAIL_CHANNEL_PAGE(err.message));
	}
};

export const getVideosChannel = (channelId) => async (dispatch, getState) => {
	try {
		dispatch(REQ_VIDEOS_CHANNEL());
		const { data } = await videoReqInstance('/channels', {
			params: {
				part: 'contentDetails',
				id: channelId,
			},
		});
		const uploadedPlaylistId =
			data?.items[0]?.contentDetails?.relatedPlaylists?.uploads;
		const { data: playlistData } = await videoReqInstance('/playlistItems', {
			params: {
				part: 'snippet, contentDetails',
				playlistId: uploadedPlaylistId,
				maxResults: 15,
			},
			headers: {
				Authorization: `Bearer ${getState().auth.token}`,
			},
		});
		dispatch(SUCCESS_VIDEOS_CHANNEL(playlistData?.items));
	} catch (err) {
		dispatch(FAIL_VIDEOS_CHANNEL(err.message));
	}
};
