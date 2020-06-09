import React from 'react'
import { render, cleanup, fireEvent } from '@testing-library/react'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import '@testing-library/jest-dom/extend-expect'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from '../reducers'

describe('<App/>', () => {



  let AppContainer
  let store
  
  beforeEach(() => {

    store = createStore(rootReducer)

    AppContainer = render(
        <Provider store={store}>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </Provider>
    )
  })
  
  afterEach(cleanup)
  
  test('<App/> component successfully renders', () => {
    expect(true).toBeTruthy()
  })
})