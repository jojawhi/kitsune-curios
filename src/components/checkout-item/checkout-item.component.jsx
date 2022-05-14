import './checkout-item.styles.scss';
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

const CheckoutItem = ({ cartItem }) => {
	const { name, price, imageUrl, quantity } = cartItem;

	const { addItemToCart, removeItemFromCart, decreaseQuantityInCart } =
		useContext(CartContext);

	let itemPriceTotal = price * quantity;

	const removeItemHandler = () => removeItemFromCart(cartItem);

	const increaseQuantityHandler = () => addItemToCart(cartItem);

	const decreaseQuantityHandler = () => decreaseQuantityInCart(cartItem);

	return (
		<div className='checkout-item-container'>
			<div className='image-container'>
				<img className='checkout-img' src={imageUrl} alt={`${name}`} />
			</div>
			<span>{name}</span>
			<div className='quantity-container'>
				<span className='arrow' onClick={decreaseQuantityHandler}>
					&#10094;
				</span>
				<span className='quantity'>{quantity}</span>
				<span className='arrow' onClick={increaseQuantityHandler}>
					&#10095;
				</span>
			</div>
			<span>${itemPriceTotal}</span>
			<span className='remove-button' onClick={removeItemHandler}>
				&#10005;
			</span>
		</div>
	);
};

export default CheckoutItem;
