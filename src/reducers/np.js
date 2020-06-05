export const np = ( state = [], action) => {
    switch (action.type) {
        case 'ADD_ALL_NP':
            return state = action.np
        default: 
            return state
    }
}