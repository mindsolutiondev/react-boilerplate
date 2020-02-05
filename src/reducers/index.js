import { combineReducers } from 'redux'
import counters from './counters'
import users from './users'

export default combineReducers({
    counters,
    users
})