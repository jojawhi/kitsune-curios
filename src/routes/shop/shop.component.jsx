import './shop.styles.scss';

import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

// import { useContext } from 'react';

// import { CategoriesContext } from '../../contexts/categories.context';

import { setCategories } from '../../store/categories/category.action';

import { selectCategoriesMap } from '../../store/categories/category.selector';

import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils';

import { Routes, Route } from 'react-router-dom';

import CategoriesPreview from '../../routes/categories-preview/categories-preview.component';

import ShopCategory from '../shop-category/shop-category.component';

const Shop = () => {
	// const { categoriesMap } = useContext(CategoriesContext);

	const dispatch = useDispatch();

	const categoriesMap = useSelector(selectCategoriesMap);

	useEffect(() => {
		const getCategoriesMap = async () => {
			const categoriesArray = await getCategoriesAndDocuments();
			dispatch(setCategories(categoriesArray));
		};
		getCategoriesMap();
	}, [dispatch]);

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
