import { useState } from 'react'
import { DateRangePicker } from 'react-date-range'
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'
import { es } from 'date-fns/locale'
import { v4 as uuidv4 } from 'uuid'
import useAuth from '../../../../../hooks/useAuth'
import { ListaVacaciones } from './ListaVacaciones'
import { toast } from 'sonner'

const Vacaciones = ({
  setVacacionesEvents,
  vacacionesEvents,
  permisos,
  setPermisos
}: {
  setVacacionesEvents: any
  vacacionesEvents: Event[]
  permisos: any
  setPermisos: any
  setOpen: any
}): JSX.Element => {
  const [selectionRange, setSelectionRange] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: 'selection'
  })
  const [modalidad, setModalidad] = useState('Vacaciones') // Estado para la selección de vacaciones o permisos
  const { auth } = useAuth()

  const handleSelect = (ranges: any): void => {
    setSelectionRange(ranges.selection)
  }

  const handleVacationSelect = (): void => {
    const { startDate, endDate } = selectionRange
    // Create the new vacation event with adjusted dates
    const newEvent = {
      id: uuidv4(),
      modalidad, // Utiliza el estado modalidad
      user: { name: auth.name, id: auth.id },
      title: modalidad, // Utiliza el estado modalidad
      timeRanges: null,
      start: startDate,
      end: endDate, // Add one day and set time to 00:00
      detalle: null
    }

    if (modalidad == 'Vacaciones') {
      const updatedEvents: any = [...vacacionesEvents, newEvent]
      setVacacionesEvents(updatedEvents)
    } else {
      const updatedEvents: any = [...permisos, newEvent]
      setPermisos(updatedEvents)
    }
    setModalidad('Vacaciones')
    setSelectionRange({
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    })
    toast.success(`${modalidad} Creada`)
  }

  return (
    <section className="grid grid-cols-2 p-8">
      <div className="text-black flex flex-col justify-center gap-4">
        <h3 className="text-center w-full text-black font-bold text-lg uppercase">
          Selecciona el tipo y rango de fechas:
        </h3>
        <div className="flex items-center justify-center gap-4 bg-[#4e7dbb] w-fit  mx-auto px-4 py-1 rounded-md text-white font-bold">
          <label className='flex gap-2'>
            <input
              type="radio"
              value="Vacaciones"
              checked={modalidad === 'Vacaciones'}
              onChange={() => {
                setModalidad('Vacaciones')
              }}
            />
            Vacaciones
          </label>
          <label className='flex gap-2'>
            <input
              type="radio"
              value="Permisos"
              checked={modalidad === 'Permisos'}
              onChange={() => {
                setModalidad('Permisos')
              }}
            />
            Permisos
          </label>
        </div>
        <DateRangePicker
          ranges={[selectionRange]}
          onChange={handleSelect}
          className=""
          locale={es}
        />
        <button
          onClick={handleVacationSelect}
          className="bg-[#4E9BFF] w-fit mx-auto px-4 py-1 text-white rounded-md hover:bg-[#4e7dbb] transition-colors"
        >
          Seleccionar {modalidad}
        </button>
      </div>
      <ListaVacaciones festivos={vacacionesEvents} permisos={permisos}/>
    </section>
  )
}

export default Vacaciones
