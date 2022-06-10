import { createSelector } from 'reselect';

// const newCartTotal = newCartItems.reduce((total, cartItem) => {
// 	return total + cartItem.price * cartItem.quantity;
// }, 0);

// const newCartCount = newCartItems.reduce((total, cartItem) => {
// 	return total + cartItem.quantity;
// }, 0);

//cartItems
const selectCartReducer = (state) => {
	return state.cart;
};

//isCartOpen
export const selectIsCartOpen = createSelector(
	[selectCartReducer],
	(isCartOpenSlice) => isCartOpenSlice.isCartOpen
);

export const selectCartItems = createSelector([selectCartReducer], (cartItemsSlice) => {
	console.log(`selectCartItems: ${cartItemsSlice.cartItems}`);
	return cartItemsSlice.cartItems;
});

// export const selectCartTotal = selectCartItems.reduce((total, cartItem) => {
// 	return total + cartItem.price * cartItem.quantity;
// }, 0);

export const selectCartCount = createSelector([selectCartReducer], (cartItemsSlice) =>
	cartItemsSlice.cartItems.reduce((total, cartItem) => {
		return total + cartItem.quantity;
	}, 0)
);

export const selectCartTotal = createSelector([selectCartReducer], (cartItemsSlice) =>
	cartItemsSlice.cartItems.reduce((total, cartItem) => {
		return total + cartItem.price * cartItem.quantity;
	}, 0)
);
