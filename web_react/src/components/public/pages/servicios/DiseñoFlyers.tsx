import { useEffect } from 'react'
import { procesoFlyers } from '../../../shared/images'

export const DiseñoFlyers = (): JSX.Element => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <section className="descrip_comunity_manager pt-60 md:pt-72">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h1>DISEÑO DE FLYER´S</h1>
              <hr className="hr_first" />
              <hr className="hr_second" />
              <div className="cont_descrip_comunity_manager">
                <p>
                  Realizamos <span>diseño de flyer o folleto innovador</span>,
                  profesional y llamativo, personalizado. Te ayudaremos a captar
                  la atención de tus clientes. Diseñaremos 2 propuestas y
                  tendrás disponible un diseñador Compruébalo.
                </p>
              </div>
              <div className="boton_portafolio">
                <a href="https://www.logosperu.com/portafolio">
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
                    <b>CREATIVIDAD A TU SERVICIO</b>
                  </h4>
                  <p>
                    Podrás comunicarte y coordinar de manera directa y fluida
                    para conseguir un mejor resultado.
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
                    <b>DISEÑO LEGIBLE Y ESTRUCTURADO</b>
                  </h4>
                  <p>
                    Tu flyer hablará sobre tu negocio, con la mejor composición
                    posible para cautivar a tus clientes.
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
                    Realizamos el envío de todos los archivos editables y en
                    formato PDF,JPG y PNG previa aprobación.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <img
                src={procesoFlyers}
                width="100%"
                alt="Diseño de Flyer - Agencia de Marketing Digital"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
