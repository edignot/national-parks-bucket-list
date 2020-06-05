export const addAllNP = np => ({
    type: 'ADD_ALL_NP',
    np
})

export const deleteNP = np => ({
    type: 'DELETE_NP',
    np
})

export const login = user => ({
    type: 'LOGIN',
    user
})

export const logout = userTemplate => ({
    type: 'LOGOUT',
    userTemplate
})