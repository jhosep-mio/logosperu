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
import { type errorValues, type notificacionesValues, type RolsValues } from '../components/shared/schemas/Interfaces'
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
  totalNotiClientes: number
  totalNotificaciones3: number
  setShowError: Dispatch<SetStateAction<errorValues | null>>
  showError: errorValues | null
  openModalShared: boolean
  setOpenModalShared: Dispatch<SetStateAction<boolean>>
  tasks: never[]
  allTareas: never[]
  getShared: (id: string) => Promise<void>
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
  const [showError, setShowError] = useState<errorValues | null>(null)
  const [estado, setEstado] = useState(0)
  const [loadingComponents, setLoadingComponents] = useState(false)
  const [openModalShared, setOpenModalShared] = useState(false)
  const token = localStorage.getItem('token')
  const user = localStorage.getItem('user')
  const [loadingNotifi, setLoadingNotifi] = useState(true)
  const [, setTotalRegistros] = useState(0)
  const [totalNotiClientes, setTotalNotiClientes] = useState(0)
  const [totalNotificaciones, setTotalRegistros2] = useState(0)
  const [totalNotificaciones3, setTotalRegistros3] = useState(0)
  const [notificaciones, setNotificaciones] = useState<notificacionesValues[]>(
    []
  )
  const [allTareas, setAllTares] = useState([])
  const [tasks, setTasks] = useState([])

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
    } catch (error: any) {
      if (
        typeof error.request?.response == 'string' &&
        error.request.response.includes('Unauthenticated')
      ) {
        localStorage.clear()
        setAuth({ id: '', name: '', email: '', email_alter: '', pass_email: '', firma: '', id_rol: 0 })
        navigate('/login')
      }
    }
  }

  const getDataGeneral = async (): Promise<void> => {
    const today = new Date() // Obtiene la fecha actual
    let dateOne = new Date(today.getFullYear(), today.getMonth(), today.getDate()) // Mismo día del mes actual
    let dateTwo = new Date(today.getFullYear(), today.getMonth(), today.getDate()) // Mismo día del mes actual
    dateOne.setMonth(dateOne.getMonth() - 1) // Ajusta al mes anterior
    dateTwo.setMonth(dateTwo.getMonth() - 1) // Ajusta al mes anterior
    // Si estamos en enero, ajusta al mismo día del mes anterior del año pasado
    if (today.getMonth() === 0) {
      dateOne = new Date(today.getFullYear() - 1, 11, today.getDate())
      dateTwo = new Date(today.getFullYear() - 1, 11, today.getDate())
    }
    // Agrega un día a la primera fecha
    dateOne.setDate(dateOne.getDate() + 1)
    // Agrega tres días a la segunda fecha
    dateTwo.setDate(dateTwo.getDate() + 3)
    // Formatea las fechas en el formato deseado (dd/mm/yyyy)
    const formattedFechaInicio = `${dateOne.getDate()}/${dateOne.getMonth() + 1}/${dateOne.getFullYear()}`
    const formattedFechaFin = `${dateTwo.getDate()}/${dateTwo.getMonth() + 1}/${dateTwo.getFullYear()}`
    const data = new FormData()
    data.append('fechaInicio', formattedFechaInicio)
    data.append('fechaFin', formattedFechaFin)

    const request = await axios.post(`${Global.url}/indexToPorVencer`, data, {
      headers: {
        Authorization: `Bearer ${token !== null && token !== '' ? token : ''}`
      }
    })
    setNotificaciones(request.data)
    setTotalRegistros3(request.data.length)
  }

  const getShared = async (id: string): Promise<void> => {
    const request = await axios.get(
        `${Global.url}/indexSharedTasksToNotificate/${id}`,
        {
          headers: {
            Authorization: `Bearer ${
              token !== null && token !== '' ? `Bearer ${token}` : ''
            }`
          }
        }
    )
    setTasks(request.data)
  }

  const getTareas = async (): Promise<void> => {
    const request = await axios.get(`${Global.url}/indexToGestor`, {
      headers: {
        Authorization: `Bearer ${
              token !== null && token !== '' ? `Bearer ${token}` : ''
            }`
      }
    })
    setAllTares(request.data)
  }

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
      // PROYECTOS DE AGENCIA
      socket.on('mensaje', (data) => {
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
            // setLoading(false)
          })
        } else {
          Promise.all([
            getVentas(`getNotificacionesAll/${auth.id}/${auth.id_rol}`, setNotificaciones, setTotalRegistros)
          ]).then(() => {
            // setLoading(false)
          })
        }
      })
      //   DESCARGA DE ARCHIVOS
      socket.on('mensaje2', (data) => {
        if (auth.id == '8') {
          showNotification(data.nombre, data.contenido)
        }
        if (estado == 2) {
          Promise.all([
            getVentas('getNotificacionesToClientes', setNotificaciones, setTotalNotiClientes)
          ]).then(() => {
            setLoadingNotifi(false)
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

  useEffect(() => {
    setLoadingNotifi(true)
    if (!loading) {
      getShared(auth.id)
      getTareas()
      if (estado == 0) {
        Promise.all([

          getVentas(`getNotificaciones/${auth.id}/${auth.id_rol}`, setNotificaciones, setTotalRegistros2)
        ]).then(() => {
          setLoadingNotifi(false)
        })
      } else if (estado == 1) {
        Promise.all([
          getVentas(`getNotificacionesAll/${auth.id}/${auth.id_rol}`, setNotificaciones, setTotalRegistros)
        ]).then(() => {
          setLoadingNotifi(false)
        })
      } else if (estado == 2) {
        Promise.all([
          getVentas('getNotificacionesToClientes', setNotificaciones, setTotalNotiClientes)
        ]).then(() => {
          setLoadingNotifi(false)
        })
      } else if (estado == 3) {
        Promise.all([
          getDataGeneral()
        ]).then(() => {
          setLoadingNotifi(false)
        })
      }
    }
  }, [estado, loading])

  useEffect(() => {
    setLoadingNotifi(true)
    if (!loading) {
      if (estado == 0) {
        Promise.all([
          getVentas(`getNotificaciones/${auth.id}/${auth.id_rol}`, setNotificaciones, setTotalRegistros2)
        ]).then(() => {
          setLoadingNotifi(false)
        })
      } else if (estado == 1) {
        Promise.all([
          getVentas(`getNotificacionesAll/${auth.id}/${auth.id_rol}`, setNotificaciones, setTotalRegistros)
        ]).then(() => {
          setLoadingNotifi(false)
        })
      } else if (estado == 2) {
        Promise.all([
          getVentas('getNotificacionesToClientes', setNotificaciones, setTotalNotiClientes)
        ]).then(() => {
          setLoadingNotifi(false)
        })
      } else if (estado == 3) {
        Promise.all([
          getDataGeneral()
        ]).then(() => {
          setLoadingNotifi(false)
        })
      }
    }
  }, [])

  useEffect(() => {
    const getData = async (): Promise<void> => {
      const request = await axios.get(`${Global.url}/getNotificacionesToClientes`, {
        headers: {
          Authorization: `Bearer ${token !== null && token !== '' ? token : ''}`
        }
      })
      setTotalNotiClientes(request.data.length)
    }
    getDataGeneral()
    getData()
  }, [])

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
        loadingNotifi,
        totalNotiClientes,
        totalNotificaciones3,
        showError,
        setShowError,
        openModalShared,
        setOpenModalShared,
        tasks,
        allTareas,
        getShared
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext
