import React from 'react'
import {Fig} from '../styles/CommentStyle';
import channelImg from '../images/channel.jpg';
import moment from 'moment';


function Comment() {
    return (
        <Fig className='p-2 d-flex'>
            <img src={channelImg} alt="avatar" className="comment__avatar mr-3 rounded-circle" />
            <figcaption className='comment__body'>
                <p className="comment__user mb-1">
                    Mando ccc . {moment('2020-06-12').fromNow()}
                </p>
                <p className="comment__details mb-0">
                    nice video !!!
                </p>
            </figcaption>
        </Fig>
    )
}

export default Comment
