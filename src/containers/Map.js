import React from 'react'
import GoogleMapReact from 'google-map-react'
import { connect } from 'react-redux'
import MapTag from './MapTag'
const apiKey = process.env.REACT_APP_GOOGLE_API_KEY


const Map = ({np}) => {
    const centr = { lat: Number(np[0].latitude), lng: Number(np[0].longitude)}
    const markers = np.map(park => {
      return (
        <MapTag
              lat={park.latitude}
              lng={park.longitude}
              id={park.id}
              name={park.name}
              designation={park.designation}
              visited={park.visited}
              bucket={park.bucket}
            />
      )
    })
      return (
        <div style={{ height: '100vh', width: '100vw' }}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: ''}}
            center={centr}
            zoom={7}
          >
            { markers }
          </GoogleMapReact>
        </div>
      )
  }

const mapState = state => ({
    np: state.np
})
  
export default connect(mapState)(Map)