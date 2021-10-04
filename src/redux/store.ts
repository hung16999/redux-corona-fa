import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import reduxThunk from 'redux-thunk'
import { userReducer } from './userReducer'

const store = createStore(
  userReducer,
  undefined,
  composeWithDevTools(applyMiddleware(reduxThunk))
)

export default store
