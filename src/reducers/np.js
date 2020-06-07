import _ from 'lodash'

export const np = ( state = [], action) => {
    switch (action.type) {
        case 'ADD_ALL_NP':
            let filtered = _.unionBy(state, action.np, 'id');
            return [...filtered]
        case 'CHANGE_STATE':
            let saved = state.filter(i => (i.visited || i.bucket))
            return [...saved, ...action.np]
        case 'DELETE_NP':
            return []
        case 'TOGGLE_BUCKET_NP':
            return state.map(i => {
                (i.id === action.id) && (i.bucket = !i.bucket)
                return i
            })
        case 'TOGGLE_VISITED_NP':
            return state.map(i => {
                (i.id === action.id) && (i.visited = !i.visited)
                return i
            })
        default: 
            return state
    }
}