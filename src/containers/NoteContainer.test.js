// import React from 'react'
// import { render, cleanup, fireEvent } from '@testing-library/react'
// import NoteContainer from './NoteContainer'
// import { BrowserRouter } from 'react-router-dom'
// import '@testing-library/jest-dom/extend-expect'
// import { createStore } from 'redux'
// import { Provider } from 'react-redux'
// import rootReducer from '../reducers'

// describe('<NoteContainer/>', () => {

//   let NoteContainerContainer
//   let store
  
//   beforeEach(() => {

//     store = createStore(rootReducer)

//     NoteContainerContainer = render(
//       <Provider store ={store}>
//         <BrowserRouter>
//             <NoteContainer/>
//         </BrowserRouter>
//       </Provider>
//     )
//   })
  
//   afterEach(cleanup)
  
//   test('<NoteContainer/> component successfully renders', () => {
//     const { getByText } = NoteContainerContainer
//     expect(true).toBeTruthy()
//   })
// })