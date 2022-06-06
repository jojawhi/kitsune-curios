import { createContext, useReducer } from 'react';

import { createAction } from '../utils/reducer/reducer.utils';

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

export const CART_ACTION_TYPES = {
	SET_IS_CART_OPEN: 'SET_IS_CART_OPEN',
	SET_CART_ITEMS: 'SET_CART_ITEMS',
};

export const INITIAL_STATE = {
	isCartOpen: false,
	cartItems: [],
	cartCount: 0,
	cartTotal: 0,
};

export const cartReducer = (state, action) => {
	const { type, payload } = action;

	switch (type) {
		case CART_ACTION_TYPES.SET_IS_CART_OPEN:
			return {
				...state,
				isCartOpen: payload,
			};

		case CART_ACTION_TYPES.SET_CART_ITEMS:
			return {
				...state,
				...payload,
			};

		default:
			throw new Error(`Unhandled type of ${type} in cartReducer`);
	}
};

export const CartContext = createContext({
	isCartOpen: false,
	setIsOpen: () => {},
	cartItems: [],
	addItemToCart: () => {},
	removeItemFromCart: () => {},
	decreaseQuantityInCart: () => {},
	cartCount: 0,
	cartTotal: 0,
});

export const CartProvider = ({ children }) => {
	// const [isCartOpen, setIsCartOpen] = useState(false);
	// const [cartItems, setCartItems] = useState([]);
	// const [cartCount, setCartCount] = useState(0);
	// const [cartTotal, setCartTotal] = useState(0);

	// const addItemToCart = (productToAdd) => {
	// 	setCartItems(addCartItem(cartItems, productToAdd));
	// };

	// const removeItemFromCart = (cartItemToRemove) => {
	// 	setCartItems(removeCartItem(cartItems, cartItemToRemove));
	// };

	// const decreaseQuantityInCart = (productToDecrease) => {
	// 	setCartItems(decreaseItemQuantity(cartItems, productToDecrease));
	// };

	// useEffect(() => {
	// 	const newCartCount = cartItems.reduce((total, cartItem) => {
	// 		return total + cartItem.quantity;
	// 	}, 0);

	// 	setCartCount(newCartCount);
	// }, [cartItems]);

	// useEffect(() => {
	// 	const newCartTotal = cartItems.reduce((total, cartItem) => {
	// 		return total + cartItem.price * cartItem.quantity;
	// 	}, 0);

	// 	setCartTotal(newCartTotal);
	// }, [cartItems]);

	const [{ isCartOpen, cartItems, cartCount, cartTotal }, dispatch] = useReducer(
		cartReducer,
		INITIAL_STATE
	);

	const setIsCartOpen = (boolean) => {
		dispatch(createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, boolean));
	};

	const updateCartItemsReducer = (newCartItems) => {
		const newCartTotal = newCartItems.reduce((total, cartItem) => {
			return total + cartItem.price * cartItem.quantity;
		}, 0);

		const newCartCount = newCartItems.reduce((total, cartItem) => {
			return total + cartItem.quantity;
		}, 0);

		dispatch(
			createAction(CART_ACTION_TYPES.SET_CART_ITEMS, {
				cartItems: newCartItems,
				cartTotal: newCartTotal,
				cartCount: newCartCount,
			})
		);
	};

	const addItemToCart = (productToAdd) => {
		const newCartItems = addCartItem(cartItems, productToAdd);
		updateCartItemsReducer(newCartItems);
	};

	const removeItemFromCart = (cartItemToRemove) => {
		const newCartItems = removeCartItem(cartItems, cartItemToRemove);
		updateCartItemsReducer(newCartItems);
	};

	const decreaseQuantityInCart = (productToDecrease) => {
		const newCartItems = decreaseItemQuantity(cartItems, productToDecrease);
		updateCartItemsReducer(newCartItems);
	};

	const value = {
		isCartOpen,
		setIsCartOpen,
		addItemToCart,
		removeItemFromCart,
		decreaseQuantityInCart,
		cartItems,
		cartCount,
		cartTotal,
	};

	return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
