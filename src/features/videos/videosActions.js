import videoReqInstance from '../../api';

export const REQ__VIDEO__POPULAR = 'req_video_popular';
export const SUCCESS__VIDEO__POPULAR = 'success_video_popular';
export const FAIL__VIDEO__POPULAR = 'fail_video_popular';

const REQ__VIDEO = () => {
	return { type: REQ__VIDEO__POPULAR };
};

const SUCCESS__VIDEO = ({ items, nextPageToken }, category) => {
	return {
		type: SUCCESS__VIDEO__POPULAR,
		payload: { items, nextPageToken, category },
	};
};

const FAIL__VIDEO = (error) => {
	return { type: FAIL__VIDEO__POPULAR, payload: error };
};

export const getVideosPopular = () => async (dispatch, getState) => {
	try {
		dispatch(REQ__VIDEO());
		const res = await videoReqInstance('/videos', {
			params: {
				part: 'snippet,contentDetails,statistics',
				chart: 'mostPopular',
				maxResults: 20,
				regionCode: 'US',
				pageToken: getState().homeVideos.nextPageToken,
			},
		});
		const { data } = res;
		console.log(data);
		const { items, nextPageToken } = data;
		console.log(items, nextPageToken);
		// dispatch(SUCCESS__VIDEO(data));
		dispatch(SUCCESS__VIDEO({ items, nextPageToken }, 'all'));
	} catch (err) {
		dispatch(FAIL__VIDEO(err.message));
	}
};

export const getVideosByCategory =
	(categoryKeyword) => async (dispatch, getState) => {
		try {
			dispatch(REQ__VIDEO());
			const { data } = await videoReqInstance('/search', {
				params: {
					part: 'snippet',
					maxResults: 20,
					pageToken: getState().homeVideos.nextPageToken,
					q: categoryKeyword,
					type: 'video', //because don't show the playlists only videos
				},
			});
			const { items, nextPageToken } = data;
			console.log(data);
			console.log(items, nextPageToken);
			dispatch(SUCCESS__VIDEO({ items, nextPageToken }, categoryKeyword));
		} catch (err) {
			dispatch(FAIL__VIDEO(err.message));
		}
	};
