import styled from 'styled-components';
import { colors } from './GlobalStyle';

export const TagsSlide = styled.div`
	display: flex;
	gap: 1rem;
	padding: 0.5rem 0;
	font-size: 0.8rem;
	overflow-x: scroll;
	/* scrollbar-width: none; */

	::-webkit-scrollbar {
		width: 0;
	}

	.tag__name {
		padding: 0.5rem;
		border: 1.5px solid ${colors.txt};
		border-radius: 999px;
		transition: background-color 0.1s ease-in;
		white-space: nowrap;
		cursor: pointer;
		text-transform: capitalize;

		&.active {
			background-color: ${colors.color1};
		}

		&:hover {
			background-color: ${colors.color1};
		}
	}
`;
