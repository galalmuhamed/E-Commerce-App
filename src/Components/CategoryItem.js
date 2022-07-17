import React from 'react';
import {
	CatContainer,
	WhiteBg,
	CatImage,
	Info,
	CatTitle,
	CatBtn,
} from './Styles/Home.styled';

const CategoryItem = ({ item }) => {
	return (
		<CatContainer>
			<WhiteBg>
				<CatImage src={item.img} />
			</WhiteBg>
			<Info>
				<CatTitle>{item.title}</CatTitle>
				<CatBtn to={item.to}>Shop Now</CatBtn>
			</Info>
		</CatContainer>
	);
};

export default CategoryItem;
