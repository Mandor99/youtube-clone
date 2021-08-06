import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import RecommendedVideos from '../components/RecommendedVideos';
import { getMySubscription } from '../features/channels/channelAction';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import Layout from '../components/Layout';

function Subscriptions() {
	const { load, videos, error } = useSelector((state) => state.subscriptions);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getMySubscription());
	}, [dispatch]);
	return (
		<Layout>
			<Container fluid>
				{!load && error === null ? (
					videos?.map((video) => (
						<RecommendedVideos video={video} key={video?.id} subscribed />
					))
				) : (
					<SkeletonTheme color='#343a40' highlightColor='#3c4147'>
						<Skeleton width='100%' height={160} count={20} />
					</SkeletonTheme>
				)}
			</Container>
		</Layout>
	);
}

export default Subscriptions;
