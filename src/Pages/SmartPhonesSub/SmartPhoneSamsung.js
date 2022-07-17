import React from 'react';
import { useSelector } from 'react-redux';
import Products from '../../Components/Products';
import { SmartPhoneContainer } from '../../Components/Styles/SmartPhones.styled';

const SmartPhonesSamsung = () => {
	const products = useSelector(state => state.Products);
	const smartPhoneSamsung =
		products.smartPhones &&
		Object.values(products.smartPhones).filter(
			item => item.brand === 'samsung'
		);

	return (
		<SmartPhoneContainer>
			<Products
				title={'Samsung'}
				bannerTitle={'Samsung Phones'}
				img={'/img/samsungLogo.png'}
				items={smartPhoneSamsung}
				sideBarList="mobiles"
			/>
		</SmartPhoneContainer>
	);
};

export default SmartPhonesSamsung;
