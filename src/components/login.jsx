import React from 'react';
import "./css/login.css";
import Logo from '../accets/logo512.png';


function login() {
  return (
    <div className="flex-center login-container">
      <div className="login-header flex-center">
        <img src={Logo} alt="school logo" className='login-logo'/>
        <h2>Enter your credentials to login</h2>
      </div>

      <form action="#" className="login-form">
        <div className="input-feild">
          <label htmlFor="username">Username</label>
          <input type="text" name="username" id="username" placeholder='Enter the Email' required/>
          <p className="alert-text"> invalid username</p>
        </div>
        <div className="input-feild">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" placeholder='Enter the password' required/>
          <p className="alert-text"> invalid password</p>
        </div>

        <div className="remember-forget">
          <div className="rememberme">
            <input type="checkbox" name="rememberme" id="remember-me"/>
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <a href="http://www.googel.com"> Forgot password</a>
        </div>

        <input type="submit" value="Login" className='btn' />
      </form>
    </div>
  );
}

export default login