import React, { useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import Comments from '../components/Comments';
import Layout from '../components/Layout';
import MetaData from '../components/MetaData';
import RecommendedVideos from '../components/RecommendedVideos';
import { VideoWrapper } from '../styles/WatchStyle';
import {
	getVideoById,
	getRelatedVideos,
} from '../features/videos/videosActions';
import { useDispatch, useSelector } from 'react-redux';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

function Watch() {
	const { id } = useParams();
	const dispatch = useDispatch();
	const { data, load, error } = useSelector((state) => state.videoId);
	const {
		videos,
		load: loadRelated,
		error: errorRelated,
	} = useSelector((state) => state.relatedVideos);

	useEffect(() => {
		dispatch(getVideoById(id));
		dispatch(getRelatedVideos(id));
	}, [dispatch, id]);
	return (
		<div>
			<Layout>
				<Row>
					<Col lg={8}>
						<VideoWrapper>
							<iframe
								title='watched video'
								src={`https://www.youtube.com/embed/${id}`}
								frameBorder='0'
								allowFullScreen
								width='100%'
								height='100%'
								allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
							></iframe>
						</VideoWrapper>
						{!load && error === null && <MetaData data={data} videoId={id} />}
						{!load && error === null && (
							<Comments videoId={id} count={data?.statistics?.commentCount} />
						)}
					</Col>
					<Col lg={4}>
						{!loadRelated && !errorRelated ? (
							videos.map((video) => (
								<RecommendedVideos video={video} key={video?.id?.videoId} />
							))
						) : (
							<SkeletonTheme color='#343a40' highlightColor='#3c4147'>
								<Skeleton height={130} width='100%' count={15} />
							</SkeletonTheme>
						)}
					</Col>
				</Row>
			</Layout>
		</div>
	);
}

export default Watch;
