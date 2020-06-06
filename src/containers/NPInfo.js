import React from 'react'
import { connect } from 'react-redux'


const NPInfo = ({np}) => {
    return (
        <section>
            NP Info
        </section>
    )
}

export const mapState = state => ({
    np: state.np
})

export default connect(mapState)(NPInfo)