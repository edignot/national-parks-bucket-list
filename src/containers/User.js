import React from 'react'
import { logout, deleteNP } from '../actions'
import { connect } from 'react-redux'
import '../scss/index.scss'

const User = ({logout, deleteNP}) => {
    return (
        <section>User
            <button
                className='logout-btn' 
                onClick={() => {logout(); deleteNP()}}
            >
                LOGOUT
            </button>
        </section>
    )
}

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch( logout()),
    deleteNP: () => dispatch( deleteNP())
  })

export default connect(null, mapDispatchToProps)(User)