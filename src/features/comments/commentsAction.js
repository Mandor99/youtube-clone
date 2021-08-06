import videoReqInstance from '../../api';

//action types
export const REQUEST__COMMENTS = 'request_comments';
export const SUCCESS__COMMENTS = 'success_comments';
export const FAIL__COMMENTS = 'fail_comments';

export const SUC__ADD__COMMENT = 'suc_add_comment'; //just to make dispatch have no reducer
export const FAIL__ADD__COMMENT = 'fail_add_comment'; //just to make dispatch have no reducer

//action creators
const request_comments = () => {
	return { type: REQUEST__COMMENTS };
};

const success_comments = (comments) => {
	return { type: SUCCESS__COMMENTS, payload: comments };
};

const fail_comments = (error) => {
	return { type: FAIL__COMMENTS, payload: error };
};

const suc_add_comment = () => {
	return { type: SUC__ADD__COMMENT };
};
const fail_add_comment = (error) => {
	return { type: FAIL__ADD__COMMENT, payload: error };
};

//async action creator functions
export const getCommentsAction = (videoId) => async (dispatch) => {
	try {
		dispatch(request_comments());
		const { data } = await videoReqInstance('/commentThreads', {
			params: {
				videoId,
				part: 'snippet',
			},
		});
		dispatch(success_comments(data?.items));
	} catch (err) {
		dispatch(fail_comments(err.message));
	}
};

export const addCommentsAction =
	(videoId, txt) => async (dispatch, getState) => {
		console.log(getState().auth.token);
		try {
			const commentObj = {
				snippet: {
					videoId: videoId,
					topLevelComment: {
						snippet: {
							textOriginal: txt,
						},
					},
				},
			};
			await videoReqInstance.post('/commentThreads', commentObj, {
				params: {
					part: 'snippet',
				},
				headers: {
					Authorization: `Bearer ${getState().auth.token}`,
				},
			});
			dispatch(suc_add_comment());
			setTimeout(() => {
				dispatch(getCommentsAction(videoId));
			}, 10000);
		} catch (err) {
			dispatch(fail_add_comment(err.message));
		}
	};
