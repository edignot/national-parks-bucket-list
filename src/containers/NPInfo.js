import React from 'react'
import { connect } from 'react-redux'
import SliderContainer from './SliderContainer'
import MiniMap from './MiniMap'


const NPInfo = ({np, user}) => {
    const npInfo = np.find(park => park.id === user.npID)
    const { 
        images, 
        id, 
        visited, 
        bucket, 
        name,
        designation,
        latitude,
        longitude
     } = npInfo
        
    return (
        <section className='np-info-container'>
            <SliderContainer 
                images={images}
                id={id}
                visited={visited}
                bucket={bucket}
            />
            {name}
            <div className='np-info-map'>
                <MiniMap 
                    lat={latitude}
                    lng={longitude}
                    id={id}
                    name={name}
                    designation={designation}
                    visited={visited}
                    bucket={bucket}
                />
            </div>
        </section>
    )
}

export const mapState = state => ({
    np: state.np,
    user: state.user
})

export default connect(mapState)(NPInfo)