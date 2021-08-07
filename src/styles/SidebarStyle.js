import styled from 'styled-components';
import { colors, media } from './GlobalStyle';

export const Aside = styled.aside`
	flex-basis: 20%;
	padding-top: 2rem;
	height: 90vh;
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 0.2rem;
	background-color: ${colors.dark2};

	${media.tab} {
		flex-basis: 10%;
	}

	${media.mobile} {
		width: 100px;
		position: fixed;
		z-index: 999;
		transform: translateX(-100%);
		transition: transform 0.1s ease;

		&.open {
			transform: translateX(0);
		}
	}
	& .sidebar__link {
		color: inherit;
	}
`;

export const Item = styled.div`
	display: flex;
	align-items: center;
	gap: 1rem;
	padding: 0.6rem 1.5rem;
	cursor: pointer;
	transition: background-color 0.1s ease-in-out;

	${media.tab} {
		justify-content: center;
	}

	&:hover {
		background-color: ${colors.line};
	}

	span {
		font-size: 1rem;
		font-weight: 500;

		${media.tab} {
			display: none;
		}
	}
`;
