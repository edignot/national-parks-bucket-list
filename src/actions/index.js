export const addAllNP = np => ({
    type: 'ADD_ALL_NP',
    np
})

export const changeState = np => ({
    type: 'CHANGE_STATE',
    np
})

export const deleteNP = id => ({
    type: 'DELETE_NP',
    id
})

export const toggleBucketNP = id => ({
    type: 'TOGGLE_BUCKET_NP',
    id
})

export const toggleVisitedNP = id => ({
    type: 'TOGGLE_VISITED_NP',
    id
})

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

export const searchByTitle = input => ({
    type: 'SEARCH_BY_TITLE',
    input
})
