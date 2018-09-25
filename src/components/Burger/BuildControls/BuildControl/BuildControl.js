import React from 'react';
import classes from './BuildControl.css';

const buildControl = (props) => (
    <div className={classes.buildControl}>
        <div className={classes.label}>{props.label}</div>
        <button className={classes.Less} onClick={props.del}>Less</button>
        <button className={classes.More} onClick={props.add}>More</button>
    </div>);

export default buildControl;