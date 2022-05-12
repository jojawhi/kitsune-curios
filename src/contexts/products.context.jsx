import { createContext, useState } from 'react';
import PRODUCTS from '../shop-data.json';

// actual value you want to access
export const ProductsContext = createContext({
	products: [],
	setProducts: () => [],
});

//actual component

export const ProductsProvider = ({ children }) => {
	const [products, setProducts] = useState(PRODUCTS);
	const value = { products };

	//useEffect(() => {}, []);

	return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>;
};
