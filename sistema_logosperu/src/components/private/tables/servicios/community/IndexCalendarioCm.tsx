/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useState, type Dispatch, type SetStateAction } from 'react'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import 'moment/locale/es'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import axios from 'axios'
import Swal from 'sweetalert2'
import { v4 as uuidv4 } from 'uuid'
import { Global } from '../../../../../helper/Global'
import { ModalDescripcion } from './ModalDescripcion'
import { toast } from 'sonner'
import { useParams } from 'react-router-dom'
import useAuth from '../../../../../hooks/useAuth'
import { ModalInformacion } from './modals/ModalInformacion'

moment.locale('es')
const localizer = momentLocalizer(moment) // Importa el locale español

interface valuesDatos {
  nombres: string
  email: string
  correo: string
  celular: string
  fecha: string
  hora_acta: string
  nombre_marca: string
  archivos: string
  id_contrato: string
  fecha_fin: string
  fecha_inicio: string
  observaciones: string
  comunnity: string
}

moment.updateLocale('es', null) // Limpiar configuraciones previas
moment.locale('es', {
  months:
    'Enero_Febrero_Marzo_Abril_Mayo_Junio_Julio_Agosto_Septiembre_Octubre_Noviembre_Diciembre'.split(
      '_'
    ),
  monthsShort: 'ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic'.split('_'),
  weekdays: 'domingo_lunes_martes_miércoles_jueves_viernes_sábado'.split('_'),
  weekdaysShort: 'dom_lun_mar_mié_jue_vie_sáb'.split('_'),
  weekdaysMin: 'do_lu_ma_mi_ju_vi_sá'.split('_'),
  week: {
    dow: 1, // Monday is the first day of the week
    doy: 4 // The week that contains Jan 4th is the first week of the year
  }
})

