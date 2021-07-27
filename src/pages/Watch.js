import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Comments from '../components/Comments';
import Layout from '../components/Layout';
import MetaData from '../components/MetaData';
import RecommendedVideos from '../components/RecommendedVideos';
import { VideoWrapper } from '../styles/WatchStyle';

function Watch() {
	return (
		<div>
			<Layout>
				<Row>
					<Col lg={8}>
						<VideoWrapper>
							<iframe
								title='watched video'
								src='https://www.youtube.com/embed/d1uVmE1J1U8'
								frameBorder='0'
								allowFullScreen
								width='100%'
								height='100%'
								allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
							></iframe>
						</VideoWrapper>
						<MetaData />
						<Comments />
					</Col>
					<Col lg={4}>
						{[...Array(10)].map((_, i) => (
							<RecommendedVideos key={i} />
						))}
					</Col>
				</Row>
			</Layout>
		</div>
	);
}

export default Watch;
