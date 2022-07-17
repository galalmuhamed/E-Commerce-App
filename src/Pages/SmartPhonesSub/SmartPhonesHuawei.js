import React from 'react';
import { useSelector } from 'react-redux';
import Products from '../../Components/Products';
import { SmartPhoneContainer } from '../../Components/Styles/SmartPhones.styled';
const SmartPhonesHuawei = () => {
	const products = useSelector(state => state.Products);
	const smartPhoneHuawei =
		products.smartPhones &&
		Object.values(products.smartPhones).filter(item => item.brand === 'huawei');

	return (
		<SmartPhoneContainer>
			<Products
				title={'Huawei'}
				bannerTitle={'Huawei Phones'}
				img={'/img/huaweiLogo.png'}
				items={smartPhoneHuawei}
				sideBarList="mobiles"
			/>
		</SmartPhoneContainer>
	);
};

export default SmartPhonesHuawei;
