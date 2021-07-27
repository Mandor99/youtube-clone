import styled from 'styled-components';
import { colors } from './GlobalStyle';

export const Main = styled.main``;

export const TitleWrapper = styled.section`
	.likesIcons > span {
		cursor: pointer;
	}
`;

export const ChannelWrapper = styled.section`
	border-top: 0.2px solid ${colors.line};
	border-bottom: 0.2px solid ${colors.line};

	& .channelImg {
		width: 65px;
		height: 65px;
		border-radius: 50%;
		margin-right: 1rem;
	}

	& .btnSubscribe {
		background-color: red;
		color: #fff;
		border-radius: 0;
		text-transform: uppercase;
		letter-spacing: 0.5px;
	}
`;

export const DescWrapper = styled.article`
	font-size: 0.9rem;
	/* white-space: pre-line; */
	border-bottom: 0.2px solid ${colors.line};

	& .showMoreDescription {
		text-decoration: none;
		display: block;
		margin: 1rem 0;
		color: #fff;
		font-weight: 500;
	}
`;