export const IndexCalendarioCm = ({
  datos,
  getOneBrief,
  events,
  setEvents
}: {
  datos: valuesDatos
  getOneBrief: () => Promise<void>
  events: Event[]
  setEvents: Dispatch<SetStateAction<Event[]>>
}): JSX.Element => {
  const { id } = useParams()
  const { auth } = useAuth()
  const token = localStorage.getItem('token')
  const [loadingUpdate, setLoadingUpdate] = useState(false)
  const [disabledDates] = useState([datos?.fecha_inicio]) // Lista de fechas deshabilitadas
  console.log(datos)
  const [open, setOpen] = useState(false)
  const [openInformacion, setOpenInformacion] = useState(false)
  const [eventSelected, setEventSelected] = useState<any | null>(null)
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
  // @ts-expect-error
  const [selectedDate, setSelectedDate] = useState<Date | null>(Date.now())
  const workDayStart = new Date() // Fecha de inicio para el día de trabajo
  workDayStart.setHours(9, 0, 0, 0)
  const workDayEnd = new Date() // Fecha de fin para el día de trabajo
  workDayEnd.setHours(19, 0, 0, 0)
  // Función para formatear la fecha con el año seleccionado
  const formatDate = (): any => {
    return selectedDate ? moment(selectedDate).format('YYYY-MM') : ''
  }
  const components = {
    event: (props: any) => {
      const fechaActual = new Date()
      // Obtener la fecha de vencimiento de props.event
      const fechaVencimiento = new Date(props.event?.fecha_vencimiento)
      return (
        <>
          {props.event?.tipo == 'inicio'
            ? (
            <div
              className="cursor-pointer h-full hover:text-black/40 w-full transition-colors outline-none duration-300 break-words flex "
              rel="noreferrer"
            >
              <div
                className={
                  'div_cita px-1 h-full text-white bg-green-600 transition-colors rounded-t-md'
                }
              >
                <span className="block text-center">{props.title}</span>
              </div>
            </div>
              )
            : props.event?.tipo == 'solicitud_informacion'
              ? (
            <div
              className="cursor-pointer h-full hover:text-black/40 w-full transition-colors outline-none duration-300 break-words flex "
              rel="noreferrer"
              onClick={() => {
                setOpenInformacion(true)
                setEventSelected(props)
              }}
            >
              <div
                className={
                  'div_cita px-1 h-full text-white bg-gray-400 transition-colors rounded-t-md'
                }
              >
                <span className="block text-center">{props.title}</span>
              </div>
            </div>
                )
              : (
            <div
              className="cursor-pointer h-full hover:text-black/40 w-full transition-colors outline-none duration-300 break-words flex "
              rel="noreferrer"
              onClick={() => {
                setOpen(true)
                setEventSelected(props)
              }}
            >
              <div
                className={`div_cita px-1 h-full text-white 
            ${
              props.event?.publicado || fechaVencimiento < fechaActual ? 'bg-[#129990]' : 'bg-red-600'
            }   transition-colors rounded-t-md`}
              >
                <span className="block  ">{props.title}</span>
              </div>
            </div>
                )}
        </>
      )
    }
  }

  const updateCita = async (updatedEvents: Event[]): Promise<void> => {
    setLoadingUpdate(true)
    const data = new FormData()
    data.append('community', JSON.stringify(updatedEvents))
    data.append('_method', 'PUT')
    try {
      const respuesta = await axios.post(
        `${Global.url}/updateCalendarioComunnityVentas/${id ?? ''}`,
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
        toast.success('Evento guardado')
        getOneBrief()
      } else {
        toast.error('Error al guardar')
      }
    } catch (error) {
      console.log(error)
      toast.error('Error al guardar')
    } finally {
      setLoadingUpdate(false)
      setOpen(false)
    }
  }

  const handleSelectSlot = ({ start }: { start: any }): void => {
    const startEventDate = moment(start).format('DD/MM/YYYY')
    if (disabledDates.includes(startEventDate)) {
      return
    }
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
          descripcion: null,
          user: {
            name: auth.name,
            id: auth.id
          },
          comentarios: null
        }
        // Agregar el nuevo evento al array de eventos
        const updatedEvents: any = [...events, newEvent]
        setEvents(updatedEvents)
        // Actualizar la base de datos con el array de eventos actualizado
        await updateCita(updatedEvents)
      }
    })
  }

  const handleDateChange = (e: any): void => {
    const { value } = e.target
    const [year, month] = value.split('-').map(Number)
    if (year > 2022) {
      setSelectedDate(new Date(year, month - 1, 1))
    }
  }

  return (
    <>
      <section className="flex items-center justify-between border-b border-gray-300 h-[7%] py-1 md:py-0 lg:h-[10%] mx-1 md:px-8">
        <div className="flex gap-3 items-center ">
          <div className="w-12 md:w-14 h-full md:h-14 rounded-md bg-gradient-to-r from-[#129990] to-green-400 flex justify-center text-black text-base md:text-2xl items-center font-extrabold">
            {datos.nombre_marca.trim() !== ''
              ? datos.nombre_marca.charAt(0).toUpperCase()
              : ''}
          </div>
          <div className="flex flex-col justify-center">
            <h1 className="text-black font-bold text-sm md:text-lg">
              CALENDARIO COMMUNITY MANAGER
            </h1>
            <div className="flex gap-2 justify-start">
              <span className="text-gray-700 font-medium text-sm">
                {datos.nombre_marca}
              </span>
            </div>
          </div>
        </div>
        <input
          type="month"
          value={formatDate()}
          onChange={handleDateChange}
          className="bg-transparent text-black"
          min="2023-01"
          max="2030-12"
        />
      </section>
      <section className="w-full h-[90%] px-0 lg:px-6 pb-4 relative content_modal">
        <>
          <div className="w-full h-full px-2 lg:px-4">
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
        <ModalDescripcion
          loadingUpdate={loadingUpdate}
          getOneBrief={getOneBrief}
          setEvents={setEvents}
          events={events}
          open={open}
          setOpen={setOpen}
          eventSelected={eventSelected}
          setLoadingUpdate={setLoadingUpdate}
          marca={datos?.nombre_marca}
        />
        <ModalInformacion
          loadingUpdate={loadingUpdate}
          getOneBrief={getOneBrief}
          setEvents={setEvents}
          events={events}
          open={openInformacion}
          setOpen={setOpenInformacion}
          eventSelected={eventSelected}
          setLoadingUpdate={setLoadingUpdate}
        />
      </section>
    </>
  )
}
