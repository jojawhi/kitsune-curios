import { CartDropdownContainer, EmptyMessage, CartItems } from './cart-dropdown.styles';

// import { useContext } from 'react';

// import { CartContext } from '../../contexts/cart.context';

import Button from '../button/button.component';

import { Link } from 'react-router-dom';

import CartItem from '../cart-item/cart-item.component';

import { useDispatch, useSelector } from 'react-redux';

import { selectCartItems } from '../../store/cart/cart.selector';

import { setIsCartOpen } from '../../store/cart/cart.action';

const CartDropdown = () => {
	const cartItems = useSelector(selectCartItems);
	// const { cartItems } = useContext(CartContext);

	const dispatch = useDispatch();

	const closeDropdown = () => {
		dispatch(setIsCartOpen(false));
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
