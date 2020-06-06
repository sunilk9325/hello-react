import React, {Component} from 'react';
import classes from './Modal.module.css';

class Modal extends Component{

  render(){
    return (
        <div className={classes.modal}>
          <div className={classes.modal_content}>
            <div className={classes.close_button} onClick={this.props.onClick}>&#10006;</div>
            {this.props.children}
          </div>
        </div>
    );
  }

}


export default Modal;
