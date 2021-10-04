import React, { useEffect, useState } from 'react';
import classes from './AvailableMeals.module.css';
import Frame from '../../UI/Frame';
import MealItem from './MealItem';

const AvailableMeals = () => {
	const [meals, setMeals] = useState([]);

	useEffect(() => {
		const fetchMeals = async () => {
			const response = await fetch(
				'https://react-comit-projectdt-default-rtdb.firebaseio.com/meals.json'
			);
			const responseData = await response.json();

			const loadedMeals = [];

			for (const key in responseData) {
				loadedMeals.push({
					id: key,
					name: responseData[key].name,
					description: responseData[key].description,
					price: responseData[key].price,
				});
			}
			setMeals(loadedMeals);
		};
		fetchMeals();
	}, []);
	const menu = meals.map((meal) => (
		<MealItem
			key={meal.id}
			id={meal.id}
			name={meal.name}
			description={meal.description}
			price={meal.price}
		/>
	));
	return (
		<section className={classes.meals}>
			<Frame>
				<ul>{menu}</ul>
			</Frame>
		</section>
	);
};

export default AvailableMeals;
