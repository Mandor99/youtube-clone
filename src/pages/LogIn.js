import React from 'react';
import { Section, Wrapper, Title, Logo, Btn, Info } from '../styles/LogInStyle';
import LogoImg from '../images/logo.png';

function LogIn() {
	return (
		<Section>
			<Wrapper>
				<Title>Youtube clone</Title>
				<Logo src={LogoImg} alt='youtube logo' />
				<Btn>LogIn with Google</Btn>
				<Info>this project is made by YOUTUBE API</Info>
			</Wrapper>
		</Section>
	);
}

export default LogIn;
