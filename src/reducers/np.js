export const np = ( state = [], action) => {
    switch (action.type) {
        case 'ADD_ALL_NP':
            return [...state, ...action.np]
        case 'CHANGE_STATE':
            return [...action.np]
        case 'DELETE_NP':
            return []
        default: 
            return state
    }
}