import React, { useState, useEffect, useRef } from 'react';
import {
	InputContainer,
	Input,
	SearchContainer,
	ProductCard,
	ImgProduct,
	ProductCardTitle,
	ProductLink,
} from './Styles/Navbar.styled';
import { MdSearch } from 'react-icons/md';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
const SearchBarNav = () => {
	const [search, setSearch] = useState('');
	const products = useSelector(state => state.Products);
	const ref = useRef();
	const location = useLocation();

	useEffect(() => {
		const prevState = (ref.current = location.pathname);
		if (prevState !== location.pathname) {
		} else {
			setSearch('');
		}
	}, [location.pathname]);

	const allProducts = {
		...products.smartPhones,
		...products.laptops,
		...products.smartWatches,
	};
	const productsArr = allProducts && Object.values(allProducts);
	const filterProducts = productsArr.filter(product =>
		product.name.toLowerCase().includes(search.toLowerCase())
	);

	return (
		<>
			<InputContainer>
				<MdSearch />
				<Input
					placeholder="Search"
					value={search}
					onChange={e => setSearch(e.target.value)}
				/>
				{search.trim() && search.trim().length > 0 && (
					<SearchContainer>
						<ProductCardTitle>Populer Suggestions</ProductCardTitle>
						{filterProducts.map(product => (
							<ProductCard key={product.id}>
								<ProductLink to={`/search/${product.id}`}>
									{`${product.name}`}
								</ProductLink>
							</ProductCard>
						))}
						<ProductCardTitle>Products</ProductCardTitle>
						{filterProducts.map(product => (
							<ProductCard key={product.id}>
								<ProductLink to={`/${product.id}`}>
									<ImgProduct src={product.coverImg} alt={product.name} />

									{`${product.name}`}
								</ProductLink>
							</ProductCard>
						))}
						{filterProducts.length === 0 && (
							<ProductCard>{`No result for: ${search}`}</ProductCard>
						)}
					</SearchContainer>
				)}
			</InputContainer>
		</>
	);
};

export default SearchBarNav;
