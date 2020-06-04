import React, { Component, Fragment } from 'react';

export default class FormUncontrolled extends Component{

  constructor(){
    super()
    this.myRef = React.createRef();

    this.state = {
      value: ""
    }
  }

  handleSubmission = event => {
    this.setState({
      value: this.myRef.current.value
    })
    event.preventDefault();
  }

  render(){
    return (
      <Fragment>
        <h3>Form Handling in uncontrolled component</h3>
        <div><h4>You typed: </h4> {this.state.value} </div>
        <form onSubmit={this.handleSubmission}>
          Value: <input type="text" name="typebox" ref={this.myRef} />
          <br />
          <input type="submit" value="Submit" />
          <div>Note: click on submit button</div>
        </form>
      </Fragment>
    );
  }

}