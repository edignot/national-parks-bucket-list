import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { displayNP, toggleBucketNP, toggleVisitedNP } from '../actions'
import { BsBucket, BsBucketFill } from 'react-icons/bs'
import { FaCheckCircle, FaRegCircle } from 'react-icons/fa'

const NPCard = ({
    id, 
    name, 
    designation, 
    images, 
    displayNP,
    toggleBucketNP,
    toggleVisitedNP, 
    visited, 
    bucket
}) => {
    const randomImg = images[Math.floor(Math.random() * images.length)]
    return (
        <section className='np-card-wrapper'>
            <div className="np-card-img-wrapper">
                {!visited
                ? <FaRegCircle
                    className="np-card-check"
                    onClick={() => toggleVisitedNP(id)}
                    />
                : <FaCheckCircle
                    className="np-card-check"
                    onClick={() => toggleVisitedNP(id)}
                    />
                }
                {!bucket
                ? <BsBucket
                    className="np-card-bucket"t
                    onClick={() => toggleBucketNP(id)}
                    />
                : <BsBucketFill
                    className="np-card-bucket"
                    onClick={() => toggleBucketNP(id)}
                    />
                }
            <Link 
                to='np'
                onClick={() => displayNP(id)}
            >
                <img
                    className="np-card-img"
                    src={randomImg ?
                         randomImg.url : 
                         'https://images.unsplash.com/photo-1500534623283-312aade485b7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80'}
                    alt={name}
                    width="500"
                />
            </Link>
            </div>
            <Link 
                to='np'
                onClick={() => displayNP(id)}
            >
            <h2>{name} {designation}</h2>
            </Link>
        </section>
    )
}

const mapDispatch = (dispatch) => ({
    displayNP: id => dispatch( displayNP(id)),
    toggleBucketNP: id => dispatch( toggleBucketNP(id)),
    toggleVisitedNP: id => dispatch( toggleVisitedNP(id))
})

export default connect(null, mapDispatch)(NPCard)