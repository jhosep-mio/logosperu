import {
  audiovisual,
  flyersi,
  hosting,
  identidad,
  lampara,
  logo_svg,
  logotipo,
  personaje,
  web
} from '../shared/images'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
// @ts-expect-error: Type 'any' has no properties in common with type 'Autoplay'
import { Autoplay } from 'swiper'
import { useEffect, useState } from 'react'
import {
  type ValuesItemsPortafolio,
  type ValuesCategoriasPortafolio
} from '../shared/Interfaces'
import { getDataCategoriasToPortafolio, getItems } from '../shared/FechData'
import { Link } from 'react-router-dom'
import { capitalizeFirstLetter } from '../shared/functions/Minusculas'
import { Global } from '../../helper/Global'
import { Slider } from './Slider'

export const Home = (): JSX.Element => {
  const [categorias, setCategorias] = useState<ValuesCategoriasPortafolio[]>(
    []
  )
  const [logos, setLogos] = useState<ValuesItemsPortafolio[]>([])
  const [webs, setWebs] = useState<ValuesItemsPortafolio[]>([])
  const [loading, setLoading] = useState(true)
  const [, setTotalRegistros] = useState(0)

  useEffect(() => {
    window.scrollTo(0, 0)
    Promise.all([
      getDataCategoriasToPortafolio(
        'getCategoriasToPortafolio',
        setCategorias,
        setTotalRegistros
      ),
      getItems('indexWhereCategoriaAleatorio/1', setLogos),
      getItems('indexWhereCategoriaAleatorio/2', setWebs)
    ]).then(() => {
      setLoading(false)
    })
  }, [])
  return (
    <>
      <Slider />
      {/* <div className="todo_contenido_headre pt-12 lg:pt-0">
        <section className="imagen_principal_home2">
          <div className="contain_principal2">
            <div className="text_left">
              <Swiper
                className="mySwiper mySwiper99 select-none"
                modules={[Autoplay]}
                loop={true}
                allowTouchMove={false}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: false
                }}
              >
                <SwiperSlide>
                  <div className="content_text_left grafico_left">
                    <h2 className="">AGENCIA!</h2>
                    <h1 className="">
                      <p className="escondido_h1">
                        AGENCIA DE DISEÑOS DE LOGOS, LOGOTIPOS Y{' '}
                      </p>
                      DISEÑO GRÁFICO
                    </h1>
                    <div className="textauto">
                      <TypeIt
                        className="text-[#1f1f1f] font-medium text-justify"
                        options={{
                          strings: [
                            'Diseño de Logotipos',
                            'Diseño de Flyers',
                            'Identidad Corporativa'
                          ],
                          speed: 100,
                          breakLines: false,
                          loop: true
                        }}
                      />
                    </div>
                    <div className="content_buttons_swiper">
                      <button className="buton_bruchure">
                        Brochure <i className="fa-solid fa-arrow-right"></i>
                      </button>
                      <button className="buton_bruchure2">
                        Portafolio <i className="fa-solid fa-arrow-right"></i>
                      </button>
                    </div>
                  </div>
                  <div className="conetent_img_rigth">
                    <img
                      src={slider1}
                      alt="Logos Perú | Agencia de Diseño Grafico"
                      className="img_ispla_none_Active select-none"
                    />
                    <img
                      src={slider1_movil}
                      alt="Logos Perú | Agencia de Diseño Grafico"
                      className="img_ispla_none select-none"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide className="desarolloweb_cn">
                  <div className="content_text_left">
                    <h2>PÁGINAS WEB</h2>
                    <h3 className="md:h-fit">
                      QUE
                      <TypeIt
                        className="text-secondary font-bold ml-3 italic"
                        options={{
                          strings: ['VENDEN', 'INSPIRAN', 'CAUTIVAN'],
                          speed: 200,
                          breakLines: false,
                          loop: true
                        }}
                      />
                    </h3>
                    <div className="textauto">
                      <p>
                        Diseñamos tu sitio web para destacar entre la multitud y
                        atraer mas clientes
                      </p>
                    </div>
                    <div className="content_buttons_swiper">
                      <button className="buton_bruchure">
                        Brochure <i className="fa-solid fa-arrow-right"></i>
                      </button>
                      <button className="buton_bruchure2">
                        Portafolio <i className="fa-solid fa-arrow-right"></i>
                      </button>
                    </div>
                  </div>
                  <div className="conetent_img_rigth">
                    <img
                      src={slider2}
                      className="select-none"
                      alt="Nombres para Restaurantes Peruanos - logos de constructoras - logo de empresas constructoras - diseño de logotipos en lima - logos de empresas - logos de restaurantes"
                    />
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
          <div className="circulo_swiper"></div>
        </section>
      </div> */}

      <section className="nosotros">
        <div className="container w-full lg:w-[1140px]">
          <div className="row">
            <div className="col-sm-6 col-lg-7 resp">
              <div
                className="img_nosotros"
                data-aos="fade-up-right"
                data-aos-delay="100"
              >
                <img
                  src={lampara}
                  alt="Logos Perú - Agencia de Marketing Digital"
                />
              </div>
            </div>
            <div className="col-sm-6 col-lg-5">
              <div className="boss_content">
                <div
                  className="contenedor_text"
                  data-aos="fade-up-left"
                  data-aos-delay="300"
                >
                  <div className="title_nosotros mb-7">
                    <p>Somos</p>
                    <h2>Logos Perú</h2>
                  </div>
                  <div className="texto_nosotros mb-7">
                    <p className="text-2xl">
                      En{' '}
                      <b>
                        Logos Perú Agencia de Diseño Gráfico y Desarrollo Web
                      </b>{' '}
                      proporcionamos <b>soluciones digitales</b> que impulsan al
                      empresario en su incursión al mundo del internet,
                      desarrollando y creando <b>servicios de alta calidad</b>{' '}
                      como{' '}
                      <b>
                        diseño de logotipos, diseño web, identidad corporativa,
                        web hosting, audiovisual
                      </b>{' '}
                      que suman valor y generan la{' '}
                      <b>construcción de una marca.</b>
                    </p>
                  </div>
                  <div className="redes_nosotros">
                    <h2>Socializa:</h2>
                    <ul>
                      <li
                        data-aos="fade-up"
                        data-aos-duration="100"
                        data-aos-delay="350"
                      >
                        <a
                          href="https://www.facebook.com/DLogosPeru/"
                          target="_blank"
                          aria-label="Visita nuestra página de Facebook"
                          rel="noreferrer"
                        >
                          <i className="fa-brands fa-facebook"></i>
                        </a>
                      </li>
                      <li
                        data-aos="fade-up"
                        data-aos-duration="100"
                        data-aos-delay="400"
                      >
                        <a
                          target="_blank"
                          href="https://www.instagram.com/dlogosperu/"
                          aria-label="Visita nuestra página de Instagram"
                          rel="noreferrer"
                        >
                          <i className="fa-brands fa-instagram"></i>
                        </a>
                      </li>
                      <li
                        data-aos="fade-up"
                        data-aos-duration="100"
                        data-aos-delay="450"
                      >
                        <a
                          target="_blank"
                          href="https://twitter.com/DLogosPeru"
                          aria-label="Visita nuestra página de Twitter"
                          rel="noreferrer"
                        >
                          <i className="fa-brands fa-twitter"></i>
                        </a>
                      </li>
                      <li
                        data-aos="fade-up"
                        data-aos-duration="100"
                        data-aos-delay="500"
                      >
                        <a
                          target="_blank"
                          href="https://wa.me//+51987038024"
                          aria-label="Escríbenos por WhatsApp"
                          rel="noreferrer"
                        >
                          <i className="fa-brands fa-whatsapp"></i>
                        </a>
                      </li>
                      <li
                        data-aos="fade-up"
                        data-aos-duration="100"
                        data-aos-delay="550"
                      >
                        <a
                          target="_blank"
                          href="https://www.youtube.com/channel/UCPXxUSJAk5VaWGEaRmgFeew"
                          aria-label="Visita nuestro canal de Youtube"
                          rel="noreferrer"
                        >
                          <i className="fa-brands fa-youtube"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="portafolios max-w-[1450px] mx-auto">
        <div className="titulo_portafolio">
          <h2>PORTAFOLIO</h2>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="descrip_portafolio">
                <p>TRABAJOS DE LA AGENCIA DIGITAL</p>
                <hr className="hr_first" />
                <hr className="hr_second" />
              </div>
            </div>
            <div className="col-lg-12">
              <div className="menu_portadolios">
                <ul className="flex items-center flex-wrap justify-center gap-x-3 font-family-1">
                  {categorias.map((cat, index) => (
                    <li key={cat.id} className="text-[1.75rem] group">
                      <Link
                        to={`/portafolio/${cat.url}`}
                        className="text-[1.75rem text-black group-hover:text-[#696EB9] group-hover:font-extrabold transition-colors"
                      >
                        {capitalizeFirstLetter(cat.titulo)}
                      </Link>
                      {index !== categorias.length - 1 && (
                        <span className="ml-3">|</span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {!loading
          ? <>
            <Swiper
              className="mySwiper portafolio siper_services px-0 lg:px-5"
              loop={true}
              speed={2000}
              autoplay={{
                delay: 1,
                reverseDirection: true
              }}
              breakpoints={{
                0: {
                  slidesPerView: 1
                },
                350: {
                  slidesPerView: 2
                },
                576: {
                  slidesPerView: 3
                },
                768: {
                  slidesPerView: 4
                },
                992: {
                  slidesPerView: 5
                },
                1200: {
                  slidesPerView: 6
                }
              }}
              modules={[Autoplay]}
            >
              {logos.map((logo) => (
                <SwiperSlide key={logo.id}>
                  <div className="item">
                    <div className="porta_item">
                      <img
                        src={`${Global.urlImages}/itemsportafolios/${
                          // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
                          JSON.parse(logo.array)[0].imagen1.archivoName
                        }`}
                        alt={`${logo.titulo} | Logos Perú`}
                      />
                      <div className="caption_portafolio">
                        <div>
                          <div className="caption_foot">
                            <a
                              href="/brochure"
                              aria-label="Visita nuestro Brochure"
                              data-hover="el brochure"
                              className="btn-visitar"
                            >
                              <span className="text">Visita</span>
                              <span className="icons fa fa-long-arrow-right"></span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <Swiper
              slidesPerView={7}
              className="mySwiper portafolio siper_services px-0 lg:px-5"
              modules={[Autoplay]}
              loop={true}
              speed={2000}
              autoplay={{
                delay: 1,
                reverseDirection: false
              }}
              breakpoints={{
                0: {
                  slidesPerView: 1
                },
                350: {
                  slidesPerView: 2
                },
                576: {
                  slidesPerView: 3
                },
                768: {
                  slidesPerView: 4
                },
                992: {
                  slidesPerView: 5
                },
                1200: {
                  slidesPerView: 6
                }
              }}
            >
              {webs.map((logo) => (
                <SwiperSlide key={logo.id}>
                  <div className="item">
                    <div className="porta_item">
                      <img
                        src={`${Global.urlImages}/itemsportafolios/${
                          // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
                          JSON.parse(logo.array)[0].imagen1.archivoName
                        }`}
                        alt={`${logo.titulo} | Logos Perú`}
                      />
                      <div className="caption_portafolio">
                        <div>
                          <div className="caption_foot">
                            <a
                              href="/brochure"
                              aria-label="Visita nuestro Brochure"
                              data-hover="el brochure"
                              className="btn-visitar"
                            >
                              <span className="text">Visita</span>
                              <span className="icons fa fa-long-arrow-right"></span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </>
          : (
              ''
            )}

        <div className="boton_portafolio bbbmmm">
          <a href="/portafolio">Ver Portafolio</a>
        </div>
      </section>

      <section className="servicio">
        <div className="titulo_servicios">
          <h2>SERVICIOS</h2>
        </div>
        <div className="container max-w-[1450px]">
          <div className="row">
            <div className="col-lg-12">
              <div className="descrip_services">
                <p>NUESTROS MEJORES SERVICIOS</p>
                <hr className="hr_first" />
                <hr className="hr_second" />
              </div>
            </div>
            <div className="col-lg-12">
              <Swiper
                slidesPerView={3}
                className="mySwiper servicios siper_services px-0 lg:px-5"
                modules={[Autoplay]}
                speed={4000}
                loop={true}
                autoplay={{
                  delay: 1,
                  reverseDirection: true
                }}
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
                    spaceBetween: 50
                  }
                }}
              >
                <SwiperSlide>
                  <div className="item">
                    <div className="serv">
                      <Link to="/diseno-logotipo">
                        <div className="card">
                          <div className="content">
                            <span></span>
                            <div className="back">
                              <div className="back-content">
                                <img
                                  src={logotipo}
                                  width="60"
                                  alt="Nombres para Restaurantes Peruanos - logos de constructoras - logo de empresas constructoras - diseño de logotipos en lima - logos de empresas - logos de restaurantes"
                                />
                                <strong>Diseño de Logotipo</strong>
                              </div>
                            </div>

                            <div className="front">
                              <div className="front-content">
                                <small className="badge">
                                  <img
                                    src={logo_svg}
                                    alt="Nombres para Restaurantes Peruanos - logos de constructoras - logo de empresas constructoras - diseño de logotipos en lima - logos de empresas - logos de restaurantes"
                                    width="30px"
                                  />
                                </small>
                                <div className="description">
                                  <div className="title">
                                    <p className="title">
                                      <strong>Diseño de Logotipo</strong>
                                    </p>

                                    <img
                                      src={logotipo}
                                      width="80"
                                      alt="Nombres para Restaurantes Peruanos - logos de constructoras - logo de empresas constructoras - diseño de logotipos en lima - logos de empresas - logos de restaurantes"
                                    />
                                  </div>
                                  <p className="card-footer2">
                                    Creamos{' '}
                                    <strong>diseños de logotipos </strong>{' '}
                                    creativos y profesionales. ¿Tienes una
                                    <strong> idea de negocio </strong> y aún no
                                    tienes un logotipo?
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
                  <div className="item">
                    <div className="serv">
                      <Link to="/diseno-web">
                        <div className="card">
                          <div className="content">
                            <span></span>
                            <div className="back">
                              <div className="back-content">
                                <img
                                  src={web}
                                  width="60"
                                  alt="Nombres para Restaurantes Peruanos - logos de constructoras - logo de empresas constructoras - diseño de logotipos en lima - logos de empresas - logos de restaurantes"
                                />
                                <strong>Diseño de Pag. web</strong>
                              </div>
                            </div>

                            <div className="front">
                              <div className="front-content">
                                <small className="badge">
                                  <img
                                    src={logo_svg}
                                    alt="Nombres para Restaurantes Peruanos - logos de constructoras - logo de empresas constructoras - diseño de logotipos en lima - logos de empresas - logos de restaurantes"
                                    width="30px"
                                  />
                                </small>
                                <div className="description">
                                  <div className="title">
                                    <p className="title">
                                      <strong>Diseño de Pag. web</strong>
                                    </p>

                                    <img
                                      src={web}
                                      width="80"
                                      alt="Nombres para Restaurantes Peruanos - logos de constructoras - logo de empresas constructoras - diseño de logotipos en lima - logos de empresas - logos de restaurantes"
                                    />
                                  </div>
                                  <p className="card-footer2">
                                    Te ofrecemos 3
                                    <strong> tipos de páginas web</strong> ,
                                    adaptables a cualquier dispositivo y
                                    preparadas para el{' '}
                                    <strong>
                                      {' '}
                                      posicionamiento web en google
                                    </strong>
                                    .
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
                  <div className="item">
                    <div className="serv">
                      <Link to="/venta-hosting">
                        <div className="card">
                          <div className="content">
                            <span></span>
                            <div className="back">
                              <div className="back-content">
                                <img
                                  src={hosting}
                                  width="60"
                                  alt="Nombres para Restaurantes Peruanos - logos de constructoras - logo de empresas constructoras - diseño de logotipos en lima - logos de empresas - logos de restaurantes"
                                />
                                <strong>Compra de Hosting</strong>
                              </div>
                            </div>

                            <div className="front">
                              <div className="front-content">
                                <small className="badge">
                                  <img
                                    src={logo_svg}
                                    alt="Nombres para Restaurantes Peruanos - logos de constructoras - logo de empresas constructoras - diseño de logotipos en lima - logos de empresas - logos de restaurantes"
                                    width="30px"
                                  />
                                </small>
                                <div className="description">
                                  <div className="title">
                                    <p className="title">
                                      <strong>Compra de Hosting</strong>
                                    </p>

                                    <img
                                      src={hosting}
                                      width="80"
                                      alt="Nombres para Restaurantes Peruanos - logos de constructoras - logo de empresas constructoras - diseño de logotipos en lima - logos de empresas - logos de restaurantes"
                                    />
                                  </div>
                                  <p className="card-footer2">
                                    Ofrecemos{' '}
                                    <strong>
                                      Alojamiento Web, Dominios, Correos
                                      Coporativos
                                    </strong>
                                    . Contamos con planes desde 1 GB e
                                    Ilimitados.
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
                  <div className="item">
                    <div className="serv">
                      <Link to="/audiovisual">
                        <div className="card">
                          <div className="content">
                            <span></span>
                            <div className="back">
                              <div className="back-content">
                                <img
                                  src={audiovisual}
                                  width="60"
                                  alt="Nombres para Restaurantes Peruanos - logos de constructoras - logo de empresas constructoras - diseño de logotipos en lima - logos de empresas - logos de restaurantes"
                                />
                                <strong>Producción Audiovisual</strong>
                              </div>
                            </div>

                            <div className="front">
                              <div className="front-content">
                                <small className="badge">
                                  <img
                                    src={logo_svg}
                                    alt="Nombres para Restaurantes Peruanos - logos de constructoras - logo de empresas constructoras - diseño de logotipos en lima - logos de empresas - logos de restaurantes"
                                    width="30px"
                                  />
                                </small>
                                <div className="description">
                                  <div className="title">
                                    <p className="title">
                                      <strong>Producción Audiovisual</strong>
                                    </p>

                                    <img
                                      src={audiovisual}
                                      width="80"
                                      alt="Nombres para Restaurantes Peruanos - logos de constructoras - logo de empresas constructoras - diseño de logotipos en lima - logos de empresas - logos de restaurantes"
                                    />
                                  </div>
                                  <p className="card-footer2">
                                    <strong>
                                      Videos Corporativos, Animación
                                      Promocional, Edición, Sesión Fotográfica y
                                      Retoque
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
                  <div className="item">
                    <div className="serv">
                      <Link to="/diseno-flyer">
                        <div className="card">
                          <div className="content">
                            <span></span>
                            <div className="back">
                              <div className="back-content">
                                <img
                                  src={flyersi}
                                  width="60"
                                  alt="Nombres para Restaurantes Peruanos - logos de constructoras - logo de empresas constructoras - diseño de logotipos en lima - logos de empresas - logos de restaurantes"
                                />
                                <strong>Diseño de Flyer</strong>
                              </div>
                            </div>

                            <div className="front">
                              <div className="front-content">
                                <small className="badge">
                                  <img
                                    src={logo_svg}
                                    alt="Nombres para Restaurantes Peruanos - logos de constructoras - logo de empresas constructoras - diseño de logotipos en lima - logos de empresas - logos de restaurantes"
                                    width="30px"
                                  />
                                </small>
                                <div className="description">
                                  <div className="title">
                                    <p className="title">
                                      <strong>Diseño de Flyer</strong>
                                    </p>

                                    <img
                                      src={flyersi}
                                      width="80"
                                      alt="Nombres para Restaurantes Peruanos - logos de constructoras - logo de empresas constructoras - diseño de logotipos en lima - logos de empresas - logos de restaurantes"
                                    />
                                  </div>
                                  <p className="card-footer2">
                                    Realizamos{' '}
                                    <strong>
                                      diseño de flyer o folleto innovador
                                    </strong>
                                    , profesional y llamativo, personalizado.
                                    Tendrás disponible un diseñador Compruébalo.
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
                  <div className="item">
                    <div className="serv">
                      <Link to="/identidad-corporativa">
                        <div className="card">
                          <div className="content">
                            <span></span>
                            <div className="back">
                              <div className="back-content">
                                <img
                                  src={identidad}
                                  width="60"
                                  alt="Nombres para Restaurantes Peruanos - logos de constructoras - logo de empresas constructoras - diseño de logotipos en lima - logos de empresas - logos de restaurantes"
                                />
                                <strong>Diseño de Identidad Corporativa</strong>
                              </div>
                            </div>

                            <div className="front">
                              <div className="front-content">
                                <small className="badge">
                                  <img
                                    src={logo_svg}
                                    alt="Nombres para Restaurantes Peruanos - logos de constructoras - logo de empresas constructoras - diseño de logotipos en lima - logos de empresas - logos de restaurantes"
                                    width="30px"
                                  />
                                </small>
                                <div className="description">
                                  <div className="title">
                                    <p className="title">
                                      <strong>
                                        Diseño de Identidad Corporativa
                                      </strong>
                                    </p>

                                    <img
                                      src={identidad}
                                      width="80"
                                      alt="Nombres para Restaurantes Peruanos - logos de constructoras - logo de empresas constructoras - diseño de logotipos en lima - logos de empresas - logos de restaurantes"
                                    />
                                  </div>
                                  <p className="card-footer2">
                                    Incluye elementos gráficos (
                                    <strong>
                                      logotipo, tarjetas de presentación,
                                      membretes, folletos y otras
                                    </strong>{' '}
                                    que comparten el mismo estilo y los colores
                                    de la marca).
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
                  <div className="item">
                    <div className="serv">
                      <Link to="/diseno-personaje">
                        <div className="card">
                          <div className="content">
                            <span></span>
                            <div className="back">
                              <div className="back-content">
                                <img
                                  src={personaje}
                                  width="60"
                                  alt="Nombres para Restaurantes Peruanos - logos de constructoras - logo de empresas constructoras - diseño de logotipos en lima - logos de empresas - logos de restaurantes"
                                />
                                <strong>Diseño de Personajes</strong>
                              </div>
                            </div>

                            <div className="front">
                              <div className="front-content">
                                <small className="badge">
                                  <img
                                    src={logo_svg}
                                    alt="Nombres para Restaurantes Peruanos - logos de constructoras - logo de empresas constructoras - diseño de logotipos en lima - logos de empresas - logos de restaurantes"
                                    width="30px"
                                  />
                                </small>
                                <div className="description">
                                  <div className="title">
                                    <p className="title">
                                      <strong>
                                        Diseño de Personajes Corporativa
                                      </strong>
                                    </p>

                                    <img
                                      src={personaje}
                                      width="80"
                                      alt="Nombres para Restaurantes Peruanos - logos de constructoras - logo de empresas constructoras - diseño de logotipos en lima - logos de empresas - logos de restaurantes"
                                    />
                                  </div>
                                  <p className="card-footer2">
                                    Realizamos el diseño de tu
                                    <strong>
                                      {' '}
                                      mascota o personaje digital{' '}
                                    </strong>{' '}
                                    ya sea para tu negocio o publicidad, el
                                    servicio cuenta con{' '}
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
            </div>
          </div>
        </div>
      </section>

      <section className="equipo">
        <div className="titulo_equipo">
          <h2>NUESTRO EQUIPO CREATIVO</h2>
        </div>
        <div className="container max-w-[1350px] mx-auto">
          <div className="row">
            <div className="col-lg-12">
              <div className="descrip_equipo">
                <p>CONOZCA UN POCO MAS DE ELLOS</p>
                <hr className="hr_first" />
                <hr className="hr_second" />
              </div>
            </div>
            <div className="col-lg-12">
              <Swiper
                slidesPerView={2}
                className="mySwiper agenciateam siper_services"
                modules={[Autoplay]}
                spaceBetween={30}
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
                <SwiperSlide>
                  <div className="item">
                    <div className="content_equipo">
                      <div className="estruct_left"></div>
                      <div className="equipo_img"></div>
                      <div className="descripcion_equipo">
                        <h3>Diego Diaz</h3>
                        <h5>Ing. Sistemas</h5>
                        <p>
                          Superviso los proyectos innovadores y colaboro de
                          manera creativa con los profesionales de nuestras
                          diversas áreas, buscando siempre estrategias para
                          obtener un satisfactorio proceso.
                        </p>
                        <span>Diego</span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="item">
                    <div className="content_equipo">
                      <div className="estruct_left"></div>
                      <div className="equipo_img"></div>
                      <div className="descripcion_equipo">
                        <h3>Sebastian Salas</h3>
                        <h5>Maquetador Web</h5>
                        <p>
                          Me encargo de interactúar directamente con el cliente,
                          construyendo y maquetando elementos que componen el
                          diseño de una Página Web de tal manera que puedan ser
                          interpretados por un navegador para la visualización
                          del proyecto.
                        </p>
                        <span>Sebastian</span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="item">
                    <div className="content_equipo">
                      <div className="estruct_left"></div>
                      <div className="equipo_img"></div>
                      <div className="descripcion_equipo">
                        <h3>Deysi Huerta</h3>
                        <h5>Diseñadora Gráfica</h5>
                        <p>
                          Mi razón primordial es proyectar comunicaciones
                          visuales destinadas a transmitir mensajes específicos
                          a grupos sociales, con objetivos determinados. Esta
                          actividad ayuda a optimizar las comunicaciones
                          gráficas a través del diseño.
                        </p>
                        <span>Deysi</span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="item">
                    <div className="content_equipo">
                      <div className="estruct_left"></div>
                      <div className="equipo_img"></div>
                      <div className="descripcion_equipo">
                        <h3>Victoria Pariona</h3>
                        <h5>Audiovisual</h5>
                        <p>
                          La producción audiovisual es el arte de crear un
                          producto para diferentes medios, integración e
                          interrelación plena entre lo auditivo y lo visual para
                          producir una nueva realidad o lenguaje.
                        </p>
                        <span>Victoria</span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="item">
                    <div className="content_equipo">
                      <div className="estruct_left"></div>
                      <div className="equipo_img"></div>
                      <div className="descripcion_equipo">
                        <h3>Maryori Urquizo</h3>
                        <h5>Marketing</h5>
                        <p>
                          Analizo el mercado en las actuales plataformas de
                          comunicación, aplicando estrategias de inbound
                          marketing para que el público objetivo conecte con su
                          marca y de esta manera conseguir posicionamiento en el
                          mundo digital.
                        </p>
                        <span>Maryori</span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
