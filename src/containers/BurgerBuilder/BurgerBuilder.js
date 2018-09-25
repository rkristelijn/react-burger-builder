import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls'

const INGREDIENT_PRICES = {
    salad: 0.5,
    bacon: 0.7,
    cheese: 0.4,
    meat: 1.3
}

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 4
    }

    addIngredientsHandler = (type) => {
        //console.log(`BurgerBuilder.js`, `addIngredientsHandler(${type})`);
        const newIngredients = { ...this.state.ingredients };
        const newPrice = this.state.totalPrice + INGREDIENT_PRICES[type];
        newIngredients[type]++;
        this.setState({
            ingredients: newIngredients,
            totalPrice: newPrice
        });
    }
    removeIngredientsHandler = (type) => {
        //console.log(`BurgerBuilder.js`, `addIngredientsHandler(${type})`);
        if (this.state.ingredients[type] === 0) return; // make sure we have a number

        const newIngredients = { ...this.state.ingredients };
        const newPrice = this.state.totalPrice - INGREDIENT_PRICES[type];
        newIngredients[type]--;
        this.setState({
            ingredients: newIngredients,
            totalPrice: newPrice
        });
    }

    render = () => {
        //
        const disabledInfo = Object.keys(this.state.ingredients).map((key, val) => {
            //console.log('map', [...Array([key], (!this.state.ingredients) )] );
            return ([...Array([key], (this.state.ingredients[key] <= 0))]);
        }).reduce((acc, cur, i) => {
            //console.log('reduce', acc, cur, i);
            acc[cur[0]] = cur[1];
            return acc;
        }, {});
        console.log('disabledInfo', disabledInfo);

        console.log('BurgerBuilder.js', 'render');
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls
                    add={this.addIngredientsHandler}
                    del={this.removeIngredientsHandler}
                    disabledLessButton={disabledInfo}
                    price={this.state.totalPrice} />
            </Aux>
        );
    }
}

export default BurgerBuilder;