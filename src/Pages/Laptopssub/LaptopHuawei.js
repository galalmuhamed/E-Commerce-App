import React from 'react';
import { useSelector } from 'react-redux';
import Products from '../../Components/Products';
import { LaptopsContainer } from '../../Components/Styles/Laptops.styled';

const LaptopHuawei = () => {
	const products = useSelector(state => state.Products);

	const laptopHuawei =
		products.laptops &&
		Object.values(products.laptops).filter(item => item.brand === 'huawei');
	return (
		<LaptopsContainer>
			<Products
				title={'Huawei'}
				bannerTitle={'Huawei Laptops'}
				img={'/img/huaweiLogo.png'}
				items={laptopHuawei}
				sideBarList="laptop"
			/>
		</LaptopsContainer>
	);
};

export default LaptopHuawei;
