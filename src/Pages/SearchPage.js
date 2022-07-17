import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { SearchPageContainer } from '../Components/Styles/SearchPage.styled';
import Products from '../Components/Products';

const SearchPage = () => {
	const { PID } = useParams();
	const products = useSelector(state => state.Products);

	const allProducts = {
		...products.smartPhones,
		...products.laptops,
		...products.smartWatches,
	};
	const allProductsArr = Object.values(allProducts);
	const filterProduct = PID && allProductsArr.filter(elm => elm.id === PID);
	const product = allProducts[PID];
	if (!product) {
		return <div>not found</div>;
	}

	return (
		<SearchPageContainer>
			<Products
				title={'Search Result'}
				bannerTitle={product.name}
				img={
					'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Search_Icon.svg/1024px-Search_Icon.svg.png'
				}
				items={filterProduct}
				sideBarList="search"
			/>
		</SearchPageContainer>
	);
};

export default SearchPage;
