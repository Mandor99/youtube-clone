import React, { useState } from 'react';
import { TagsSlide } from '../styles/TagsStyle';
import { useDispatch } from 'react-redux';
import { getVideosByCategory } from '../features/videos/videosActions';

function Tags() {
	const [active, setActive] = useState('all');
	const dispatch = useDispatch();
	const handleActive = (val) => {
		setActive(val);
		dispatch(getVideosByCategory(val));
	};
	const tags = [
		'all',
		'react',
		'angular',
		'vueJs',
		'next',
		'gatsby',
		'history',
		'javascript',
		'data structure',
		'algorithms',
		'software',
		'music',
		'redux toolkit',
		'restfulAPI',
		'apollo',
		'graphQl',
		'political',
		'socket.Io',
		'nodeJs',
		'express',
		'SQL DB',
		'live',
		'watched',
	];
	return (
		<TagsSlide>
			{tags.map((tag, i) => (
				<span
					key={i}
					className={`${tag === active ? 'active' : ''} tag__name`}
					onClick={() => handleActive(tag)}
				>
					{tag}
				</span>
			))}
		</TagsSlide>
	);
}

export default Tags;
