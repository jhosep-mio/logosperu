import { useState, useEffect } from 'react'
import { useFormik } from 'formik'
import { toast } from 'sonner'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'
import { SchemaCotizacion } from '../../../shared/schemas/Schemas'
import { LoadingSmall } from '../../../shared/LoadingSmall'
import { Errors } from '../../../shared/Errors'
import Editor from '../clientes/cotizacion/Editor'
import { Global } from '../../../../helper/Global'
import useAuth from '../../../../hooks/useAuth'
import { Loading } from '../../../shared/Loading'
import { limpiarCadena } from '../../../shared/functions/QuitarAcerntos'
import { convertirNumeroALetras } from '../../../shared/functions/GenerarTextoEnLetras'

export const EditarCotizacion = (): JSX.Element => {
  const { id } = useParams()
  const { setTitle } = useAuth()
  const [context, setContext] = useState('')
  const token = localStorage.getItem('token')
  const [loadingValidacion, seLoadingValidation] = useState(false)
  const [loading, setLoading] = useState(true)

  const saveCotizacion = async (): Promise<void> => {
    seLoadingValidation(true)
    try {
      const data = new FormData()
      data.append('correlativo', values.correlativo)
      data.append('id_cliente', values.id_cliente ?? '')
      data.append('descripcion', context ?? '')
      data.append('precio', values.precio)
      data.append('descuento', values.descuento)
      data.append('_method', 'PUT')
      const request = await axios.post(
        `${Global.url}/updateCotizacion/${id ?? ''}`,
        data,
        {
          headers: {
            Authorization: `Bearer ${
              token !== null && token !== '' ? token : ''
            }`
          }
        }
      )
      if (request.data.status == 'success') {
        GenerarContrato()
        toast.success('Cotización actualizada')
        getCotizacion()
      } else if (request.data.message.includes('codigo invalido')) {
        toast.warning('El codigo correlativo esta duplicado')
      } else {
        toast.error('Error al actualizar la cotización')
      }
    } catch (error: any) {
      console.log(error)
      if (
        error.request.response.includes(
          `Duplicate entry '${values.correlativo}' for key 'correlativo'`
        )
      ) {
        toast.warning('El codigo correlativo esta duplicado')
      } else {
        toast.error('Error al actualizar la cotización')
      }
    } finally {
      seLoadingValidation(false)
    }
  }

  const getCotizacion = async (): Promise<void> => {
    try {
      const request = await axios.get(
        `${Global.url}/getOneCotizacion/${id ?? ''}`,
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
        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
        nombre_cliente: `${request.data.nombres} ${request.data.apellidos}`,
        id_cliente: request.data.id_cliente,
        nombre_empresa: request.data.empresa,
        precio: request.data.precio,
        descuento: request.data.descuento,
        correlativo: request.data.correlativo,
        pdf: request.data.pdf,
        email: request.data.email,
        dni_ruc: request.data.dni_ruc,
        celular: request.data.celular
      })

      if (request.data.descripcion) {
        setContext(request.data.descripcion)
      }
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  const limpiarHTML = (html: string): string => {
    // Eliminar cualquier etiqueta HTML y caracteres especiales
    return html.replace(/<[^>]+>/g, '').replace(/&[^;]+;/g, '')
  }

  const obtenerPrimeraLinea = (content: any): string => {
    // Utilizar expresión regular para extraer el texto entre las etiquetas <p> y </p>
    let primeraLinea = content?.match(/<p>(.*?)<\/p>/s)[1]
    // Retornar la primera línea sin espacios en blanco al inicio y al final
    primeraLinea.trim()
    const contenidoLimpio = limpiarHTML(primeraLinea)
    // Dividir el contenido por saltos de línea y tomar la primera línea
    const lineas = contenidoLimpio.split('\n')
    primeraLinea = lineas[0]
    // Retornar la primera línea sin espacios en blanco al inicio y al final
    return primeraLinea.trim()
  }

  const GenerarContrato = async (): Promise<void> => {
    setLoading(true)
    const fechaActual = new Date()
    const dia = fechaActual.getDate().toString().padStart(2, '0') // Agrega un 0 al principio si el día tiene un solo dígito
    const mes = (fechaActual.getMonth() + 1).toString().padStart(2, '0') // Agrega un 0 al principio si el mes tiene un solo dígito
    const anio = fechaActual.getFullYear()
    const fechaFormateada = `${dia}/${mes}/${anio}`
    const data = new FormData()
    data.append('nombres_cliente', values.nombre_cliente ?? '')
    data.append('correlativo', values?.correlativo ?? '')
    data.append('descripcion', context ?? '')
    data.append('descripcioncorta', obtenerPrimeraLinea(context) ?? '')
    data.append('email', values?.email ?? '')
    data.append('celular', values?.celular ?? '')
    data.append('dni_ruc', values?.dni_ruc ?? '')
    data.append('fecha', fechaFormateada ?? '')
    data.append('codigo', limpiarCadena(values?.correlativo) ?? '')
    const totalSinIGV = calcularTotal()
    data.append('total', `S/ ${totalSinIGV}`)
    const igv: number = (Number(totalSinIGV) * 0.18)
    data.append('igv', `S/ ${igv.toFixed(2)}`)
    const totalConIGV = (Number(totalSinIGV) + igv)
    data.append('totaligv', `S/ ${totalConIGV.toFixed(2)}`)
    data.append(
      'preciotexto',
      convertirNumeroALetras(Number(totalConIGV.toFixed(2))).toLowerCase()
    )
    try {
      await axios.post(
        `${Global.url}/generarPDFCotizacion`,
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
    } catch (error) {
      console.log(error)
      toast.error('Error al generar el PDF')
    } finally {
      setLoading(false)
    }
  }

  const {
    handleSubmit,
    handleChange,
    errors,
    values,
    touched,
    handleBlur,
    isSubmitting,
    setValues
  } = useFormik({
    initialValues: {
      id_cliente: '',
      nombre_cliente: '',
      nombre_empresa: '',
      email: '',
      dni_ruc: '',
      celular: '',
      precio: '',
      descuento: '0',
      correlativo: '',
      pdf: ''
    },
    validationSchema: SchemaCotizacion,
    onSubmit: saveCotizacion
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

  const calcularTotal = (): string | number => {
    const precioNumerico = parseFloat(values.precio)
    const descuentoPorcentaje = parseFloat(values.descuento)
    // Verificar que ambos valores sean números válidos
    if (!isNaN(precioNumerico) && !isNaN(descuentoPorcentaje)) {
      // Convertir el porcentaje a un decimal
      const descuentoDecimal = descuentoPorcentaje / 100
      // Calcular el descuento
      const descuentoCalculado = precioNumerico * descuentoDecimal
      // Restar el descuento al precio original para obtener el total
      return precioNumerico - descuentoCalculado
    }
    // En caso de que no se puedan calcular los valores
    return '---'
  }

  useEffect(() => {
    setTitle('EDITAR COTIZACIÓN')
    getCotizacion()
  }, [])

  const total = calcularTotal()

  return (
    <>
      {loading
        ? <Loading />
        : (
        <form className="w-full" onSubmit={handleSubmit}>
          <section className="w-full grid grid-cols-1 lg:grid-cols-3 mt-4 gap-x-4 gap-y-2 text-black">
            <div className="grid gap-2 w-full">
              <label
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                htmlFor="email"
              >
                Correlativo
              </label>
              <input
                className="flex h-9 w-full rounded-md border border-input border-gray-400 bg-white px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-white file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed"
                placeholder="Correlativo"
                type="text"
                name="correlativo"
                value={values.correlativo}
                disabled
              />
            </div>
            <div className="grid gap-2">
              <label
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                htmlFor="email"
              >
                Cliente
              </label>
              <input
                className="flex h-9 w-full rounded-md border border-input border-gray-400 bg-white px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-white file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed"
                placeholder="Nombre del cliente"
                type="text"
                disabled
                value={values.nombre_cliente}
              />
            </div>
            <div className="grid gap-2">
              <label
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                htmlFor="email"
              >
                Empresa
              </label>
              <input
                className="flex h-9 w-full rounded-md border border-input border-gray-400 bg-white px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-white file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed "
                placeholder="Nombre de empresa"
                type="text"
                disabled
                value={values.nombre_empresa}
              />
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div className="relative">
                <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Precio
                </label>
                <input
                  className="flex h-9 w-full rounded-md border border-input border-gray-400 bg-white px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-white file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed "
                  placeholder="Precio"
                  name="precio"
                  type="text"
                  value={values.precio}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <Errors errors={errors.precio} touched={touched.precio} />
              </div>
              <div className="relative">
                <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Descuento
                </label>
                <input
                  className="flex h-9 w-full rounded-md border border-input border-red-400 bg-white px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-white file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed "
                  placeholder="Descuento"
                  name="descuento"
                  type="text"
                  value={values.descuento}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <Errors errors={errors.descuento} touched={touched.descuento} />
              </div>
            </div>
            <div className="flex gap-3 items-end">
              <label className="text-sm font-bold h-9 flex items-center mt-1 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Total
              </label>
              <input
                className="flex h-9 w-full rounded-md   py-1 text-sm transition-colors file:border-0 file:bg-white file:text-sm file:font-medium focus-visible:outline-none  disabled:cursor-not-allowed "
                placeholder="Precio"
                disabled
                name="precio"
                type="text"
                value={`S/. ${total}`}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
          </section>
          <section className="mt-4 jodect_editor_cotizacion text-black">
            <Editor content={context} setContent={setContext} />
          </section>

          <section className="w-full grid grid-cols-1 justify-center mt-4 gap-x-4 gap-y-4 items-end">
            <div className="flex justify-start gap-4">
              {!loadingValidacion
                // eslint-disable-next-line @typescript-eslint/no-misused-promises
                ? <button
                  type="submit"
                  className="rounded-md w-[200px] bg-green-600 h-fit px-3 text-white py-2 hover:bg-green-700 transition-colors"
                >
                  Grabar cotización
                </button>
                : (
                <button
                  className="rounded-md w-[200px] bg-green-700 h-fit px-3 text-white py-2"
                  type="button"
                  disabled
                >
                  <LoadingSmall />
                </button>
                  )}
              <Link
                to="/admin/lista-cotizaciones"
                className="bg-red-600 px-3 py-2 rounded-md text-white cursor-pointer"
              >
                Cancelar
              </Link>
            </div>
          </section>

          <iframe
            src={`${Global.urlImages}/cotizaciones/${values.pdf}.pdf`}
            title="PDF Viewer"
            className="w-full h-[700px] border-none mt-10"
          />
        </form>
          )}
    </>
  )
}
