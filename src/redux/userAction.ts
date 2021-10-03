import axios from 'axios'
import { Dispatch } from 'redux'
import { Account } from '../types/account.type'
import { SET_USER } from './actionType'

export const baseURL = 'http://localhost:3000'

export function getUser(payload: Account) {
  return function (dispatch: Dispatch) {
    axios
      .post(`${baseURL}/api/login`, payload, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(res => dispatch(setUser(res.data)))
  }
}

export const setUser = (payload: any) => {
  return {
    type: SET_USER,
    payload
  }
}
