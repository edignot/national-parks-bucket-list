export const sesion = ( state = '', action ) => {
    switch (action.type) {
        case 'SEARCH_BY_TITLE': 
            return action.input
        default:
            return state
    }
}