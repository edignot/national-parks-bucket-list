import React from 'react'
import { logout } from '../actions'
import { connect } from 'react-redux'
import '../scss/index.scss'

const User = () => {
    return (
        <section>User
            <button>
                LOGOUT
            </button>
        </section>
    )
}

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch( logout()),
  })

export default connect(null, mapDispatchToProps)(User)