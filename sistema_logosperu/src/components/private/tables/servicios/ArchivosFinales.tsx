import { useState, type Dispatch, type SetStateAction, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { Global } from '../../../../helper/Global'
import Swal, { type SweetAlertResult } from 'sweetalert2'
import { SubirArchivosFinales } from '../../../shared/modals/SubirArchivosFinales'
import { BsFillCloudArrowDownFill, BsFillTrashFill } from 'react-icons/bs'
import { SubirArchivosPDF } from '../../../shared/modals/SubirArchivosPDF'
import { pdf, zip } from '../../../shared/Images'
import Skeleton from '@mui/material/Skeleton'
import { IoEyeSharp } from 'react-icons/io5'
import {
  type archivoavancesValues,
  type ValuesPlanes
} from '../../../shared/schemas/Interfaces'
import { motion, AnimatePresence } from 'framer-motion'
import { SubirAvances } from './avancesArchivos/SubirAvances'
import filarachive from '../../../../assets/plataformas/archivo.png'
import useAuth from '../../../../hooks/useAuth'

interface valuesPropuesta {
  propuestas: string
  link_final: string
  archivos_avances: string
}

interface valuesData {
  getOneBrief: () => Promise<void>
  values: valuesPropuesta
  pdfName: string | undefined
  setpdfName: Dispatch<SetStateAction<string | undefined>>
  fechaCreacion: Date | null
  limite: number
  plan: ValuesPlanes | null
  validateBrief: boolean | null
}

export const ArchivosFinales = ({
  getOneBrief,
  limite,
  values,
  pdfName,
  setpdfName,
  fechaCreacion,
  plan
}: valuesData): JSX.Element => {
  const { id } = useParams()
  const { setDownloadProgress } = useAuth()
  const token = localStorage.getItem('token')
  const [loadingDescarga, setLoadingDescarga] = useState(false)
  const [open, setOpen] = useState(false)
  const [seleccion, setSeleccion] = useState(false)
  const [openPDF, setOpenPDF] = useState(false)
  const [openAvance, setOpenAvance] = useState(false)
  //   NUEVO
  const plazo = 30 * 24 * 60 * 60 * 1000 // 30 días en milisegundos
  const [tiempoRestante, setTiempoRestante] = useState<number | null>(null)

  function formatFileName (fileName: string): string {
    return fileName.split('_').pop() ?? fileName
  }
  const descargarPDF = async (): Promise<void> => {
    setLoadingDescarga(true)
    try {
      const response = await axios({
        method: 'get',
        url: `${Global.url}/descargarPDF/${id ?? ''}`,
        responseType: 'blob', // Indicar que la respuesta es un blob (archivo)
        headers: {
          Authorization: `Bearer ${
            token !== null && token !== '' ? `Bearer ${token}` : ''
          }`
        },
        onDownloadProgress: (e) => {
          const loaded = (e.loaded)
          const total = e.total
          if (total) {
            setDownloadProgress(((loaded) / total) * 100)
          }
        }
      })
      const url = window.URL.createObjectURL(new Blob([response.data]))
      const a = document.createElement('a')
      a.href = url
      a.download = `${formatFileName(values.propuestas)}` // Cambiar por el nombre real del archivo
      document.body.appendChild(a)
      a.click()
      a.remove()
    } catch (error) {
      console.error(error)
    }
    setLoadingDescarga(false)
  }

  const descargarZIP = async (): Promise<void> => {
    setLoadingDescarga(true)
    try {
      const response = await axios({
        method: 'get',
        url: `${Global.url}/descargarZIP/${id ?? ''}`,
        responseType: 'blob', // Indicar que la respuesta es un blob (archivo)
        headers: {
          Authorization: `Bearer ${
            token !== null && token !== '' ? `Bearer ${token}` : ''
          }`
        },
        onDownloadProgress: (e) => {
          const loaded = (e.loaded)
          const total = e.total
          if (total) {
            setDownloadProgress(((loaded) / total) * 100)
          }
        }
      })
      const url = window.URL.createObjectURL(new Blob([response.data]))
      const a = document.createElement('a')
      a.href = url
      a.download = `${formatFileName(values.link_final)}` // Cambiar por el nombre real del archivo
      document.body.appendChild(a)
      a.click()
      a.remove()
    } catch (error) {
      console.error(error)
    }
    setLoadingDescarga(false)
  }

  const eliminarPDF = async (): Promise<void> => {
    const data = new FormData()
    data.append('propuestas', values.propuestas)
    data.append('_method', 'PUT')
    try {
      const respuesta = await axios.post(
        `${Global.url}/eliminarPDF/${id ?? ''}`,
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
        Swal.fire('Se elimino el archivo correctamente', '', 'success')
        getOneBrief()
        setpdfName('')
      }
    } catch (error) {
      Swal.fire('Error al eliminar el PDF', '', 'warning')
      console.log(error)
    }
  }

  const eliminarZIP = async (): Promise<void> => {
    const data = new FormData()
    data.append('archivos_finales', values.link_final)
    data.append('_method', 'PUT')
    try {
      const respuesta = await axios.post(
        `${Global.url}/eliminarZIP/${id ?? ''}`,
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
        Swal.fire('Se elimino el archivo correctamente', '', 'success')
        getOneBrief()
      }
    } catch (error) {
      Swal.fire('Error al eliminar el PDF', '', 'success')
      console.log(error)
    }
  }

  const preguntarArchivo = (id: string, nombre: string): void => {
    Swal.fire({
      title: '¿Estas seguro de eliminar el archivo?',
      showDenyButton: true,
      confirmButtonText: 'Eliminar',
      denyButtonText: 'Cancelar'
    }).then(async (result: SweetAlertResult) => {
      if (result.isConfirmed) {
        eliminarArchivoAvance(id, nombre)
      }
    })
  }

  const eliminarImagen = async (nombre: string): Promise<void> => {
    await axios.delete(`${Global.url}/eliminarArchivoAvance/${nombre ?? ''}`, {
      headers: {
        Authorization: `Bearer ${token !== null && token !== '' ? token : ''}`
      }
    })
  }

  const eliminarArchivoAvance = async (
    idarchivo: string,
    nombre: string
  ): Promise<void> => {
    const nuevoArray = JSON.parse(values.archivos_avances).filter(
      (avance: archivoavancesValues) => avance.id !== idarchivo
    )
    const data = new FormData()
    data.append('archivos_avances', JSON.stringify(nuevoArray))
    data.append('_method', 'PUT')
    try {
      const respuesta = await axios.post(
        `${Global.url}/updateArchivoAvance/${id ?? ''}`,
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
        Swal.fire('Se elimino el archivo correctamente', '', 'success')
        getOneBrief()
        await eliminarImagen(nombre)
      }
    } catch (error) {
      Swal.fire('Error al eliminar el archivo', '', 'error')
      console.log(error)
    }
  }

  const descargarArchivoZip = async (nombre: string): Promise<void> => {
    setLoadingDescarga(true)
    try {
      const response = await axios({
        method: 'get',
        url: `${Global.url}/descargarArchivosAvances/${nombre ?? ''}`,
        responseType: 'blob', // Indicar que la respuesta es un blob (archivo)
        headers: {
          Authorization: `Bearer ${
            token !== null && token !== '' ? `Bearer ${token}` : ''
          }`

        },
        onDownloadProgress: (e) => {
          const loaded = (e.loaded)
          const total = e.total
          if (total) {
            setDownloadProgress((loaded / total) * 100)
          }
        }
      })
      const url = window.URL.createObjectURL(new Blob([response.data]))
      const a = document.createElement('a')
      a.href = url
      a.download = `${formatFileName(nombre)}` // Cambiar por el nombre real del archivo
      document.body.appendChild(a)
      a.click()
      a.remove()
    } catch (error) {
      console.error(error)
    } finally {
      setDownloadProgress(0)
    }
    setLoadingDescarga(false)
  }

  const preguntarPDF = (): void => {
    Swal.fire({
      title: '¿Estas seguro de eliminar el PDF?',
      showDenyButton: true,
      confirmButtonText: 'Eliminar',
      denyButtonText: 'Cancelar'
    }).then(async (result: SweetAlertResult) => {
      if (result.isConfirmed) {
        eliminarPDF()
      }
    })
  }

  const preguntarZIP = (): void => {
    Swal.fire({
      title: '¿Estas seguro de eliminar el archivo final?',
      showDenyButton: true,
      confirmButtonText: 'Eliminar',
      denyButtonText: 'Cancelar'
    }).then(async (result: SweetAlertResult) => {
      if (result.isConfirmed) {
        eliminarZIP()
      }
    })
  }

  useEffect(() => {
    if (fechaCreacion) {
      // Asegurarse de que fechaCreacion esté disponible
      const actualizarTiempoRestante = (): void => {
        const ahora = new Date()
        const creacion = new Date(fechaCreacion)
        creacion.setHours(23, 59, 60, 60) // Establecer la hora a las 23:59
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        const tiempoTranscurrido = ahora - creacion
        const restante = plazo - tiempoTranscurrido
        if (restante <= 0) {
          setTiempoRestante(0)
        } else {
          setTiempoRestante(restante)
        }
      }
      const intervalId = setInterval(actualizarTiempoRestante, 1000)
      return () => {
        clearInterval(intervalId)
      }
    }
  }, [fechaCreacion, plazo])

  const formatTime = (ms: number): string => {
    let s = Math.floor(ms / 1000)
    let m = Math.floor(s / 60)
    let h = Math.floor(m / 60)
    const d = Math.floor(h / 24)
    h %= 24
    m %= 60
    s %= 60
    return `${d} días ${h} horas ${m} min`
  }

  //   const mostrarError = (): void => {
  //     setShowError({
  //       estado: 'warning',
  //       texto: 'No hay un brief asociado a este proyecto.'
  //     })
  //   }

  return (
    <>
      <div className="flex flex-row gap-0 justify-between lg:gap-2 mb-2 ">
        <div className="flex flex-col gap-3 mb-2">
          <h2 className="text-base lg:text-2xl font-bold text-black">
            Archivos {' '}
          </h2>
          <h3 className="font-bold text-base">
            <span className="text-gray-400 text-sm lg:text-base">
              Editables, propuestas
            </span>{' '}
          </h3>
        </div>
        <div className="w-40 relative h-fit flex justify-end">
          <button
            type="button"
            className="w-40 px-4 h-fit bg-gray-500  rounded-xl font-normal text-sm lg:text-base text-white py-1"
            onClick={() => {
              setSeleccion(!seleccion)
            }}
          >
            Subir archivo
          </button>

          <AnimatePresence>
            {seleccion && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute bg-white shadow-lg rounded-md overflow-hidden w-40 h-auto left-0 right-0 mx-auto top-full mt-3 flex flex-col z-20"
              >
                {plan?.tipo && plan?.tipo.includes('Diseño Logotipo') && (
                  <div className="w-full lg:w-40 relative cursor-pointer">
                    <button
                      type="button"
                      className="w-full hover:text-white hover:bg-main font-normal transition-colors text-gray-600 px-4 py-2 cursor-pointer"
                      onClick={() => {
                        setOpenPDF(true)
                        setSeleccion(false)
                      }}
                    >
                      Subir propuesta
                    </button>
                  </div>
                )}
                <button
                  type="button"
                  className="w-full lg:w-40  hover:text-white hover:bg-yellow-600 transition-colors font-normal text-gray-600 px-4 py-2"
                  onClick={() => {
                    setOpenAvance(true)
                    setSeleccion(false)
                  }}
                >
                  Subir avance
                </button>
                <button
                  type="button"
                  className="w-full lg:w-40  hover:text-white hover:bg-green-600  font-normal text-gray-600 px-4 py-2"
                  onClick={() => {
                    setOpen(true)
                    setSeleccion(false)
                  }}
                >
                  Subir archivo final
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
      {values.link_final ??
      pdfName ??
      (values.archivos_avances &&
        JSON.parse(values.archivos_avances).length > 0)
        ? (
        <section className="flex flex-col lg:flex-row gap-3 w-full">
          <div className="bg-[#fff] p-0 lg:p-0 rounded-xl w-full lg:w-full relative">
            <div className="hidden md:grid grid-cols-1 md:grid-cols-7 gap-4 mb-2 md:px-4 md:py-2 text-gray-400 border-y border-gray-300 w-full">
              <h5 className="md:text-left col-span-2">Archivo </h5>
              <h5 className="md:text-left">Tipo de archivo</h5>
              <h5 className="md:text-left bg-yellow-500/70 text-black w-fit px-2 col-span-2">
                Tiempo de expiración{' '}
              </h5>
              <h5 className="text-center w-full text-black  px-2">Intentos</h5>
              <h5 className="md:text-left"></h5>
            </div>
            {values.archivos_avances && (
              <>
                {JSON.parse(values.archivos_avances).map(
                  (avances: archivoavancesValues) => (
                    <div
                      key={avances.id}
                      className="grid grid-cols-1 md:grid-cols-7 gap-4 items-center mb-4 bg-gray-50 p-4 rounded-xl shadow-sm cursor-pointer w-full"
                    >
                      <div className="hidden md:block md:text-center col-span-2">
                        <div className="text-left flex gap-3 items-center">
                          <img src={filarachive} alt="" className="w-10 h-10" />
                          <span className="line-clamp-2 text-black">
                            {formatFileName(avances.nombre)}
                          </span>
                        </div>
                      </div>
                      <div className="hidden md:block md:text-center">
                        <span className="text-left flex gap-2 font-bold items-center w-fit px-2 text-white bg-yellow-600">
                          Avance
                        </span>
                      </div>
                      <div className="hidden md:block md:text-center col-span-2">
                        <span className="text-left flex gap-2 items-center w-fit px-2 text-black">
                          {tiempoRestante != null && tiempoRestante > 0
                            ? (
                            <span className="text-left flex gap-2 items-center w-fit px-2">
                              {formatTime(tiempoRestante)}
                            </span>
                              )
                            : (
                            <Skeleton
                              variant="rectangular"
                              className="w-[70%] h-full"
                            />
                              )}
                        </span>
                      </div>
                      <div className="hidden md:block md:text-center ">
                        <span className="w-fit px-2 text-black">
                          {avances.limite}
                        </span>
                      </div>
                      <div className="hidden md:flex md:justify-end items-center gap-4 ">
                        {!loadingDescarga
                          ? (
                          <BsFillCloudArrowDownFill
                            className=" text-green-600 text-3xl w-fit lg:w-fit text-center"
                            onClick={() => {
                              descargarArchivoZip(avances.nombre)
                            }}
                          />
                            )
                          : (
                          <BsFillCloudArrowDownFill className=" text-green-800 text-3xl w-fit lg:w-fit text-center" />
                            )}
                        <BsFillTrashFill
                          className=" text-red-600 text-2xl w-fit lg:w-fit text-center"
                          onClick={() => {
                            preguntarArchivo(avances.id, avances.nombre)
                          }}
                        />
                      </div>
                    </div>
                  )
                )}
              </>
            )}
            {pdfName != undefined && (
              <div className="grid grid-cols-1 md:grid-cols-7 gap-4 items-center mb-4 bg-gray-50 p-4 rounded-xl shadow-sm cursor-pointer w-full">
                <div className="hidden md:block md:text-center col-span-2">
                  <div className="text-left flex gap-3 items-center">
                    <img src={pdf} alt="" className="w-10 h-10" />
                    <span className="line-clamp-2 text-black">
                      {formatFileName(pdfName)}
                    </span>
                  </div>
                </div>
                <div className="hidden md:block md:text-center">
                  <span className="text-left flex gap-2 font-bold items-center w-fit px-2 text-white bg-red-600">
                    Sustentación
                  </span>
                </div>
                <div className="hidden md:block md:text-center col-span-2">
                  <span className="text-left flex gap-2 items-center w-fit px-2 text-black">
                    {tiempoRestante != null && tiempoRestante > 0
                      ? (
                      <span className="text-left flex gap-2 items-center w-fit px-2">
                        {formatTime(tiempoRestante)}
                      </span>
                        )
                      : (
                      <Skeleton
                        variant="rectangular"
                        className="w-[70%] h-full"
                      />
                        )}
                  </span>
                </div>
                <div className="hidden md:block md:text-center ">
                  <span className="w-fit px-2 text-black"></span>
                </div>
                <div className="hidden md:flex md:justify-end items-center gap-4 ">
                  <a
                    href={`${Global.urlImages}/propuestas/${pdfName ?? ''}`}
                    target="_blank"
                    className="text-center flex gap-2 items-center w-fit px-2 justify-center"
                    rel="noreferrer"
                  >
                    <IoEyeSharp className="text-3xl text-center text-violet-500 hover:text-violet-700 transition-colors cursor-pointer" />
                  </a>
                  {!loadingDescarga
                    ? (
                    <BsFillCloudArrowDownFill
                      className=" text-green-600 text-3xl w-fit lg:w-fit text-center"
                      onClick={() => {
                        descargarPDF()
                      }}
                    />
                      )
                    : (
                    <BsFillCloudArrowDownFill className=" text-green-800 text-3xl w-fit lg:w-fit text-center" />
                      )}
                  <BsFillTrashFill
                    className=" text-red-600 text-2xl w-fit lg:w-fit text-center"
                    onClick={() => {
                      preguntarPDF()
                    }}
                  />
                </div>
              </div>
            )}
            {values.link_final && (
              <div className="grid grid-cols-1 md:grid-cols-7 gap-4 items-center mb-4 bg-gray-50 p-4 rounded-xl shadow-sm cursor-pointer w-full">
                <div className="hidden md:block md:text-center col-span-2">
                  <div className="text-left flex gap-3 items-center">
                    <img src={zip} alt="" className="w-10 h-10" />
                    <span className="line-clamp-2 text-black">
                      {formatFileName(values.link_final)}
                    </span>
                  </div>
                </div>
                <div className="hidden md:block md:text-center">
                  <span className="text-left flex gap-2 font-bold items-center w-fit px-2 text-white bg-green-600">
                    Archivo final
                  </span>
                </div>
                <div className="hidden md:block md:text-center col-span-2">
                  <span className="text-left flex gap-2 items-center w-fit px-2 text-black">
                    {tiempoRestante != null && tiempoRestante > 0
                      ? (
                      <span className="text-left flex gap-2 items-center w-fit px-2">
                        {formatTime(tiempoRestante)}
                      </span>
                        )
                      : (
                      <Skeleton
                        variant="rectangular"
                        className="w-[70%] h-full"
                      />
                        )}
                  </span>
                </div>
                <div className="hidden md:block md:text-center ">
                  <span className="w-fit px-2 text-black">{limite}</span>
                </div>
                <div className="hidden md:flex md:justify-end items-center gap-4 ">
                  {!loadingDescarga
                    ? (
                    <BsFillCloudArrowDownFill
                      className=" text-green-600 text-3xl w-fit lg:w-fit text-center"
                      onClick={() => {
                        descargarZIP()
                      }}
                    />
                      )
                    : (
                    <BsFillCloudArrowDownFill className=" text-green-800 text-3xl w-fit lg:w-fit text-center" />
                      )}
                  <BsFillTrashFill
                    className=" text-red-600 text-2xl w-fit lg:w-fit text-center"
                    onClick={() => {
                      preguntarZIP()
                    }}
                  />
                </div>
              </div>
            )}
          </div>
        </section>
          )
        : (
        <div className="w-full  pb-4 flex flex-col gap-4">
          <h2 className="text-black w-full text-center text-sm lg:text-xl">
            Aun no hay archivos para este proyecto
          </h2>
        </div>
          )}
      <SubirArchivosFinales
        open={open}
        setOpen={setOpen}
        id={id}
        getOneBrief={getOneBrief}
      />
      <SubirAvances
        open={openAvance}
        setOpen={setOpenAvance}
        id={id}
        getOneBrief={getOneBrief}
      />
      <SubirArchivosPDF
        open={openPDF}
        setOpen={setOpenPDF}
        id={id}
        getOneBrief={getOneBrief}
      />
    </>
  )
}
