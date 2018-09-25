import React from 'react';
import classes from './BuildControl.css';

// one way to do this: have an inline function to pass the arguments
// const buildControl = (props) => {
//     let addHandler = () => {
//         console.log('BuildControls.js', 'addHandler', props.type);
//         props.add(props.type);
//     }
//     let dellHandler = () => {
//         console.log('BuildControls.js', 'addHandler', props.type);
//         props.del(props.type);
//     }
//     return (
//         <div className={classes.buildControl}>
//             <div className={classes.label}>{props.label}</div>
//             <button className={classes.Less} onClick={dellHandler}>Less</button>
//             <button className={classes.More} onClick={addHandler}>More</button>
//         </div>)
// };

const buildControl = (props) => (
    <div className={classes.buildControl}>
        <div className={classes.label}>{props.label}</div>
        <button className={classes.Less} onClick={()=>props.del(props.type)}>Less</button>
        <button className={classes.More} onClick={()=>props.add(props.type)}>More</button>
    </div>);

export default buildControl;