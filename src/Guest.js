import React from 'react';
import callApi from './ApiCallHoc'

const Guest = (props) => {
  return (
    <div>
      <h3>Hello, Guest here : {props.name}</h3>
      <button className="btn btn-warning" onClick={props.clickEvent} >Login</button>
      <button className="btn btn-success" onClick={props.callGet} >call get</button>
      <button className="btn btn-success" onClick={props.callPost} >call post</button>
    </div>
    );    
}

export default callApi(Guest);
