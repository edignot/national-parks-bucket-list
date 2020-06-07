import React, { Component } from 'react'
import { addNote } from '../actions'
import { connect } from 'react-redux'
import { MdAddCircle } from 'react-icons/md'


class NoteForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            note: ''
        }
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    addNote = (e) => {
        e.preventDefault()
        this.props.addNote({
            parkId: this.props.user.npID,
            noteText: this.state.note
        })
        this.setState({ note: '' });
    }

    render () {
        console.log(this.props.user.npID)
        return (
            <form className='note-form'>
                <textarea
                    rows='4'
                    name='note'
                    type='textarea'
                    value={this.state.note}
                    placeholder='Add you note... '
                    onChange={this.handleChange} 
                />
                <button
                    className='add-note-btn'
                    disabled={!this.state.note}
                    onClick={this.addNote}
                >
                    ADD NOTE
                </button>
            </form>
        )
    }
}

export const mapState = state => ({
    user: state.user
})

const mapDispatch = (dispatch) => ({
    addNote: note => dispatch( addNote(note)),
})

export default connect(mapState, mapDispatch)(NoteForm)