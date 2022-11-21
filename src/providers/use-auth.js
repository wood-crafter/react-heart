import { createContext, useCallback, useContext, useState } from 'react'

const USER_SS_KEY = '#_user_#'
const USERS = [
  {username: 'vnanne', password: '1'},
  {username: 'gogi', password: '1'},
  {username: 'aiinauu', password: '1'}
]

export const AuthContext = createContext(null)
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(JSON.parse(sessionStorage.getItem(USER_SS_KEY)))

  const proxiedSetUser = useCallback((user) => {
    if (user) {
      sessionStorage.setItem(USER_SS_KEY, JSON.stringify(user))
    } else {
      sessionStorage.getItem(USER_SS_KEY)
    }

    setUser(user)
  }, [])

  return (
    <AuthContext.Provider value={{ user, setUser: proxiedSetUser }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const { user, setUser } = useContext(AuthContext)

  return {
    user,
    async attemptLogin (username, password) {
      let isMatch = false
      USERS.forEach(element => {
        if(element.username === username && element.password === password) {
          isMatch = true
        }
      })

      if (isMatch) {
        setUser({ username })
      } else {
        throw new Error('Credentials mismatch...!')
      }
    },
    async logout () {
      setUser(null)
    }
  }
}
