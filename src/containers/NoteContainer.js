import React from 'react'
import { connect } from 'react-redux'

const NoteContainer = ({np, npId}) => {
    const npInfo = np.find(park => park.id === npId)
    console.log(npInfo)
    return (
        <h1>{npId}</h1>
    )
}

export const mapState = state => ({
    np: state.np,
})

export default connect(mapState)(NoteContainer)