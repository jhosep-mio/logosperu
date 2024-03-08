import { useState, useEffect } from 'react'
import 'moment/locale/es'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import { type DuoContent, type errorValues } from '../../../shared/schemas/Interfaces'
import { Loading } from '../../../shared/Loading'
import axios from 'axios'
import { Global } from '../../../../helper/Global'
import { AnimatePresence } from 'framer-motion'
import { AlertSucess } from '../../../shared/alerts/AlertSucess'
import { Link } from 'react-router-dom'
import useAuth from '../../../../hooks/useAuth'
import { IoCalendarOutline, IoPersonOutline } from 'react-icons/io5'
import { TbMessage2Check } from 'react-icons/tb'
import { ModalCompartido } from './components/compartidos/ModalCompartido'
import { GrNotification } from 'react-icons/gr'
import { RiFolderSharedLine } from 'react-icons/ri'

export const IndexCompartidos = (): JSX.Element => {
  const token = localStorage.getItem('token')
  const [loading, setLoading] = useState(true)
  const { auth, setOpenModalShared } = useAuth()
  const [allTareas, setAllTares] = useState([])
  const [tasks, setTasks] = useState([])
  const [showError, setShowError] = useState<errorValues | null>(null)
  const [open, setOpen] = useState(false)
  const [colaboradores, setColaboradores] = useState<never[]>([])
  const [events, setEvents] = useState<[]>([])
  const [idCompartido, setIdCompartido] = useState()
  const [idTable, setIdTable] = useState<string | null>(null)
  const [contenidoSeleccionado, setContenidoSeleccionado] = useState<DuoContent | null>(null)
  const getColaboradores = async (): Promise<void> => {
    const request = await axios.get(`${Global.url}/indexAllToGestor`, {
      headers: {
        Authorization: `Bearer ${token !== null && token !== '' ? token : ''}`
      }
    })
    setColaboradores(request.data)
  }
  const getCitas = async (): Promise<void> => {
    const request = await axios.get(
      `${Global.url}/indexSharedTasks/${auth.id}`,
      {
        headers: {
          Authorization: `Bearer ${
            token !== null && token !== '' ? `Bearer ${token}` : ''
          }`
        }
      }
    )
    console.log(request)
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
    console.log(request)
    setAllTares(request.data)
  }

  useEffect(() => {
    Promise.all([getColaboradores(), getTareas(), getCitas()]).then(() => {
      setLoading(false)
    })
  }, [])

  useEffect(() => {
    setTimeout(() => {
      if (showError != null) {
        setShowError(null)
      }
    }, 3000)
  }, [showError])

  const TaskComponent = (date: string): JSX.Element => {
    const fecha = new Date(date)
    // Obtener el día, mes y año de la fecha
    const dia = fecha.getDate()
    const mes = fecha.getMonth() + 1 // Se suma 1 porque los meses van de 0 a 11 en JavaScript
    const anio = fecha.getFullYear()

    // Formatear la fecha como "dia/mes/año"
    const fechaFormateada = `${dia}/${mes}/${anio}`

    return (
        <div>
            {/* Mostrar la fecha formateada */}
            <p className="text-sm text-gray-500">
                {fechaFormateada}
            </p>
        </div>
    )
  }

  const updateCita = async (updatedEvents: Event[]): Promise<void> => {
    const data = new FormData()
    data.append('gestor_tareas', JSON.stringify(updatedEvents))
    data.append('_method', 'PUT')
    try {
      const respuesta = await axios.post(
        `${Global.url}/updateGestorTareas/${idCompartido ?? ''}`,
        data,
        {
          headers: {
            Authorization: `Bearer ${
              token !== null && token !== '' ? token : ''
            }`
          }
        }
      )
      if (respuesta.data.status == 'success') {
        // getTareas()
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <div className="flex gap-3 items-center border-b border-gray-300 h-[7vh] py-1 md:py-0 lg:h-[10vh] mx-1 md:px-8">
        <div className="w-12 md:w-14 h-full md:h-14 rounded-md bg-gradient-to-r from-cyan-500 to-blue-400 flex justify-center text-black text-base md:text-2xl items-center font-extrabold">
          {auth.name.trim() !== '' ? auth.name.charAt(0).toUpperCase() : ''}
        </div>
        <div className="flex flex-col justify-center">
          <h1 className="text-black font-bold text-sm md:text-lg">
            Espacio de trabajo de {auth.name.toUpperCase()}
          </h1>
          <div className="flex gap-2 justify-start">
            <span className="text-gray-600 text-sm">Logos Perú</span>
          </div>
        </div>
      </div>
      <section className="w-full h-[90vh] p-6 relative">
        <div className="absolute flex flex-col-reverse px-6 gap-2 md:gap-0 items-center md:flex-row justify-between">
          <div className="flex gap-10">
            <Link
              to="/admin/gestor-tareas"
              className="flex items-center gap-3 text-base md:text-lg font-semibold text-black hover:text-cyan-700 transition-colors cursor-pointer"
            >
              <IoPersonOutline className="text-xl" /> Tus tableros
            </Link>
            <Link
              to="/admin/gestor-tareas/calendario"
              className="flex items-center gap-3 text-base md:text-lg font-semibold text-black hover:text-cyan-700  transition-colors cursor-pointer"
            >
              <IoCalendarOutline className="text-xl" /> Calendario
            </Link>
            <Link
              to="compartidos"
              className="flex items-center gap-3 text-base md:text-lg font-semibold text-cyan-700 transition-colors cursor-pointer"
            >
              <RiFolderSharedLine className="text-xl" /> Compartidos
            </Link>
            <button
                type='button'
                onClick={() => { setOpenModalShared(true) }}
                className="flex items-center gap-3 text-base md:text-lg font-semibold text-black hover:text-cyan-700 transition-colors cursor-pointer"
              >
                <GrNotification className="text-xl" /> Notificaciones
              </button>
          </div>
        </div>
        {loading
          ? (
          <Loading />
            )
          : (
          <>
            <div className="w-full h-full px-6 pt-16">
              <div className="grid grid-cols-4 gap-4">
                {tasks?.map((task: any) => {
                  const idTask = JSON.parse(task.task).idTablero
                  const idContenido = JSON.parse(task.task).idTarjeta
                  const namCreated = JSON.parse(task.task).authName
                  const idCreated = JSON.parse(task.task).authId
                  let tareasFiltradas: any = {}
                  let contenidoPrincipal: any = {}
                  let gestorTareas: any = []
                  allTareas.forEach((objeto: any) => {
                    if (objeto) {
                      gestorTareas = JSON.parse(objeto.gestor_tareas)
                      gestorTareas.forEach((tarea: any) => {
                        if (tarea.id === idTask) {
                          tarea.contenido.forEach((contenido: any) => {
                            contenidoPrincipal = (contenido)
                            contenido.contenido.forEach(
                              (contenidoFinal: any) => {
                                if (contenidoFinal.id == idContenido) {
                                  tareasFiltradas = contenidoFinal
                                }
                              }
                            )
                          })
                        }
                      })
                    }
                  })
                  return (
                    <div
                      className="w-full block group relative cursor-pointer"
                      key={task.id}
                      onClick={() => { setOpen(true); setContenidoSeleccionado({ contexto: contenidoPrincipal, contenido: tareasFiltradas }); setEvents(gestorTareas); setIdCompartido(idCreated); setIdTable(idTask) }}
                    >
                      <div className="flex flex-col w-full">
                        <div className="bg-white group-hover:bg-[#e6e6e642] transition-colors  w-full p-3 flex h-[110px] border_inner2 rounded-lg">
                          <div className="w-[40px] h-1/2 flex gap-2">
                            <span className="flex  p-2 rounded-lg">
                              <TbMessage2Check className="text-2xl text-main/80" />
                            </span>
                          </div>
                          <div className="w-full h-full px-2 flex flex-col justify-between">
                            <div>
                                <h1 className="text-black font-bold line-clamp-1">
                                    {tareasFiltradas.titulo}
                                </h1>
                                {TaskComponent(task.created_at)}
                            </div>
                              <span className="text-gray-600 text-sm mt-1 line-clamp-2">
                                Compartido por {namCreated}
                              </span>
                            </div>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </>
            )}
        <ModalCompartido open={open} setOpen={setOpen} colaboradores={colaboradores} contenidoSeleccionado={contenidoSeleccionado} events={events} updateCita={updateCita} idTablero={idTable}/>
        <AnimatePresence>
          {showError != null && <AlertSucess showError={showError} />}
        </AnimatePresence>
      </section>
    </>
  )
}
