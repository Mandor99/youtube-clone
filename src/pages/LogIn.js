import React, { useEffect } from 'react';
import { Section, Wrapper, Title, Logo, Btn, Info } from '../styles/LogInStyle';
import LogoImg from '../images/logo.png';
import { useDispatch, useSelector } from 'react-redux';
import { authLogIn } from '../features/authActions';
import { useHistory } from 'react-router-dom';

function LogIn() {
	const dispatch = useDispatch();
	const { token } = useSelector((state) => state.auth);
	const history = useHistory();
	const handleSubmit = () => {
		dispatch(authLogIn());
	};
	useEffect(() => {
		if (token) history.push('/');
	}, [token, history]);
	return (
		<Section>
			<Wrapper>
				<Title>Youtube clone</Title>
				<Logo src={LogoImg} alt='youtube logo' />
				<Btn type='submit' onClick={handleSubmit}>
					LogIn with Google
				</Btn>
				<Info>this project is made by YOUTUBE API</Info>
			</Wrapper>
		</Section>
	);
}

export default LogIn;
