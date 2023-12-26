import { useState, type Dispatch, type SetStateAction, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { Global } from '../../../../helper/Global'
import Swal, { type SweetAlertResult } from 'sweetalert2'
import { SubirArchivosFinales } from '../../../shared/modals/SubirArchivosFinales'
import { BsFillCloudArrowDownFill, BsFillTrashFill } from 'react-icons/bs'
import { SubirArchivosPDF } from '../../../shared/modals/SubirArchivosPDF'
import { nodata, pdf, zip } from '../../../shared/Images'
import Skeleton from '@mui/material/Skeleton'
import { IoEyeSharp } from 'react-icons/io5'

interface valuesPropuesta {
  propuestas: string
  link_final: string
}

interface valuesData {
  getOneBrief: () => Promise<void>
  values: valuesPropuesta
  pdfName: string | undefined
  setpdfName: Dispatch<SetStateAction<string | undefined>>
  fechaCreacion: Date | null
  limite: number
}

export const ArchivosFinales = ({
  getOneBrief,
  limite,
  values,
  pdfName,
  setpdfName,
  fechaCreacion
}: valuesData): JSX.Element => {
  const { id } = useParams()
  const token = localStorage.getItem('token')
  const [loadingDescarga, setLoadingDescarga] = useState(false)
  const [open, setOpen] = useState(false)
  const [openPDF, setOpenPDF] = useState(false)

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
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        const tiempoTranscurrido = ahora - new Date(fechaCreacion)
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
    return `${d} días ${h} horas ${m} minutos ${s} segundos`
  }

  return (
    <>
      <div className="flex flex-row gap-0 justify-between lg:gap-3 mb-2 ">
        <div className="flex flex-col gap-3 mb-6 ">
          <h2 className="text-xl lg:text-2xl font-bold text-black">
            Archivos finales  <span className='text-gray-400'>-- {limite} de 3</span>
          </h2>
          <h3 className="font-bold text-base">
            <span className="text-gray-400 text-sm lg:text-base">
              Editables, propuestas
            </span>{' '}
          </h3>
        </div>
        <div className="w-full lg:w-1/3 flex justify-end items-start flex-row  gap-2 lg:gap-5 ">
          <button
            type="button"
            className="w-full lg:w-40  bg-green-600 rounded-xl font-normal text-white px-4 py-2"
            onClick={() => {
              setOpen(true)
            }}
          >
            Subir archivo final
          </button>
          <div className="w-full lg:w-40 relative cursor-pointer">
            <button
              type="button"
              className="w-full bg-main rounded-xl font-normal text-white px-4 py-2 cursor-pointer"
              onClick={() => {
                setOpenPDF(true)
              }}
            >
              Subir propuesta
            </button>
          </div>
        </div>
      </div>
      {values.link_final || pdfName
        ? <section className="mb-4 flex flex-col lg:flex-row gap-3 w-full">
          <div className="bg-[#fff] p-0 lg:p-0 rounded-xl w-full lg:w-full relative">
            <div className="hidden md:grid grid-cols-1 md:grid-cols-5 gap-4 mb-2 md:px-4 md:py-2 text-gray-400 border-y border-gray-300 w-full">
              <h5 className="md:text-left col-span-2">Archivo </h5>
              <h5 className="md:text-left">Tipo de archivo</h5>
              <h5 className="md:text-left bg-yellow-500/70 text-black w-fit px-2 col-span-2">
                Tiempo de expiración{' '}
              </h5>
            </div>
            {values.link_final && (
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center mb-4 bg-gray-50 p-4 rounded-xl shadow-sm cursor-pointer w-full">
                <div className="hidden md:block md:text-center col-span-2">
                  <div className="text-left flex gap-3 items-center">
                    <img src={zip} alt="" className="w-10 h-10" />
                    <span className="line-clamp-2 text-black">
                      {formatFileName(values.link_final)}
                    </span>
                  </div>
                </div>
                <div className="hidden md:block md:text-center">
                  <span className="text-left flex gap-2 font-bold items-center w-fit px-2 text-black">
                    Editables
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
                <div className="hidden md:flex md:justify-center items-center gap-4 absolute right-20">
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
            {pdfName != undefined && (
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center mb-4 bg-gray-50 p-4 rounded-xl shadow-sm cursor-pointer w-full">
                <div className="hidden md:block md:text-center col-span-2">
                  <div className="text-left flex gap-3 items-center">
                    <img src={pdf} alt="" className="w-10 h-10" />
                    <span className="line-clamp-2 text-black">
                      {formatFileName(pdfName)}
                    </span>
                  </div>
                </div>
                <div className="hidden md:block md:text-center">
                  <span className="text-left flex gap-2 font-bold items-center w-fit px-2 text-black">
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
                <div className="hidden md:flex md:justify-center items-center gap-4 absolute right-20">
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
              // <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center mb-4 bg-gray-50 p-4 rounded-xl shadow-sm cursor-pointer w-full">
              //   <div className="hidden md:block md:text-center col-span-2">
              //     <div className="text-left flex gap-3 items-center">
              //       <img src={pdf} alt="" className="w-10 h-10" />
              //       <span className="line-clamp-2 text-black">
              //         {formatFileName(pdfName)}
              //       </span>
              //     </div>
              //   </div>
              //   <div className="hidden md:block md:text-center">
              //     <span className="text-left flex gap-2 font-bold items-center w-fit px-2 text-black">
              //       Sustentacion
              //     </span>
              //   </div>
              //   <div className="md:text-center flex gap-5 justify-left">
              //     {!loadingDescarga
              //       ? (
              //       <BsFillCloudArrowDownFill
              //         className=" text-green-600 text-3xl w-fit lg:w-fit text-center"
              //         onClick={() => {
              //           descargarPDF()
              //         }}
              //       />
              //         )
              //       : (
              //       <BsFillCloudArrowDownFill className=" text-green-800 text-3xl w-fit lg:w-fit text-center" />
              //         )}
              //     <BsFillTrashFill
              //       className=" text-red-600 text-2xl w-fit lg:w-fit text-center"
              //       onClick={() => {
              //         preguntarPDF()
              //       }}
              //     />
              //   </div>
              // </div>
            )}
          </div>
        </section>
        : (
        <div className="w-full  pb-6 flex flex-col gap-4">
          <h2 className="text-black w-full text-center text-xl">
            Los archivos finales aun no se han subido
          </h2>
          <img
            src={nodata}
            alt=""
            className="w-full object-contain  h-[200px]"
          />
        </div>
          )}
      <SubirArchivosFinales
        open={open}
        setOpen={setOpen}
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
