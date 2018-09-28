import React, { Component } from 'react';
import Aux from '../../hoc/Aux/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'

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
        totalPrice: 4,
        purchasable: false
    }

    addIngredientsHandler = (type) => {
        //console.log(`BurgerBuilder.js`, `addIngredientsHandler(${type})`);
        const newIngredients = { ...this.state.ingredients };
        const newPrice = this.state.totalPrice + INGREDIENT_PRICES[type];
        newIngredients[type]++;
        const newPurchasable = Object.values(newIngredients).reduce((a, b) => a + b, 0) > 0;
        this.setState({
            ingredients: newIngredients,
            totalPrice: newPrice,
            purchasable: newPurchasable
        });
    }
    removeIngredientsHandler = (type) => {
        //console.log(`BurgerBuilder.js`, `addIngredientsHandler(${type})`);
        if (this.state.ingredients[type] === 0) return; // make sure we have a number

        const newIngredients = { ...this.state.ingredients };
        newIngredients[type]--;
        const newPrice = this.state.totalPrice - INGREDIENT_PRICES[type];
        const newPurchasable = Object.values(newIngredients).reduce((a, b) => a + b, 0) > 0;

        this.setState({
            ingredients: newIngredients,
            totalPrice: newPrice,
            purchasable: newPurchasable
        });
    }

    purchaseHandler = () => {
        this.setState({ purchasing: true });
    }

    purchaseCancelHandler = () => {
        this.setState({ purchasing: false });
    }

    purchaseContinueHandler = () => {
        alert('you continued');
    }

    render = () => {
        const disabledInfo = Object.keys(this.state.ingredients).map(key => {
            //console.log('map', [...Array([key], (!this.state.ingredients) )] );
            //return ([...Array([key], (this.state.ingredients[key] <= 0))]); //  Line 71:  The array literal notation [] is preferrable  no-array-constructor
            return ([...[[key], (this.state.ingredients[key] <= 0)]]);
        }).reduce((acc, cur, i) => {
            //console.log('reduce', acc, cur, i);
            acc[cur[0]] = cur[1];
            return acc;
        }, {});
        //console.log('disabledInfo', disabledInfo);

        //console.log('BurgerBuilder.js', 'render');
        return (
            <Aux>
                <Modal show={
                    this.state.purchasing}
                    modalClosed={this.purchaseCancelHandler}>
                    <OrderSummary
                        price={this.state.totalPrice.toFixed(2)}
                        ingredients={this.state.ingredients}
                        cancel={this.purchaseCancelHandler}
                        continue={this.purchaseContinueHandler}
                    />
                </Modal>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls
                    ordered={this.purchaseHandler}
                    add={this.addIngredientsHandler}
                    del={this.removeIngredientsHandler}
                    disabledLessButton={disabledInfo}
                    price={this.state.totalPrice}
                    purchasable={this.state.purchasable} />
            </Aux>
        );
    }
}

export default BurgerBuilder;