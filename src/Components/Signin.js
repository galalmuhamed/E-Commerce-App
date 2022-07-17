import React, { useState, useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
	SignContainer,
	Title,
	Form,
	InputContainer,
	Label,
	Input,
	Message,
	SignBtn,
	Border,
	NewTo,
	Error,
} from './Styles/Login.styled';
import { setAuthedUser } from '../Redux/Actions/AuthedUser';
import { useNavigate } from 'react-router-dom';

const Signin = ({ setLogin, formatedUser }) => {
	const focusRef = useRef();
	useEffect(() => {
		focusRef.current.focus();
	}, []);
	const [email, setEmail] = useState('galal@test.com');
	const [password, setPassword] = useState('123');
	const [error, setError] = useState('');
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleSignIn = e => {
		e.preventDefault();
		formatedUser.map(user => {
			if (user.email === email && user.password === password) {
				dispatch(setAuthedUser(user.id));
				navigate('/');
			} else if (email === '' || password === '') {
				setError("Email / Password Can't be empty");
			} else {
				setError('Email / Password Is Incorrect');
			}
		});
		setEmail('');
		setPassword('');
	};

	return (
		<SignContainer>
			<Title>Sign-In</Title>
			<Form onSubmit={handleSignIn}>
				<InputContainer>
					<Label htmlFor="email">Email</Label>
					<Input
						ref={focusRef}
						id="email"
						type="email"
						value={email}
						onChange={e => setEmail(e.target.value)}
						maxLength="30"
					/>
				</InputContainer>
				<InputContainer>
					<Label htmlFor="password">Password</Label>
					<Input
						id="password"
						type="password"
						value={password}
						onChange={e => setPassword(e.target.value)}
						maxLength="10"
					/>
				</InputContainer>
				<Message>
					By signing in, you agree to G-Store Conditions of Use and Privacy
					Notice.
				</Message>
				<SignBtn type="submit">Sign-In</SignBtn>
			</Form>
			{error && <Error>{error}</Error>}
			<Border>New to G-Store</Border>
			<NewTo onClick={() => setLogin('signUp')}>
				Create Your G-Store account
			</NewTo>
		</SignContainer>
	);
};

export default Signin;
