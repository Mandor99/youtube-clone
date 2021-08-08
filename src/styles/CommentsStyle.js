import styled from 'styled-components';
import { colors, media } from './GlobalStyle';

export const Article = styled.article`
	.comments__number {
		${media.mobileSm} {
			font-size: 1.1rem;
		}
	}
`;

export const Wrapper = styled.div`
	& .comment {
		&__img {
			width: 50px;
			height: 50px;
			margin-right: 1.5rem;

			${media.mobileSm} {
				width: 35px;
				height: 35px;
				margin-right: 1rem;
			}
		}
	}
`;

export const Form = styled.form`
	& .comment {
		&__input {
			background-color: transparent;
			border: none;
			border-bottom: 2px solid ${colors.line};
			color: #fff;

			&:focus {
				outline: none;
				/* border: none; */
			}

			${media.mobile} {
				font-size: 0.9rem;
			}
		}

		&__btn {
			background-color: ${colors.color3};
			color: #fff;
			letter-spacing: 0.5px;

			${media.mobileSm} {
				padding: 0.25rem !important;
			}

			&:focus {
				outline: none;
				border: none;
				box-shadow: none;
			}
		}
	}
`;
