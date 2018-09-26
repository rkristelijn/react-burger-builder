import React from 'react';
import BuildControl from './BuildControl/BuildControl';
import classes from './BuildControls.css';

const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' },
];

const buildControls = (props) => (
    <div className={classes.BuildControls}>
        <p>Current price: <strong>$ {props.price.toFixed(2)}</strong></p>
        {controls.map(ctrl => (
            //<BuildControl key={ctrl.label} label={ctrl.label} type={ctrl.type} add={props.add} del={props.del} /> //this can be optimized
            <BuildControl
                key={ctrl.label}
                label={ctrl.label}
                type={ctrl.type}
                add={() => props.add(ctrl.type)}
                del={() => props.del(ctrl.type)}
                disabled={props.disabledLessButton[ctrl.type]} />
        ))}
        <button
            className={classes.OrderButton}
            disabled={!props.purchasable}
            onClick={props.ordered}
        >ORDER NOW</button>
    </div>
)

export default buildControls;