import React from 'react'
import { render, cleanup, fireEvent } from '@testing-library/react'
import NotFound from './NotFound'
import { BrowserRouter } from 'react-router-dom'

describe('<NotFound/>', () => {
  let NotFoundComponent
  
  beforeEach(() => {
    NotFoundComponent = render(
      <BrowserRouter>
        <NotFound/>
      </BrowserRouter>
    )
  })
  
  afterEach(cleanup)
  
  test('<NotFound/> component successfully renders', () => {
    const { getByText } = NotFoundComponent
    expect(true).toBeTruthy()
  })
})