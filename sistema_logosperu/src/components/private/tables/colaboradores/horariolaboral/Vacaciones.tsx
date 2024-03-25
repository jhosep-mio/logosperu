/* eslint-disable no-unmodified-loop-condition */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useState } from 'react'
import { DateRangePicker } from 'react-date-range'
import 'react-date-range/dist/styles.css' // Estilos por defecto
import 'react-date-range/dist/theme/default.css' // Tema por defecto
import { es } from 'date-fns/locale' // Importa el idioma español
import { v4 as uuidv4 } from 'uuid'
import useAuth from '../../../../../hooks/useAuth'
import { ListaVacaciones } from './ListaVacaciones'

const Vacaciones = ({ setVacacionesEvents, vacacionesEvents }: { setVacacionesEvents: any, vacacionesEvents: Event[] }): JSX.Element => {
  const [selectionRange, setSelectionRange] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: 'selection'
  })
  const { auth } = useAuth()
  const handleSelect = (ranges: any): void => {
    setSelectionRange(ranges.selection)
  }

  const handleVacationSelect = (): void => {
    const { startDate, endDate } = selectionRange
    // Create the new vacation event with adjusted dates
    const newEvent = {
      id: uuidv4(),
      modalidad: 'Vacaciones',
      user: { name: auth.name, id: auth.id },
      title: 'Vacaciones',
      timeRanges: null,
      start: startDate,
      end: endDate, // Add one day and set time to 00:00
      detalle: null
    }
    const updatedEvents: any = [...vacacionesEvents, newEvent]
    setVacacionesEvents(updatedEvents)
  }

  return (
    <section className='grid grid-cols-2 p-8'>
      <div className="text-black flex flex-col justify-center gap-4">
        <h3 className='text-center w-full text-black font-bold text-lg uppercase'>Selecciona el rango de fechas para tus vacaciones:</h3>
        <DateRangePicker
          ranges={[selectionRange]}
          onChange={handleSelect}
          className=''
          locale={es} // Configura el idioma español
        />
        <button onClick={handleVacationSelect} className='bg-[#4E9BFF] w-fit mx-auto px-4 py-1 text-white rounded-md hover:bg-[#4e7dbb] transition-colors'>Seleccionar Vacaciones</button>
      </div>
      <ListaVacaciones festivos={vacacionesEvents}/>
    </section>
  )
}

export default Vacaciones
