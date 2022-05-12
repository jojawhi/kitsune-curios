import { createContext, useState, useEffect } from 'react';

// This method works to get number of cart items to display in icon
// const getTotalItemsInCart = (cartItems) => {
// 	const quantities = [];
// 	cartItems.map((item) => {
// 		quantities.push(item.quantity);
// 	});

// 	const totalItemsInCart = quantities.reduce((previousValue, currentValue) => {
// 		return previousValue + currentValue;
// 	}, 0);

// 	return totalItemsInCart;
// };

const addCartItem = (cartItems, productToAdd) => {
	const exisitingCartItem = cartItems.find((item) => {
		return item.id === productToAdd.id;
	});

	if (exisitingCartItem) {
		return cartItems.map((item) => {
			if (item.id === productToAdd.id) {
				return { ...item, quantity: item.quantity + 1 };
			} else {
				return item;
			}
		});
	}

	return [...cartItems, { ...productToAdd, quantity: 1 }];
};

export const DropdownContext = createContext({
	isOpen: false,
	setIsOpen: () => {},
	cartItems: [],
	addItemToCart: () => {},
	cartCount: 0,
});

export const DropdownProvider = ({ children }) => {
	const [isOpen, setIsOpen] = useState(false);
	const [cartItems, setCartItems] = useState([]);
	const [cartCount, setCartCount] = useState(0);

	const addItemToCart = (productToAdd) => {
		setCartItems(addCartItem(cartItems, productToAdd));
	};

	useEffect(() => {
		const newCartCount = cartItems.reduce((total, cartItem) => {
			return total + cartItem.quantity;
		}, 0);

		setCartCount(newCartCount);
	}, [cartItems]);

	//This method worked
	//const totalItemsInCart = getTotalItemsInCart(cartItems);

	const value = { isOpen, setIsOpen, addItemToCart, cartItems, cartCount };

	return <DropdownContext.Provider value={value}>{children}</DropdownContext.Provider>;
};
