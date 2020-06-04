import React, { Component, Fragment } from 'react';

export default class Form extends Component{

  state = {
    name : "default",
    comment: "default here"
  }  

  inputHandling = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  onSubmission = event => {
    console.log(`${event.target[0].value} comment : ${event.target[1].value}`)
    event.preventDefault();
  }

  render(){
    return (
      <Fragment>
        <h3>Form Handling in controlled component</h3>
        <form onSubmit={this.onSubmission}>
          Name: <input type="text" name="name" value={this.state.name} onChange={this.inputHandling} />
          <br /><br />
          Comment: <textarea name="comment" value={this.state.comment} onChange={this.inputHandling} />
          <br />
          <input type="submit" value="Submit" />
          <div>Note: click on submit button</div>
        </form>
      </Fragment>
    );
  }

}