import React from 'react';
import { Aside, Item } from '../styles/SidebarStyle';
import {
	MdSubscriptions,
	MdExitToApp,
	MdThumbUp,
	MdHistory,
	MdLibraryBooks,
	MdHome,
	MdSentimentDissatisfied,
} from 'react-icons/md';
import { authLogOut } from '../features/authActions';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function Sidebar({ sideBar, toggleSideBar }) {
	const dispatch = useDispatch();
	const history = useHistory();

	const handleLogOut = () => {
		dispatch(authLogOut());
		history.push('/login');
	};

	return (
		<Aside
			className={sideBar ? 'open' : ''}
			onClick={() => toggleSideBar(false)}
		>
			<Item>
				<MdHome size={23} />
				<span>Home</span>
			</Item>
			<Item>
				<MdSubscriptions size={23} />
				<span>Subscriptions</span>
			</Item>
			<Item>
				<MdThumbUp size={23} />
				<span>Liked Videos</span>
			</Item>
			<Item>
				<MdHistory size={23} />
				<span>History</span>
			</Item>
			<Item>
				<MdLibraryBooks size={23} />
				<span>Library</span>
			</Item>
			<Item>
				<MdSentimentDissatisfied size={23} />
				<span>I don't know</span>
			</Item>
			<hr />
			<Item onClick={handleLogOut}>
				<MdExitToApp size={23} />
				<span>Log Out</span>
			</Item>
			<hr />
		</Aside>
	);
}

export default Sidebar;
