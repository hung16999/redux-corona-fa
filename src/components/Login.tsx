import { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'

import { getUser } from '../redux/userAction'

import { Account } from '../types/account.type'
import { RootState } from '../types/rootState.type'

function Login() {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const dispatch = useDispatch()
  const user = useSelector((store: RootState) => store)
  const history = useHistory()

  console.log(user)

  useEffect(
    function () {
      if (user.user) {
        history.push('/admin')
      } else {
        history.push('/login')
      }
    },
    [user, history]
  )

  function handleOnChange(event: ChangeEvent<HTMLInputElement>) {
    const { value, name } = event.target

    switch (name) {
      case 'email': {
        setEmail(value)
        break
      }
      case 'password': {
        setPassword(value)
        break
      }
    }
  }

  function handleLogin(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const account: Account = { email: email, password: password }
    dispatch(getUser(account))
  }

  return (
    <>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          value={email}
          name="email"
          onChange={handleOnChange}
          placeholder="email"
        />

        <input
          type="password"
          value={password}
          name="password"
          onChange={handleOnChange}
          placeholder="password"
        />
        <button>login</button>
      </form>
    </>
  )
}

export default Login
