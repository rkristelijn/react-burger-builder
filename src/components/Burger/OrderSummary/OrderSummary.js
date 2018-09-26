import React from 'react';

import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button'

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
    )
}

export default orderSummary;