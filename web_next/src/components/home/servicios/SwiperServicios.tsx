'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { Navigation } from 'swiper/modules'
import Link from 'next/link'
import 'swiper/css/navigation'
export const SwiperServicios = () => {
  return (
    <Swiper
      slidesPerView={3}
      navigation
      className='mySwiper servicios siper_services px-0 lg:px-5'
      loop
      modules={[Navigation]}
      breakpoints={{
        0: {
          slidesPerView: 1
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 40
        },
        1200: {
          slidesPerView: 3,
          spaceBetween: 0
        }
      }}
    >
      <SwiperSlide>
        <div className='item'>
          <div className='serv'>
            <Link href='/diseno_logotipo'>
              <div className='card'>
                <div className='content'>
                  <span />
                  <div className='back'>
                    <div className='back-content'>
                      <img
                        src='/servicios/logotipo.png'
                        alt='Nombres para Restaurantes Peruanos - logos de constructoras - logo de empresas constructoras - diseño de logotipos en lima - logos de empresas - logos de restaurantes'
                      />
                      <strong>Diseño de Logotipo</strong>
                    </div>
                  </div>

                  <div className='front'>
                    <div className='front-content'>
                      <small className='badge'>
                        <img
                          src='/logos/logos-peru.svg'
                          alt='Nombres para Restaurantes Peruanos - logos de constructoras - logo de empresas constructoras - diseño de logotipos en lima - logos de empresas - logos de restaurantes'
                          width='30px'
                        />
                      </small>
                      <div className='description'>
                        <div className='title'>
                          <p className='title'>
                            <strong>Diseño de Logotipo</strong>
                          </p>

                          <img
                            src='/servicios/logotipo.png'
                            width='80'
                            alt='Nombres para Restaurantes Peruanos - logos de constructoras - logo de empresas constructoras - diseño de logotipos en lima - logos de empresas - logos de restaurantes'
                          />
                        </div>
                        <p className='card-footer2'>
                          Creamos <strong>diseños de logotipos </strong>{' '}
                          creativos y profesionales. ¿Tienes una
                          <strong> idea de negocio </strong> y aún no tienes un
                          logotipo?
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='item'>
          <div className='serv'>
            <Link href='/diseno_web'>
              <div className='card'>
                <div className='content'>
                  <span />
                  <div className='back'>
                    <div className='back-content'>
                      <img
                        src='/servicios/web.png'
                        width='60'
                        alt='Nombres para Restaurantes Peruanos - logos de constructoras - logo de empresas constructoras - diseño de logotipos en lima - logos de empresas - logos de restaurantes'
                      />
                      <strong>Diseño de Pag. web</strong>
                    </div>
                  </div>

                  <div className='front'>
                    <div className='front-content'>
                      <small className='badge'>
                        <img
                          src='/logos/logos-peru.svg'
                          alt='Nombres para Restaurantes Peruanos - logos de constructoras - logo de empresas constructoras - diseño de logotipos en lima - logos de empresas - logos de restaurantes'
                          width='30px'
                        />
                      </small>
                      <div className='description'>
                        <div className='title'>
                          <p className='title'>
                            <strong>Diseño de Pag. web</strong>
                          </p>

                          <img
                            src='/servicios/web.png'
                            width='80'
                            alt='Nombres para Restaurantes Peruanos - logos de constructoras - logo de empresas constructoras - diseño de logotipos en lima - logos de empresas - logos de restaurantes'
                          />
                        </div>
                        <p className='card-footer2'>
                          Te ofrecemos 3<strong> tipos de páginas web</strong> ,
                          adaptables a cualquier dispositivo y preparadas para
                          el <strong> posicionamiento web en google</strong>.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='item'>
          <div className='serv'>
            <Link href='/venta_hosting'>
              <div className='card'>
                <div className='content'>
                  <span />
                  <div className='back'>
                    <div className='back-content'>
                      <img
                        src='/servicios/hosting.png'
                        width='60'
                        alt='Nombres para Restaurantes Peruanos - logos de constructoras - logo de empresas constructoras - diseño de logotipos en lima - logos de empresas - logos de restaurantes'
                      />
                      <strong>Compra de Hosting</strong>
                    </div>
                  </div>

                  <div className='front'>
                    <div className='front-content'>
                      <small className='badge'>
                        <img
                          src='/logos/logos-peru.svg'
                          alt='Nombres para Restaurantes Peruanos - logos de constructoras - logo de empresas constructoras - diseño de logotipos en lima - logos de empresas - logos de restaurantes'
                          width='30px'
                        />
                      </small>
                      <div className='description'>
                        <div className='title'>
                          <p className='title'>
                            <strong>Compra de Hosting</strong>
                          </p>

                          <img
                            src='/servicios/hosting.png'
                            width='80'
                            alt='Nombres para Restaurantes Peruanos - logos de constructoras - logo de empresas constructoras - diseño de logotipos en lima - logos de empresas - logos de restaurantes'
                          />
                        </div>
                        <p className='card-footer2'>
                          Ofrecemos{' '}
                          <strong>
                            Alojamiento Web, Dominios, Correos Coporativos
                          </strong>
                          . Contamos con planes desde 1 GB e Ilimitados.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='item'>
          <div className='serv'>
            <Link href='/audiovisual'>
              <div className='card'>
                <div className='content'>
                  <span />
                  <div className='back'>
                    <div className='back-content'>
                      <img
                        src='/servicios/audiovisual.png'
                        width='60'
                        alt='Nombres para Restaurantes Peruanos - logos de constructoras - logo de empresas constructoras - diseño de logotipos en lima - logos de empresas - logos de restaurantes'
                      />
                      <strong>Producción Audiovisual</strong>
                    </div>
                  </div>

                  <div className='front'>
                    <div className='front-content'>
                      <small className='badge'>
                        <img
                          src='/logos/logos-peru.svg'
                          alt='Nombres para Restaurantes Peruanos - logos de constructoras - logo de empresas constructoras - diseño de logotipos en lima - logos de empresas - logos de restaurantes'
                          width='30px'
                        />
                      </small>
                      <div className='description'>
                        <div className='title'>
                          <p className='title'>
                            <strong>Producción Audiovisual</strong>
                          </p>

                          <img
                            src='/servicios/audiovisual.png'
                            width='80'
                            alt='Nombres para Restaurantes Peruanos - logos de constructoras - logo de empresas constructoras - diseño de logotipos en lima - logos de empresas - logos de restaurantes'
                          />
                        </div>
                        <p className='card-footer2'>
                          <strong>
                            Videos Corporativos, Animación Promocional, Edición,
                            Sesión Fotográfica y Retoque
                          </strong>{' '}
                          para diversas plataformas digitales.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='item'>
          <div className='serv'>
            <Link href='/diseno_flyer'>
              <div className='card'>
                <div className='content'>
                  <span />
                  <div className='back'>
                    <div className='back-content'>
                      <img
                        src='/servicios/flyersi.png'
                        width='60'
                        alt='Nombres para Restaurantes Peruanos - logos de constructoras - logo de empresas constructoras - diseño de logotipos en lima - logos de empresas - logos de restaurantes'
                      />
                      <strong>Diseño de Flyer</strong>
                    </div>
                  </div>

                  <div className='front'>
                    <div className='front-content'>
                      <small className='badge'>
                        <img
                          src='/logos/logos-peru.svg'
                          alt='Nombres para Restaurantes Peruanos - logos de constructoras - logo de empresas constructoras - diseño de logotipos en lima - logos de empresas - logos de restaurantes'
                          width='30px'
                        />
                      </small>
                      <div className='description'>
                        <div className='title'>
                          <p className='title'>
                            <strong>Diseño de Flyer</strong>
                          </p>

                          <img
                            src='/servicios/flyersi.png'
                            width='80'
                            alt='Nombres para Restaurantes Peruanos - logos de constructoras - logo de empresas constructoras - diseño de logotipos en lima - logos de empresas - logos de restaurantes'
                          />
                        </div>
                        <p className='card-footer2'>
                          Realizamos{' '}
                          <strong>diseño de flyer o folleto innovador</strong>,
                          profesional y llamativo, personalizado. Tendrás
                          disponible un diseñador Compruébalo.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='item'>
          <div className='serv'>
            <Link href='/identidad_corporativa'>
              <div className='card'>
                <div className='content'>
                  <span />
                  <div className='back'>
                    <div className='back-content'>
                      <img
                        src='/servicios/identidad.png'
                        width='60'
                        alt='Nombres para Restaurantes Peruanos - logos de constructoras - logo de empresas constructoras - diseño de logotipos en lima - logos de empresas - logos de restaurantes'
                      />
                      <strong>Diseño de Identidad Corporativa</strong>
                    </div>
                  </div>

                  <div className='front'>
                    <div className='front-content'>
                      <small className='badge'>
                        <img
                          src='/logos/logos-peru.svg'
                          alt='Nombres para Restaurantes Peruanos - logos de constructoras - logo de empresas constructoras - diseño de logotipos en lima - logos de empresas - logos de restaurantes'
                          width='30px'
                        />
                      </small>
                      <div className='description'>
                        <div className='title'>
                          <p className='title'>
                            <strong>Diseño de Identidad Corporativa</strong>
                          </p>

                          <img
                            src='/servicios/identidad.png'
                            width='80'
                            alt='Nombres para Restaurantes Peruanos - logos de constructoras - logo de empresas constructoras - diseño de logotipos en lima - logos de empresas - logos de restaurantes'
                          />
                        </div>
                        <p className='card-footer2'>
                          Incluye elementos gráficos (
                          <strong>
                            logotipo, tarjetas de presentación, membretes,
                            folletos y otras
                          </strong>{' '}
                          que comparten el mismo estilo y los colores de la
                          marca).
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='item'>
          <div className='serv'>
            <Link href='/diseno_personaje'>
              <div className='card'>
                <div className='content'>
                  <span />
                  <div className='back'>
                    <div className='back-content'>
                      <img
                        src='/servicios/personaje.png'
                        width='60'
                        alt='Nombres para Restaurantes Peruanos - logos de constructoras - logo de empresas constructoras - diseño de logotipos en lima - logos de empresas - logos de restaurantes'
                      />
                      <strong>Diseño de Personajes</strong>
                    </div>
                  </div>

                  <div className='front'>
                    <div className='front-content'>
                      <small className='badge'>
                        <img
                          src='/logos/logos-peru.svg'
                          alt='Nombres para Restaurantes Peruanos - logos de constructoras - logo de empresas constructoras - diseño de logotipos en lima - logos de empresas - logos de restaurantes'
                          width='30px'
                        />
                      </small>
                      <div className='description'>
                        <div className='title'>
                          <p className='title'>
                            <strong>Diseño de Personajes Corporativa</strong>
                          </p>

                          <img
                            src='/servicios/personaje.png'
                            width='80'
                            alt='Nombres para Restaurantes Peruanos - logos de constructoras - logo de empresas constructoras - diseño de logotipos en lima - logos de empresas - logos de restaurantes'
                          />
                        </div>
                        <p className='card-footer2'>
                          Realizamos el diseño de tu
                          <strong> mascota o personaje digital </strong> ya sea
                          para tu negocio o publicidad, el servicio cuenta con{' '}
                          <strong>
                            diseñadores e ilustradores profesionales.
                          </strong>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  )
}
