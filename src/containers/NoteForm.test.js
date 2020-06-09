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
  let initialState
  
  beforeEach(() => {

    initialState = { 
          sesion: {
              search: '',
              npID: 'id1'
          },
          np: [{
            name: 'name1',
            designation: 'designation1',
            id: 'id1',
            states: 'states1',
            longitude: 'longitude1',
            latitude: 'latitude1',
            url: 'url1',
            description: 'description1',
            images: ['image1a', 'image1b'],
            weatherInfo: 'weatherInfo1',
            bucket: true,
            visited: false,
            notes: ['note1', 'note2']
          },
          {
            name: 'name2',
            designation: 'designation2',
            id: 'id2',
            states: 'states2',
            longitude: 'longitude2',
            latitude: 'latitude2',
            url: 'url2',
            description: 'description2',
            images: ['image2a', 'image2b'],
            weatherInfo: 'weatherInfo2',
            bucket: true,
            visited: false,
            notes: []
          }
        ]
      }   

    store = createStore(rootReducer, initialState)

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
    const { getByText, getByTestId } = NoteFormContainer
    expect(getByTestId('note-input')).toBeInTheDocument()
    expect(getByText('ADD NOTE')).toBeInTheDocument()
  })

  test('Add note input value is changed', () => {
    const { getByTestId } = NoteFormContainer
    getByTestId('note-input').value = 'note3'
    fireEvent.change(getByTestId('note-input'))
    expect(getByTestId('note-input').value).toBe('note3')
  })

  test('that add note button is disabled if textarea is empty', () => {
    const { getByText, getByTestId } = NoteFormContainer
    expect(getByText('ADD NOTE')).toHaveAttribute('disabled')
    fireEvent.change(getByTestId('note-input'), {target: {value: 'note'}})
    expect(getByText('ADD NOTE')).not.toHaveAttribute('disabled')
  })
})