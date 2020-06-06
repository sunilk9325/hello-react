import React, {Component} from 'react';
import classes from './Button.module.css';
// import cancel from '../../../images/cancel.png'


class Button extends Component{

  render(){
    return (
        <div className={classes[this.props.type]} style={{...this.props?.style}} onClick={this.props?.onClick}>
            {this.props.children}
        </div>
        
    );
  }

}

export default Button;
