export const np = ( state = [], action) => {
    switch (action.type) {
        case 'ADD_ALL_NP':
            return [...state, ...action.np]
        case 'CHANGE_STATE':
            return [...action.np]
        case 'DELETE_NP':
            return []
        case 'TOGGLE_BUCKET_NP':
            return []
        case 'TOGGLE_VISITED_NP':
            return []
        default: 
            return state
    }
}