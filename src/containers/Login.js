import React, { Component } from 'react'
import { addToDo } from '../actions'
import { connect } from 'react-redux'

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      todo: '',
      userName: '',
      email: '',
      stateCode: ''
    }
  }

  handleChange = (e) => {
    this.isFormCompleted()
    this.setState({ [e.target.name]: e.target.value })
  }

  isFormCompleted = () => {
    const {
      userName,
      email,
      stateCode
    } = this.state
    return (userName !== '' && email !== '' && stateCode !== '') ? false : true
  }

  handleLogin = (e) => {
    e.preventDefault()
    this.props.addToDo(this.state.todo)
    this.setState({ todo: '' })
  }

  render() {
    return (
      <section>
        <form onSubmit={this.handleLogin}>
          <input
            name='todo'
            type='text'
            value={this.state.todo}
            placeholder="Add A Todo"
            onChange={this.handleChange} 
          />
          <input
            name='userName'
            type='text'
            value={this.state.userName}
            placeholder="username"
            onChange={this.handleChange} 
          />
          <input
            name='email'
            type='text'
            value={this.state.email}
            placeholder="email"
            onChange={this.handleChange} 
          />
          <input
            name='stateCode'
            type='text'
            value={this.state.stateCode}
            placeholder="state code"
            onChange={this.handleChange} 
          />
          <button
            disabled={this.isFormCompleted()}
          >
            LOGIN
          </button>
        </form>
      </section>
    )
  }
}


const mapDispatchToProps = (dispatch) => ({
  addToDo: text => dispatch( addToDo(text))
})

export default connect(null, mapDispatchToProps)(Login)
