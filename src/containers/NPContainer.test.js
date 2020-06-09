// import React from 'react'
// import NPContainer from './NPContainer'
// import { render, cleanup, fireEvent } from '@testing-library/react'
// import '@testing-library/jest-dom/extend-expect'
// import { BrowserRouter } from 'react-router-dom'
// import { createStore } from 'redux';
// import { Provider } from 'react-redux';
// import rootReducer from '../reducers'

// describe('<NPContainer/>', () => {

//   let NPContainerContainer
//   let store

//   beforeEach(() => {

//    store = createStore(rootReducer)

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