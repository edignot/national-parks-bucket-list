import React from 'react'
import { render, cleanup, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Search from './Search'
import { BrowserRouter } from 'react-router-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from '../reducers'

describe('<Search/>', () => {

  let SearchContainer
  let store
  
  beforeEach(() => {

    store = createStore(rootReducer)

    SearchContainer = render(
        <Provider store={store}>
            <BrowserRouter>
                <Search/>
            </BrowserRouter>
        </Provider>
    )
  })
  
  afterEach(cleanup)
  
  test('<Search/> component successfully renders', () => {
    const { getByLabelText } = SearchContainer
    expect(getByLabelText('Change state:')).toBeInTheDocument()
  })

  test('Change state input value is changed', () => {
    const { getByLabelText } = SearchContainer
    getByLabelText('Change state:').value = 'AK'
    fireEvent.change(getByLabelText('Change state:'))
    expect(getByLabelText('Change state:').value).toBe('AK')
  })

  test('Add state input value is changed', () => {
    const { getByLabelText } = SearchContainer
    getByLabelText('Add state:').value = 'AK'
    fireEvent.change(getByLabelText('Add state:'))
    expect(getByLabelText('Add state:').value).toBe('AK')
  })

  test('Search by National Park title input value is changed', () => {
    const { getByLabelText } = SearchContainer
    getByLabelText('Search by National Park title:').value = 'PARK'
    fireEvent.change(getByLabelText('Search by National Park title:'))
    expect(getByLabelText('Search by National Park title:').value).toBe('PARK')
  })

  test('that change state button is enabled if state code is valid', () => {
    const { getByTestId, getByLabelText } = SearchContainer
    expect(getByTestId('change-state-btn')).toHaveAttribute('disabled')
    fireEvent.change(getByLabelText('Change state:'), {target: {value: 'AK'}})
    expect(getByTestId('change-state-btn')).not.toHaveAttribute('disabled')
  })

  test('that add state button is enabled if state code is valid', () => {
    const { getByTestId, getByLabelText } = SearchContainer
    expect(getByTestId('add-state-btn')).toHaveAttribute('disabled')
    fireEvent.change(getByLabelText('Add state:'), {target: {value: 'AK'}})
    expect(getByTestId('add-state-btn')).not.toHaveAttribute('disabled')
  })

  test('that search input is cleared', () => {
    const { getByTestId, getByLabelText } = SearchContainer
    getByLabelText('Search by National Park title:').value = 'PARK'
    fireEvent.change(getByLabelText('Search by National Park title:'))
    fireEvent.click(getByTestId('search-btn'))
    expect(getByLabelText('Search by National Park title:').value).toBe('')
  })
})
