import React from 'react'
import { render, cleanup, fireEvent } from '@testing-library/react'
import Login from './Login'
import { BrowserRouter } from 'react-router-dom'
import '@testing-library/jest-dom/extend-expect'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from '../reducers'

describe('<Login/>', () => {

  let LoginContainer
  let store
  
  beforeEach(() => {

    store = createStore(rootReducer)

    LoginContainer = render(
      <Provider store={store}>
          <BrowserRouter>
              <Login/>
          </BrowserRouter>
      </Provider>
    )
  })
  
  afterEach(cleanup)
  
  test('<Login/> component successfully renders', () => {
    const { getByText } = LoginContainer
    expect(true).toBeTruthy()
  })
})