import styled from 'styled-components';
import { PrimaryBtn } from './Global.styled';
// Slider
export const SliderContainer = styled.div`
	position: relative;
	width: 100%;
	height: 60vh;
	margin-top: 10px;
	display: flex;
	overflow: hidden;
`;
export const Arrow = styled.div`
	background-color: darkgray;
	width: 50px;
	height: 50px;
	border-radius: 50%;
	position: absolute;
	top: 0;
	right: ${props => props.direction === 'right' && '10px'};
	left: ${props => props.direction === 'left' && '10px'};
	bottom: 0;
	margin: auto;
	display: flex;
	align-items: center;
	justify-content: center;
	opacity: 0.5;
	cursor: pointer;
	z-index: 2;
	transition: all 0.5s ease;
	& > :nth-child(1) {
		font-size: 25px;
	}
	&:hover {
		opacity: 1;
	}
`;

export const Wrapper = styled.div`
	height: 100%;
	display: flex;
	transform: translateX(${props => props.sliderIndex * -100}vw);
	transition: all 1.5s ease;
`;
export const Slide = styled.div`
	width: 100vw;
	height: 60vh;
	display: flex;
	align-items: center;
`;
export const LeftSide = styled.div`
	flex: 0.5;
	height: 100%;
`;
export const Image = styled.div`
	width: 100%;
	height: 100%;
	background-size: cover;
`;
export const RightSide = styled.div`
	flex: 0.5;
	background-color: #f4f5f7;
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;
export const Title = styled.h1``;
export const Desc = styled.p`
	margin: 10px 0;
	font-size: 12px;
`;
export const Button = styled(PrimaryBtn)`
	${PrimaryBtn}
`;
// categories//

export const CategoriesContainer = styled.ol`
	padding: 20px;

	display: flex;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
`;
export const CatContainer = styled.li`
	list-style: none;
	min-width: 300px;
	height: 30vh;
	flex: 1;
	margin: 0 5px;
	position: relative;
	background-color: #f4f5f7;
	display: flex;
	justify-content: center;
	align-items: center;
`;
export const WhiteBg = styled.div`
	width: 90%;
	height: 90%;
	background-color: white;
	border-radius: 5px;
	display: flex;
	justify-content: center;
	align-items: center;
`;
export const CatImage = styled.img`
	width: 100%;
	height: 100%;
	object-fit: contain;
`;
export const Info = styled.div`
	position: absolute;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;
export const CatTitle = styled.div`
	font-size: 25px;
	font-weight: bold;
	padding: 2px 5px;
	background-color: #f4f5f7ad;
	width: 100%;
	text-align: center;
	margin-bottom: 10px;
`;
export const CatBtn = styled(PrimaryBtn)`
	background-color: #f4f5f7ad;
	padding: 10px;
	border-radius: 0;
	${PrimaryBtn};
`;
// Popular Product
export const PpContainer = styled.ol`
	padding: 20px;
	& > .slider {
		background-color: #f4f5f7;
		margin-top: 10px;
		padding: 20px;

		& > .slick-prev {
			left: 0;
			width: 40px;
			height: 60px;
			background-color: #a9a9a994;
			z-index: 1;
		}
		& > .slick-next {
			right: 0;
			width: 40px;
			height: 60px;
			background-color: #a9a9a994;
			z-index: 1;
		}
		& > .slick-prev:before,
		& > .slick-next:before {
			color: black;
		}
	}
`;

// News Letter

export const NsContainer = styled.div`
	margin: 20px;
	background-color: #f4f5f7;
	height: 50vh;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;
export const NsTitle = styled.h1`
	font-size: 50px;
	letter-spacing: 3px;
	font-family: 'Luxurious Roman', cursive;
	margin-bottom: 20px;
`;
export const NsDesc = styled.p`
	font-weight: 600;
	font-size: 14px;
	margin-bottom: 20px;
`;
export const NsInputContainer = styled.div`
	background-color: white;
	height: 40px;
	width: 70%;
	display: flex;
	justify-content: space-between;
	border: 1px solid black;
`;
export const NsInput = styled.input`
	flex: 0.9;
	border: none;
	outline: none;
	padding-left: 20px;
`;
export const NsBtn = styled.button`
	flex: 0.1;
	border: none;
	outline: none;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: darkgrey;
	cursor: pointer;
	& > :nth-child(1) {
		font-size: 25px;
	}
`;

// footer
export const FtContainer = styled.div`
	margin-top: 20px;
	background-color: #f4f5f7;
	padding: 20px;
	display: flex;
	height: 50vh;
`;
export const FtLeft = styled.div`
	flex: 1;
	background-color: white;
	padding: 15px;
`;
export const FtLogo = styled.h1`
	letter-spacing: 3px;
	font-family: 'Luxurious Roman', cursive;
	margin-bottom: 15px;
`;
export const FtDesc = styled.p`
	font-size: 12px;
	margin-bottom: 15px;
`;
export const FtSocialLinks = styled.div`
	display: flex;
`;
export const FtSocialLink = styled.div`
	margin-right: 15px;
	width: 40px;
	height: 40px;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 50%;
	font-size: 30px;
	color: white;
	background-color: #${props => props.color};
	cursor: pointer;
`;

export const FtCenter = styled.div`
	flex: 1;
	background-color: white;
	padding: 15px;
`;
export const FtTitle = styled.h2`
	letter-spacing: 3px;
	margin-bottom: 15px;
`;
export const FtList = styled.ol`
	display: flex;
	flex-direction: column;
	list-style: none;
	flex-wrap: wrap;
	height: 90%;
`;
export const FtListItem = styled.li`
	font-size: 14px;
	margin: 10px 0;
	width: 50%;
`;

export const FtRight = styled.div`
	flex: 1;
	background-color: white;
	padding: 15px;
`;
export const FtContactItem = styled.div`
	margin: 10px 0;
	letter-spacing: 3px;
	font-size: 20px;
	display: flex;
	align-items: center;
	& > :nth-child(1) {
		margin-right: 10px;
	}
`;
export const FtPayment = styled.img`
	width: 150px;
	margin: 10px;
	object-fit: contain;
`;
export const CopyRight = styled.div`
	width: 100%;
	background-color: #f4f5f7;
	padding-bottom: 5px;
	text-align: center;
	margin-bottom: 20px;

	font-size: 12px;
	color: darkgray;
`;
