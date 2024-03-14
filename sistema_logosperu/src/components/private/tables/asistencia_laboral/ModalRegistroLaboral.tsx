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

export const ModalRegistroLaboral = ({
  open,
  setOpen,
  events,
  setEvents,
  Event,
  setEvent
}: {
  open: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
  events: Event[]
  setEvents: Dispatch<SetStateAction<Event[]>>
  Event: any | undefined
  setEvent: Dispatch<SetStateAction<any | undefined>>
}): JSX.Element => {
  const { auth } = useAuth()
  const [currentTime, setCurrentTime] = useState('0')
  const [loading, setLoading] = useState(true)
  const [openProyectos, setOpenProyectos] = useState(false)
  const [proyectoSeleccionado, setProyectoSeleccionado] = useState<string>('')

  const getCurrentTime = (): string => {
    const now = new Date()
    const hours = now.getHours().toString().padStart(2, '0')
    const minutes = now.getMinutes().toString().padStart(2, '0')
    return `${hours}:${minutes}`
  }

  useEffect(() => {
    const storedEvents = JSON.parse(localStorage.getItem('events') ?? '[]')
    setEvents(storedEvents)
  }, [])

  useEffect(() => {
    localStorage.setItem('events', JSON.stringify(events))
  }, [events])

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
    const updatedEvents = events.map((event: any) => {
      if (event.id === Event.id) {
        const newTimeRange = { start: formattedCurrentTime, end: null }
        const updatedTimeRanges = [...event.timeRanges, newTimeRange] // Crear un nuevo array con todos los objetos existentes más el nuevo objeto

        return {
          ...event,
          timeRanges: updatedTimeRanges
        }
      }
      return event
    })

    setEvents(updatedEvents)
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

  const Actividad = (hora: any): JSX.Element => {
    const [editando, setEditando] = useState(false)
    const [descripcionTemporal, setDescripcionTemporal] = useState('')
    const descripcionHoraActual = Event.detalle?.horas.find(
      (h: any) => h.hora == hora.hora
    )?.descripcion
    const cambiarEstadoEdicion = (): void => {
      if (!editando) {
        setDescripcionTemporal(descripcionHoraActual ?? '')
      }
      setEditando(!editando)
    }
    const handleChange = (
      event: React.ChangeEvent<HTMLTextAreaElement>
    ): void => {
      setDescripcionTemporal(event.target.value)
    }
    const actualizarContenido = (): void => {
      const updatedEvents = events.map((event: any) => {
        if (event.id === Event.id) {
          let updatedDetalle = { ...event.detalle }
          if (!updatedDetalle) {
            updatedDetalle = { horas: [] }
          } else if (!updatedDetalle.horas) {
            updatedDetalle.horas = []
          }
          const horaExistente = updatedDetalle.horas.find(
            (horaObj: any) => horaObj.hora == hora.hora
          )
          if (horaExistente) {
            horaExistente.descripcion = descripcionTemporal
          } else {
            updatedDetalle.horas.push({
              id: uuidv4(),
              hora: hora.hora,
              descripcion: descripcionTemporal
            })
          }
          return { ...event, detalle: updatedDetalle }
        }
        return event
      })

      setEvents(updatedEvents)
    }
    const handleGuardar = (): void => {
      if (editando) {
        actualizarContenido()
      }
      setEditando(false)
    }

    const handleCancelar = (): void => {
      setDescripcionTemporal(descripcionHoraActual ?? '')
      setEditando(false)
    }
    return (
      <div>
        {!editando ? (
          <p
            className="w-full break-words min-h-[10px] p-1 line-clamp-1"
            // onClick={cambiarEstadoEdicion}
            onClick={() => { setOpenProyectos(!openProyectos) }}
          >
            {descripcionHoraActual || 'Sin registro'}
          </p>
        ) : (
          <>
            <textarea
              value={descripcionTemporal}
              onChange={handleChange}
              autoFocus
              rows={1}
              className="outline-none resize-none w-full border border-gray-300 rounded-md p-1"
            />
            <button
              onClick={handleGuardar}
              className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md mr-2"
            >
              Guardar
            </button>
            <button
              onClick={handleCancelar}
              className="mt-2 px-4 py-2 bg-gray-500 text-white rounded-md"
            >
              Cancelar
            </button>
          </>
        )}
      </div>
    )
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
                    <section key={index} className='py-4'>
                      {timeRange.start || timeRange.end ? (
                        <div className="w-full flex justify-between px-1">
                          {timeRange.start &&
                            <span className="text-green-700 py-2 font-bold">
                                INICIO:{' '}
                                {new Date(timeRange.start).toLocaleTimeString()}{' '}
                            </span>}
                          {timeRange.end &&
                            <span className="text-red-700 py-2 font-bold">
                                FIN: {new Date(timeRange.end).toLocaleTimeString()}
                            </span> }
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
                        <div className={cn('grid grid-cols-7 gap-3 py-2 rounded-md', indexHour % 2 != 0 ? 'bg-gray-200' : '')} key={hour}>
                          <div className="w-full h-full flex items-center">
                            <p className="w-full text-center">
                              {(() => {
                                try {
                                  const dateObject = new Date()
                                  dateObject.setHours(hour, 0, 0) // Establecer la hora actual
                                  const formattedHour = dateObject
                                    .getHours()
                                    .toString()
                                    .padStart(2, '0')
                                  return formattedHour
                                } catch (error) {
                                  console.error(
                                    'Error al procesar la hora:',
                                    error
                                  )
                                  return 'Error'
                                }
                              })()}
                            </p>
                          </div>
                          <div className="w-full h-full flex items-center">
                            <p className="w-full text-center">
                            </p>
                          </div>
                          <div className="w-full col-span-2">
                            <p className="w-full text-center"> </p>
                          </div>
                          <div className="w-full col-span-3">
                            <p className="w-full text-center ">
                              <Actividad hora={hour} />
                            </p>
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
      {openProyectos && !proyectoSeleccionado &&
        <ModalProyectos setOpen={setOpenProyectos} setProyectoSeleccionado={setProyectoSeleccionado}/>
      }
    </Dialog>
  )
}
