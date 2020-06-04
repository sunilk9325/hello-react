import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import AddPerson from './AddPerson';

class Persons extends Component{

  render(){
    return (
      <Fragment>
        <AddPerson addPerson={this.props.add} />
        <hr />      
        {
          this.props.prs.map((person) => (
            <div key={person.id} className="Person" onClick={() => this.props.delete(person.id)} >
                <h1>{person.name}</h1>
                <p>Age: {person.age}</p>
            </div>
          ))
        }
      </Fragment>
    );
  }
}

const mapState2Props = state => {
  return { prs: state.persons }
}
const mapDispatch2Props = dispatch => {
  return { 
    add: (name, age) => dispatch({type: 'ADD', name: name, age: age}),
    delete: (id) => dispatch({type: 'DELETE', id: id})
  }
}

export default connect(mapState2Props, mapDispatch2Props)(Persons);
