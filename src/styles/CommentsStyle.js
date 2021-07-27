import styled from 'styled-components';
import { colors } from './GlobalStyle';

export const Article = styled.article``;

export const Wrapper = styled.div`
	& .comment {
		&__img {
			width: 50px;
			height: 50px;
			margin-right: 1.5rem;
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
		}

		&__btn {
			background-color: ${colors.color3};
			color: #fff;
			letter-spacing: 0.5px;

			&:focus {
				outline: none;
				border: none;
				box-shadow: none;
			}
		}
	}
`;
