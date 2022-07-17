import React from 'react';
import { LoginContainer, Logo } from '../Components/Styles/Login.styled';
import Signin from '../Components/Signin';
import Signup from '../Components/Signup';
import { useSelector } from 'react-redux';

const LoginPage = ({ login, setLogin }) => {
	const users = useSelector(state => state.Users);
	const formatedUser = Object.values(users).map(user => ({
		id: user.id,
		email: user.email,
		password: user.password,
	}));
	return (
		<LoginContainer>
			<Logo>G-Store</Logo>
			{login === 'signUp' ? (
				<Signup setLogin={setLogin} formatedUser={formatedUser} />
			) : (
				<Signin setLogin={setLogin} formatedUser={formatedUser} />
			)}
		</LoginContainer>
	);
};

export default LoginPage;
