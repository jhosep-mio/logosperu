import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
// @ts-expect-error: Type 'any' has no properties in common with type 'Autoplay'
import { Navigation, Autoplay } from 'swiper'
import {
  creaciondevideosanimados,
  ediciondevideos,
  faq,
  fotografia1,
  fotografia2,
  fotografia3,
  fotografia4,
  fotografia5,
  fotografia6,
  sesionfotografica,
  videoconferenceb,
  videosintitucionales,
  wandbl
} from '../../../shared/images'
import {
  type ValuesItemsPortafolio,
  type ValuesCategoriasPortafolio
} from '../../../shared/Interfaces'
import { useEffect, useState } from 'react'
import {
  getDataCategoriasToPortafolio,
  getItems
} from '../../../shared/FechData'
import { Global } from '../../../../helper/Global'
import { Zoom } from 'react-awesome-reveal'
import { capitalizeFirstLetter } from '../../../shared/functions/Minusculas'
import { Link } from 'react-router-dom'
import { TabsAudiovisual } from '../../../shared/Tabs/TabsAudiovisual'
import { PreguntasAudiovisual } from '../../../shared/formularios/PreguntasAudiovisual'
import { FormularioEnvio } from '../../../shared/formularios/FormularioEnvio'
import Swal from 'sweetalert2'

