import { User } from './user.type'

export interface RootState {
  user: null | { user: User }
}
