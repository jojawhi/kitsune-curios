import './checkout.styles.scss';
import { useContext } from 'react';
import { DropdownContext } from '../../contexts/dropdown.context';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';

const Checkout = () => {
	const { cartItems, setCartItems } = useContext(DropdownContext);

	return (
		<div className='checkout-container'>
			{cartItems.map((item) => {
				return <CheckoutItem key={item.id} cartItem={item} />;
			})}
		</div>
	);
};

export default Checkout;
