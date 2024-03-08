/* eslint-disable multiline-ternary */
import { Dialog } from '@mui/material'
import { type Dispatch, type SetStateAction, useState, useEffect } from 'react'
import { icono } from '../../../shared/Images'
import useAuth from '../../../../hooks/useAuth'
import { v4 as uuidv4 } from 'uuid'
import { format, isToday } from 'date-fns'
import { Loading } from '../../../shared/Loading'

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

  const getCurrentTime = (): string => {
    const now = new Date()
    const hours = now.getHours().toString().padStart(2, '0')
    const minutes = now.getMinutes().toString().padStart(2, '0')
    return `${hours}:${minutes}`
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(getCurrentTime())
    }, 1000)
    // Limpieza del intervalo al desmontar el componente
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

  //   const isWithinRange = (hour, startTime) => {
  //     const currentTime = new Date()
  //     const currentHour = currentTime.getHours()
  //     const startDate = new Date(startTime)
  //     const startHour = startDate.getHours()

  //     return currentHour >= startHour && hour >= startHour
  //   }

  const handleFinishWork = (): void => {
    const currentDateTime = new Date()
    const formattedCurrentTime = format(currentDateTime, 'yyyy-MM-dd HH:mm:ss')
    const updatedEvents = events.map((event: any) => {
      if (event.id == Event.id) {
        // Actualizar el evento actual con la hora de finalización
        return {
          ...event,
          timeRanges: [{ start: event.timeRanges[0].start, end: formattedCurrentTime }]
        }
      }
      return event
    })
    setOpen(false)
    setEvents(updatedEvents)
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
      maxWidth={'md'}
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
        <div className="bg-white w-[800px] h-[700px] p-4 overflow-hidden group rounded-none  shadow hover:shadow-lg transition-all hover:cursor-pointer">
          <div className="flex gap-3 items-center">
            <div className="flex justify-center ">
              <img
                src={icono}
                alt="JT Devs"
                className="rounded-full w-14 h-14 object-cover ring-4 p-1 ring-gray-300"
              />
            </div>
            <div className="flex flex-col items-center gap-0 p-4">
              <h3 className="font-semibold text-xl transition-all">
                {auth.name}
              </h3>
            </div>
          </div>
          {Event && (
            <table>
              <thead>
                <tr>
                  <th>Hora de inicio</th>
                  <th>Descripción</th>
                </tr>
              </thead>
              <tbody>
                {(() => {
                  const currentHour = new Date().getHours()
                  const firstHour = new Date(
                    Event?.timeRanges[0]?.start
                  ).getHours() // Obtener la primera hora registrada

                  const hoursInRange = Array.from(
                    { length: currentHour - firstHour + 1 },
                    (_, i) => i + firstHour
                  )
                  return hoursInRange.map((hour) => (
                    <tr key={hour}>
                      <td>
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
                            console.error('Error al procesar la hora:', error)
                            return 'Error'
                          }
                        })()}
                      </td>
                      <td>{Event?.title}</td>
                    </tr>
                  ))
                })()}
              </tbody>
            </table>
          )}
          <td>
              <button
                onClick={() => { handleFinishWork() }}
              >
                Terminar horario
              </button>
            </td>
        </div>
      )}
    </Dialog>
  )
}
