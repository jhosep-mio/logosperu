import { useEffect, useState } from 'react'
import {
  type ValuesCategoriasPortafolio,
  type ValuesItemsPortafolio
} from '../../../shared/Interfaces'
import {
  paginadministrable,
  paginainformativo,
  tiendavirtuales
} from '../../../shared/images'
import {
  getDataCategoriasToPortafolio,
  getItems
} from '../../../shared/FechData'
import { capitalizeFirstLetter } from '../../../shared/functions/Minusculas'
import { Link } from 'react-router-dom'

import { Zoom } from 'react-awesome-reveal'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
// @ts-expect-error: Type 'any' has no properties in common with type 'Autoplay'
import { Autoplay } from 'swiper'
import { Global } from '../../../../helper/Global'
import { TabsWeb } from '../../../shared/Tabs/TabsWeb'
import Swal from 'sweetalert2'
import { FormularioEnvio } from '../../../shared/formularios/FormularioEnvio'
import { Preguntasweb2 } from '../../../shared/formularios/Preguntasweb2'

export const DiseñoWeb = (): JSX.Element => {
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
        'getSubCategoriasToPortafolioWhereUrl/2',
        setCategorias,
        setTotalRegistros
      ),
      getItems('indexWhereCategoriaAleatorio/2', setLogos)
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
        <div className="container max-w-[1200px] mx-auto">
          <div className="row">
            <div className="col-lg-12">
              <h1>DISEÑO DE PAGINAS WEB EN EL PERÚ</h1>
              <hr className="hr_first" />
              <hr className="hr_second" />
              <div className="cont_descrip_web">
                <p>
                  Somos una agencia de <span>diseño de paginas web</span> donde
                  implementamos las ultimas tecnologias relacionadas al{' '}
                  <span>diseño web</span> y <span>desarrollo web</span>, ¿Tienes
                  un negocio y aún no tienes una web? Te ofrecemos 3{' '}
                  <span>tipos de paginas web</span>, adaptables a cualquier
                  dispositivo y preparas para el{' '}
                  <span>posicionamiento web</span> en google. Muestra tus
                  productos o servicios en internet y aumente sus ventas.
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
                  action="{$base_url}servicios/proceso/desarrolloweb"
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
                    {pagina === 1
                      ? (
                      <div className="branch wizard-branch" id="web-page">
                        <div className="step wizard-step" data-state="budget">
                          <div className="question_title">
                            <h3>¿QUÉ TIPO DE PÁGINA WEB ESTÁS BUSCANDO?</h3>
                            <p>Nos ayudará a darte una mejor asesoría</p>
                          </div>
                          <div className="row justify-content-center">
                            <div className="col-md-4 col-lg-4">
                              <div className="item">
                                <input
                                  id="web_paso1_1"
                                  type="radio"
                                  name="desarrollo_web"
                                  value="Página web informativas"
                                  className="required subserviciosDesarrollo"
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
                                    src={paginainformativo}
                                    width="80"
                                    alt="diseño y desarrollo de paginas web - logos perú"
                                    title="Página web informativas - Logo Perú"
                                  />
                                  <strong>PÁGINA WEB INFORMATIVAS</strong>están
                                  enfocadas principalmente a mostrar una
                                  información permanente
                                </label>
                              </div>
                            </div>
                            <div className="col-md-4 col-lg-4">
                              <div className="item">
                                <input
                                  id="web_paso1_2"
                                  name="desarrollo_web"
                                  type="radio"
                                  value="Página web administrables"
                                  className="required subserviciosDesarrollo"
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
                                    src={paginadministrable}
                                    width="80"
                                    alt="diseño y desarrollo de paginas web - logos perú"
                                    title="Página web administrables - Logos Perú"
                                  />
                                  <strong>PÁGINA WEB ADMINISTRABLES</strong>
                                  Podrá realizar cambios en la información de su
                                  web de manera fácil
                                </label>
                              </div>
                            </div>
                            <div className="col-md-4 col-lg-4">
                              <div className="item">
                                <input
                                  id="web_paso1_3"
                                  name="desarrollo_web"
                                  type="radio"
                                  value="Tiendas virtuales"
                                  className="required subserviciosDesarrollo"
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
                                    src={tiendavirtuales}
                                    alt="diseño y desarrollo de paginas web - logos perú"
                                    width="80"
                                    title="Tiendas virtuales - Logos Perú"
                                  />
                                  <strong>TIENDAS VIRTUALES</strong>Perfecto
                                  para vender tus productos por internet
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                        )
                      : pagina === 2
                        ? (
                      <Preguntasweb2
                        seleccionPreguntas={seleccionPreguntas}
                        setseleccionPreguntas={setseleccionPreguntas}
                      />
                          )
                        : pagina === 3
                          ? (
                      <FormularioEnvio
                        redireccion="/portafolio/diseno-de-paginas-web"
                        titulo="Diseño de pagina web"
                        name1="Web"
                        name2="Web de referencia"
                        seleccionPreguntas={seleccionPreguntas}
                        seleccion={
                          seleccion === 1
                            ? 'Informativa'
                            : seleccion === 2
                              ? 'Administrable'
                              : seleccion === 3
                                ? 'Tienda virtual'
                                : ''
                        }
                      />
                            )
                          : (
                              ''
                            )}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="descripcion_web">
        <div className="titulo">
          <h2>SOMOS UNA AGENCIA</h2>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="descrip">
                <p>EXPERTOS EN DISEÑO Y DESARROLLO WEB</p>
                <hr className="hr_first" />
                <hr className="hr_second" />
              </div>
            </div>
            <div className=""></div>
          </div>
        </div>
      </section>

      <TabsWeb />

      <section className="portafolios max-w-[1450px] mx-auto pt-40">
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
