import { useState, useEffect } from 'react'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import 'moment/locale/es'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import {
  type usurioValues,
  type errorValues,
  type ValuesPreventaModificate
} from '../../../shared/schemas/Interfaces'
import { Loading } from '../../../shared/Loading'
import axios from 'axios'
import { Global } from '../../../../helper/Global'
import Swal from 'sweetalert2'
import { AnimatePresence } from 'framer-motion'
import { AlertSucess } from '../../../shared/alerts/AlertSucess'
import { ModalDescripcion } from './modals/ModalDescripcion'
import { v4 as uuidv4 } from 'uuid'

moment.locale('es')
const localizer = momentLocalizer(moment) // Importa el locale español

interface values {
  title: string
  start: Date
  end: Date
  client?: ValuesPreventaModificate
  user?: usurioValues
}

export const IndexCalendarioCm = (): JSX.Element => {
  const token = localStorage.getItem('token')
  const [loading, setLoading] = useState(true)
  const [loadingUpdate, setLoadingUpdate] = useState(false)
  const [open, setOpen] = useState(false)
  const [showError, setShowError] = useState<errorValues | null>(null)
  const [events, setEvents] = useState<Event[]>([])
  const [eventSelected, setEventSelected] = useState<any | null>(null)
  const [colaboradores, setColaboradores] = useState([])
  const messages = {
    allDay: 'Todo el día',
    previous: 'Anterior',
    next: 'Siguiente',
    today: 'Hoy',
    month: 'Mes',
    week: 'Semana',
    day: 'Día',
    agenda: 'Agenda',
    date: 'Fecha',
    time: 'Hora',
    event: 'Evento',
    noEventsInRange: 'No tiene eventos.', // Nuevo mensaje
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    showMore: (total: any) => `+ Ver más (${total})`
  }
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const workDayStart = new Date() // Fecha de inicio para el día de trabajo
  workDayStart.setHours(9, 0, 0, 0)
  const workDayEnd = new Date() // Fecha de fin para el día de trabajo
  workDayEnd.setHours(19, 0, 0, 0)

  const getColaboradores = async (): Promise<void> => {
    const request = await axios.get(`${Global.url}/getUsuarios`, {
      headers: {
        Authorization: `Bearer ${token !== null && token !== '' ? token : ''}`
      }
    })
    setColaboradores(request.data)
  }
  // Función para formatear la fecha con el año seleccionado
  const formatDate = (): any => {
    return selectedDate ? moment(selectedDate).format('YYYY-MM') : ''
  }

  const getCitas = async (): Promise<void> => {
    const request = await axios.get(`${Global.url}/getGestorComunnity/1`, {
      headers: {
        Authorization: `Bearer ${
          token !== null && token !== '' ? `Bearer ${token}` : ''
        }`
      }
    })
    if (request.data[0].community) {
      const parsedEvents = JSON.parse(request.data[0].community).map(
        (event: any) => ({
          ...event,
          start: moment(event.start).toDate(),
          end: moment(event.end).toDate()
        })
      )
      setEvents(parsedEvents)
    }
  }

  const components = {
    event: (props: values) => {
      return (
        <div
          className="cursor-pointer h-full hover:text-black/40 w-full transition-colors outline-none duration-300 break-words flex "
          rel="noreferrer"
          onClick={() => { setOpen(true); setEventSelected(props) }}
        >
          <div className={`div_cita px-1 h-full text-white 
          ${
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            // eslint-disable-next-line react/prop-types
            props.event?.publicado ? 'bg-[#129990]' : 'bg-red-600'}   transition-colors rounded-t-md`}>
            <span className="block lowercase first-letter:uppercase">
              {props.title}
            </span>
          </div>
        </div>
      )
    }
  }

  const updateCita = async (updatedEvents: Event[]): Promise<void> => {
    setLoadingUpdate(true)
    const data = new FormData()
    data.append('community', JSON.stringify(updatedEvents))
    data.append('_method', 'PUT')
    try {
      const respuesta = await axios.post(`${Global.url}/updateGestorComunnity/1`, data, {
        headers: {
          Authorization: `Bearer ${
            token !== null && token !== '' ? token : ''
          }`
        }
      })

      if (respuesta.data.status == 'success') {
        setShowError({
          estado: 'success',
          texto: 'Evento guardado'
        })
      } else {
        Swal.fire('Error al guardar', '', 'error')
      }
    } catch (error) {
      Swal.fire('Error', '', 'error')
    } finally {
      setLoadingUpdate(false)
      setOpen(false)
    }
  }

  const handleSelectSlot = ({ start }: { start: any }): void => {
    setSelectedDate(start)
    Swal.fire({
      title: 'TITULO DEL EVENTO',
      input: 'text',
      showCancelButton: true,
      confirmButtonText: 'Guardar',
      cancelButtonText: 'Cancelar',
      allowOutsideClick: false,
      inputValidator: (value) => {
        if (!value) {
          return '¡Debe ingresar un título!'
        }
      }
    }).then(async (result) => {
      if (result.isConfirmed) {
        const newEvent = {
          id: uuidv4(),
          title: result.value,
          publicado: false,
          start,
          end: start,
          descripcion: null
        }
        // Agregar el nuevo evento al array de eventos
        const updatedEvents: any = [...events, newEvent]
        setEvents(updatedEvents)
        // Actualizar la base de datos con el array de eventos actualizado
        await updateCita(updatedEvents)
      }
    })
  }

  useEffect(() => {
    Promise.all([
      getCitas(),
      getColaboradores()
    ]).then(() => {
      setLoading(false)
    })
  }, [])

  useEffect(() => {
    moment.updateLocale('es', null) // Limpiar configuraciones previas
    moment.locale('es', {
      months:
        'Enero_Febrero_Marzo_Abril_Mayo_Junio_Julio_Agosto_Septiembre_Octubre_Noviembre_Diciembre'.split(
          '_'
        ),
      monthsShort: 'ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic'.split('_'),
      weekdays: 'domingo_lunes_martes_miércoles_jueves_viernes_sábado'.split(
        '_'
      ),
      weekdaysShort: 'dom_lun_mar_mié_jue_vie_sáb'.split('_'),
      weekdaysMin: 'do_lu_ma_mi_ju_vi_sá'.split('_'),
      week: {
        dow: 1, // Monday is the first day of the week
        doy: 4 // The week that contains Jan 4th is the first week of the year
      }
    })
  }, [])

  useEffect(() => {
    setTimeout(() => {
      if (showError != null) {
        setShowError(null)
      }
    }, 3000)
  }, [showError])

  const handleDateChange = (e: any): void => {
    const { value } = e.target
    const [year, month] = value.split('-').map(Number)
    if (year > 2023) {
      setSelectedDate(new Date(year, month - 1, 1))
    }
  }

  return (
    <>
      <section className="flex items-center justify-between border-b border-gray-300 h-[7vh] py-1 md:py-0 lg:h-[10vh] mx-1 md:px-8">
        <div className="flex gap-3 items-center ">
          <div className="w-12 md:w-14 h-full md:h-14 rounded-md bg-gradient-to-r from-[#129990] to-green-400 flex justify-center text-black text-base md:text-2xl items-center font-extrabold">
            C
          </div>
          <div className="flex flex-col justify-center">
            <h1 className="text-black font-bold text-sm md:text-lg">
              CALENDARIO COMMUNITY MANAGER
            </h1>
            <div className="flex gap-2 justify-start">
              <span className="text-gray-600 text-sm">Logos Perú</span>
            </div>
          </div>
        </div>
        <input
          type="month"
          value={formatDate()}
          onChange={handleDateChange}
          className='bg-transparent text-black'
          min="2024-01"
          max="2030-12"
        />
      </section>
      <section className="w-full h-[90vh] px-6 pb-4 relative">
        {loading
          ? <Loading />
          : (
          <>
            <div className="w-full h-full px-4">
              <Calendar
                className="calendario_cm text-black"
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
                selectable
                messages={messages}
                views={['agenda', 'month']}
                defaultView="month"
                min={workDayStart} // Establecer la hora de inicio del día
                max={workDayEnd}
                date={selectedDate}
                components={components} // Use the custom event renderer
                onSelectSlot={handleSelectSlot}
              />
            </div>
          </>
            )}
        <ModalDescripcion loadingUpdate={loadingUpdate} setEvents={setEvents} events={events} open={open} setOpen={setOpen} eventSelected={eventSelected} colaboradores={colaboradores} setLoadingUpdate={setLoadingUpdate}/>
        <AnimatePresence>
          {showError != null && <AlertSucess showError={showError} />}
        </AnimatePresence>
      </section>
    </>
  )
}
