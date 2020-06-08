import React from 'react'
import { connect } from 'react-redux'
import NoteForm from './NoteForm'

const NoteContainer = ({np, sesion}) => {
    const npInfo = np.find(park => park.id === sesion.npID)
    const notes = npInfo.notes.map(note => <li key={note}>{note}</li>)
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
    sesion: state.sesion
})

export default connect(mapState)(NoteContainer)