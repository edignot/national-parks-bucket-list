import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { displayNP, toggleBucketNP, toggleVisitedNP } from '../actions'
import { BsBucket, BsBucketFill } from 'react-icons/bs'
import { FaCheckCircle, FaRegCircle } from 'react-icons/fa'
import { backupImg } from '../constants'

const NPCard = ({
    id, 
    name, 
    designation, 
    images, 
    displayNP,
    toggleBucketNP,
    toggleVisitedNP, 
    visited, 
    bucket,
    states
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
                to={`/np/${name}`}
                onClick={() => displayNP(id)}
            >
                <img
                    className="np-card-img"
                    src={randomImg ?
                         randomImg.url : 
                         backupImg}
                    alt={name}
                    width="500"
                />
            </Link>
            </div>
            <Link
                className='np-card-btn' 
                to={`/np/${name}`}
                onClick={() => displayNP(id)}
            >
            <h2>{name} {designation}</h2>
            <p>{states}</p>
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