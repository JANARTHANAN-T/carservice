
import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios'
import './SignupForm.css'
export function SignUpForm() {
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const [company,setCompany]=useState('')
  const [year,setYear]=useState('')
  const [lat,setLat]=useState('')
  const [long,setLong]=useState('')

  const navigate = useNavigate()

  const handleSubmit=async(e)=> {
    e.preventDefault()
    console.log("The form was submitted with the following data:");
    await axios({
      method: 'post',
      url: 'http://localhost:4000/user/signup',
      data: {email,password,company,year,lat,long}
    }).then(
      (res)=>{
        console.log(res);
        localStorage.setItem("company", JSON.stringify(res.data));
        navigate("/")
    }
    ).catch((err)=>console.log(err))
  }
  
    return (
      <div>
        <div className='signup'>
            <div className='left-side1'></div>
            <div className='right-side1'>
                <form className='form1' onSubmit={handleSubmit}>
                    <div className='form-fields'>
                        <label htmlFor="email" className='formFieldLabel'>Email</label>
                        <input type="email" id="email" name="email" className='formFieldInput' placeholder='Enter email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
                        <label htmlFor="company-name" className='formFieldLabel' >Company Name</label>
                        <input type="text" id='company-name' name='company' className='formFieldInput' value={company} onChange={(e)=>setCompany(e.target.value)} />
                        <label htmlFor="year" className='formFieldLabel'>Year Started</label>
                        <input type="text" id='year' name='year' className='formFieldInput' value={year} onChange={(e)=>setYear(e.target.value)} />
                        {/* <label htmlFor="location">Location</label> */}
                        <label htmlFor="lat" className='formFieldLabel'>Latitude</label>
                        <input type="text" id='lat' className='formFieldInput' name='lat' value={lat} onChange={(e)=>setLat(e.target.value)} />
                        <label htmlFor="lng" className='formFieldLabel'>Longitude</label>
                        <input type="text" id='lng' className='formFieldInput' name='lng' value={long} onChange={(e)=>setLong(e.target.value)} />
                        <label className="formFieldLabel" htmlFor="password">Password</label>
                       <input type="password" id="password" className="formFieldInput"
                        placeholder="Enter your password" name="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
                        <button className="formFieldButton">Sign Up</button>{" "}
                        <Link to="/sign-in" className="formFieldLink">
                           I'm already member
                        </Link>
                    </div>
                </form>
            </div>
        </div>
      </div>
    )
}

export default SignUpForm