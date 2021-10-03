import { RootState } from '../types/rootState.type'
import { UserAction } from '../types/userAction.type'
import { LOG_OUT, SET_USER } from './actionType'

const initialValue: RootState = {
  user: null
}

export function userReducer(
  state: RootState = initialValue,
  action: UserAction
) {
  switch (action.type) {
    case SET_USER:
      return { ...state, user: action.payload }

    case LOG_OUT:
      return { ...state, user: null }
    default:
      return state
  }
}
