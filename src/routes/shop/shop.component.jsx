import './shop.styles.scss';

import { useContext } from 'react';

import { CategoriesContext } from '../../contexts/categories.context';

import { Routes, Route } from 'react-router-dom';

import CategoriesPreview from '../../routes/categories-preview/categories-preview.component';

import ShopCategory from '../shop-category/shop-category.component';

const Shop = () => {
	const { categoriesMap } = useContext(CategoriesContext);

	return (
		<Routes>
			<Route index element={<CategoriesPreview />} />
			{Object.keys(categoriesMap).map((title) => {
				const products = categoriesMap[title];
				return (
					<Route
						key={title}
						path={`${title}`}
						element={
							<ShopCategory
								title={title}
								products={products}
							/>
						}
					/>
				);
			})}
		</Routes>
	);
};

export default Shop;
