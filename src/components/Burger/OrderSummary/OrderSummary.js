import React, {Component} from 'react';

import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button'

class OrderSummary extends Component {
    ingredientSummary = Object.keys(this.props.ingredients).map(
        igKey => {
            return (<li key={igKey}>
                <span
                    style={{ textTransform: 'capitalize' }}>
                    {igKey}:{this.props.ingredients[igKey]}
                </span>
            </li >)
        }
    );
    render = () =>
     (
        <Aux>
            <h1>Your Order</h1>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {this.ingredientSummary}
            </ul>
            <p><strong>Total Price: $ {this.props.price}</strong></p>
            <p>Continue to Checkout?</p>
            <Button btnType='Danger' clicked={this.props.cancel}>CANCEL</Button>
            <Button btnType='Success' clicked={this.props.continue}>CONTINUE</Button>
        </Aux>
    )
}

export default OrderSummary;