import React, {Component} from 'react';
import classes from './Block.module.css';

class Block extends Component{

  render(){
      return (
          <div className={classes.block+' '+classes[this.props.status]}>
              <div className={classes.time}>
                {this.props.time}
              </div>
              {
              (this.props?.details?.repeat === true) &&  
              <div className={classes.icon}>
                &#8635; 
              </div>
              }
              {
              (this.props?.details?.starred === true) &&  
              <div className={classes.icon}>
                &#9734;
              </div>
              }
              <div className={classes.clearBoth} />
              <div className={classes.desc}>
                { 
                  this.props?.details?.name || this.props.status
                } 
              </div>
          </div>
      );
    
  }
}


export default Block;
