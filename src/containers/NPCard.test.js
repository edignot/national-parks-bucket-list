import React from 'react'
import { render, cleanup, fireEvent } from '@testing-library/react'
import NPCard from './NPCard'
import { BrowserRouter } from 'react-router-dom'
import '@testing-library/jest-dom/extend-expect'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from '../reducers'

describe('<NPCard/>', () => {

  let NPCardContainer
  let store
  
  beforeEach(() => {

    store = createStore(rootReducer)

    NPCardContainer = render(
      <Provider store={store}>
        <BrowserRouter>
            <NPCard
                name='name1'
                designation='designation1'
                id='id1'
                states='states1'
                longitude='longitude1'
                latitude='latitude1'
                url='url1'
                description='description1'
                images={['image1a', 'image1b']}
                weatherInfo='weatherInfo1'
                bucket={true}
                visited={false}
                notes={[]}
            />
        </BrowserRouter>
      </Provider>
    )
  })
  
  afterEach(cleanup)
  
  test('<NPCard/> component successfully renders', () => {
    const { getByText } = NPCardContainer
    expect(getByText('name1 designation1')).toBeInTheDocument()
  })
})