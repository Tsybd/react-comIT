import React, { useState } from 'react';
import Header from './Components/Layout/Header';
import Meals from './Components/Meals/Meals';
import Cart from './Components/Cart/Cart';
import CartProvider from './store/CartProvider';

function App() {
	const [cartIsVisible, setCartIsVisible] = useState(false);

	const showCartHandler = () => {
		setCartIsVisible(true);
	};

	const hideCartHandler = () => {
		setCartIsVisible(false);
	};
	return (
		<CartProvider>
			{cartIsVisible && <Cart onCloseCart={hideCartHandler} />}
			<Header onShowCart={showCartHandler} />
			<main>
				<Meals />
			</main>
		</CartProvider>
	);
}

export default App;
