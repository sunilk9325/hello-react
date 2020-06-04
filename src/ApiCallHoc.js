import React, {Component} from 'react';

const callApi = (InComponent, name, clickEvent) => {
  class OutComponent extends Component {

    callPost = () => {
      console.log("calling post API")
    }

    callGet = () => {
      console.log("calling get API")
    }

    render(){
      // return <InComponent callGet={this.callGet} callPost={this.callPost} name={this.props.name} clickEvent={this.props.clickEvent}/>
      //destructuring {...this.props}
      return <InComponent callGet={this.callGet} callPost={this.callPost} {...this.props}/>
    }
  }

  return OutComponent;
} 

export default callApi;
