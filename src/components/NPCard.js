import React from 'react'
import { BsBucket, BsBucketFill } from 'react-icons/bs'
import { FaCheckCircle, FaRegCircle } from 'react-icons/fa'

const NPCard = ({id, name, designation, images}) => {
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
                <img
                    className="np-card-img"
                    src={randomImg ?
                         randomImg.url : 
                         'https://images.unsplash.com/photo-1500534623283-312aade485b7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80'}
                    alt={name}
                />
            </div>
            <h2>{name} {designation}</h2>
        </section>
    )
}

export default NPCard