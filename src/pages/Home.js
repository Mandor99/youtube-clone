import React, { useEffect } from 'react';
// import { Div } from '../styles/HomeStyle';
import Tags from '../components/Tags';
import Video from '../components/Video';
import { Container, Row, Col } from 'react-bootstrap';
import Layout from '../components/Layout';
import { useDispatch, useSelector } from 'react-redux';
import { getVideosPopular } from '../features/videos/videosActions';

function Home() {
	const dispatch = useDispatch();
	const { items } = useSelector((state) => state.homeVideos);
	useEffect(() => {
		dispatch(getVideosPopular());
	}, [dispatch]);
	return (
		<Layout>
			<Container>
				<Tags />
				<Row>
					{items.map((item, i) => (
						<Col lg={3} md={4} sm={6} key={item.id}>
							<Video video={item} />
						</Col>
					))}
				</Row>
			</Container>
		</Layout>
	);
}

export default Home;
