import React from 'react'
import { render, cleanup, fireEvent } from '@testing-library/react'
import Nav from './Nav'
import { BrowserRouter } from 'react-router-dom'

describe('<Nav/>', () => {
  let NavComponent
  
  beforeEach(() => {
    NavComponent = render(
      <BrowserRouter>
        <Nav/>
      </BrowserRouter>
    )
  })
  
  afterEach(cleanup)
  
  test('<Nav/> component successfully renders', () => {
    const { getByText } = NavComponent
    expect(true).toBeTruthy()
  })
})