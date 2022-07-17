import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
	position: fixed;
	top: 0;
	left: ${props => props.left};
	width: 300px;
	height: 100vh;
	background-color: #f4f5f7;
	transition: all 0.5s ease;
	z-index: 4;
`;
//header
export const HeaderSideBar = styled.div`
	background-color: gray;
	display: flex;
	align-items: center;
	padding: 10px 20px;
	color: white;
	& > :nth-child(1) {
		margin-right: 5px;
		font-size: 25px;
	}
`;
export const DivSign = styled.div`
	color: white;
	text-decoration: none;
	font-weight: 900;
	font-size: 20px;
`;
export const SignLink = styled(Link)`
	text-decoration: none;
	color: white;
	&:hover {
		text-decoration: underline;
	}
`;
export const Span = styled.span`
	text-transform: capitalize;
	font-size: 14px;
	font-style: italic;
	color: lightgray;
`;
//
export const Title = styled.div`
	margin: 10px 0;
	font-weight: 600;
	padding: 5px 20px;
	color: #333232;
`;
export const LinksContainer = styled.ul`
	display: flex;
	flex-direction: column;
	align-items: center;
`;
export const LinkContainer = styled.li`
	width: 100%;
	list-style: none;
	margin: 5px 0;
`;
export const MainLink = styled.div`
	display: flex;
	align-items: center;
	padding: 5px 20px;
	justify-content: space-between;
	border-bottom: 1px solid black;
`;
export const Left = styled(Link)`
	display: flex;
	align-items: center;
	color: black;
	text-decoration: none;
	font-weight: 600;
	& > :nth-child(1) {
		margin-right: 5px;
	}
`;
export const Right = styled.div`
	display: flex;
	align-items: center;
	font-size: 20px;
	cursor: pointer;
`;
//subLink
export const SubLink = styled.div`
	padding: 5px 25px;
	display: flex;
	flex-direction: column;
	background: white;
	height: ${props => props.height};
	visibility: ${props => props.visible};
	transition: all 0.5s ease-in-out;
`;
export const Links = styled(Link)`
	color: grey;
	margin-bottom: 5px;
	text-decoration: none;
	font-size: 13px;
	font-weight: 600;
	animation: ${props => props.animation};
	transition: all 0.5s ease;
	&:hover {
		color: black;
	}

	@keyframes test {
		0% {
			visibility: hidden;
		}
		80% {
			visibility: hidden;
		}
		100% {
			visibility: visible;
		}
	}
`;

//Opacity
export const Opacity = styled.div`
	position: fixed;
	top: 0;
	background-color: ${props => props.background};
	width: 100%;
	height: 100vh;
	opacity: ${props => props.opacity};
	color: white;
	z-index: 3;
`;
