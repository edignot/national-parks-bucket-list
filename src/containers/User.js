import React from 'react'
import { logout, deleteNP } from '../actions'
import { connect } from 'react-redux'
import '../scss/index.scss'

const User = ({logout, deleteNP, user}) => {
    return (
        <section>
            <p>Username: {user.userName}</p>
            <p>Email: {user.email}</p>
            <p>State: {user.stateCode.toUpperCase()}</p>
            <button
                className='logout-btn' 
                onClick={() => {logout(); deleteNP()}}
            >
                LOGOUT
            </button>
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