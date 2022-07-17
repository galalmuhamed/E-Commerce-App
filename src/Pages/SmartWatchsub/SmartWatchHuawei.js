import React from 'react';
import { useSelector } from 'react-redux';
import Products from '../../Components/Products';
import { SmartWatchContainer } from '../../Components/Styles/SmartWatch.styled';

const SmartWatchHuawei = () => {
	const products = useSelector(state => state.Products);

	const huaweiWatch =
		products.smartWatches &&
		Object.values(products.smartWatches).filter(
			item => item.brand === 'huawei'
		);
	return (
		<SmartWatchContainer>
			<Products
				title={'Huawei'}
				bannerTitle={'Huawei Watches'}
				img={'/img/huaweiLogo.png'}
				items={huaweiWatch}
				sideBarList="watches"
			/>
		</SmartWatchContainer>
	);
};

export default SmartWatchHuawei;
