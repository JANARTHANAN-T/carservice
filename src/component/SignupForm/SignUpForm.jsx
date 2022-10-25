
import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './SignupForm.css'
export class SignUpForm extends Component {
    constructor(){
        super();
        this.state={
            email:"",
            password:"",
            company:"",
            year:"",
            lat:"",
            lng:""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    let target = event.target;
    let value=target.type==="checkbox"? target.checked:target.value;
    let name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    console.log("The form was submitted with the following data:");
    console.log(this.state);
  }
  render() {
    return (
      <div>
        <div className='signup'>
            <div className='left-side1'></div>
            <div className='right-side1'>
                <form className='form1'>
                    <div className='form-fields'>
                        <label htmlFor="name" className='formFieldLabel'>Name</label>
                        <input type="text" id='name' name='names' className='formFieldInput' placeholder='Enter your full name'
                        value={this.state.name} onChange={this.handlechange} />
                        <label className="formFieldLabel" htmlFor="password">Password</label>
                       <input type="password" id="password" className="formFieldInput"
                        placeholder="Enter your password" name="password" value={this.state.password} onChange={this.handleChange} />
                        <label htmlFor="email" className='formFieldLabel'>Email</label>
                        <input type="email" id="email" name="email" className='formFieldInput' placeholder='Enter email' value={this.state.email} onChange={this.handleChange}/>
                        <label htmlFor="company-name" className='formFieldLabel' >Company Name</label>
                        <input type="text" id='company-name' name='company' className='formFieldInput' value={this.state.company} onChange={this.handleChange} />
                        <label htmlFor="year" className='formFieldLabel'>Year Started</label>
                        <input type="text" id='year' name='year' className='formFieldInput' />
                        {/* <label htmlFor="location">Location</label> */}
                        <label htmlFor="lat" className='formFieldLabel'>Latitude</label>
                        <input type="text" id='lat' className='formFieldInput' name='lat' value={this.state.lat} onChange={this.handleChange} />
                        <label htmlFor="lng" className='formFieldLabel'>Longitude</label>
                        <input type="text" id='lng' className='formFieldInput' name='lng' value={this.state.lng} onChange={this.handleChange} />

                        <button className="formFieldButton">Sign Up</button>{" "}
                        <Link to="/sign-up" className="formFieldLink">
                           I'm already member
                        </Link>
                    </div>
                </form>
            </div>
        </div>
      </div>
    )
  }
}

export default SignUpForm