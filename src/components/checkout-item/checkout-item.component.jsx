import './checkout-item.styles.scss';

const CheckoutItem = ({ cartItem }) => {
	const { name, price, imageUrl, quantity } = cartItem;

	const reduceQuantity = () => {
		console.log(quantity);
	};

	const increaseQuantity = () => {
		console.log(quantity);
	};

	return (
		<div className='checkout-item-container'>
			<img className='checkout-img' src={imageUrl} alt={name} />
			<span>{name}</span>
			<div className='quantity-container'>
				<span className='arrow' onClick={reduceQuantity}>
					&lt;
				</span>
				<span className='quantity'>{quantity}</span>
				<span className='arrow' onClick={increaseQuantity}>
					&gt;
				</span>
			</div>
			<span>${price}</span>
			<span className='close-button'>&#10005;</span>
		</div>
	);
};

export default CheckoutItem;
