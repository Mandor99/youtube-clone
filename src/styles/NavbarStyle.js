import styled from 'styled-components';
import { paddings, colors, media } from '../styles/GlobalStyle';

export const NavbarComp = styled.nav`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: ${paddings.padding1};
	height: 10vh;
	background-color: ${colors.dark1};
	width: 100%;
	color: ${colors.txt};

	${media.mobile} {
		padding: ${paddings.p1};
		/* gap: 1rem; */
	}

	& .nav__toggle-slide {
		display: none;

		${media.mobile} {
			display: initial;
			cursor: pointer;
		}
	}

	& .nav-link {
		color: inherit;
	}
`;

const sizeLogo = '30px';
export const Logo = styled.img`
	width: ${sizeLogo};
	height: ${sizeLogo};
	object-fit: contain;
	cursor: pointer;
`;

export const Form = styled.form`
	display: flex;
	flex: 0.5;
	margin: 0 1rem;
	padding: 0.1rem;
	border-radius: 3px;
	border: 1.2px solid ${colors.line};
	background-color: ${colors.dark2};

	${media.tab} {
		flex: 0.6;
	}

	${media.mobile} {
		flex: 1;
		margin: 0 0.25rem;
	}

	.nav__input {
		width: 100%;
		border: none;
		outline: none;
		font-weight: 500;
		background: transparent;
		color: ${colors.txt};
		padding: 0.3rem;

		&:focus {
			outline: none;
		}
	}

	.nav__search-btn {
		padding: 0 1.25rem;
		color: ${colors.txt};
		background: transparent;
		border: none;

		&:focus {
			border: none;
		}
	}
`;

const sizeAvatar = '40px';
export const WrapperProfile = styled.div`
	display: flex;
	flex: 0.2;
	justify-content: space-around;
	align-items: center;

	${media.tab} {
		flex: 0.3;
	}

	& > * {
		cursor: pointer;

		${media.mobile} {
			display: none;
		}
	}

	.nav__avatar {
		width: ${sizeAvatar};
		height: ${sizeAvatar};
		border-radius: 50%;
		object-fit: contain;
		margin-left: 0.5rem;

		${media.mobile} {
			display: initial;
		}
	}
`;
