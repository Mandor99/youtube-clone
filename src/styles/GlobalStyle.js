import styled, { createGlobalStyle } from 'styled-components';

export const colors = {
	txt: '#b1bdb4',
	dark1: '#16181b',
	dark2: '#121417',
	line: '#4c4c4c',
	color1: '#374a59',
	color2: '#080808ec',
};

export const paddings = {
	padding1: '1rem 3rem',
	p1: '1rem',
};

export const bp = {
	mobileSm: '350px',
	mobile: '570px',
	tab: '768px',
	lap: '992px',
	desk: '1200px',
};

export const media = {
	mobileSm: `@media only screen and (max-width: ${bp.mobileSm})`,
	mobile: `@media only screen and (max-width: ${bp.mobile})`,
	tab: `@media only screen and (max-width: ${bp.tab})`,
	lap: `@media only screen and (max-width: ${bp.lap})`,
	desk: `@media only screen and (max-width: ${bp.desk})`,
};

export const GlobalStyle = createGlobalStyle`
    body {
    font-family: 'Roboto', sans-serif;
    background-color: ${colors.dark1};
    color: ${colors.txt};
    }
    li {
		list-style: none;
	}
	a {
		text-decoration: none;
	}
	::-webkit-scrollbar {
		width: 0;
	}
`;
