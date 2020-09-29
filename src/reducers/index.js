import {combineReducers} from 'redux'
import messages from './messages'

// Can add multiple reducers
const rootReducer = combineReducers({
  messages,
})

export default rootReducer
