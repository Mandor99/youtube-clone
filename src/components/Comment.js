import React from 'react';
import { Fig } from '../styles/CommentStyle';
import moment from 'moment';

function Comment({ comment }) {
	const textOriginal = comment?.textOriginal;
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
				<p className='comment__details mb-0'>{textOriginal}</p>
			</figcaption>
		</Fig>
	);
}

export default Comment;
