import React from 'react'
import { render, cleanup, fireEvent } from '@testing-library/react'
import Map from './Map'
import { BrowserRouter } from 'react-router-dom'

describe('<Map/>', () => {
  let MapContainer
  
  beforeEach(() => {
    MapComponent = render(
      <BrowserRouter>
        <Map/>
      </BrowserRouter>
    )
  })
  
  afterEach(cleanup)
  
  test('<Map/> component successfully renders', () => {
    const { getByText } = MapContainer
    expect(true).toBeTruthy()
  })
})