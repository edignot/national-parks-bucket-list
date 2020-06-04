// CREATING STORE FROM ALL REDUCERS. COMBINE REDUCERS TAKES OBJECT AS AN ARGUMENT
import { combineReducers} from 'redux'
import { todos } from './todos'

const rootReducer = combineReducers({
    todos
})

export default rootReducer