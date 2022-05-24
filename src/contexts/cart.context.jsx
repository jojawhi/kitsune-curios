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

const removeCartItem = (cartItems, cartItemToRemove) => {
	// const newCartItems = cartItems.filter((item) => {
	// 	return item.id !== cartItemToRemove.id;
	// });

	// return newCartItems;

	return cartItems.filter((item) => {
		return item.id !== cartItemToRemove.id;
	});
};

const decreaseItemQuantity = (cartItems, cartItemToDecrease) => {
	const exisitingCartItem = cartItems.find((item) => {
		return item.id === cartItemToDecrease.id;
	});

	if (exisitingCartItem.quantity === 1) {
		return cartItems.filter((item) => {
			return item.id !== cartItemToDecrease.id;
		});
	}

	return cartItems.map((item) => {
		if (item.id === cartItemToDecrease.id) {
			return { ...item, quantity: item.quantity - 1 };
		} else {
			return item;
		}
	});
};

export const CartContext = createContext({
	isOpen: false,
	setIsOpen: () => {},
	cartItems: [],
	addItemToCart: () => {},
	removeItemFromCart: () => {},
	decreaseQuantityInCart: () => {},
	cartCount: 0,
	cartTotal: 0,
});

export const CartProvider = ({ children }) => {
	const [isOpen, setIsOpen] = useState(false);
	const [cartItems, setCartItems] = useState([]);
	const [cartCount, setCartCount] = useState(0);
	const [cartTotal, setCartTotal] = useState(0);

	const addItemToCart = (productToAdd) => {
		setCartItems(addCartItem(cartItems, productToAdd));
	};

	const removeItemFromCart = (cartItemToRemove) => {
		setCartItems(removeCartItem(cartItems, cartItemToRemove));
	};

	const decreaseQuantityInCart = (productToDecrease) => {
		setCartItems(decreaseItemQuantity(cartItems, productToDecrease));
	};

	useEffect(() => {
		const newCartCount = cartItems.reduce((total, cartItem) => {
			return total + cartItem.quantity;
		}, 0);

		setCartCount(newCartCount);
	}, [cartItems]);

	useEffect(() => {
		const newCartTotal = cartItems.reduce((total, cartItem) => {
			return total + cartItem.price * cartItem.quantity;
		}, 0);

		setCartTotal(newCartTotal);
	}, [cartItems]);

	//This method worked
	//const totalItemsInCart = getTotalItemsInCart(cartItems);

	const value = {
		isOpen,
		setIsOpen,
		addItemToCart,
		removeItemFromCart,
		decreaseQuantityInCart,
		cartItems,
		cartCount,
		cartTotal,
	};

	return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
