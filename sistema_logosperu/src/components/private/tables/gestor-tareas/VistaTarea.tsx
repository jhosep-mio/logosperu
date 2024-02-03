import useAuth from '../../../../hooks/useAuth'
import { useState, useRef, useEffect } from 'react'
import { useParams } from 'react-router-dom'
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
import { FiPlus } from 'react-icons/fi'
import { v4 as uuidv4 } from 'uuid'
import { IoClose } from 'react-icons/io5'
import { ContenidoTarjeta } from './components/ContenidoTarjeta'
import { TItuloTarjeta } from './components/TItuloTarjeta'

interface contenidoInteface {
  id: string
  titulo: string
}

interface tableroInterface {
  id: string
  titulo: string
  contenido: null | contenidoInteface[]
}

export const VistaTarea = (): JSX.Element => {
  const { auth } = useAuth()
  const { index } = useParams()
  const totalImages = 23
  const getImageUrl = (): string => {
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
    const indexfinal: number = Number(index) ?? 0
    const calculatedIndex = indexfinal % totalImages
    // Devuelve la URL de la imagen correspondiente
    return images[calculatedIndex]
  }
  const [tablero, setTablero] = useState<tableroInterface[]>([])
  const [tarea, setTarea] = useState<string | null>(null)
  const [tituloContenido, setTituloContenido] = useState<string | null>(null)
  const [agregar, setAgregar] = useState(false)
  const handleAgregarTarea = (): void => {
    if (tarea) {
      setTablero([
        ...tablero,
        { id: uuidv4(), titulo: tarea, contenido: null }
      ])
      setTarea(null)
      setAgregar(false)
    }
  }
  const [seccionAbierta, setSeccionAbierta] = useState<string | null>(null)
  const textareaRef = useRef(null)
  const tareaTareRef = useRef(null)
  const handleTextAdmin = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
    setTarea(e.target.value)
    e.target.style.height = '1.7rem'
    // Ajusta la altura del textarea según el contenido
    e.target.style.height = `${e.target.scrollHeight}px`
  }
  useEffect(() => {
    if (seccionAbierta && textareaRef.current) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      textareaRef.current?.focus()
    }
  }, [seccionAbierta])
  useEffect(() => {
    if (agregar && tareaTareRef.current) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      tareaTareRef.current?.focus()
    }
  }, [agregar])
  //   EDITAR TITULOSECCION
  const [tituloEdicion, settituloEdicion] = useState<string | null>(null)
  const [tituloContenidoEdicion, settituloContenidoEdicion] = useState< string | null >(null)

  return (
    <>
      <div className="flex gap-3 items-center border-b border-gray-300 h-[7vh] py-1 md:py-0 lg:h-[10vh] mx-1 md:px-8 fixed w-full z-20 ">
        <div className="w-12 md:w-14 h-full md:h-14 rounded-md bg-gradient-to-r from-cyan-500 to-blue-400 flex justify-center text-white text-base md:text-2xl items-center font-extrabold">
          {auth.name.trim() !== '' ? auth.name.charAt(0).toUpperCase() : ''}
        </div>
        <div className="flex flex-col justify-center">
          <h1 className="text-white font-bold text-sm md:text-lg">
            Espacio de trabajo de {auth.name.toUpperCase()}
          </h1>
          <div className="flex gap-2 justify-start">
            <span className="text-white text-sm">12/03/2020</span>
          </div>
        </div>
      </div>
      <section
        className="w-full h-full  inset-0 p-8 bg-no-repeat bg-center bg-cover before:bg-[#00000051] before:inset-0 before:absolute"
        style={{ backgroundImage: `url(${getImageUrl() ?? ''})` }}
        onClick={() => {
          setAgregar(false)
          setSeccionAbierta(null)
          setTituloContenido(null)
          settituloEdicion(null)
          setTarea(null)
          settituloContenidoEdicion(null)
        }}
      >
        <div className="w-full h-full relative flex gap-3 pt-[8vh]">
          {tablero.length > 0 &&
            tablero.map((table) => (
              <div
                key={table.id}
                className="bg-[#ffffff] w-[300px] pt-1 pb-2 h-fit px-2 rounded-xl"
              >
                <TItuloTarjeta setTablero={setTablero} settituloEdicion={settituloEdicion} table={table} tituloEdicion={tituloEdicion} />
                {/* CONTENIDO */}
                <ContenidoTarjeta settituloContenidoEdicion={settituloContenidoEdicion} tituloContenidoEdicion={tituloContenidoEdicion} seccionAbierta={seccionAbierta} setSeccionAbierta={setSeccionAbierta} setTablero={setTablero} setTituloContenido={setTituloContenido} table={table} tituloContenido={tituloContenido} />
                {/* AÑADIR TARJETA */}
                {seccionAbierta != table.id && (
                  <div
                    className="flex gap-2 px-2 py-1 items-center hover:bg-gray-300 cursor-pointer transition-colors rounded-md"
                    onClick={(e) => {
                      setSeccionAbierta(table.id)
                      e.stopPropagation()
                    }}
                  >
                    <FiPlus className="text-gray-600" />
                    <p className="text-gray-600">Añadir una tarjeta</p>
                  </div>
                )}
              </div>
            ))}
          {!agregar
            ? (
            <div
              className="bg-[#ffffff] w-[300px] h-fit rounded-xl z-10"
              onClick={(e) => {
                setAgregar(true)
                e.stopPropagation()
              }}
            >
              <div className="flex gap-2 items-center p-2 hover:bg-gray-300 cursor-pointer transition-colors rounded-xl">
                <FiPlus className="text-gray-600" />
                <p className="text-gray-600">Añadir una tarjeta</p>
              </div>
            </div>
              )
            : (
            <div
              className="bg-[#ffffff] w-[300px] pb-2 h-fit px-2 rounded-xl z-10 "
              onClick={(e) => {
                e.stopPropagation()
              }}
            >
              <div className="min-h-[40px] py-2">
                <textarea
                  placeholder="Introduce el titulo de la lista..."
                  name="tarea"
                  onChange={handleTextAdmin}
                  ref={tareaTareRef}
                  onKeyDown={(e: any) => {
                    if (e.key === 'Enter') {
                      e.preventDefault() // Previene el salto de línea predeterminado
                      if (e.target.value.length > 0) {
                        handleAgregarTarea()
                      }
                    }
                  }}
                  className="text-black font-semibold w-full px-1 outline-cyan-700 resize-none h-7"
                >
                  {tarea}
                </textarea>
              </div>
              <div className="flex gap-4 items-center">
                <div className="flex gap-2 px-2 py-2 w-fit items-center bg-cyan-700 hover:bg-cyan-600 transition-colors cursor-pointer  rounded-md ">
                  <p
                    className="text-white text-sm"
                    onClick={() => {
                      handleAgregarTarea()
                    }}
                  >
                    Añadir lista
                  </p>
                </div>
                <IoClose
                  className="text-black text-xl cursor-pointer"
                  onClick={() => {
                    setAgregar(false)
                  }}
                />
              </div>
            </div>
              )}
        </div>
      </section>
    </>
  )
}
