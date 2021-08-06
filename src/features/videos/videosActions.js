import videoReqInstance from '../../api';

export const REQ__VIDEO__POPULAR = 'req_video_popular';
export const SUCCESS__VIDEO__POPULAR = 'success_video_popular';
export const FAIL__VIDEO__POPULAR = 'fail_video_popular';

export const REQ__VIDEO__ID = 'req_video_id';
export const SUCCESS__VIDEO__ID = 'success_video_id';
export const FAIL__VIDEO__ID = 'fail_video_id';

export const REQ__RELATED__VIDEOS = 'req_relatedVideos';
export const SUCCESS__RELATED__VIDEOS = 'success_relatedVideos';
export const FAIL__RELATED__VIDEOS = 'fail_relatedVideos';

export const REQ__SEARCH__KEYWORD = 'req_search_keyword';
export const SUCCESS__SEARCH__KEYWORD = 'success_search_keyword';
export const FAIL__SEARCH__KEYWORD = 'fail_search_keyword';

//action creators
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

const REQ__VIDEO__WATCH = () => {
	return { type: REQ__VIDEO__ID };
};
const SUCCESS__VIDEO__WATCH = (data) => {
	return {
		type: SUCCESS__VIDEO__ID,
		payload: data,
	};
};
const FAIL__VIDEO__WATCH = (error) => {
	return {
		type: FAIL__VIDEO__ID,
		payload: error,
	};
};

const REQ_RELATED_VIDEOS = () => {
	return { type: REQ__RELATED__VIDEOS };
};
const SUC_RELATED_VIDEOS = (videos) => {
	return { type: SUCCESS__RELATED__VIDEOS, payload: videos };
};
const FAIL_RELATED_VIDEOS = (error) => {
	return { type: FAIL__RELATED__VIDEOS, payload: error };
};

const REQ_SEARCH_KEYWORD = () => {
	return { type: REQ__SEARCH__KEYWORD };
};
const SUC_SEARCH_KEYWORD = (videos) => {
	return { type: SUCCESS__SEARCH__KEYWORD, payload: videos };
};
const FAIL_SEARCH_KEYWORD = (error) => {
	return { type: FAIL__SEARCH__KEYWORD, payload: error };
};
//async action creator functions
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
			headers: {
				Authorization: `${getState().auth.token}`,
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

export const getVideoById = (id) => async (dispatch) => {
	try {
		dispatch(REQ__VIDEO__WATCH());
		const { data } = await videoReqInstance('/videos', {
			params: {
				id: id,
				part: 'snippet,contentDetails,statistics',
			},
		});
		// console.log(data.items[0]);
		const { items } = data;

		dispatch(SUCCESS__VIDEO__WATCH(items[0]));
	} catch (err) {
		dispatch(FAIL__VIDEO__WATCH(err.message));
	}
};

export const getRelatedVideos = (videoId) => async (dispatch) => {
	try {
		dispatch(REQ_RELATED_VIDEOS());
		const { data } = await videoReqInstance('/search', {
			params: {
				relatedToVideoId: videoId,
				part: 'snippet',
				maxResults: 15,
				type: 'video', //because don't show the playlists only videos
			},
		});
		console.log(data?.items);
		dispatch(SUC_RELATED_VIDEOS(data?.items));
	} catch (err) {
		dispatch(FAIL_RELATED_VIDEOS(err.message));
	}
};

export const getSearchedVideos = (keyword) => async (dispatch) => {
	try {
		dispatch(REQ_SEARCH_KEYWORD());
		const { data } = await videoReqInstance('/search', {
			params: {
				part: 'snippet',
				maxResults: 20,
				q: keyword,
				type: 'video,channel',
			},
		});
		console.log(data?.items);
		dispatch(SUC_SEARCH_KEYWORD(data?.items));
	} catch (err) {
		dispatch(FAIL_SEARCH_KEYWORD(err.message));
	}
};
