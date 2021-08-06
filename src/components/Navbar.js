import React, { useState } from 'react';
import { NavbarComp, Logo, WrapperProfile } from '../styles/NavbarStyle';
import { FaBars } from 'react-icons/fa';
import { AiOutlineSearch } from 'react-icons/ai';
import { MdNotifications, MdApps } from 'react-icons/md';
import LogoImg from '../images/logo.png';
import { Form } from '../styles/NavbarStyle';
import AvatarImg from '../images/avatar.png';
import { useHistory } from 'react-router-dom';

function Navbar({ toggleSideBar }) {
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
			<Logo src={LogoImg} alt=' youtube logo' />
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
				<img src={AvatarImg} alt='avatar profile' className='nav__avatar' />
			</WrapperProfile>
		</NavbarComp>
	);
}

export default Navbar;
