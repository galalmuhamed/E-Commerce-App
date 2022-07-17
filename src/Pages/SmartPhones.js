import React from 'react';
import Products from '../Components/Products';
import { useSelector } from 'react-redux';
import {
	SmartPhoneContainer,
	Container,
	Title,
	LinksBanner,
	Brand,
} from '../Components/Styles/SmartPhones.styled';
import { BrandLinks } from '../Utils/Data';

const SmartPhones = () => {
	const products = useSelector(state => state.Products);
	const smartphoneProduct =
		products.smartPhones && Object.values(products.smartPhones);

	return (
		<SmartPhoneContainer>
			<Products
				title={'Smart Phones'}
				bannerTitle={'Smart Phones'}
				img={'/img/iphones.jpeg'}
				items={smartphoneProduct}
				sideBarList="mobiles"
			>
				<Container>
					<Title>Shop By Brands</Title>
					<LinksBanner>
						{BrandLinks.map(elm => (
							<Brand key={elm.id} color={elm.color} to={elm.to}>
								{elm.Icon}
							</Brand>
						))}
					</LinksBanner>
				</Container>
			</Products>
		</SmartPhoneContainer>
	);
};

export default SmartPhones;
