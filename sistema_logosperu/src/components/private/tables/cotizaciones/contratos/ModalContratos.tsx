/* eslint-disable multiline-ternary */
import { useState, useEffect, type Dispatch, type SetStateAction } from 'react'
import { SchemaContrato } from '../../../../shared/schemas/Schemas'
import {
  type VluesContrato,
  type ListcotizacionValues
} from '../../../../shared/schemas/Interfaces'
import { convertirNumeroALetras } from '../../../../shared/functions/GenerarTextoEnLetras'
import { Global } from '../../../../../helper/Global'
import axios from 'axios'
import { toast } from 'sonner'
import { useFormik } from 'formik'
import { AiOutlineFilePdf } from 'react-icons/ai'
import { Errors2 } from '../../../../shared/Errors2'
import EditorContexto from '../../servicios/EditorContexto'
import { useNavigate } from 'react-router-dom'

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
  pdfUrl
}: {
  selectedItem: ListcotizacionValues | null
  getCotizaciones: () => Promise<void>
  datos: valuesVentasTO
  setPdfUrl: Dispatch<SetStateAction<any | null>>
  setLoading: Dispatch<SetStateAction<boolean>>
  loading: boolean
  pdfUrl: any | null
}): JSX.Element => {
  const token = localStorage.getItem('token')
  const [contenido, setContenido] = useState('')
  const [formaPago, setFormaPago] = useState('')
  const [loadingValidacion, seLoadingValidation] = useState(false)
  const navigate = useNavigate()

  const formatearContrato = (cadena: string): string => {
    const partes = cadena.split('_')
    return partes[0]
  }

  const formatearContrato2 = (cadena: string): string => {
    const numeros = cadena.match(/\d+/g)

    if (numeros && numeros.length >= 2) {
      const numero1 = numeros[0]
      const numero2 = numeros[1]
      const textoFormateado = `${numero1} - ${numero2}`
      return textoFormateado
    } else {
      return cadena
    }
  }

  const GenerarContrato = async (values: VluesContrato): Promise<void> => {
    if (contenido) {
      setLoading(true)
      const data = new FormData()
      data.append('nombres_cliente', datos?.nombre_cliente)
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
        console.log(response)
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

  const SaveContrato = async (): Promise<void> => {
    if (contenido) {
      seLoadingValidation(true)
      const data = new FormData()
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      data.append('id_cotizacion', datos?.id)
      data.append('correlativo', datos?.id_contrato)
      data.append('nombres_cliente', datos?.nombre_cliente)
      data.append('titulo_contrato', values.titulo_contrato)
      data.append('id_contrato', datos?.id_contrato)
      data.append('tipo_documento', values.tipo_documento)
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
          navigate('/admin/lista-contratos')
          toast.success('Contrato generado correctamente')
        } else {
          toast.error('Error al generar contrato')
        }
      } catch (error: unknown) {
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
        `${Global.url}/showToContrato/${formatearContrato(
          datos?.id_contrato
        )}`,
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
      dni_cliente: datos?.dni_ruc,
      fecha: generarFecha(),
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      precio: datos?.precio
    })
  }

  useEffect(() => {
    console.log(datos)
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

  return (
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
                  value={datos?.id_contrato}
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
                  value={datos?.nombre_cliente}
                  disabled
                />
              </div>
              <div className="w-full px-3  lg:hidden flex items-center justify-center">
                <button className="bg-red-500 text-white rounded-xl px-5 py-2 mx-auto flex items-center justify-center gap-3 ">
                  <AiOutlineFilePdf /> Visualizar contrato
                </button>
              </div>
            </div>
            <div className="w-full flex flex-col lg:flex-row gap-3 lg:gap-5 mt-3 lg:mt-0">
              <div className="w-full lg:relative pb-5">
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
              <div className="w-full  lg:relative pb-5">
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
              <div className="w-full px-3  lg:hidden flex items-center justify-center">
                <button className="bg-red-500 text-white rounded-xl px-5 py-2 mx-auto flex items-center justify-center gap-3 ">
                  <AiOutlineFilePdf /> Visualizar contrato
                </button>
              </div>
              <div className="w-full lg:relative pb-5">
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
            <div className="w-full flex flex-col lg:flex-row gap-3 lg:gap-5 mt-3 lg:mt-0 items-center">
              <div className="w-full lg:relative pb-5">
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
              <div className="w-full  lg:relative pb-5">
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
                <EditorContexto content={formaPago} setContent={setFormaPago} />
              </div>
            </div>
            <div className="w-full relative">
              <label
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                htmlFor="email"
              >
                Detalle del servicio
              </label>
              <div className="mt-3">
                <EditorContexto content={contenido} setContent={setContenido} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-fit flex w-full justify-end items-center gap-3 rounded-md text-black ">
        {/* <div className="w-full">
          <div className="w-fit relative ml-4 ">
            <button
              type="button"
              className="bg-red-500 hover:bg-red-700 transition-colors text-white flex items-center justify-center gap-3 px-4 py-2"
              onClick={() => {
                setOpenPDF(true)
              }}
            >
              <IoDocument className="text-white" /> Subir PDF
            </button>
          </div>
        </div> */}
        <div className="flex w-fit gap-3 rounded-md text-black ">
          {!loading
            ? <input
                type="submit"
                className="bg-secondary-150 px-3 py-2 text-white rounded-md cursor-pointer"
                value="Previsualizar"
            />
            : <input
                type="button"
                disabled
                className="bg-secondary-150/70 px-3 py-2 text-white rounded-md cursor-pointer"
                value="Cargando..."
            />
          }
          {pdfUrl &&
                <>
            {!loadingValidacion
              ? <button
                type="button"
                // eslint-disable-next-line @typescript-eslint/no-misused-promises
                onClick={async () => { await SaveContrato() }}
                className="rounded-md w-[100px] bg-secundario h-fit px-3 text-white py-2 hover:bg-green-700 transition-colors"
                >
                Continuar
                </button>
              : <button
                type="button"
                // eslint-disable-next-line @typescript-eslint/no-misused-promises
                className="rounded-md w-[100px] bg-secundario h-fit px-3 text-white py-2 hover:bg-green-700 transition-colors"
                >
                Validando...
                </button>
            }
            </>
        }
        </div>
      </div>
    </form>
  )
}
