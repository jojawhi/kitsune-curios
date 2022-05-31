import {
	ProductCardImage,
	ProductCardButton,
	ProductCardFooter,
	ProductCardContainer,
} from './product-card.styles';

import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';

import { BUTTON_TYPE_CLASSES } from '../button/button.component';

const ProductCard = ({ product }) => {
	const { name, price, imageUrl } = product;
	const { addItemToCart } = useContext(CartContext);

	const addProductToCart = () => addItemToCart(product);

	return (
		<ProductCardContainer>
			<ProductCardImage src={imageUrl} alt={`${name}`} />
			<ProductCardFooter>
				<span className='name'>{name} </span>
				<span className='price'>${price}</span>
			</ProductCardFooter>
			<ProductCardButton
				buttonType={BUTTON_TYPE_CLASSES.inverted}
				onClick={addProductToCart}
			>
				Add to cart
			</ProductCardButton>
		</ProductCardContainer>
	);
};

export default ProductCard;
