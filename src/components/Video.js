import React, { useEffect, useState } from 'react';
import {
	Section,
	ThumbWrapper,
	Title,
	Details,
	Channel,
} from '../styles/VideoStyle';
import { AiFillEye } from 'react-icons/ai';
// import thumbImg from '../images/thumb.webp';
// import channelImg from '../images/channel.jpg';
import videoReqInstance from '../api';
import moment from 'moment';
import numeral from 'numeral';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useHistory } from 'react-router-dom';

function Video({
	video: {
		id,
		snippet: { channelId },
		contentDetails, //from channelPage
	},
	channel,
}) {
	const [date, setDate] = useState('');
	const [duration, setDuration] = useState('');
	const [views, setViews] = useState('');
	const [thumbnail, setThumbnail] = useState({});
	const [thumbnailVideo, setThumbnailVideo] = useState({});
	const [name, setName] = useState('');
	const [title, setTitle] = useState('');
	const _videoId = contentDetails?.videoId || id?.videoId || id;
	const _channelId = channelId;
	const secondes = moment.duration(duration).asSeconds();
	const _videoDuration = moment.utc(secondes * 1000).format('mm: ss');
	const history = useHistory();

	useEffect(() => {
		const getVideo = async () => {
			const res = await videoReqInstance('/videos', {
				params: {
					part: 'contentDetails, snippet, statistics',
					id: _videoId,
				},
			});
			const { items } = res.data;
			setDate(items[0]?.snippet?.publishedAt);
			setDuration(items[0]?.contentDetails?.duration);
			setViews(items[0]?.statistics?.viewCount);
			setTitle(items[0]?.snippet?.title);
			setThumbnailVideo(items[0]?.snippet?.thumbnails?.default);
		};
		getVideo();
	}, [_videoId]);

	useEffect(() => {
		const getChannels = async () => {
			const {
				data: { items },
			} = await videoReqInstance('/channels', {
				params: {
					part: 'snippet',
					id: _channelId,
				},
			});
			setThumbnail(items[0].snippet?.thumbnails?.default);
			setName(items[0].snippet.title);
		};
		getChannels();
	}, [_channelId]);

	const handleWatchVideo = () => {
		history.push(`/watch/${_videoId}`);
	};

	return (
		<Section onClick={handleWatchVideo}>
			<ThumbWrapper>
				<LazyLoadImage
					effect='blur'
					src={thumbnailVideo?.url}
					alt=' video thumbnail'
				/>
				<figcaption className='video__time'>{_videoDuration}</figcaption>
			</ThumbWrapper>
			<Title>{title}</Title>
			<Details>
				<AiFillEye />
				<span className='video__views'>
					&nbsp; {numeral(views).format('0a')}{' '}
				</span>
				<span className='video__date'>&nbsp; {moment(date).fromNow()}</span>
			</Details>
			{!channel && (
				<Channel>
					<LazyLoadImage
						effect='blur'
						src={thumbnail?.url}
						alt='channel avatar'
					/>
					<span className='channel__name'>{name}</span>
				</Channel>
			)}
		</Section>
	);
}

export default Video;
