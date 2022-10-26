import React, { useRef, useEffect, useState } from 'react';
import axios from 'axios'
import './custommap.css'
import Navbar from '../../component/Navbar/Navbar'
import Footer from '../../component/Footer/Footer'
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
 
mapboxgl.accessToken = 'pk.eyJ1Ijoia2lydXRoaWthZyIsImEiOiJjbDkydzlnMmQxMHhmM29xaDNscDI3NzYwIn0.7nG-L0LTVEcxQPUfQaze3g';
function CustomMap() {
  // setCompany(JSON.parse(localStorage.getItem("company")))

  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(77.7172);
  const [lat, setLat] = useState(11.3410);
  const [zoom, setZoom] = useState(13);
  const [company,setCompany]= useState(JSON.parse(localStorage.getItem("company")))

  useEffect(async() => {
    
    console.log(company);
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position.coords.latitude,position.coords.longitude);
    })
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [lng, lat],
      zoom: zoom
    });
  });

  const fetch =async()=>{
    await axios({
      method: 'get',
      url: 'http://localhost:4000/user/',
    }).then(
      (res)=>{
        console.log(res);
        setCompany(res)
    }
    ).catch((err)=>console.log(err))
  }


  return (
    <div>
      <Navbar/>
      <div ref={mapContainer} className="map-container" />
      <div className='container mt-5'>
      <table className='table table-striped table-hover'>
      <thead>
        <tr>
          <td>Company</td>
          <td>Email</td>
          <td>Started In</td>
          <td>Latitude</td>
          <td>Longitude</td>
        </tr>
      </thead>
      <tbody>
      {company.map((ele,index)=>{
        return(
          <tr key={index}>
            <td>{ele.company}</td>
            <td>{ele.email}</td>
            <td>{ele.year}</td>
            <td>{ele.lat}</td>
            <td>{ele.long}</td>
          </tr>
        )
      })}
        
      </tbody>
      </table>
      </div>
      <Footer/>
    </div>
  );
}
export default CustomMap;