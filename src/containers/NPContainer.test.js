// import React from 'react'
// import NPContainer from './NPContainer'
// import { render, cleanup, fireEvent } from '@testing-library/react'
// import '@testing-library/jest-dom/extend-expect'
// import { BrowserRouter } from 'react-router-dom'
// import { createStore } from 'redux'
// import { Provider } from 'react-redux'
// import rootReducer from '../reducers'

// describe('<NPContainer/>', () => {

//   let NPContainerContainer
//   let store
//   let initialState
//   let npFiltered

//   beforeEach(() => {
//     initialState = { 
//         sesion: {
//             search: '',
//             npID: ''
//         },
//         np: [{
//           name: 'name1',
//           designation: 'designation1',
//           id: 'id1',
//           states: 'states1',
//           longitude: 'longitude1',
//           latitude: 'latitude1',
//           url: 'url1',
//           description: 'description1',
//           images: ['image1a', 'image1b'],
//           weatherInfo: 'weatherInfo1',
//           bucket: true,
//           visited: false,
//           notes: []
//         },
//         {
//           name: 'name2',
//           designation: 'designation2',
//           id: 'id2',
//           states: 'states2',
//           longitude: 'longitude2',
//           latitude: 'latitude2',
//           url: 'url2',
//           description: 'description2',
//           images: ['image2a', 'image2b'],
//           weatherInfo: 'weatherInfo2',
//           bucket: true,
//           visited: false,
//           notes: []
//         }
//       ]
//     }

//     npFiltered = [{
//       name: 'name2',
//       designation: 'designation2',
//       id: 'id2',
//       states: 'states2',
//       longitude: 'longitude2',
//       latitude: 'latitude2',
//       url: 'url2',
//       description: 'description2',
//       images: ['image2a', 'image2b'],
//       weatherInfo: 'weatherInfo2',
//       bucket: true,
//       visited: false,
//       notes: []
//     }]

//    store = createStore(rootReducer, initialState)

//     NPContainerContainer = render(
//      <Provider store={store}>
//         <BrowserRouter>
//             <NPContainer/>
//         </BrowserRouter>
//      </Provider>
//     )
//   })
  
//   afterEach(cleanup)
  
//   test('<NPContainer/> component successfully renders', () => {
//     const { getByText } = NPContainerContainer
//     expect(true).toBeTruthy()
//   })
// })

// why undefined? 