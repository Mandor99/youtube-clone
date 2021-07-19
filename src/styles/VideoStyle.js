import styled from 'styled-components';
import { colors } from './GlobalStyle';

export const Section = styled.section`
	margin-bottom: 1rem;
	padding: 0.7rem;
	font-weight: 500;
	font-size: 0.9rem;
	cursor: pointer;

	.lazy-load-image-background {
		width: 100%;
	}
`;

export const ThumbWrapper = styled.figure`
	position: relative;
	margin-bottom: 0.5rem;

	img,
	.lazy-load-image-background {
		width: 100%;
		object-fit: cover;
	}

	.video__time {
		padding: 0.2rem;
		position: absolute;
		bottom: 0.3rem;
		right: 0.3rem;
		background-color: ${colors.color2};
		border-radius: 3px;
	}
`;

export const Title = styled.h4`
	margin-bottom: 0.1rem;
	color: #fff;
	display: -webkit-box;
	overflow: hidden;
	-webkit-line-clamp: 1;
	-webkit-box-orient: vertical;
`;

export const Details = styled.div`
	display: flex;
	align-items: center;
`;

export const Channel = styled.div`
	display: flex;
	align-items: center;
	gap: 0.5rem;
	margin: 0.5rem 0;

	img,
	.lazy-load-image-background {
		width: 36px;
		height: 36px;
		object-fit: contain;
		border-radius: 50%;
		cursor: pointer;
	}
`;
