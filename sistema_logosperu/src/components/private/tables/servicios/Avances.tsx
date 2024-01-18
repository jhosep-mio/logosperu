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
import {
  type valuesResumen,
  type FinalValues,
  type arrayCorreos,
  type avanceValues
} from '../../../shared/schemas/Interfaces'
import { ArchivosFinales } from './ArchivosFinales'
import { ViewFinal } from './ViewFinal'
import { ViewActa } from './ViewActa'
import { BsChatRightText } from 'react-icons/bs'
// import { Chat } from './Chat'
import { RegistroMarca } from './RegistroMarca'
import { RegistroMail } from './RegistroMail'
import { ModalQuestion } from './modals/ModalQuestion'
import { ModalActaEstado } from './modals/ModalActaEstado'
import { ModalCorreoFinal2 } from './ModalCorreoFinal2'
import { RegistroEmail2 } from './RegistroEmail2'
import { ModalaAvisonNotificacion } from './avisoNotificacion/ModalaAvisonNotificacion'

interface valuesDatos {
  idCliente: string
  nombres: string
  email: string
  marca: string
  celular: string
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
}

export const Avances = (): JSX.Element => {
  const { id } = useParams()
  const navigate = useNavigate()
  const token = localStorage.getItem('token')
  const { setTitle } = useAuth()
  const [loading, setLoading] = useState(true)
  const [open, setOpen] = useState(false)
  const [openCorreoActa, setOpenCorreoActa] = useState(false)
  const [openAvisoNotificacion, setOpenAvisoNotificacion] = useState(false)
  const [openQuestion, setOpenQuestion] = useState(false)
  const [selectIDCLIENTE, setSelectIDCLIENTE] = useState(0)
  const [datos, setDatos] = useState<values>({
    nombres: '',
    email: '',
    correo: '',
    celular: '',
    fecha: '',
    hora_acta: '',
    nombre_marca: '',
    archivos: ''
  })
  //   const [openChat, setOpenChat] = useState(false)
  const [openMail, setOpenMail] = useState(false)

  const [openCorreoFinal, setOpenCorreoFinal] = useState(false)

  const [arrayAvances, setArrayAvances] = useState([])
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
    hora: ''
  })
  const [fechaCreacion, setFechaCreacion] = useState<Date | null>(null)
  const [openAvance, setOpenAvance] = useState(false)
  const [openFinal, setOpenFinal] = useState(false)
  const [openMarca, setOpenMarca] = useState(false)
  const [correos, setCorreos] = useState<arrayCorreos[]>([])
  const [, setResumen] = useState<valuesResumen[]>([])
  const [colaboradores, setColaboradores] = useState([])
  const [colaborador, setColaborador] = useState([])
  const [limite, setLimite] = useState(0)

  const [openMailFinal, setOpenMailFinal] = useState(false)

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
        getOneBrief()
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
      propuestas: ''
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
      if (request.data[0].limitar_archivos) {
        setLimite(request.data[0].limitar_archivos)
      }
      setValues({
        ...values,
        comentarios: request.data[0].comentarios,
        link_final: request.data[0].archivos_finales,
        propuestas: request.data[0].propuestas,
        fecha_fin: request.data[0].fecha_fin
      })
      setDatos2({
        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
        nombres: `${request.data[0].nombres} ${request.data[0].apellidos}`,
        idCliente: request.data[0].id_cliente,
        celular: request.data[0].celular,
        email: request.data[0].email,
        marca: request.data[0].nombre_marca
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
      setLoading(false)
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
        archivos: `${request.data[0].acta_aceptacion}`
      }))
      if (request.data[0].email && request.data[0].email != null) {
        setCorreos([
          ...correos,
          { id: Date.now(), correo: request.data[0].email }
        ])
      }
    } catch (error) {}
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
    getOneBrief()
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
        ? (
        <Loading />
          )
        : (
        <>
          <form className="mt-5" onSubmit={handleSubmit}>
            <div className="bg-white p-8 rounded-xl mt-6">
              <div className="flex justify-between">
                <span className="text-left flex gap-6 text-black uppercase">
                  <span className="font-bold">COLABORADOR(ES) A CARGO:</span>
                  {colaborador?.map((asignacion: any, index: number) => {
                    const assignedCollaborators = colaboradores
                      .filter(
                        (colaborador: { id: number, name: string }) =>
                          colaborador.id == asignacion.peso
                      )
                      .map((colaborador: { name: string }) => colaborador.name)
                    return (
                      <Fragment key={index}>
                        {assignedCollaborators && (
                          <span>{assignedCollaborators}</span>
                        )}
                        {index < colaborador.length - 1 }
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
                          if (datos2?.email) {
                            setOpenCorreoFinal(true)
                          } else {
                            Swal.fire({
                              title: 'EL cliente no tiene un email registrado',
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
                        className="transition-colors text-white font-bold flex items-center justify-center gap-x-4 p-2 flex-1 rounded-xl"
                      >
                        Finalizar servicio
                      </button>
                    )}
                  </div>
                )}
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl mt-6">
              <ArchivosFinales
                getOneBrief={getOneBrief}
                values={values}
                pdfName={pdfName}
                setpdfName={setpdfName}
                fechaCreacion={fechaCreacion}
                limite={limite}
              />
            </div>
            <div className="bg-white p-8 rounded-xl mt-6">
              <div className="w-full flex flex-col justify-start md:items-start gap-y-2 relative">
                <div className="flex flex-col gap-3 mb-6 ">
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
                <section className="w-full">
                  <SwiperAvances
                    arrayAvances={arrayAvances}
                    setAvance={setAvance}
                    setOpen={setOpenAvance}
                    setOpenFinal={setOpenFinal}
                    arrayFinal={arrayFinal}
                    setFinal={setfinal}
                    setOpenActa={setOpenActa}
                    arrayActa={arrayActa}
                    datos={datos}
                  />
                </section>
              </div>
            </div>
            <div className="bg-white p-8 rounded-xl mt-6">
              <div className="flex flex-col gap-3 mb-6 ">
                <h2 className="text-xl lg:text-2xl font-bold text-black">
                  Comentario general
                </h2>
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
              <div className="flex gap-2 w-full justify-end mt-6">
                <input
                  type="submit"
                  className="bg-main_2-200 text-white hover:bg-primary flex items-center gap-2 py-2 px-4 rounded-lg transition-colors cursor-pointer"
                  value="Grabar comentario"
                />
              </div>
            </div>

            <ModalQuestion
              open={openQuestion}
              setOpen={setOpenQuestion}
              openCorreo={setOpen}
              setOpenCorreoActa={setOpenCorreoActa}
              setOpenAvisoNotificacion={setOpenAvisoNotificacion}
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

            <ViewAvance
              open={openAvance}
              setOpen={setOpenAvance}
              avance={avance}
            />
            <ViewFinal
              open={openFinal}
              setOpen={setOpenFinal}
              avance={final}
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
          </form>
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
      {/* <Chat
        open={openChat}
        setOpen={setOpenChat}
        id={id}
        getOneBrief={getOneBrief}
        resumen={resumen}
        setResumen={setResumen}
      /> */}
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
