import React from 'react';
import Products from '../Components/Products';
import { useSelector } from 'react-redux';
import { BrandLinksWatches } from '../Utils/Data';
import {
	SmartWatchContainer,
	WatchContainer,
	WatchTitle,
	WatchLinksBanner,
	WatchBrand,
} from '../Components/Styles/SmartWatch.styled';

const SmartWatches = () => {
	const products = useSelector(state => state.Products);
	const smartWatchProducts =
		products.smartWatches && Object.values(products.smartWatches);

	return (
		<SmartWatchContainer>
			<Products
				title={'Smart Watches'}
				bannerTitle={'Smart Watches'}
				img={'/img/huaweiwatchgt.jpg'}
				items={smartWatchProducts}
				sideBarList="watches"
			>
				<WatchContainer>
					<WatchTitle>Shop By Brands</WatchTitle>
					<WatchLinksBanner>
						{BrandLinksWatches.map(elm => (
							<WatchBrand key={elm.id} color={elm.color} to={elm.to}>
								{elm.Icon}
							</WatchBrand>
						))}
					</WatchLinksBanner>
				</WatchContainer>
			</Products>
		</SmartWatchContainer>
	);
};

export default SmartWatches;
