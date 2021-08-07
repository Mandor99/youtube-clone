import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import Layout from '../components/Layout';
import { useDispatch, useSelector } from 'react-redux';
import { getVideosChannel } from '../features/channels/channelAction';
import Video from '../components/Video';
import SkeletonLoad from '../components/SkeletonLoad';
import { ChannelWrapper } from '../styles/MetaDataStyle';
import numeral from 'numeral';
import {
	getChannelDetails,
	setSubscribeStatus,
} from '../features/channels/channelAction';

function VideosChannel() {
	const { channelId } = useParams();
	const dispatch = useDispatch();
	const { videos, load, error } = useSelector((state) => state.videosChannel);
	const { details, subscribeStatus } = useSelector(
		(state) => state.channelDetails,
	);
	const snippetChannel = details?.snippet;
	const statisticsChannel = details?.statistics;
	const channelTitle = details?.snippet?.title;

	useEffect(() => {
		dispatch(getVideosChannel(channelId));
		dispatch(getChannelDetails(channelId));
		dispatch(setSubscribeStatus(channelId));
	}, [channelId, dispatch]);
	return (
		<Layout>
			<Container>
				<ChannelWrapper
					className={`d-flex justify-content-between align-items-center my-2 py-3 px-5 no-padding`}
				>
					<figure className='channel__avatar d-flex align-items-center'>
						<img
							src={snippetChannel?.thumbnails?.default?.url}
							alt='channelImg'
							className='channelImg'
							style={{ width: '80px', height: '80px' }}
						/>
						<figcaption className='d-flex flex-column'>
							<h4 className='channelName'>{channelTitle}</h4>
							<h5 className='channelSubscribe mob-size'>
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
				<Row>
					{!load && error === null
						? videos.map((video) => (
								<Col lg={3} md={4} sm={6} key={video?.id}>
									<Video video={video} channel />
								</Col>
						  ))
						: [...Array(20)].map((_, i) => (
								//i make a loop not use count prop in Skeleton to be grid layout like i want with Col
								<Col lg={3} md={4} sm={6} key={i}>
									<SkeletonLoad />
								</Col>
						  ))}
				</Row>
			</Container>
		</Layout>
	);
}

export default VideosChannel;
