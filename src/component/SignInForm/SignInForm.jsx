import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios'
import './SignInForm.css'
function SignInForm() {
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')

  const navigate=useNavigate()

  const handleSubmit=async(event)=> {
    event.preventDefault();
    console.log("The form was submitted with the following data:");
    await axios({
      method: 'post',
      url: 'http://localhost:4000/user/login',
      data: {email,password}
    }).then(
      (res)=>{
        console.log(res);
        navigate("/")
    }
    ).catch((err)=>console.log(err))

  }
    return (
      <div className="signin">
        <div className='left-side'></div>
            <div className='right-side'>
        <form className="formFields" onSubmit={handleSubmit}>
          <div className="formField">
            <label className="form-label" htmlFor="email">
              E-Mail Address
            </label>
            <input
              type="email"
              id="email"
              className="form-control"
              placeholder="Enter your email"
              name="email"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
            />
          </div>

          <div className="formField">
            <label className="form-label" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="form-control"
              placeholder="Enter your password"
              name="password"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
            />
          </div>

          <div className="formField">
            <button className="formFieldButton">Sign In</button>{" "}
            <Link to="/sign-in" className="formFieldLink">
              Create an account
            </Link>
          </div>
        </form>
        </div>
      </div>
    );
}

export default SignInForm;
