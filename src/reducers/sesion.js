const sesionTemplate = {
    search: '',
    npID: ''
}

export const sesion = ( state = sesionTemplate, action ) => {
    switch (action.type) {
        case 'SEARCH_BY_TITLE': 
            return {...state, search: action.input}
        case 'DISPLAY_NP':
            return {...state, npID: action.id}
        default:
            return state
    }
}