import React from 'react';
import Products from '../Components/Products';
import { useSelector } from 'react-redux';
import {
	LaptopsContainer,
	LapContainer,
	LapTitle,
	LapLinksBanner,
	LapBrand,
} from '../Components/Styles/Laptops.styled';
import { BrandLinksLaptop } from '../Utils/Data';

const Laptops = () => {
	const products = useSelector(state => state.Products);
	const laptopsProduct = products.laptops && Object.values(products.laptops);

	return (
		<LaptopsContainer>
			<Products
				title={'Laptops'}
				bannerTitle={'Laptops'}
				img={'/img/laptop-banner.jpg'}
				items={laptopsProduct}
				sideBarList="laptop"
			>
				<LapContainer>
					<LapTitle>Shop By Brands</LapTitle>
					<LapLinksBanner>
						{BrandLinksLaptop.map(elm => (
							<LapBrand key={elm.id} color={elm.color} to={elm.to}>
								{elm.Icon}
							</LapBrand>
						))}
					</LapLinksBanner>
				</LapContainer>
			</Products>
		</LaptopsContainer>
	);
};

export default Laptops;
