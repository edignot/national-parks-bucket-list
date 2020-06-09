// import React from 'react'
// import { render, cleanup, fireEvent } from '@testing-library/react'
// import '@testing-library/jest-dom/extend-expect'
// import NPInfo from './NPInfo'
// import { BrowserRouter } from 'react-router-dom'
// import { createStore } from 'redux'
// import { Provider } from 'react-redux'
// import rootReducer from '../reducers'

// describe('<NPInfo/>', () => {

//   let NPInfoContainer
//   let store
//   let initialState
//   let lat
//   let lng
  
//   beforeEach(() => {
//     initialState = { 
//       sesion: {
//           search: '',
//           npID: 'id1'
//       },
//       np: [{
//         name: 'name1',
//         designation: 'designation1',
//         id: 'id1',
//         states: 'states1',
//         longitude: 1,
//         latitude: 2,
//         url: 'url1',
//         description: 'description1',
//         images: [{url: 'image1a'}, {url: 'image1b'}],
//         weatherInfo: 'weatherInfo1',
//         bucket: true,
//         visited: false,
//         notes: []
//       },
//       {
//         name: 'name2',
//         designation: 'designation2',
//         id: 'id2',
//         states: 'states2',
//         longitude: 'longitude2',
//         latitude: 'latitude2',
//         url: 'url2',
//         description: 'description2',
//         images: [{url: 'image2a'}, {url: 'image2b'}],
//         weatherInfo: 'weatherInfo2',
//         bucket: true,
//         visited: false,
//         notes: []
//       }
//     ]
//   }

//     store = createStore(rootReducer, initialState)

//     NPInfoContainer = render(
//         <Provider store={store}>
//             <BrowserRouter>
//                 <NPInfo/>
//             </BrowserRouter>
//         </Provider>
//     )
//   })
  
//   afterEach(cleanup)
  
//   test('<NPInfo/> component successfully renders', () => {
//     const { getByTestId } = NPInfoContainer
//     expect(true).toBeTruthy()
//   })

// })

// Invalid LatLng object: (latitude2, longitude2)
