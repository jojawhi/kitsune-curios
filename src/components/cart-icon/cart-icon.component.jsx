import { CartIconContainer, BagIcon, ItemCounter } from './cart-icon.styles';

import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';

const CartIcon = () => {
	const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

	const toggleIsCartOpen = () => {
		setIsCartOpen(!isCartOpen);
	};

	return (
		<CartIconContainer onClick={toggleIsCartOpen}>
			<BagIcon />
			<ItemCounter>{cartCount}</ItemCounter>
		</CartIconContainer>
	);
};

export default CartIcon;
