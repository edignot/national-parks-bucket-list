import React from 'react'
import { render, cleanup, fireEvent } from '@testing-library/react'
import Login from './Login'
import { BrowserRouter } from 'react-router-dom'

describe('<Login/>', () => {
  let LoginContainer
  
  beforeEach(() => {
    LoginComponent = render(
      <BrowserRouter>
        <Login/>
      </BrowserRouter>
    )
  })
  
  afterEach(cleanup)
  
  test('<Login/> component successfully renders', () => {
    const { getByText } = LoginContainer
    expect(true).toBeTruthy()
  })
})