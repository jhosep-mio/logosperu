/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useEffect, useState } from 'react'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import 'moment/locale/es'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import { ViewHorario } from './ViewHorario'
import { cn } from '../../../../shared/cn'
import axios from 'axios'
import { Global } from '../../../../../helper/Global'
import { Loading } from '../../../../shared/Loading'

moment.locale('es')

export const IndexCalendarioLaboral = (): JSX.Element => {
  const token = localStorage.getItem('token')
  const [loading, setLoading] = useState(true)

  const getHorarioLaboral = async (): Promise<void> => {
    try {
      const request = await axios.get(`${Global.url}/allHorarioLaboral`, {
        headers: {
          Authorization: `Bearer ${token !== null && token !== '' ? token : ''}`
        }
      })
      if (request.data.length > 0) { // Verificar si hay datos en la respuesta
        const eventosCombinados = request.data.reduce((accumulator: any, usuario: any) => {
          const eventosUsuario = JSON.parse(usuario.horario_laboral)
          return accumulator.concat(eventosUsuario)
        }, [])
        setEvents(eventosCombinados)
      } else {
        console.log('No se encontraron registros de horario laboral')
      }
    } catch (error) {
      console.error('Error al obtener el horario laboral:', error)
    } finally {
      setLoading(false)
    }
  }
  const localizer = momentLocalizer(moment)

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
  const [events, setEvents] = useState<Event[]>([])
  const [open, setOpen] = useState({ estado: false, evento: null })
  const [selectedDate, setSelectedDate] = useState<Date | null>()

  const handleDateChange = (e: any): void => {
    const { value } = e.target
    const [year, month] = value.split('-').map(Number)
    if (year > 2023) {
      setSelectedDate(new Date(year, month - 1, 1))
    }
  }

  useEffect(() => {
    getHorarioLaboral()
  }, [])

  const formatDate = (): any => {
    return selectedDate ? moment(selectedDate).format('YYYY-MM') : ''
  }

  const components = {
    event: (props: any) => {
      return (
        <div
          className="cursor-pointer h-full hover:text-black/40 w-fit transition-colors outline-none duration-300 break-words flex "
          rel="noreferrer"
          onClick={() => { setOpen({ estado: true, evento: props }) }}
        >
          <div
            className={ cn('div_cita px-1 h-full text-white bg-[#D33741] transition-colors rounded-t-md') }
          >
            <span className="block lowercase first-letter:uppercase text-sm">
              {props.title}
            </span>
          </div>
        </div>
      )
    }
  }

  return (
    <>
      <section className="flex items-center justify-between border-b border-gray-300 h-[7%] py-1 md:py-0 lg:h-[10%] mx-1 md:px-8">
        <div className="flex gap-3 items-center ">
          <div className="w-12 md:w-14 h-full md:h-14 rounded-md bg-gradient-to-r from-[#D33741] to-red-400 flex justify-center text-white text-base md:text-2xl items-center font-extrabold">
            H
          </div>
          <div className="flex flex-col justify-center">
            <h1 className="text-black font-bold text-sm md:text-lg">
              HORARIO LABORAL
            </h1>
            <div className="flex gap-2 justify-start">
              <span className="text-gray-700 font-medium text-sm">
                Logos Perú
              </span>
            </div>
          </div>
        </div>
        <div className="flex gap-6 justify-end">
          <input
            type="month"
            value={formatDate()}
            onChange={handleDateChange}
            className="bg-transparent text-black"
            min="2023-01"
            max="2030-12"
          />
        </div>
      </section>
      {loading
        ? <Loading/>
        : <section className='px-8 py-4 w-full h-[90%]'>
        <Calendar
            className="calendario_cm2 text-black"
            localizer={localizer}
            events={events}
            startAccessor={(event: any) => { return new Date(event.start) }}
            endAccessor="end"
            selectable
            messages={messages}
            views={['day', 'month', 'week', 'agenda']}
            defaultView="month"
            date={selectedDate}
            components={components}
        />
      </section>}
      <ViewHorario open={open} setOpen={setOpen}/>
    </>
  )
}
