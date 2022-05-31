import styled from 'styled-components';

import { Link } from 'react-router-dom';

import { ReactComponent as FoxLogo } from '../../assets/logo.svg';

export const NavigationContainer = styled.div`
	height: 7.5%;
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 1rem;
	padding: 1rem 1rem 0 0;
`;

export const LogoContainer = styled(Link)`
	height: 100%;
	width: 70px;
	padding: 25px;
`;

export const NavLinksContainer = styled.div`
	width: 50%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: flex-end;
`;

export const NavLink = styled(Link)`
	padding: 10px 15px;
	cursor: pointer;
`;

export const Logo = styled(FoxLogo)`
	width: 6rem;
`;

// .nav {
// 	height: 7.5%;
// 	width: 100%;
// 	display: flex;
// 	justify-content: space-between;
// 	align-items: center;
// 	margin-bottom: 1rem;
// 	padding: 1rem 1rem 0 0;

// 	.logo-container {
// 		height: 100%;
// 		width: 70px;
// 		padding: 25px;

// 		.logo {
// 			width: 6rem;
// 		}
// 	}

// 	.nav-links-container {
// 		width: 50%;
// 		height: 100%;
// 		display: flex;
// 		align-items: center;
// 		justify-content: flex-end;

// 		.nav-link {
// 			padding: 10px 15px;
// 			cursor: pointer;
// 		}
// 	}
// }
