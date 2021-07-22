import { combineReducers } from 'redux'
import BlogReducer from '@redux/Reducers/BlogReducer'
import NavReducer from '@redux/Reducers/NavReducer'

export default combineReducers({
    blogs: BlogReducer,
    nav: NavReducer
})
