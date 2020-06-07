import React from 'react'
import { connect } from 'react-redux'
import NPCard from './NPCard'
import { BsBucket } from 'react-icons/bs'
import { FaRegCircle } from 'react-icons/fa'
import { MdSentimentDissatisfied } from 'react-icons/md'


const NPContainer = ({np, filter}) => {
    let npFiltered
    let notFound
    if (filter === 'visited') {
        npFiltered = np.filter(park => park.visited)
        notFound = (
            <div className='not-found-wrapper'>
                <FaRegCircle className='not-found-icon'/>
                <p 
                className='not-found-msg'>it looks like your
                    <span> visited </span>
                list is empty... </p>
            </div>
        )
    } else if (filter === 'bucket list') {
        npFiltered = np.filter(park => park.bucket)
        notFound = (
            <div className='not-found-wrapper'>
                <BsBucket className='not-found-icon'/>
                <p className='not-found-msg'>it looks like your 
                    <span> bucket </span>
                 is empty... </p>
            </div>
        )
    } else if (filter === 'all parks') {
        npFiltered = np
    } else if (filter === 'search results') {
        npFiltered = np.filter(park => park.bucket)
        notFound = (
            <div className='not-found-wrapper'>
                <MdSentimentDissatisfied className='not-found-icon'/>
                <p className='not-found-msg'>we couldn't find anything... </p>
            </div>
        )
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
            {!parks.length && notFound}
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