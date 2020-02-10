import { combineReducers } from 'redux'
import counters from './counters'
import users from './users'
import movies from './movies'

export default combineReducers({
    counters,
    users,
    movies
})