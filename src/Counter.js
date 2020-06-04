import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {actionDeleteResult, actionIncrement, actionDecrement, saveResult} from './store/CounterAction';

class Counter extends Component{

  constructor(props){
    super(props);
    this.state = {
      counter: 0
    }
  }

  render(){
    return (
    <Fragment>
      <h3>{this.props.ctr}</h3>
      <button onClick={this.props.increment}>Increment</button>
      <button onClick={this.props.decrement}>Decrement</button>
      <button onClick={() => this.props.store_result(this.props.ctr)}>Store</button>
      <hr />
      <ul>
      {
        this.props.res.map((item) => (
        <li onClick={() => this.props.delete_result(item.id)} key={item.id}>{item.val}</li>
        ))
      }
      </ul>
    </Fragment>
    );
  }
}

const mapState2Props = state => {
  return { 
    ctr: state.ctr.counter,
    res: state.res.results
  }
}
const mapDispatch2Props = dispatch => {
  return { 
    increment: () => dispatch(actionIncrement()),
    decrement: () => dispatch(actionDecrement()),
    store_result: (val) => dispatch(saveResult(val)),
    delete_result: (id) => dispatch(actionDeleteResult(id))
  }
}

export default connect(mapState2Props, mapDispatch2Props)(Counter);
