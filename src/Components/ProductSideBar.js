import React from 'react';
import {
	SideBarContainer,
	SideBarTitle,
	SideBarList,
} from './Styles/Product.styled';

const ProductSideBar = ({ setFilterByPrice, sideBarList }) => {
	return (
		<SideBarContainer>
			{sideBarList === 'mobiles' && (
				<>
					<SideBarTitle>Price</SideBarTitle>
					<SideBarList onClick={() => setFilterByPrice('10k20k')}>
						10,000 to 20,000 EGP
					</SideBarList>
					<SideBarList onClick={() => setFilterByPrice('20k25k')}>
						20,000 to 25,000 EGP
					</SideBarList>
					<SideBarList onClick={() => setFilterByPrice('25k30k')}>
						25,000 to 30,000 EGP
					</SideBarList>
					<SideBarList onClick={() => setFilterByPrice('all')}>
						Show All
					</SideBarList>
				</>
			)}
			{sideBarList === 'laptop' && (
				<>
					<SideBarTitle>Price</SideBarTitle>
					<SideBarList onClick={() => setFilterByPrice('20k30k')}>
						20,000 to 30,000 EGP
					</SideBarList>
					<SideBarList onClick={() => setFilterByPrice('up30k')}>
						Up to 30,000 EGP
					</SideBarList>
					<SideBarList onClick={() => setFilterByPrice('all')}>
						Show All
					</SideBarList>
					<SideBarTitle>Operating System</SideBarTitle>
					<SideBarList onClick={() => setFilterByPrice('mac')}>
						Mac OS
					</SideBarList>
					<SideBarList onClick={() => setFilterByPrice('win')}>
						Windows
					</SideBarList>
					<SideBarList onClick={() => setFilterByPrice('all')}>
						Show All
					</SideBarList>
				</>
			)}
			{sideBarList === 'watches' && (
				<>
					<SideBarTitle>Price</SideBarTitle>
					<SideBarList onClick={() => setFilterByPrice('0to7k')}>
						UP to 7,000 EGP
					</SideBarList>
					<SideBarList onClick={() => setFilterByPrice('7k10k')}>
						7,000 to 10,000 EGP
					</SideBarList>
					<SideBarList onClick={() => setFilterByPrice('all')}>
						Show All
					</SideBarList>
					<SideBarTitle>Storage</SideBarTitle>
					<SideBarList onClick={() => setFilterByPrice('16')}>16GB</SideBarList>
					<SideBarList onClick={() => setFilterByPrice('32')}>32GB</SideBarList>
					<SideBarList onClick={() => setFilterByPrice('all')}>
						Show All
					</SideBarList>
				</>
			)}
		</SideBarContainer>
	);
};

export default ProductSideBar;

/*

		<div onClick={() => setFilterByPrice('all')}>show all</div>
			<div onClick={() => setFilterByPrice('10k20k')}>10k 20k</div>
			<div onClick={() => setFilterByPrice('20k25k')}>20k to 25k</div>
			<div onClick={() => setFilterByPrice('25k30k')}>25k to 30k</div>*/
