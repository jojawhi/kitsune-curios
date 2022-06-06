import { NavigationContainer, LogoContainer, NavLinksContainer, NavLink, Logo } from './nav.styles';

//Fragment does not render, useful for satisfying single parent element return requirment
import { Fragment, useContext } from 'react';

import { Outlet } from 'react-router-dom';

import { UserContext } from '../../contexts/user.context';

import { CartContext } from '../../contexts/cart.context';

import { signOutUser } from '../../utils/firebase/firebase.utils';

import CartIcon from '../../components/cart-icon/cart-icon.component';

import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';

//import NavLink from '../../components/nav-link/nav-link.component';

const Nav = () => {
	const { currentUser } = useContext(UserContext);
	const { isCartOpen } = useContext(CartContext);

	//console.log(currentUser);

	return (
		<Fragment>
			<NavigationContainer>
				<LogoContainer to='/'>
					<Logo className='logo' />
				</LogoContainer>

				<NavLinksContainer>
					<NavLink to='/'>HOME</NavLink>
					<NavLink to='shop'>SHOP</NavLink>
					{currentUser ? (
						<NavLink as='span' onClick={signOutUser}>
							SIGN OUT
						</NavLink>
					) : (
						<NavLink to='auth'>SIGN IN</NavLink>
					)}

					<CartIcon />
				</NavLinksContainer>
				{/* &&: short-circuit operator, evals as true with two truthy values, will return the last value */}
				{isCartOpen && <CartDropdown />}
			</NavigationContainer>
			<Outlet />
		</Fragment>
	);
};

export default Nav;
