import React from 'react'
import GoogleMapReact from 'google-map-react'
import { connect } from 'react-redux'
const apiKey = process.env.REACT_APP_GOOGLE_API_KEY


const Map = ({np}) => {
    console.log(np)
    // const otherSpots = GlobalStore.spots.filter(spot => spot.id !== GlobalStore.spotDetails.id)
    // const markers = otherSpots.map(spot => {
    //   const marker = [{...spot.coordinates}]
    //   return (
    //     <MapTag
    //           lat={marker[0].lat}
    //           lng={marker[0].lng}
    //           id={spot.id}
    //           name={spot.name}
    //         />
    //   )
    // })
    // const targetMarker = [{...GlobalStore.spotDetails.coordinates}]
      return (
        <div style={{ height: '300px', width: '300px' }}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: '' }}
            center={{lat: 59.95, lng: 30.33}}
            zoom={16}
          >
            {/* { markers }
            <MapTargetTag
              lat={targetMarker[0].lat}
              lng={targetMarker[0].lng}
              mapUrl={GlobalStore.spotDetails.mapUrl}
            /> */}
          </GoogleMapReact>
        </div>
      )
  }

const mapState = state => ({
    np: state.np
})
  
export default connect(mapState)(Map)