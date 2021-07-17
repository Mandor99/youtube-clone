import axios from 'axios';

const videoReqInstance = axios.create({
	baseURL: 'https://www.googleapis.com/youtube/v3/',
	params: {
		key: 'AIzaSyCtvQeSvcnz_necRxgLJaBVAqQE90-otg4',
	},
});

export default videoReqInstance;
