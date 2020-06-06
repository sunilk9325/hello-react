import React, {Component} from 'react';
import classes from './Heading.module.css';

class Heading extends Component{

  render(){
    return (
        <div className={classes.block}>
            {this.props.small && <div className={classes.small}>{this.props.small}</div>}
            {this.props.medium && <div className={classes.medium}>{this.props.medium}</div>}
            {this.props.large && <div className={classes.large}>{this.props.large}</div>}
        </div>
    );
  }

}


export default Heading;
