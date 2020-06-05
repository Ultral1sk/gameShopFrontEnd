import React, { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import { TOKEN } from '../../token';

const Map = () => {
  const mapContainer = useRef(null);
  useEffect(() => {
    mapboxgl.accessToken = TOKEN;
    new mapboxgl.Map({
      container: mapContainer.current, //ref to mapContainer in return part
      style: "mapbox://styles/mapbox/streets-v11", //map styles you can find different ones in website
      center: [6.775363079515614, 51.22975672888174], //Center of the map Coordinates for BERLIN
      zoom: 8 //Bigger number zooms in
    });
  }, []);
  return (
    <div className="text-white" >
      <h2>MAP</h2>
     
        <div ref={el => (mapContainer.current = el)} className="map text-white" />
    
    </div>
  );
};



export default Map;