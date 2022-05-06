import './nav.styles.scss';
//Fragment does not render, useful for satisfying single parent element return requirment
import { Fragment } from 'react';
import { Outlet, Link } from 'react-router-dom';
//import Logo from '../../components/logo/logo.component';
import { ReactComponent as FoxLogo } from '../../assets/logo.svg';

//import NavLink from '../../components/nav-link/nav-link.component';

const Nav = () => {
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
					<Link className='nav-link' to='sign-in'>
						SIGN IN
					</Link>
					{/* <Link className='nav-link' to='about'>
						ABOUT
					</Link> */}
					{/* <NavLink label='Home' route='/' />
					<NavLink label='Shop' route='shop' />
					<NavLink label='About' route='about' /> */}
				</div>
			</div>
			<Outlet />
		</Fragment>
	);
};

export default Nav;
