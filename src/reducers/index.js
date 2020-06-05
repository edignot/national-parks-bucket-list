import { combineReducers} from 'redux'
import { todos } from './todos'
import { np } from './np'

const rootReducer = combineReducers({
    todos,
    np
})

export default rootReducer