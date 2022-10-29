import React, { Component } from 'react'
import Navbar from '../../component/Navbar/Navbar'
import Footer from '../../component/Footer/Footer'
import './contact.css'
export class Contact extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <div className='header'>
           <h3 className='company-name'>ABC Company</h3>
        </div>
        <div className='bg-header'>
          <div className='header-text'>
            <h4>QWERTYUIOPASDFGHJKL</h4>
            <h5>about</h5>
          </div>
        </div>
        <div className='details'>
          <form className=' container shadow'>
            <div className='row'>
              <div className='col'>
            <label htmlFor="firstname">First Name</label>
            <input type="text" id='firstname' className='form-control' />
            </div>
            <div className='col'>
              <label htmlFor="lastname" className='form-label'>Last Name</label>
              <input type="text" id='lastname' className='form-control' />
            </div>
            </div>
            <label htmlFor="phone" className='form-label'>Phone number</label>
            <input type="text" id="phone" className='form-control'/>
            <label htmlFor="email" className='form-label' >Email</label>
            <input type="text" id='email' className='form-control' /> <br />
            <label htmlFor="prblm" className='form-label'>Problem</label>
            <input type="text" name="prblm" id="prblm" className='form-control'/> <br />
            <label htmlFor="location" className='form-label'>Location</label>
            <input type="text" id='location' className='form-control' /> <br />
            <button classname="btn" type="submit">Submit</button>
          </form>
        </div>
      </div>
    )
  }
}

export default Contact