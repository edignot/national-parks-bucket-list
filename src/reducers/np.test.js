import { np } from './np'

describe('NP reducer', () => {

    let npPayload
    let newNpPayload

    beforeEach(() => {
        npPayload = [{
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
        },
        {
            name: 'name2',
            designation: 'designation2',
            id: 'id2',
            states: 'states2',
            longitude: 'longitude2',
            latitude: 'latitude2',
            url: 'url2',
            description: 'description2',
            images: [],
            weatherInfo: 'weatherinfo2',
            bucket: false,
            visited: false,
            notes: []
        }]

        newNpPayload = [{
            name: 'name3',
            designation: 'designation3',
            id: 'id3',
            states: 'states3',
            longitude: 'longitude3',
            latitude: 'latitude3',
            url: 'url3',
            description: 'description3',
            images: [],
            weatherInfo: 'weatherinfo3',
            bucket: false,
            visited: false,
            notes: []
        }]
    })

    test('should return the state with NP added', () => {
        const action = {
            type: 'ADD_ALL_NP',
            np: npPayload
        }
        const result = np([], action)
        expect(result).toEqual(npPayload)
    })

    test('should return the state with new values', () => {
        const action = {
            type: 'CHANGE_STATE',
            np: newNpPayload
        }
        const result = np(npPayload, action)
        expect(result).toEqual(newNpPayload)
    })

    test('should leave those np who are marked as visited, bucket or have notes', () => {
        npPayload[0].bucket = true
        const action = {
            type: 'CHANGE_STATE',
            np: newNpPayload
        }
        const result = np(npPayload, action)
        expect(result).toEqual([npPayload[0], ...newNpPayload])
    })

    test('should return the state with initial state value', () => {
        const action = {
            type: 'DELETE_NP'
        }
        const result = np(npPayload, action)
        expect(result).toEqual([])
    })

    test('should return the state with updated bucket property boolean value', () => {
        const action = {
            type: 'TOGGLE_BUCKET_NP',
            id: 'id1'
        }
        const result = np(npPayload, action)
        expect(result).toEqual([{...npPayload[0], bucket: true} ,npPayload[1]])
    })

    test('should return the state with updated visited property boolean value', () => {
        const action = {
            type: 'TOGGLE_VISITED_NP',
            id: 'id1'
        }
        const result = np(npPayload, action)
        expect(result).toEqual([{...npPayload[0], visited: true} ,npPayload[1]])
    })

    test('should return the initial state', () => {
        const expexted = []
        const result = np(undefined, [])
        expect(result).toEqual(expexted)
    })
})