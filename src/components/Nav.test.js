import React from 'react'
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
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
    expect(getByText('EXPLORE')).toBeInTheDocument()
    expect(getByText('BUCKET LIST')).toBeInTheDocument()
    expect(getByText('VISITED')).toBeInTheDocument()
    expect(getByText('MAP')).toBeInTheDocument()
    expect(getByText('USERPAGE')).toBeInTheDocument()
  })
})