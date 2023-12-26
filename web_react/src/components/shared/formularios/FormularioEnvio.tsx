import { useFormik } from 'formik'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'
import ReCAPTCHA from 'react-google-recaptcha'
import { type valuesFormularioInternas } from '../Interfaces'
import { Global } from '../../../helper/Global'
import { SchemaFormularioEnvio } from '../Schemas'
import { Errors } from '../Errors'
import { useNavigate } from 'react-router-dom'

export const FormularioEnvio = ({
  redireccion,
  titulo,
  name1,
  name2,
  seleccionPreguntas,
  seleccion
}: {
  redireccion: string
  titulo: string
  name1: string
  name2: string
  seleccionPreguntas: string
  seleccion: string
}): JSX.Element => {
  const [captchaValue, setCaptchaValue] = useState<string | null>(null)
  const handleCaptchaChange = (value: string | null): void => {
    setCaptchaValue(value)
  }
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const enviarCorreo = async (
    values: valuesFormularioInternas
  ): Promise<void> => {
    if (captchaValue) {
      setLoading(true)
      const token = localStorage.getItem('token')
      const data = new FormData()
      data.append('titulo', titulo)
      data.append('nombres', values.nombres)
      data.append('empresa', values.nombres)
      data.append('email', values.email)
      data.append('celular', values.celular)
      data.append('name1', name1)
      data.append('name2', name2)
      data.append('plan', seleccionPreguntas)
      data.append('tipo', seleccion)
      try {
        const respuesta = await axios.post(
          `${Global.url}/enviarFormularioInternas`,
          data,
          {
            headers: {
              Authorization: `Bearer ${
                token !== null && token !== '' ? token : ''
              }`
            }
          }
        )

        if (respuesta.data.status === 'success') {
          Swal.fire(
            'Correo enviado',
            'A continuacion se le mostrara algunos de los trabajos realizados',
            'success'
          )
          navigate(redireccion)
        } else {
          Swal.fire('Error al enviar el correo', '', 'error')
        }
      } catch (error) {
        console.log(error)
        Swal.fire('Error al enviar el correo', '', 'error')
      }
      setLoading(false)
    } else {
      Swal.fire('Completa el captcha', '', 'warning')
    }
  }

  const {
    handleSubmit,
    handleChange,
    errors,
    values,
    touched,
    handleBlur,
    isSubmitting
  } = useFormik({
    initialValues: {
      nombres: '',
      empresa: '',
      celular: '',
      email: ''
    },
    validationSchema: SchemaFormularioEnvio,
    onSubmit: enviarCorreo
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
    <>
      <section className="pie_pagina">
        <div className="question_title">
          <h3 className="mb-10">DATOS DE CONTACTO</h3>
          <p>
            ¡Terminamos! ahora envía tus datos de contacto para comunicarnos
            contigo
          </p>
        </div>
        <div className="container max-w-[600px]">
          <div className="row">
            <div className="col-lg-12">
              <div className="">
                <div className="bg-white p-20 rounded-lg">
                  <form className="formulario">
                    <span className="respuesta"></span>
                    <div className="row">
                      <div className="col-lg-12">
                        <input
                          type="text"
                          className="for_style relative"
                          placeholder="Nombres y Apellidos"
                          style={{ textAlign: 'center' }}
                          name="nombres"
                          value={values.nombres}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        <Errors
                          errors={errors.nombres}
                          touched={touched.nombres}
                        />
                      </div>
                      <div className="col-lg-12">
                        <input
                          type="text"
                          className="for_style relative"
                          placeholder="Empresa"
                          style={{ textAlign: 'center' }}
                          name="empresa"
                          value={values.empresa}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        <Errors
                          errors={errors.empresa}
                          touched={touched.empresa}
                        />
                      </div>
                      <div className="col-lg-12">
                        <input
                          type="text"
                          name="email"
                          value={values.email}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className="for_style relative"
                          placeholder="Email"
                          style={{ textAlign: 'center' }}
                        />
                        <Errors errors={errors.email} touched={touched.email} />
                      </div>
                      <div className="col-lg-12">
                        <input
                          type="text"
                          name="celular"
                          value={values.celular}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className="for_style relative"
                          placeholder="Teléfono/Celular"
                          style={{ textAlign: 'center' }}
                        />
                        <Errors
                          errors={errors.celular}
                          touched={touched.celular}
                        />
                      </div>
                      <div className="col-lg-12 flex justify-center flex-col">
                        <ReCAPTCHA
                          sitekey="6LeJacwnAAAAAOqiqM63wWKs_FjxV2tyyxWbFuaO"
                          onChange={handleCaptchaChange}
                          className="mx-auto"
                        />
                        <div className="contenedor_envio">
                          <div className="form-group">
                            <div className="input-group center-block text-center">
                              <span id=""></span>
                            </div>
                          </div>
                          <input
                            type="submit"
                            onClick={(e) => {
                              e.preventDefault()
                              handleSubmit()
                            }}
                            value="ENVIAR"
                            className="boton_send"
                          />
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {loading && (
        <section className="h-screen w-screen fixed inset-0 bg-[#00000073] z-[99999] flex items-center justify-center flex-col gap-5">
          <div className='h-32'>
            <div className="loader" id="loader"></div>
          </div>
          <p className="text-4xl text-white font-bold">Enviando... , Por favor espere</p>
        </section>
      )}
    </>
  )
}
