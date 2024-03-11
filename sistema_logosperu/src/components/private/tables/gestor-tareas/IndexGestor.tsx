import { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import {
  imagen1,
  imagen10,
  imagen11,
  imagen12,
  imagen13,
  imagen14,
  imagen15,
  imagen16,
  imagen17,
  imagen18,
  imagen19,
  imagen2,
  imagen20,
  imagen21,
  imagen22,
  imagen23,
  imagen3,
  imagen4,
  imagen5,
  imagen6,
  imagen7,
  imagen8,
  imagen9
} from '../../../shared/Images'
import { IoCalendarOutline, IoPersonOutline } from 'react-icons/io5'
import useAuth from '../../../../hooks/useAuth'
import { Link } from 'react-router-dom'
import { isSameDay, format } from 'date-fns'
import moment from 'moment'
import { es } from 'date-fns/locale'
import Swal from 'sweetalert2'
import { Global } from '../../../../helper/Global'
import axios from 'axios'
import { Loading } from '../../../shared/Loading'
import { RiFolderSharedLine } from 'react-icons/ri'
import { GrNotification } from 'react-icons/gr'

export const IndexGestor = (): JSX.Element => {
  const { setTitle, auth, setOpenModalShared } = useAuth()
  const [events, setEvents] = useState<Event[]>([])
  const [loading, setLoading] = useState(true)
  const totalImages = 23
  const getImageUrl = (index: number): string => {
    // Asegúrate de tener todas las imágenes importadas
    const images = [
      imagen1,
      imagen2,
      imagen3,
      imagen4,
      imagen5,
      imagen6,
      imagen7,
      imagen8,
      imagen9,
      imagen10,
      imagen11,
      imagen12,
      imagen13,
      imagen14,
      imagen15,
      imagen16,
      imagen17,
      imagen18,
      imagen19,
      imagen20,
      imagen21,
      imagen22,
      imagen23
    ]
    // Calcula el índice basado en la longitud de las imágenes
    const calculatedIndex = index % totalImages
    // Devuelve la URL de la imagen correspondiente
    return images[calculatedIndex]
  }

  const token = localStorage.getItem('token')

  const updateCita = async (updatedEvents: Event[]): Promise<void> => {
    const data = new FormData()
    data.append('gestor_tareas', JSON.stringify(updatedEvents))
    data.append('_method', 'PUT')
    try {
      const respuesta = await axios.post(
        `${Global.url}/updateGestorTareas/${auth.id}`,
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
        getTareas()
      } else {
        Swal.fire('Error al guardar', '', 'error')
      }
    } catch (error) {
      Swal.fire('Error', '', 'error')
    }
  }

  const getTareas = async (): Promise<void> => {
    const request = await axios.get(`${Global.url}/getTareas/${auth.id}`, {
      headers: {
        Authorization: `Bearer ${
          token !== null && token !== '' ? `Bearer ${token}` : ''
        }`
      }
    })
    if (request.data[0].gestor_tareas) {
      const parsedEvents = JSON.parse(request.data[0].gestor_tareas).map(
        (event: any) => ({
          ...event,
          start: moment(event.start).toDate(),
          end: moment(event.end).toDate()
        })
      )
      setEvents(parsedEvents)
    }
    setLoading(false)
  }

  const handleAddEvent = (): void => {
    const currentDate = new Date()
    const hoy = new Date()
    currentDate.setHours(9, 0, 0, 0)
    // Verificar si ya hay un evento con la misma fecha
    const hasDuplicateDate = events.some((event: any) =>
      isSameDay(event.start, currentDate)
    )
    if (hasDuplicateDate) {
      // Puedes manejar la lógica de error aquí, mostrar un mensaje, etc.
      Swal.fire('Ya existe un tablero para este día', '', 'warning')
      return
    }
    setEvents((prevEvents) => {
      const updatedEvents = [
        ...prevEvents,
        {
          id: uuidv4(),
          title: 'Tablero de tareas',
          start: currentDate,
          end: currentDate,
          fecha: hoy,
          contenido: null
        } as unknown as Event
      ]
      updateCita(updatedEvents)
      return updatedEvents
    })
  }
  const fechaActual = new Date() // Tu variable que contiene la fecha actual

  useEffect(() => {
    getTareas()
    setTitle('Logos Perú')
  }, [])

  const eventos = [...events]

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
      <section className="w-full h-[90vh] px-6 relative">
        <div className="pt-0 md:p-6 flex flex-col">
          <div className="flex flex-col-reverse gap-2 md:gap-0 items-center md:flex-row justify-between">
            <div className="flex gap-10">
              <p className="flex items-center gap-3 text-base md:text-lg font-semibold text-cyan-700 cursor-pointer">
                <IoPersonOutline className="text-xl" /> Tus tableros
              </p>
              <Link
                to="/admin/gestor-tareas/calendario"
                className="flex items-center gap-3 text-base md:text-lg font-semibold text-black hover:text-cyan-700 transition-colors cursor-pointer"
              >
                <IoCalendarOutline className="text-xl" /> Calendario
              </Link>
              <Link
                to="/admin/gestor-tareas/compartidos"
                className="flex items-center gap-3 text-base md:text-lg font-semibold text-black hover:text-cyan-700 transition-colors cursor-pointer"
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
            <p className="text-mds first-letter:uppercase md:text-lg font-semibold text-gray-400 transition-colors cursor-pointer">
              {format(fechaActual, 'MMMM-yyyy', { locale: es })}
            </p>
          </div>

          {loading
            ? <Loading />
            : (
            <section className="mt-4 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-5 2xl:grid-cols-6 relative">
              <div
                onClick={handleAddEvent}
                className={
                  'w-full h-[100px] md:h-[150px] bg-center overflow-hidden rounded-md p-4 before:bg-black/40 before:inset-0 before:absolute relative  hover:before:bg-black/35 transition-colors before:transition-colors cursor-pointer'
                }
              >
                <p className="text-sm md:text-lg text-white font-bold absolute inset-0 w-full h-full m-auto flex items-center justify-center mb-1">
                  Crear nuevo tablero
                </p>
              </div>
              {eventos?.reverse().map((producto: any, index: number) => (
                <Link
                  // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
                  to={`${auth.id}/view/${producto.id}/image/${index}`}
                  key={producto.id}
                  style={{
                    backgroundImage: `url(${getImageUrl(index) ?? ''})`
                  }}
                  className={
                    'w-full h-[100px] overflow-hidden md:h-[150px] bg-center rounded-md p-4 before:bg-black/30 before:inset-0 before:absolute relative  hover:before:bg-black/10 transition-colors before:transition-colors cursor-pointer'
                  }
                >
                  <p className="text-sm md:text-lg text-white font-bold absolute">
                    {format(new Date(producto.fecha), 'd/MM/yyyy')}
                  </p>
                </Link>
              ))}
            </section>
              )}
        </div>
      </section>
    </>
  )
}
