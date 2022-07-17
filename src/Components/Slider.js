import React, { useState } from 'react';
import { sliderItems } from '../Utils/Data';
import {
	SliderContainer,
	Arrow,
	Wrapper,
	Slide,
	LeftSide,
	Image,
	RightSide,
	Title,
	Desc,
	Button,
} from './Styles/Home.styled';
import { MdArrowLeft, MdArrowRight } from 'react-icons/md';

const Slider = () => {
	const [sliderIndex, setSliderIndex] = useState(0);

	const handleClick = direction => {
		if (direction === 'left') {
			setSliderIndex(sliderIndex > 0 ? sliderIndex - 1 : 2);
		} else {
			setSliderIndex(sliderIndex < 2 ? sliderIndex + 1 : 0);
		}
	};
	return (
		<SliderContainer>
			<Arrow direction="left" onClick={() => handleClick('left')}>
				<MdArrowLeft />
			</Arrow>
			<Wrapper sliderIndex={sliderIndex}>
				{sliderItems.map(item => (
					<Slide key={item.id}>
						<LeftSide>
							<Image style={{ backgroundImage: `url(${item.img})` }} />
						</LeftSide>
						<RightSide>
							<Title>{item.title}</Title>
							<Desc>{item.desc}</Desc>
							<Button to={item.to}>{item.titleBtn}</Button>
						</RightSide>
					</Slide>
				))}
			</Wrapper>
			<Arrow direction="right" onClick={() => handleClick('right')}>
				<MdArrowRight />
			</Arrow>
		</SliderContainer>
	);
};

export default Slider;
