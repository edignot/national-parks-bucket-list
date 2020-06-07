import { combineReducers} from 'redux'
import { np } from './np'
import { user } from './user'
import { sesion } from './sesion'

const rootReducer = combineReducers({
    np,
    user,
    sesion
})

export default rootReducer