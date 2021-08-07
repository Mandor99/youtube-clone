import styled from 'styled-components';
import { colors, media } from './GlobalStyle';

export const Section = styled.section`
	border-bottom: 0.3px solid ${colors.line};

	& .recommended__title {
		font-size: 1.2rem;
		color: #fff;
		letter-spacing: 0.3px;
		display: -webkit-box;
		overflow: hidden;
		-webkit-line-clamp: 1;
		-webkit-box-orient: vertical;
	}
	& .recommended__details {
		font-size: 0.9rem;
		display: -webkit-box;
		overflow: hidden;
		-webkit-line-clamp: 1;
		-webkit-box-orient: vertical;
	}
	& .recommended__desc {
		display: -webkit-box;
		overflow: hidden;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;

		&.none {
			display: none;
			${media.tab} {
				display: -webkit-box;
			}
			${media.tab} {
				display: none;
			}
		}
	}

	& .recommended__name {
		display: -webkit-box;
		overflow: hidden;
		-webkit-line-clamp: 1;
		-webkit-box-orient: vertical;
		font-size: 0.9rem;
	}

	.channel-icon {
		width: 30px;
		height: 30px;
	}
`;

export const Fig = styled.figure`
	position: relative;
	width: 100%;
	text-align: center;

	& .recommendedChannel {
		/* border-radius: 50%; */
		width: 100%;
		/* min-height: 75px; */
		object-fit: cover;
		cursor: pointer;
	}

	& .recommended__time {
		position: absolute;
		bottom: 0.3rem;
		right: 0.3rem;
		padding: 0.1rem;
		border-radius: 3px;
		background-color: ${colors.color2};
	}
`;
