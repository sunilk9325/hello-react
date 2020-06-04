import React, {useState} from 'react';
import PropTypes from 'prop-types';
import './Student.css';
import useCustomCounter from './CustomHook';

const Student = (props) => {

    const [name, setName] = useState("XYZ")

    // const { count, incrementCount } = useCustomCounter()
    const [ count, incrementCount ] = useCustomCounter()

    function changeState(){
      setName("Raj")
    }
    
    return (
    <div>
      <p>this is to prevent default behaviour of anchor</p>
      <a href="http://www.geekyshows.com" onClick={handleClick}>click student</a>
      <h3>Name: {props.name}</h3>
      <h3>Roll No: {props.roll}</h3>

      <p>this is to test event handle</p>
      <p onClick={checkConsole}>{props.children}</p>

      <p>this is to test how use state in function component</p>
      <button onClick={changeState}>state - {name}</button>

      <p>this is to test custom hook</p>
      <div>counter on {count}</div>
      <button onClick={incrementCount}>counter</button>
      <p>----------------------</p>
    </div>
    );
}

function checkConsole(){
  console.log("welcome in console")
}

function handleClick(e){
  e.preventDefault();
  console.log("clicked", e)
}

Student.propTypes = {
  name: PropTypes.string,
  roll: PropTypes.number
}

export default Student;
