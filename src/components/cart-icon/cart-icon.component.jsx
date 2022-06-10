import { CartIconContainer, BagIcon, ItemCounter } from './cart-icon.styles';

// import { useContext } from 'react';

// import { CartContext } from '../../contexts/cart.context';

import { setIsCartOpen } from '../../store/cart/cart.action';

import { useSelector, useDispatch } from 'react-redux';

import { selectIsCartOpen, selectCartCount } from '../../store/cart/cart.selector';

const CartIcon = () => {
	const cartCount = useSelector(selectCartCount);
	// const { cartCount } = useContext(CartContext);

	const dispatch = useDispatch();

	const isCartOpen = useSelector(selectIsCartOpen);

	// const cartCount = useSelector(selectCartCount);

	const toggleIsCartOpen = () => {
		dispatch(setIsCartOpen(!isCartOpen));
	};

	return (
		<CartIconContainer onClick={toggleIsCartOpen}>
			<BagIcon />
			<ItemCounter>{cartCount}</ItemCounter>
		</CartIconContainer>
	);
};

export default CartIcon;
