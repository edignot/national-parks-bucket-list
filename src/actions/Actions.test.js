import * as actions from './index'

describe('actions', () => {
  it('should have a type of ADD_ALL_NP', () => {

    const np = [{
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

    const expectedAction = {
        type: 'ADD_ALL_NP',
        np: [{
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
    }
    const result = actions.addAllNP(np)
    expect(result).toEqual(expectedAction)
  })
})