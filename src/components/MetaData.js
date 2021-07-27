import React from 'react'
import {Main, TitleWrapper, ChannelWrapper, DescWrapper} from '../styles/MetaDataStyle'
import {MdThumbUp, MdThumbDown} from 'react-icons/md'
import moment from 'moment';
import numeral from 'numeral';
import avatarImg from '../images/channel.jpg'
import ShowMoreText from 'react-show-more-text';


function MetaData() {
    return (
        <Main className='py-2'>
            <TitleWrapper>
                <h5>Video Title</h5>
                <div className="content-wrapper d-flex justify-content-between align-items-center">
                    <div className=''>
                        <span>{numeral(10000).format('0a')} views .</span>
                        <span>&nbsp; {moment('2020-06-6').fromNow()} </span>
                    </div>
                    <div className='likesIcons'>
                        <span className='mx-3'><MdThumbUp size={26}/> {numeral(10000).format('0a')}</span>
                        <span><MdThumbDown size={26}/> {numeral(100).format('0a')}</span>
                    </div>
                </div>
            </TitleWrapper>
            <ChannelWrapper className='d-flex justify-content-between align-items-center my-2 py-3'>
                <figure className="channel__avatar d-flex">
                    <img src={avatarImg} alt="channelImg" className='channelImg' />
                    <figcaption className='d-flex flex-column'>
                        <h4 className='channelName'>coder coder</h4>
                        <h5 className='channelSubscribe'>{numeral(10000).format('0a')} Subscribers</h5>
                    </figcaption>
                </figure>
                <button className='btn border-0 p-2 m-2 btnSubscribe'>Subscribe</button>
            </ChannelWrapper>
            <DescWrapper>
                <ShowMoreText line={3} more='SHOW MORE' less='SHOW LESS' anchorClass='showMoreDescription' expanded={false}>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia expedita, alias adipisci autem voluptates cupiditate accusantium est blanditiis delectus provident? Labore odio modi deleniti dignissimos assumenda, nemo nobis totam officia ducimus doloremque, odit, distinctio ipsum pariatur. Voluptates reprehenderit sit illum, eius nulla reiciendis, temporibus, sapiente beatae id similique molestias ipsum?
                </ShowMoreText>
            </DescWrapper>
        </Main>
    )
}

export default MetaData
