import { useEffect, useState } from 'react'

import { type ValuesPreventaModificate } from '../../../shared/schemas/Interfaces'
import { getData2 } from '../../../shared/FetchingData'
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

export const IndexGestor = (): JSX.Element => {
  const [productos, setProductos] = useState<ValuesPreventaModificate[]>([])
  const [, setTotalRegistros] = useState(0)
  const { setTitle, auth } = useAuth()
  useEffect(() => {
    getData2('getPreClientes', setProductos, setTotalRegistros)
  }, [])
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
  useEffect(() => {
    setTitle('Logos Perú')
  }, [])

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
        <section className="w-full h-full px-6">
        <div className="pt-0 md:p-6 flex flex-col">
            <div className="flex flex-col-reverse gap-2 md:gap-0 items-center md:flex-row justify-between">
            <div className="flex gap-10">
                <p className="flex items-center gap-3 text-base md:text-lg font-semibold text-cyan-700 cursor-pointer">
                <IoPersonOutline className="text-xl" /> Tus tableros
                </p>
                <p className="flex items-center gap-3 text-base md:text-lg font-semibold text-black hover:text-cyan-700 transition-colors cursor-pointer">
                <IoCalendarOutline className="text-xl" /> Calendario
                </p>
            </div>
            <p className="flex items-center gap-3 text-md md:text-lg font-semibold text-gray-400 transition-colors cursor-pointer">
                Febrero-2024
            </p>
            </div>

            <section className="mt-4 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-5 2xl:grid-cols-6">
            <div
                className={
                'w-full h-[100px] md:h-[150px] bg-center overflow-hidden rounded-md p-4 before:bg-black/40 before:inset-0 before:absolute relative  hover:before:bg-black/35 transition-colors before:transition-colors cursor-pointer'
                }
            >
                <p className="text-sm md:text-lg text-white font-bold absolute inset-0 w-full h-full m-auto flex items-center justify-center mb-1">
                Crear nuevo tablero
                </p>
            </div>
            {productos?.map((producto, index: number) => (
                <Link
                to={`${auth.id}/view/${producto.id}/image/${index}`}
                key={producto.id}
                style={{ backgroundImage: `url(${getImageUrl(index) ?? ''})` }}
                className={
                    'w-full h-[100px] overflow-hidden md:h-[150px] bg-center rounded-md p-4 before:bg-black/30 before:inset-0 before:absolute relative  hover:before:bg-black/10 transition-colors before:transition-colors cursor-pointer'
                }
                >
                <p className="text-sm md:text-lg text-white font-bold absolute">
                    01/02/2024
                </p>
                </Link>
            ))}
            </section>
        </div>
        </section>
    </>
  )
}
