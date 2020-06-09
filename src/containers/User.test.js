import React from 'react'
import User from './User'
import { render, cleanup, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { BrowserRouter } from 'react-router-dom'
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from '../reducers'

describe('<User/>', () => {

  let UserContainer
  let store
  let initialState

  beforeEach(() => {
   initialState = { user: {
        userName: 'edita',
        email: 'edita@gmail.com',
        stateCode: 'CO',
        bucketList: [],
        visited: []
        }
   }
   store = createStore(rootReducer, initialState)
    UserContainer = render(
     <Provider store={store}>
        <BrowserRouter>
            <User/>
        </BrowserRouter>
     </Provider>
    )
  })
  
  afterEach(cleanup)
  
  test('<User/> component successfully renders', () => {
    const { getByText } = UserContainer
    expect(getByText('edita')).toBeInTheDocument()
    expect(getByText('edita@gmail.com')).toBeInTheDocument()
    expect(getByText('CO')).toBeInTheDocument()
  })

  test('<User/> component successfully renders', () => {
    const { getByText } = UserContainer
    fireEvent.click(getByText('LOGOUT'))
    expect(location.pathname).toBe('/')
  })
})
