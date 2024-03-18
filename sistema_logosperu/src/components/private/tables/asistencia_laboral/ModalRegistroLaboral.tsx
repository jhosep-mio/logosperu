/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable multiline-ternary */
import { Dialog } from '@mui/material'
import { type Dispatch, type SetStateAction, useState, useEffect } from 'react'
import { icono } from '../../../shared/Images'
import useAuth from '../../../../hooks/useAuth'
import { v4 as uuidv4 } from 'uuid'
import { format, isToday } from 'date-fns'
import { Loading } from '../../../shared/Loading'
import { cn } from '../../../shared/cn'
import { ModalProyectos } from './ModalProyectos'
import { Link } from 'react-router-dom'
import { MdDelete, MdEdit } from 'react-icons/md'
import { FaWhatsapp } from 'react-icons/fa'
import { ModalEdicion } from './ModalEdicion'
import { toast } from 'sonner'
import axios from 'axios'
import { Global } from '../../../../helper/Global'

export const ModalRegistroLaboral = ({
  open,
  setOpen,
  events,
  setEvents,
  Event,
  setEvent,
  loading2
}: {
  open: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
  events: Event[]
  setEvents: Dispatch<SetStateAction<Event[]>>
  Event: any | undefined
  setEvent: Dispatch<SetStateAction<any | undefined>>
  loading2: boolean
}): JSX.Element => {
  const { auth } = useAuth()
  const token = localStorage.getItem('token')
  const [currentTime, setCurrentTime] = useState('0')
  const [loading, setLoading] = useState(true)
  const [openProyectos, setOpenProyectos] = useState(false)
  const [openProyectosEdicion, setOpenProyectosEdicion] = useState(false)
  const [proyectoSeleccionado, setProyectoSeleccionado] = useState<any | null>(
    null
  )
  const [actividadEditando, setActividadEditando] = useState<any | null>(null)

  const getCurrentTime = (): string => {
    const now = new Date()
    const hours = now.getHours().toString().padStart(2, '0')
    const minutes = now.getMinutes().toString().padStart(2, '0')
    return `${hours}:${minutes}`
  }

  const updateHorario = async (updatedEvents: Event[]): Promise<void> => {
    const data = new FormData()
    data.append('horario_laboral', JSON.stringify(updatedEvents))
    data.append('_method', 'PUT')
    try {
      const respuesta = await axios.post(`${Global.url}/updateHorario/${auth.id}`, data, {
        headers: {
          Authorization: `Bearer ${
            token !== null && token !== '' ? token : ''
          }`
        }
      })
      console.log(respuesta)
    } catch (error) {
      toast.errror('error al guardar')
    }
  }

  useEffect(() => {
    if (!loading2 && open) {
      updateHorario(events)
    }
  }, [events])

  const handleEditActividad = (hour: string, actividadId: string): void => {
    const actividad = Event?.detalle[hour.toString()].find((a: any) => a.id == actividadId)
    if (actividad) {
      setActividadEditando({ hora: hour, actividad })
      setOpenProyectosEdicion(true)
    }
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(getCurrentTime())
    }, 1000)
    return () => {
      clearInterval(intervalId)
    }
  }, [])

  const checkIfRecordExists = (): void => {
    setLoading(true)
    const matchingEvent = events.find((event: any) => {
      return (
        isToday(new Date(event.start)) &&
        event.user &&
        event.user.id === auth.id
      )
    })
    setLoading(false)
    setEvent(matchingEvent)
  }

  const handleSelectSlot = (): void => {
    setLoading(true)
    const currentDateTime = new Date()
    const formattedCurrentTime = format(currentDateTime, 'yyyy-MM-dd HH:mm:ss')
    const newEvent = {
      id: uuidv4(),
      user: { name: auth.name, id: auth.id },
      title: auth.name,
      timeRanges: [{ start: formattedCurrentTime, end: null }], // Array de objetos con hora de inicio y fin inicialmente iguales
      start: formattedCurrentTime,
      end: formattedCurrentTime,
      detalle: null
    }
    // Agregar el nuevo evento al array de eventos
    const updatedEvents: any = [...events, newEvent]
    setEvents(updatedEvents)
    setLoading(false)
  }

  useEffect(() => {
    checkIfRecordExists()
  }, [open, events])

  const handleAddTimeRange = (): void => {
    const currentDateTime = new Date()
    const formattedCurrentTime = format(currentDateTime, 'yyyy-MM-dd HH:mm:ss')
    // Verificar si la hora de inicio del nuevo rango ya existe en los rangos actuales
    const startTimeExists = Event.timeRanges.some(
      (timeRange: any) => {
        const startTime = new Date(timeRange.start)
        const newTime = new Date(formattedCurrentTime)
        return startTime.getHours() === newTime.getHours()
      }
    )

    if (!startTimeExists) {
      const updatedEvents = events.map((event: any) => {
        if (event.id === Event.id) {
          const newTimeRange = { start: formattedCurrentTime, end: null }
          const updatedTimeRanges = [...event.timeRanges, newTimeRange]

          return {
            ...event,
            timeRanges: updatedTimeRanges
          }
        }
        return event
      })
      setEvents(updatedEvents)
    } else {
      toast.warning('Hora actual ya registrada')
    }
  }

  const handleFinishWork = (index: number): void => {
    const currentDateTime = new Date()
    const formattedCurrentTime = format(currentDateTime, 'yyyy-MM-dd HH:mm:ss')

    const updatedEvents = events.map((event: any) => {
      if (event.id === Event.id) {
        const updatedTimeRanges = event.timeRanges.map(
          (timeRange: any, i: number) => {
            if (i == index) {
              // Si el índice coincide con el rango de tiempo especificado,
              // actualiza su propiedad "end" con la hora actual
              return { ...timeRange, end: formattedCurrentTime }
            }
            return timeRange
          }
        )
        return { ...event, timeRanges: updatedTimeRanges }
      }
      return event
    })

    setOpen(false)
    setEvents(updatedEvents)
  }

  const handleDeleteActividad = (hour: string, actividadId: string): void => {
    // Filtra el detalle actualizado para eliminar la actividad especificada
    const updatedDetalle = {
      ...Event.detalle,
      [hour.toString()]: Event.detalle[hour.toString()].filter(
        (actividad: any) => actividad.id !== actividadId
      )
    }
    // Actualiza el evento actual con el detalle actualizado
    const updatedEvent = {
      ...Event,
      detalle: updatedDetalle
    }
    // Actualiza el array de eventos con el evento actualizado
    const updatedEvents = events.map((event: any) => {
      if (event.id === updatedEvent.id) {
        return updatedEvent
      }
      return event
    })
    setEvents(updatedEvents)
    setEvent(updatedEvent)
  }

  const retornarFecha = (evento: string): string => {
    const fechaInicio = new Date(evento).toLocaleDateString('es-ES', {
      day: 'numeric',
      month: 'numeric',
      year: 'numeric'
    })
    return fechaInicio
  }

  const exportarEventos = (): void => {
    let mensajeWsp = ''
    events.forEach((evento: any) => {
      mensajeWsp += `RESUMEN ${(evento.user.name).toUpperCase()} / ${retornarFecha(evento.start)} \n\n`
      Object.keys(evento.detalle).forEach((hora: string) => {
        const actividades = evento.detalle[hora]
        // Agregar información de las actividades al mensaje
        actividades.forEach((actividad: any) => {
          mensajeWsp += `${(actividad.proyecto).nombre} (${(actividad.proyecto).nombreCliente}) > ${actividad.horaInicio} - ${actividad.horaFin}: ${actividad.descripcion}  \n`
        })
      })
      mensajeWsp += '\n'
    })
    const mensajeWspEncoded = encodeURIComponent(mensajeWsp)
    const urlWhatsApp = `https://web.whatsapp.com/send?text=${mensajeWspEncoded}`
    window.open(urlWhatsApp, '_blank')
  }

  return (
    <Dialog
      open={open}
      onClose={() => {
        setOpen(false)
      }}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      className=""
      maxWidth={!openProyectos ? 'md' : 'lg'}
    >
      {loading ? (
        <Loading />
      ) : !Event ? (
        <div className="bg-white w-[400px] h-[400px]: overflow-hidden group rounded-none  shadow hover:shadow-lg transition-all hover:cursor-pointer">
          <div className="flex justify-center pt-6">
            <img
              src={icono}
              alt="JT Devs"
              className="rounded-full w-28 h-28 object-cover ring-4 p-3 ring-gray-300"
            />
          </div>
          <div className="flex flex-col items-center gap-0 p-4">
            <h3 className="font-semibold text-xl transition-all">
              {auth.name}
            </h3>
            <p className="text-gray-600 ">{currentTime}</p>
          </div>
          <div className="w-full py-3 flex justify-center">
            <button
              onClick={() => {
                handleSelectSlot()
              }}
              className="bg-main hover:bg-main_dark transition-colors rounded-md text-white text-center px-4 py-2"
            >
              Registrar asistencia
            </button>
          </div>
        </div>
      ) : (
        <div className="bg-white w-[800px] h-[700px] p-4 overflow-hidden group rounded-none  shadow hover:shadow-lg transition-all hover:cursor-pointer overflow-y-auto">
          <section className="w-full flex h-[50px]">
            <div className="flex w-full h-full gap-3 items-center ">
              <div className="flex justify-center ">
                <img
                  src={icono}
                  alt="JT Devs"
                  className="rounded-full w-14 h-14 object-cover ring-4 p-1 ring-gray-300"
                />
              </div>
              <div className="flex flex-col items-start justify-center gap-0 p-4">
                <h3 className="font-semibold text-xl transition-all">
                  {auth.name}
                </h3>
                <span>{new Date(Event.start).toLocaleDateString()}</span>
              </div>
            </div>
            <div className='h-full flex items-center'>
                <FaWhatsapp className='text-2xl text-green-600 hover:text-green-700 transition-colors hover:scale-110'
                onClick={() => { exportarEventos() }}
                />
            </div>
          </section>
          {Event && (
            <section className="flex flex-col justify-between gap-6 mt-4 ">
              <div className="w-full h-full">
                {Event.timeRanges.map((timeRange: any, index: number) => {
                  const currentHour = new Date().getHours()
                  const firstHour = new Date(timeRange.start).getHours()
                  let lastHour = currentHour
                  if (timeRange.end) {
                    lastHour = new Date(timeRange.end).getHours()
                  }
                  const hoursInRange = Array.from(
                    { length: lastHour - firstHour + 1 },
                    (_, i) => i + firstHour
                  )
                  return (
                    <section key={index} className="py-4">
                      {timeRange.start || timeRange.end ? (
                        <div className="w-full flex justify-between px-1">
                          {timeRange.start && (
                            <span className="text-green-700 py-2 font-bold">
                              INICIO:{' '}
                              {new Date(timeRange.start).toLocaleTimeString()}{' '}
                            </span>
                          )}
                          {timeRange.end && (
                            <span className="text-red-700 py-2 font-bold">
                              FIN:{' '}
                              {new Date(timeRange.end).toLocaleTimeString()}
                            </span>
                          )}
                        </div>
                      ) : null}
                      <div className="grid grid-cols-7 gap-3 border-y border-gray-300  py-2">
                        <div className="w-full">
                          <p className="w-full text-center font-semibold">
                            Hora
                          </p>
                        </div>
                        <div className="w-full ">
                          <p className="w-full text-center font-semibold">
                            Tiempo
                          </p>
                        </div>
                        <div className="w-full col-span-2">
                          <p className="w-full text-center font-semibold">
                            Proyecto
                          </p>
                        </div>
                        <div className="w-full col-span-3">
                          <p className="w-full text-center font-semibold">
                            Actividades
                          </p>
                        </div>
                      </div>
                      {hoursInRange.map((hour, indexHour: number) => (
                        <div
                          className={cn(
                            'grid grid-cols-7 gap-3 py-2 rounded-md relative',
                            indexHour % 2 != 0 ? 'bg-gray-200' : ''
                          )}
                          key={hour}
                        >
                          <div className="w-full h-full flex items-center justify-center">
                            <p
                              className="text-center flex items-center justify-center hover:bg-main w-fit px-3 hover:text-white transition-colors rounded-md"
                              onClick={() => {
                                setOpenProyectos(!openProyectos)
                                setProyectoSeleccionado({
                                  hora: hour,
                                  proyecto: null
                                })
                              }}
                            >
                              {hour}
                            </p>
                          </div>
                          {Event?.detalle &&
                            Event?.detalle[hour.toString()] && (
                              <div className="col-span-6 ">
                                {Event.detalle[hour.toString()].map(
                                  (actividad: any) => (
                                    <div
                                      key={actividad.id}
                                      className="grid grid-cols-6 gap-4"
                                    >
                                      <p className="col-span-1">
                                        {actividad.horaInicio} -{' '}
                                        {actividad.horaFin}
                                      </p>
                                      <Link
                                        to={`/admin/lista-servicios/avances/${
                                          actividad?.proyecto?.id ?? ''
                                        }`}
                                        target="_blank"
                                        className="col-span-3 w-full line-clamp-1 hover:text-blue-600"
                                      >
                                        {actividad?.proyecto?.nombre}
                                      </Link>
                                      <div className='flex gap-2 col-span-2 '>
                                        <p className="w-full break-words line-clamp-1 pr-6">
                                            {actividad.descripcion}
                                        </p>
                                        <button
                                            onClick={() => { handleEditActividad(hour.toString(), actividad.id) }}
                                            className=" text-blue-500 hover:text-blue-700  text-lg"
                                        >
                                            <MdEdit/>
                                        </button>
                                        <button
                                          onClick={() => { handleDeleteActividad(hour.toString(), actividad.id) }
                                          }
                                          className=" text-red-500 hover:text-red-700"
                                        >
                                          <MdDelete/>
                                        </button>
                                      </div>
                                    </div>
                                  )
                                )}
                              </div>
                          )}
                          <div className="w-full h-full flex items-center">
                            <p className="w-full text-center"></p>
                          </div>
                          <div className="w-full col-span-2">
                            <p className="w-full text-center"> </p>
                          </div>
                        </div>
                      ))}
                      {timeRange.start && !timeRange.end ? (
                        <div className="w-full h-fit flex justify-center mt-4">
                          <button
                            className=" bg-main hover:bg-main_dark transition-colors text-white rounded-md text-lg py-1 px-4 w-fit"
                            onClick={() => {
                              handleFinishWork(index)
                            }}
                          >
                            Terminar horario
                          </button>
                        </div>
                      ) : (
                        Event.timeRanges.length == index + 1 && (
                          <div className="w-full h-fit flex justify-center mt-4">
                            <button
                              className=" bg-main hover:bg-main_dark transition-colors text-white rounded-md text-lg py-1 px-4 w-fit"
                              onClick={() => {
                                handleAddTimeRange()
                              }}
                            >
                              Retomar Actividades
                            </button>
                          </div>
                        )
                      )}
                    </section>
                  )
                })}
              </div>
            </section>
          )}
        </div>
      )}
      {openProyectos && (
        <ModalProyectos
          events={events}
          setEvents={setEvents}
          Event={Event}
          setOpen={setOpenProyectos}
          proyectoSeleccionado={proyectoSeleccionado}
          setProyectoSeleccionado={setProyectoSeleccionado}
        />
      )}
      {openProyectosEdicion && (
        <ModalEdicion
          events={events}
          setEvents={setEvents}
          Event={Event}
          setOpen={setOpenProyectosEdicion}
          proyectoSeleccionado={actividadEditando}
          setProyectoSeleccionado={setActividadEditando}
        />
      )}
    </Dialog>
  )
}
