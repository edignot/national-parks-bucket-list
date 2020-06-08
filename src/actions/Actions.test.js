import * as actions from './index'

describe('ACTIONS', () => {
  
  let np
  let id
  let user
  let input

  beforeEach(() => {
    np = [{
      name: 'name1',
      designation: 'designation1',
      id: 'id1',
      states: 'states1',
      longitude: 'longitude1',
      latitude: 'latitude1',
      url: 'url1',
      description: 'description1',
      images: [],
      weatherInfo: 'weatherinfo1',
      bucket: false,
      visited: false,
      notes: []
    }]

    id = 'id1'

    user = {
      userName: 'username',
      email: 'email',
      stateCode: 'state'
    }

    input = 'input'
  })

  test('should have a type of ADD_ALL_NP', () => {
    const expectedAction = {
        type: 'ADD_ALL_NP',
        np
    }
    const result = actions.addAllNP(np)
    expect(result).toEqual(expectedAction)
  })

  test('should have a type of CHANGE_STATE', () => {
    const expectedAction = {
        type: 'CHANGE_STATE',
        np
    }
    const result = actions.changeState(np)
    expect(result).toEqual(expectedAction)
  })

  test('should have a type of DELETE_NP', () => {
    const expectedAction = {
        type: 'DELETE_NP',
        id
    }
    const result = actions.deleteNP(id)
    expect(result).toEqual(expectedAction)
  })

  test('should have a type of TOGGLE_BUCKET_NP', () => {
    const expectedAction = {
        type: 'TOGGLE_BUCKET_NP',
        id
    }
    const result = actions.toggleBucketNP(id)
    expect(result).toEqual(expectedAction)
  })

  test('should have a type of TOGGLE_VISITED_NP', () => {
    const expectedAction = {
        type: 'TOGGLE_VISITED_NP',
        id
    }
    const result = actions.toggleVisitedNP(id)
    expect(result).toEqual(expectedAction)
  })

  test('should have a type of LOGIN', () => {
    const expectedAction = {
        type: 'LOGIN',
        user
    }
    const result = actions.login(user)
    expect(result).toEqual(expectedAction)
  })

  test('should have a type of LOGOUT', () => {
    const expectedAction = {
        type: 'LOGOUT'
    }
    const result = actions.logout()
    expect(result).toEqual(expectedAction)
  })

  //   test('should have a type of DISPLAY_NP', id => {
  //   const expectedAction = {
  //       type: 'DISPLAY_NP',
  //       id
  //   }
  //   const result = actions.displayNP(id)
  //   expect(result).toEqual(expectedAction)
  // })

//   test('should have a type of SEARCH_BY_TITLE', input => {
//     const expectedAction = {
//         type: 'SEARCH_BY_TITLE',
//         input
//     }
//     const result = actions.searchByTitle(input)
//     expect(result).toEqual(expectedAction)
//   })
})
