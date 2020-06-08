import { user } from './user'

describe('USER reducer', () => {

    let userTemplate

    beforeEach(() => {
        userTemplate = {
            userName: '',
            email: '',
            stateCode: '',
            bucketList: [],
            visited: []
        }
    })

    test('should return state with updated login info', () => {
        const action = {
            type: 'LOGIN',
            user: {
                userName: 'edita',
                email: 'edita@gmail.com',
                stateCode: 'CO'
            }
          }
        const result = user(userTemplate, action)
        expect(result).toEqual({
            userName: 'edita',
            email: 'edita@gmail.com',
            stateCode: 'CO',
            bucketList: [],
            visited: []
        })
    })

    test('should return state with updated logout info', () => {
        const action = {
            type: 'LOGOUT'
        }
        const result = user(userTemplate, action)
        expect(result).toEqual({
            userName: '',
            email: '',
            stateCode: '',
            bucketList: [],
            visited: []
        })
    })

    test('should return the initial state', () => {
        const expected = {
            userName: '',
            email: '',
            stateCode: '',
            bucketList: [],
            visited: []
        }
        const result = user(undefined, {
            userName: '',
            email: '',
            stateCode: '',
            bucketList: [],
            visited: []
        })
        expect(result).toEqual(expected)
    })
})