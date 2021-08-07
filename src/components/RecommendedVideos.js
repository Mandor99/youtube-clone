import React, { useState, useEffect } from 'react';
import { Section, Fig } from '../styles/RecommendedStyle';
import { Row, Col } from 'react-bootstrap';
import { AiFillEye } from 'react-icons/ai';
// import channelImg from '../images/channel.jpg';
// import thumbImg from '../images/thumb.webp';
import moment from 'moment';
import numeral from 'numeral';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import videoReqInstance from '../api';
import { useHistory } from 'react-router-dom';

function RecommendedVideos({ video, searchPage, subscribed }) {
	const videoId = video?.id?.videoId;
	const channelId =
		video?.snippet?.resourceId?.channelId || video?.snippet?.channelId;
	const title = video?.snippet?.title;
	const publishedAt = video?.snippet?.publishedAt;
	const channelTitle = video?.snippet?.channelTitle;
	const thumbnail = video?.snippet?.thumbnails?.medium;
	const description = video?.snippet?.description;
	const videosCount = video?.contentDetails?.totalItemCount;
	//views(video details)
	const [views, setViews] = useState('');
	//duration(video details)
	const [duration, setDuration] = useState('');
	//channel thumb for search page
	const [channelIcon, setChannelIcon] = useState('');
	const secondes = moment.duration(duration).asSeconds();
	const _videoDuration = moment.utc(secondes * 1000).format('mm: ss');
	const history = useHistory();
	const isVideo = video?.id?.kind === 'youtube#video';
	const isChannel = video?.id?.kind === 'youtube#channel';

	useEffect(() => {
		const getVideoDetails = async () => {
			const res = await videoReqInstance('/videos', {
				params: {
					part: 'contentDetails, statistics',
					id: videoId,
				},
			});
			const { items } = res?.data;
			setDuration(items[0]?.contentDetails?.duration);
			setViews(items[0]?.statistics?.viewCount);
		};
		isVideo && getVideoDetails();
	}, [isVideo, videoId]);

	useEffect(() => {
		const getChannels = async () => {
			const {
				data: { items },
			} = await videoReqInstance('/channels', {
				params: {
					part: 'snippet',
					id: channelId,
				},
			});
			setChannelIcon(items[0].snippet?.thumbnails?.default);
		};
		getChannels();
	}, [channelId]);

	const switchToAnotherRelatedVideo = () => {
		isVideo && history.push(`/watch/${videoId}`);
		isChannel | subscribed && history.push(`/channel/${channelId}`);
	};
	return (
		<Section onClick={switchToAnotherRelatedVideo}>
			<Row className='m-1 py-2 align-items-center pb-0'>
				<Col xs={6} md={searchPage || subscribed ? 4 : 6}>
					<Fig>
						<LazyLoadImage
							effect='blur'
							src={thumbnail?.url}
							alt=' video thumbnail'
							className={`recommendedChannel ${
								isChannel | subscribed && 'rounded-circle'
							}`}
							wrapperClassName='recommendedChannel'
						/>
						{isVideo && (
							<figcaption className='recommended__time'>
								{_videoDuration}
							</figcaption>
						)}
					</Fig>
				</Col>
				<Col xs={6} md={searchPage || subscribed ? 8 : 6} className='p-0'>
					<h4 className='recommended__title mb-1'>{title}</h4>
					{isVideo && (
						<div className='recommended__details'>
							<AiFillEye />{' '}
							<span>
								{numeral(views).format('0a')} views .
								{moment(publishedAt).fromNow()}{' '}
							</span>
						</div>
					)}
					{subscribed | isChannel | isVideo && (
						<p className={`mt-1 recommended__desc ${isVideo && 'none'}`}>
							{description}
						</p>
					)}
					<div className='d-flex align-items-center my-1'>
						{isVideo && (
							<LazyLoadImage
								effect='blur'
								src={channelIcon?.url}
								alt=' channel thumbnail'
								className='channel-icon rounded-circle'
								// wrapperClassName='recommendedChannel'
							/>
						)}
						<p className='recommended__name mb-0 mx-2'>{channelTitle}</p>
					</div>
					{subscribed && <p className='mt-2'>{videosCount} Videos</p>}
				</Col>
			</Row>
		</Section>
	);
}

export default RecommendedVideos;
