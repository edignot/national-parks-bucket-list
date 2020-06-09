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
    const { getByTestId } = LoginContainer
    expect(getByTestId('title')).toBeInTheDocument()
  })

  test('Username input value updates', () => {
    const { getByLabelText } = LoginContainer
    getByLabelText('* Username:').value = 'edita'
    fireEvent.change(getByLabelText('* Username:'))
    expect(getByLabelText('* Username:').value).toBe('edita')
  })

  test('Username input value updates', () => {
    const { getByLabelText } = LoginContainer
    getByLabelText('* Email:').value = 'edita@gmail.com'
    fireEvent.change(getByLabelText('* Email:'))
    expect(getByLabelText('* Email:').value).toBe('edita@gmail.com')
  })

  test('Username input value updates', () => {
    const { getByLabelText } = LoginContainer
    getByLabelText('* State code:').value = 'code'
    fireEvent.change(getByLabelText('* State code:'))
    expect(getByLabelText('* State code:').value).toBe('code')
  })

  test('LOGIN button is disabled if any required input is empty', () => {
    const { getByLabelText, getByText } = LoginContainer
    expect(getByText('LOGIN')).toHaveAttribute('disabled')
    fireEvent.change(getByLabelText('* Username:'), {target: {value: 'edita'}})
    fireEvent.change(getByLabelText('* Email:'), {target: {value: 'edita'}})
    fireEvent.change(getByLabelText('* State code:'), {target: {value: ''}})
    expect(getByText('LOGIN')).toHaveAttribute('disabled')
  })

  test('Displays error message if state code is not valid', () => {
    const { getByLabelText, getByText } = LoginContainer
    expect(getByText('LOGIN')).toHaveAttribute('disabled')
    fireEvent.change(getByLabelText('* Username:'), {target: {value: 'edita'}})
    fireEvent.change(getByLabelText('* Email:'), {target: {value: 'edita'}})
    fireEvent.change(getByLabelText('* State code:'), {target: {value: 'non valid code'}})
    fireEvent.click(getByText('LOGIN'))
    expect(getByText('Enter valid state code')).toBeInTheDocument()
  })

  test('LOGIN if all inputs are filled and state code is valid', () => {
    const { getByLabelText, getByText, queryByLabelText } = LoginContainer
    expect(getByText('LOGIN')).toHaveAttribute('disabled')
    fireEvent.change(getByLabelText('* Username:'), {target: {value: 'edita'}})
    fireEvent.change(getByLabelText('* Email:'), {target: {value: 'edita'}})
    fireEvent.change(getByLabelText('* State code:'), {target: {value: 'co'}})
    fireEvent.click(getByText('LOGIN'))
    expect(queryByLabelText('* Username:')).not.toBeInTheDocument()
    expect(queryByLabelText('* Email:')).not.toBeInTheDocument()
    expect(queryByLabelText('* State code:')).not.toBeInTheDocument()
  })
})