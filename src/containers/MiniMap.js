import React from 'react'
import GoogleMapReact from 'google-map-react'
import { connect } from 'react-redux'
import MapTag from './MapTag'
const apiKey = process.env.REACT_APP_GOOGLE_API_KEY


const MiniMap = ({np, lat, lng, id, name, designation, visited, bucket}) => {
    const centr = { lat: Number(lat), lng: Number(lng)}
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
        <section style={{ height: '500px', width: '500px' }}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: '' }}
            center={centr}
            zoom={15}
          >
            { markers }
            <MapTag
              lat={lat}
              lng={lng}
              id={id}
              name={name}
              designation={designation}
              visited={visited}
              bucket={bucket}
            />
          </GoogleMapReact>
        </section>
      )
  }

const mapState = state => ({
    np: state.np
})
  
export default connect(mapState)(MiniMap)