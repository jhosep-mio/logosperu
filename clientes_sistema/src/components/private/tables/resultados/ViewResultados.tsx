/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable multiline-ternary */
import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import useAuth from '../../../../hooks/useAuth'
import axios from 'axios'
import { Global } from '../../../../helper/Global'
import Swal from 'sweetalert2'
import { Loading } from '../../../shared/Loading'
import {
  type FinalValues,
  type avanceValues,
  type bannersValues
} from '../../../shared/Interfaces'
import { Worker, Viewer } from '@react-pdf-viewer/core'
import Header2 from '../../includes/Header2'
import { SwiperAvances } from './avances/SwiperAvances'
import { ViewFinal } from './avances/ViewFinal'
import Tour from 'reactour'
import { Archivos } from './components/Archivos'
import { IndexComunity } from './comunnity/IndexComunity'
import { FaFacebookF, FaTiktok } from 'react-icons/fa'
import { FiInstagram } from 'react-icons/fi'
import { v4 as uuidv4 } from 'uuid'

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
  const [steps, setSteps] = useState<selectorType[]>([])
  useEffect(() => {
    const handleResize = (): void => {
      const stepsMovil = [
        {
          selector: '.first-stepP',
          content:
            'Tenemos el siguiente apartado donde podra descargar sus archivos finales'
        },
        {
          selector: '.second-stepM',
          content: 'Con este boton prodra realizar la descarga'
        },
        {
          selector: '.tercer-stepM',
          content:
            'Aqui podra ver el seguimiento del proyecto, como correos adjuntos. Puede presionar sobre cada tarjeta y presionar click en ver más'
        }
      ]
      const stepsPC = [
        {
          selector: '.first-stepP',
          content:
            'Tenemos el siguiente apartado donde podra descargar sus archivos finales'
        },
        {
          selector: '.second-stepP',
          content: 'Con este boton prodra realizar la descarga'
        },
        {
          selector: '.tercer-stepP',
          content:
            'Aqui podra ver el seguimiento del proyecto, como correos adjuntos. Puede pasar el mouse por cada tarjeta y presionar click en ver más'
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
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])
  return { steps }
}

export const ViewResultados = (): JSX.Element => {
  const { steps } = useResponsiveTour()
  const { id } = useParams()
  const { token, guia, setGuia, auth, setDownloadProgress } = useAuth()
  const [limite, setLimite] = useState(0)
  const [loading, setLoading] = useState(false)
  const [pdfurl, setpdfurl] = useState('')
  const [correos, setCorreos] = useState([])
  const { setTitle } = useAuth()
  const [loadingComponents, setLoadingComponents] = useState(true)
  const [resultado, setresultado] = useState<bannersValues>({
    id: 0,
    id_contrato: '',
    nombre_marca: '',
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
    updated_at: '',
    community: ''
  })
  const [brief, setBrief] = useState<any | null>(null)
  const [arrayAvances, setArrayAvances] = useState([])
  const [arrayFinal, setArrayFinal] = useState([])
  const [events, setEvents] = useState<Event[]>([])
  const [, setAvance] = useState<avanceValues>({
    contexto: '',
    imagenes: [],
    correos: [],
    asunto: '',
    fecha: '',
    hora: ''
  })
  const [datos, setDatos] = useState<values>({
    nombres: '',
    email: '',
    correo: '',
    celular: '',
    fecha: '',
    nombre_marca: ''
  })
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

  const getBanner = async (): Promise<void> => {
    const requestColabordador = await axios.get(`${Global.url}/getColaboradores`, {
      headers: {
        Authorization: `Bearer ${token !== null && token !== '' ? token : ''}`
      }
    })

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

    if (request.data[0].asignacion && requestColabordador.data) {
      const asignaciones = JSON.parse(request.data[0].asignacion)
      const correos2: any = []
      asignaciones.forEach((asignacion: any) => {
        // Buscar el colaborador cuyo ID coincide con el peso de la asignación
        const colaborador = requestColabordador.data.find((colaborador: any) => colaborador.id == asignacion.peso)
        if (colaborador) {
          correos2.push({ id: uuidv4(), correo: colaborador.email })
        }
      })
      setCorreos(correos2)
    }

    if (request.data[0].contrato) {
      setBrief({ codigo: request.data[0].contrato.codigo, uso: request.data[0].contrato.uso })
    } else {
      setBrief({ codigo: request.data[0].codigo, uso: request.data[0].uso })
    }
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    setTitle(`${request.data[0].id_contrato}`)
    setresultado(request.data[0])
    setFechaCreacion(
      request.data[0].fecha_fin ? parseFecha(request.data[0].fecha_fin) : null
    )
    setEvents(
      request.data[0].community ? JSON.parse(request.data[0].community) : []
    )
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
    setDatos((prevDatos) => ({
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
      nombre_marca: `${request.data[0].nombre_marca}`,
      aprobacion: request.data[0].aprobacion
        ? JSON.parse(request.data[0].aprobacion)
        : []
    }))
    console.log(JSON.parse(request.data[0].aprobacion))
    setLoadingComponents(false)
  }

  const getData2 = async (): Promise<void> => {
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
    setresultado(request.data[0])
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
          },
          onDownloadProgress: (e) => {
            const loaded = e.loaded
            const total = e.total
            if (total) {
              setDownloadProgress((loaded / total) * 100)
            }
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
      await axios.post(`${Global.url}/storeNotiGeneral`, data, {
        headers: {
          Authorization: `Bearer ${
            token !== null && token !== '' ? token : ''
          }`
        }
      })
    } catch (error: unknown) {}
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
          },
          onDownloadProgress: (e) => {
            const loaded = e.loaded
            const total = e.total
            if (total) {
              setDownloadProgress((loaded / total) * 100)
            }
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

  const descargarArchivoZip = async (nombre: string): Promise<void> => {
    setLoading(true)
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
          const loaded = e.loaded
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
    setLoading(false)
  }

  function formatFileName (fileName: string): string {
    return fileName.split('_').pop() ?? fileName
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

  const cards = [
    {
      id: 1,
      title: 'Calendario comunnity'
    }
  ]

  return (
    <>
      <Header2 />
      {loadingComponents ? (
        <Loading />
      ) : (
        <>
          <Tour steps={steps} isOpen={guia} onRequestClose={handleClose} />
          {(resultado?.id_contrato.split('_')[0]).includes('LPCM') &&
            <section className="grid grid-cols-2 lg:grid-cols-3 lg:gap-5 mt-4">
              <div className="w-full h-[400px] lg:h-[600px] col-span-2 min-h-[300px] lg:min-h-[600px] bg-white rounded-xl p-4">
                <IndexComunity
                  cards={cards}
                  datos={resultado}
                  getOneBrief={getData2}
                  events={events}
                  brief={brief}
                  correos={correos}
                />
              </div>
              <div className="h-[600px] flex flex-col gap-3 col-span-2 lg:col-span-1">
                <div className="bg-white rounded-xl w-full pb-6 h-fit p-4">
                  <h2 className="text-[#129990] font-bold text-center w-full uppercase text-[24px]">
                    Métricas
                  </h2>
                  <div className="w-full bg-[#0861F2] py-3 rounded-lg px-3 mt-6 relative cursor-pointer">
                    <FaFacebookF className="text-2xl text-white" />
                    <span className="absolute inset-0 m-auto w-full h-full text-center flex items-center justify-center text-white text-lg mb-[1px]">
                      Facebook
                    </span>
                  </div>
                  <div className='w-full bg-[url("data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw0NBw0HDQ0HDQcHBw0HBwcNDQ8NDQcNFREWFhURExMYHSggGBoxGxUTITEhJSkrOjouFx8zODMsNygtLisBCgoKDQ0NDw0NFysZFRkrKysrKysrKysrKystKy0tLS0rKysrKysrLS0rLSsrKysrKysrKystLSsrKysrKysrLf/AABEIAIgBcQMBIgACEQEDEQH/xAAbAAADAQEBAQEAAAAAAAAAAAAAAgQBAwYHBf/EABcQAQEBAQAAAAAAAAAAAAAAAAABAhH/xAAaAQEBAQEBAQEAAAAAAAAAAAACAwEHAAYF/8QAGxEAAwEBAQEBAAAAAAAAAAAAAAECAxESEyH/2gAMAwEAAhEDEQA/APO8Y7XJblVaHXeo5g1yXiis9wAAorMaMDQorC0YGsNWHyAAUVhaAAGrC0AAUVhaAAGrC0YGhRWHyYGsUVh4AANWFoAAaoLkGsBqibg1pWl0k8zWlBdJPMYMDeknmMGAuknmMCtb0k8xgVpdIvM1pWl0k8zWla3pJ5mtKC6SeYwYG9B8ztcluVFyW5cwnU6GqJ7klypuS3K06jVE1yXii5LcrTqNUcA63JLlZaG9Qobxiqs9wAAasLRgaFFYWjA1hqwuQACisPAABqwtAAFFYWjGgKKwuTA0GrC5MACisLkAAasLkAAaoLk0MBpk3ma0rW9JPM1pWl0k8zWlBdIvMYMDeknmMGAuknmMGdBdJPM1pQ90HzP1rklypuS3Lkc6n1qomuS3Ki5LcrzqNUTXJblTckuVp1GqJ7ktyouS3K86jVE1yW5UXJbladRqie5Zx3uS3K06iVHEHuS3Kq0N/DAAqrM4DGg1ZjRgaFFYWjAAasLQABRWHgAA1YWgACisLkGNCisLkwNBqwtGABRWHgAA1YXIAA1QHBoYC6SeYwYC6SeY3R0vWt6SeZrelaXSTzN6GMb0HzPS3JblRcluXFp1P11RPckuVNyS5WnUaonuS3Ki5LcrzqNUTXJblTckuVp1GqJ7klypuS3K06jVE1yW5UXJbledRqia5LcqbklytOo1RPcluVFyW5XnUSon4x3uSXK06D6cwa5ZxVWe4YAFFZjQAA1YXJgaxRWFyAaw1YWgACisLQAA1YWgACisPkGNCisLkwNYasLQABRWFoAAaoLkGsBqgODWlBdJPMbrAG9B8z2dyS5U3JLlwlaGqie5LcqLktytOo1RNcluVNyS5WnUaonuSXKm5LcrTqNUTXJblRcluV51GqJ7klypuSXK06jVE9yW5UXJbledRqia5LcqbklytOolRPckuVNyW5XnUaomuS3Ki5LcrTqNUT3JblRcluV51GqJw63JblVaC6hA3jFVZ7gABRWFoGNBqwtGABRWFoAAaszgABRWFoAAasLkGNCisPkwNCisPDA1hqw8AAKKwtAA1vszye+uS3Ki5LcuEKj8xUT3JblRcluSVDVE9yW5UXJLk1Q1RPcluVFyW5VWg1RPckuVNyW5VnUaomuS3Ki5LcrzqNUTXJblTckuVp1EqJ7ktyouS3K86jVE1yW5U3JLladRqie5JcqbktyvOo1RNcluVFyW5WnUaomuS3Km5JcrzqNUT3JblRcluVp1GqJrlnHe5LcrTqNUcQ6XJblZaG/gobxiis9wwNCisLkwNBqwuTAAorC0AANWFyAAUVhaAAGrC0Y0BRWFyY0AvZnk+lXJblRcluXC1R+AqJ7ktyouS3JqhKie5JcqLktySoaonuS3Ki5LckqGqJ7ktyouS3JKhqie5JcqLktyatjVE9yW5UXJblWdRqia5LcqbklytOolRPckuVNyW5XnUaomuS3Ki5LcrTqNUT3JLlTckuV51GqJ7ktyouS3K06jVE1yW5U3JLledRqie5JcqbktytOo1RNcluVFyW5WnUaonuSXKm5JcrzqNUT2Md7ktytOovRyB7kvFVZv4YAFFZnDA0KKw+TA1hqwuQACisLQAA1YWgABez3D6tcluVFyW5cPVHySonuS3Ki5LcmqGqJrktyouS3JKhqie5LcqLktySoSonuSXKm5JckqGqJ7ktyouS3JKhqie5LcqLktyaoaonuSXKm5JckqGqJ7ktyouS3KisSonuSXKm5LcqzqNUTXJblRcluVp1GqJrktypuSXK86jVE9yW5UXJbladRqia5LcqLktytOo1RPckuVNyW5XnUaomuS3Ki5LcrTqNUTXJblTckuV51GqJ7klypuS3K06jVE1yW5UXJbledRqjhxjtcluVp0F1HMGuS8UVnuAAFFZnAY0KKwtGBrC9mcPsVyW5AcTTPhkxbklyASY0xbktyASY0xbktyAaY0xbkly0EmNMS5LcgEmJMW5LcgEmNMS5LcgGmNMW5LcgEmNMW5LcsBJjTFuS3IBpsSYtyW5AUmmNMS5LcgLzTGmLckuWhaaY0xLktyAvNMaYtyS5AWmmNMW5LcsC80xpi3JbkBaaY0xbkly0LzTGmJcluQFppjTFuSXIC80xpi3JeALTTGmYAFU2aAAL0zD//Z")] bg-cover bg-center py-3 rounded-lg px-3 mt-6 relative cursor-pointer'>
                    <FiInstagram className="text-2xl text-white" />
                    <span className="absolute inset-0 m-auto w-full h-full text-center flex items-center justify-center text-white text-lg mb-[1px]">
                      Instagram
                    </span>
                  </div>
                  <div className="w-full bg-[#0DC143] py-3 rounded-lg px-3 mt-6 relative cursor-pointer">
                    <FaTiktok className="text-2xl text-white" />
                    <span className="absolute inset-0 m-auto w-full h-full text-center flex items-center justify-center text-white text-lg mb-[1px]">
                      TikTok
                    </span>
                  </div>
                </div>
                <div className="bg-white rounded-xl w-full h-full p-4 overflow-hidden">
                  <h2 className="text-[#129990] font-bold text-center w-full uppercase text-[24px]">
                    Últimos eventos
                  </h2>
                  {/* <OnlyCalendario
                    events={events}
                    // @ts-expect-error
                    setSelectedItem={setSelectedItem}
                    setOpen={setOpenModal}
                  /> */}
                </div>
              </div>
            </section>
          }

          <form className="bg-form p-3 md:p-8 rounded-xl mt-0 lg:mt-4 mb-4 first-stepP">
            <Archivos
              resultado={resultado}
              formatFileName={formatFileName}
              tiempoRestante={tiempoRestante}
              loading={loading}
              descargarFinal={descargarFinal}
              descargarPDF={descargarPDF}
              descargarArchivoZip={descargarArchivoZip}
            />

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
          {arrayAvances.length > 0 && (
            <div className="bg-form p-3 md:p-8 rounded-xl mt-4 mb-4 w-full tercer-stepP tercer-stepM">
              <div className="flex flex-col gap-3 mb-6 ">
                <h2 className="text-xl lg:text-2xl font-bold">
                  Seguimiento del proyecto
                </h2>
                <h3 className="font-bold text-base">
                  <span className="text-gray-400 text-sm lg:text-base">
                    Correos recibidos
                  </span>{' '}
                </h3>
              </div>
              <div className="flex flex-col gap-3 w-full">
                <SwiperAvances
                  arrayAvances={arrayAvances}
                  setAvance={setAvance}
                  setOpen={setOpenAvance}
                  setOpenFinal={setOpenFinal}
                  arrayFinal={arrayFinal}
                  setFinal={setfinal}
                />
              </div>
            </div>
          )}
          <ViewFinal
            open={openFinal}
            setOpen={setOpenFinal}
            avance={final}
            datos={datos}
          />

          {resultado.propuestas != undefined && resultado.propuestas && (
            <div className="bg-white rounded-xl py-4">
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
            </div>
          )}
        </>
      )}
    </>
  )
}
