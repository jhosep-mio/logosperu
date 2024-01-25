'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { Autoplay } from 'swiper/modules'
import { usePathname } from 'next/navigation'
import { FormularioContacto } from './FormularioContacto'

export const SwiperTestimonios = () => {
  const pathname = usePathname()
  const isCarritoPage = pathname === ('/carrito')
  const pago = pathname === ('/succes_pago')
  return (
    <>
      {!isCarritoPage && (
        <>
          {!pago &&
            <>
              <section className='clientes pb-16'>
                <div className='titulo_clientes'>
                  <h2>CLIENTES SATISFECHOS</h2>
                </div>
                <div className='container max-w-[1450px]'>
                  <div className='col-lg-12'>
                    <div className='col-lg-12'>
                      <div className='descrip_clientes'>
                        <p>QUE DICEN DE NOSOTROS</p>
                        <hr className='hr_first' />
                        <hr className='hr_second' />
                      </div>
                    </div>
                    <div className='col-lg-12'>
                      <div className='box_testimonios'>
                        <div className='cuerpo_testimonio'>
                          <div className='main-testimonios'>
                            <Swiper
                              slidesPerView={2}
                              className='mySwiper swp-testimonios siper_services'
                              modules={[Autoplay]}
                              loop
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
                              <SwiperSlide className='h-fit md:h-[470px] lg:h-[333px]'>
                                <div className='card_testimonio h-full'>
                                  <div className='w-full lg:w-[70%] flex justify-center gap-4 flex-col'>
                                    <div className='card_head_testimonio'>
                                      <h6>ANGEL ZAMBRANO – GERENTE GENERAL</h6>
                                    </div>
                                    <div className='card_body_testimonio'>
                                      <p className='text-justify'>
                                        Mi experiencia en los servicios de LogosPerú
                                        fue muy buena. Debo destacar la rapidez,
                                        iniciativa y compromiso y puntualidad en la
                                        entrega del trabajo
                                      </p>
                                      <p>GRUPO KYRZA</p>
                                    </div>
                                  </div>
                                  <div className='w-full lg:w-[30%] mt-10 lg:mt-0 img_testimonio'>
                                    <div className='card_img_testimonio'>
                                      <div className='container-img'>
                                        <img
                                          src='https://www.logosperu.com/public/img/testimonios/logo_kyrza.png'
                                          alt=''
                                          width='100%'
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </SwiperSlide>

                              <SwiperSlide className='h-fit md:h-[470px] lg:h-[333px]'>
                                <div className='card_testimonio h-full'>
                                  <div className='w-full lg:w-[70%] flex justify-center gap-4 flex-col'>
                                    <div className='card_head_testimonio'>
                                      <h6>RICHARD QUIÑONEZ - GERENTE GENERAL</h6>
                                    </div>
                                    <div className='card_body_testimonio'>
                                      <p className='text-justify'>
                                        Señores de LogosPerú me encuentro muy
                                        satisfecho por el trabajo realizado, el cual
                                        demuestra su gran profesionalismo de cada uno
                                        de sus colaboradores, es la primera vez que
                                        adquiero este servicio y créame que los
                                        recomendaré, estoy muy agradecido por su buen
                                        trabajo en mi proyecto{' '}
                                      </p>
                                      <p>TQ PANDA SAC</p>
                                    </div>
                                  </div>
                                  <div className='w-full lg:w-[30%] mt-10 lg:mt-0 img_testimonio'>
                                    <div className='card_img_testimonio'>
                                      <div className='container-img'>
                                        <img
                                          src='https://www.logosperu.com/public/img/testimonios/logo_kyrza.png'
                                          alt=''
                                          width='100%'
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </SwiperSlide>

                              <SwiperSlide className='h-[333px]'>
                                <div className='card_testimonio h-full'>
                                  <div className='w-[70%] flex justify-center gap-4 flex-col'>
                                    <div className='card_head_testimonio'>
                                      <h6>CESAR SÁNCHEZ - GERENTE GENERAL</h6>
                                    </div>
                                    <div className='card_body_testimonio'>
                                      <p className='text-justify'>
                                        Mi experiencia ha sido satisfactoria, la
                                        atención de la persona que estuvo a cargo del
                                        proyecto fue excelente ya que tuvo una gran
                                        empatía y supo manejar lo que queríamos
                                        comunicar{' '}
                                      </p>
                                      <p>PISCO VICTORIA DE LOS SÁNCHEZ</p>
                                    </div>
                                  </div>
                                  <div className='w-[30%] img_testimonio'>
                                    <div className='card_img_testimonio'>
                                      <div className='container-img' />
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
              <section className='pie_pagina'>
                <div className='py-10  max-w-[1200px] mx-auto overflow-hidden'>
                  <div className='row'>
                    <div className='col-lg-12 ocultar'>
                      <div className='formula_content'>
                        <div className='titulo martin_top'>
                          <h2>CONTACTANOS</h2>
                          <hr className='hr_first' />
                          <hr className='hr_second' />
                        </div>
                        <div className='formulariofooter'>
                          <FormularioContacto />
                        </div>
                      </div>
                    </div>
                    <div className='col-lg-4 h-[70px]'>
                      <div className='info_contact'>
                        <div className='content_icon'>
                          <img
                            loading='lazy'
                            src='https://logosperu.com/public/img/iconos/mail.png'
                            alt=''
                          />
                        </div>
                        <div className='content_info'>
                          <p>
                            <a href='tel:+51987038024'> Ventas: (+51) 987 038 024</a>
                            <br />
                          </p>
                          <span>
                            <a href='mailto:ventas@logosperu.com'>
                              ventas@logosperu.com
                            </a>
                          </span>
                          <br />
                          <span>
                            <a href='mailto:ventascorporativas@logosperu.com'>
                              ventascorporativas@logosperu.com
                            </a>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className='col-lg-4'>
                      <div className='info_contact'>
                        <div className='content_icon'>
                          <img
                            loading='lazy'
                            src='https://logosperu.com/public/img/iconos/telefono.png'
                            alt=''
                          />
                        </div>
                        <div className='content_info'>
                          <p>
                            <a href='tel:51982408652'> Desarrollo: (+51) 982 408 652</a>
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
                    <div className='col-lg-4'>
                      <div className='info_contact'>
                        <div className='content_icon'>
                          <img
                            loading='lazy'
                            src='https://logosperu.com/public/img/iconos/telefono.png'
                            alt=''
                          />
                        </div>
                        <div className='content_info'>
                          <p>
                            <a href='tel:51982408652'> Diseño: (+51) 982 364 064</a>
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
                <div className='end_footer'>
                  <p>
                    © Copyright 2016-2023 - Todos los derechos reservados Design by{' '}
                    <span>Logos Perú </span>- Agencia de Diseño Gráfico & Desarrollo Web{' '}
                  </p>
                </div>
              </section>
            </>}
        </>
      )}
    </>
  )
}
