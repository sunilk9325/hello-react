import React, {Component, Fragment} from 'react';

class AddPerson extends Component{

  state = {
    name: '',
    age: ''
  }

  inputHandling = event => {
    console.log("event.target.name - ", event.target.name)
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render(){
    return (
    <Fragment>
      <input type="text" name="name" value={this.state.name} onChange={this.inputHandling} />
      <input type="text" name="age" value={this.state.age} onChange={this.inputHandling} />
      <button onClick={() => this.props.addPerson(this.state.name, this.state.age)}>Add</button>
    </Fragment>
    );
  }
}

export default AddPerson;
