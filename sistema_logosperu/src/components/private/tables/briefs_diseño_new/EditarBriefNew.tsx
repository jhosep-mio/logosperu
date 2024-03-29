import { type ChangeEvent, useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { Global } from '../../../../helper/Global'
import Swal from 'sweetalert2'
import useAuth from '../../../../hooks/useAuth'
import { Loading } from '../../../shared/Loading'
import { RiCheckDoubleFill } from 'react-icons/ri'
import { Errors } from '../../../shared/Errors'
import { CSSTransition } from 'react-transition-group'
import { type ImagenState, type ValuesNew } from '../../../shared/schemas/Interfaces'
import { useFormik } from 'formik'
import { SchemaBriefNew } from '../../../shared/schemas/Schemas'
import { TitleBriefs } from '../../../shared/TitleBriefs'
import { InputsBriefs } from '../../../shared/InputsBriefs'
import {
  imagotipo1,
  imagotipo2,
  imagotipo3,
  integrado1,
  integrado2,
  integrado3,
  logo,
  sintetisado1,
  sintetisado2,
  sintetisado3,
  tipografico1,
  tipografico2,
  tipografico3
} from '../../../shared/Images'
import { ImageUpdate } from '../../../shared/ImageUpdate'
import { ViewCliente } from '../../../shared/modals/ViewCliente'

export const EditarBriefNew = (): JSX.Element => {
  const { id } = useParams()
  const token = localStorage.getItem('token')
  const [open, setOpen] = useState(false)

  const handleClickOpen = (): void => {
    setOpen(true)
  }
  const handleClose = (): void => {
    setOpen(false)
  }
  const { setTitle } = useAuth()
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()
  const [sintetisado, setSintetisado] = useState(false)
  const [integrado, setIntegrado] = useState(false)
  const [imagotipo, setImagotipo] = useState(false)
  const [tipografico, setTipoGrafico] = useState(false)
  const [imagen1, setImagen1] = useState('')
  const [boton1, setBoton1] = useState(false)
  const [url1, setUrl1] = useState('')
  const [imagenNueva1, SetImagenNueva1] = useState<ImagenState>({
    archivo: null,
    archivoName: ''
  })
  const [imagen2, setImagen2] = useState('')
  const [boton2, setBoton2] = useState(false)
  const [url2, setUrl2] = useState('')
  const [imagenNueva2, SetImagenNueva2] = useState<ImagenState>({
    archivo: null,
    archivoName: ''
  })
  const [imagen3, setImagen3] = useState('')
  const [boton3, setBoton3] = useState(false)
  const [url3, setUrl3] = useState('')
  const [imagenNueva3, SetImagenNueva3] = useState<ImagenState>({
    archivo: null,
    archivoName: ''
  })
  const [imagen4, setImagen4] = useState('')
  const [boton4, setBoton4] = useState(false)
  const [url4, setUrl4] = useState('')
  const [imagenNueva4, SetImagenNueva4] = useState<ImagenState>({
    archivo: null,
    archivoName: ''
  })
  const [imagen5, setImagen5] = useState('')
  const [boton5, setBoton5] = useState(false)
  const [url5, setUrl5] = useState('')
  const [imagenNueva5, SetImagenNueva5] = useState<ImagenState>({
    archivo: null,
    archivoName: ''
  })
  const [option1Checked, setOption1Checked] = useState(false)
  const [option2Checked, setOption2Checked] = useState(false)
  const getOneBrief = async (): Promise<void> => {
    const request = await axios.get(
      `${Global.url}/oneBriefDiseñoNew/${id ?? ''}`,
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
      id_venta: request.data[0].id_venta,
      nombres: String(request.data[0].nombres) + ' ' + String(request.data[0].apellidos),
      base_proyecto: request.data[0].tipo,
      nombre_empresa: request.data[0].nombre_empresa,
      historia_empresa: request.data[0].historia_empresa,
      principales_servicios: request.data[0].principales_servicios,
      colores: request.data[0].colores,
      referencias: request.data[0].referencias,
      transmitir: request.data[0].transmitir
    })

    setSintetisado(request.data[0].estilo1 == 1)
    setIntegrado(request.data[0].estilo2 == 1)
    setImagotipo(request.data[0].estilo3 == 1)
    setTipoGrafico(request.data[0].estilo4 == 1)
    setImagen1(request.data[0].logo_referencia)
    setImagen2(request.data[0].refe1)
    setImagen3(request.data[0].refe2)
    setImagen4(request.data[0].refe3)
    setImagen5(request.data[0].refe4)

    setOption1Checked(request.data[0].medios == 'true')
    setOption2Checked(request.data[0].medios2 == 'true')

    setLoading(false)
  }

  const updateBrief = async (values: ValuesNew): Promise<void> => {
    if (!option1Checked && !option2Checked) {
      Swal.fire(
        '',
        'Debes seleccionar al menos un medio para el cual se utilizara su logo en la pregunta 5',
        'warning'
      )
    } else {
      setLoading(true)
      const token = localStorage.getItem('token')

      const data = new FormData()
      data.append('id_venta', values.id_venta)
      data.append('tipo', values.base_proyecto)
      if (imagenNueva1.archivo != null) {
        data.append('logo_referencia', imagenNueva1.archivo)
      }
      data.append('nombre_empresa', values.nombre_empresa)
      data.append('historia_empresa', values.historia_empresa)
      data.append('principales_servicios', values.principales_servicios)
      data.append('medios', option1Checked.toString())
      data.append('medios2', option2Checked.toString())
      data.append('colores', values.colores)

      data.append('referencias', values.referencias)
      if (imagenNueva2.archivo != null) {
        data.append('refe1', imagenNueva2.archivo)
      }
      if (imagenNueva3.archivo != null) {
        data.append('refe2', imagenNueva3.archivo)
      }
      if (imagenNueva4.archivo != null) {
        data.append('refe3', imagenNueva4.archivo)
      }
      if (imagenNueva5.archivo != null) {
        data.append('refe4', imagenNueva5.archivo)
      }

      data.append('transmitir', values.transmitir)

      data.append('estilo1', sintetisado ? '1' : '0')

      data.append('estilo2', integrado ? '1' : '0')
      data.append('estilo3', imagotipo ? '1' : '0')
      data.append('estilo4', tipografico ? '1' : '0')

      data.append('_method', 'PUT')

      const authorizationHeader =
        token !== null && token !== '' ? `Bearer ${token}` : ''

      try {
        const respuesta = await axios.post(
          `${Global.url}/updateBriefDiseño/${id ?? ''}`,
          data,
          {
            headers: {
              Authorization: authorizationHeader
            }
          }
        )

        if (respuesta.data.status == 'success') {
          Swal.fire('Actualizado correctamente', '', 'success')
          navigate('/admin/lista-briefs-diseños-new')
        } else {
          Swal.fire('Error3', '', 'error')
          setLoading(false)
        }
      } catch (error) {
        Swal.fire('Error3', '', 'error')
        setLoading(false)
        console.log(error)
      }
    }
  }

  const handleOption1Change = (event: ChangeEvent<HTMLInputElement>): void => {
    setOption1Checked(event.target.checked)
  }

  const handleOption2Change = (event: ChangeEvent<HTMLInputElement>): void => {
    setOption2Checked(event.target.checked)
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
      id_venta: '',
      nombres: '',
      base_proyecto: '',
      nombre_empresa: '',
      historia_empresa: '',
      principales_servicios: '',
      colores: '',
      referencias: '',
      transmitir: ''
    },
    validationSchema: SchemaBriefNew,
    onSubmit: updateBrief
  })

  useEffect(() => {
    setTitle('EDITAR BRIEF DE DISEÑO')
    getOneBrief()
  }, [])

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
    <>
      <div className="">
        {loading
          ? (
          <Loading />
            )
          : (
          <div className="card">
            <form
              className="flex flex-col bg-white rounded-md mt-4 p-4 md:p-10"
              onSubmit={handleSubmit}
            >
              <img
                src={logo}
                alt=""
                className="mx-auto w-[50%] px-4 md:px-0 md:w-48"
              />
              <div className="flex w-full mt-5 md:mt-5 flex-col">
                <div className="w-full flex flex-col text-white">
                <div className="mb-3 md:mb-0 w-full bg-form rounded-md rounded-tl-none md:p-3 text-black flex flex-col items-end gap-2 lg:gap-5">
                    <div className="w-full flex flex-col md:flex-row gap-2 lg:gap-5">
                      <div className="w-3/4">
                        <TitleBriefs titulo="Cliente" />
                        <input
                          className="border placeholder-gray-400 focus:outline-none
                                                      focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white
                                                      border-gray-300 rounded-md transition-all text-center"
                          name="nombres"
                          type="text"
                          value={values.nombres}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          disabled={true}
                        />

                        <Errors
                          errors={errors.id_venta}
                          touched={touched.id_venta}
                        />
                      </div>
                      <div className="w-1/4 flex items-center justify-center">
                        <button
                        type='button'
                          className="w-fit px-10 bg-main py-2 text-white rounded-lg"
                          onClick={() => { handleClickOpen() }}
                        >
                          Ver datos
                        </button>
                      </div>
                    </div>
                  </div>
                  <ViewCliente handleClose={handleClose} open={open} id={values.id_venta}/>

                  <label className="bg-secondary-150 px-4 text-white py-2 w-fit rounded-t-md mb-5 ">
                    Informacion de la empresa{' '}
                  </label>
                  <div className="mb-3 md:mb-8 w-full bg-form rounded-md rounded-tl-none md:p-3 text-black flex flex-col items-start gap-5 lg:gap-8 text-justify md:text-left">
                    <div className="w-full flex flex-col md:flex-row justify-between items-center gap-2">
                      <div className="w-full lg:relative">
                        <TitleBriefs titulo="1. Base para dar avance con su proyecto" />

                        <select
                          className="border placeholder-gray-400 focus:outline-none
                                                        focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white
                                                        border-gray-300 rounded-md transition-all"
                          name="base_proyecto"
                          value={values.base_proyecto}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        >
                          <option value="">Seleccionar</option>
                          <option value="0">Diseño desde 0</option>
                          <option value="1">Rediseño</option>
                        </select>
                        <Errors
                          errors={errors.base_proyecto}
                          touched={touched.base_proyecto}
                        />
                      </div>
                      <CSSTransition
                        in={values.base_proyecto == '1'}
                        timeout={300}
                        classNames="fade"
                        unmountOnExit
                      >
                        <div className="w-full relative">
                          <p className="bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600 absolute">
                            Adjuntar logo (Opcional)
                          </p>
                          <ImageUpdate
                            url={url1}
                            setUrl={setUrl1}
                            boton={boton1}
                            setBoton={setBoton1}
                            imagen={imagen1}
                            setImagen={SetImagenNueva1}
                            clase="1"
                            disabled={false}
                          />
                        </div>
                      </CSSTransition>
                    </div>

                    <div className="w-full lg:relative">
                      <TitleBriefs
                        titulo="2. ¿Cuál es el nombre comercial de la empresa con el que
                        se realizará el Diseño de Logo?"
                      />
                      <InputsBriefs
                        name="nombre_empresa"
                        type="text"
                        value={values.nombre_empresa}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        disabled={false}
                      />
                      <Errors
                        errors={errors.nombre_empresa}
                        touched={touched.nombre_empresa}
                      />
                    </div>

                    <div className="w-full lg:relative">
                      <TitleBriefs titulo="3. ¿Cuál es la historia de su empresa?" />
                      <textarea
                        className="border placeholder-gray-400 focus:outline-none
                                            focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white
                                            border-gray-300 rounded-md resize-none"
                        name="historia_empresa"
                        value={values.historia_empresa}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      <Errors
                        errors={errors.historia_empresa}
                        touched={touched.historia_empresa}
                      />
                    </div>

                    <div className="w-full lg:relative">
                      <TitleBriefs
                        titulo="4. ¿Cuáles son los principales servicios o productos que
                        brinda al público?"
                      />
                      <InputsBriefs
                        name="principales_servicios"
                        type="text"
                        value={values.principales_servicios}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        disabled={false}
                      />
                      <Errors
                        errors={errors.principales_servicios}
                        touched={touched.principales_servicios}
                      />
                    </div>

                    <div className="w-full lg:relative">
                      <TitleBriefs titulo="5. ¿Para qué medios se utilizará el logotipo?" />

                      <div className="input2">
                        <div className="radio-container">
                          <div className="radio-wrapper">
                            <label className="radio-button">
                              <input
                                type="checkbox"
                                id="medio1"
                                checked={option1Checked}
                                onChange={handleOption1Change}
                                name="medios"
                              />
                              <span className="radio-checkmark"></span>
                              <span className="radio-label">
                                Digital <br />
                              </span>
                            </label>
                          </div>
                          <div className="radio-wrapper">
                            <label className="radio-button">
                              <input
                                type="checkbox"
                                id="medio2"
                                checked={option2Checked}
                                onChange={handleOption2Change}
                                name="medios2"
                              />
                              <span className="radio-checkmark"></span>
                              <span className="radio-label">
                                Impreso <br />
                              </span>
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="w-full lg:relative">
                      <TitleBriefs titulo="6. ¿Tiene colores de preferencia para su logotipo?" />
                      <InputsBriefs
                        name="colores"
                        type="text"
                        value={values.colores}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        disabled={false}
                      />
                      <Errors
                        errors={errors.colores}
                        touched={touched.colores}
                      />
                    </div>

                    <div className="w-full lg:relative">
                      <TitleBriefs
                        titulo=" 7. ¿Tiene referencias de cómo desea sus propuestas de
                        logotipo?"
                      />
                      <InputsBriefs
                        name="referencias"
                        type="text"
                        value={values.referencias}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        disabled={false}
                      />
                      <Errors
                        errors={errors.referencias}
                        touched={touched.referencias}
                      />
                    </div>

                    <div className="w-full lg:relative">
                      <p
                        className="bg-white pt-0 pr-2 pb-0 lg:pl-2 -mt-3 mr-0 mb-0 ml-1 lg:ml-2 font-medium text-gray-600
                                            lg:absolute"
                      >
                        Adjuntar imagenes de referencia (Opcional)
                      </p>
                      <div className="flex flex-col md:flex-row md:items-center gap-y-2 mb-8 border">
                        <div className="flex-1 flex flex-col md:flex-row items-center md:gap-4 p-4">
                          <div className="w-1/4">
                            <ImageUpdate
                              url={url2}
                              setUrl={setUrl2}
                              boton={boton2}
                              setBoton={setBoton2}
                              imagen={imagen2}
                              setImagen={SetImagenNueva2}
                              clase="2"
                              disabled={false}
                            />
                          </div>
                          <div className="w-1/4">
                            <ImageUpdate
                              url={url3}
                              setUrl={setUrl3}
                              boton={boton3}
                              setBoton={setBoton3}
                              imagen={imagen3}
                              setImagen={SetImagenNueva3}
                              clase="3"
                              disabled={false}
                            />
                          </div>
                          <div className="w-1/4">
                            <ImageUpdate
                              url={url4}
                              setUrl={setUrl4}
                              boton={boton4}
                              setBoton={setBoton4}
                              imagen={imagen4}
                              setImagen={SetImagenNueva4}
                              clase="4"
                              disabled={false}
                            />
                          </div>
                          <div className="w-1/4">
                            <ImageUpdate
                              url={url5}
                              setUrl={setUrl5}
                              boton={boton5}
                              setBoton={setBoton5}
                              imagen={imagen5}
                              setImagen={SetImagenNueva5}
                              clase="5"
                              disabled={false}
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="w-full lg:relative">
                      <TitleBriefs titulo=" 8. ¿Qué desea transmitir con su logotipo?" />
                      <InputsBriefs
                        name="transmitir"
                        type="text"
                        value={values.transmitir}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        disabled={false}
                      />
                      <Errors
                        errors={errors.transmitir}
                        touched={touched.transmitir}
                      />
                    </div>
                  </div>
                </div>

                <div className="w-full flex flex-col text-white">
                  <label className="bg-secondary-150 px-4 text-white py-2 w-fit rounded-t-md mb-5">
                    Estilos de diseño de logotipo
                  </label>
                  <div className="flex flex-col md:flex-row w-full mt-5 gap-5">
                    <div
                      className={`w-full md:w-1/2  flex justify-center flex-col items-center cursor-pointer relative ${
                        sintetisado ? 'border border-green-400' : 'border'
                      }`}
                      onClick={() => {
                        setSintetisado(!sintetisado)
                      }}
                    >
                      {sintetisado && (
                        <RiCheckDoubleFill className="text-green-600  absolute top-0 right-0 text-5xl mx-4" />
                      )}
                      <h3 className="bg-white w-fit pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600 text-center text-lg">
                        1. Diseño Sintetizado
                      </h3>
                      <div className="w-full flex flex-col items-center select-none">
                        <img
                          src={sintetisado1}
                          alt=""
                          className="w-32 h-32 object-contain"
                        />
                        <img
                          src={sintetisado2}
                          alt=""
                          className="w-32 h-32 object-contain"
                        />
                        <img
                          src={sintetisado3}
                          alt=""
                          className="w-32 h-32 object-contain"
                        />
                      </div>
                    </div>

                    <div
                      className={`w-full md:w-1/2  flex justify-center flex-col items-center cursor-pointer relative ${
                        integrado ? 'border border-green-400' : 'border'
                      }`}
                      onClick={() => {
                        setIntegrado(!integrado)
                      }}
                    >
                      {integrado && (
                        <RiCheckDoubleFill className="text-green-600  absolute top-0 right-0 text-5xl mx-4" />
                      )}
                      <h3 className="bg-white w-fit pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600 text-center text-lg">
                        2. Diseño Integrado
                      </h3>
                      <div className="w-full flex flex-col items-center select-none">
                        <img
                          src={integrado1}
                          alt=""
                          className="w-32 h-32 object-contain"
                        />
                        <img
                          src={integrado2}
                          alt=""
                          className="w-32 h-32 object-contain"
                        />
                        <img
                          src={integrado3}
                          alt=""
                          className="w-32 h-32 object-contain"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col md:flex-row w-full mt-5 gap-5">
                    <div
                      className={`w-full md:w-1/2  flex justify-center flex-col items-center cursor-pointer relative ${
                        imagotipo ? 'border border-green-400' : 'border'
                      }`}
                      onClick={() => {
                        setImagotipo(!imagotipo)
                      }}
                    >
                      {imagotipo && (
                        <RiCheckDoubleFill className="text-green-600  absolute top-0 right-0 text-5xl mx-4" />
                      )}
                      <h3 className="bg-white w-fit pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600 text-center text-lg">
                        3. Diseño Imagotipo
                      </h3>
                      <div className="w-full flex flex-col items-center select-none">
                        <img
                          src={imagotipo1}
                          alt=""
                          className="w-32 h-32 object-contain"
                        />
                        <img
                          src={imagotipo2}
                          alt=""
                          className="w-32 h-32 object-contain"
                        />
                        <img
                          src={imagotipo3}
                          alt=""
                          className="w-32 h-32 object-contain"
                        />
                      </div>
                    </div>
                    <div
                      className={`w-full md:w-1/2  flex justify-center flex-col items-center cursor-pointer relative ${
                        tipografico ? 'border border-green-400' : 'border'
                      }`}
                      onClick={() => {
                        setTipoGrafico(!tipografico)
                      }}
                    >
                      {tipografico && (
                        <RiCheckDoubleFill className="text-green-600  absolute top-0 right-0 text-5xl mx-4" />
                      )}
                      <h3 className="bg-white w-fit pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600 text-center text-lg">
                        1. Diseño Tipografico
                      </h3>
                      <div className="w-full flex flex-col items-center">
                        <img
                          src={tipografico1}
                          alt=""
                          className="w-32 h-32 object-contain"
                        />
                        <img
                          src={tipografico2}
                          alt=""
                          className="w-32 h-32 object-contain"
                        />
                        <img
                          src={tipografico3}
                          alt=""
                          className="w-32 h-32 object-contain"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex w-full justify-end gap-3 rounded-md text-black mt-5">
                <Link
                  to="/admin/lista-briefs-diseños-new"
                  className="bg-red-600 px-3 py-2 rounded-md text-white cursor-pointer"
                >
                  Cancelar
                </Link>
                <input
                  type="submit"
                  className="bg-secondary-150 px-3 py-2 text-white rounded-md cursor-pointer"
                  value="Editar"
                />
              </div>
            </form>
          </div>
            )}
      </div>
    </>
  )
}
