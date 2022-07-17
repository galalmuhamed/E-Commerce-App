import styled from 'styled-components';
import { PrimaryBtnTwo } from './Global.styled';
export const LoginContainer = styled.div`
	padding: 30px;
`;
export const Logo = styled.div`
	width: 400px;
	margin: 0 auto;
	text-align: center;
	font-size: 30px;
	font-weight: 600;
	font-family: 'Luxurious Roman', cursive;
`;
// signUp

export const SignContainer = styled.div`
	background-color: white;
	width: 400px;
	margin: 10px auto;
	padding: 15px 20px;
	border: 1px solid gray;
	border-radius: 5px;
`;
export const Form = styled.form``;
export const Title = styled.h3`
	letter-spacing: 2px;
	margin-bottom: 20px;
`;
export const InputContainer = styled.div`
	display: flex;
	flex-direction: column;
`;
export const Label = styled.label`
	font-size: 12px;
	font-weight: bold;
	margin: 3px;
	width: 100%;
`;
export const Input = styled.input`
	background-color: white;
	padding: 3px 7px;
	width: 100%;
	border: 1px solid gray;
	border-radius: 5px;
	height: 30px;
	outline: none;

	&:focus {
		box-shadow: 0px 0px 10px 4px rgb(159 159 159 / 75%);
	}
`;

export const Message = styled.p`
	font-size: 11px;
	margin-top: 20px;
	font-weight: 500;
`;
export const SignBtn = styled(PrimaryBtnTwo)`
	border-radius: 5px;
	margin: 15px 0;
	${PrimaryBtnTwo}
`;
export const Border = styled.div`
	color: gray;
	font-size: 14px;
	font-style: italic;
	display: flex;
	&::before,
	&::after {
		content: '';
		flex: 1;
		border: 1px solid lightgray;
		margin: auto;
	}
`;
export const Goto = styled.div`
	font-size: 12px;
	font-weight: bold;
	margin-top: 10px;
	& > span {
		color: blue;
		cursor: pointer;
		&:hover {
			text-decoration: underline;
		}
	}
`;
export const NewTo = styled(PrimaryBtnTwo)`
	margin-top: 5px;
	color: white;
	background-color: gray;
	font-size: 12px;

	&:hover {
		background-color: gray;
	}
	${PrimaryBtnTwo};
`;
export const Error = styled.div`
	font-size: 12px;
	background-color: red;
	padding: 5px;
	border-radius: 5px;
	text-align: center;
`;
