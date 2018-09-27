//import React, { Component } from 'react';
import React from 'react';

import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button'

// the component version, but we don't need it like this
/*
class OrderSummary extends Component {
    shouldComponentUpdate = (nextProps, nextState) => {
        console.log('OrderSummary', 'shouldComponentUpdate', nextProps, nextState);
        return true;
    }
    UNSAFE_componentWillUpdate = () => {
        console.log('OrderSummary', 'UNSAFE_componentWillUpdate');
    }
    render = () => {
        console.log('OrderSummary', 'render');
        const ingredientSummary = Object.keys(this.props.ingredients).map(
            igKey => {
                return (<li key={igKey}>
                    <span
                        style={{ textTransform: 'capitalize' }}>
                        {igKey}:{this.props.ingredients[igKey]}
                    </span>
                </li >)
            }
        );

        return (
            <Aux>
                <h1>Your Order</h1>
                <p>A delicious burger with the following ingredients:</p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p><strong>Total Price: $ {this.props.price}</strong></p>
                <p>Continue to Checkout?</p>
                <Button btnType='Danger' clicked={this.props.cancel}>CANCEL</Button>
                <Button btnType='Success' clicked={this.props.continue}>CONTINUE</Button>
            </Aux>
        );
    }
}

export default OrderSummary;
*/

// the literal object version
const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients).map(
        igKey => {
            return (<li key={igKey}>
                <span
                    style={{ textTransform: 'capitalize' }}>
                    {igKey}:{props.ingredients[igKey]}
                </span>
            </li >)
        }
    );

    return (
        <Aux>
            <h1>Your Order</h1>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Total Price: $ {props.price}</strong></p>
            <p>Continue to Checkout?</p>
            <Button btnType='Danger' clicked={props.cancel}>CANCEL</Button>
            <Button btnType='Success' clicked={props.continue}>CONTINUE</Button>
        </Aux>
    );
}

export default orderSummary;