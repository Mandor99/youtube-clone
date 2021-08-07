import React, { useState } from 'react';
import { NavbarComp, Logo, WrapperProfile, Form } from '../styles/NavbarStyle';
import { FaBars } from 'react-icons/fa';
import { AiOutlineSearch } from 'react-icons/ai';
import { MdNotifications, MdApps } from 'react-icons/md';
import LogoImg from '../images/logo.png';
import AvatarImg from '../images/avatar.png';
import { useHistory, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Navbar({ toggleSideBar }) {
	const { user } = useSelector((state) => state.auth);
	const [searchInput, setSearchInput] = useState('');
	const handleChange = (setter) => (e) => setter(e.target.value);
	const history = useHistory();
	const handleSubmit = (e) => {
		e.preventDefault();
		searchInput.length > 0 && history.push(`/search/${searchInput}`);
	};
	return (
		<NavbarComp>
			<FaBars
				className='nav__toggle-slide'
				size={26}
				onClick={() => toggleSideBar()}
			/>
			<Link to='/' className='nav-link'>
				<Logo src={LogoImg} alt=' youtube logo' />
			</Link>
			<Form onSubmit={handleSubmit}>
				<input
					type='text'
					className='nav__input'
					placeholder='search'
					value={searchInput}
					onChange={handleChange(setSearchInput)}
				/>
				<button type='submit' className='nav__search-btn'>
					<AiOutlineSearch size={22} />
				</button>
			</Form>
			<WrapperProfile>
				<MdNotifications size={28} />
				<MdApps size={28} />
				<img
					src={user?.photoURL}
					alt='avatar profile'
					className='nav__avatar'
				/>
			</WrapperProfile>
		</NavbarComp>
	);
}

export default Navbar;
