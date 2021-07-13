import styled from 'styled-components';

export const Div = styled.div`
	/* width: 100%;  i will use <Container fluid > instead*/
	/* overflow-x: hidden; */
`;

export const HomeWrapper = styled.div`
	display: flex;
	height: 90vh; //100 - 10vh for navbar
	overflow-y: scroll;

	.home__container {
		overflow-x: hidden;
	}
`;
