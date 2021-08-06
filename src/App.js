// import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './pages/Home';
import { GlobalStyle } from './styles/GlobalStyle';
import LogIn from './pages/LogIn';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import AuthRoute from './routes/authProtectedRoute';
import Watch from './pages/Watch';
import 'react-lazy-load-image-component/src/effects/blur.css';
import Search from './pages/Search';
import Subscriptions from './pages/Subscriptions';
import VideosChannel from './pages/VideosChannel';

function App() {
	return (
		<Router>
			<GlobalStyle />
			<Switch>
				<AuthRoute exact path='/' component={Home} />
				<Route exact path='/login' component={LogIn} />
				<AuthRoute exact path='/watch/:id' component={Watch} />
				<AuthRoute exact path='/search/:query' component={Search} />
				<AuthRoute
					exact
					path='/profile/subscription'
					component={Subscriptions}
				/>
				<AuthRoute exact path='/channel/:channelId' component={VideosChannel} />
			</Switch>
		</Router>
	);
}

export default App;
