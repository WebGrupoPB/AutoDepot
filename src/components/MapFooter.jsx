import React from 'react'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '100%',
};

const center = {
    lat: 14.596199,
    lng: -90.541980,
};

const centerAtanasioTzul = {
  lat: 14.596199,
  lng: -90.541980,
};


const centerVillaHermosa = {
  lat: 14.5241238,
  lng: -90.5549289,
};

const centerAlamos = {
  lat: 14.5211069,
  lng: -90.5361806,
};



const mapOptions = {
    disableDefaultUI: true,
    styles: [
      {
        featureType: 'all',
        elementType: 'geometry',
        stylers: [{ color: '#2D2D2D' }],
      },
      {
        featureType: 'all',
        elementType: 'labels.text.stroke',
        stylers: [{ lightness: -80 }],
      },
      {
        featureType: 'administrative',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#7C7C7C' }],
      },
      {
        featureType: 'administrative.locality',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#7C7C7C' }],
      },
      {
        featureType: 'poi',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#7C7C7C' }],
      },
      {
        featureType: 'poi.park',
        elementType: 'geometry',
        stylers: [{ color: '#263c3f' }],
      },
      {
        featureType: 'poi.park',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#7C7C7C' }],
      },
      {
        featureType: 'road',
        elementType: 'geometry',
        stylers: [{ color: '#414141' }],
      },
      {
        featureType: 'road',
        elementType: 'geometry.stroke',
        stylers: [{ color: '#414141' }],
      },
      {
        featureType: 'road',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#7C7C7C' }],
      },
      {
        featureType: 'road.highway',
        elementType: 'geometry',
        stylers: [{ color: '#414141' }],
      },
      {
        featureType: 'road.highway',
        elementType: 'geometry.stroke',
        stylers: [{ color: '#414141' }],
      },
      {
        featureType: 'road.highway',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#414141' }],
      },
      {
        featureType: 'transit',
        elementType: 'geometry',
        stylers: [{ color: '#2f3948' }],
      },
      {
        featureType: 'transit.station',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#7C7C7C' }],
      },
      {
        featureType: 'water',
        elementType: 'geometry',
        stylers: [{ color: '#17263c' }],
      },
      {
        featureType: 'water',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#515c6d' }],
      },
      {
        featureType: 'water',
        elementType: 'labels.text.stroke',
        stylers: [{ lightness: -20 }],
      },
    ],
  };


function MapFooter({id}) {
  const { isLoaded } = useJsApiLoader({
      googleMapsApiKey: "AIzaSyCscKjHtmXETUk2EaN9Oc0XMK7Ez2cll8Y"
    })

  let centerCoords;

  if (id === 0) {
      centerCoords = centerAtanasioTzul;
  } else if (id === 1) {
      centerCoords = centerVillaHermosa;
  } else if (id === 2) {
    centerCoords = centerAlamos;
  }

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={centerCoords}
        zoom={15}
        options={mapOptions}
      >
        <Marker position={centerCoords} />

      </GoogleMap>
  ) : <></>
}

export default React.memo(MapFooter)