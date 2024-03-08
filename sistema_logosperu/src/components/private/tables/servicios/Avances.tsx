/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Fragment, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import useAuth from '../../../../hooks/useAuth'
import axios from 'axios'
import { Global } from '../../../../helper/Global'
import Swal, { type SweetAlertResult } from 'sweetalert2'
import { Loading } from '../../../shared/Loading'
import { useFormik } from 'formik'
import { SchemaPropuestas } from '../../../shared/schemas/Schemas'
import { Errors } from '../../../shared/Errors'
import { SwiperAvances } from './SwiperAvances'
import { ModalRegistro } from './ModalRegistro'
import { ViewAvance } from './ViewAvance'
import { FiInstagram } from 'react-icons/fi'
import { BsChatRightText } from 'react-icons/bs'
import { FaWhatsapp, FaFacebookF } from 'react-icons/fa'

import {
  type valuesResumen,
  type FinalValues,
  type arrayCorreos,
  type avanceValues,
  type ValuesPlanes
} from '../../../shared/schemas/Interfaces'
import { ArchivosFinales } from './ArchivosFinales'
import { ViewFinal } from './ViewFinal'
import { ViewActa } from './ViewActa'

// import { Chat } from './Chat'
import { RegistroMarca } from './RegistroMarca'
import { RegistroMail } from './RegistroMail'
import { ModalQuestion } from './modals/ModalQuestion'
import { ModalActaEstado } from './modals/ModalActaEstado'
import { ModalCorreoFinal2 } from './ModalCorreoFinal2'
import { RegistroEmail2 } from './RegistroEmail2'
import { ModalaAvisonNotificacion } from './avisoNotificacion/ModalaAvisonNotificacion'
import { ModalActaAceptacion } from './actaAceptacion/ModalActaAceptacion'
import { IndexComunity } from './community/IndexComunity'
import { ViewAlta } from './modals/ViewAlta'
import { OnlyCalendario } from './community/OnlyCalendario'
import { ModalDescripcion2 } from './community/ModalDescripcion2'

interface valuesDatos {
  idCliente: string
  nombres: string
  email: string
  marca: string
  celular: string
  id_contrato: string
  comentarios: string
}

interface values {
  nombres: string
  email: string
  correo: string
  celular: string
  fecha: string
  hora_acta: string
  nombre_marca: string
  archivos: string
  id_contrato: string
  fecha_fin: string
  fecha_inicio: string
  observaciones: string
  comunnity: string
}

