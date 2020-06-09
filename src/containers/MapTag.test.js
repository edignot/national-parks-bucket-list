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
            <MapTag
              key='id'
              lat='lat'
              lng='lng'
              id='id'
              name='name'
              designation='designation'
              visited={true}
              bucket={false}
            />
        </BrowserRouter>
      </Provider>
    )
  })
  
  afterEach(cleanup)
  
  test('<MapTag/> component successfully renders', () => {
    const { getByTestId } = MapTagContainer
    expect(getByTestId('map-visited-true')).toBeInTheDocument()
    expect(getByTestId('map-bucket-false')).toBeInTheDocument()
  })
})