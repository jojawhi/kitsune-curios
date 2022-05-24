import { createContext, useState, useEffect } from 'react';

import { getCategoriesAndDocuments } from '../utils/firebase/firebase.utils.js';

// import SHOP_DATA from '../shop-data.js';

// actual value you want to access
export const CategoriesContext = createContext({
	categoriesMap: {},
});

//actual component

export const CategoriesProvider = ({ children }) => {
	const [categoriesMap, setCategoriesMap] = useState({});

	// This is a one-off method to be done at implementation and then removed
	// It's a quick an easy way to add a bunch of initial data to Firestore
	// useEffect(() => {
	// 	addCollectionAndDocuments('categories', SHOP_DATA);
	// }, []);

	useEffect(() => {
		const getCategoriesMap = async () => {
			const categoryMap = await getCategoriesAndDocuments();
			console.log(categoryMap);
			setCategoriesMap(categoryMap);
		};
		getCategoriesMap();
	}, []);

	const value = { categoriesMap };

	return <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>;
};
