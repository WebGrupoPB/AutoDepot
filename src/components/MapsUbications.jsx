import React from 'react'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';



const containerStyle = {
  width: '100%',
  height: '100%'
};


const centerElSalvador = {
  lat: 13.70650,
  lng: -89.2244000,
};



const centerCiudadGuatemala = {
    lat: 14.596199,
    lng: -90.541980,
};



function MapsUbi({id}) {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyCscKjHtmXETUk2EaN9Oc0XMK7Ez2cll8Y"
  })

    let centerCoords;

    if (id === 0) {
        centerCoords = centerCiudadGuatemala;
    } else if (id === 1) {
        centerCoords = centerElSalvador;
    } 
  

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={centerCoords}
        zoom={17}
      >
        
        <Marker position={centerCoords} />
        
      </GoogleMap>
  ) : <></>
}

export default React.memo(MapsUbi)