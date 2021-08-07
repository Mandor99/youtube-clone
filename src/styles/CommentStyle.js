import styled from 'styled-components';
import { colors, media } from './GlobalStyle';

export const Fig = styled.figure`
	font-size: 0.9rem;
	border-bottom: 0.2px solid ${colors.line};

	& .comment {
		&__avatar {
			width: 50px;
			height: 50px;
			margin-right: 1.5rem;

			${media.mobileSm} {
				width: 35px;
				height: 35px;
				margin-right: 1rem;
			}
		}

		&__user {
			color: #fff;
		}
	}
`;
