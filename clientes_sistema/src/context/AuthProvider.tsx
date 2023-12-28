import {
  useState,
  useEffect,
  createContext,
  type ReactNode,
  type Dispatch,
  type SetStateAction
} from 'react'
import { Global } from '../helper/Global'
import axios from 'axios'
import { type UserSchema } from './UserSchema'

export interface AuthContextValue {
  auth: typeof UserSchema
  setAuth: Dispatch<SetStateAction<typeof UserSchema>>
  loading: boolean
  setLoading: Dispatch<SetStateAction<boolean>>
  title: string
  token: string
  setTitle: Dispatch<SetStateAction<string>>
  loadingComponents: boolean
  setLoadingComponents: Dispatch<SetStateAction<boolean>>
  guia: boolean
  setGuia: Dispatch<SetStateAction<boolean>>
}

const AuthContext = createContext<AuthContextValue | null >(null)

export const AuthProvider = ({ children }: { children: ReactNode }): JSX.Element => {
  const [auth, setAuth] = useState<typeof UserSchema>({ id: '', name: '', email: '' })
  const [loading, setLoading] = useState(true)
  const [token, setToken] = useState('')
  const [title, setTitle] = useState('')
  const [loadingComponents, setLoadingComponents] = useState(false)
  const [guia, setGuia] = useState(false)

  useEffect(() => {
    authUser()
  }, [])

  const authUser = async (): Promise<false | undefined> => {
    // SACAR DATOS DEL USUARIO IDENTIFICADO DEL LOCALSTORAGE
    const tokenUser = localStorage.getItem('tokenUser')
    const user = localStorage.getItem('cliente')

    // COMPROBRAR SI TENGO EL tokenUser Y EL USER
    if (!tokenUser || !user) {
      setLoading(false)
      return false
    }

    const respuesta = await axios.get(`${Global.url}/user-profile`, {
      headers: {
        Authorization: `Bearer ${tokenUser}`
      }
    })
    // SETEAR LOS DATOS
    setAuth(
      {
        id: respuesta.data.user.id,
        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
        name: `${respuesta.data.user.nombres} ${respuesta.data.user.apellidos}`,
        email: respuesta.data.user.email
      }
    )
    setToken(tokenUser)
    setLoading(false)
  }

  return (
    <AuthContext.Provider
      value={{
        guia,
        setGuia,
        auth,
        setAuth,
        token,
        loading,
        setLoading,
        title,
        setTitle,
        loadingComponents,
        setLoadingComponents
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext
