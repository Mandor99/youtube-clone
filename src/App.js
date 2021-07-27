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

function App() {
	return (
		<Router>
			<GlobalStyle />
			<Switch>
				<AuthRoute exact path='/' component={Home} />
				<Route exact path='/login' component={LogIn} />
				<Route exact path='/watch/:id' component={Watch} />
			</Switch>
		</Router>
	);
}

export default App;
