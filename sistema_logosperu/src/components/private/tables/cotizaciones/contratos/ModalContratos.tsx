/* eslint-disable multiline-ternary */
import { Dialog, DialogContent } from '@mui/material'
import { type Dispatch, type SetStateAction, useState, useEffect } from 'react'
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
import { TitleBriefs } from '../../../../shared/TitleBriefs'
import { Errors } from '../../../../shared/Errors'
import { InputsBriefs } from '../../../../shared/InputsBriefs'
import { AiOutlineFilePdf } from 'react-icons/ai'
import Editor from '../Editor'
import { IoDocument } from 'react-icons/io5'
import { Link } from 'react-router-dom'

export const ModalContratos = ({
  open,
  setOpen,
  selectedItem,
  getCotizaciones
}: {
  open: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
  selectedItem: ListcotizacionValues | null
  getCotizaciones: () => Promise<void>
}): JSX.Element => {
  const token = localStorage.getItem('token')
  const [contenido, setContenido] = useState('')
  const [formaPago, setFormaPago] = useState('')
  const [, setOpenPDF] = useState(false)

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

  // const generarFecha = (): string => {
  //   const meses: string[] = [
  //     'Enero',
  //     'Febrero',
  //     'Marzo',
  //     'Abril',
  //     'Mayo',
  //     'Junio',
  //     'Julio',
  //     'Agosto',
  //     'Septiembre',
  //     'Octubre',
  //     'Noviembre',
  //     'Diciembre'
  //   ]

  //   const fechaActual: Date = new Date()
  //   const dia: number = fechaActual.getDate()
  //   const mes: number = fechaActual.getMonth() // Los meses comienzan desde 0
  //   const año: number = fechaActual.getFullYear()
  //   const formatearDia = (numero: number): string => {
  //     return numero < 10 ? `0${numero}` : `${numero}`
  //   }

  //   return `${formatearDia(dia)} de ${meses[mes]} del ${año}`
  // }
  const GenerarContrato = async (values: VluesContrato): Promise<void> => {
    if (contenido) {
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
          `${Global.url}/generarPDF/${selectedItem?.id ?? ''}`,
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
          getCotizaciones()
          toast.success('Contrato generado')
        }
      } catch (error) {
        console.log(error)
        toast.error('Error al generar el PDF')
      }
    } else {
      toast.error('Error al generar el PDF')
    }
  }

  const {
    handleSubmit,
    handleChange,
    errors,
    values,
    touched,
    handleBlur,
    // setValues,
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

  return (
    <Dialog
      open={open}
      scroll={'body'}
      maxWidth={'md'}
      onClose={() => {
        setOpen(false)
      }}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      className='dialog_modal_contrato'
    >
      <DialogContent>
            <form
              className="flex flex-col bg-white rounded-md relative p-4"
              onSubmit={handleSubmit}
            >
              <div className="flex w-full flex-col">
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
                        <Errors
                          errors={errors.tiempo}
                          touched={touched.tiempo}
                        />
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
                        <Errors
                          errors={errors.precio}
                          touched={touched.precio}
                        />
                      </div>
                      <div className="w-full  relative formas_pago">
                        <TitleBriefs titulo="Formas de pago" />
                        <div className="mt-3 w-full">
                          <Editor
                            content={formaPago}
                            setContent={setFormaPago}
                          />
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
      </DialogContent>
    </Dialog>
  )
}
