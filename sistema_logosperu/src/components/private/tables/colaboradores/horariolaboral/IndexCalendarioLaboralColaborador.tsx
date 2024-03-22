/* eslint-disable multiline-ternary */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useEffect, useState } from 'react'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import 'moment/locale/es'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import { cn } from '../../../../shared/cn'
import axios from 'axios'
import { Global } from '../../../../../helper/Global'
import { Loading } from '../../../../shared/Loading'
import { SlSizeFullscreen, SlSizeActual } from 'react-icons/sl'
import { useParams } from 'react-router-dom'
import Swal from 'sweetalert2'
import { v4 as uuidv4 } from 'uuid'
import useAuth from '../../../../../hooks/useAuth'
import { ViewHorario2 } from './ViewHorario2'
moment.locale('es')

export const IndexCalendarioLaboralColaborador = (): JSX.Element => {
  const token = localStorage.getItem('token')
  const { id } = useParams()
  const [loading, setLoading] = useState(true)
  const { auth } = useAuth()
  const [activeDescription, setActiveDescription] = useState(false)
  const [festivos, setFestivos] = useState<Event[]>([])
  const [events, setEvents] = useState<Event[]>([])
  const [openDiasFestivos, setOpenDiasFestivos] = useState(false)

  const getHorarioLaboral = async (): Promise<void> => {
    try {
      const request = await axios.get(
        `${Global.url}/indexHorarioLaboral/${id ?? ''}`,
        {
          headers: {
            Authorization: `Bearer ${
              token !== null && token !== '' ? token : ''
            }`
          }
        }
      )
      if (request.data) {
        // setEvents(JSON.parse(request.data.horario_laboral))
        if (festivos) {
          const horario = JSON.parse(request.data.horario_laboral)
          const total = horario.concat(festivos)
          setEvents(total)
        } else {
          setEvents(JSON.parse(request.data.horario_laboral))
        }
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

  useEffect(() => {
    getHorarioLaboral()
  }, [festivos])

  const formatDate = (): any => {
    return selectedDate ? moment(selectedDate).format('YYYY-MM') : ''
  }
  const [fullView, setFullView] = useState(false)

  function onlyName (name: string): string {
    const primerEspacioIndex = name.indexOf(' ')
    if (primerEspacioIndex !== -1) {
      return name.substring(0, primerEspacioIndex)
    } else {
      return name
    }
  }

  const components = {
    event: (props: any) => {
      return (
        <div
          className="cursor-pointer w-full  overflow-hidden relative rounded-md h-full hover:text-black/40 transition-colors outline-none duration-300 break-words flex "
          rel="noreferrer"
          onClick={() => {
            if (props.event.modalidad != 'Dia festivo') {
              setOpen({ estado: true, evento: props })
              setActiveDescription(true)
              setOpenDiasFestivos(false)
            }
          }}
        >
          <span
            className={cn(
              'absolute top-0 w-[200%] h-[200%] block  z-[1]',
              props.event.modalidad == 'Presencial'
                ? 'bg-yellow-500'
                : props.event.modalidad == 'Home office'
                  ? 'bg-green-600'
                  : props.event.modalidad == 'Dia festivo'
                    ? 'bg-transparent'
                    : 'bg-[#54A9DC]'
            )}
          ></span>
          <div
            className={cn(
              'div_cita px-1 z-[1] h-full text-white transition-colors rounded-t-md bg-transparent'
            )}
          >
            <span
              className="block lowercase first-letter:uppercase text-[12px] md:text-sm"
            >
              <p className="hidden md:block">{props.title}</p>
              <p className="block md:hidden">{onlyName(props.title)}</p>
            </span>
          </div>
        </div>
      )
    }
  }
  // @ts-expect-error
  const festivosDates = festivos.map((feriado) => new Date(feriado.start))
  const customDayPropGetter = (date: any): any => {
    // Verificar si la fecha actual está en el array de festivosDates
    const isHoliday = festivosDates.some((holiday) => {
      return (
        holiday.getDate() === date.getDate() &&
        holiday.getMonth() === date.getMonth() &&
        holiday.getFullYear() === date.getFullYear()
      )
    })

    if (isHoliday) {
      return {
        className: 'bg-red-500/80 ' // Estilo para feriados
      }
    } else {
      return {} // No aplicar estilos especiales
    }
  }

  const handleSelectSlot = ({ start }: { start: any }): void => {
    setSelectedDate(start)
    Swal.fire({
      title: 'DIA FESTIVO',
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
          modalidad: 'Dia festivo',
          user: { name: auth.name, id: auth.id },
          title: result.value,
          timeRanges: null,
          start,
          end: start,
          detalle: null
        }
        // Agregar el nuevo evento al array de eventos
        const updatedEvents: any = [...festivos, newEvent]
        setFestivos(updatedEvents)
        // Actualizar la base de datos con el array de eventos actualizado
        // await updateCita(updatedEvents)
      }
    })
  }

  return (
    <>
      <section className="flex  items-center justify-between bg-white border-b border-gray-300 h-[7%] py-1 md:py-0 lg:h-[8%]  md:px-8">
        <div className="flex gap-3 items-center ">
          <div className="w-10 md:w-12 h-full md:h-12 rounded-md bg-gradient-to-r from-[#54A9DC] to-[#2989c4] flex justify-center text-white text-base md:text-2xl items-center font-extrabold">
            H
          </div>
          <div className="flex flex-col justify-center">
            <h1 className="text-[#252525] font-bold text-[12px] md:text-lg">
              HORARIO LABORAL
            </h1>
            <div className="flex gap-2 justify-start">
              <span className="hidden md:block text-gray-700 font-medium text-sm">
                Logos Perú
              </span>
            </div>
          </div>
          <div>
            <span className="bg-yellow-500 text-white px-2 py-1 rounded-md ml-4">
              Presencial
            </span>
            <span className="bg-green-600 text-white px-2 py-1 rounded-md ml-4">
              Home Office
            </span>
          </div>
        </div>
        <div className="flex gap-6 justify-end">
          <span onClick={() => { setOpenDiasFestivos(!openDiasFestivos); setActiveDescription(false) }} className="bg-gray-400 hover:bg-main transition-colors cursor-pointer text-white px-2 py-1 rounded-md ml-4">
            Dias festivos
          </span>
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

      {loading ? (
        <Loading />
      ) : (
        <section className=" w-full h-[90%] relative">
          <Calendar
            className={`calendario_cm2 calendario_colaboradores text-black calendario_horario_laboral ${
              activeDescription || openDiasFestivos ? 'activeDescription' : ''
            } ${fullView ? 'fullCalendar' : ''}`}
            localizer={localizer}
            events={events}
            startAccessor={(event: any) => {
              return new Date(event.start)
            }}
            endAccessor="end"
            selectable
            messages={messages}
            views={['day', 'month']}
            defaultView="month"
            dayPropGetter={customDayPropGetter}
            date={selectedDate}
            components={components}
            onSelectSlot={handleSelectSlot}
            ></Calendar>

          <button
            type="button"
            className={`absolute w-12 h-12 flex items-center justify-center shadow-lg bottom-[40px] lg:top-[20px] bg-white rounded-full p-2 right-[20px] lg:left-[10px] text-xl mb-2 text-[#54A9DC] ${
              fullView ? 'block' : 'hidden'
            }`}
            onClick={() => {
              setFullView(false)
            }}
          >
            <SlSizeActual />
          </button>
          <button
            type="button"
            className={`absolute w-12 h-12 flex items-center justify-center shadow-lg bottom-[40px] lg:top-[65px] bg-white rounded-full p-2 right-[20px] lg:left-[40px] text-xl mb-2 text-[#54A9DC] ${
              fullView ? 'hidden' : 'block'
            }`}
            onClick={() => {
              setFullView(true)
            }}
          >
            <SlSizeFullscreen />
          </button>

          <ViewHorario2
            open={open}
            openFestivo={openDiasFestivos}
            festivos={festivos}
            setOpen={setOpen}
            activeDescription={activeDescription}
            setActiveDescription={setActiveDescription}
            fullScreen={fullView}
          />
        </section>
      )}
    </>
  )
}
