import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import { HomeWrapper } from '../styles/HomeStyle';
import { Container } from 'react-bootstrap';

function Layout({ children }) {
	const [sideBar, setSideBar] = useState(false);
	const toggleSideBar = () => setSideBar((val) => !val);
	return (
		<>
			<Navbar toggleSideBar={toggleSideBar} />
			<HomeWrapper>
				<Sidebar toggleSideBar={toggleSideBar} sideBar={sideBar} />
				<Container fluid className='home__container'>
					{children}
				</Container>
			</HomeWrapper>
		</>
	);
}

export default Layout;
