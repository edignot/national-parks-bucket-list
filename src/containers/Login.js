import React, { Component } from 'react'
import { addAllNP } from '../actions'
import { connect } from 'react-redux'
import { getNPbyState } from '../apiCalls/apiCalls'

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      userName: '',
      email: '',
      stateCode: '',
      error: ''
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

  handleLogin = async (e) => {
    e.preventDefault()
    // FETCH DATA AND SAVE TO GLOBAL STORE
    const validState = this.state.stateCode === 'co'
    if (validState) {
      this.setState({ error: ''})
      const npData = await getNPbyState(this.state.stateCode)
      npData && this.props.addAllNP(npData.data)
    } else {
      this.setState({ error: 'Enter valid state code'})
    }
  }

  render() {
    return (
      <section>
        <form onSubmit={this.handleLogin}>
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
  addAllNP: np => dispatch( addAllNP(np))
})

export default connect(null, mapDispatchToProps)(Login)
