import styled from 'styled-components';
import { colors } from './GlobalStyle';

export const Section = styled.section`
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const Wrapper = styled.div`
	background-color: ${colors.dark2};
	padding: 2rem;
	margin: 0 1rem;
	border-radius: 10px;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const Title = styled.h2``;

export const Logo = styled.img`
	width: 130px;
	height: 130px;
	object-fit: contain;
`;

export const Btn = styled.button`
	padding: 0.5rem;
	border: none;
	border-radius: 5px;
	margin-bottom: 1rem;

	&:focus {
		outline: none;
	}
`;

export const Info = styled.p`
	font-style: italic;
`;
