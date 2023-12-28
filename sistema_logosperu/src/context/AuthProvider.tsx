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
import { type notificacionesValues, type RolsValues } from '../components/shared/schemas/Interfaces'
import io from 'socket.io-client'
import { getVentas } from '../components/shared/FetchingData'

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
  setNotificaciones: Dispatch<SetStateAction<notificacionesValues[]>>
  notificaciones: notificacionesValues[]
  setEstado: Dispatch<SetStateAction<number>>
  estado: number
  totalNotificaciones: number
  loadingNotifi: boolean
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
  const [estado, setEstado] = useState(0)
  const [loadingComponents, setLoadingComponents] = useState(false)
  const token = localStorage.getItem('token')
  const user = localStorage.getItem('user')
  const [loadingNotifi, setLoadingNotifi] = useState(true)
  const [, setTotalRegistros] = useState(0)
  const [totalNotificaciones, setTotalRegistros2] = useState(0)
  const [notificaciones, setNotificaciones] = useState<notificacionesValues[]>(
    []
  )
  useEffect(() => {
    Promise.all([authUser()]).then(() => {
      Promise.all([getRoles()]).then(() => {
        setLoading(false)
      })
    })
  }, [])

  useEffect(() => {
    if (!token || !user) {
      return
    }
    const socket = io('https://prueba.logosperu.com.pe', {
      transports: ['websocket']
    })
    socket.on('connect', () => {
      console.log('Conexión WebSocket establecida con éxito')
    })
    if (!loading) {
      socket.on('mensaje', (data) => {
        console.log(data)
        const filteredNotifications = JSON.parse(data.asignacion).filter((item: any) => item.peso == auth.id)
        if (data.id_usuario != auth.id) {
          if (auth.id_rol == 99) {
            showNotification(data.nombre, data.contenido)
          } else if ((filteredNotifications.length > 0) || data.id_venta == auth.id) {
            showNotification(data.nombre, data.contenido)
          }
        }
        if (estado == 0) {
          Promise.all([
            getVentas(`getNotificaciones/${auth.id}/${auth.id_rol}`, setNotificaciones, setTotalRegistros2)
          ]).then(() => {
            setLoading(false)
          })
        } else {
          Promise.all([
            getVentas(`getNotificacionesAll/${auth.id}/${auth.id_rol}`, setNotificaciones, setTotalRegistros)
          ]).then(() => {
            setLoading(false)
          })
        }
      })
    }
    socket.on('disconnect', (reason) => {
      console.log('Conexión WebSocket cerrada:', reason)
    })
    socket.on('error', (error) => {
      console.error('Error en la conexión WebSocket:', error)
    })
    return () => {
      socket.disconnect()
    }
  }, [loading])

  const showNotification = (nombre: string, contenido: string): void => {
    // Verificar si las notificaciones son compatibles con el navegador
    if ('Notification' in window) {
      Notification.requestPermission().then((permission) => {
        if (permission === 'granted') {
          // Configuración de la notificación
          const options: NotificationOptions = {
            body: contenido,
            icon: 'https://logosperu.com.pe/logos/web.png', // Puedes proporcionar una URL de imagen
            silent: true
          }

          // Crear y mostrar la notificación
          const notification = new Notification(nombre, options)
          // Manejar clics en la notificación
          notification.onclick = () => {
            console.log('La notificación fue clicada')
            // Puedes agregar lógica para manejar el clic aquí
          }
        }
      })
    }
  }

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

  useEffect(() => {
    setLoadingNotifi(true)
    if (!loading) {
      if (estado == 0) {
        Promise.all([
          getVentas(`getNotificaciones/${auth.id}/${auth.id_rol}`, setNotificaciones, setTotalRegistros2)
        ]).then(() => {
          setLoadingNotifi(false)
        })
      } else {
        Promise.all([
          getVentas(`getNotificacionesAll/${auth.id}/${auth.id_rol}`, setNotificaciones, setTotalRegistros)
        ]).then(() => {
          setLoadingNotifi(false)
        })
      }
    }
  }, [estado, loading])

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
        setLoadingComponents,
        setNotificaciones,
        notificaciones,
        estado,
        setEstado,
        totalNotificaciones,
        loadingNotifi
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext
