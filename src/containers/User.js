import React from 'react'
import { logout, deleteNP } from '../actions'
import { connect } from 'react-redux'
import { BsBucketFill } from 'react-icons/bs'
import '../scss/index.scss'

const User = ({logout, deleteNP, user}) => {
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
    user: state.user
})

const mapDispatch = dispatch => ({
    logout: () => dispatch( logout()),
    deleteNP: () => dispatch( deleteNP())
  })

export default connect(mapState, mapDispatch)(User)