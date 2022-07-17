import React from 'react';
import Slider from '../Components/Slider';
import Categories from '../Components/Categories';
import PopularProducts from '../Components/PopularProducts';
import { useSelector } from 'react-redux';
import NewSletter from '../Components/NewSletter';
import Footer from '../Components/Footer';

const Home = () => {
	const Products = useSelector(state => state.Products);

	const popularSmartPhones =
		Products.smartPhones &&
		Object.values(Products.smartPhones).filter(item => item.popular === true);
	const popularLaptops =
		Products.laptops &&
		Object.values(Products.laptops).filter(item => item.popular === true);
	const popularWatches =
		Products.smartWatches &&
		Object.values(Products.smartWatches).filter(item => item.popular === true);

	return (
		<>
			<Slider />
			<Categories />
			<PopularProducts
				title="Popular Smart Phones"
				filterdProduct={popularSmartPhones}
			/>
			<PopularProducts
				title="Popular Laptops"
				filterdProduct={popularLaptops}
			/>
			<PopularProducts
				title="Popular Smart Watches"
				filterdProduct={popularWatches}
			/>
			<NewSletter />
			<Footer />
		</>
	);
};

export default Home;
