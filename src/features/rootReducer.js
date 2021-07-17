import { combineReducers } from 'redux';
import { authReducer } from './authReducers';
import { videoReducer } from './videos/videosReducers';

const rootReducer = combineReducers({
	auth: authReducer,
	homeVideos: videoReducer,
});

export default rootReducer;
