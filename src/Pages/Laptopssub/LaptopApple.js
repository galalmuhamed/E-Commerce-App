import React from 'react';
import { useSelector } from 'react-redux';
import Products from '../../Components/Products';
import { LaptopsContainer } from '../../Components/Styles/Laptops.styled';

const LaptopApple = () => {
	const products = useSelector(state => state.Products);

	const laptopApple =
		products.laptops &&
		Object.values(products.laptops).filter(item => item.brand === 'apple');
	return (
		<LaptopsContainer>
			<Products
				title={'Apple'}
				bannerTitle={'Apple Laptops'}
				img={'/img/appleLogo.png'}
				items={laptopApple}
				sideBarList="laptop"
			/>
		</LaptopsContainer>
	);
};

export default LaptopApple;
