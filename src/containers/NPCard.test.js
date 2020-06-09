// import React from 'react'
// import { render, cleanup, fireEvent } from '@testing-library/react'
// import NPCard from './NPCard'
// import { BrowserRouter } from 'react-router-dom'
// import '@testing-library/jest-dom/extend-expect'
// import { createStore } from 'redux'
// import { Provider } from 'react-redux'
// import rootReducer from '../reducers'

// describe('<NPCard/>', () => {

//   let NPCardContainer
//   let store
  
//   beforeEach(() => {

//     store = createStore(rootReducer)

//     NPCardContainer = render(
//       <Provider store={store}>
//         <BrowserRouter>
//             <NPCard/>
//         </BrowserRouter>
//       </Provider>
//     )
//   })
  
//   afterEach(cleanup)
  
//   test('<NPCard/> component successfully renders', () => {
//     const { getByText } = NPCardContainer
//     expect(true).toBeTruthy()
//   })
// })