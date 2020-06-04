import React, {Component, Fragment} from 'react';
import Student from './Student';

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      action : (this.props.action) ? this.props.action : 'display',
      id: 100
    }
  }

  static getDerivedStateFromProps(props, state){
    console.log("method called after constructor and just before rendering, must return null or state change");
    // return {
    //   id: 101
    // }
    return null;
  }

  render(){
    return (
    <Fragment>
      <a href="http://www.geekyshows.com" onClick={this.handleClick}>click</a>
      <h1 className="heading">{this.state.action} - {this.props.children}</h1>
      <Student name="sunil" roll={34}>{ (34 > 30)? "Above thirty" : "In thirty"}</Student>
      <Student name="rahul" roll={24}>Above twenty</Student>
      <button onClick={this.changeState}>Change state</button>

      <button onClick={this.consoleOnClick}>Console on Click callback</button>

      <button onClick={this.consoleParam.bind(this, this.state.id)}>Console on Click binding</button>
    </Fragment>
    );
  }

  //this need to be arrow function, else need to bind this in constructor
  changeState = () => {
    // this.setState({
    //   action: 'View (state changed)'
    // })

    this.setState(function(state, props){
      return {
        action : (state.action === 'Display') ? 'Dis' : 'Vw'
      }
    })
  }

  consoleParam = (id, e) => {
    console.log("id is  - ", id)
    console.log("event is  - ", e)
  }

  consoleOnClick = (e) => {
    this.consoleParam(this.state.id, e)
  }



  handleClick(e){
    e.preventDefault();
    console.log("clicked", e)
  }

}


export default App;
