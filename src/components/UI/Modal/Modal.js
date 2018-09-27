import React, { Component } from 'react';
import classes from './Modal.css';
import Aux from '../../../hoc/Aux';
import Backdrop from '../Backdrop/Backdrop';

class Modal extends Component {
    shouldComponentUpdate = (nextProps, nextState) => {
        // if we just remove this function or return true, the component will render each time an ingredient is changed
        // console.log('Modal', 'shouldComponentUpdate', nextProps, nextState);
        return nextProps.show !== this.props.show;
    }
    UNSAFE_componentWillUpdate = () => {
        //console.log('Modal', 'UNSAFE_componentWillUpdate');
    }
    render = () => {
        //console.log('Modal', 'render');
        return (
            <Aux>
                <Backdrop show={this.props.show} clicked={this.props.modalClosed}>
                    <div
                        className={classes.Modal}
                        style={{
                            transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                            opacity: this.props.show ? '1' : '0'
                        }}>
                        {this.props.children}
                    </div>
                </Backdrop>
            </Aux>
        );
    }
}

export default Modal;