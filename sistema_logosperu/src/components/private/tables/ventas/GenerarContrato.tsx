import { useFormik } from 'formik'
import { SchemaContrato } from '../../../shared/schemas/Schemas'
import { type VluesContrato } from '../../../shared/schemas/Interfaces'
import { Global } from '../../../../helper/Global'
import axios from 'axios'
import { useEffect, useState } from 'react'
import useAuth from '../../../../hooks/useAuth'
import Swal from 'sweetalert2'
import { Loading } from '../../../shared/Loading'
import { logo } from '../../../shared/Images'
import { TitleBriefs } from '../../../shared/TitleBriefs'
import { Link, useParams } from 'react-router-dom'
import { InputsBriefs } from '../../../shared/InputsBriefs'
import { Errors } from '../../../shared/Errors'
import Editor from '../../../shared/modals/ModalPDF'
import { AiOutlineFilePdf } from 'react-icons/ai'
import { convertirNumeroALetras } from '../../../shared/functions/GenerarTextoEnLetras'
import { getContenido } from '../../../shared/functions/contenidoToContrato'
import { IoDocument } from 'react-icons/io5'
import { SubirContrato } from '../../../shared/modals/SubirContrato'

export const GenerarContrato = (): JSX.Element => {
  const { setTitle } = useAuth()
  const token = localStorage.getItem('token')
  const [loading, setLoading] = useState(true)
  const { id } = useParams()
  const [contenido, setContenido] = useState('')
  const [formaPago, setFormaPago] = useState('')
  const [openPDF, setOpenPDF] = useState(false)

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

  const GenerarContrato = async (values: VluesContrato): Promise<void> => {
    if (contenido) {
      setLoading(true)
      const data = new FormData()
      data.append('nombres_cliente', values.nombres_cliente)
      data.append('titulo_contrato', values.titulo_contrato)
      data.append('id_contrato', values.id_contrato)
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
      data.append('codigo', formatearContrato2(values.id_contrato))
      data.append('codigo1', formatearContrato(values.id_contrato))
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
          `${Global.url}/generarPDF/${id ?? ''}`,
          data,
          {
            headers: {
              Authorization: `Bearer ${
                token !== null && token !== '' ? token : ''
              }`
            }
          }
        )
        const pdfBlob = new Blob([response.data], { type: 'application/pdf' })
        if (pdfBlob) {
          getOneBrief()
          Swal.fire('Contrato generado', '', 'success')
        }
      } catch (error) {
        console.log(error)
        Swal.fire('Error al generar el PDF:', '', 'error')
      }
      setLoading(false)
    } else {
      Swal.fire('El contenido no puede estar vacio', '', 'warning')
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

  const getOneBrief = async (): Promise<void> => {
    const request = await axios.get(
      `${Global.url}/dataToContrato/${id ?? ''}`,
      {
        headers: {
          Authorization: `Bearer ${
            token !== null && token !== '' ? `Bearer ${token}` : ''
          }`
        }
      }
    )
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    setContenido(
      request.data[0].contenido != null
        ? request.data[0].contenido
        : getContenido(formatearContrato(request.data[0].id_contrato))
    )
    setFormaPago(
      request.data[0].forma_pago != null
        ? request.data[0].forma_pago
        : '<ul><li><strong style="color: red;">S/ 00.00&nbsp;</strong><strong>&nbsp;</strong>A la aceptación del presente contrato</li><li><strong>S/ 00.00 </strong>&nbsp;<strong>+&nbsp;IGV</strong>&nbsp;A la los 10 días del proyecto&nbsp;</li><li><strong>S/ 00.00&nbsp;+ IGV a la aprobación del proyecto&nbsp;</strong></li></ul>'
    )

    const request2 = await axios.get(
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      `${Global.url}/showToContrato/${formatearContrato(
        request.data[0].id_contrato
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
      id_contrato: request.data[0].id_contrato,
      servicio: request2.data[0].servicio,
      primero: request2.data[0].primero,
      nombres_cliente: request.data[0].nombre_empresa,
      dni_cliente: request.data[0].dni_ruc,
      precio: request.data[0].precio,
      sexo: request.data[0].sexo,
      tiempo: request.data[0].tiempo,
      tipo_documento: request.data[0].tipo_documento,
      pdf_contrrato: request.data[0].pdf_contrato,
      fecha:
        request.data[0].fecha != null ? request.data[0].fecha : generarFecha()
    })
    setLoading(false)
  }

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
    getOneBrief()
  }, [])

  useEffect(() => {
    setTitle(`GENERAR CONTRATO - ${values.nombres_cliente} `)
  }, [values.nombres_cliente])

  return (
    <div className="">
      {loading
        ? <Loading />
        : (
        <div className="card">
          <form
            className="flex flex-col bg-white rounded-md mt-4 p-4 md:p-10 relative"
            onSubmit={handleSubmit}
          >
            <img
              src={logo}
              alt=""
              className="mx-auto w-[50%] px-4 md:px-0 md:w-48"
            />

            <div className="flex w-full mt-5 md:mt-5 flex-col">
              4
              <div className="w-full flex flex-col text-white">
                <div className="mb-3 md:mb-0 w-full bg-form rounded-md rounded-tl-none md:p-3 text-black flex flex-col items-end gap-2 lg:gap-5">
                  <div className="w-full flex flex-col lg:flex-row gap-3 lg:gap-5 mt-3 lg:mt-0">
                    <div className="w-full lg:relative">
                      <TitleBriefs titulo="Tipo de documento" />
                      <select
                        className="border placeholder-gray-400 focus:outline-none
                                                        focus:border-black w-full pt-4 pr-4 pb-6 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white
                                                        border-gray-300 rounded-md transition-all"
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
                      <Errors
                        errors={errors.tipo_documento}
                        touched={touched.tipo_documento}
                      />
                    </div>
                    <div className="w-full  lg:relative">
                      <TitleBriefs titulo="DNI/RUC del cliente" />
                      <InputsBriefs
                        name="dni_cliente"
                        type="number"
                        value={values.dni_cliente}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        disabled={false}
                      />
                      <Errors
                        errors={errors.dni_cliente}
                        touched={touched.dni_cliente}
                      />
                    </div>
                    <div className="w-full px-3  lg:hidden flex items-center justify-center">
                      <button className="bg-red-500 text-white rounded-xl px-5 py-2 mx-auto flex items-center justify-center gap-3 ">
                        <AiOutlineFilePdf /> Visualizar contrato
                      </button>
                    </div>
                    <div className="w-full lg:relative">
                      <TitleBriefs titulo="Fecha de creacion" />
                      <input
                        className="border placeholder-gray-400 focus:outline-none
                                                      focus:border-black w-full pr-4 h-16 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white
                                                      border-gray-300 rounded-md transition-all"
                        name="fecha"
                        type="text"
                        value={values.fecha}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        disabled={false}
                      />
                      <Errors errors={errors.fecha} touched={touched.fecha} />
                    </div>
                  </div>
                  <div className="w-full flex flex-col lg:flex-row gap-3 lg:gap-5 mt-3 lg:mt-0 items-center">
                    <div className="w-full  lg:relative">
                      <TitleBriefs titulo="Tiempo estimado" />
                      <InputsBriefs
                        name="tiempo"
                        type="number"
                        value={values.tiempo}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        disabled={false}
                      />
                      <Errors errors={errors.tiempo} touched={touched.tiempo} />
                    </div>
                    <div className="w-full  lg:relative">
                      <TitleBriefs titulo="Precio del servicio" />
                      <input
                        className="border placeholder-gray-400 focus:outline-none
                                                      focus:border-black w-full pr-4 h-16 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white
                                                      border-gray-300 rounded-md transition-all"
                        name="precio"
                        type="number"
                        step="0.01"
                        value={values.precio}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        disabled={false}
                      />
                      <Errors errors={errors.precio} touched={touched.precio} />
                    </div>
                    <div className="w-full  relative formas_pago">
                      <TitleBriefs titulo="Formas de pago" />
                      <div className="mt-3 w-full">
                        <Editor content={formaPago} setContent={setFormaPago} />
                      </div>
                    </div>
                  </div>

                  <div className="w-full relative">
                    <TitleBriefs titulo="Detalle del servicio" />
                    <div className="mt-3">
                      <Editor content={contenido} setContent={setContenido} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-fit flex w-full justify-between items-center gap-3 rounded-md text-black mt-5 mb-10">
              <div className="w-full">
                <div className="w-fit relative ml-4 ">
                  <button
                    type="button"
                    className="bg-red-500 hover:bg-red-700 transition-colors text-white flex items-center justify-center gap-3 px-4 py-2"
                    onClick={() => {
                      setOpenPDF(true)
                    }}
                  >
                    <IoDocument className="text-white" /> Remplazar PDF
                  </button>
                </div>
              </div>
              <div className="flex w-fit gap-3 rounded-md text-black mt-5 mb-10">
                <Link
                  to="/admin/lista-ventas"
                  className="bg-red-600 px-3 py-2 rounded-md text-white cursor-pointer"
                >
                  Cancelar
                </Link>
                <input
                  type="submit"
                  className="bg-secondary-150 px-3 py-2 text-white rounded-md cursor-pointer"
                  value="Generar"
                />
              </div>
            </div>
            {values.pdf_contrrato && (
              <div className="w-full px-3 hidden lg:block">
                <iframe
                  src={`${Global.urlImages}/contratos/${values.pdf_contrrato}`}
                  title="PDF Viewer"
                  width="100%"
                  height="700px"
                  className="mb-10"
                ></iframe>
              </div>
            )}
          </form>
        </div>
          )}
      <SubirContrato
        open={openPDF}
        setOpen={setOpenPDF}
        id={id}
        getOneBrief={getOneBrief}
      />
    </div>
  )
}
