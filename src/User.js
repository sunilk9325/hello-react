import React from 'react';
import callApi from './ApiCallHoc'

const User = (props) => {

    return (
    <div>
      <h3>Hello, logged in user: {props.name}</h3>
      <button className="btn btn-success" onClick={props.clickEvent} >Logout</button>
      <button className="btn btn-warning" onClick={props.callGet} >call get</button>
      <button className="btn btn-warning" onClick={props.callPost} >call post</button>
    </div>
    );
}

export default callApi(User);
