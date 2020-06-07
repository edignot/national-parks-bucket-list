import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import NPCard from './NPCard'
import { BsBucket } from 'react-icons/bs'
import { FaRegCircle } from 'react-icons/fa'
import { MdSentimentDissatisfied } from 'react-icons/md'


const NPContainer = ({np, filter, sesion}) => {
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
                <Link
                    to={'/explore'}
                    className='add-parks-btn'
                >
                    ADD VISITED
                </Link>
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
                 <Link
                    to={'/explore'}
                    className='add-parks-btn'
                >
                    ADD PARKS
                </Link>
            </div>
        )
    } else if (filter === 'all parks') {
        npFiltered = np
    } else if (filter === 'search results') {
        npFiltered = np.filter(park => {
            return (park.name.toUpperCase().includes(sesion.toUpperCase()) || 
            park.designation.toUpperCase().includes(sesion.toUpperCase()))
        })
        notFound = (
            <div className='not-found-wrapper'>
                <MdSentimentDissatisfied className='not-found-icon'/>
                <p className='not-found-msg'>You searched for 
                    <span> {sesion} </span>
                , but we couldn't find anything...</p>
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
    np: state.np,
    sesion: state.sesion
})

export default connect(mapState)(NPContainer)