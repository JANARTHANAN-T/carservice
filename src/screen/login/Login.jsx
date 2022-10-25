import React, { Component } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { Routes,Route} from 'react-router-dom'
import SignInForm from '../../component/SignInForm/SignInForm'
import SignUpForm from '../../component/SignupForm/SignUpForm'
import './Login.css'
export class Login extends Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    let target = event.target;
    let value = target.type === "checkbox" ? target.checked : target.value;
    let name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    console.log("The form was submitted with the following data:");
    console.log(this.state);
  }

  render() {
    return (
      <div>
        <div className='login-page'>
            <div className='left-side'></div>
            <div className='rigt-side'> 
            <div className="pageSwitcher">
              <NavLink
                to="/sign-in"
                activeClassName="pageSwitcherItem-active"
                className="pageSwitcherItem">
                Sign In
              </NavLink>
              <NavLink
                exact
                to="/sign-up"
                activeClassName="pageSwitcherItem-active"
                className="pageSwitcherItem">
                Sign Up
              </NavLink>
            </div>
            <div className="formTitle">
              <NavLink
                to="/sign-in"
                activeClassName="formTitleLink-active"
                className="formTitleLink"
              >
                Sign In
              </NavLink>{" "}
              or{" "}
              <NavLink
                exact
                to="/sign-up"
                activeClassName="formTitleLink-active"
                className="formTitleLink"
              >
                Sign Up
              </NavLink>
            </div>
            <div className='form'>
            <form className="formFields" onSubmit={this.handleSubmit}>
          <div className="formField">
            <label className="formFieldLabel" htmlFor="email">
              E-Mail Address
            </label>
            <input
              type="email"
              id="email"
              className="formFieldInput"
              placeholder="Enter your email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </div>

          <div className="formField">
            <label className="formFieldLabel" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="formFieldInput"
              placeholder="Enter your password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </div>

          <div className="formField">
          
            <button className="formFieldButton">Sign In</button>{" "}
            
            <Link to="/sign-up" className="formFieldLink">
              Create an account
            </Link>
          </div>
        </form>
        </div>
           <Routes>
            <Route exact path="/sign-up" component={SignUpForm} />
            <Route path="/sign-in" component={SignInForm} />
            </Routes>
          </div>
            </div>
            
        </div>
    )
  }
}

export default Login