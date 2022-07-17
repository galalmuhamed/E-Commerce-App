import React from 'react';
import { useSelector } from 'react-redux';
import Products from '../../Components/Products';
import { SmartWatchContainer } from '../../Components/Styles/SmartWatch.styled';

const SmartWatchApple = () => {
	const products = useSelector(state => state.Products);

	const AppleWatch =
		products.smartWatches &&
		Object.values(products.smartWatches).filter(item => item.brand === 'apple');
	return (
		<SmartWatchContainer>
			<Products
				title={'Apple'}
				bannerTitle={'Apple Watches'}
				img={'/img/appleLogo.png'}
				items={AppleWatch}
				sideBarList="watches"
			/>
		</SmartWatchContainer>
	);
};

export default SmartWatchApple;
