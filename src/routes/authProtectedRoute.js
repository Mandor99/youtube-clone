import { Redirect, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

const AuthRoute = ({ component: Component, ...rest }) => {
	const { token } = useSelector((state) => state.auth);
	// const token = sessionStorage.getItem('yt-userToken');
	return (
		<Route
			{...rest}
			render={(props) =>
				token ? <Component {...props} /> : <Redirect to='/login' />
			}
		/>
	);
};

export default AuthRoute;
