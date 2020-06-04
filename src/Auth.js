import React, { useState } from 'react';
import User from './User';
import Guest from './Guest';

import style from './Auth.module.css'
import logo from './images/logo.png'

const Auth = (props) => {

    const [isLoggedIn, setLogging] = useState(props.isLoggedIn)

    const [name, setName] = useState('Rahul')

    const login = () => {
      setLogging(true)
      setName('Sunil')
    }
    
    const logout = () => {
      setLogging(false)
      setName('Raj')
    }

    const marksheet = [
      {id:1, subject: "Math", marks:60},
      {id:2, subject: "English", marks:70},
      {id:3, subject: "Science", marks:50}
    ]

    //this returns as an array of react element, because we using JSX in map function
    const showMarks = marksheet.map((val, key, arr)=>{
      return <li key={val.id}>Subject - {val.subject}, Marks - {val.marks - 2}</li>
    })

    console.log(showMarks)
    return (
      <div>
        Image in public folder
        <img src={`${process.env.PUBLIC_URL}/images/logo.png`} alt="logo" className={style.sitelogo}/>

        Image in src folder
        <img src={logo} className={style.sitelogo} alt="logo"/>
        <ul>
          {showMarks}
        </ul>
        <h1>M Auth Screen, using IIFE</h1>
        {
          (() => {
            if(isLoggedIn){
              return <User name={name} clickEvent={logout} />
            }else{
              return <Guest name={name} clickEvent={login} />
            }
          })()
        }
      </div>
    );

    // return (
    //   <div>
    //     <h1>M Auth Screen, using ternary operator</h1>
    //     {
    //       isLoggedIn ? <User clickEvent={logout} /> : <Guest clickEvent={login}/>
    //     }
    //   </div>
    //   );
    
}

export default Auth;
