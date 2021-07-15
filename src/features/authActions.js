import { auth, provider } from '../firebase/config';

export const REQ__TYPE = 'req';
export const SUCCESS__TYPE = 'success';
export const FAIL__TYPE = 'fail';
export const LOGOUT__TYPE = 'logOut';
export const PROFILE__TYPE = 'profile';

const REQ = () => {
	return { type: REQ__TYPE };
};
const SUCCESS = (token) => {
	return { type: SUCCESS__TYPE, payload: token };
};
const FAIL = (error) => {
	return { type: FAIL__TYPE, payload: error };
};
const LOGOUT = () => {
	return { type: LOGOUT__TYPE };
};
const PROFILE = (user) => {
	return { type: PROFILE__TYPE, payload: user };
};

export const authLogIn = () => async (dispatch) => {
	try {
		dispatch(REQ());
		const res = await auth.signInWithPopup(provider);
		const { accessToken } = res.credential;
		const { photoURL, displayName } = res.user;
		sessionStorage.setItem('yt-userToken', accessToken);
		sessionStorage.setItem(
			'yt-userInfo',
			JSON.stringify({ displayName, photoURL }),
		);
		dispatch(SUCCESS(accessToken));
		dispatch(PROFILE({ displayName, photoURL }));
		// console.log(res, accessToken, displayName, photoURL);
	} catch (err) {
		dispatch(FAIL(err.message));
	}
};

export const authLogOut = () => async (dispatch) => {
	await auth.signOut();
	dispatch(LOGOUT());
	sessionStorage.removeItem('yt-userToken');
	sessionStorage.removeItem('yt-userInfo');
};
