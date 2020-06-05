import React, { Component } from 'react'
import { addAllNP, login } from '../actions'
import { connect } from 'react-redux'
import { getNPbyState } from '../apiCalls/apiCalls'
import { stateCodes } from '../constants'
import { cleanNPData } from '../helper'
import { BsBucket, BsBucketFill } from 'react-icons/bs'
import '../scss/index.scss'

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      userName: '',
      email: '',
      stateCode: '',
      error: '',
      loading: false
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
      this.setState({ loading: true })
      this.resetError()
      this.props.login(this.getUserData())
      const npData = await getNPbyState(this.state.stateCode)
      npData && this.props.addAllNP(npData.data)
      this.setState({ loading: false })
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
        {!this.state.loading ?
        <section className='login-wrapper'>
          <h1 className='login-header'>
            National Parks <BsBucketFill/> List
          </h1>
          <form
            className='login-form' 
            onSubmit={this.handleLogin}
          >
            <p className='error-msg'>{this.state.error}</p>
            <div className='login-item'>
              <label htmlFor="userName">* Username:</label>
              <input
                name='userName'
                type='text'
                value={this.state.userName}
                placeholder="username"
                onChange={this.handleChange} 
              />
            </div>
            <div className='login-item'>
              <label htmlFor="email">* Email:</label>
              <input
                name='email'
                type='text'
                value={this.state.email}
                placeholder="email"
                onChange={this.handleChange} 
              />
            </div>
            <div className='login-item'>
              <label htmlFor="stateCode">* State code:</label>
              <input
                name='stateCode'
                type='text'
                value={this.state.stateCode}
                placeholder="e.g. CO"
                onChange={this.handleChange} 
              />
            </div>
            <p className='error-msg'>* required</p>
            <button
              className='login-btn'
              disabled={!this.isFormCompleted()}
            >
              LOGIN
            </button>
          </form>
        </section> : 
        <section className='loading-wrapper'>
          {/* ADD ANIMATION, FILL THE BUCKET */}
          {/* <BsBucketFill className='bucket-full'/> */}
          <p className='loading-msg'>WAIT... FILLING <BsBucket/></p>
        </section>
        }
      </section>
    )
  }
}

const mapDispatch = (dispatch) => ({
  login: user => dispatch( login(user)),
  addAllNP: np => dispatch( addAllNP(np))
})

export default connect(null, mapDispatch)(Login)
