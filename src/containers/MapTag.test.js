import React from 'react'
import { render, cleanup, fireEvent } from '@testing-library/react'
import MapTag from './MapTag'
import { BrowserRouter } from 'react-router-dom'
import '@testing-library/jest-dom/extend-expect'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from '../reducers'

describe('<MapTag/>', () => {

  let MapTagContainer
  let store
  
  beforeEach(() => {

    store = createStore(rootReducer)

    MapTagContainer = render(
      <Provider store={store}>
        <BrowserRouter>
            <MapTag/>
        </BrowserRouter>
      </Provider>
    )
  })
  
  afterEach(cleanup)
  
  test('<MapTag/> component successfully renders', () => {
    const { getByText } = MapTagContainer
    expect(true).toBeTruthy()
  })
})