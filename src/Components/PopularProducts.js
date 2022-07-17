import React from 'react';
import { settings } from '../Utils/Data';
import { PpContainer } from './Styles/Home.styled';
import Slider from 'react-slick';
import Product from './Product';
const PopularProducts = ({ title, filterdProduct }) => {
	return (
		<PpContainer>
			<h3>{title}</h3>
			<Slider {...settings} className="slider">
				{filterdProduct &&
					filterdProduct.map(item => <Product key={item.id} item={item} />)}
			</Slider>
		</PpContainer>
	);
};

export default PopularProducts;
