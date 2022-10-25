import React, { Component } from 'react'
import Navbar from '../../component/Navbar/Navbar'
import Footer from '../../component/Footer/Footer'
export class Form extends Component {
  render() {
    return (
        <div>
          <Navbar/>
        <div className="container">
        <div className="m-5">
        <b><h2>CAR SERVICING</h2></b>
        <p className="fs-5">We only accept online bookings with at least 24 hours notice. 
            For more urgent bookings please call 01993 842345 to check availability</p>
        </div>
            <div className="card shadow m-5 p-5">
            <div className="card-body text-dark">
              <form action="">
                <label for="name" className="form-label fs-5">Name</label>
                <input type="text" className="form-control py-3" id="name"/>
                <label for="resadd" className=" fs-5">Residential Address</label>
                <textarea name="resadd" className="form-control" id="resadd" cols="30" rows="4"></textarea>
                <label for="email" className="form-label fs-5">Email Address</label>
                <input type="email" className="form-control py-3" id="email"/>
                <label for="phn" className="form-label fs-5">Phone number</label>
                <input type="text" className="form-control py-3" id="phn"/>
                <label for="make" className="form-label fs-5">Vehicle Make</label>
                <input type="text" className="form-control py-3" id="make"/>
                <label for="" className="form-label fs-5">Vehicle Model</label>
                <input type="text" className="form-control py-3" id="model"/>
                <label for="Regno" className="form-label fs-5">Registration Number</label>
                <input type="text" className="form-control py-3" id="regno"/>
                <div className="row">
                    <div class="col-md-6">
                        <label for="date" className="form-label fs-5">Date</label>
                        <input type="date" className="form-control py-3" id="date"/>
                    </div>
                    <div class="col-md-6">
                        <label for="time" className="form-label fs-5">Time</label>
                        <input type="time" className="form-control py-3" id="time"/>
                    </div>
                </div>
                <button className="btn btn-primary">Submit</button>
            </form>
            </div>
          </div>
      </div>
      <Footer/>
      </div>
    )
  }
}

export default Form