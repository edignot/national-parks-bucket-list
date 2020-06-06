const userTemplate = {
    userName: '',
    email: '',
    stateCode: '',
    bucketList: [],
    visited: [],
    npID: ''
}

export const user = ( state = userTemplate, action ) => {
    switch (action.type) {
        case 'LOGIN': 
            return {...userTemplate, ...action.user}
        case 'LOGOUT':
            return userTemplate
        case 'DISPLAY_NP':
            return {...state, npID: action.id}
        default:
            return state
    }
}