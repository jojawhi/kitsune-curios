import {
	Arrow,
	Quantity,
	QuantityContainer,
	RemoveButton,
	CheckoutImage,
	CheckoutItemContainer,
} from './checkout-item.styles';
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
		<CheckoutItemContainer>
			<div className='image-container'>
				<CheckoutImage src={imageUrl} alt={`${name}`} />
			</div>
			<span>{name}</span>
			<QuantityContainer>
				<Arrow onClick={decreaseQuantityHandler}>&#10094;</Arrow>
				<Quantity>{quantity}</Quantity>
				<Arrow onClick={increaseQuantityHandler}>&#10095;</Arrow>
			</QuantityContainer>
			<span>${itemPriceTotal}</span>
			<RemoveButton onClick={removeItemHandler}>&#10005;</RemoveButton>
		</CheckoutItemContainer>
	);
};

export default CheckoutItem;
