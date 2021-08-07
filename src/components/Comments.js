import React, { useState, useEffect } from 'react';
import Comment from './Comment';
import { Article, Form, Wrapper } from '../styles/CommentsStyle';
// import channelImg from '../images/channel.jpg';
import { useDispatch, useSelector } from 'react-redux';
import {
	getCommentsAction,
	addCommentsAction,
} from '../features/comments/commentsAction';

function Comments({ videoId, count }) {
	const [newComment, setNewComment] = useState('');
	const { comments } = useSelector((state) => state.comments);
	const { user } = useSelector((state) => state.auth);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getCommentsAction(videoId));
	}, [videoId, dispatch]);
	// const handleInput = (setter) => (e) => setter(e.target.value);
	const handleSubmit = (e) => {
		e.preventDefault();
		if (newComment.length === 0) return;

		dispatch(addCommentsAction(videoId, newComment));
		setNewComment('');
	};
	return (
		<Article>
			<h3 className='comments__number'>{`${count} Comments`}</h3>
			<Wrapper className='d-flex w-100 my-2'>
				<img
					src={user?.photoURL}
					alt='avatar'
					className='comment__img rounded-circle'
				/>
				<Form onSubmit={handleSubmit} className='d-flex flex-grow-1'>
					<input
						type='text'
						name='comment'
						id='comment'
						className='flex-grow-1 comment__input'
						placeholder='Write a comment here ...'
						value={newComment}
						onChange={(e) => setNewComment(e.target.value)}
					/>
					<button
						type='submit'
						className='btn btn-primary border-0 p-2 comment__btn'
					>
						Comment
					</button>
				</Form>
			</Wrapper>
			{comments.map((comment) => (
				<Comment
					key={comment?.id}
					comment={comment?.snippet?.topLevelComment?.snippet}
				/>
			))}
		</Article>
	);
}

export default Comments;