export const Avances = (): JSX.Element => {
  const { id } = useParams()
  const navigate = useNavigate()
  const token = localStorage.getItem('token')
  const { setTitle } = useAuth()
  const [loading, setLoading] = useState(true)
  const [plan, setplan] = useState<ValuesPlanes | null>(null)
  const [open, setOpen] = useState(false)
  const [openCorreoActa, setOpenCorreoActa] = useState(false)
  const [openAvisoNotificacion, setOpenAvisoNotificacion] = useState(false)
  const [openActaAceptacion, setOpenActaAceptacion] = useState(false)
  const [openQuestion, setOpenQuestion] = useState(false)
  const [openModal, setOpenModal] = useState(false)
  const [selectIDCLIENTE, setSelectIDCLIENTE] = useState(0)
  const [selectedItem, setSelectedItem] = useState<Event | null>(null)
  const [datos, setDatos] = useState<values>({
    nombres: '',
    email: '',
    correo: '',
    celular: '',
    fecha: '',
    hora_acta: '',
    nombre_marca: '',
    archivos: '',
    id_contrato: '',
    fecha_fin: '',
    fecha_inicio: '',
    observaciones: '',
    comunnity: ''
  })
  //   const [openChat, setOpenChat] = useState(false)
  const [openMail, setOpenMail] = useState(false)
  const [openCorreoFinal, setOpenCorreoFinal] = useState(false)
  const [arrayAvances, setArrayAvances] = useState([])
  const [arrayAlta, setArrayAlta] = useState<any | null>(null)
  const [arrayFinal, setArrayFinal] = useState([])
  const [arrayActa, setArrayActa] = useState([])
  const [openActa, setOpenActa] = useState(false)
  const [datos2, setDatos2] = useState<valuesDatos | null>(null)
  const [pdfName, setpdfName] = useState<string | undefined>('')
  const [avance, setAvance] = useState<avanceValues>({
    contexto: '',
    imagenes: [],
    archivos: [],
    correos: [],
    asunto: '',
    conclusion: '',
    contacto: '',
    empresa: '',
    fechaacta: '',
    firma: '',
    motivo: '',
    fecha: '',
    hora: ''
  })
  const [final, setfinal] = useState<FinalValues>({
    contexto: '',
    correos: [],
    asunto: '',
    fecha: '',
    hora: '',
    firma: ''
  })
  const [fechaCreacion, setFechaCreacion] = useState<Date | null>(null)
  const [openAvance, setOpenAvance] = useState(false)
  const [openFinal, setOpenFinal] = useState(false)
  const [openAlta, setopenAlta] = useState(false)
  const [openMarca, setOpenMarca] = useState(false)
  const [correos, setCorreos] = useState<arrayCorreos[]>([])
  const [, setResumen] = useState<valuesResumen[]>([])
  const [colaboradores, setColaboradores] = useState([])
  const [colaborador, setColaborador] = useState([])
  const [limite, setLimite] = useState(0)
  const [openMailFinal, setOpenMailFinal] = useState(false)
  const [validateBrief, seValidateBrief] = useState<boolean | null>(null)

  const updatePropuestas = async (): Promise<void> => {
    setLoading(true)
    const data = new FormData()
    data.append('comentarios', values.comentarios)
    data.append('_method', 'PUT')
    try {
      const respuesta = await axios.post(
        `${Global.url}/updatePropuestas/${id ?? ''}`,
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
        Swal.fire('Actualización exitosa', '', 'success')
        getOneBrief2()
      } else {
        Swal.fire('Error al actualizar', '', 'error')
      }
    } catch (error: unknown) {
      Swal.fire('Error', '', 'error')
    }
    setLoading(false)
  }

  const parseFecha = (fechaString: string): Date => {
    const [dia, mes, ano] = fechaString.split('/')
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    return new Date(ano, mes - 1, dia)
  }

  const cards = [
    {
      id: 1,
      title: 'Calendario comunnity'
    }
  ]

  const {
    handleSubmit,
    handleChange,
    setValues,
    errors,
    values,
    touched,
    handleBlur,
    isSubmitting
  } = useFormik({
    initialValues: {
      link_final: '',
      fecha_fin: '',
      comentarios: '',
      propuestas: '',
      archivos_avances: ''
    },
    validationSchema: SchemaPropuestas,
    onSubmit: updatePropuestas
  })

  const getOneBrief = async (): Promise<void> => {
    try {
      const request = await axios.get(`${Global.url}/getVenta/${id ?? ''}`, {
        headers: {
          Authorization: `Bearer ${
            token !== null && token !== '' ? `Bearer ${token}` : ''
          }`
        }
      })
      const codContr: string = request.data[0].id_contrato.split('_')[0]
      const requestPlan = await axios.get(
        `${Global.url}/onePlanToNombre/${codContr ?? ''}`,
        {
          headers: {
            Authorization: `Bearer ${
              token !== null && token !== '' ? `Bearer ${token}` : ''
            }`
          }
        }
      )
      setplan(requestPlan.data[0])
      if (requestPlan.data[0].tipo?.includes('Diseño Logotipo')) {
        const respuesta = await axios.get(
          `${Global.url}/oneBriefDiseñoNewToSeguimiento/${id ?? ''}`,
          {
            headers: {
              Authorization: `Bearer ${
                token !== null && token !== '' ? `Bearer ${token}` : ''
              }`
            }
          }
        )
        if (respuesta.data[0]) {
          seValidateBrief(true)
        } else {
          seValidateBrief(false)
        }
      } else if (codContr == 'LPBRO') {
        const respuesta = await axios.get(
          `${Global.url}/oneBriefBrochureToSeguimiento/${id ?? ''}`,
          {
            headers: {
              Authorization: `Bearer ${
                token !== null && token !== '' ? `Bearer ${token}` : ''
              }`
            }
          }
        )
        if (respuesta.data[0]) {
          seValidateBrief(true)
        } else {
          seValidateBrief(false)
        }
      } else if (codContr == 'LPFLYER') {
        const respuesta = await axios.get(
          `${Global.url}/oneBriefFlyerToSeguimiento/${id ?? ''}`,
          {
            headers: {
              Authorization: `Bearer ${
                token !== null && token !== '' ? `Bearer ${token}` : ''
              }`
            }
          }
        )
        if (respuesta.data[0]) {
          seValidateBrief(true)
        } else {
          seValidateBrief(false)
        }
      } else {
        seValidateBrief(null)
      }
      //   setplanes(requestPlan.data[0])
      if (request.data[0].limitar_archivos) {
        setLimite(request.data[0].limitar_archivos)
      }
      setValues({
        ...values,
        comentarios: request.data[0].comentarios,
        link_final: request.data[0].archivos_finales,
        propuestas: request.data[0].propuestas,
        fecha_fin: request.data[0].fecha_fin,
        archivos_avances: request.data[0].archivos_avances
      })
      setDatos2({
        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
        nombres: `${request.data[0].nombres} ${request.data[0].apellidos}`,
        idCliente: request.data[0].id_cliente,
        celular: request.data[0].celular,
        email: request.data[0].email,
        marca: request.data[0].nombre_marca,
        id_contrato: request.data[0].id_contrato,
        comentarios: request.data[0].comentarios
      })
      setpdfName(request.data[0].propuestas)
      setColaborador(
        request.data[0].asignacion ? JSON.parse(request.data[0].asignacion) : []
      )
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

      if (request.data[0].contenido) {
        setArrayAlta(JSON.parse(request.data[0].contenido))
      }
      if (request.data[0].acta_aceptacion) {
        setArrayActa(JSON.parse(request.data[0].acta_aceptacion))
      } else {
        setArrayActa([])
      }
      if (request.data[0].resumen) {
        setResumen(JSON.parse(request.data[0].resumen))
      } else {
        setResumen([])
      }
      if (request.data[0].fecha_fin) {
        setFechaCreacion(parseFecha(request.data[0].fecha_fin))
      }
      setTitle(
        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
        `${request.data[0].nombres} ${request.data[0].apellidos} - ${
          // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
          request.data[0].nombre_marca
            ? request.data[0].nombre_marca
            : 'No registrado'
        }`
      )
      setSelectIDCLIENTE(request.data[0].id_cliente)
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
        hora_acta: `${
          // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
          request.data[0].hora_acta ? request.data[0].hora_acta : ''
        }`,
        nombre_marca: `${
          // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
          request.data[0].nombre_marca ? request.data[0].nombre_marca : ''
        }`,
        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
        archivos: `${request.data[0].acta_aceptacion}`,
        id_contrato: request.data[0].id_contrato,
        fecha_fin: request.data[0].fecha_fin,
        fecha_inicio: request.data[0].fecha_inicio,
        observaciones: request.data[0].observaciones,
        comunnity: request.data[0].community
          ? JSON.parse(request.data[0].community)
          : []
      }))
      console.log(request.data[0].community)

      if (request.data[0].email && request.data[0].email != null) {
        setCorreos([
          ...correos,
          { id: Date.now(), correo: request.data[0].email }
        ])
      }
      setLoading(false)
    } catch (error) {}
  }

  const getOneBrief2 = async (): Promise<void> => {
    setLoading(true)
    try {
      const request = await axios.get(`${Global.url}/getVenta/${id ?? ''}`, {
        headers: {
          Authorization: `Bearer ${
            token !== null && token !== '' ? `Bearer ${token}` : ''
          }`
        }
      })
      setValues({
        ...values,
        comentarios: request.data[0].comentarios,
        link_final: request.data[0].archivos_finales,
        propuestas: request.data[0].propuestas,
        fecha_fin: request.data[0].fecha_fin,
        archivos_avances: request.data[0].archivos_avances
      })
    } catch (error) {}
    setLoading(false)
  }

  const getColaboradores = async (): Promise<void> => {
    const request = await axios.get(`${Global.url}/getColaboradores`, {
      headers: {
        Authorization: `Bearer ${token !== null && token !== '' ? token : ''}`
      }
    })
    setColaboradores(request.data)
  }

  useEffect(() => {
    getColaboradores()
  }, [])

  useEffect(() => {
    setLimite(0)
    getOneBrief()
  }, [id])

  useEffect(() => {
    if (errors && isSubmitting) {
      const firstErrorKey = Object.keys(errors)[0]
      const firstErrorElement = document.getElementsByName(firstErrorKey)[0]
      if (firstErrorElement) {
        firstErrorElement.focus()
      }
    }
  }, [touched, errors, isSubmitting])

  const mostrarAlerta = (): void => {
    Swal.fire({
      title: 'Aun no cuenta con una marca registrada',
      showDenyButton: true,
      confirmButtonText: 'Registrar marca',
      denyButtonText: 'Cancelar'
    }).then(async (result: SweetAlertResult) => {
      if (result.isConfirmed) {
        setOpenMarca(true)
      }
    })
  }

  return (
    <>
      {loading
        ? <Loading />
        : (
        <>
           {(datos?.id_contrato.split('_')[0]).includes('LPCM')
             ? <form className="mt-5" onSubmit={handleSubmit}>
              <section className="grid grid-cols-2 lg:grid-cols-3 gap-5 mt-1">
                <div className="w-full h-[300px] lg:h-[600px] col-span-2 min-h-[300px] lg:min-h-[600px] bg-white rounded-xl p-4">
                  <IndexComunity
                    cards={cards}
                    datos={datos}
                    getOneBrief={getOneBrief}
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
                      <FaWhatsapp className="text-2xl text-white" />
                      <span className="absolute inset-0 m-auto w-full h-full text-center flex items-center justify-center text-white text-lg mb-[1px]">
                        Whatsapp
                      </span>
                    </div>
                  </div>
                  <div className="bg-white rounded-xl w-full h-full p-4 overflow-hidden">
                    <h2 className="text-[#129990] font-bold text-center w-full uppercase text-[24px]">
                      Últimos eventos
                    </h2>
                    <OnlyCalendario
                      // @ts-expect-error
                      events={datos?.comunnity}
                      // @ts-expect-error
                      setSelectedItem={setSelectedItem}
                      setOpen={setOpenModal}
                    />
                  </div>
                </div>
              </section>

              <div className="bg-white p-4 rounded-xl mt-6">
                <div className="w-full flex flex-col justify-start md:items-start gap-y-2 relative">
                  <div className="flex flex-col gap-2 mb-3 ">
                    <h2 className="text-xl lg:text-2xl font-bold text-black">
                      Seguimiento del proyecto
                    </h2>
                    <h3 className="font-bold text-base">
                      <span className="text-gray-400 text-sm lg:text-base">
                        Correos recibidos
                      </span>{' '}
                    </h3>
                  </div>
                  <span
                    className="w-fit px-4 py-2 bg-main text-white font-bold rounded-xl text-xs md:text-base absolute right-2 top-8 lg:top-0 flex gap-2 items-center cursor-pointer"
                    onClick={() => {
                      if (
                        datos.correo &&
                        datos.correo != 'null' &&
                        datos.correo != null
                      ) {
                        setOpenQuestion(true)
                      } else {
                        Swal.fire({
                          title: 'EL cliente no tiene un email registrado',
                          showDenyButton: true,
                          confirmButtonText: 'Registrar email',
                          denyButtonText: 'Cancelar'
                        }).then(async (result: SweetAlertResult) => {
                          if (result.isConfirmed) {
                            setOpenMail(true)
                          }
                        })
                      }
                    }}
                  >
                    Agregar avance
                  </span>
                  <section className="w-full quitar_padding_bottom">
                    <SwiperAvances
                      arrayAlta={arrayAlta}
                      arrayAvances={arrayAvances}
                      setAvance={setAvance}
                      setOpen={setOpenAvance}
                      setOpenFinal={setOpenFinal}
                      arrayFinal={arrayFinal}
                      setFinal={setfinal}
                      setOpenActa={setOpenActa}
                      arrayActa={arrayActa}
                      datos={datos}
                      setOpenAlta={setopenAlta}
                    />
                  </section>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl mt-6">
                <ArchivosFinales
                  getOneBrief={getOneBrief}
                  values={values}
                  pdfName={pdfName}
                  setpdfName={setpdfName}
                  fechaCreacion={fechaCreacion}
                  limite={limite}
                  plan={plan}
                  validateBrief={validateBrief}
                />
              </div>
              <div className="bg-white p-4 rounded-xl mt-6">
                <div className="flex justify-between gap-2 mb-4">
                  <h2 className="text-base w-full lg:text-2xl font-bold text-black">
                    Comentario general
                  </h2>
                  <div className="flex gap-2 w-full justify-end">
                    <input
                      type="submit"
                      className="bg-main_2-200 text-white hover:bg-primary flex items-center text-sm lg:text-base gap-2 h-fit lg:h-auto py-2 px-4 rounded-lg transition-colors cursor-pointer"
                      value="Grabar comentario"
                    />
                  </div>
                </div>
                <div className="w-full flex justify-center items-center flex-col md:flex-row gap-2 lg:gap-5">
                  <div className="w-full">
                    <textarea
                      cols={30}
                      rows={10}
                      className="border placeholder-gray-400 focus:outline-none
                                                        focus:border-black w-full  pr-4 h-24 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white
                                                        border-gray-300 rounded-md transition-all text-black"
                      name="comentarios"
                      value={values.comentarios}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    ></textarea>

                    <Errors
                      errors={errors.comentarios}
                      touched={touched.comentarios}
                    />
                  </div>
                </div>
              </div>
            </form>
             : (
            <form className="mt-5" onSubmit={handleSubmit}>
              <div className="bg-white p-4 rounded-xl mt-6">
                <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 md:gap-0">
                  <span className="text-left flex flex-col md:flex-row gap-2 md:gap-6 text-black uppercase">
                    <span className="text-sm md:text-base font-bold">
                      COLABORADOR(ES) A CARGO:
                    </span>
                    {colaborador?.map((asignacion: any, index: number) => {
                      const assignedCollaborators = colaboradores
                        .filter(
                          (colaborador: { id: number, name: string }) =>
                            colaborador.id == asignacion.peso
                        )
                        .map(
                          (colaborador: { name: string }) => colaborador.name
                        )
                      return (
                        <Fragment key={index}>
                          {assignedCollaborators && (
                            <span>{assignedCollaborators}</span>
                          )}
                          {index < colaborador.length - 1}
                        </Fragment>
                      )
                    })}
                  </span>
                  {!values.fecha_fin && (
                    <div className="p-0 bg-yellow-600 hover:bg-yellow-700 rounded-xl">
                      {id != null && values.fecha_fin == null && (
                        <button
                          type="button"
                          onClick={() => {
                            if (datos2?.email && datos2?.comentarios) {
                              setOpenCorreoFinal(true)
                            } else if (!datos2?.comentarios) {
                              Swal.fire(
                                'Debe colocar sus comentarios generales',
                                '',
                                'warning'
                              )
                            } else {
                              Swal.fire({
                                title:
                                  'EL cliente no tiene un email registrado',
                                showDenyButton: true,
                                confirmButtonText: 'Registrar email',
                                denyButtonText: 'Cancelar'
                              }).then(async (result: SweetAlertResult) => {
                                if (result.isConfirmed) {
                                  setOpenMailFinal(true)
                                }
                              })
                            }
                          }}
                          className="text-sm text-center w-full md:text-base transition-colors text-white font-bold flex items-center justify-center gap-x-4 p-2 flex-1 rounded-xl"
                        >
                          Finalizar servicio
                        </button>
                      )}
                    </div>
                  )}
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl mt-6">
                <ArchivosFinales
                  getOneBrief={getOneBrief}
                  values={values}
                  pdfName={pdfName}
                  setpdfName={setpdfName}
                  fechaCreacion={fechaCreacion}
                  limite={limite}
                  plan={plan}
                  validateBrief={validateBrief}
                />
              </div>

              <div className="bg-white p-4 rounded-xl mt-6">
                <div className="w-full flex flex-col justify-start md:items-start gap-y-2 relative">
                  <div className="flex flex-col gap-2 mb-3 ">
                    <h2 className="text-xl lg:text-2xl font-bold text-black">
                      Seguimiento del proyecto
                    </h2>
                    <h3 className="font-bold text-base">
                      <span className="text-gray-400 text-sm lg:text-base">
                        Correos recibidos
                      </span>{' '}
                    </h3>
                  </div>
                  <span
                    className="w-fit px-4 py-2 bg-main text-white font-bold rounded-xl absolute right-2 flex gap-2 items-center cursor-pointer"
                    onClick={() => {
                      if (
                        datos.correo &&
                        datos.correo != 'null' &&
                        datos.correo != null
                      ) {
                        setOpenQuestion(true)
                      } else {
                        Swal.fire({
                          title: 'EL cliente no tiene un email registrado',
                          showDenyButton: true,
                          confirmButtonText: 'Registrar email',
                          denyButtonText: 'Cancelar'
                        }).then(async (result: SweetAlertResult) => {
                          if (result.isConfirmed) {
                            setOpenMail(true)
                          }
                        })
                      }
                    }}
                  >
                    Agregar avance
                  </span>
                  <section className="w-full quitar_padding_bottom">
                    <SwiperAvances
                      arrayAlta={arrayAlta}
                      arrayAvances={arrayAvances}
                      setAvance={setAvance}
                      setOpen={setOpenAvance}
                      setOpenFinal={setOpenFinal}
                      arrayFinal={arrayFinal}
                      setFinal={setfinal}
                      setOpenActa={setOpenActa}
                      arrayActa={arrayActa}
                      datos={datos}
                      setOpenAlta={setopenAlta}
                    />
                  </section>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl mt-6">
                <div className="flex justify-between gap-2 mb-4">
                  <h2 className="text-xl w-full lg:text-2xl font-bold text-black">
                    Comentario general
                  </h2>
                  <div className="flex gap-2 w-full justify-end">
                    <input
                      type="submit"
                      className="bg-main_2-200 text-white hover:bg-primary flex items-center gap-2 py-2 px-4 rounded-lg transition-colors cursor-pointer"
                      value="Grabar comentario"
                    />
                  </div>
                </div>
                <div className="w-full flex justify-center items-center flex-col md:flex-row gap-2 lg:gap-5">
                  <div className="w-full">
                    <textarea
                      cols={30}
                      rows={10}
                      className="border placeholder-gray-400 focus:outline-none
                                                      focus:border-black w-full  pr-4 h-24 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white
                                                      border-gray-300 rounded-md transition-all text-black"
                      name="comentarios"
                      value={values.comentarios}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    ></textarea>

                    <Errors
                      errors={errors.comentarios}
                      touched={touched.comentarios}
                    />
                  </div>
                </div>
              </div>

            </form>
               )}
            <ModalQuestion
                open={openQuestion}
                setOpen={setOpenQuestion}
                openCorreo={setOpen}
                setOpenCorreoActa={setOpenCorreoActa}
                setOpenAvisoNotificacion={setOpenAvisoNotificacion}
                values={values}
                setOpenActaAceptacion={setOpenActaAceptacion}
              />
              <ModalActaEstado
                open={openCorreoActa}
                setOpen={setOpenCorreoActa}
                idVenta={id}
                getOneBrief={getOneBrief}
                datos={datos}
                correos={correos}
                setCorreos={setCorreos}
              />
              <ModalRegistro
                open={open}
                setOpen={setOpen}
                idVenta={id}
                getOneBrief={getOneBrief}
                datos={datos}
                correos={correos}
                setCorreos={setCorreos}
              />

              <ModalaAvisonNotificacion
                open={openAvisoNotificacion}
                setOpen={setOpenAvisoNotificacion}
                idVenta={id}
                getOneBrief={getOneBrief}
                datos={datos}
                correos={correos}
                setCorreos={setCorreos}
              />

              <ModalActaAceptacion
                open={openActaAceptacion}
                setOpen={setOpenActaAceptacion}
                idVenta={id}
                getOneBrief={getOneBrief}
                datos={datos}
                correos={correos}
                setCorreos={setCorreos}
              />

              <ViewAvance
                open={openAvance}
                setOpen={setOpenAvance}
                avance={avance}
                datos={datos}
              />
              <ViewFinal
                open={openFinal}
                setOpen={setOpenFinal}
                avance={final}
                datos={datos}
              />

              <ViewAlta
                open={openAlta}
                setOpen={setopenAlta}
                avance={arrayAlta}
                datos={datos}
              />

              <ModalCorreoFinal2
                open={openCorreoFinal}
                setOpen={setOpenCorreoFinal}
                correos={correos}
                setCorreos={setCorreos}
                idVenta={id}
                datos={datos2}
                getOneBrief={getOneBrief}
              />

              <RegistroEmail2
                open={openMailFinal}
                setOpen={setOpenMailFinal}
                id={datos2?.idCliente}
                getOneBrief={getOneBrief}
              />
              {datos.hora_acta && (
                <ViewActa open={openActa} setOpen={setOpenActa} datos={datos} />
              )}
          <button
            className="bg-green-700 rounded-full p-4 fixed right-6 bottom-6 "
            onClick={() => {
              if (datos.nombre_marca.length > 0) {
                navigate(`/admin/seguimiento/${id ?? ''}`)
              } else {
                mostrarAlerta()
              }
            }}
          >
            <BsChatRightText className="text-white text-3xl" />
          </button>
        </>
          )}

      <ModalDescripcion2
        eventSelected={selectedItem}
        open={openModal}
        setOpen={setOpenModal}
      />
      <RegistroMarca
        open={openMarca}
        setOpen={setOpenMarca}
        id={id}
        getOneBrief={getOneBrief}
      />
      <RegistroMail
        open={openMail}
        setOpen={setOpenMail}
        id={selectIDCLIENTE}
        getOneBrief={getOneBrief}
      />
    </>
  )
}
