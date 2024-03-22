/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable multiline-ternary */
import { useState, useEffect, type Dispatch, type SetStateAction } from 'react'
import { SchemaContrato } from '../../../../shared/schemas/Schemas'
import {
  type arrayAdicionales,
  type VluesContrato
} from '../../../../shared/schemas/Interfaces'
import { convertirNumeroALetras } from '../../../../shared/functions/GenerarTextoEnLetras'
import { Global } from '../../../../../helper/Global'
import axios from 'axios'
import { toast } from 'sonner'
import { useFormik } from 'formik'
import { Errors2 } from '../../../../shared/Errors2'
import { useNavigate } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'
import Swal from 'sweetalert2'
import EditorPdfAltas from '../../../../shared/modals/EditorPdfAltas'
import { IoCloseCircleOutline } from 'react-icons/io5'
import { Chip } from '@mui/material'

interface valuesVentasTO {
  id: number
  medio_ingreso: string
  nombre_empresa: string
  plan: string
  id_contrato: string
  dni_ruc: string
  id_cliente: string
  nombre_cliente: string
}

export const ModalContratos = ({
  datos,
  setPdfUrl,
  setLoading,
  loading,
  pdfUrl,
  personContact
}: {
  datos: valuesVentasTO
  setPdfUrl: Dispatch<SetStateAction<any | null>>
  setLoading: Dispatch<SetStateAction<boolean>>
  loading: boolean
  pdfUrl: any | null
  personContact: string | null
}): JSX.Element => {
  const token = localStorage.getItem('token')
  // @ts-expect-error
  const initialEvent = datos?.descripcion
  const [openAdicional, setOpenAdicional] = useState(false)
  const [contenido, setContenido] = useState(initialEvent)
  const [formaPago, setFormaPago] = useState(
    '<ul><li><strong style="color: red;">S/ 00.00&nbsp;</strong><strong>+&nbsp;IGV</strong><strong>&nbsp;</strong>A la aceptación del presente contrato</li><li><strong>S/ 00.00 </strong>&nbsp;<strong>+&nbsp;IGV</strong>&nbsp;A la los 10 días del proyecto&nbsp;</li><li><strong>S/ 00.00&nbsp;+ IGV a la aprobación del proyecto&nbsp;</strong></li></ul>'
  )
  const [loadingValidacion, seLoadingValidation] = useState(false)
  const navigate = useNavigate()
  const [arrayAdicionales, setArrayAdicionales] = useState<
  arrayAdicionales[] | null
  >(null)

  const agregarArrayPesos = (elemento: string): void => {
    let encontrado = false
    // Generar un nuevo identificador único usando uuid
    const id = uuidv4()
    // Inicializar arrayAdicionales como un array vacío si es undefined
    const nuevosAdicionales = arrayAdicionales ? [...arrayAdicionales] : []
    // Iterar sobre nuevosAdicionales para buscar el elemento
    nuevosAdicionales.forEach((item: any) => {
      if (item.elemento === elemento) {
        encontrado = true
        // Si el elemento ya existe, incrementar su contador
        // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
        item.cantidad += 1
      }
    })
    // Si el elemento no fue encontrado, agregarlo con contador 1
    if (!encontrado) {
      nuevosAdicionales.push({ id, elemento, cantidad: 1 })
    }
    setArrayAdicionales(nuevosAdicionales)
  }

  const formatearContrato = (cadena: string): string => {
    const partes = cadena.split('_')
    return partes[0]
  }

  const formatearContrato2 = (cadena: string): string => {
    const match = cadena.match(/_([0-9]{4})_([0-9]{2})/)
    if (match && match.length >= 3) {
      const numero1 = match[1]
      const numero2 = match[2]
      return `${numero1}-${numero2}`
    } else {
      return cadena
    }
  }

  const GenerarContrato = async (values: VluesContrato): Promise<void> => {
    if (contenido) {
      console.log(personContact)
      setLoading(true)
      const data = new FormData()
      data.append('nombres_cliente', datos?.nombre_empresa)
      data.append('titulo_contrato', values.titulo_contrato)
      data.append('id_contrato', datos?.id_contrato)
      data.append('tipo_documento', values.tipo_documento)
      data.append('dni_ruc', values.tipo_documento)

      if (values.tipo_documento == 'DNI') {
        data.append(
          'sexo',
          values.sexo == 'hombre'
            ? 'Sr.'
            : values.sexo == 'mujer'
              ? 'la Sra.'
              : ''
        )
      } else {
        data.append(
          'sexo',
          values.sexo == 'hombre' ? '' : values.sexo == 'mujer' ? '' : ''
        )
      }
      data.append('dni_cliente', values.dni_cliente)
      data.append('codigo', formatearContrato2(datos?.id_contrato))
      data.append('codigo1', formatearContrato(datos?.id_contrato))
      data.append('servicio', values.servicio)
      data.append('forma_pago', formaPago)
      if (typeof values.precio == 'number') {
        data.append('precio', values.precio.toFixed(2))
      } else {
        data.append('precio', values.precio)
      }
      data.append('fecha', values.fecha)
      data.append(
        'preciotexto',
        convertirNumeroALetras(values.precio).toLowerCase()
      )
      data.append('tiempo', values.tiempo)
      data.append('primero', values.primero)
      data.append('contenido', contenido)
      data.append('_method', 'PUT')

      try {
        const response = await axios.post(
          `${Global.url}/generarContratoPDF`,
          data,
          {
            headers: {
              Authorization: `Bearer ${
                token !== null && token !== '' ? token : ''
              }`
            },
            responseType: 'blob'
          }
        )
        const pdfBlob = new Blob([response.data], { type: 'application/pdf' })
        const pdfUrl = window.URL.createObjectURL(pdfBlob)
        setPdfUrl(pdfUrl) // Guarda la URL del PDF en el estado para mostrarlo en el componente
        toast.success('PDF generado')
      } catch (error) {
        toast.error('Error al generar el PDF')
      } finally {
        setLoading(false)
      }
    } else {
      toast.warning('Por favor coloque el contenido')
    }
  }

  const saveCotizacion = async (): Promise<string | undefined> => {
    try {
      const data = new FormData()
      data.append('correlativo', uuidv4())
      data.append('id_cliente', datos.id_cliente)
      data.append('descripcion', 'No descripcion')
      data.append('precio', '0')
      data.append('descuento', '0')
      data.append('pdf', 'sinpdf')
      const request = await axios.post(
        `${Global.url}/registrarCotizacionNone`,
        data,
        {
          headers: {
            Authorization: `Bearer ${
              token !== null && token !== '' ? token : ''
            }`
          }
        }
      )
      console.log(request)
      if (request.data.status == 'success') {
        return request.data.id_cotizacion
      }
    } catch (error: any) {
      console.log(error)
    }
  }

  const SaveContrato = async (): Promise<void> => {
    if (contenido) {
      seLoadingValidation(true)
      const idCotizacion = await saveCotizacion()
      const data = new FormData()
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      data.append('id_cotizacion', idCotizacion)
      data.append('correlativo', datos?.id_contrato)
      data.append('adicionales', JSON.stringify(arrayAdicionales ?? ''))
      data.append('medio_ingreso', datos?.medio_ingreso)
      data.append('nombres_cliente', datos?.nombre_empresa)
      data.append('titulo_contrato', values.titulo_contrato)
      data.append('id_contrato', datos?.id_contrato)
      data.append('tipo_documento', values.tipo_documento)
      // @ts-expect-error
      data.append('id_contacto', personContact ? personContact.id : '')
      //   data.append('dni_ruc', values.tipo_documento)
      if (values.tipo_documento == 'DNI') {
        data.append(
          'sexo',
          values.sexo == 'hombre'
            ? 'Sr.'
            : values.sexo == 'mujer'
              ? 'la Sra.'
              : ''
        )
      } else {
        data.append(
          'sexo',
          values.sexo == 'hombre' ? '' : values.sexo == 'mujer' ? '' : ''
        )
      }
      data.append('dni_cliente', values.dni_cliente)
      data.append('codigo', formatearContrato2(datos?.id_contrato))
      data.append('codigo1', formatearContrato(datos?.id_contrato))
      data.append('servicio', values.servicio)
      data.append('forma_pago', formaPago)
      if (typeof values.precio == 'number') {
        data.append('precio', values.precio.toFixed(2))
      } else {
        data.append('precio', values.precio)
      }
      data.append('fecha', values.fecha)
      data.append(
        'preciotexto',
        convertirNumeroALetras(values.precio).toLowerCase()
      )
      data.append('tiempo', values.tiempo)
      data.append('primero', values.primero)
      data.append('contenido', contenido)

      try {
        const response = await axios.post(
          `${Global.url}/SaveContratoPDF`,
          data,
          {
            headers: {
              Authorization: `Bearer ${
                token !== null && token !== '' ? token : ''
              }`
            }
          }
        )
        console.log(response)
        if (response.data.status == 'success') {
          // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
          Swal.fire(`${response.data.codigo}`, '', 'success')
          navigate('/admin/lista-contratos')
          toast.success('Contrato generado correctamente')
        } else {
          toast.error('Error al generar contrato')
        }
      } catch (error: unknown) {
        console.log(error)
        if (
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-expect-error
          error.request.response.includes(
            `Duplicate entry '${datos?.id_contrato}' for key 'contratos.correlativo'`
          )
        ) {
          toast.error('Contrato duplicado')
        } else {
          toast.error('Error al generar contrato')
        }
      } finally {
        seLoadingValidation(false)
      }
    } else {
      toast.warning('Por favor coloque el contenido')
    }
  }

  const {
    handleSubmit,
    handleChange,
    errors,
    values,
    touched,
    handleBlur,
    setValues,
    isSubmitting
  } = useFormik({
    initialValues: {
      id_contrato: '',
      nombres_cliente: '',
      pdf_contrrato: '',
      tiempo: '',
      sexo: '',
      precio: 0.0,
      fecha: '',
      dni_cliente: '',
      tipo_documento: '',
      titulo_contrato: '',
      servicio: '',
      primero: ''
    },
    validationSchema: SchemaContrato,
    onSubmit: GenerarContrato
  })

  useEffect(() => {
    if (errors && isSubmitting) {
      const firstErrorKey = Object.keys(errors)[0]
      const firstErrorElement = document.getElementsByName(firstErrorKey)[0]
      if (firstErrorElement) {
        firstErrorElement.focus()
      }
    }
  }, [touched, errors, isSubmitting])

  const generarFecha = (): string => {
    const meses: string[] = [
      'Enero',
      'Febrero',
      'Marzo',
      'Abril',
      'Mayo',
      'Junio',
      'Julio',
      'Agosto',
      'Septiembre',
      'Octubre',
      'Noviembre',
      'Diciembre'
    ]

    const fechaActual: Date = new Date()
    const dia: number = fechaActual.getDate()
    const mes: number = fechaActual.getMonth() // Los meses comienzan desde 0
    const año: number = fechaActual.getFullYear()
    const formatearDia = (numero: number): string => {
      return numero < 10 ? `0${numero}` : `${numero}`
    }

    return `${formatearDia(dia)} de ${meses[mes]} del ${año}`
  }

  const getOneBrief = async (): Promise<void> => {
    const request2 = await axios.get(
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      `${Global.url}/showToContrato/${formatearContrato(datos?.id_contrato)}`,
      {
        headers: {
          Authorization: `Bearer ${
            token !== null && token !== '' ? `Bearer ${token}` : ''
          }`
        }
      }
    )
    setValues({
      ...values,
      titulo_contrato: request2.data[0].titulo,
      servicio: request2.data[0].servicio,
      primero: request2.data[0].primero,
      // @ts-expect-error
      tipo_documento: personContact?.id ? personContact?.tipo_documento : '',
      // @ts-expect-error
      dni_cliente: personContact?.id ? personContact?.dni_ruc : datos?.dni_ruc,
      fecha: generarFecha(),
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      precio: datos?.precio
    })
    console.log(personContact)
  }

  const eliminarArray = (id: number | null): void => {
    const usuarioEliminado = arrayAdicionales?.find((peso) => peso.id === id)
    if (!usuarioEliminado) return // Salir si no se encuentra el usuario
    const nuevoArrayPesos = arrayAdicionales?.filter((peso) => peso.id !== id)
    // @ts-expect-error
    setArrayAdicionales(nuevoArrayPesos)
  }

  useEffect(() => {
    if (datos) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      if (datos?.descripcion) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        setContenido(datos?.descripcion)
      } else {
        setContenido('')
      }
      getOneBrief()
    }
  }, [datos])

  useEffect(() => {
    const ul = document.createElement('ul') // Crear un elemento ul
    // Iterar sobre arrayAdicionales y crear un li para cada elemento
    arrayAdicionales?.forEach((item: any) => {
      const li = document.createElement('li') // Crear un elemento li
      if (item.elemento === 'Impresión de tarjeta de presentación') {
        // Generar el HTML específico para 'Impresión de tarjeta de presentación'
        li.innerHTML = `
          <p>IMPRESIÓN DE TARJETA DE PRESENTACIÓN:</p>
          <p>Descripción:</p>
          <p>1 millar x 1 nombre.&nbsp;</p>
          <p>Tamaño: 9 x 5.5 cm.</p>
          <p>Material: Papel couché de 250gr. Mate o brillante (a elección del cliente).</p>
          <p>Envío Lima: Gratis&nbsp;&nbsp;</p>
          <p>Envío Provincia: Servicio de COLLECT</p>
        `
      } else {
        const cantidadFormateada = item.cantidad.toString().padStart(2, '0')
        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
        li.textContent = `${cantidadFormateada} ${item.elemento}`
      }
      ul.appendChild(li) // Agregar el li al ul
    })
    // Obtener el HTML del ul y establecerlo como contenido
    const nombresColaboradores = ul.outerHTML
    const textofinal = '<p>&nbsp;</p>'
    // @ts-expect-error
    // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
    const contenidoConTextoAdicional = (datos?.descripcion ?? '') + textofinal + nombresColaboradores
    setContenido(contenidoConTextoAdicional)
  }, [arrayAdicionales])

  return (
    <form
      className="flex flex-col bg-white rounded-md relative p-4"
      onSubmit={handleSubmit}
    >
      <div className="flex w-full flex-col">
        <div className="w-full flex flex-col text-white">
          <div className="mb-3 md:mb-0 w-full bg-form rounded-md rounded-tl-none md:p-3 text-black flex flex-col items-end gap-0 lg:gap-x-5 lg:gap-y-0">
            <div className="w-full flex flex-col lg:flex-row gap-3 lg:gap-5 mt-3 lg:mt-0">
              <div className="w-full relative pb-0 md:pb-5">
                <label
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  htmlFor="email"
                >
                  Contrato
                </label>
                <input
                  className="flex h-9 w-full rounded-md border border-input border-gray-400 bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed"
                  value={datos?.id_contrato}
                  disabled
                />
              </div>
              <div className="w-full relative pb-0 md:pb-5">
                <label
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  htmlFor="email"
                >
                  Cliente
                </label>
                <input
                  className="flex h-9 w-full rounded-md border border-input border-gray-400 bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed"
                  // @ts-expect-error
                  value={personContact?.id ? personContact?.nombre : datos?.nombre_cliente}
                  disabled
                />
              </div>
            </div>
            <div className="w-full flex flex-col lg:flex-row gap-0 lg:gap-5 mt-3 lg:mt-0">
              <div className="w-full relative pb-5 ">
                <label
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  htmlFor="email"
                >
                  Tipo de documento
                </label>
                <select
                  className="flex h-9 w-full rounded-md border border-input border-gray-400 bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed"
                  name="tipo_documento"
                  value={values.tipo_documento}
                  onChange={handleChange}
                  onBlur={handleBlur}
                >
                  {/* FB GOOGLE, VENTAS, POST VENTA, RECOMENDACION, ISNTAGRAM) */}
                  <option value="">Seleccionar</option>
                  <option value="DNI">DNI</option>
                  <option value="RUC">RUC</option>
                </select>
                <Errors2
                  errors={errors.tipo_documento}
                  touched={touched.tipo_documento}
                />
              </div>
              <div className="w-full relative pb-5 ">
                <label
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  htmlFor="email"
                >
                  DNI/RUC del cliente
                </label>
                <input
                  className="flex h-9 w-full rounded-md border border-input border-gray-400 bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed"
                  name="dni_cliente"
                  type="number"
                  value={values.dni_cliente}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  disabled={false}
                />
                <Errors2
                  errors={errors.dni_cliente}
                  touched={touched.dni_cliente}
                />
              </div>
              <div className="w-full relative pb-5 ">
                <label
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  htmlFor="email"
                >
                  Fecha de creacion
                </label>
                <input
                  className="flex h-9 w-full rounded-md border border-input border-gray-400 bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed"
                  name="fecha"
                  type="text"
                  value={values.fecha}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  disabled={false}
                />
                <Errors2 errors={errors.fecha} touched={touched.fecha} />
              </div>
            </div>
            <div className="w-full flex flex-col lg:flex-row gap-0 lg:gap-5 mt-0 lg:mt-0 items-center">
              <div className="w-full relative pb-5">
                <label
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  htmlFor="email"
                >
                  Tiempo estimado
                </label>
                <input
                  className="flex h-9 w-full rounded-md border border-input border-gray-400 bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed"
                  name="tiempo"
                  type="number"
                  value={values.tiempo}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  disabled={false}
                />
                <Errors2 errors={errors.tiempo} touched={touched.tiempo} />
              </div>
              <div className="w-full  relative pb-5">
                <label
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  htmlFor="email"
                >
                  Precio del servicio
                </label>
                <input
                  className="flex h-9 w-full rounded-md border border-input border-gray-400 bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed"
                  name="precio"
                  type="number"
                  step="0.01"
                  value={values.precio}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  disabled={false}
                />
                <Errors2 errors={errors.precio} touched={touched.precio} />
              </div>
            </div>
            <div className="w-full  relative formas_pago">
              <label
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                htmlFor="email"
              >
                Formas de pago
              </label>
              <div className="mt-3 w-full">
                <EditorPdfAltas content={formaPago} setContent={setFormaPago} />
              </div>
            </div>
            {openAdicional &&
                <div className="w-[50%] h-full overflow-y-auto bg-white p-2 absolute right-0 top-0 bottom-0 shadow-md border rounded-md border-gray-300 z-10">
                <IoCloseCircleOutline className="absolute top-2 right-2 text-2xl cursor-pointer" onClick={() => { setOpenAdicional(false) }}/>
                <h2 className="text-center w-full uppercase font-bold">
                    Adicionales
                </h2>
                <div className="flex flex-col gap-1 mt-3">
                    <p
                    className="bg-white hover:bg-gray-300 transition-colors px-2 cursor-pointer"
                    onClick={() => { agregarArrayPesos('Diseño de Firma(s) de correo(s)') }} >
                    Diseño de Firma de correo
                    </p>
                    <p
                    className="bg-white hover:bg-gray-300 transition-colors px-2 cursor-pointer"
                    onClick={() => {
                      agregarArrayPesos('Diseño de Portada(s)')
                    }}
                    >
                    Diseño de Portada
                    </p>
                    <p
                    className="bg-white hover:bg-gray-300 transition-colors px-2 cursor-pointer"
                    onClick={() => {
                      agregarArrayPesos('Diseño de Perfil(es)')
                    }}
                    >
                    Diseño de Perfil
                    </p>
                    <p
                    className="bg-white hover:bg-gray-300 transition-colors px-2 cursor-pointer"
                    onClick={() => {
                      agregarArrayPesos('Diseño de Tarjeta(s) de presentación')
                    }}
                    >
                    Diseño de Tarjeta de presentación
                    </p>
                    <p
                    className="bg-white hover:bg-gray-300 transition-colors px-2 cursor-pointer"
                    onClick={() => {
                      agregarArrayPesos('Diseño de Hoja(s) membretada(s)')
                    }}
                    >
                    Diseño de Hoja membretada
                    </p>
                    <p
                    className="bg-white hover:bg-gray-300 transition-colors px-2 cursor-pointer"
                    onClick={() => {
                      agregarArrayPesos('Diseño de Flyer(s)')
                    }}
                    >
                    Diseño de Flyer
                    </p>
                    <p
                    className="bg-white hover:bg-gray-300 transition-colors px-2 cursor-pointer"
                    onClick={() => {
                      agregarArrayPesos('Diseño de Brochure 04 caras')
                    }}
                    >
                    Diseño de Brochure 04 caras
                    </p>
                    <p
                    className="bg-white hover:bg-gray-300 transition-colors px-2 cursor-pointer"
                    onClick={() => {
                      agregarArrayPesos('Diseño de Brochure 06 caras')
                    }}
                    >
                    Diseño de Brochure 06 caras
                    </p>
                    <p
                    className="bg-white hover:bg-gray-300 transition-colors px-2 cursor-pointer"
                    onClick={() => {
                      agregarArrayPesos('Diseño de Brochure 08 caras')
                    }}
                    >
                    Diseño de Brochure 08 caras
                    </p>
                    <p
                    className="bg-white hover:bg-gray-300 transition-colors px-2 cursor-pointer"
                    onClick={() => {
                      agregarArrayPesos('Diseño de Fotocheck(s) o uniforme(s)')
                    }}
                    >
                    Diseño de Fotocheck o uniforme
                    </p>
                    <p
                    className="bg-white hover:bg-gray-300 transition-colors px-2 cursor-pointer"
                    onClick={() => {
                      agregarArrayPesos('Diseño de Etiqueta(s)')
                    }}
                    >
                    Diseño de Etiqueta
                    </p>
                    <p
                    className="bg-white hover:bg-gray-300 transition-colors px-2 cursor-pointer"
                    onClick={() => {
                      agregarArrayPesos('Diseño de Montaje(s)')
                    }}
                    >
                    Diseño de Montaje
                    </p>
                    <p
                    className="bg-white hover:bg-gray-300 transition-colors px-2 cursor-pointer"
                    onClick={() => {
                      agregarArrayPesos('Creacion de Reel 10s')
                    }}
                    >
                    Creacion de Reel 10s
                    </p>
                    <p
                    className="bg-white hover:bg-gray-300 transition-colors px-2 cursor-pointer"
                    onClick={() => {
                      agregarArrayPesos('Creacion de Reel 20s')
                    }}
                    >
                    Creacion de Reel 20s
                    </p>
                    <p
                    className="bg-white hover:bg-gray-300 transition-colors px-2 cursor-pointer"
                    onClick={() => {
                      agregarArrayPesos('Creacion de Reel 30s')
                    }}
                    >
                    Creacion de Reel 30s
                    </p>
                    <p
                    className="bg-white hover:bg-gray-300 transition-colors px-2 cursor-pointer"
                    onClick={() => {
                      agregarArrayPesos('Animación de Logo(s)')
                    }}
                    >
                    Animación de Logo
                    </p>
                    <p
                    className="bg-white hover:bg-gray-300 transition-colors px-2 cursor-pointer"
                    onClick={() => {
                      agregarArrayPesos('Animación de Personaje(s)')
                    }}
                    >
                    Animación de Personaje
                    </p>
                    <p
                    className="bg-white hover:bg-gray-300 transition-colors px-2 cursor-pointer"
                    onClick={() => {
                      agregarArrayPesos('Diseño de Personaje(s)')
                    }}
                    >
                    Diseño de Personaje
                    </p>
                    <p
                    className="bg-white hover:bg-gray-300 transition-colors px-2 cursor-pointer"
                    onClick={() => {
                      agregarArrayPesos('Diseño de Manual de marca(s)')
                    }}
                    >
                    Diseño de Manual de marca
                    </p>
                    <p
                    className="bg-white hover:bg-gray-300 transition-colors px-2 cursor-pointer"
                    onClick={() => {
                      agregarArrayPesos('Vectorización de logo(s)')
                    }}
                    >
                    Vectorización de logo
                    </p>
                    <p
                    className="bg-white hover:bg-gray-300 transition-colors px-2 cursor-pointer"
                    onClick={() => {
                      agregarArrayPesos('Diseño de Letrero(s)')
                    }}
                    >
                    Diseño de Letrero
                    </p>
                    <p
                    className="bg-white hover:bg-gray-300 transition-colors px-2 cursor-pointer"
                    onClick={() => {
                      agregarArrayPesos('Diseño de Sticker(s)')
                    }}
                    >
                    Diseño de sticker
                    </p>
                    <p
                    className="bg-white hover:bg-gray-300 transition-colors px-2 cursor-pointer"
                    onClick={() => {
                      agregarArrayPesos('Diseño de Banner(s)')
                    }}
                    >
                    Diseño de Banner
                    </p>
                    <p
                    className="bg-white hover:bg-gray-300 transition-colors px-2 cursor-pointer"
                    onClick={() => {
                      agregarArrayPesos('Diseño de Volante(s)')
                    }}
                    >
                    Diseño de Volante
                    </p>
                    <p
                    className="bg-white hover:bg-gray-300 transition-colors px-2 cursor-pointer"
                    onClick={() => {
                      agregarArrayPesos('Diseño de Sobre(s)')
                    }}
                    >
                    Diseño de Sobre
                    </p>
                    <p
                    className="bg-white hover:bg-gray-300 transition-colors px-2 cursor-pointer"
                    onClick={() => {
                      agregarArrayPesos('Diseño de Folder(s)')
                    }}
                    >
                    Diseño de Folder
                    </p>
                    <p
                    className="bg-white hover:bg-gray-300 transition-colors px-2 cursor-pointer"
                    onClick={() => {
                      agregarArrayPesos('Diseño de Bolsa(s)')
                    }}
                    >
                    Diseño de Bolsa
                    </p>
                    <p
                    className="bg-white hover:bg-gray-300 transition-colors px-2 cursor-pointer"
                    onClick={() => {
                      agregarArrayPesos('Diseño de Calendario(s)')
                    }}
                    >
                    Diseño de Calendario
                    </p>
                    <p
                    className="bg-white hover:bg-gray-300 transition-colors px-2 cursor-pointer"
                    onClick={() => {
                      agregarArrayPesos('Impresión de tarjeta de presentación')
                    }}
                    >
                    Impresión de tarjeta de presentación
                    </p>
                    <p
                    className="bg-white hover:bg-gray-300 transition-colors px-2 cursor-pointer"
                    onClick={() => {
                      agregarArrayPesos('Diseño de logo 1 propuesta')
                    }}
                    >
                    Diseño de logo 1 propuesta
                    </p>
                    <p
                    className="bg-white hover:bg-gray-300 transition-colors px-2 cursor-pointer"
                    onClick={() => {
                      agregarArrayPesos('Diseño de logo 2 propuestas')
                    }}
                    >
                    Diseño de logo 2 propuestas
                    </p>
                </div>
                </div>
            }
            <div className="w-full relative mt-3">
              <div className="flex justify-between items-center">
                <label
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  htmlFor="email"
                >
                  Detalle del servicio
                </label>
                <button
                  type="button"
                  onClick={() => { setOpenAdicional(true) }}
                  className="bg-red-600 px-2 py-1 rounded-md text-white hover:bg-red-700 transition-colors text-sm"
                >
                  Adicionales
                </button>
              </div>
              {// @ts-expect-error
              arrayAdicionales?.length > 0 &&
                <div className='flex flex-row flex-wrap gap-3 justify-center mt-2'>
                  {arrayAdicionales?.map((elemento) => (
                      <Chip
                        key={elemento.id}
                        label={`${elemento.cantidad} ${elemento.elemento}`}
                        variant="outlined"
                        // onClick={handleClick}
                        onDelete={() => { eliminarArray(elemento.id) }}
                      />
                  ))}
                </div>
              }

              <div className="mt-3">
                <EditorPdfAltas content={contenido} setContent={setContenido} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-fit flex w-full justify-end items-center gap-3 rounded-md text-black ">
        <div className="flex w-fit gap-3 rounded-md text-black ">
          {!loading ? (
            <input
              type="submit"
              className="bg-secondary-150 px-3 py-2 text-white rounded-md cursor-pointer"
              value="Previsualizar"
            />
          ) : (
            <input
              type="button"
              disabled
              className="bg-secondary-150/70 px-3 py-2 text-white rounded-md cursor-pointer"
              value="Cargando..."
            />
          )}
          {pdfUrl && (
            <>
              {!loadingValidacion ? (
                <button
                  type="button"
                  // eslint-disable-next-line @typescript-eslint/no-misused-promises
                  onClick={async () => {
                    await SaveContrato()
                  }}
                  className="rounded-md w-[100px] bg-secundario h-fit px-3 text-white py-2 hover:bg-green-700 transition-colors"
                >
                  Continuar
                </button>
              ) : (
                <button
                  type="button"
                  // eslint-disable-next-line @typescript-eslint/no-misused-promises
                  className="rounded-md w-[100px] bg-secundario h-fit px-3 text-white py-2 hover:bg-green-700 transition-colors"
                >
                  Validando...
                </button>
              )}
            </>
          )}
        </div>
      </div>
    </form>
  )
}
