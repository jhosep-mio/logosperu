import { useEffect } from 'react'
import { brochure_grafico, content, illustrator, picture } from '../../../shared/images'

export const Brochure = (): JSX.Element => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <section className="descrip_comunity_manager pt-60 md:pt-72">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h1>DISEÑO DE BROCHURE</h1>
              <hr className="hr_first" />
              <hr className="hr_second" />
              <div className="cont_descrip_comunity_manager">
                <p>
                  Realizamos <span>diseño de brochure</span> innovador,
                  profesional y llamativo, personalizado para tu negocio.
                  Nuestro objetivo es ayudarte a cautivar a tus clientes desde
                  el primer vistazo. Te ofrecemos la oportunidad de trabajar con
                  un diseñador dedicado para lograr el impacto visual que
                  buscas. ¡Compruébalo!
                </p>
              </div>
              <div className="boton_portafolio">
                <a href="https://www.logosperu.com/portafolios/brochure">
                  Ver Portafolio
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="procesos">
        <div className="container max-w-[1200px]">
          <div className="row">
            <div className="col-lg-12">
              <div className="titulo_opcion">
                <h2>NUESTRO PROCESO</h2>
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
                  <h4 className="mb-6">
                    <b>INNOVACIÓN CREATIVA A TU DISPOSICIÓN</b>
                  </h4>
                  <p>
                    Colabora directamente y con fluidez para lograr resultados
                    sorprendentes. Tu visión se combinará con nuestra
                    creatividad.
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
                  <h4 className="mb-6">
                    <b>DISEÑO ESTRUCTURADO Y LEGIBLE</b>
                  </h4>
                  <p>
                    Tu brochure reflejará la esencia de tu negocio con una
                    composición impecable que cautivará a tu audiencia.
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
                  <h4 className="mb-6">
                    <b>ENTREGABLES</b>
                  </h4>
                  <p>
                    Te proporcionamos archivos editables en PDF, JPG y PNG, una
                    vez que estén aprobados. Cada detalle estará a la altura de
                    tus expectativas.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <img
                src={brochure_grafico}
                width="100%"
                alt="Diseño de Flyer - Agencia de Marketing Digital"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="sect_title_mo">
        <div className="titulo_white">
          <h2>REQUISITOS</h2>
        </div>
      </section>

      <section className="requisitos_flyer">
        <div className="container max-w-[1200px]">
          <div className="row">
            <div className="col-lg-4">
              <div className="aea_requisitos">
                <div className="descriptivo ">
                  <p>
                    Logotipo vectorizado en Ai o cualquier otro programa de
                    Adobe
                  </p>
                </div>
                <div className="numero">
                  <span>
                    <img
                      src={illustrator}
                      width="100%"
                      className='w-[100px]'
                      alt="Requisitos Flyer"
                    />
                  </span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mt-5 lg:mt-0">
              <div className="aea_requisitos">
                <div className="descriptivo">
                  <p>
                    Imagen de logotipo JPG o PNG con más de 2000 píxeles de
                    anchura
                  </p>
                </div>
                <div className="numero ">
                  <span>
                    <img
                      src={picture}
                      width="100%"
                      className='w-[100px]'
                      alt="Requisitos Flyer"
                    />
                  </span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mt-5 lg:mt-0">
              <div className="aea_requisitos">
                <div className="descriptivo">
                  <p>Enviar información ó tema que se realizará el diseño.</p>
                </div>
                <div className="numero ">
                  <span>
                    <img
                      src={content}
                      width="100%"
                      className='w-[100px]'
                      alt="Requisitos Flyer"
                    />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
