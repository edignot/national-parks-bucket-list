import React from 'react'
import { connect } from 'react-redux'
import NPCard from './NPCard'

const NPContainer = ({np, filter}) => {
    let npFiltered
    if (filter === 'visited') {
        npFiltered = np.filter(park => park.visited)
    } else if (filter === 'bucket list') {
        npFiltered = np.filter(park => park.bucket)
    } else if (filter === 'all parks') {
        npFiltered = np
    }
    const parks = npFiltered.map(park => {
        return (
            <NPCard
                {...park}
                key={park.id}
            />
        )
    })
    return (
        <section>
            <h2 className='np-container-title'>{filter}</h2>
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