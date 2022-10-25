import React, { Component } from 'react'
import './Services.css'
import Navbar from '../../component/Navbar/Navbar'
import Footer from '../../component/Footer/Footer'
import img2 from '../../asserts/images/carwash.jpg'
import img3 from '../../asserts/images/car ac.jpg'
import img4 from '../../asserts/images/car mot.jpg'
import { Link } from 'react-router-dom'
export class Services extends Component {
  render() {
    return (
      <div><Navbar/>
        <div className="container">
        <div className="row shadow">
            <div className="col-md-4">
                <div className="card mx-auto" style={{width: "18rem"}}>
                    <img src={img2} className="card-img-top" alt="..."/>
                    <div className="card-body">
                      <h5 className="card-title">Car Wash</h5>
                      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      <Link to="/form" className="btn btn-primary">Book Now</Link>
                    </div>
                  </div>
            </div>

            <div className="col-md-4">
                <div className="card mx-auto" style={{width: "18rem"}}>
                    <img src={img3} className="card-img-top" alt="..."/>
                    <div className="card-body">
                      <h5 className="card-title">Air Conditioning</h5>
                      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      <Link to="/form" className="btn btn-primary">Book Now</Link>
                    </div>
                  </div>
             </div>

            <div className="col-md-4">
                    <div className="card mx-auto" style={{width: "18rem"}}>
                        <img src={img4} className="card-img-top" alt="..."/>
                        <div className="card-body">
                          <h5 className="card-title">MOT</h5>
                          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                          <Link to="/form" className="btn btn-primary">Book Now</Link>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-4">
                        <div class="card mx-auto" style={{width: "18rem"}}>
                            <img src="https://websiteasset.s3.ap-south-1.amazonaws.com/New+Website/components/firebase/firebase_data.json/blogs/car-dent-paint/Car-Coating--Teflon-Vs-Ceramic--Explained.jpeg" className="card-img-top" alt="..."/>
                            <div class="card-body">
                              <h5 class="card-title">Denting and Painting</h5>
                              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                              <Link to="/form" className="btn btn-primary">Book Now</Link>
                            </div>
                          </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card mx-auto" style={{width: "18rem"}}>
                            <img src="https://thumbs.dreamstime.com/b/broken-down-car-flatbed-tow-truck-being-transported-to-garage-workshop-repair-broken-car-flatbed-tow-truck-being-148294057.jpg" className="card-img-top" alt="..."/>
                            <div className="card-body">
                              <h5 className="card-title">Tow Truck Service</h5>
                              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                              <Link to="/form" className="btn btn-primary">Book Now</Link>
                            </div>
                          </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card mx-auto" style={{width: "18rem"}}>
                            <img src="https://thumbs.dreamstime.com/b/auto-car-repair-service-center-mechanic-examining-car-suspension-auto-car-repair-service-center-mechanic-examining-car-suspension-166202482.jpg" className="card-img-top" alt="..."/>
                            <div className="card-body">
                              <h5 className="card-title">Scheduled Maintenance</h5>
                              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                              <Link to="/form" className="btn btn-primary">Book Now</Link>
                            </div>
                          </div>
                    </div>
        </div>

        <div className="content">
            <div className="img-title">
                <p>TYPES OF CAR SERVICE <br/> WHAT DO THEY INCLUDE?</p>
            </div>
        </div>
        <div className="main">
        <div className="writeup">
            <p>A car service is a maintenance check-up that's carried out at set time intervals (at least every year) or after the vehicle has travelled a certain number of miles. 
                 The car manufacturer specifies the service intervals by creating a service schedule that you should aim to follow.
                 <br/>
                  The service itself includes replacing aging parts and fluids as well as visual inspections to check key components are still working properly. It's different from an MOT test which is a legal inspection to ensure the vehicle is safe
                   to drive based on a strict checklist of criteria set out by the Driving & Vehicle Standards Agency (DVSA).
                   <br/>
                   Essentially, there are three different types of car service: Interim, Full and Major. When you visit different garages and dealerships, they might call their packages something different to try and put their own stamp on it. 
                   Don't be confused by this - there's always three levels in a tiered pricing structure.
                   <br/>
                   Each package includes everything that's in the level below with some added extras that your car will require at different stages of your ownership. 
                   The type of service you need depends on how many miles you complete in a year and the level of service you had previously.
                   <br/>
                   <h3>INTERIM CAR SERVICE</h3>
                   <br/>
                   <p>An interim car service is the entry-level package that is sometimes called a 'Basic' or 'Bronze' service. 
                    It's designed for high-mileage drivers - those that cover 20,000 miles or more a year - that may need more than one annual service.

                    Typically, an interim car service will include an oil change, oil filter change and an inspection of the car's main components, such as the lights, tyres and windscreen wipers.
                    
                    Other key inclusions in the interim service package are the lubrication of all moving parts, top-up of the engine, brake, and other fluids and a thorough inspection for any fluid leaks.</p>
                <Link to='/form' className="btn btn-primary">Book an Interim Service</Link>
                <br/> <br/>
                <h3>FULL CAR SERVICE</h3>
                <br/><p>A full service, also known as an 'Intermediate' or 'Silver' service, is usually recommended every 12 months or 12,000 miles, whichever comes first. It's ideal for drivers doing lower annual mileages who will only have their car serviced once a year.

                    It includes a wider range of checks and service replacement parts in addition to those carried out during an interim service. Below is a list of jobs that are normally carried out, but not strictly limited to:</p>
                <br/>
                <div className="list-box">
                  <ul className="list-display list-checkmark">
                    <li>
                        Air filter change
                    </li>
                    <li>Fuel filter (diesel) / Spark plugs change (petrol)</li>
                    <li>Extensive brake inspection</li>
                    <li>Wheel bearings and shock absorbers inspection</li>
                    <li>Electrical components(e.g.battery, alternator and starter motor)tested</li>
                    <li>Air Conditioning system inspection</li>
                    <li>Radiator and coolant hose checked</li>
                  </ul>  
                </div>
                  <Link to='/form' className="btn btn-primary">Book an Full Service</Link>
                  <br/>
                  <br/>
                  <h3>MAJOR CAR SERVICE</h3>
                  <p>A major service might also be referred to as a 'Master' or 'Gold' service, and is recommended every 24 months or 24,000 miles. If your last annual service was a full service, your car should have a major service next.

                    It's the most comprehensive service package available that includes everything from a full service. In addition, parts that are recommended for replacement every two years - including the bake fluid and cabin filter - are changed.
                    
                    Over time, brake fluid can become contaminated, making the brakes less effective, so it takes longer to stop the car which could have serious consequences on the road. 
                    Similarly, the cabin filter will get clogged up with dust and debris; changing it will improve the cabin's air quality.</p>
                    <Link to='/form' className="btn btn-primary">Book an Major Service</Link>
                <br/> <br/>
           </p> 
        </div>
        <div className="img"><img className="writeup-img1"src="https://www.carfixgarage.co.uk/uploads/AGNS-0253/services/interim-service-icon.webp" alt=""/>
        </div>
    </div> 
    </div>
    <Footer/>
    </div>
    )
  }
}

export default Services