import React from 'react'
import { connect } from 'react-redux'
import SliderContainer from './SliderContainer'


const NPInfo = ({np, user}) => {
    const npInfo = np.find(park => park.id === user.npID)
    return (
        <section className='np-info-container'>
            <SliderContainer 
                images={npInfo.images}
                id={npInfo.id}
                visited={npInfo.visited}
                bucket={npInfo.bucket}
            />
            {npInfo.name}
        </section>
    )
}

export const mapState = state => ({
    np: state.np,
    user: state.user
})

export default connect(mapState)(NPInfo)