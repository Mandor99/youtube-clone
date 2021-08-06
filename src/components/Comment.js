import React from 'react';
import { Fig } from '../styles/CommentStyle';
import channelImg from '../images/channel.jpg';
import moment from 'moment';

function Comment({ comment }) {
	const textDisplay = comment?.textDisplay;
	const authorDisplayName = comment?.authorDisplayName;
	const authorProfileImageUrl = comment?.authorProfileImageUrl;
	const publishedAt = comment?.publishedAt;
	return (
		<Fig className='p-2 d-flex'>
			<img
				src={authorProfileImageUrl}
				alt='avatar'
				className='comment__avatar mr-3 rounded-circle'
			/>
			<figcaption className='comment__body'>
				<p className='comment__user mb-1'>
					{authorDisplayName} . {moment(publishedAt).fromNow()}
				</p>
				<p className='comment__details mb-0'>{textDisplay}</p>
			</figcaption>
		</Fig>
	);
}

export default Comment;
