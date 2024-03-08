/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useState, useEffect } from 'react'
import { useFormik } from 'formik'
import { toast } from 'sonner'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { SchemaCotizacion } from '../../../shared/schemas/Schemas'
import { Errors } from '../../../shared/Errors'
import { Global } from '../../../../helper/Global'
import useAuth from '../../../../hooks/useAuth'
import { Loading } from '../../../shared/Loading'
import { convertirNumeroALetras } from '../../../shared/functions/GenerarTextoEnLetras'
import { Errors2 } from '../../../shared/Errors2'
import EditorContexto from '../servicios/EditorContexto'
import { type arrayAdicionales } from '../../../shared/schemas/Interfaces'
import { IoCloseCircleOutline } from 'react-icons/io5'
import { v4 as uuidv4 } from 'uuid'
import { Chip } from '@mui/material'

export const EditarContrato = (): JSX.Element => {
  const { id } = useParams()
  const { setTitle } = useAuth()
  const [formaPago, setFormaPago] = useState('')
  const [contenido, setContenido] = useState('')
  const token = localStorage.getItem('token')
  const [loadingValidacion, seLoadingValidation] = useState(false)
  const [loading, setLoading] = useState(true)
  const [pdfUrl, setPdfUrl] = useState('')
  const [openAdicional, setOpenAdicional] = useState(false)
  const [arrayAdicionales, setArrayAdicionales] = useState<
  arrayAdicionales[] | null
  >(null)

  const formatearContrato = (cadena: string): string => {
    const partes = cadena.split('_')
    return partes[0]
  }

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

  const eliminarArray = (id: number | null): void => {
    const usuarioEliminado = arrayAdicionales?.find((peso) => peso.id === id)
    if (!usuarioEliminado) return // Salir si no se encuentra el usuario
    const nuevoArrayPesos = arrayAdicionales?.filter((peso) => peso.id !== id)
    // @ts-expect-error
    setArrayAdicionales(nuevoArrayPesos)
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

  const getCotizacion = async (): Promise<void> => {
    try {
      const request = await axios.get(
        `${Global.url}/getOneContrato/${id ?? ''}`,
        {
          headers: {
            Authorization: `Bearer ${
              token !== null && token !== '' ? `Bearer ${token}` : ''
            }`
          }
        }
      )

      const request2 = await axios.get(
        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
        `${Global.url}/showToContrato/${formatearContrato(request.data.correlativo)}`,
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
        nombre_empresa: request.data.empresa,
        precio: request.data.precio,
        correlativo: request.data.correlativo,
        dni_cliente: request.data.dni_cliente,
        medio_ingreso: request.data.medio_ingreso,
        tipo_documento: request.data.tipo_documento,
        fecha: request.data.fecha,
        tiempo: request.data.tiempo,
        sexo: request.data.sexo,
        titulo_contrato: request2.data[0].titulo,
        servicio: request2.data[0].servicio,
        primero: request2.data[0].primero
      })

      if (request.data.forma_pago) {
        setFormaPago(request.data.forma_pago)
      }
      if (request.data.contenido) {
        setContenido(request.data.contenido)
      }
      if (request.data.adicionales) {
        setArrayAdicionales(JSON.parse(request.data.adicionales))
      }
      if (request.data.pdf) {
        setPdfUrl(request.data.pdf)
      }
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  const SaveContrato = async (): Promise<void> => {
    if (contenido) {
      seLoadingValidation(true)
      const data = new FormData()
      data.append('correlativo', values?.correlativo)
      data.append('medio_ingreso', values?.medio_ingreso)
      data.append('nombres_cliente', values?.nombre_empresa)
      data.append('adicionales', JSON.stringify(arrayAdicionales ?? ''))
      data.append('titulo_contrato', values.titulo_contrato)
      data.append('id_contrato', values?.correlativo)
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
      data.append('codigo', formatearContrato2(values?.correlativo))
      data.append('codigo1', formatearContrato(values?.correlativo))
      data.append('servicio', values.servicio)
      data.append('forma_pago', formaPago)
      if (typeof values.precio == 'number') {
        data.append('precio', Number(values.precio).toFixed(2))
      } else {
        data.append('precio', values.precio)
      }
      data.append('fecha', values.fecha)
      data.append(
        'preciotexto',
        convertirNumeroALetras(Number(values.precio)).toLowerCase()
      )
      data.append('tiempo', values.tiempo)
      data.append('primero', values.primero)
      data.append('contenido', contenido)
      data.append('_method', 'PUT')
      try {
        const response = await axios.post(
          `${Global.url}/updateContrato/${id ?? ''}`,
          data,
          {
            headers: {
              Authorization: `Bearer ${
                token !== null && token !== '' ? token : ''
              }`
            }
          }
        )
        if (response.data.status == 'success') {
          toast.success('Contrato generado correctamente')
        } else {
          toast.error('Error al generar contrato')
        }
      } catch (error: unknown) {
        if (
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-expect-error
          error.request.response.includes(
            `Duplicate entry '${values?.correlativo}' for key 'contratos.correlativo'`
          )
        ) {
          toast.error('Contrato duplicado')
        } else {
          console.log(error)
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
    isSubmitting,
    setValues
  } = useFormik({
    initialValues: {
      correlativo: '',
      nombre_cliente: '',
      nombre_empresa: '',
      medio_ingreso: '',
      precio: '',
      dni_cliente: '',
      tipo_documento: '',
      fecha: '',
      tiempo: '',
      titulo_contrato: '',
      servicio: '',
      primero: '',
      sexo: ''
    },
    validationSchema: SchemaCotizacion,
    onSubmit: SaveContrato
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

  useEffect(() => {
    setTitle('EDITAR CONTRATO')
    getCotizacion()
  }, [])

  return (
    <>
      {loading
        ? <Loading />
        : (
        <form className="w-full" onSubmit={handleSubmit}>
          <section className="w-full grid grid-cols-1 lg:grid-cols-4 mt-4 gap-x-4 gap-y-2 text-black">
            <div className="grid gap-2 w-full">
              <label
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-black"
                htmlFor="email"
              >
                Correlativo
              </label>
              <input
                className="flex h-9 w-full rounded-md border border-input border-gray-400 bg-white disabled:bg-gray-100 px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-white file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed"
                placeholder="Correlativo"
                type="text"
                name="correlativo"
                value={values.correlativo}
                disabled
              />
            </div>
            <div className="grid gap-2">
              <label
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-black"
                htmlFor="email"
              >
                Cliente
              </label>
              <input
                className="flex h-9 w-full rounded-md border border-input border-gray-400 bg-white disabled:bg-gray-100 px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-white file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed"
                placeholder="Nombre del cliente"
                type="text"
                disabled
                value={values.nombre_cliente}
              />
            </div>
            <div className="grid gap-2">
              <label
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-black"
                htmlFor="email"
              >
                Empresa
              </label>
              <input
                className="flex h-9 w-full rounded-md border border-input border-gray-400  bg-white disabled:bg-gray-100 px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-white file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed "
                placeholder="Nombre de empresa"
                type="text"
                disabled
                value={values.nombre_empresa}
              />
            </div>
            <div className="grid gap-2">
              <label
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-black"
                htmlFor="email"
              >
                Medio de ingreso
              </label>
              <select
                className="flex h-9 w-full rounded-md border border-input border-gray-400  bg-white px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-white file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed "
                name="medio_ingreso"
                value={values.medio_ingreso}
                onChange={handleChange}
                onBlur={handleBlur}
              >
                <option value="">Seleccionar</option>
                <option value="0">Facebook</option>
                <option value="4">Whatsapp</option>
                <option value="1">Google</option>
                <option value="5">Instagram</option>
                <option value="2">Ventas</option>
                <option value="3">Post Venta</option>
                <option value="6">Recomendación</option>
                <option value="7">Logos</option>
              </select>
            </div>
          </section>
          <div className="w-full flex flex-col lg:flex-row gap-3 lg:gap-5 mt-3 ">
            <div className=" w-full relative">
                <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-black">
                  Precio
                </label>
                <input
                  className="flex h-9 w-full rounded-md border border-input border-gray-400 text-black bg-white px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-white file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed "
                  placeholder="Precio"
                  name="precio"
                  type="text"
                  value={values.precio}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <Errors errors={errors.precio} touched={touched.precio} />
            </div>
            <div className="w-full lg:relative pb-5">
              <label
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-black"
                htmlFor="email"
              >
                Tipo de documento
              </label>
              <select
                className="flex h-9 w-full rounded-md border border-input border-gray-400  bg-white px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-white file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed text-black"
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
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-black"
                htmlFor="email"
              >
                DNI/RUC del cliente
              </label>
              <input
                className="flex h-9 w-full rounded-md border border-input border-gray-400  bg-white px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-white file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed text-black"
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
            <div className="w-full lg:relative pb-5">
              <label
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-black"
                htmlFor="email"
              >
                Fecha de creacion
              </label>
              <input
                className="flex h-9 w-full rounded-md border border-input border-gray-400  bg-white px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-white file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed text-black"
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
            <div className="w-fit lg:relative pb-5">
              <label
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-black"
                htmlFor="email"
              >
                Tiempo estimado
              </label>
              <input
                className="flex h-9 w-full rounded-md border border-input border-gray-400  bg-white px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-white file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed text-black"
                name="tiempo"
                type="number"
                value={values.tiempo}
                onChange={handleChange}
                onBlur={handleBlur}
                disabled={false}
              />
              <Errors2 errors={errors.tiempo} touched={touched.tiempo} />
            </div>
          </div>
          <div className="w-full  relative formas_pago">
          <div className="w-full  relative formas_pago">
              <label
                className="text-sm font-medium text-black leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                htmlFor="email"
              >
                Formas de pago
              </label>
              <div className="mt-3 w-full">
                <EditorContexto content={formaPago} setContent={setFormaPago} />
              </div>
            </div>
          </div>
            {openAdicional &&
                <div className="w-[50%] bg-white p-2 text-black fixed right-0 top-0 bottom-0 shadow-md border rounded-md border-gray-300 z-10">
                <IoCloseCircleOutline className="absolute top-2 right-2 text-2xl cursor-pointer" onClick={() => { setOpenAdicional(false) }}/>
                <h2 className="text-center w-full uppercase font-bold">
                    Adicionales
                </h2>
                <div className="flex flex-col gap-1 mt-3">
                    <p
                    className="bg-white hover:bg-gray-300 transition-colors px-2 cursor-pointer"
                    onClick={() => {
                      agregarArrayPesos('Firma(s) de correo(s)')
                    }}
                    >
                    Firma de correo
                    </p>
                    <p
                    className="bg-white hover:bg-gray-300 transition-colors px-2 cursor-pointer"
                    onClick={() => {
                      agregarArrayPesos('Portada(s)')
                    }}
                    >
                    Portada
                    </p>
                    <p
                    className="bg-white hover:bg-gray-300 transition-colors px-2 cursor-pointer"
                    onClick={() => {
                      agregarArrayPesos('Perfil(es)')
                    }}
                    >
                    Perfil
                    </p>
                    <p
                    className="bg-white hover:bg-gray-300 transition-colors px-2 cursor-pointer"
                    onClick={() => {
                      agregarArrayPesos('Tarjeta(s) de presentación')
                    }}
                    >
                    Tarjeta de presentación
                    </p>
                    <p
                    className="bg-white hover:bg-gray-300 transition-colors px-2 cursor-pointer"
                    onClick={() => {
                      agregarArrayPesos('Hoja(s) membretada(s)')
                    }}
                    >
                    Hoja membretada
                    </p>
                    <p
                    className="bg-white hover:bg-gray-300 transition-colors px-2 cursor-pointer"
                    onClick={() => {
                      agregarArrayPesos('Flyer(s)')
                    }}
                    >
                    Flyer
                    </p>
                    <p
                    className="bg-white hover:bg-gray-300 transition-colors px-2 cursor-pointer"
                    onClick={() => {
                      agregarArrayPesos('Brochure 04 caras')
                    }}
                    >
                    Brochure 04 caras
                    </p>
                    <p
                    className="bg-white hover:bg-gray-300 transition-colors px-2 cursor-pointer"
                    onClick={() => {
                      agregarArrayPesos('Brochure 06 caras')
                    }}
                    >
                    Brochure 06 caras
                    </p>
                    <p
                    className="bg-white hover:bg-gray-300 transition-colors px-2 cursor-pointer"
                    onClick={() => {
                      agregarArrayPesos('Brochure 08 caras')
                    }}
                    >
                    Brochure 08 caras
                    </p>
                    <p
                    className="bg-white hover:bg-gray-300 transition-colors px-2 cursor-pointer"
                    onClick={() => {
                      agregarArrayPesos('Fotosheck(s) o uniforme(s)')
                    }}
                    >
                    Fotosheck o uniforme
                    </p>
                    <p
                    className="bg-white hover:bg-gray-300 transition-colors px-2 cursor-pointer"
                    onClick={() => {
                      agregarArrayPesos('Etiqueta(s)')
                    }}
                    >
                    Etiqueta
                    </p>
                    <p
                    className="bg-white hover:bg-gray-300 transition-colors px-2 cursor-pointer"
                    onClick={() => {
                      agregarArrayPesos('Montaje(s)')
                    }}
                    >
                    Montaje
                    </p>
                    <p
                    className="bg-white hover:bg-gray-300 transition-colors px-2 cursor-pointer"
                    onClick={() => {
                      agregarArrayPesos('Reel(s)')
                    }}
                    >
                    Reel
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
                      agregarArrayPesos('Manual de marca(s)')
                    }}
                    >
                    Manual de marca
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
                      agregarArrayPesos('Banner(s)')
                    }}
                    >
                    Banner
                    </p>
                    <p
                    className="bg-white hover:bg-gray-300 transition-colors px-2 cursor-pointer"
                    onClick={() => {
                      agregarArrayPesos('Volante(s)')
                    }}
                    >
                    Volante
                    </p>
                    <p
                    className="bg-white hover:bg-gray-300 transition-colors px-2 cursor-pointer"
                    onClick={() => {
                      agregarArrayPesos('Sobre(s)')
                    }}
                    >
                    Sobre
                    </p>
                    <p
                    className="bg-white hover:bg-gray-300 transition-colors px-2 cursor-pointer"
                    onClick={() => {
                      agregarArrayPesos('Folder(s)')
                    }}
                    >
                    Folder
                    </p>
                    <p
                    className="bg-white hover:bg-gray-300 transition-colors px-2 cursor-pointer"
                    onClick={() => {
                      agregarArrayPesos('Bolsa(s)')
                    }}
                    >
                    Bolsa
                    </p>
                    <p
                    className="bg-white hover:bg-gray-300 transition-colors px-2 cursor-pointer"
                    onClick={() => {
                      agregarArrayPesos('Calendario(s)')
                    }}
                    >
                    Calendario
                    </p>
                </div>
                </div>
            }
          <div className="w-full relative">
          <div className="flex justify-between items-center mt-4">
                <label
                  className="text-sm text-black font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
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
                <EditorContexto content={contenido} setContent={setContenido} />
              </div>
          </div>

          {!loadingValidacion
            ? <button
                type="submit"
                // eslint-disable-next-line @typescript-eslint/no-misused-promises
                className="rounded-md w-fit mt-4 bg-secundario h-fit px-3 text-white py-2 hover:bg-green-700 transition-colors"
                >
                Actualizar contrato
                </button>
            : <button
                type="button"
                // eslint-disable-next-line @typescript-eslint/no-misused-promises
                className="rounded-md w-fit mt-4 bg-secundario h-fit px-3 text-white py-2 hover:bg-green-700 transition-colors"
                >
                Validando...
                </button>
            }

          <iframe
            src={`${Global.urlImages}/contratos/${pdfUrl}?timestamp=${Date.now()}`}
            title="PDF Viewer"
            className="w-full h-[700px] border-none mt-10"
          />
        </form>
          )}
    </>
  )
}
