import React from 'react'
import Comment from './Comment'
import {Article, Form, Wrapper} from '../styles/CommentsStyle'
import channelImg from '../images/channel.jpg';


function Comments() {
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <Article>
            <h3 className="comments__number">1234 Comments</h3>
            <Wrapper className='d-flex w-100 my-2'>
                <img src={channelImg} alt="avatar" className="comment__img rounded-circle" />
                <Form onSubmit={handleSubmit} className='d-flex flex-grow-1'>
                    <input type="text" name="comment" id="comment" className='flex-grow-1 comment__input' placeholder='Write a comment here ...'/>
                    <button type="submit" class="btn btn-primary border-0 p-2 comment__btn">Comment</button>
                </Form>
            </Wrapper>
            <Comment />
        </Article>
    )
}

export default Comments
