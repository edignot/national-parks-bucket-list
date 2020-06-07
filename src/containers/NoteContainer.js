import React from 'react'
import { connect } from 'react-redux'
import NoteForm from './NoteForm'

const NoteContainer = ({np, user}) => {
    const npInfo = np.find(park => park.id === user.npID)
    const notes = npInfo.notes.map(note => <li>{note}</li>)
    return (
        <section className='note-container'>
            <h2>Notes:</h2>
            <ul className='notes-list'>
            {notes}
            </ul>
            <NoteForm/>
        </section>
    )
}

export const mapState = state => ({
    np: state.np,
    user: state.user
})

export default connect(mapState)(NoteContainer)