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
            return state = {...userTemplate, ...action.user}
        case 'LOGOUT':
            return state = userTemplate
        default:
            return state
    }
}