// import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './pages/Home';
import { GlobalStyle } from './styles/GlobalStyle';
import LogIn from './pages/LogIn';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import AuthRoute from './routes/authProtectedRoute';

function App() {
	return (
		<Router>
			<GlobalStyle />
			<Switch>
				<AuthRoute exact path='/' component={Home} />
				<Route exact path='/login' component={LogIn} />
			</Switch>
		</Router>
	);
}

export default App;
