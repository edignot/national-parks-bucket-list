import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { displayNP, toggleBucketNP, toggleVisitedNP } from '../actions'
import { BsBucket, BsBucketFill } from 'react-icons/bs'
import { FaCheckCircle, FaRegCircle, FaStickyNote } from 'react-icons/fa'
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
    states,
    notes
}) => {
    const randomImg = images[0]
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
                {notes.length ? <FaStickyNote className="np-card-notes"/> : null}
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

NPCard.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    designation: PropTypes.string.isRequired,
    visited: PropTypes.bool.isRequired,
    bucket: PropTypes.bool.isRequired,
    notes: PropTypes.array.isRequired,
    images: PropTypes.array.isRequired,
    states: PropTypes.string.isRequired,
}