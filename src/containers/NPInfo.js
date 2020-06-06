import React from 'react'
import { connect } from 'react-redux'
import SliderContainer from './SliderContainer'


const NPInfo = ({np, user}) => {
    const npInfo = np.find(park => park.id === user.npID)
    const { 
        images, 
        id, 
        visited, 
        bucket, 
        name } = npInfo
        
    return (
        <section className='np-info-container'>
            <SliderContainer 
                images={images}
                id={id}
                visited={visited}
                bucket={bucket}
            />
            {name}
        </section>
    )
}

export const mapState = state => ({
    np: state.np,
    user: state.user
})

export default connect(mapState)(NPInfo)