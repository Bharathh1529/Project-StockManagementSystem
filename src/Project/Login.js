import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom';
import divBackGround from './background2.png'
import Header from './Header';
export default function Login() {
  return (
    <div className='division1'>
        <div className='DivPic'>
            <img className='imgBG' src={divBackGround}></img>
        </div>
        <div className='DivForm'>
          <form className='loginForm'>
          <h2>• Login •</h2>
          <br></br>
          <input type='text' placeholder='Username or Email' required></input>
          <br></br>
          <br></br>
          <input type='password' placeholder='password' required></input>
          <br></br>
          <br></br>
          <button className='subButton' style={{textDecoration:'none'}}><Link to='./Home1'>submit</Link></button>
          <br></br>
          <br></br>
          <a>View Our <a href='https://www.cockroachlabs.com/cloud-terms-and-conditions/'>Terms of Service</a> and <a href='https://www.cockroachlabs.com/cloud-terms-and-conditions/'>Policy</a></a>
          <br></br>
          <br></br>
          <bh>New to OurWebsite <Link to='./SignUp'>Sign up</Link></bh>
          </form>      
        </div>
  </div>
 
  );
};