import React from 'react';
import { useSelector } from 'react-redux';
import Products from '../../Components/Products';
import { SmartPhoneContainer } from '../../Components/Styles/SmartPhones.styled';
const SmartPhonesApple = () => {
	const products = useSelector(state => state.Products);
	const smartPhoneApple =
		products.smartPhones &&
		Object.values(products.smartPhones).filter(item => item.brand === 'apple');

	return (
		<SmartPhoneContainer>
			<Products
				title={'Apple'}
				bannerTitle={'Apple Phones'}
				img={'/img/appleLogo.png'}
				items={smartPhoneApple}
				sideBarList="mobiles"
			/>
		</SmartPhoneContainer>
	);
};

export default SmartPhonesApple;
