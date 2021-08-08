import styled from 'styled-components';
import { colors, media } from './GlobalStyle';

export const VideoWrapper = styled.div`
	height: 60vh;
	width: 100%;
	margin-bottom: 2rem;
	background-color: ${colors.color3};

	${media.tab} {
		height: 40vh;
	}

	${media.mobile} {
		height: 35vh;
	}
`;
