import React from 'react'
import { render, cleanup, fireEvent } from '@testing-library/react'
import NoteForm from './NoteForm'
import { BrowserRouter } from 'react-router-dom'

describe('<NoteForm/>', () => {
  let NoteFormContainer
  
  beforeEach(() => {
    NoteFormContainer = render(
      <BrowserRouter>
        <NoteForm/>
      </BrowserRouter>
    )
  })
  
  afterEach(cleanup)
  
  test('<NoteForm/> component successfully renders', () => {
    const { getByText } = NoteFormContainer
    expect(true).toBeTruthy()
  })
})