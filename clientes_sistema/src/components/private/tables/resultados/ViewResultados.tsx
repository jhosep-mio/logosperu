import { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import useAuth from '../../../../hooks/useAuth'
import axios from 'axios'
import { Global } from '../../../../helper/Global'
import Swal from 'sweetalert2'
import { Loading } from '../../../shared/Loading'
import { type FinalValues, type avanceValues, type bannersValues } from '../../../shared/Interfaces'
import espera from './../../../../assets/logo/espera.svg'
import { Worker, Viewer } from '@react-pdf-viewer/core'
import { BsFillCloudArrowDownFill } from 'react-icons/bs'
import Header2 from '../../includes/Header2'
import { pdf, zip } from '../../../shared/Images'
import Skeleton from '@mui/material/Skeleton'
import { SwiperAvances } from './avances/SwiperAvances'
import { ViewFinal } from './avances/ViewFinal'
import Tour from 'reactour'

interface values {
  nombres: string
  email: string
  correo: string
  celular: string
  fecha: string
  nombre_marca: string
}

interface selectorType {
  selector: string
  content: string
}

const useResponsiveTour = (): any => {
  const [steps, setSteps] = useState<selectorType []>([])
  useEffect(() => {
    const handleResize = (): void => {
      const stepsMovil = [
        {
          selector: '.first-stepP',
          content: 'Tenemos el siguiente apartado donde podra descargar sus archivos finales'
        },
        {
          selector: '.second-stepM',
          content: 'Con este boton prodra realizar la descarga'
        },
        {
          selector: '.tercer-stepM',
          content: 'Aqui podra ver el seguimiento del proyecto, como correos adjuntos. Puede presionar sobre cada tarjeta y presionar click en ver más'
        }
      ]
      const stepsPC = [
        {
          selector: '.first-stepP',
          content: 'Tenemos el siguiente apartado donde podra descargar sus archivos finales'
        },
        {
          selector: '.second-stepP',
          content: 'Con este boton prodra realizar la descarga'
        },
        {
          selector: '.tercer-stepP',
          content: 'Aqui podra ver el seguimiento del proyecto, como correos adjuntos. Puede pasar el mouse por cada tarjeta y presionar click en ver más'
        }
      ]
      if (window.innerWidth < 769) {
        setSteps(stepsMovil)
      } else {
        setSteps(stepsPC)
      }
    }
    window.addEventListener('resize', handleResize)
    handleResize()
    return () => { window.removeEventListener('resize', handleResize) }
  }, [])
  return { steps }
}

export const ViewResultados = (): JSX.Element => {
  const { steps } = useResponsiveTour()
  const { id } = useParams()
  const { token, guia, setGuia, auth } = useAuth()
  const navigate = useNavigate()
  const [limite, setLimite] = useState(0)
  const [loading, setLoading] = useState(false)
  const [pdfurl, setpdfurl] = useState('')
  const { setTitle } = useAuth()
  const [loadingComponents, setLoadingComponents] = useState(true)
  const [resultado, setresultado] = useState<bannersValues>({
    id: 0,
    id_contrato: '',
    id_ventas: 0,
    nombre_empresa: '',
    archivos_finales: '',
    imagen1: '',
    pdf_contrato: '',
    propuestas: '',
    fecha_fin: '',
    fecha_inicio: '',
    limitar_descarga: 0,
    asignacion: '',
    created_at: '',
    updated_at: ''
  })
  const [arrayAvances, setArrayAvances] = useState([])
  const [arrayFinal, setArrayFinal] = useState([])
  const [, setAvance] = useState<avanceValues>({
    contexto: '',
    imagenes: [],
    correos: [],
    asunto: '',
    fecha: '',
    hora: ''
  })
  const [datos, setDatos] = useState<values>({ nombres: '', email: '', correo: '', celular: '', fecha: '', nombre_marca: '' })
  const [final, setfinal] = useState<FinalValues>({
    contexto: '',
    correos: [],
    asunto: '',
    fecha: '',
    hora: ''
  })
  const [, setOpenAvance] = useState(false)
  const [openFinal, setOpenFinal] = useState(false)

  const [fechaCreacion, setFechaCreacion] = useState<Date | null>(null)
  const plazo = 30 * 24 * 60 * 60 * 1000 // 30 días en milisegundos
  const [tiempoRestante, setTiempoRestante] = useState<number | null>(null)

  const parseFecha = (fechaString: string): Date => {
    const [dia, mes, ano] = fechaString.split('/')
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    return new Date(ano, mes - 1, dia)
  }

  const upadateBanner = async (): Promise<void> => {
    setLoadingComponents(true)
    const data = new FormData()
    data.append('_method', 'PUT')

    try {
      const respuesta = await axios.post(
        `${Global.url}/updateBanner/${id ?? ''}`,
        data,
        {
          headers: {
            Authorization: `Bearer ${
              token !== null && token !== '' ? token : ''
            }`
          }
        }
      )

      if (respuesta.data.status === 'success') {
        Swal.fire('Actualizado correctamente', '', 'success')
        navigate('/admin/banners')
      } else {
        Swal.fire('Error al realizar la edicion', '', 'error')
      }
    } catch (error) {
      Swal.fire('Error', '', 'error')
    }
    setLoadingComponents(false)
  }

  const getBanner = async (): Promise<void> => {
    const request = await axios.get(
      `${Global.url}/showToResultados/${id ?? ''}`,
      {
        headers: {
          mode: 'no-cors',
          Authorization: `Bearer ${
            token !== null && token !== '' ? `Bearer ${token}` : ''
          }`
        }
      }
    )
    if (request.data[0].propuestas) {
      await axios
        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
        .get(`${Global.url}/pdf/${request.data[0].propuestas}`, {
          headers: {
            mode: 'no-cors',
            Authorization: `Bearer ${
              token !== null && token !== '' ? `Bearer ${token}` : ''
            }`
          },
          responseType: 'arraybuffer'
        })
        .then((response) => {
          const pdfData = new Uint8Array(response.data) // Convierte el contenido binario en un array de bytes
          const pdfBlob = new Blob([pdfData], { type: 'application/pdf' })

          // Convierte el blob en una URL del PDF
          const pdfUrl = URL.createObjectURL(pdfBlob)
          setpdfurl(pdfUrl)
          setLoadingComponents(false)
        })
        .catch((error) => {
          console.error('Error al cargar el PDF:', error)
        })
    }
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    setTitle(`${request.data[0].id_contrato}`)
    setresultado(request.data[0])
    setFechaCreacion(parseFecha(request.data[0].fecha_fin))
    setLimite(request.data[0].limitar_descarga)
    if (request.data[0].array_avances) {
      setArrayAvances(JSON.parse(request.data[0].array_avances))
    } else {
      setArrayAvances([])
    }
    if (request.data[0].array_final) {
      setArrayFinal(JSON.parse(request.data[0].array_final))
    } else {
      setArrayFinal([])
    }
    setDatos(prevDatos => ({
      ...prevDatos,
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      nombres: `${request.data[0].nombres} ${request.data[0].apellidos}`,
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      correo: `${request.data[0].email}`,
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      celular: `${request.data[0].celular}`,
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      fecha: `${request.data[0].array_final}`,
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      nombre_marca: `${request.data[0].nombre_marca}`
    }))
    setLoadingComponents(false)
  }

  const formatearNombre = (fileName: string): string => {
    const prefixIndex = fileName.indexOf('_')
    if (prefixIndex !== -1) {
      return fileName.substring(prefixIndex + 1)
    }
    return fileName
  }

  const descargarPDF = async (): Promise<void> => {
    if (resultado.limitar_descarga <= 3 && limite <= 2) {
      setLoading(true)
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
        a.download = `Sustentacion_de_propuesta_${formatearNombre(
          resultado.propuestas
        )}` // Cambiar por el nombre real del archivo
        document.body.appendChild(a)
        a.click()
        a.remove()
        const resultadoDes = await axios.get(
          `${Global.url}/actualizarLimite/${id ?? ''}`,
          {
            headers: {
              mode: 'no-cors',
              Authorization: `Bearer ${
                token !== null && token !== '' ? `Bearer ${token}` : ''
              }`
            }
          }
        )
        if (resultadoDes.data.mensaje) {
          setLimite(resultadoDes.data.mensaje)
          Swal.fire(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `Va ${resultadoDes.data.mensaje} de 3 descargas como maximo`,
            '',
            'warning'
          )
        }
      } catch (error) {
        console.error(error)
      }
      setLoading(false)
    } else {
      Swal.fire(
        'Ya agoto el maximo de descargas para este archivo',
        '',
        'warning'
      )
    }
  }

  const enviarNotificacion = async (): Promise<void> => {
    const data = new FormData()
    // Utilizar el objeto URL para extraer la ruta
    data.append('id_general', auth.name)
    data.append('tipo', 'cliente')
    data.append('nombre', auth.name)
    data.append('icono', 'descarga')
    data.append('url', id ?? '')
    data.append(
      'contenido',
      `Ha descargado sus archivos finales del proyecto ${
        datos.nombre_marca ?? ''
      }  (${datos?.nombres ?? ''} )`
    )
    try {
      const resultado = await axios.post(`${Global.url}/storeNotiGeneral`, data, {
        headers: {
          Authorization: `Bearer ${
            token !== null && token !== '' ? token : ''
          }`
        }
      })
      console.log(resultado)
    } catch (error: unknown) {
      console.log(error)
    }
  }

  const descargarFinal = async (): Promise<void> => {
    if (resultado.limitar_descarga <= 3 && limite <= 2) {
      setLoading(true)
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
        a.download = `${formatFileName(resultado.archivos_finales)}` // Cambiar por el nombre real del archivo
        document.body.appendChild(a)
        a.click()
        a.remove()
        const resultadoDes = await axios.get(
          `${Global.url}/actualizarLimiteDescarga/${id ?? ''}`,
          {
            headers: {
              mode: 'no-cors',
              Authorization: `Bearer ${
                token !== null && token !== '' ? `Bearer ${token}` : ''
              }`
            }
          }
        )
        if (resultadoDes.data.mensaje) {
          if (resultado.limitar_descarga <= 1 && limite < 1) {
            enviarNotificacion()
          }
          setLimite(resultadoDes.data.mensaje)
          Swal.fire(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `Va ${resultadoDes.data.mensaje} de 3 descargas como maximo`,
            '',
            'warning'
          )
        }
      } catch (error) {
        console.error(error)
      }
      setLoading(false)
    } else {
      Swal.fire(
        'Ya agoto el maximo de descargas para este archivo',
        '',
        'warning'
      )
    }
  }

  function formatFileName (fileName: string): string {
    return fileName.split('_').pop() ?? fileName
  }

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

  useEffect(() => {
    getBanner()
  }, [])

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

  const handleClose = (): void => {
    setGuia(false)
  }

  return (
    <>
      <Header2 />
      {loadingComponents
        ? <Loading />
        : (
        <>
        <Tour steps={steps} isOpen={guia} onRequestClose={handleClose} />
          <form
            className="bg-form p-3 md:p-8 rounded-xl mt-0 lg:mt-4 mb-4 first-stepP"
            onSubmit={() => {
              void upadateBanner()
            }}
          >
            {resultado.propuestas || resultado.archivos_finales
              ? <>
                <div className="flex flex-col md:items-start gap-y-2 mb-8 md:px-4">
                  <div className="flex flex-col gap-0 lg:gap-3 mb-2 lg:mb-6 ">
                    <h2 className="text-xl lg:text-2xl font-bold">Archivos finales</h2>
                    <h3 className="font-bold text-base">
                      <span className="text-gray-400 text-sm lg:text-base">
                        Tiene 30 dias para descargar sus archivos
                      </span>{' '}
                    </h3>
                  </div>
                  {/* MOVIL */}
                  {
                    // eslint-disable-next-line eqeqeq
                    resultado.archivos_finales != undefined &&
                      resultado.archivos_finales && (
                  <div className='flex flex-col gap-3 md:hidden shadow_class p-4'>
                      <div className="flex md:hidden gap-4">
                        <img src={zip} alt="" className="w-10 h-10" />
                        <span className="flex md:justify-left items-center gap-3 font-bold">
                            {formatFileName(resultado.archivos_finales)}
                        </span>
                      </div>
                      <div className="md:hidden flex justify-between gap-3">
                        <div className="md:text-center ">
                          <h5 className="md:hidden text-black font-bold mb-0 text-sm">
                            Tipo de archivo
                          </h5>
                          <span className="text-left block">
                            Editables
                          </span>
                        </div>
                        <div className="md:text-right ">
                          <h5 className="md:hidden text-[#62be6d] font-bold mb-0 text-sm bg">
                            Fecha de creación
                          </h5>
                          <span className="text-right block">
                            {resultado.fecha_fin}
                          </span>
                        </div>
                      </div>
                      <div className="md:hidden flex justify-between gap-3">
                        <div className="md:text-center ">
                          <h5 className="md:hidden text-black bg-yellow-400 w-fit px-2 font-bold mb-0 text-sm ">
                            Tiempo de expiración
                          </h5>
                          {tiempoRestante != null && tiempoRestante <= 0
                            ? <span className="text-left block text-red-500">
                          Plazo expirado
                        </span>
                            : tiempoRestante != null && tiempoRestante > 0
                              ? <span className="text-left block text-black">
                                {formatTime(tiempoRestante)}
                          </span>
                              : (
                            <Skeleton
                              variant="rectangular"
                              className="w-[70%] h-full"
                            />
                                )}
                        </div>
                      </div>
                      <div className="md:hidden flex justify-between gap-3 ">
                        <div className="md:text-center second-stepM">
                          <h5 className="md:hidden text-black font-bold mb-0 text-sm">
                            Descargar
                          </h5>
                          <span className="text-left block ">
                          { tiempoRestante != null && tiempoRestante <= 0
                            ? <BsFillCloudArrowDownFill className=" text-red-800 text-3xl w-fit lg:w-full text-center" onClick={() => {
                              Swal.fire('Su plazo para descargar sus archivos venció', 'Comuniquese con el área de ventas +51 987 038 024', 'warning')
                            }}/>
                            : !loading
                                ? (
                                <BsFillCloudArrowDownFill
                                  className=" text-green-600 text-3xl w-fit lg:w-full text-center cursor-pointer "
                                  onClick={() => {
                                    descargarFinal()
                                  }}
                                />
                                  )
                                : (
                                <BsFillCloudArrowDownFill className=" text-green-800 text-3xl w-fit lg:w-full text-center" />
                                  )}
                          </span>
                        </div>
                      </div>
                  </div>)
                  }
                  {
                    // eslint-disable-next-line eqeqeq
                    resultado.propuestas != undefined &&
                      resultado.propuestas && (
                  <div className='flex flex-col gap-3 md:hidden shadow_class p-4'>
                      <div className="flex md:hidden gap-4">
                        <img src={pdf} alt="" className="w-10 h-10" />
                        <span className="flex md:justify-left items-center gap-3 font-bold">
                            {formatFileName(resultado.propuestas)}
                        </span>
                      </div>
                      <div className="md:hidden flex justify-between gap-3">
                        <div className="md:text-center ">
                          <h5 className="md:hidden text-black font-bold mb-0 text-sm">
                            Tipo de archivo
                          </h5>
                          <span className="text-left block">
                            Propuesta
                          </span>
                        </div>
                        <div className="md:text-right ">
                          <h5 className="md:hidden text-[#62be6d] font-bold mb-0 text-sm bg">
                            Fecha de creación
                          </h5>
                          <span className="text-right block">
                            {resultado.fecha_fin}
                          </span>
                        </div>
                      </div>
                      <div className="md:hidden flex justify-between gap-3">
                        <div className="md:text-center ">
                          <h5 className="md:hidden text-black bg-yellow-400 w-fit px-2 font-bold mb-0 text-sm ">
                            Tiempo de expiración
                          </h5>
                          {tiempoRestante != null && tiempoRestante <= 0
                            ? <span className="text-left block text-red-500">
                           Plazo expirado
                     </span>
                            : tiempoRestante != null && tiempoRestante > 0
                              ? <span className="text-left block text-black">
                                {formatTime(tiempoRestante)}
                          </span>
                              : (
                            <Skeleton
                              variant="rectangular"
                              className="w-[70%] h-full"
                            />
                                )}
                        </div>
                      </div>
                      <div className="md:hidden flex justify-between gap-3">
                        <div className="md:text-center ">
                          <h5 className="md:hidden text-black font-bold mb-0 text-sm ">
                            Descargar
                          </h5>
                          <span className="text-left block ">
                          {tiempoRestante != null && tiempoRestante <= 0
                            ? <BsFillCloudArrowDownFill className=" text-red-800 text-3xl w-fit lg:w-full text-center" onClick={() => {
                              Swal.fire('Su plazo para descargar sus archivos venció', 'Comuniquese con el área de ventas +51 987 038 024', 'warning')
                            }}/>
                            : !loading
                                ? (
                                <BsFillCloudArrowDownFill
                                  className=" text-green-600 text-3xl w-fit lg:w-full text-center cursor-pointer"
                                  onClick={(e: any) => {
                                    e.preventDefault()
                                    descargarPDF()
                                  }}
                                />
                                  )
                                : (
                                <BsFillCloudArrowDownFill className=" text-green-800 text-3xl w-fit lg:w-full text-center" />
                                  )}
                          </span>
                        </div>
                      </div>
                  </div>)
                  }
                  {/* PC */}
                  <div className="hidden md:grid grid-cols-1 md:grid-cols-6 gap-4 mb-2 md:px-4 md:py-2 text-gray-400 border-y border-gray-300 w-full">
                    <h5 className="md:text-left col-span-2">Archivo </h5>
                    <h5 className="md:text-left">Tipo de archivo</h5>
                    <h5 className="md:text-left">Fecha de creación </h5>
                    <h5 className="md:text-left bg-yellow-500/70 text-black w-fit px-2">Tiempo de expiración </h5>
                  </div>
                  {
                    // eslint-disable-next-line eqeqeq
                    resultado.archivos_finales != undefined &&
                      resultado.archivos_finales && (
                        <div className="hidden lg:grid grid-cols-1 md:grid-cols-6 gap-3 items-center mb-3 md:mb-0 bg-transparent p-4 rounded-xl relative shadow_class w-full">
                          <div className="hidden md:block md:text-center col-span-2">
                            <div className="text-left flex gap-3 items-center">
                              <img src={zip} alt="" className="w-10 h-10" />
                              <span className="line-clamp-2 text-black">
                                {formatFileName(resultado.archivos_finales)}
                              </span>
                            </div>
                          </div>
                          <div className="hidden md:block md:text-center">
                            <span className="text-left flex gap-2 font-bold items-center w-fit px-2">
                              Editables
                            </span>
                          </div>
                          <div className="hidden md:block md:text-center">
                            <span className="text-center flex gap-2 items-center w-fit px-2">
                              {resultado.fecha_fin}
                            </span>
                          </div>
                          <div className="hidden md:block md:text-center col-span-2">
                            { tiempoRestante != null && tiempoRestante <= 0
                              ? <span className="text-left flex gap-2 items-center w-fit px-2 text-red-500">
                            Plazo expirado
                            </span>
                              : tiempoRestante != null && tiempoRestante > 0
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
                          </div>
                          <div className="hidden md:flex md:justify-center items-center absolute right-10 top-0 bottom-0">
                            <div className="md:text-center second-stepP">
                              { tiempoRestante != null && tiempoRestante <= 0
                                ? <BsFillCloudArrowDownFill className=" text-red-800 text-3xl w-fit lg:w-full text-center" onClick={() => {
                                  Swal.fire('Su plazo para descargar sus archivos venció', 'Comuniquese con el área de ventas +51 987 038 024', 'warning')
                                }}/>
                                : !loading
                                    ? (
                                <BsFillCloudArrowDownFill
                                  className=" text-green-600 text-3xl w-fit lg:w-full text-center cursor-pointer"
                                  onClick={() => {
                                    descargarFinal()
                                  }}
                                />
                                      )
                                    : (
                                <BsFillCloudArrowDownFill className=" text-green-800 text-3xl w-fit lg:w-full text-center" />
                                      )}
                            </div>
                          </div>
                        </div>
                    )
                  }
                  {
                    // eslint-disable-next-line eqeqeq
                    resultado.propuestas != undefined &&
                      resultado.propuestas && (
                        <div className="hidden lg:grid grid-cols-1 md:grid-cols-6 gap-3 items-center mb-3 md:mb-0 bg-transparent p-4 rounded-xl relative shadow_class w-full">
                          <div className="hidden md:block md:text-center col-span-2">
                            <div className="text-left flex gap-3 items-center">
                              <img src={pdf} alt="" className="w-10 h-10" />
                              <span className="line-clamp-2 text-black">
                                {formatFileName(resultado.propuestas)}
                              </span>
                            </div>
                          </div>
                          <div className="hidden md:block md:text-center">
                            <span className="text-left flex gap-2 font-bold items-center w-fit px-2">
                              Propuesta
                            </span>
                          </div>
                          <div className="hidden md:block md:text-center">
                            <span className="text-center flex gap-2 items-center w-fit px-2">
                              {resultado.fecha_fin}
                            </span>
                          </div>
                          <div className="hidden md:block md:text-center col-span-2">
                            { tiempoRestante != null && tiempoRestante <= 0
                              ? <span className="text-left flex gap-2 items-center w-fit px-2 text-red-500">
                            Plazo expirado
                            </span>
                              : tiempoRestante != null && tiempoRestante > 0
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
                          </div>
                          <div className="hidden md:flex md:justify-center items-center absolute right-10 top-0 bottom-0">
                            <div className="md:text-center">
                              { tiempoRestante != null && tiempoRestante <= 0
                                ? <BsFillCloudArrowDownFill className=" text-red-800 text-3xl w-fit lg:w-full text-center" onClick={() => {
                                  Swal.fire('Su plazo para descargar sus archivos venció', 'Comuniquese con el área de ventas +51 987 038 024', 'warning')
                                }}/>
                                : !loading
                                    ? (
                                <BsFillCloudArrowDownFill
                                  className=" text-green-600 text-3xl w-fit lg:w-full text-center cursor-pointer"
                                  onClick={(e: any) => {
                                    e.preventDefault()
                                    descargarPDF()
                                  }}
                                />
                                      )
                                    : (
                                <BsFillCloudArrowDownFill className=" text-green-800 text-3xl w-fit lg:w-full text-center" />
                                      )}
                            </div>
                          </div>
                        </div>
                    )
                  }
                </div>
              </>
              : (
              <div className="w-full flex flex-col items-center justify-center gap-10 mb-10">
                <p className="text-2xl md:text-4xl text-white font-bold w-full text-center">
                  AUN NO SE HAN SUBIDO SUS ARCHIVOS FINALES
                </p>
                <img
                  src={espera}
                  alt=""
                  className="w-96 h-fit object-contain animate-pulse"
                />
              </div>
                )}
            <div className="flex gap-2 w-full justify-end">
              <input type="hidden" name="oculto" value="1" />
              <Link
                to="/admin"
                className="bg-green-700 px-4 py-2 rounded-md text-white"
              >
                Regresar
              </Link>
            </div>
          </form>

          <div className="bg-form p-3 md:p-8 rounded-xl mt-4 mb-4 w-full tercer-stepP tercer-stepM">
            <div className="flex flex-col gap-3 mb-6 ">
              <h2 className="text-xl lg:text-2xl font-bold">Seguimiento del proyecto</h2>
              <h3 className="font-bold text-base">
                <span className="text-gray-400 text-sm lg:text-base">
                  Correos recibidos
                </span>{' '}
              </h3>
            </div>
            <div className="flex flex-col gap-3 w-full">
                <SwiperAvances arrayAvances={arrayAvances} setAvance={setAvance} setOpen={setOpenAvance} setOpenFinal={setOpenFinal} arrayFinal={arrayFinal} setFinal={setfinal}/>
            </div>
          </div>
          <ViewFinal open={openFinal} setOpen = {setOpenFinal} avance={final} datos={datos}/>

          <div className="bg-white rounded-xl py-4">
            {
              // eslint-disable-next-line eqeqeq
              resultado.propuestas != undefined && resultado.propuestas && (
                <div className="flex flex-col md:items-center gap-y-4 mb-10 md:mb-0 justify-center">
                  <div className="w-full px-8">
                    <p className="font-bold text-black text-center text-lg lg:text-2xl">
                      <span></span> VISUALIZACIÓN DE PROPUESTAS
                    </p>
                  </div>
                  <div className="w-full md:w-[80%] max-h-[700px] overflow-y-scroll mx-auto agregar_scroll">
                    <Worker
                      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
                      workerUrl={
                        'https://clientes.logosperu.com.pe/script/pdf.worker.min.js'
                      }
                    >
                      <Viewer fileUrl={pdfurl} />
                    </Worker>
                  </div>
                </div>
              )
            }
          </div>
        </>
          )}
    </>
  )
}
