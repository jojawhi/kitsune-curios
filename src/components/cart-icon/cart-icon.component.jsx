import { CartIconContainer, BagIcon, ItemCounter } from './cart-icon.styles';

import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

const CartIcon = () => {
	const { isOpen, setIsOpen, cartCount } = useContext(CartContext);

	const toggleIsOpen = () => {
		setIsOpen(!isOpen);
	};

	return (
		<CartIconContainer onClick={toggleIsOpen}>
			<BagIcon />
			<ItemCounter>{cartCount}</ItemCounter>
		</CartIconContainer>
	);
};

export default CartIcon;
