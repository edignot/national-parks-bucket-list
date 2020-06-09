import React from 'react'
import { render, cleanup, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import NPInfo from './NPInfo'
import { BrowserRouter } from 'react-router-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from '../reducers'

describe('<NPInfo/>', () => {

  let NPInfoContainer
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
        longitude: '1',
        latitude: '1',
        url: 'url1',
        description: 'description1',
        images: [{url: 'image1a'}, {url: 'image1b'}],
        weatherInfo: 'weatherInfo1',
        bucket: true,
        visited: false,
        notes: ['note1']
      },
      {
        name: 'name2',
        designation: 'designation2',
        id: 'id2',
        states: 'states2',
        longitude: '2',
        latitude: '2',
        url: 'url2',
        description: 'description2',
        images: [{url: 'image2a'}, {url: 'image2b'}],
        weatherInfo: 'weatherInfo2',
        bucket: true,
        visited: false,
        notes: []
      }]
  }

    store = createStore(rootReducer, initialState)

    NPInfoContainer = render(
        <Provider store={store}>
            <BrowserRouter>
                <NPInfo/>
            </BrowserRouter>
        </Provider>
    )
  })
  
  afterEach(cleanup)
  
  test('<NPInfo/> component successfully renders', () => {
    const { getByText, getByTestId } = NPInfoContainer
    expect(getByText('states1')).toBeInTheDocument()
    expect(getByText('description1')).toBeInTheDocument()
    expect(getByText('weatherInfo1')).toBeInTheDocument()
    expect(getByText('website')).toBeInTheDocument()
    expect(getByText('note1')).toBeInTheDocument()
  })
})

