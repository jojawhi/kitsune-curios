import './cart-dropdown.styles.scss';
import { useContext } from 'react';
import { DropdownContext } from '../../contexts/dropdown.context';
import Button from '../button/button.component';
import { Link } from 'react-router-dom';
import CartItem from '../cart-item/cart-item.component';

const CartDropdown = () => {
	const { cartItems, setIsOpen } = useContext(DropdownContext);

	const closeDropdown = () => {
		setIsOpen(false);
	};

	return (
		<div className='cart-dropdown-container'>
			<div className='cart-items'>
				{cartItems.map((item) => {
					return <CartItem key={item.id} cartItem={item} />;
				})}
			</div>
			<Link to='checkout'>
				<Button onClick={closeDropdown}>Checkout</Button>
			</Link>
		</div>
	);
};

export default CartDropdown;
