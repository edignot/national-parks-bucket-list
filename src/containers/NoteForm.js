import React, { Component } from 'react'
import { addAllNP } from '../actions'
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
        const npInfo = this.props.np.find(park => park.id === this.props.user.npID)
        npInfo.notes.push(this.state.note)
        this.props.addAllNP([npInfo])
        this.setState({ note: '' });
    }

    render () {
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
    user: state.user,
    np: state.np
})

const mapDispatch = (dispatch) => ({
    addAllNP: np => dispatch( addAllNP(np)),
})

export default connect(mapState, mapDispatch)(NoteForm)