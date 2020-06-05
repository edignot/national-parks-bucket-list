import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { displayNP } from '../actions'
import { BsBucket, BsBucketFill } from 'react-icons/bs'
import { FaCheckCircle, FaRegCircle } from 'react-icons/fa'

const NPCard = ({id, name, designation, images, displayNP}) => {
    const randomImg = images[Math.floor(Math.random() * images.length)]
    return (
        <section className='np-card-wrapper'>
            <div className="np-card-img-wrapper">
                {id
                ? <FaRegCircle
                    className="np-card-check"
                    onClick={() => alert('hi')}
                    />
                : <FaCheckCircle
                    className="np-card-check"
                    onClick={() => alert('hi')}
                    />
                }
                {id
                ? <BsBucket
                    className="np-card-bucket"
                    onClick={() => alert('hi')}
                    />
                : <BsBucketFill
                    className="np-card-bucket"
                    onClick={() => alert('hi')}
                    />
                }
            <Link 
                to={`np/${name}`}
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
                to={`np/${name}`}
                onClick={() => displayNP(id)}
            >
            <h2>{name} {designation}</h2>
            </Link>
        </section>
    )
}

const mapDispatch = (dispatch) => ({
    displayNP: id => dispatch( displayNP(id))
})

export default connect(null, mapDispatch)(NPCard)