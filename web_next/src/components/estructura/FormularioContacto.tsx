'use client'
import { useFormik } from 'formik'
import React, { useEffect, useRef, useState } from 'react'
import { SchemaContacto } from '../shared/interfaces/Schemas'
import { valuesFormularioContacto } from '../shared/interfaces/interfaces'
import ReCAPTCHA from 'react-google-recaptcha'
import Swal from 'sweetalert2'
import axios from 'axios'
import { Global } from '../shared/Helper/global'
import { Errors } from '../shared/functions/Errors'
import { Errors2 } from '../shared/functions/Errors2'

export const FormularioContacto = () => {
  const [captchaValue, setCaptchaValue] = useState<string | null>(null)
  // @ts-expect-error: Type 'any' has no properties in common with type 'Autoplay'
  const recaptchaRef = useRef<ReCAPTCHA | null>(null)
  const handleCaptchaChange = (value: string | null): void => {
    setCaptchaValue(value)
  }

  const enviarCorreo = async (
    values: valuesFormularioContacto
  ): Promise<void> => {
    if (captchaValue) {
      const token = localStorage.getItem('token')
      const data = new FormData()
      data.append('nombres', values.nombres)
      data.append('email', values.email)
      data.append('celular', values.celular)
      data.append('servicios', values.servicios)
      data.append('mensaje', values.mensaje)
      Swal.fire('Correo enviado', '', 'success')
      resetForm()
      if (recaptchaRef.current) {
        recaptchaRef.current.reset()
      }
      setCaptchaValue(null)
      try {
        const respuesta = await axios.post(
              `${Global.url}/correoContacto`,
              data,
              {
                headers: {
                  Authorization: `Bearer ${
                    token !== null && token !== '' ? token : ''
                  }`
                }
              }
        )

        if (respuesta.data.status == 'success') {
          console.log('Correo enviado')
        } else {
          Swal.fire('Error al enviar el correo', '', 'error')
        }
      } catch (error) {
        Swal.fire('Error al enviar el correo', '', 'error')
      }
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
    resetForm,
    handleBlur,
    isSubmitting
  } = useFormik({
    initialValues: {
      nombres: '',
      email: '',
      celular: '',
      servicios: '',
      mensaje: ''
    },
    validationSchema: SchemaContacto,
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
    <form className='formulario' onSubmit={handleSubmit}>
      <span className='respuesta' />
      <div className='row'>
        <div className='col-lg-4'>
          <input
            type='text'
            className='for_style relative'
            placeholder='NOMBRE/EMPRESA'
            style={{ textAlign: 'center' }}
            name='nombres'
            value={values.nombres}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <Errors errors={errors.nombres} touched={touched.nombres} />
        </div>
        <div className='col-lg-4'>
          <input
            type='text'
            name='email'
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            className='for_style relative'
            placeholder='EMAIL'
            style={{ textAlign: 'center' }}
          />
          <Errors errors={errors.email} touched={touched.email} />
        </div>
        <div className='col-lg-4'>
          <input
            type='text'
            name='celular'
            value={values.celular}
            onChange={handleChange}
            onBlur={handleBlur}
            className='for_style relative'
            placeholder='TELÉFONO/CELULAR'
            style={{ textAlign: 'center' }}
          />
          <Errors errors={errors.celular} touched={touched.celular} />
        </div>
        <div className='col-lg-12 flex justify-center'>
          <div className='caja col-lg-4'>
            <select
              className='form-control select_form serviciosListado relative_dd '
              name='servicios'
              value={values.servicios}
              onChange={handleChange}
              onBlur={handleBlur}
            >
              <option value=''>¿Elija una opción?</option>
              <option value='Diseño de Logotipo'>Diseño de Logotipo</option>
              <option value='Desarrollo web'>Desarrollo web</option>
              <option value='Comunity Manager'>Comunity Manager</option>
              <option value='Diseño de Brochure'>Diseño de Brochure</option>
              <option value='Diseño de personaje'>Diseño de personaje</option>
              <option value='Alta de google'>Alta de google</option>
              <option value='Hosting y dominio'>Hosting y dominio</option>
              <option value='Identidad Corporativa'>Identidad Corporativa</option>
              <option value='Animación de logotipo'>Animación de logotipo</option>

              <option value='Producción Audiovisual'>Producción Audiovisual</option>
              <option value='Producción Fotográfica'>Producción Fotográfica</option>
              <option value='Posicionamiento SEO'>Posicionamiento SEO</option>

            </select>
            <Errors errors={errors.servicios} touched={touched.servicios} />
            <i />
          </div>
        </div>
        <div className='col-lg-12'>
          <textarea
            name='mensaje'
            value={values.mensaje}
            onChange={handleChange}
            onBlur={handleBlur}
            id=''
            placeholder='ESCRÍBENOS TU CONSULTA'
            className='for_style relative'
            cols={30}
            rows={10}
          />
          <Errors2 errors={errors.mensaje} touched={touched.mensaje} />
          <ReCAPTCHA
            ref={recaptchaRef}
            sitekey='6LeJacwnAAAAAOqiqM63wWKs_FjxV2tyyxWbFuaO'
            onChange={handleCaptchaChange}
          />
          <div className='contenedor_envio'>
            <div className='form-group'>
              <div className='input-group center-block text-center'>
                <span id='' />
              </div>
            </div>
            <input type='submit' value='ENVIAR' className='boton_send' />
          </div>
        </div>
      </div>
    </form>
  )
}
