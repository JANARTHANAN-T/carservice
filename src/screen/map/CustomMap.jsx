import React, { useRef, useEffect, useState } from 'react';
import './custommap.css'
import Navbar from '../../component/Navbar/Navbar'
import Footer from '../../component/Footer/Footer'
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
 
mapboxgl.accessToken = 'pk.eyJ1Ijoia2lydXRoaWthZyIsImEiOiJjbDkydzlnMmQxMHhmM29xaDNscDI3NzYwIn0.7nG-L0LTVEcxQPUfQaze3g';
function CustomMap() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(77.7172);
  const [lat, setLat] = useState(11.3410);
  const [zoom, setZoom] = useState(9);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [lng, lat],
      zoom: zoom
    });
  });

  

  return (
    <div>
      <Navbar/>
      <div ref={mapContainer} className="map-container" />
      <Footer/>
    </div>
  );
}
export default CustomMap;