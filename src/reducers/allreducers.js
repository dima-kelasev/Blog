import { combineReducers } from 'redux'
import postReducers from './post/postReducers'

const Reducers = combineReducers({
	postReducers,
})

export default Reducers;