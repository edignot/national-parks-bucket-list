import React from 'react'
import { logout, deleteNP } from '../actions'
import { connect } from 'react-redux'
import { BsBucketFill } from 'react-icons/bs'
import { FaCheckCircle } from 'react-icons/fa'
import '../scss/index.scss'

const User = ({logout, deleteNP, user, np}) => {
    const visitedAmount = np.filter(park => park.visited)
    const bucketAmount = np.filter(park => park.bucket)
    return (
        <section className='user-container'>
            <section className='user-wrapper'>
                <h1 className='user-header'>
                National Parks <BsBucketFill/> List
                </h1>
                <div className='user-info'>
                    <p>Username: 
                        <span> {user.userName}</span>
                    </p>
                    <p>Email: 
                        <span> {user.email}</span>
                    </p>
                    <p>State: 
                        <span> {user.stateCode.toUpperCase()}</span>
                    </p>
                    <div className='user-feature'>
                        <div>
                            <BsBucketFill className='user-icon'/>
                        </div>
                    <p>{visitedAmount.length}</p>
                    </div>
                    <div className='user-feature'>
                        <div>
                            <FaCheckCircle className='user-icon'/>
                        </div>
                        <p>{bucketAmount.length}</p>
                    </div>
                    <button
                        className='logout-btn' 
                        onClick={() => {logout(); deleteNP()}}
                    >
                        LOGOUT
                    </button>
                </div>
            </section>
        </section>
    )
}

const mapState = state => ({
    user: state.user,
    np: state.np
})

const mapDispatch = dispatch => ({
    logout: () => dispatch( logout()),
    deleteNP: () => dispatch( deleteNP())
  })

export default connect(mapState, mapDispatch)(User)