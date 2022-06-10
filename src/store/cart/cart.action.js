import { createAction } from '../../utils/reducer/reducer.utils';

import { CART_ACTION_TYPES } from './cart.types';

export const setIsCartOpen = (boolean) => {
	return createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, boolean);
};

export const setCartItems = (cartItems) => {
	return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, cartItems);
};

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

export const addItemToCart = (cartItems, productToAdd) => {
	const newCartItems = addCartItem(cartItems, productToAdd);
	return setCartItems(newCartItems);
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
	const newCartItems = removeCartItem(cartItems, cartItemToRemove);
	return setCartItems(newCartItems);
};

export const decreaseQuantityInCart = (cartItems, productToDecrease) => {
	const newCartItems = decreaseItemQuantity(cartItems, productToDecrease);
	return setCartItems(newCartItems);
};
