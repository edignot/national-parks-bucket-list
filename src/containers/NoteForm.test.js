import React from 'react'
import { render, cleanup, fireEvent } from '@testing-library/react'
import NoteForm from './NoteForm'
import { BrowserRouter } from 'react-router-dom'
import '@testing-library/jest-dom/extend-expect'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from '../reducers'

describe('<NoteForm/>', () => {

  let NoteFormContainer
  let store
  
  beforeEach(() => {

    store = createStore(rootReducer)

    NoteFormContainer = render(
        <Provider store={store}>
            <BrowserRouter>
                <NoteForm/>
            </BrowserRouter>
        </Provider>
    )
  })
  
  afterEach(cleanup)
  
  test('<NoteForm/> component successfully renders', () => {
    const { getByText } = NoteFormContainer
    expect(true).toBeTruthy()
  })
})