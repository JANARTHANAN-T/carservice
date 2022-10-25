import React from 'react'
import Navbar from '../../component/Navbar/Navbar'
import Footer from '../../component/Footer/Footer'
import img1 from'../../asserts/images/car4.jpg'
import { Link } from 'react-router-dom'
function Home(){
  return (
    <div>
      <Navbar/>
    <div class="row d-flex align-items-center">
      <div class="col-md-6 p-5">
        <img class="img-fluid" src={img1} alt=""/>
      </div>
      <div class="col-md-6 p-5" >
        <div class="main-msg">
        <p class="fs-1">Car Service</p>
        <p class="fs-3">Don't have time to get Your Car Service? <br/> Contact us!</p>
        <div class="main-btn">
        <Link to="/services"> <button class="btn btn-secondary">Get Started</button></Link>
        </div>
        <div className='sub-msg'>
          <br />
          <p className='fs-4'>Are You A Workshop Owner?</p>
          <div className='sub-btn'>
            <Link to='/sign-in'>
              <button className='btn btn-secondary'>Login</button>
            </Link>
          </div>
        </div>
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  )
}

export default Home