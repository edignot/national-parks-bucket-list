import React from 'react'
import { render, cleanup, fireEvent } from '@testing-library/react'
import NoteContainer from './NoteContainer'
import { BrowserRouter } from 'react-router-dom'
import '@testing-library/jest-dom/extend-expect'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from '../reducers'

describe('<NoteContainer/>', () => {

  let NoteContainerContainer
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
          longitude: 1,
          latitude: 2,
          url: 'url1',
          description: 'description1',
          images: [{url: 'image1a'}, {url: 'image1b'}],
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
          images: [{url: 'image2a'}, {url: 'image2b'}],
          weatherInfo: 'weatherInfo2',
          bucket: true,
          visited: false,
          notes: ['note3']
        }
      ]
    }

    store = createStore(rootReducer, initialState)

    NoteContainerContainer = render(
      <Provider store ={store}>
        <BrowserRouter>
            <NoteContainer/>
        </BrowserRouter>
      </Provider>
    )
  })
  
  afterEach(cleanup)
  
  test('<NoteContainer/> component successfully renders', () => {
    const { getByText } = NoteContainerContainer
    expect(getByText('Notes:')).toBeInTheDocument()
  })

  test('displays notes', () => {
    const { getByText, queryByText } = NoteContainerContainer
    expect(getByText('note1')).toBeInTheDocument()
    expect(getByText('note2')).toBeInTheDocument()
    expect(queryByText('note3')).not.toBeInTheDocument()
  })
})