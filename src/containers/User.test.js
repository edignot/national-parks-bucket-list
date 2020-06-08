import React from 'react'
import { render, cleanup, fireEvent } from '@testing-library/react'
import User from './User'
import { BrowserRouter } from 'react-router-dom'

describe('<User/>', () => {
  let UserContainer
  
  beforeEach(() => {
    UserContainer = render(
      <BrowserRouter>
        <User/>
      </BrowserRouter>
    )
  })
  
  afterEach(cleanup)
  
  test('<User/> component successfully renders', () => {
    const { getByText } = UserContainer
    expect(true).toBeTruthy()
  })
})