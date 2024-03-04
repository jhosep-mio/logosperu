import { DialogContent } from '@mui/material'
import Dialog from '@mui/material/Dialog'
import { type Dispatch, type SetStateAction, useState, useEffect } from 'react'
import { useFormik } from 'formik'
import { SchemaCotizacion } from '../../../../shared/schemas/Schemas'
import { Errors } from '../../../../shared/Errors'
import { toast } from 'sonner'
import axios from 'axios'
import { Global } from '../../../../../helper/Global'
import { LoadingSmall } from '../../../../shared/LoadingSmall'
// import { useNavigate } from 'react-router-dom'
import { IoMdCloseCircle } from 'react-icons/io'
import { limpiarCadena } from '../../../../shared/functions/QuitarAcerntos'
import { convertirNumeroALetras } from '../../../../shared/functions/GenerarTextoEnLetras'
import { Loading } from '../../../../shared/Loading'
import { useNavigate } from 'react-router-dom'
import EditorPdfAltas from '../../../../shared/modals/EditorPdfAltas'

export const ModalCotizacion = ({
  open,
  setOpen,
  datos
}: {
  open: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
  datos: any
}): JSX.Element => {
  const [context, setContext] = useState('')
  const [loading, setLoading] = useState(false)
  const token = localStorage.getItem('token')
  const [loadingValidacion, seLoadingValidation] = useState(false)
  const [pdfUrl, setPdfUrl] = useState<any | null>(null)
  const navigate = useNavigate()
  const generarCodigo = async (): Promise<void> => {
    seLoadingValidation(true)
    try {
      const data = new FormData()
      data.append('plan', 'LPCOTI')
      data.append('empresa', datos.nombre_empresa)
      const request = await axios.post(
        `${Global.url}/generarCodigoToCotizacion`,
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
        setValues({
          ...values,
          correlativo: request.data.codigo
        })
      } else {
        toast.error('Error al generar la cotización')
      }
    } catch (error) {
      console.log(error)
      toast.error('Error al generar la cotización')
    }
    seLoadingValidation(false)
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

  const saveCotizacion = async (): Promise<void> => {
    seLoadingValidation(true)
    try {
      const data = new FormData()
      data.append('correlativo', values.correlativo)
      data.append('id_cliente', datos.id_cliente)
      data.append('descripcion', context ?? '')
      data.append('precio', values.precio)
      data.append('descuento', values.descuento)
      data.append('pdf', values.correlativo)

      const request = await axios.post(
        `${Global.url}/registrarCotizacion`,
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
        toast.success('Cotización creada')
        navigate('/admin/lista-cotizaciones')
      } else if (request.data.message.includes('codigo invalido')) {
        toast.warning('El codigo correlativo esta duplicado')
      } else {
        toast.error('Error al generar la cotizacion')
      }
    } catch (error: any) {
      if (
        error.request.response.includes(
          `Duplicate entry '${values.correlativo}' for key 'correlativo'`
        )
      ) {
        toast.warning('El codigo correlativo esta duplicado')
      } else {
        toast.error('Error al generar la cotizacion')
      }
    } finally {
      seLoadingValidation(false)
    }
  }

  const GenerarContrato = async (): Promise<void> => {
    setLoading(true)
    const fechaActual = new Date()
    const dia = fechaActual.getDate().toString().padStart(2, '0') // Agrega un 0 al principio si el día tiene un solo dígito
    const mes = (fechaActual.getMonth() + 1).toString().padStart(2, '0') // Agrega un 0 al principio si el mes tiene un solo dígito
    const anio = fechaActual.getFullYear()
    const fechaFormateada = `${dia}/${mes}/${anio}`
    const data = new FormData()
    data.append('nombres_cliente', datos.nombre_cliente ?? '')
    data.append('correlativo', values?.correlativo ?? '')
    data.append('descripcion', context ?? '')
    data.append('descripcioncorta', obtenerPrimeraLinea(context) ?? '')
    data.append('email', datos?.email ?? '')
    data.append('celular', datos?.celular ?? '')
    data.append('dni_ruc', datos?.dni_ruc ?? '')
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
      const response = await axios.post(
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
      const pdfBlob = new Blob([response.data], { type: 'application/pdf' })
      const pdfUrl = window.URL.createObjectURL(pdfBlob)
      setPdfUrl(pdfUrl) // Guarda la URL del PDF en el estado para mostrarlo en el componente
      toast.success('PDF GENERADO')
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
    resetForm,
    setValues
  } = useFormik({
    initialValues: {
      email: '',
      celular: '',
      dni_ruc: '',
      nombre_cliente: '',
      nombre_empresa: '',
      precio: '',
      descuento: '0',
      correlativo: ''
    },
    validationSchema: SchemaCotizacion,
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

  const total = calcularTotal()

  useEffect(() => {
    if (!open) {
      resetForm()
      setContext('')
      setPdfUrl('')
    }
    setValues({
      ...values,
      nombre_cliente: datos.nombre_cliente,
      nombre_empresa: datos.nombre_empresa,
      email: datos.email,
      celular: datos.celular,
      dni_ruc: datos.dni_ruc,
      precio: '',
      descuento: '0',
      correlativo: ''
    })
    if (open) {
      generarCodigo()
    }
  }, [open])

  return (
    <Dialog
      fullWidth={true}
      maxWidth={pdfUrl ? 'xl' : 'md'}
      open={open}
      scroll={'body'}
      onClose={() => {
        setOpen(false)
        resetForm()
        setContext('')
        setPdfUrl('')
      }}
    >
      <DialogContent className="w-full relative ">
        <IoMdCloseCircle
          className="text-2xl text-black absolute right-3 top-2 hover:text-gray-600 transition-colors cursor-pointer"
          onClick={() => {
            setOpen(false)
          }}
        />
        <form
          className={`w-full grid ${
            pdfUrl ? 'grid-cols-2' : 'grid-cols-1'
          }  gap-4`}
          onSubmit={handleSubmit}
        >
          <div className="w-full">
            <h2 className="w-full text-xl font-bold text-center uppercase underline">
              Generar cotizacion
            </h2>
            <section className="w-full grid grid-cols-1 lg:grid-cols-3 mt-4 gap-x-4 gap-y-2">
              <div className="grid gap-2 w-full">
                <label
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  htmlFor="email"
                >
                  Correlativo
                </label>
                <input
                  className="flex h-9 w-full rounded-md border border-input border-gray-400 bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed"
                  placeholder="Correlativo"
                  type="text"
                  name="correlativo"
                  value={values.correlativo}
                  onChange={handleChange}
                  onBlur={handleBlur}
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
                  className="flex h-9 w-full rounded-md border border-input border-gray-400 bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed"
                  placeholder="Nombre del cliente"
                  type="text"
                  disabled
                  value={datos.nombre_cliente}
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
                  className="flex h-9 w-full rounded-md border border-input border-gray-400 bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed "
                  placeholder="Nombre de empresa"
                  type="text"
                  disabled
                  value={datos.nombre_empresa}
                />
              </div>
              <div className="grid grid-cols-2 gap-2 col-span-2">
                <div className="relative">
                  <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Precio
                  </label>
                  <input
                    className="flex h-9 w-full rounded-md border border-input border-gray-400 bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed "
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
                    className="flex h-9 w-full rounded-md border border-input border-red-400 bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed "
                    placeholder="Descuento"
                    name="descuento"
                    type="text"
                    value={values.descuento}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <Errors
                    errors={errors.descuento}
                    touched={touched.descuento}
                  />
                </div>
              </div>
              <div className="flex gap-3 items-end">
                <label className="text-sm font-bold h-9 flex items-center mt-1 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Total
                </label>
                <input
                  className="flex h-9 w-full rounded-md bg-transparent  py-1 text-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none  disabled:cursor-not-allowed "
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
            <section className="mt-4 jodect_editor_cotizacion">
              <EditorPdfAltas content={context} setContent={setContext} />
            </section>
            <section className="mt-4 px-1 flex justify-end items-center">
              {!loading
                ? (
                    <div className='flex gap-3'>
                        <button
                        type="submit"
                        className="rounded-md w-[130px] bg-green-600 h-fit px-3 text-white py-2 hover:bg-green-700 transition-colors"
                        >
                        Previzualizar
                        </button>
                        {pdfUrl &&
                            <>
                            {!loadingValidacion
                              ? <button
                                type="button"
                                // eslint-disable-next-line @typescript-eslint/no-misused-promises
                                onClick={async () => { await saveCotizacion() }}
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
                  )
                : (
                <button
                  className="rounded-md w-[200px] bg-green-700 h-fit px-3 text-white py-2"
                  type="button"
                  disabled
                >
                  <LoadingSmall />
                </button>
                  )}
            </section>
          </div>
          <div className="w-full h-full relative">
            {loading && pdfUrl
              ? <Loading />
              : !loading && pdfUrl && <>
                <iframe
                  src={pdfUrl}
                  title="PDF Viewer"
                  className="w-full h-full border-none"
                />
              </>
            }
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
