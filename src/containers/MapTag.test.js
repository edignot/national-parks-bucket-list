import React from 'react'
import { render, cleanup, fireEvent } from '@testing-library/react'
import MapTag from './MapTag'
import { BrowserRouter } from 'react-router-dom'

describe('<MapTag/>', () => {
  let MapTagContainer
  
  beforeEach(() => {
    MapTagContainer = render(
      <BrowserRouter>
        <MapTag/>
      </BrowserRouter>
    )
  })
  
  afterEach(cleanup)
  
  test('<MapTag/> component successfully renders', () => {
    const { getByText } = MapTagContainer
    expect(true).toBeTruthy()
  })
})