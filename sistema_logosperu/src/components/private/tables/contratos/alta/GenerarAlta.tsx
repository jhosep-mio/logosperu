/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, {
  type Dispatch,
  type SetStateAction,
  useEffect,
  useState
} from 'react'
import { useNavigate } from 'react-router-dom'
import Dialog from '@mui/material/Dialog'
import Slide from '@mui/material/Slide'
import { type TransitionProps } from '@mui/material/transitions'
import axios from 'axios'
import { Global } from '../../../../../helper/Global'
import {
  type arrayCorreos,
  type ListaContratosValues,
  type arrayAsignacion
} from '../../../../shared/schemas/Interfaces'
import { useFormik } from 'formik'
import { SchemaValidarAlta } from '../../../../shared/schemas/Schemas'
import Swal from 'sweetalert2'
import { toast } from 'sonner'
import EditorContexto from '../../servicios/EditorContexto'
import { ListaUsuarios } from './ListaUsuarios'
import { Errors } from '../../../../shared/Errors'
import useAuth from '../../../../../hooks/useAuth'
import { v4 as uuidv4 } from 'uuid'

const Transition = React.forwardRef(function Transition (
  props: TransitionProps & {
    children: React.ReactElement<any, any>
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />
})

interface valuesInterface {
  open: boolean
  datos: ListaContratosValues | null
  setOpen: Dispatch<SetStateAction<boolean>>
  usuarios: never[]
}

export const GenerarAlta = ({
  open,
  datos,
  setOpen,
  usuarios
}: valuesInterface): JSX.Element => {
  const { auth } = useAuth()
  const token = localStorage.getItem('token')
  const [loading, setLoading] = useState(false)
  const [contenido, setContenido] = useState('')
  const [personContact] = useState<string | null>(null)
  const [correos, setCorreos] = useState<arrayCorreos[]>([])
  const [arrayPesos, setarrayPesos] = useState<arrayAsignacion[]>([
    { id: null, peso: '' }
  ])
  const navigate = useNavigate()

  const generarFecha = (): string => {
    const fechaActual: Date = new Date()
    const dia: number = fechaActual.getDate()
    const mes: number = fechaActual.getMonth() + 1 // Los meses comienzan desde 0
    const año: number = fechaActual.getFullYear()
    const formatearNumero = (numero: number): string => {
      return numero < 10 ? `0${numero}` : `${numero}`
    }
    // Formatear día, mes y año
    const diaFormateado = formatearNumero(dia)
    const mesFormateado = formatearNumero(mes)
    return `${diaFormateado}/${mesFormateado}/${año}`
  }

  const obtenerFechaHora = (): { fecha: string, hora: string } => {
    const ahora = new Date()
    const opcionesFecha = { year: 'numeric', month: '2-digit', day: '2-digit' }
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    const fecha = ahora.toLocaleDateString('es-PE', opcionesFecha)
    const opcionesHora = { hour: '2-digit', minute: '2-digit' }
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    const hora = ahora.toLocaleTimeString('es-PE', opcionesHora)
    return { fecha, hora }
  }

  const generarVenta = async (): Promise<void> => {
    if (arrayPesos.length > 1) {
      setLoading(true)
      try {
        const data = new FormData()
        data.append('id_cliente', datos?.id_cliente ?? '')
        data.append('medio_ingreso', datos?.medio_ingreso ?? '')
        data.append('dni_ruc', datos?.dni_cliente ?? '')
        data.append('nombre_empresa', datos?.empresa ?? '')
        data.append('id_contrato', datos?.correlativo ?? '')
        data.append('id_contacto', personContact ?? '')
        data.append('asignacion', JSON.stringify(arrayPesos))
        data.append('fecha_alta', generarFecha())
        data.append('fecha_inicio', values.fecha_inicio)
        data.append('idreal_contrato', datos?.id ?? '')
        // ENVIO DE MAIL
        data.append('titulo', values.asunto)
        data.append('contexto', contenido)
        data.append('email', auth.email)
        data.append('email_alter', auth.email_alter)
        console.log(JSON.stringify(correos))
        data.append('correos', JSON.stringify(correos))
        data.append('password', auth.pass_email)
        data.append('firma', auth.firma)
        const { fecha, hora } = obtenerFechaHora()
        const avance = {
          fecha,
          hora,
          asunto: values.asunto,
          correos,
          contexto: contenido,
          firma: auth.firma
        }
        data.append('contenido', JSON.stringify(avance))

        const request = await axios.post(`${Global.url}/generarAlta`, data, {
          headers: {
            Authorization: `Bearer ${
                token !== null && token !== '' ? token : ''
              }`
          }
        })
        if (request.data.status == 'success') {
          const enviarNotificacion = async (): Promise<void> => {
            const data = new FormData()
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            const pathName = `/admin/lista-servicios/avances/${request.data.id_venta ?? ''}`
            data.append('id_usuario', auth.id)
            data.append('id_venta', String(request.data.id_venta))
            data.append('nombre', auth.name)
            data.append('icono', 'correo')
            data.append('url', pathName)
            data.append(
              'contenido',
                  `Ha enviado una alta para el proyecto ${
                    datos?.empresa ?? ''
                  }  (${datos?.nombres ?? ''} ${datos?.apellidos ?? ''})`
            )
            data.append('hidden_users', '')
            try {
              await axios.post(`${Global.url}/nuevaNotificacion`, data, {
                headers: {
                  Authorization: `Bearer ${
                        token !== null && token !== '' ? token : ''
                      }`
                }
              })
            } catch (error: unknown) {
              console.log(error)
              Swal.fire('Error al subir', '', 'error')
            }
          }
          enviarNotificacion()
          // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
          Swal.fire(`${request.data.codigo}`, '', 'success')

          navigate('/admin/lista-ventas')
        } else if (request.data.message.includes('codigo invalido')) {
          toast.warning('YA EXISTE UN ALTA Y PROYECTO PARA ESTE CONTRATO')
        } else {
          Swal.fire('Error al generar la venta', '', 'error')
        }
      } catch (error: any) {
        console.log(error)
        if (
          error.request.response.includes(
                  `Duplicate entry '${values.id_contrato}' for key 'id_contrato'`
          )
        ) {
          toast.error('YA EXISTE UN ALTA Y PROYECTO PARA ESTE CONTRATO')
        } else {
          toast.error('ERROR')
        }
      } finally {
        setLoading(false)
      }
    } else {
      console.log('hola')
      toast.warning('DEBE ASIGNAR POR LO MENOS UN COLABORADOR')
    }
  }

  const handleClose = (): void => {
    setOpen(false)
    resetForm()
    setCorreos([])
    setarrayPesos([])
    setContenido('')
  }

  const returnIngreso = (id: string): string => {
    if (id == '0') {
      return 'Facebook'
    } else if (id == '1') {
      return 'Google'
    } else if (id == '5') {
      return 'Instagram'
    } else if (id == '2') {
      return 'Ventas'
    } else if (id == '3') {
      return 'Post Venta'
    } else if (id == '4') {
      return 'Whatsapp'
    } else if (id == '6') {
      return 'Recomendación'
    } else if (id == '7') {
      return 'Logos'
    } else {
      return ''
    }
  }

  const {
    handleSubmit,
    setValues,
    resetForm,
    handleChange,
    handleBlur,
    values,
    errors,
    touched
  } = useFormik({
    initialValues: {
      id_contrato: '',
      nombre_cliente: '',
      fecha_inicio: '',
      asunto: ''
    },
    validationSchema: SchemaValidarAlta,
    onSubmit: generarVenta
  })

  useEffect(() => {
    console.log(datos)
    if (open) {
      setValues({
        ...values,
        id_contrato: datos?.correlativo ?? '',
        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
        nombre_cliente: `${datos?.nombres} ${datos?.apellidos}`,
        fecha_inicio: generarFecha()
      })
      const nombresColaboradores = arrayPesos
        .filter((item: any) => item.nombre) // Filtrar los elementos que tienen un nombre definido
        .map((item: any) => item.nombre) // Mapear los elementos para obtener solo los nombres
        .join(' – ')
      // eslint-disable-next-line @typescript-eslint/restrict-plus-operands, @typescript-eslint/restrict-template-expressions
      const textoadcional = `<p>Estimados Colaboradores </p><p>&nbsp;</p><p>Le damos la Bienvenida al cliente :&nbsp;<span style="background-color: rgb(249, 250, 251);"> ${datos?.empresa}</span></p><p>&nbsp;</p><ul><li>Persona de contacto : Sr. ${datos?.nombres} ${datos?.apellidos} </li><li>Mail&nbsp;: ${datos?.email} </li><li>Móvil&nbsp;: ${datos?.celular} </li></ul></p><p>&nbsp;</p>`
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      const textofinal = `<p>&nbsp;</p><p>${datos?.correlativo ?? ''}/&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;M1 – ${returnIngreso(datos?.medio_ingreso ?? '')} </p><p>&nbsp;</p><p>COLABORADORES A CARGO: ${nombresColaboradores}</p><p>&nbsp;</p><p>FECHA DE INICIO DEL SERVICIO:&nbsp;${values.fecha_inicio}</p><p>&nbsp;</p><p>&nbsp;</p><p>SALUDOS&nbsp;</p>`
      // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
      const contenidoConTextoAdicional = textoadcional + (datos?.contenido ?? '') + textofinal
      setContenido(contenidoConTextoAdicional)
      const correoPredeterminado = datos?.email
      if (!correos.some((c: any) => c.correo === correoPredeterminado)) {
        // @ts-expect-error
        setCorreos([...correos, { id: uuidv4(), correo: correoPredeterminado }])
      }
    }
  }, [open])

  useEffect(() => {
    if (open) {
      const nombresColaboradores = arrayPesos
        .filter((item: any) => item.nombre) // Filtrar los elementos que tienen un nombre definido
        .map((item: any) => item.nombre) // Mapear los elementos para obtener solo los nombres
        .join(' – ')
      // eslint-disable-next-line @typescript-eslint/restrict-plus-operands, @typescript-eslint/restrict-template-expressions
      const textoadcional = `<p>Estimados Colaboradores </p><p>&nbsp;</p><p>Le damos la Bienvenida al cliente :&nbsp;<span style="background-color: rgb(249, 250, 251);"> ${datos?.empresa}</span></p><p>&nbsp;</p><ul><li>Persona de contacto : Sr. ${datos?.nombres} ${datos?.apellidos} </li><li>Mail&nbsp;: ${datos?.email} </li><li>Móvil&nbsp;: ${datos?.celular} </li></ul></p><p>&nbsp;</p>`
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      const textofinal = `<p>&nbsp;</p><p>${datos?.correlativo ?? ''}/&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;M1 – ${returnIngreso(datos?.medio_ingreso ?? '')} </p><p>&nbsp;</p><p>COLABORADORES A CARGO: ${nombresColaboradores}</p><p>&nbsp;</p><p>FECHA DE INICIO DEL SERVICIO:&nbsp;${values.fecha_inicio}</p><p>&nbsp;</p><p>&nbsp;</p><p>SALUDOS.&nbsp;</p>`
      // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
      const contenidoConTextoAdicional = textoadcional + (datos?.contenido ?? '') + textofinal
      setContenido(contenidoConTextoAdicional)
    }
  }, [values.fecha_inicio, arrayPesos])

  return (
    <>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        maxWidth={'md'}
        aria-describedby="alert-dialog-slide-description"
        className="w-screen p-0 m-0"
      >
        <section
          className={'grid grid-cols-1 gap-10'}
        >
          <form
            className="flex flex-col bg-white rounded-md relative p-4     "
            onSubmit={handleSubmit}
          >
            <div className="flex w-full flex-col">
              <div className="w-full flex flex-col text-white">
                <div className="mb-3 md:mb-0 w-full bg-form rounded-md rounded-tl-none md:p-3 text-black flex flex-col items-end gap-2 lg:gap-x-5 lg:gap-y-0">
                  <div className="w-full flex flex-col lg:flex-row gap-3 lg:gap-5 mt-3 lg:mt-0">
                    <div className="w-full lg:relative pb-5">
                      <label
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        htmlFor="email"
                      >
                        Contrato
                      </label>
                      <input
                        className="flex h-9 w-full rounded-md border border-input border-gray-400 bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed"
                        value={values?.id_contrato}
                        disabled
                      />
                    </div>
                    <div className="w-full lg:relative pb-5">
                      <label
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        htmlFor="email"
                      >
                        Cliente
                      </label>
                      <input
                        className="flex h-9 w-full rounded-md border border-input border-gray-400 bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed"
                        value={values?.nombre_cliente}
                        disabled
                      />
                    </div>
                    <div className="w-full lg:relative pb-5">
                      <label
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        htmlFor="email"
                      >
                        Fecha de inicio
                      </label>
                      <input
                        className="flex h-9 w-full rounded-md border border-input border-gray-400 bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed"
                        name='fecha_inicio'
                        value={values.fecha_inicio}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        disabled={false}
                      />
                       <Errors
                        errors={errors.fecha_inicio}
                        touched={touched.fecha_inicio}
                    />
                    </div>
                  </div>
                  <div className="w-full flex flex-col lg:flex-row gap-3 lg:gap-5 mt-3 lg:mt-0">
                    <div className="w-full lg:relative pb-5">
                      <label
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        htmlFor="email"
                      >
                        Asunto de mail
                      </label>
                      <input
                        className="flex h-9 w-full rounded-md border border-input border-gray-400 bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed"
                        name='asunto'
                        value={values.asunto}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        disabled={false}
                      />
                       <Errors
                        errors={errors.asunto}
                        touched={touched.asunto}
                    />
                    </div>
                  </div>

                  <ListaUsuarios
                      arrayPesos={arrayPesos}
                      usuarios={usuarios}
                      setarrayPesos={setarrayPesos}
                      setCorreos={setCorreos}
                      correos={correos}
                    />
                  <div className="w-full relative">
                    <label
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      htmlFor="email"
                    >
                      Detalle del servicio
                    </label>
                    <div className="mt-3">
                      <EditorContexto
                        content={contenido}
                        setContent={setContenido}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-fit flex w-full justify-end items-center gap-3 rounded-md text-black ">
              <div className="flex w-fit gap-3 rounded-md text-black ">
                {!loading
                  ? (
                  <input
                    type="submit"
                    className="bg-secondary-150 hover:bg-secondary-150/70 transition-colors px-3 py-2 text-white rounded-md cursor-pointer"
                    value="Generar alta"
                  />
                    )
                  : (
                  <input
                    type="button"
                    disabled
                    className="bg-secondary-150/70 px-3 py-2 text-white rounded-md cursor-pointer"
                    value="Cargando..."
                  />
                    )}
              </div>
            </div>
          </form>
        </section>
      </Dialog>
    </>
  )
}
