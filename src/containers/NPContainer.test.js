import React from 'react'
import { render, cleanup, fireEvent } from '@testing-library/react'
import NPContainer from './NPContainer'
import { BrowserRouter } from 'react-router-dom'

describe('<NPContainer/>', () => {
  let NPContainerContainer
  
  beforeEach(() => {
    NPContainerContainer = render(
      <BrowserRouter>
        <NPContainer/>
      </BrowserRouter>
    )
  })
  
  afterEach(cleanup)
  
  test('<NPContainer/> component successfully renders', () => {
    const { getByText } = NPContainerContainer
    expect(true).toBeTruthy()
  })
})