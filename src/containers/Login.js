import React, { Component } from 'react'
import { addAllNP, login } from '../actions'
import { connect } from 'react-redux'
import { getNPbyState } from '../apiCalls/apiCalls'
import { stateCodes } from '../constants'
import '../scss/index.scss'

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
    this.resetError()
    this.setState({ [e.target.name]: e.target.value })
  }

  resetError = () => {
    this.state.error = ''
  }

  isFormCompleted = () => {
    const {
      userName,
      email,
      stateCode
    } = this.state
    return (userName !== '' && email !== '' && stateCode !== '') ? true : false
  }

  handleLogin = async (e) => {
    e.preventDefault()
    if (this.isStateCodeValid()) {
      this.resetError()
      this.props.login(this.getUserData())
      const npData = await getNPbyState(this.state.stateCode)
      npData && this.props.addAllNP(npData.data)
    } else {
      this.setState({ error: 'Enter valid state code'})
    }
  }

  isStateCodeValid = () => {
    return stateCodes.includes(this.state.stateCode.toLocaleUpperCase())
  }

  getUserData = () => {
    return {
      userName: this.state.userName,
      email: this.state.email,
      stateCode: this.state.stateCode
    }
  }

  render() {
    return (
      <section className='login-container'>
        <form
          className='login-form' 
          onSubmit={this.handleLogin}
        >
          <p>{this.state.error}</p>
          <div className='login-item'>
            <label htmlFor="userName">Username:</label>
            <input
              name='userName'
              type='text'
              value={this.state.userName}
              placeholder="username"
              onChange={this.handleChange} 
            />
          </div>
          <div className='login-item'>
            <label htmlFor="email">Email:</label>
            <input
              name='email'
              type='text'
              value={this.state.email}
              placeholder="email"
              onChange={this.handleChange} 
            />
          </div>
          <div className='login-item'>
            <label htmlFor="stateCode">State code:</label>
            <input
              name='stateCode'
              type='text'
              value={this.state.stateCode}
              placeholder="e.g. CO"
              onChange={this.handleChange} 
            />
          </div>
          <button
            disabled={!this.isFormCompleted()}
          >
            LOGIN
          </button>
        </form>
      </section>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  login: user => dispatch( login(user)),
  addAllNP: np => dispatch( addAllNP(np))
})

export default connect(null, mapDispatchToProps)(Login)
