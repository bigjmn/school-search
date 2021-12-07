import React from 'react'
import {GoogleMap, LoadScript} from '@react-google-maps/api'
const MapContainer = ({loc}) => {

  const mapStyles = {
    height: "200px",
    width: "200px"};

  const mapCenter = {
    lat: loc.lat, lng: loc.lon
  }

  return (
     <LoadScript
       googleMapsApiKey='AIzaSyBRTUK5RKsyleh6h6Qs0P37d5zsthQn_ho'>
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={13}
          center={mapCenter}
        />
     </LoadScript>
  )
}
export default MapContainer;
