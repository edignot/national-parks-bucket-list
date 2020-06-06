import React from 'react'
import { connect } from 'react-redux'
import NPCard from './NPCard'
import Search from './Search'

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
        <section>
            <Search/>
            <section className='np-container'>
            { parks }
            </section>
        </section>
    )
}

export const mapState = state => ({
    np: state.np
})

export default connect(mapState)(NPContainer)