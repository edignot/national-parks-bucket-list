import React from 'react'
import NPContainer from './NPContainer'
import { render, cleanup, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { BrowserRouter } from 'react-router-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from '../reducers'

describe('<NPContainer/>', () => {

  let initialState
  let initialState2

  beforeEach(() => {
    initialState = { 
        sesion: {
            search: 'search',
            npID: ''
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
          images: ['image1a', 'image1b'],
          weatherInfo: 'weatherInfo1',
          bucket: false,
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
          images: ['image2a', 'image2b'],
          weatherInfo: 'weatherInfo2',
          bucket: false,
          visited: false,
          notes: []
        }
      ]
    }

    initialState2 = { 
        sesion: {
            search: 'name1',
            npID: ''
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
          images: ['image1a', 'image1b'],
          weatherInfo: 'weatherInfo1',
          bucket: true,
          visited: true,
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
          images: ['image2a', 'image2b'],
          weatherInfo: 'weatherInfo2',
          bucket: false,
          visited: false,
          notes: []
        }
      ]
    }
  })
  
  afterEach(cleanup)

  test('<NPContainer component sucessfully renders', () => {
    const store = createStore(rootReducer, initialState)
    const { getByText } = render(
        <Provider store={store}>
           <BrowserRouter>
               <NPContainer filter='all parks'/>
           </BrowserRouter>
        </Provider>
       )
    expect(getByText('all parks')).toBeInTheDocument()
  })

  test('displays all parks if all parks filter is passed', () => {
    const store = createStore(rootReducer, initialState2)
    const { getByText } = render(
        <Provider store={store}>
           <BrowserRouter>
               <NPContainer filter='all parks'/>
           </BrowserRouter>
        </Provider>
       )
    expect(getByText('name1 designation1')).toBeInTheDocument()
    expect(getByText('name2 designation2')).toBeInTheDocument()
    expect(getByText('states1')).toBeInTheDocument()
    expect(getByText('states2')).toBeInTheDocument()
  })
  
  test('displays add visited button if visited filter is passed and none of parks are marked as visited', () => {
    const store = createStore(rootReducer, initialState)
    const { getByText } = render(
        <Provider store={store}>
           <BrowserRouter>
               <NPContainer filter='visited'/>
           </BrowserRouter>
        </Provider>
       )
    expect(getByText('ADD VISITED')).toBeInTheDocument()
  })

  test('displays add visited button if bucket list filter is passed and none of parks are marked as bucket', () => {
    const store = createStore(rootReducer, initialState)
    const { getByText } = render(
        <Provider store={store}>
           <BrowserRouter>
               <NPContainer filter='bucket list'/>
           </BrowserRouter>
        </Provider>
       )
    expect(getByText('ADD PARKS')).toBeInTheDocument()
  })

  test('displays see all parks button if search results filter is passed and none of parks includes search keyword', () => {
    const store = createStore(rootReducer, initialState)
    const { getByText } = render(
        <Provider store={store}>
           <BrowserRouter>
               <NPContainer filter='search results'/>
           </BrowserRouter>
        </Provider>
       )
    expect(getByText('SEE ALL PARKS')).toBeInTheDocument()
  })

  test('don`t display add visited button if visited filter is passed and some parks are marked as visited', () => {
    const store = createStore(rootReducer, initialState2)
    const { queryByText, getByText } = render(
        <Provider store={store}>
           <BrowserRouter>
               <NPContainer filter='visited'/>
           </BrowserRouter>
        </Provider>
       )
    expect(getByText('states1')).toBeInTheDocument()
    expect(getByText('name1 designation1')).toBeInTheDocument()
    expect(queryByText('ADD VISITED')).not.toBeInTheDocument()
  })

  test('don`t display add parks button if bucket list filter is passed and some parks are marked as bucket', () => {
    const store = createStore(rootReducer, initialState2)
    const { queryByText, getByText } = render(
        <Provider store={store}>
           <BrowserRouter>
               <NPContainer filter='bucket list'/>
           </BrowserRouter>
        </Provider>
       )
    expect(getByText('states1')).toBeInTheDocument()
    expect(getByText('name1 designation1')).toBeInTheDocument()
    expect(queryByText('ADD PARKS')).not.toBeInTheDocument()
  })

  test('don`t display see all parks button if search results filter is passed and some parks includes search keyword', () => {
    const store = createStore(rootReducer, initialState2)
    const { queryByText, getByText } = render(
        <Provider store={store}>
           <BrowserRouter>
               <NPContainer filter='search results'/>
           </BrowserRouter>
        </Provider>
       )
    expect(queryByText('SEE ALL PARKS')).not.toBeInTheDocument()
    expect(getByText('states1')).toBeInTheDocument()
    expect(getByText('name1 designation1')).toBeInTheDocument()
  })
})
