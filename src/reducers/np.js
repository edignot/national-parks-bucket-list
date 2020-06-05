export const np = ( state = [], action) => {
    switch (action.type) {
        case 'ADD_ALL_NP':
            return state = action.np
        case 'DELETE_NP':
            return state = []
        default: 
            return state
    }
}