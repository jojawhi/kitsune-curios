import './nav-link.styles.scss';

const NavLink = (props) => {
	const { route, label } = props;

	return (
		<a href={route} className='nav-link'>
			{label}
		</a>
	);
};

export default NavLink;
