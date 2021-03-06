import { AxiosResponse } from 'axios'
import { Dispatch } from 'redux'
import { requestLogIn, requestLogOut } from '../api/http'
import { Account } from '../types/account.type'
import { User } from '../types/user.type'
import { REJECT_LOG_IN, SET_USER } from './actionType'

export const setUser = (payload: null | User) => {
  return {
    type: SET_USER,
    payload
  }
}

export const logIn = (payload: Account) => (dispatch: Dispatch) => {
  requestLogIn(payload)
    .then((res: AxiosResponse<any>) => dispatch(setUser(res.data.user)))
    .catch(_ => {
      dispatch(rejectLogin())
    })
}

export function rejectLogin() {
  return {
    type: REJECT_LOG_IN
  }
}

export const logOut = () => (dispatch: Dispatch) => {
  requestLogOut()?.then(_ => {
    dispatch(setUser(null))
  })
}
