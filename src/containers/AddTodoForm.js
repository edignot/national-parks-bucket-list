import React, { Component } from 'react'
// 1. IMPORT ACTION CREATOR
import { addToDo } from '../actions'
import { connect } from 'react-redux'

class AddTodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = { todo: '' };
  }

  handleChange = (e) => {
    this.setState({ todo: e.target.value });
  }

  submitForm = (e) => {
    e.preventDefault()
    this.props.addToDo(this.state.todo)
    this.setState({ todo: '' });
  }

  render() {
    return (
      <section>
        <form onSubmit={this.submitForm}>
          <input
            value={this.state.todo}
            placeholder="Add A Todo"
            onChange={this.handleChange} />
          <button>Add Todo</button>
        </form>
      </section>
    )
  }
}


// 2. FUNCTION THAT SENDS OUR ACTION TO OUR REDUCER, LEADING THE STATE TO CHANGE(GLOBAL STORE) / GIVES ACCESS TO THE PROPS
const mapDispatchToProps = (dispatch) => ({
  addToDo: text => dispatch( addToDo(text))
})

export default connect(null, mapDispatchToProps)(AddTodoForm)
