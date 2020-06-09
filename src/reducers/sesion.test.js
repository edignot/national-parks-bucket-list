import { sesion } from './sesion'

describe('SESION reducer', () => {

    let sesionTemplate

    beforeEach(() => {
        sesionTemplate = {
            search: '',
            npID: ''
        }
    })

    test('should return state with updated search value', () => {
        const action = {
            type:'SEARCH_BY_TITLE',
            input: 'search value'
          }
        const result = sesion(sesionTemplate, action)
        expect(result).toEqual({search: 'search value', npID: ''})
    })

    test('should return state with updated npID', () => {
        const action = {
            type:'DISPLAY_NP',
            id: 'id value'
          }
        const result = sesion(sesionTemplate, action)
        expect(result).toEqual({npID: 'id value', search: ''})
    })

    test('should return the initial state', () => {
        const expected = sesionTemplate
        const result = sesion(undefined, sesionTemplate)
        expect(result).toEqual(expected)
    })
})