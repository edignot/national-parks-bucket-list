import React from 'react'
import { connect } from 'react-redux'
import NPCard from '../components/NPCard'

const NPContainer = ({np}) => {
    const parks = np.map(park => {
        return (
            <NPCard
                {...park}
                key={park.id}
            />
        )
    })
    return (
        <section className='np-container'>
            { parks }
        </section>
    )
}

export const mapStateToProps = state => ({
    np: state.np
})

export default connect(mapStateToProps)(NPContainer)