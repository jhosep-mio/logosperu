import { useEffect, useState } from 'react'
import {
  faq,
  nocuentoconlogotipo,
  proceso2,
  videoconference,
  yacuentoconlogotipo
} from '../../../shared/images'
import {
  getDataCategoriasToPortafolio,
  getItems
} from '../../../shared/FechData'
import {
  type ValuesCategoriasPortafolio,
  type ValuesItemsPortafolio
} from '../../../shared/Interfaces'
import { Link } from 'react-router-dom'
import { capitalizeFirstLetter } from '../../../shared/functions/Minusculas'
import { Zoom } from 'react-awesome-reveal'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
// @ts-expect-error: Type 'any' has no properties in common with type 'Autoplay'
import { Autoplay } from 'swiper'
import { Global } from '../../../../helper/Global'
import Swal from 'sweetalert2'
import { PreguntasLogos } from '../../../shared/formularios/PreguntasLogos'
import { FormularioEnvio } from '../../../shared/formularios/FormularioEnvio'

export const DisenoLogotipo = (): JSX.Element => {
  const [categorias, setCategorias] = useState<ValuesCategoriasPortafolio[]>(
    []
  )
  const [logos, setLogos] = useState<ValuesItemsPortafolio[]>([])
  const [loading, setLoading] = useState(true)
  const [, setTotalRegistros] = useState(0)
  const [seleccion, setSeleccion] = useState(0)
  const [seleccionPreguntas, setseleccionPreguntas] = useState('')
  const [pagina, setPagina] = useState(1)

  const pasarPagina2 = (): void => {
    if (seleccion !== 0) {
      if (pagina === 2) {
        if (seleccionPreguntas) {
          setPagina(pagina + 1)
        } else {
          Swal.fire('Por favor seleccione un plan', '', 'warning')
        }
      } else {
        setPagina(pagina + 1)
      }
    } else {
      Swal.fire('Por favor seleccione una de las opciones', '', 'warning')
    }
  }

  useEffect(() => {
    window.scrollTo(0, 0)
    Promise.all([
      getDataCategoriasToPortafolio(
        'getSubCategoriasToPortafolioWhereUrl/1',
        setCategorias,
        setTotalRegistros
      ),
      getItems('indexWhereCategoriaAleatorio/1', setLogos)
    ]).then(() => {
      setLoading(false)
    })
  }, [])

  return (
    <>
      <section className="descrip_logotipo pt-60 md:pt-72">
        <div className="container max-w-[1200px] mx-auto">
          <div className="row">
            <div className="col-lg-12">
              <h1>DISEÑO DE LOGOTIPOS EN EL PERÚ</h1>
              <hr className="hr_first" />
              <hr className="hr_second" />
              <div className="cont_descrip_logotipo">
                <p>
                  Creamos <span>diseños de logotipos</span> creativos y
                  profesionales. ¿Tienes una <span>idea de negocio</span> y aún
                  no tienes un <span>logo</span>? nosotros creamos toda la{' '}
                  <span>identidad corporativa</span> de tu empresa, te
                  escuchamos, analizamos y proponemos siempre la mejor propuesta
                  para el éxito de tu <span>marca</span> en el mercado digital.
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
                  method="post"
                  className="wizard-form cotizacion cotizacionFormulario"
                  action="{$base_url}servicios/proceso/logotipos"
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
                      <div
                        className="branch wizard-branch"
                        id="logotipo-design-paso1"
                      >
                        <div className="step wizard-step" data-state="budget">
                          <div className="question_title">
                            <h3>SELECCIONA UNA DE LAS OPCIONES POR FAVOR</h3>
                            <p>Nos ayudará a darte una mejor asesoría</p>
                          </div>
                          <div className="row flex justify-center">
                            <div className="col-lg-4">
                              <div className="item">
                                <input
                                  id="logotipo_design_1"
                                  type="radio"
                                  name="opciones_diseno_logotipo"
                                  value="Ya cuento con un logotipo"
                                  className="required"
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
                                    src={yacuentoconlogotipo}
                                    width="100"
                                    alt="diseño de logotipo"
                                    title="Diseño de Logotipo - Agencia de diseño Gráfico - logotipos"
                                  />
                                  <strong>YA CUENTO CON UN LOGOTIPO</strong>
                                </label>
                              </div>
                            </div>

                            <div className="col-lg-4">
                              <div className="item">
                                <input
                                  id="branch_2_answer_2"
                                  name="opciones_diseno_logotipo"
                                  type="radio"
                                  value="No cuento con un logotipo"
                                  className="required"
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
                                    src={nocuentoconlogotipo}
                                    width="100"
                                    alt="diseño de logotipo"
                                    title="Diseño de Logotipo - Agencia de diseño Gráfico - logotipos"
                                  />
                                  <strong>NO CUENTO CON UN LOGOTIPO</strong>
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                        )
                      : pagina === 2
                        ? (
                      <PreguntasLogos
                        seleccionPreguntas={seleccionPreguntas}
                        setseleccionPreguntas={setseleccionPreguntas}
                      />
                          )
                        : (
                            pagina === 3 && (
                        <FormularioEnvio
                          redireccion = '/portafolio/diseno-de-logotipos'
                          titulo="Diseño de Logotipo"
                          name1="Logo"
                          name2="Plan"
                          seleccionPreguntas={seleccionPreguntas}
                          seleccion={
                            seleccion === 1
                              ? 'YA CUENTO CON UN LOGOTIPO'
                              : seleccion === 2
                                ? 'NO CUENTO CON UN LOGOTIPO'
                                : ''
                          }
                        />
                            )
                          )}

                    {/* <div className="branch wizard-branch">
                      <div className="submit step wizard-step" id="end" style="display: none;">
                        <div className="question_title">
                          <h3>DATOS DE CONTACTO</h3>
                          <p>¡Terminamos! ahora envía tus datos de contacto para comunicarnos contigo</p>
                        </div>
                        <div className="row justify-content-center">
                          <div className="col-lg-5">
                            <div className="box_general">
                              <div className="form-group">
                                <input type="text" name="nombre" className="required form-control" placeholder="Nombres y Apellidos" maxlength="80">
                              </div>

                              <div className="form-group">
                                <input type="text" name="empresa" className="required form-control" placeholder="Empresa" maxlength="70">
                              </div>

                              <div className="form-group">
                                <input type="email" name="email" className="required form-control" placeholder="E-mail" maxlength="80">
                              </div>
                              <div className="form-group">
                                <input type="text" name="telefono" className="required form-control" placeholder="Teléfono/Celular" maxlength="10">
                              </div>
                              <div className="form-group add_bottom_30 mb-0">
                                <select className="required form-control" name="encontrar">
                                  <option value="" selected="">¿Por dónde nos encontraste?</option>
                                  <option value="Google">Google</option>
                                  <option value="Facebook">Facebook</option>
                                  <option value="Instagram">Instagram</option>
                                  <option value="Twitter">Twitter</option>
                                  <option value="Twitter">Recomendación de un conocido</option>
                                </select>
                              </div>
                              <div className="form-group add_bottom_30">
                                <select className="required form-control" name="coordinacion">
                                  <option value="" selected>¿Coordinacion de proyecto?</option>
                                  <option value="Realizar visita oficina de logosperu" >(Presencial) Visitar oficinas de logosperu</option>
                                  <option value="Celular/Whatsapp/correo">(Virtual) Celular/Whatsapp/correo</option>
                                </select>
                              </div>

                              {if isset($imgCaptcha)}
                                                    <div className="form-group">
                                                        <div className="input-group center-block text-center">
                                                            <span id="">
                                                                {$imgCaptcha}
                                                            </span>
                                                        </div>
                                                    </div>
                                                {/if}

                            </div>

                          </div>
                        </div>

                      </div>
                    </div> */}
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
                <p>EXPERTOS EN DISEÑO DE LOGOTIPOS</p>

                <hr className="hr_first" />

                <hr className="hr_second" />
              </div>
            </div>

            <div className="col-lg-12">
              <div className="contenido_logotipo">
                <div className="item_logotipo h-[400px]">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/utVaX-10XYQ"
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

      <section className="proceso_logotipo">
        <div className="titulo">
          <h2>DISEÑO DE LOGOTIPO</h2>
        </div>

        <div className="container max-w-[1200px] mx-auto">
          <div className="row">
            <div className="col-lg-12">
              <div className="descrip">
                <p>PROCESO DEL DISEÑO DE UN LOGOTIPO</p>

                <hr className="hr_first" />

                <hr className="hr_second" />
              </div>
            </div>

            <div className="col-lg-12">
              <div className="descrip_lotipo">
                <p>
                  Un <span>logotipo</span> muestra la identidad corporativa que
                  tiene su empresa, habla de la calidad de sus productos o
                  servicios y habla de ti. Cuéntanos de tu proyecto dando clic
                  al botón cotizar para darte una asesoría personalizada.
                </p>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="box_item">
                <div className="box_head">
                  <img
                    src={faq}
                    alt="diseño de logotipo - Agencia de diseño Gráfico - logotipos"
                  />
                </div>
                <div className="">
                  <p className="text-2xl px-10 text-center mt-3">
                    Te enviamos un <b>brief</b> (cuestionario), del que debe
                    llenarlo para así llevar a cabo el{' '}
                    <strong>desarrollo del logo</strong> (Un profesional le
                    asesorara).
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="box_item">
                <div className="box_head">
                  <img
                    src={proceso2}
                    alt="diseño de logotipo - Agencia de diseño Gráfico - logotipos"
                  />
                </div>
                <div className="">
                  <p className="text-2xl px-10 text-center mt-3">
                    Te enviamos <b>propuestas de logos</b> para que apruebes el
                    indicado (Podrá realizar{' '}
                    <strong>cambios según el plan contratado).</strong>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="box_item">
                <div className="box_head">
                  <img
                    src={videoconference}
                    alt="diseño de logotipo - Agencia de diseño Gráfico - logotipos"
                  />
                </div>
                <div className="">
                  <p className="text-2xl px-10 text-center mt-3">
                    Realizamos el <b>envío de los archivos editables</b> previa
                    aprobación de la propuesta.
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
