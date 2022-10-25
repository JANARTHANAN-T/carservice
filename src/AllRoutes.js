import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './screen/Home/Home'
import Login from './screen/login/Login'
import SignUpForm from './component/SignupForm/SignUpForm'
import SignInForm from './component/SignInForm/SignInForm'
import Services from './screen/services/Services'
import Form from './screen/form/Form'
import Contact from "./screen/contact/Contact"
import CustomMap from "./screen/map/CustomMap"
const AllRoutes = () => {
    return ( 
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/sign-in' element={<Login/>}/>
          <Route path='/sign-up' element={<SignUpForm/>}/>
          <Route path='/services' element={<Services/>}/>
          <Route path='/form' element={<Form/>}/>
          <Route path='/custommap' element={<CustomMap/>}/>
          <Route path='/contact' element={<Contact/>}/>
      </Routes>
    )
  }
  
  export default AllRoutes