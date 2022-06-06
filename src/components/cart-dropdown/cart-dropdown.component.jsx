import { CartDropdownContainer, EmptyMessage, CartItems } from './cart-dropdown.styles';

import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';

import Button from '../button/button.component';

import { Link } from 'react-router-dom';

import CartItem from '../cart-item/cart-item.component';

const CartDropdown = () => {
	const { cartItems, setIsCartOpen } = useContext(CartContext);

	const closeDropdown = () => {
		setIsCartOpen(false);
	};

	return (
		<CartDropdownContainer>
			<CartItems>
				{cartItems.length ? (
					cartItems.map((item) => {
						return <CartItem key={item.id} cartItem={item} />;
					})
				) : (
					<EmptyMessage>Your cart is empty.</EmptyMessage>
				)}
			</CartItems>
			<Link to='checkout'>
				<Button onClick={closeDropdown}>Checkout</Button>
			</Link>
		</CartDropdownContainer>
	);
};

export default CartDropdown;
