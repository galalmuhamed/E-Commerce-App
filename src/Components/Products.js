import React, { useState } from 'react';
import {
	ProductsContainer,
	Title,
	Banner,
	BannerTitle,
	BannerImg,
	ImageBan,
	MainProducts,
	SideBarFilter,
	ProductsItems,
	SortedContainer,
	Display,
	SpanOne,
	SpanTwo,
	SortedPrice,
	ProductItem,
	Pagination,
} from './Styles/Product.styled';
import { BsFillGrid3X3GapFill, BsFillGrid1X2Fill } from 'react-icons/bs';

import Product from './Product';
import ReactPaginate from 'react-paginate';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import ProductSideBar from './ProductSideBar';

const Products = ({
	title,
	bannerTitle,
	img,
	items,
	sideBarList,
	children,
}) => {
	const [flexDirection, setFlexDirection] = useState('row');
	const [sortByPrice, setSortByPrice] = useState('lowToHigh');
	const [filterByPrice, setFilterByPrice] = useState('all');
	// curren page 0
	const [currenPage, setCurrentPage] = useState(0);
	// product per page 5
	const productsPerPage = 5;
	//visited pages
	const visitedPages = currenPage * productsPerPage;
	//pageCount
	const pageCount = Math.ceil(items && items.length / productsPerPage);
	//changePage
	const changePage = ({ selected }) => {
		setCurrentPage(selected);
	};
	//sorted Items
	const sortedItems =
		items && sortByPrice === 'lowToHigh'
			? items && items.sort((a, b) => a.price - b.price)
			: items && items.sort((a, b) => b.price - a.price);
	//filter by Price

	const filterItems = products => {
		if (sideBarList === 'mobiles') {
			if (filterByPrice === 'all') {
				return products.filter(elm => elm);
			} else if (filterByPrice === '10k20k') {
				return products.filter(elm => elm.price >= 10000 && elm.price <= 20000);
			} else if (filterByPrice === '20k25k') {
				return products.filter(elm => elm.price >= 20000 && elm.price <= 25000);
			} else if (filterByPrice === '25k30k') {
				return products.filter(elm => elm.price >= 25000 && elm.price <= 30000);
			} else {
				return products;
			}
		} else if (sideBarList === 'laptop') {
			if (filterByPrice === 'all') {
				return products.filter(elm => elm);
			} else if (filterByPrice === '20k30k') {
				return products.filter(elm => elm.price >= 20000 && elm.price <= 30000);
			} else if (filterByPrice === 'up30k') {
				return products.filter(elm => elm.price >= 30000);
			} else if (filterByPrice === 'mac') {
				return products.filter(elm => elm.os === 'macOS');
			} else if (filterByPrice === 'win') {
				return products.filter(elm => elm.os === 'Windows');
			}
		} else if (sideBarList === 'watches') {
			if (filterByPrice === 'all') {
				return products.filter(elm => elm);
			} else if (filterByPrice === '0to7k') {
				return products.filter(elm => elm.price >= 0 && elm.price <= 7000);
			} else if (filterByPrice === '7k10k') {
				return products.filter(elm => elm.price >= 7000 && elm.price <= 10000);
			} else if (filterByPrice === '16') {
				return products.filter(elm => elm.storage === 16);
			} else if (filterByPrice === '32') {
				return products.filter(elm => elm.storage === 32);
			}
		} else if (sideBarList === 'search') {
			if (filterByPrice === 'all') {
				return products.filter(elm => elm);
			}
		}
	};

	const DisplayProducts =
		items &&
		filterItems(sortedItems)
			.slice(visitedPages, visitedPages + productsPerPage)
			.map(item => {
				return (
					<Product key={item.id} item={item} flexDirection={flexDirection} />
				);
			});

	return (
		<ProductsContainer>
			<Title>{title}</Title>
			<Banner>
				<BannerTitle>
					<p>{bannerTitle}</p>
				</BannerTitle>
				<BannerImg>
					<ImageBan src={img} />
				</BannerImg>
			</Banner>
			{children}
			<MainProducts>
				<SideBarFilter>
					<ProductSideBar
						setFilterByPrice={setFilterByPrice}
						sideBarList={sideBarList}
					/>
				</SideBarFilter>
				<ProductsItems>
					<SortedContainer>
						<Display>
							<SpanOne
								direction={flexDirection}
								onClick={() => setFlexDirection('row')}
							>
								<BsFillGrid3X3GapFill />
							</SpanOne>
							<SpanTwo
								onClick={() => setFlexDirection('column')}
								direction={flexDirection}
							>
								<BsFillGrid1X2Fill />
							</SpanTwo>
						</Display>
						<SortedPrice>
							Sort By :
							<select
								value={sortByPrice}
								onChange={e => setSortByPrice(e.target.value)}
							>
								<option disabled>Position</option>
								<option value="lowToHigh">Price Low to High</option>
								<option value="highToLow">Price High to Low</option>
							</select>
						</SortedPrice>
					</SortedContainer>
					<ProductItem flexDirection={flexDirection}>
						{DisplayProducts}
					</ProductItem>
					{items && filterItems(sortedItems).length > 5 && (
						<Pagination>
							<ReactPaginate
								previousLabel={<MdChevronLeft />}
								nextLabel={<MdChevronRight />}
								pageCount={pageCount}
								onPageChange={changePage}
								containerClassName="paginationBtn"
								activeClassName="activeBtn"
							/>
						</Pagination>
					)}
				</ProductsItems>
			</MainProducts>
		</ProductsContainer>
	);
};

export default Products;
