import React from 'react';
import classes from './Menu.css';

const menu = (props) => (
    <div className={[classes.Menu, classes.MobileOnly].join(' ')} onClick={props.clicked}>
        <div className={classes.HambergerMenu}></div>
        <div className={classes.HambergerMenu}></div>
        <div className={classes.HambergerMenu}></div>
    </div>
);

export default menu;