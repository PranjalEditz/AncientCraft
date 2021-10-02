import React from 'react';
import './SignUp.css';
import reactDom from 'react-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    BrowserRouter,
    Redirect,
    useParams
  } from "react-router-dom";  

function SignUp() {
  return (
    <div className="sign-up">
       <h1 className="sign-text">Sign Up to Ancient Craft</h1>

         <input type="text" />
         <input type="text" />
         <input type="text" />
         <button>Sign Up</button>

    </div>
  );
}

export default SignUp;