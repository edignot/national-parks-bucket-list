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
  
  beforeEach(() => {

    store = createStore(rootReducer)

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
    const { getByText } = SliderContainerContainer
    expect(true).toBeTruthy()
  })
})
