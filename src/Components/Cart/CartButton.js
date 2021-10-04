import React, { Fragment, useContext } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import classes from './CartButton.module.css';
import CartContext from '../../store/cart-context';

const CartButton = (props) => {
	const Cctx = useContext(CartContext);

	const CartItemsNumber = Cctx.items.reduce((curNumber, item) => {
		return curNumber + item.amount;
	}, 0);

	return (
		<Fragment>
			<button className={classes.button} onClick={props.onClick}>
				<span className={classes.icon}>
					<FaShoppingCart />
				</span>
				<span>Your Cart</span>
				<span className={classes.badge}>{CartItemsNumber}</span>
			</button>
		</Fragment>
	);
};

export default CartButton;
