import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
// @ts-expect-error: Type 'any' has no properties in common with type 'Autoplay'
import { Autoplay } from 'swiper'
import { Rubros } from './Rubros'
import { useFormik } from 'formik'
import { SchemaContacto } from '../../shared/Schemas'
import { type valuesFormularioContacto } from '../../shared/Interfaces'
import { useEffect, useState, useRef } from 'react'
import axios from 'axios'
import { Global } from '../../../helper/Global'
import Swal from 'sweetalert2'
import { Errors } from '../../shared/Errors'
import { Errors2 } from '../../shared/Errors2'
import ReCAPTCHA from 'react-google-recaptcha'
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import { iconowsp } from '../../shared/images'

export const Footer = (): JSX.Element => {
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

        if (respuesta.data.status === 'success') {
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
    <>
      <Rubros />

      <section className="clientes pb-52">
        <div className="titulo_clientes">
          <h2>CLIENTES SATISFECHOS</h2>
        </div>
        <div className="container max-w-[1450px]">
          <div className="col-lg-12">
            <div className="col-lg-12">
              <div className="descrip_clientes">
                <p>QUE DICEN DE NOSOTROS</p>
                <hr className="hr_first" />
                <hr className="hr_second" />
              </div>
            </div>
            <div className="col-lg-12">
              <div className="box_testimonios">
                <div className="cuerpo_testimonio">
                  <div className="main-testimonios">
                    <Swiper
                      slidesPerView={2}
                      className="mySwiper swp-testimonios siper_services"
                      modules={[Autoplay]}
                      loop={true}
                      spaceBetween={20}
                      speed={5000}
                      autoplay={{
                        delay: 1
                      }}
                      breakpoints={{
                        0: {
                          slidesPerView: 1
                        },
                        768: {
                          slidesPerView: 2
                        }
                      }}
                    >
                      <SwiperSlide className="h-fit md:h-[470px] lg:h-[333px]">
                        <div className="card_testimonio h-full">
                          <div className="w-full lg:w-[70%] flex justify-center gap-4 flex-col">
                            <div className="card_head_testimonio">
                              <h6>ANGEL ZAMBRANO – GERENTE GENERAL</h6>
                            </div>
                            <div className="card_body_testimonio">
                              <p className="text-justify">
                                Mi experiencia en los servicios de LogosPerú fue
                                muy buena. Debo destacar la rapidez, iniciativa
                                y compromiso y puntualidad en la entrega del
                                trabajo
                              </p>
                              <p>GRUPO KYRZA</p>
                            </div>
                          </div>
                          <div className="w-full lg:w-[30%] mt-10 lg:mt-0 img_testimonio">
                            <div className="card_img_testimonio">
                              <div className="container-img">
                                <img
                                  src="https://www.logosperu.com/public/img/testimonios/logo_kyrza.png"
                                  alt=""
                                  width="100%"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>

                      <SwiperSlide className="h-fit md:h-[470px] lg:h-[333px]">
                        <div className="card_testimonio h-full">
                          <div className="w-full lg:w-[70%] flex justify-center gap-4 flex-col">
                            <div className="card_head_testimonio">
                              <h6>RICHARD QUIÑONEZ - GERENTE GENERAL</h6>
                            </div>
                            <div className="card_body_testimonio">
                              <p className="text-justify">
                                Señores de LogosPerú me encuentro muy satisfecho
                                por el trabajo realizado, el cual demuestra su
                                gran profesionalismo de cada uno de sus
                                colaboradores, es la primera vez que adquiero
                                este servicio y créame que los recomendaré,
                                estoy muy agradecido por su buen trabajo en mi
                                proyecto{' '}
                              </p>
                              <p>TQ PANDA SAC</p>
                            </div>
                          </div>
                          <div className="w-full lg:w-[30%] mt-10 lg:mt-0 img_testimonio">
                            <div className="card_img_testimonio">
                              <div className="container-img">
                                <img
                                  src="https://www.logosperu.com/public/img/testimonios/logo_kyrza.png"
                                  alt=""
                                  width="100%"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>

                      <SwiperSlide className="h-[333px]">
                        <div className="card_testimonio h-full">
                          <div className="w-[70%] flex justify-center gap-4 flex-col">
                            <div className="card_head_testimonio">
                              <h6>CESAR SÁNCHEZ - GERENTE GENERAL</h6>
                            </div>
                            <div className="card_body_testimonio">
                              <p className="text-justify">
                                Mi experiencia ha sido satisfactoria, la
                                atención de la persona que estuvo a cargo del
                                proyecto fue excelente ya que tuvo una gran
                                empatía y supo manejar lo que queríamos
                                comunicar{' '}
                              </p>
                              <p>PISCO VICTORIA DE LOS SÁNCHEZ</p>
                            </div>
                          </div>
                          <div className="w-[30%] img_testimonio">
                            <div className="card_img_testimonio">
                              <div className="container-img"></div>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    </Swiper>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pie_pagina">
        <div className="container max-w-[1200px]">
          <div className="row">
            <div className="col-lg-12">
              <div className="formula_content">
                <div className="titulo">
                  <h2>CONTACTANOS</h2>
                  <hr className="hr_first" />
                  <hr className="hr_second" />
                </div>
                <div className="formulariofooter">
                  <form className="formulario" onSubmit={handleSubmit}>
                    <span className="respuesta"></span>
                    <div className="row">
                      <div className="col-lg-4">
                        <input
                          type="text"
                          className="for_style relative"
                          placeholder="NOMBRE/EMPRESA"
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
                      <div className="col-lg-4">
                        <input
                          type="text"
                          name="email"
                          value={values.email}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className="for_style relative"
                          placeholder="EMAIL"
                          style={{ textAlign: 'center' }}
                        />
                        <Errors errors={errors.email} touched={touched.email} />
                      </div>
                      <div className="col-lg-4">
                        <input
                          type="text"
                          name="celular"
                          value={values.celular}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className="for_style relative"
                          placeholder="TELÉFONO/CELULAR"
                          style={{ textAlign: 'center' }}
                        />
                        <Errors
                          errors={errors.celular}
                          touched={touched.celular}
                        />
                      </div>
                      <div className="col-lg-12 flex justify-center">
                        <div className="caja col-lg-4">
                          <select
                            className="form-control select_form serviciosListado relative_dd "
                            name="servicios"
                            value={values.servicios}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          >
                            <option value="">¿Elija una opción?</option>
                            <option value="Venta de hosting">
                              Venta de hosting
                            </option>
                            <option value="Desarrollo web">
                              Desarrollo web
                            </option>
                            <option value="Marketing digital">
                              Marketing digital
                            </option>
                            <option value="Audiovisual">Audiovisual</option>
                            <option value="Diseño de logotipos">
                              Diseño de logotipos
                            </option>
                            <option value="Diseño grafico">
                              Identidad Corporativa
                            </option>
                          </select>
                          <Errors
                            errors={errors.servicios}
                            touched={touched.servicios}
                          />
                          <i></i>
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <textarea
                          name="mensaje"
                          value={values.mensaje}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          id=""
                          placeholder="ESCRÍBENOS TU CONSULTA"
                          className="for_style relative"
                          cols={30}
                          rows={10}
                        ></textarea>
                        <Errors2
                          errors={errors.mensaje}
                          touched={touched.mensaje}
                        />
                        <ReCAPTCHA
                          ref={recaptchaRef}
                          sitekey="6LeJacwnAAAAAOqiqM63wWKs_FjxV2tyyxWbFuaO"
                          onChange={handleCaptchaChange}
                        />
                        <div className="contenedor_envio">
                          <div className="form-group">
                            <div className="input-group center-block text-center">
                              <span id=""></span>
                            </div>
                          </div>
                          <input
                            type="submit"
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
            <div className="col-lg-4">
              <div className="info_contact">
                <div className="content_icon">
                  <img
                    loading="lazy"
                    src="https://logosperu.com/public/img/iconos/mail.png"
                    alt=""
                  />
                </div>
                <div className="content_info">
                  <p>
                    <a href="tel:+51987038024"> Ventas: (+51) 987 038 024</a>
                    <br />
                  </p>
                  <span>
                    <a href="mailto:ventas@logosperu.com">
                      ventas@logosperu.com
                    </a>
                  </span>
                  <br />
                  <span>
                    <a href="mailto:ventascorporativas@logosperu.com">
                      ventascorporativas@logosperu.com
                    </a>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="info_contact">
                <div className="content_icon">
                  <img
                    loading="lazy"
                    src="https://logosperu.com/public/img/iconos/telefono.png"
                    alt=""
                  />
                </div>
                <div className="content_info">
                  <p>
                    <a href="tel:51982408652"> Desarrollo: (+51) 982 408 652</a>
                    <br />
                  </p>
                  <span>
                    <a>
                      <strong>Horario de Atención: </strong>
                    </a>
                  </span>
                  <br />
                  <span>
                    <a>
                      <strong>Lun-Vier:</strong> 09:00-18:00{' '}
                      <strong>Sab:</strong> 09:00-14:00
                    </a>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="info_contact">
                <div className="content_icon">
                  <img
                    loading="lazy"
                    src="https://logosperu.com/public/img/iconos/telefono.png"
                    alt=""
                  />
                </div>
                <div className="content_info">
                  <p>
                    <a href="tel:51982408652"> Diseño: (+51) 982 364 064</a>
                    <br />
                  </p>
                  <span>
                    <a>
                      <strong>Horario de Atención:</strong>{' '}
                    </a>
                  </span>
                  <br />
                  <span>
                    <a>
                      <strong>Lun-Vier:</strong> 09:00-18:00{' '}
                      <strong>Sab:</strong> 09:00-14:00
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="end_footer">
          <p>
            © Copyright 2016-2023 - Todos los derechos reservados Design by{' '}
            <span>Logos Perú </span>- Agencia de Diseño Gráfico & Desarrollo Web{' '}
          </p>
        </div>
      </section>

      <FloatingWhatsApp
            phoneNumber="+51987038024"
            accountName="Logos Peru"
            statusMessage="En linea"
            placeholder="Envianos un mensaje"
            chatMessage ="Bienvenido a Logos Perú! 🤝, ¿Por cual de nuestros servicios esta interesado?"
            avatar={iconowsp}
            allowEsc
            allowClickAway
            notification
            notificationSound />
    </>
  )
}
