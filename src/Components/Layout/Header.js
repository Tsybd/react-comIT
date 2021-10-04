import React, { Fragment } from 'react';
import classes from './Header.module.css';
import CartButton from '../Cart/CartButton';
import logoImage from '../../Assets/Logo.png';
import varImage from '../../Assets/varenyky.jpg';

const Header = (props) => {
	return (
		<Fragment>
			<div className={classes.headerLogo}>
				<img src={logoImage} alt="logo" className={classes.logo} />
			</div>
			<header className={classes['main-header']}>
				<div>
					<h1>heaping spoon</h1>
					<h2>Your varenyky framework</h2>
				</div>
				<CartButton onClick={props.onShowCart} />
			</header>
			<div className={classes['main-image']}>
				<img src={varImage} alt="A bowl of varenyky" />
			</div>
		</Fragment>
	);
};

export default Header;
