import React from 'react';
import { useSelector } from 'react-redux';
import Products from '../../Components/Products';
import { SmartWatchContainer } from '../../Components/Styles/SmartWatch.styled';

const SmartWatchSamsung = () => {
	const products = useSelector(state => state.Products);

	const samsungWatch =
		products.smartWatches &&
		Object.values(products.smartWatches).filter(
			item => item.brand === 'samsung'
		);
	return (
		<SmartWatchContainer>
			<Products
				title={'Samsung'}
				bannerTitle={'Samsung Watches'}
				img={'/img/samsungLogo.png'}
				items={samsungWatch}
				sideBarList="watches"
			/>
		</SmartWatchContainer>
	);
};

export default SmartWatchSamsung;
