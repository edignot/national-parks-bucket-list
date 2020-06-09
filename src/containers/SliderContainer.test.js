import React from 'react'
import { render, cleanup, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import SliderContainer from './SliderContainer'
import { BrowserRouter } from 'react-router-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from '../reducers'

describe('<SliderContainer/>', () => {

  let SliderContainerContainer
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
        images: [{url: 'image1a'}, {url: 'image1b'}],
        weatherInfo: 'weatherInfo1',
        bucket: true,
        visited: false,
        notes: []
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
        notes: []
      }
    ]
  }

    store = createStore(rootReducer, initialState)

    SliderContainerContainer = render(
        <Provider store={store}>
            <BrowserRouter>
                <SliderContainer/>
            </BrowserRouter>
        </Provider>
    )
  })
  
  afterEach(cleanup)
  
  test('<SliderContainer/> component successfully renders', () => {
    const { getByTestId } = SliderContainerContainer
    expect(getByTestId('back-btn')).toBeInTheDocument()
  })

  test('toggle visited icon', () => {
    const { getByTestId, queryByTestId } = SliderContainerContainer
    expect(getByTestId('visited-false')).toBeInTheDocument()
    expect(queryByTestId('visited-true')).not.toBeInTheDocument()
  })

  test('displays slider', () => {
    const { getByText } = SliderContainerContainer
    expect(getByText('1')).toBeInTheDocument()
  })
})
