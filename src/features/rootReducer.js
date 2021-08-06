import { combineReducers } from 'redux';
import { authReducer } from './authReducers';
import {
	videoReducer,
	VideoIdReducer,
	relatedVideosReducer,
	searchedVideosReducer,
} from './videos/videosReducers';
import {
	channelReducer,
	subscriptionsReducer,
	videosChannelReducer,
} from './channels/channelReducer';
import { commentsReducer } from './comments/commentsReducer';

const rootReducer = combineReducers({
	auth: authReducer,
	homeVideos: videoReducer,
	videoId: VideoIdReducer,
	channelDetails: channelReducer,
	comments: commentsReducer,
	relatedVideos: relatedVideosReducer,
	searchedVideos: searchedVideosReducer,
	subscriptions: subscriptionsReducer,
	videosChannel: videosChannelReducer,
});

export default rootReducer;
