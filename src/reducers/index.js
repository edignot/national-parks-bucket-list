import { combineReducers} from 'redux'
import { np } from './np'
import { user } from './user'

const rootReducer = combineReducers({
    np,
    user
})

export default rootReducer