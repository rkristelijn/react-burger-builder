import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
    // Object.keys() returns an array with the keys of the object
    console.log('Burger.js', props); // Object ingredients: { bacon: 1, cheese: 2, meat: 2, salad: 1 }
    let transformedIngredients = Object.keys(props.ingredients)
        .map(igKey => { // map executes a function for every element in an array
            //Array returns an array with an amount of items provided as argument
            return [...Array(props.ingredients[igKey])].map((_, i) => {
                return <BurgerIngredient key={igKey + i} type={igKey} />
            });
        })
        // console.log(transformedIngredients); // [Array(1), Array(1), Array(2), Array(2)] //an array with 4 elements with each of them a number of items
        .reduce((arr, el) => { // because we need only one array, we need to combine them
            return arr.concat(el);
        }, []);
        // console.log(transformedIngredients); // Array (6) [{…}, {…}, {…}, {…}, {…}, {…}] (an array with 6 elements)
    
    if(transformedIngredients.length === 0) {
        transformedIngredients = <p>Please start adding ingredients</p>;
    }

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
}

export default burger;