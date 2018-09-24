import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
    // Object.keys() returns an array with the keys of the object
    const transformedIngredients = Object.keys(props.ingredients)
        .map(igKey => { // map executes a function for every element in an array
            //Array returns an array with an amount of items provided as argument
            return [...Array(props.ingredients[igKey])].map((_, i) => { 
                return <BurgerIngredient key={igKey + i} type={igKey} />
            });
        });
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
}

export default burger;