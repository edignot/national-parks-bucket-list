import React from 'react'
import { render, cleanup, fireEvent } from '@testing-library/react'
import NoteContainer from './NoteContainer'
import { BrowserRouter } from 'react-router-dom'

describe('<NoteContainer/>', () => {
  let NoteContainerContainer
  
  beforeEach(() => {
    NoteContainerContainer = render(
      <BrowserRouter>
        <NoteContainer/>
      </BrowserRouter>
    )
  })
  
  afterEach(cleanup)
  
  test('<NoteContainer/> component successfully renders', () => {
    const { getByText } = NoteContainerContainer
    expect(true).toBeTruthy()
  })
})