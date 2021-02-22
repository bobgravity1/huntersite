import React from 'react'
import {GoogleMap, withScriptjs, withGoogleMap, Marker} from 'react-google-maps'


const Map = () => {
  return (
    <div style={{}}>
    <GoogleMap
      defaultZoom={15.5} defaultCenter={{lat:53.3441352, lng:-6.2669948}} >
    <Marker position={{lat:53.3441352, lng:-6.2669948}} />
    </GoogleMap>
    </div>
  )
}


const WrappedMap=withScriptjs(withGoogleMap(Map))



export default WrappedMap
