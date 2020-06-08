import React from 'react'
import { render, cleanup, fireEvent } from '@testing-library/react'
import NPCard from './NPCard'
import { BrowserRouter } from 'react-router-dom'

describe('<NPCard/>', () => {
  let NPCardContainer
  
  beforeEach(() => {
    NPCardContainer = render(
      <BrowserRouter>
        <NPCard/>
      </BrowserRouter>
    )
  })
  
  afterEach(cleanup)
  
  test('<NPCard/> component successfully renders', () => {
    const { getByText } = NPCardContainer
    expect(true).toBeTruthy()
  })
})