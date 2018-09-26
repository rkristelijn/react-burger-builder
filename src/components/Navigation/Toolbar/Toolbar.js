import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './Toolbar.css';
import Menu from '../../UI/Menu/Menu';

const toolbar = (props) => (
    <header className={classes.Toolbar}>
        <Menu clicked={props.clicked}></Menu>
        <Logo height="80%" />
        <nav className={classes.DesktopOnly}>
            <NavigationItems />
        </nav>
    </header>
);

export default toolbar;