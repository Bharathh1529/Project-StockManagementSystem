import React from 'react'
import './SignUp.css'
import { Link } from 'react-router-dom';
import divBackGround from './background2.png'
export default function Login() {
  return (
    <div className='SignDiv'>
        <div className='DivPic2'>
            <img className='imgBG2' src={divBackGround}></img>
        </div>
   
        <div className='DivForm2'>
          <form className='SignUpForm'>
          <h2>• SignUp •</h2>
          <br></br>
          <input type='text' placeholder='Email' required></input>
          <br></br>
          <br></br>
          <input type='text' placeholder='User Name' required></input>
          <br></br>
          <br></br>
          <input type='password' placeholder='Password' required></input>
          <br></br>
          <br></br>
          <input type='password' placeholder='Confirm Password' required></input>
          <br></br>
          <br></br>
          <button className='subButton1'>submit</button>
          <br></br>
          <br></br>
          <bh>Already a user! <Link to='/'>Login</Link></bh>
          </form>      
        </div>
  </div>
 
  );
};
