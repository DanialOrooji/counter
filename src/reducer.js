import { combineReducers } from 'redux'
import stateReducer from './redux/stateSlice'

const rootReducer = combineReducers({
    number: stateReducer
})

export default rootReducer