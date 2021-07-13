import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Sidebar from './components/Sidebar';
import { GlobalStyle } from './styles/GlobalStyle';
import { HomeWrapper } from './styles/HomeStyle';
import { Container } from 'react-bootstrap';
import LogIn from './pages/LogIn';

function App() {
	const [sideBar, setSideBar] = useState(false);
	const toggleSideBar = () => setSideBar((val) => !val);
	return (
		<>
			<GlobalStyle />
			<Navbar toggleSideBar={toggleSideBar} />
			<HomeWrapper>
				<Sidebar toggleSideBar={toggleSideBar} sideBar={sideBar} />
				<Container fluid className='home__container'>
					<Home />
				</Container>
			</HomeWrapper>
			<LogIn />
		</>
	);
}

export default App;
