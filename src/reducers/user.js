const userTemplate = {
    userName: '',
    email: '',
    stateCode: '',
    bucketList: [],
    visited: []
}

export const user = ( state = userTemplate, action ) => {
    switch (action.type) {
        case 'LOGIN': 
            return {...userTemplate, ...action.user}
        case 'LOGOUT':
            return userTemplate
        default:
            return state
    }
}