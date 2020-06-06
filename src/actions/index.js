// NP
export const addAllNP = np => ({
    type: 'ADD_ALL_NP',
    np
})

export const changeState = np => ({
    type: 'CHANGE_STATE',
    np
})

export const deleteNP = np => ({
    type: 'DELETE_NP',
    np
})

export const toggleBucketNP = np => ({
    type: 'TOGGLE_BUCKET_NP',
    np
})

export const toggleVisitedNP = np => ({
    type: 'TOGGLE_VISITED_NP',
    np
})

// USER
export const login = user => ({
    type: 'LOGIN',
    user
})

export const logout = userTemplate => ({
    type: 'LOGOUT',
    userTemplate
})

export const displayNP = id => ({
    type: 'DISPLAY_NP',
    id
})