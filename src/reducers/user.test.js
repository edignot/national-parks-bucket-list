import { user } from './user'

describe('USER reducer', () => {

    let userTemplate
    let userInfo

    beforeEach(() => {
        userTemplate = {
            userName: '',
            email: '',
            stateCode: '',
            bucketList: [],
            visited: []
        }

        userInfo = {
            userName: 'edita',
            email: 'edita@gmail.com',
            stateCode: 'CO',
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
        expect(result).toEqual(userInfo)
    })

    test('should return state with updated logout info', () => {
        const action = {
            type: 'LOGOUT'
        }
        const result = user(userInfo, action)
        expect(result).toEqual(userTemplate)
    })

    test('should return the initial state', () => {
        const expected = userTemplate
        const result = user(undefined, userTemplate)
        expect(result).toEqual(expected)
    })
})