import { combineReducers } from 'redux'
import stateReducer from './redux/stateSlice'

const rootReducer = combineReducers({
    todos: stateReducer
})

export default rootReducer