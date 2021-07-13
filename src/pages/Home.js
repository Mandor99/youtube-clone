import React from 'react';
import { Div } from '../styles/HomeStyle';
import Tags from '../components/Tags';
import Video from '../components/Video';
import { Container, Row, Col } from 'react-bootstrap';
function Home() {
	return (
		<Container>
			<Tags />
			<Row>
				{[...new Array(20)].map((val, i) => (
					<Col lg={3} md={4} sm={6} key={i}>
						<Video />
					</Col>
				))}
			</Row>
		</Container>
	);
}

export default Home;
