import './nav.styles.scss';
//Fragment does not render, useful for satisfying single parent element return requirment
import { Fragment, useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { ReactComponent as FoxLogo } from '../../assets/logo.svg';
import { UserContext } from '../../contexts/user.context';
import { DropdownContext } from '../../contexts/dropdown.context';
import { signOutUser } from '../../utils/firebase/firebase.utils';
import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';

//import NavLink from '../../components/nav-link/nav-link.component';

const Nav = () => {
	const { currentUser } = useContext(UserContext);
	const { isOpen } = useContext(DropdownContext);

	//console.log(currentUser);

	return (
		<Fragment>
			<div className='nav'>
				<div className='logo-container'>
					<Link to='/'>
						<FoxLogo className='logo' />
					</Link>
				</div>
				<div className='nav-links-container'>
					<Link className='nav-link' to='/'>
						HOME
					</Link>
					<Link className='nav-link' to='shop'>
						SHOP
					</Link>
					{currentUser ? (
						<span className='nav-link' onClick={signOutUser}>
							SIGN OUT
						</span>
					) : (
						<Link className='nav-link' to='auth'>
							SIGN IN
						</Link>
					)}

					<CartIcon />
				</div>
				{/* &&: short-circuit operator, evals as true with two truthy values, will return the last value  */}
				{isOpen && <CartDropdown />}
			</div>
			<Outlet />
		</Fragment>
	);
};

export default Nav;
