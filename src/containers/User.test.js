import React from 'react'
import User from './User'
import { render, cleanup, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { BrowserRouter } from 'react-router-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from '../reducers'

describe('<User/>', () => {

  let UserContainer
  let store
  let initialState

  beforeEach(() => {
   initialState = { 
        user: {
          userName: 'edita',
          email: 'edita@gmail.com',
          stateCode: 'CO',
          bucketList: [],
          visited: []
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
          images: 'images1',
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
          images: 'images2',
          weatherInfo: 'weatherInfo2',
          bucket: true,
          visited: false,
          notes: []
        }
      ]
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

  test('<User/> component displays how many parks are visited', () => {
    const { getByText } = UserContainer
    expect(getByText('0')).toBeInTheDocument()
  })

  test('<User/> component displays how many parks are in bucket list', () => {
    const { getByText } = UserContainer
    expect(getByText('2')).toBeInTheDocument()
  })

  test('<User/> component successfully renders', () => {
    const { getByText } = UserContainer
    expect(getByText('edita')).toBeInTheDocument()
    fireEvent.click(getByText('LOGOUT'))
    // expect(getByText('edita')).not.toBeInTheDocument()
  })
})
