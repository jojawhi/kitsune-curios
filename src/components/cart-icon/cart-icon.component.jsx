import './cart-icon.styles.scss';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { useContext } from 'react';
import { DropdownContext } from '../../contexts/dropdown.context';

const CartIcon = () => {
	const { isOpen, setIsOpen, cartCount } = useContext(DropdownContext);

	const toggleIsOpen = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div className='cart-icon-container' onClick={toggleIsOpen}>
			<ShoppingIcon className='shopping-icon' />
			<span className='item-counter'>{cartCount}</span>
		</div>
	);
};

export default CartIcon;
