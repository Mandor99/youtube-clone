import styled from 'styled-components';
import { colors, media } from './GlobalStyle';

export const Main = styled.main``;

export const TitleWrapper = styled.section`
	.video__title {
		${media.mobile} {
			font-size: 1rem;
		}
	}

	.video__time-views {
		${media.mobile} {
			font-size: 0.9rem;
		}
	}
	.likesIcons > span {
		cursor: pointer;
		${media.mobile} {
			font-size: 0.8rem;
		}
	}
`;

export const ChannelWrapper = styled.section`
	border-top: 0.2px solid ${colors.line};
	border-bottom: 0.2px solid ${colors.line};

	&.no-padding {
		${media.mobile} {
			padding-left: 0 !important;
			padding-right: 0 !important;
		}
	}

	& .channel__avatar {
		${media.mobile} {
			margin-top: 1rem;
		}

		& .channelSubscribe {
			${media.mobile} {
				font-size: 1rem;
			}
			${media.mobileSm} {
				font-size: 0.8rem;
			}
		}
	}

	& .channelImg {
		width: 65px;
		height: 65px;
		border-radius: 50%;
		margin-right: 1rem;

		${media.mobileSm} {
			width: 60px !important;
			height: 60px !important;
		}
	}

	& .channelName {
		${media.mobileSm} {
			font-size: 1rem;
		}
	}

	& .btnSubscribe {
		background-color: red;
		color: #fff;
		border-radius: 0;
		text-transform: uppercase;
		letter-spacing: 0.5px;

		${media.mobileSm} {
			font-size: 0.9rem;
		}

		&.btn-gray {
			background-color: gray;
		}
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
