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
import { useNavigate } from 'react-router-dom'
import { type RolsValues } from '../components/shared/schemas/Interfaces'

export interface AuthContextValue {
  auth: typeof UserSchema
  roles: RolsValues[]
  setRoles: Dispatch<SetStateAction<RolsValues[]>>
  setAuth: Dispatch<SetStateAction<typeof UserSchema>>
  loading: boolean
  setLoading: Dispatch<SetStateAction<boolean>>
  title: string
  setTitle: Dispatch<SetStateAction<string>>
  loadingComponents: boolean
  setLoadingComponents: Dispatch<SetStateAction<boolean>>
}

const AuthContext = createContext<AuthContextValue | null>(null)

export const AuthProvider = ({
  children
}: {
  children: ReactNode
}): JSX.Element => {
  const [auth, setAuth] = useState<typeof UserSchema>({
    id: '',
    name: '',
    email: '',
    email_alter: '',
    firma: '',
    pass_email: '',
    id_rol: 0
  })
  const [roles, setRoles] = useState<RolsValues[]>([
    { id: 0, slug: '', accesos: '', created_at: '', updated_at: '' }
  ])
  const navigate = useNavigate()
  const [loading, setLoading] = useState(true)
  const [title, setTitle] = useState('')
  const [loadingComponents, setLoadingComponents] = useState(false)
  const token = localStorage.getItem('token')
  const user = localStorage.getItem('user')
  useEffect(() => {
    Promise.all([authUser()]).then(() => {
      Promise.all([getRoles()]).then(() => {
        setLoading(false)
      })
    })
  }, [])

  const authUser = async (): Promise<false | undefined> => {
    // COMPROBRAR SI TENGO EL TOKEN Y EL USER
    if (!token || !user) {
      setLoading(false)
      return false
    }

    try {
      const respuesta = await axios.get(`${Global.url}/user-profile`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      setAuth(respuesta.data.user)
    } catch (error) {
      console.log(error)
    }

    // SETEAR LOS DATOS
  }

  const getRoles = async (): Promise<void> => {
    try {
      const request = await axios.get(`${Global.url}/getRoles`, {
        headers: {
          Authorization: `Bearer ${
            token !== null && token !== '' ? token : ''
          }`
        }
      })
      setRoles(request.data)
      setLoading(false)
    } catch (error: any) {
      if (
        typeof error.request?.response == 'string' &&
        error.request.response.includes('Unauthenticated')
      ) {
        localStorage.clear()
        setAuth({ id: '', name: '', email: '', email_alter: '', pass_email: '', firma: '', id_rol: 0 })
        setLoading(false)
        navigate('/login')
      }
    }
  }

  return (
    <AuthContext.Provider
      value={{
        auth,
        setAuth,
        loading,
        setLoading,
        title,
        roles,
        setRoles,
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
