import React, { useState, useRef, useEffect } from 'react';
import {
	SignContainer,
	Form,
	Title,
	InputContainer,
	Label,
	Input,
	Message,
	SignBtn,
	Border,
	Goto,
	Error,
} from './Styles/Login.styled';
import { handleAddUser } from '../Redux/Actions/Users';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
const Signup = ({ setLogin, formatedUser }) => {
	//to focus in input
	const focusRef = useRef();
	useEffect(() => {
		focusRef.current.focus();
	}, []);
	//
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const id =
		firstName.trim().toLocaleLowerCase() + lastName.trim().toLocaleLowerCase();
	const addUser = e => {
		e.preventDefault();
		if (
			firstName.trim() === '' ||
			lastName.trim() === '' ||
			password.trim() === '' ||
			email.trim() === ''
		) {
			setError('Your First/Last Name/Email or Password Field cant be Empty');
		} else if (
			formatedUser.some(
				u => u.id === id || (u.email === email && u.password === password)
			)
		) {
			setError(
				'User with this identifier already exists. If you already have an account, Click on Sign In'
			);
		} else {
			dispatch(handleAddUser(id, firstName, lastName, email, password));
			navigate('/');
		}
		setFirstName('');
		setLastName('');
		setEmail('');
		setPassword('');
	};

	return (
		<SignContainer>
			<Title>Create Account</Title>
			<Form onSubmit={addUser}>
				<InputContainer>
					<Label htmlFor="firstName">First Name</Label>
					<Input
						ref={focusRef}
						type="text"
						id="firstName"
						value={firstName}
						onChange={e => setFirstName(e.target.value)}
						maxLength="10"
					/>
				</InputContainer>
				<InputContainer>
					<Label htmlFor="lastName">Last Name</Label>
					<Input
						type="text"
						id="lastName"
						value={lastName}
						onChange={e => setLastName(e.target.value)}
						maxLength="10"
					/>
				</InputContainer>
				<InputContainer>
					<Label htmlFor="email">Email</Label>
					<Input
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
					By enrolling Email, you consent to receiving automated security
					notifications via Email from G-Store.
					<br />
					By creating an account, you agree to G-Store Conditions of Use and
					Privacy Notice.
				</Message>
				<SignBtn type="submit">Create Your Account</SignBtn>
			</Form>
			{error && <Error>{error}</Error>}
			<Border>Or</Border>
			<Goto>
				Already have an account?{' '}
				<span onClick={() => setLogin('signIn')}>Sign in </span>
			</Goto>
		</SignContainer>
	);
};

export default Signup;
