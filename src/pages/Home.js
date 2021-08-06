import React, { useEffect } from 'react';
// import { Div } from '../styles/HomeStyle';
import Tags from '../components/Tags';
import Video from '../components/Video';
import { Container, /*Row,*/ Col, Spinner } from 'react-bootstrap';
import Layout from '../components/Layout';
import { useDispatch, useSelector } from 'react-redux';
import {
	getVideosPopular,
	getVideosByCategory,
} from '../features/videos/videosActions';
import InfiniteScroll from 'react-infinite-scroll-component';
import SkeletonLoad from '../components/SkeletonLoad';

function Home() {
	const dispatch = useDispatch();
	const { items, category, load } = useSelector((state) => state.homeVideos);
	useEffect(() => {
		dispatch(getVideosPopular());
	}, [dispatch]);

	const fetchItems = () => {
		category === 'all'
			? dispatch(getVideosPopular())
			: dispatch(getVideosByCategory(category));
	};
	return (
		<Layout>
			<Container>
				<Tags />
				<InfiniteScroll
					className='row'
					dataLength={items.length}
					next={fetchItems}
					hasMore={true}
					loader={
						<Spinner
							animation='border'
							className='mx-auto d-block'
							variant='danger'
						/>
					}
					endMessage={
						<p style={{ textAlign: 'center' }}>
							<b>Yay! You have seen it all</b>
						</p>
					}
				>
					{/* <Row> */}
					{!load
						? items.map((item, i) => (
								<Col lg={3} md={4} sm={6} key={item?.id?.videoId || item?.id}>
									<Video video={item} />
								</Col>
						  ))
						: [...Array(20)].map((val, i) => (
								//i make a loop not use count prop in Skeleton to be grid layout like i want with Col
								<Col lg={3} md={4} sm={6} key={i}>
									<SkeletonLoad />
								</Col>
						  ))}
					{/* </Row> */}
				</InfiniteScroll>
			</Container>
		</Layout>
	);
}

export default Home;
