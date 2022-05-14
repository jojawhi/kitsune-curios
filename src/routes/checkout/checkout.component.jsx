import './checkout.styles.scss';
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';

const Checkout = () => {
	const { cartItems, cartTotal } = useContext(CartContext);

	return (
		<div className='checkout-container'>
			<div className='checkout-header'>
				<div className='header-block two-col'>
					<h3>Product</h3>
				</div>
				<div className='header-block'>
					<h3>Quantity</h3>
				</div>
				<div className='header-block'>
					<h3>Price</h3>
				</div>
				<div className='header-block'>
					<h3>Remove</h3>
				</div>
			</div>
			<div className='checkout-cart-container'>
				{cartItems.map((item) => {
					return <CheckoutItem key={item.id} cartItem={item} />;
				})}
			</div>
			<div className='total-container'>
				<h2 className='total'>TOTAL: ${cartTotal}</h2>
			</div>
		</div>
	);
};

export default Checkout;
