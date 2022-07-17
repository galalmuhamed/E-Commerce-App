import React from 'react';
import { CategoriesContainer } from './Styles/Home.styled';
import { categoriesItems } from '../Utils/Data';
import CategoryItem from './CategoryItem';

const Categories = () => {
	return (
		<CategoriesContainer>
			{categoriesItems.map(item => (
				<CategoryItem key={item.id} item={item} />
			))}
		</CategoriesContainer>
	);
};

export default Categories;
