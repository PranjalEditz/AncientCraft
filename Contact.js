import React from 'react';
import './Contact.css';
import reactDom from 'react-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    BrowserRouter,
    Redirect
  } from "react-router-dom";  

function Contact() {
  return (
    <>
    <section className="bg-color"></section>
    <div className="input-box">
      <h1 className="contact-heading">Contact Us</h1>
      <div className="inputs">
        <form onSubmit="SubmitData">
        <label className="name-text" for="name">Name</label>
        <input className="name" type="text" id="name" maxLength="25" minLength="4" required></input>
        <label className="email-text" for="email">Email</label>
        <input className="email" type="email" id="email" maxLength="30" minLength="3" required></input>
        <label for="message" className="msg-text">Message</label> 
        <textarea autoComplete="off" type="text" id="message" required maxLength="300" rows="50" cols="56"></textarea>
        <input className="checkbox" type="checkbox" required></input>
        <label for="terms" className="terms-text">I Agree the <a href="">terms</a> and Conditions.</label>
        <button className="button" id="terms">Submit</button>
        </form>
        
        </div>
    </div>
    </>
  );
}

export default Contact;