export const Audiovisual = (): JSX.Element => {
  const [categorias, setCategorias] = useState<ValuesCategoriasPortafolio[]>(
    []
  )
  const [logos, setLogos] = useState<ValuesItemsPortafolio[]>([])
  const [loading, setLoading] = useState(true)
  const [, setTotalRegistros] = useState(0)
  useEffect(() => {
    window.scrollTo(0, 0)
    Promise.all([
      getDataCategoriasToPortafolio(
        'getSubCategoriasToPortafolioWhereUrl/3',
        setCategorias,
        setTotalRegistros
      ),
      getItems('indexWhereCategoriaAleatorio/3', setLogos)
    ]).then(() => {
      setLoading(false)
    })
  }, [])

  const [seleccion, setSeleccion] = useState(0)
  const [seleccionPreguntas, setseleccionPreguntas] = useState('')
  const [pagina, setPagina] = useState(1)

  const pasarPagina2 = (): void => {
    if (seleccion !== 0) {
      if (pagina === 2) {
        if (seleccionPreguntas) {
          setPagina(pagina + 1)
        } else {
          Swal.fire('Por favor digite su respuesta', '', 'warning')
        }
      } else {
        setPagina(pagina + 1)
      }
    } else {
      Swal.fire('Por favor seleccione una de las opciones', '', 'warning')
    }
  }

  return (
    <>
      <section className="descrip_web pt-60 md:pt-72">
        <div className="container max-w-[1150px] mx-auto">
          <div className="row">
            <div className="col-lg-12">
              <h1>
                SERVICIOS AUDIOVISUALES - VIDEOS CORPORATIVOS PROMOCIONALES
              </h1>
              <hr className="hr_first" />
              <hr className="hr_second" />
              <div className="cont_descrip_web">
                <p>
                  Ofrecemos <span>servicios audiovisuales</span> como{' '}
                  <span>videos corporativos</span>,{' '}
                  <span>animación promocional</span>, <span>edición</span>,{' '}
                  <span>sesión fotográfica</span> y retoque para diversas
                  plataformas digitales con la intención de transmitir una idea
                  o mensaje de una forma <span>dinámica e interactiva.</span>{' '}
                  Contamos con los equipos para una{' '}
                  <span>producción profesional.</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sect_cotizacion" id="formCotizador">
        <div className="container max-w-[1200px] mx-auto">
          <div className="row">
            <div className="col-lg-12">
              <div id="wizard_container" className="wizard">
                <form
                  name="example-1"
                  method="POST"
                  className="wizard-form cotizacion cotizacionFormulario"
                  action="{$base_url}servicios/proceso/audiovisual"
                >
                  <span className="respuesta"></span>
                  <div id="bottom-wizard">
                    <button
                      type="button"
                      name="backward"
                      className="backward bouncebutton2"
                      disabled={pagina === 1}
                      onClick={() => {
                        setPagina(pagina - 1)
                      }}
                    >
                      Anterior
                    </button>
                    <button
                      type="button"
                      name="forward"
                      className="forward bouncebutton2"
                      onClick={pasarPagina2}
                      disabled={pagina === 3}
                    >
                      Siguiente
                    </button>
                  </div>

                  <input id="website" name="website" type="text" value="" />

                  <div
                    id="middle-wizard"
                    className="wizard-branch wizard-wrapper"
                  >
                    <div
                      className="branch wizard-branch"
                      id="audiovisual-paso1"
                    >
                      {pagina === 1
                        ? (
                        <div className="step wizard-step" data-state="budget">
                          <div className="question_title">
                            <h3>¿QUÉ SERVICIO AUDIOVISUAL ESTÁS BUSCANDO?</h3>
                            <p>Nos ayudará a darte una mejor asesoría</p>
                          </div>
                          <div className="row justify-content-center">
                            <div className="col-lg-4">
                              <div className="item">
                                <input
                                  id="audiovisual_paso1_1"
                                  type="radio"
                                  name="videos_institucionales1"
                                  value="Videos Institucionales"
                                  className="required subserviciosAudiovisual"
                                />
                                <label
                                className={`${
                                    seleccion === 1 ? 'aplicar_seleccion' : ''
                                  }`}
                                  onClick={() => {
                                    setSeleccion(1)
                                  }}
                                >
                                  <img
                                    src={videosintitucionales}
                                    alt="Videos institucionales - Logos Perú"
                                    width="80"
                                    title="Videos institucionales - Logos Perú"
                                  />
                                  <strong>VIDEOS CORPORATIVOS</strong>Creamos
                                  videos de presentación para su empresa
                                </label>
                              </div>
                            </div>
                            <div className="col-lg-4">
                              <div className="item">
                                <input
                                  id="audiovisual_paso1_2"
                                  name="videos_institucionales1"
                                  type="radio"
                                  value="Creación de videos animados"
                                  className="required subserviciosAudiovisual"
                                />
                                <label
                                className={`${
                                    seleccion === 2 ? 'aplicar_seleccion' : ''
                                  }`}
                                  onClick={() => {
                                    setSeleccion(2)
                                  }}
                                >
                                  <img
                                    src={creaciondevideosanimados}
                                    alt="Creación de videos animados - Logos Perú"
                                    width="80"
                                    title="Creación de videos animados - Logos Perú"
                                  />
                                  <strong>
                                    ANIMACIÓN DE VIDEOS PROMOCIONALES
                                  </strong>
                                  Creamos videos con elementos animados a tu
                                  necesidad
                                </label>
                              </div>
                            </div>

                            <div className="col-lg-4">
                              <div className="item">
                                <input
                                  id="audiovisual_paso1_3"
                                  name="videos_institucionales1"
                                  type="radio"
                                  value="Edición de videos"
                                  className="required subserviciosAudiovisual"
                                />
                                <label
                                className={`${
                                    seleccion === 3 ? 'aplicar_seleccion' : ''
                                  }`}
                                  onClick={() => {
                                    setSeleccion(3)
                                  }}
                                >
                                  <img
                                    src={ediciondevideos}
                                    alt="Edición de videos - Logos Perú"
                                    width="80"
                                    title="Edición de videos - Logos Perú"
                                  />
                                  <strong>EDICIÓN DE VIDEOS</strong>Si ya
                                  cuentas con un video, nos encargamos de
                                  hacerlo más dinámico e interactivo
                                </label>
                              </div>
                            </div>

                            <div className="col-lg-12">
                              <div className="item">
                                <input
                                  id="audiovisual_paso1_4"
                                  name="videos_institucionales1"
                                  type="radio"
                                  value="Sesión Fotográfica"
                                  className="required subserviciosAudiovisual"
                                />
                                <label

                                className={`${
                                    seleccion === 4 ? 'aplicar_seleccion' : ''
                                  }`}
                                  onClick={() => {
                                    setSeleccion(4)
                                  }}>
                                  <img
                                    src={sesionfotografica}
                                    alt="Sesión fotográfica - Logos Perú"
                                    width="80"
                                    title="Sesión fotográfica - Logos Perú"
                                  />
                                  <strong>
                                    SESIÓN FOTOGRÁFICA Y RETOQUE FOTOGRÁFICO
                                  </strong>
                                  Realizamos tomas fotográficas de tu empresa
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                          )
                        : pagina === 2
                          ? (
                        <PreguntasAudiovisual
                          seleccionPreguntas={seleccionPreguntas}
                          setseleccionPreguntas={setseleccionPreguntas}
                        />
                            )
                          : pagina === 3
                            ? (
                        <FormularioEnvio
                          redireccion="/portafolio/audiovisual"
                          titulo="Producción Audiovisual"
                          name1="Servicio"
                          name2="Tipo de video"
                          seleccionPreguntas={seleccionPreguntas}
                          seleccion={
                            seleccion === 1
                              ? 'Video corporativo'
                              : seleccion === 2
                                ? 'Animacion de videos promocionales'
                                : seleccion === 3
                                  ? 'Edicion de videos'
                                  : seleccion === 4
                                    ? 'Sesión o retoque fotografico'
                                    : ''
                          }
                        />
                              )
                            : (
                                ''
                              )}
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="publicidad_logotipo">
        <div className="titulo">
          <h2>SOMOS UNA AGENCIA</h2>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="descrip">
                <p>SERVICIOS DE PRODUCCIÓN AUDIOVISUAL</p>

                <hr className="hr_first" />

                <hr className="hr_second" />
              </div>
            </div>

            <div className="col-lg-12">
              <div className="contenido_logotipo">
                <div className="item_logotipo h-[400px]">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/8t15P50FTAo"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TabsAudiovisual />

      <section className="procesos py-10">
        <div className="container max-w-[1200px] mx-auto">
          <div className="row">
            <div className="col-lg-12">
              <div className="titulo_opcion">
                <h2>NUESTRO PROCESO DE PRODUCCIÓN AUDIOVISUAL</h2>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="descrip">
                <hr className="hr_first" />
                <hr className="hr_second" />
              </div>
            </div>
            <div className="col-lg-4">
              <div className="aea">
                <div className="numero">
                  <span>1</span>
                </div>
                <div className="descriptivo">
                  <h4>
                    <b>SESIÓN FOTOGRÁFICA O PRODUCCIÓN DE VIDEO</b>
                  </h4>
                  <p>
                    Nuestro equipo profesional realizará la{' '}
                    <b>sesión fotográfica o grabación de video</b>, según lo
                    acordado con el cliente.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="aea">
                <div className="numero">
                  <span>2</span>
                </div>
                <div className="descriptivo">
                  <h4>
                    <b>EDICIÓN DE FOTOS O VIDEOS</b>
                  </h4>
                  <p>
                    Parte en el cual se realiza el{' '}
                    <b>retoque fotográfico o la edición de video</b> (Podrá
                    realizar cambios según el plan contratado).
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="aea">
                <div className="numero">
                  <span>3</span>
                </div>
                <div className="descriptivo">
                  <h4>
                    <b>ENTREGABLES</b>
                  </h4>
                  <p>
                    Realizamos el envío del Master del <b>video</b> realizado y
                    la entrega de las fotos retocadas, previa aprobación.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="seccion_fotograficas">
        <div className="container max-w-[1200px] mx-auto">
          <div className="row">
            <div className="col-lg-12">
              <div className="titulo_opcion">
                <h2>SESIÓN FOTOGRÁFICA & RETOQUE FOTOGRÁFICO</h2>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="descrip">
                <hr className="hr_first" />
                <hr className="hr_second" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="fotografia_carrusel">
                <div className="fotogras relative">
                  <Swiper
                    className="mySwiper fotografias1 siper_services"
                    loop={true}
                    modules={[Navigation]}
                    navigation={true}
                  >
                    <SwiperSlide className="w-full h-full">
                      <div className="item">
                        <div>
                          <img
                            src={fotografia1}
                            alt=""
                            className="w-full h-full"
                          />
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="item">
                        <div>
                          <img src={fotografia2} alt="" />
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="item">
                        <div>
                          <img src={fotografia3} alt="" />
                        </div>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="fotografia_carrusel">
                <div className="fotogras relative">
                  <Swiper
                    className="mySwiper fotografias1 siper_services"
                    loop={true}
                    modules={[Navigation]}
                    navigation={true}
                  >
                    <SwiperSlide className="w-full h-full">
                      <div className="item">
                        <div>
                          <img
                            src={fotografia4}
                            alt=""
                            className="w-full h-full"
                          />
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="item">
                        <div>
                          <img src={fotografia5} alt="" />
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="item">
                        <div>
                          <img src={fotografia6} alt="" />
                        </div>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sesion ">
        <div className="container max-w-[1200px] mx-auto">
          <div className="row">
            <div className="col-lg-12">
              <div className="titulo_opcion">
                <h2>SESIÓN FOTOGRÁFICA</h2>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="descrip">
                <hr className="hr_first" />
                <hr className="hr_second" />
              </div>
            </div>
            <div className="col-lg-12">
              <div className="descrip_lotipo">
                <p>
                  Es la <span>producción</span> que se realiza antes o durante
                  la <span>sesión fotográfica</span>, bajo el concepto o idea
                  propuesto por el cliente. Las{' '}
                  <span>sesiones fotográficas corporativas</span>, es la toma
                  fotográfica de la empresa y su equipo de trabajo. Las{' '}
                  <span>sesiones fotográficas promocionales</span>, es la
                  realización de fotos al producto o servicio que la empresa
                  brinda, con la intención de utilizarlo en sus diferentes
                  diseños publicitarios.
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="box_item">
                <div className="box_cabeza">
                  <img src={faq} alt="diseño de logotipo" />
                </div>
                <div className="box_body flex items-center justify-center box_modifcate">
                  <p>
                    Se enviará un <b>cuestionario</b> con la finalidad de
                    obtener la datos o indicaciones específicos que requiera la{' '}
                    <strong>sesión de fotos</strong>, sea corporativas o
                    promocionales. (Se programará la fecha y el lugar)
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="box_item">
                <div className="box_cabeza">
                  <img src={wandbl} alt="diseño de logotipo" />
                </div>
                <div className="box_body flex items-center justify-center box_modifcate">
                  <p>
                    Se realizará la <b>sesión de fotos</b>, teniendo en cuenta
                    el concepto, y los equipos que se soliciten.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="box_item">
                <div className="box_cabeza">
                  <img src={videoconferenceb} alt="diseño de logotipo" />
                </div>
                <div className="box_body flex items-center justify-center box_modifcate">
                  <p>
                    Se analizará las <b>fotografías</b>, se seleccionarán las
                    mejores para luego ser retocadas. Se hará entrega de las{' '}
                    <strong>fotografías en los formatos especificados</strong>{' '}
                    en el plan.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="portafolios max-w-[1450px] mx-auto pt-40">
        <div className="titulo_portafolio">
          <h2>PORTAFOLIO</h2>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="descrip_portafolio">
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
                        to={`/portafolio-plan/${cat.url}`}
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

        <Zoom duration={800} delay={100}>
          {!loading
            ? <>
              <Swiper
                className="mySwiper portafolio siper_services px-0 lg:px-5"
                loop={true}
                speed={2000}
                spaceBetween={20}
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
            </>
            : (
                ''
              )}
        </Zoom>
      </section>
    </>
  )
}
