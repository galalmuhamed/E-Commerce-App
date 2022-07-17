import React from 'react';
import { useSelector } from 'react-redux';
import Products from '../../Components/Products';
import { LaptopsContainer } from '../../Components/Styles/Laptops.styled';

const LaptopSamsung = () => {
	const products = useSelector(state => state.Products);

	const laptopSamsung =
		products.laptops &&
		Object.values(products.laptops).filter(item => item.brand === 'samsung');
	return (
		<LaptopsContainer>
			<Products
				title={'Samsung'}
				bannerTitle={'Samsung Laptops'}
				img={'/img/samsungLogo.png'}
				items={laptopSamsung}
				sideBarList="laptop"
			/>
		</LaptopsContainer>
	);
};

export default LaptopSamsung;
