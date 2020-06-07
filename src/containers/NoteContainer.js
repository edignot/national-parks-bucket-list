import React from 'react'
import { connect } from 'react-redux'

const NoteContainer = ({np}) => {
    return (
        <h1>Notes</h1>
    )
}

export const mapState = state => ({
    np: state.np,
})

export default connect(mapState)(NoteContainer)