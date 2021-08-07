import React, { useEffect } from 'react';
import {
	Main,
	TitleWrapper,
	ChannelWrapper,
	DescWrapper,
} from '../styles/MetaDataStyle';
import { MdThumbUp, MdThumbDown } from 'react-icons/md';
import moment from 'moment';
import numeral from 'numeral';
// import avatarImg from '../images/channel.jpg';
import ShowMoreText from 'react-show-more-text';
import { useDispatch, useSelector } from 'react-redux';
import {
	getChannelDetails,
	setSubscribeStatus,
} from '../features/channels/channelAction';

function MetaData({ data, videoId }) {
	const title = data?.snippet?.title;
	const description = data?.snippet?.description;
	const publishedAt = data?.snippet?.publishedAt;
	const channelTitle = data?.snippet?.channelTitle;
	const channelId = data?.snippet?.channelId;
	const viewCount = data?.statistics?.viewCount;
	const likeCount = data?.statistics?.likeCount;
	const dislikeCount = data?.statistics?.dislikeCount;

	// const { title, description, publishedAt, channelTitle, channelId } =
	// 	data?.snippet;
	// const { viewCount, likeCount, dislikeCount } = data?.statistics;
	const dispatch = useDispatch();
	const { details, subscribeStatus } = useSelector(
		(state) => state.channelDetails,
	);
	const snippetChannel = details?.snippet;
	const statisticsChannel = details?.statistics;

	useEffect(() => {
		dispatch(getChannelDetails(channelId));
		dispatch(setSubscribeStatus(channelId));
	}, [dispatch, channelId]);

	return (
		<Main className='py-2'>
			<TitleWrapper>
				<h5 className='video__title'>{title}</h5>
				<div className='content-wrapper d-flex justify-content-between align-items-center'>
					<div className='video__time-views'>
						<span>{numeral(viewCount).format('0a')} views .</span>
						<span>&nbsp; {moment(publishedAt).fromNow()} </span>
					</div>
					<div className='likesIcons'>
						<span className='mx-3'>
							<MdThumbUp size={26} /> {numeral(likeCount).format('0a')}
						</span>
						<span>
							<MdThumbDown size={26} /> {numeral(dislikeCount).format('0a')}
						</span>
					</div>
				</div>
			</TitleWrapper>
			<ChannelWrapper className='d-flex justify-content-between align-items-center my-2 py-3'>
				<figure className='channel__avatar d-flex'>
					<img
						src={snippetChannel?.thumbnails?.default?.url}
						alt='channelImg'
						className='channelImg'
					/>
					<figcaption className='d-flex flex-column'>
						<h4 className='channelName'>{channelTitle}</h4>
						<h5 className='channelSubscribe'>
							{numeral(statisticsChannel?.subscriberCount).format('0a')}{' '}
							Subscribers
						</h5>
					</figcaption>
				</figure>
				<button
					className={`btn border-0 p-2 m-2 btnSubscribe ${
						subscribeStatus && 'btn-gray'
					}`}
				>
					{subscribeStatus ? 'SUBSCRIBED' : 'SUBSCRIBE'}
				</button>
			</ChannelWrapper>
			<DescWrapper>
				<ShowMoreText
					line={3}
					more='SHOW MORE'
					less='SHOW LESS'
					anchorClass='showMoreDescription'
					expanded={false}
				>
					{description}
				</ShowMoreText>
			</DescWrapper>
		</Main>
	);
}

export default MetaData;
