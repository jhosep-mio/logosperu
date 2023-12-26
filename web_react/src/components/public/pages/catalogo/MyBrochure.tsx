import { useEffect } from "react";

export const MyBrochure = (): JSX.Element => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <section className="section_portafolio pt-60 md:pt-72">
        <div className="titulo_portafolio">
          <h1>BROCHURE</h1>
          <hr className="hr_first" />
          <hr className="hr_second" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="descrip_portafolio">
                <p>
                  En la <b>Agencia de Diseño Grafico y Desarrollo web</b>{" "}
                  proporcionamos <b>servicios de alta calidad</b> como{" "}
                  <b>
                    diseño de logos, diseño web, diseño gráfico, audiovisual,
                    alojamiento web
                  </b>{" "}
                  que generan la <b>construcción de una marca</b>, a través de
                  grandes impactos emocionales al consumidor, creando así
                  experiencias vivenciales que permitan alcanzar la fidelidad y
                  lealtad de los clientes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sect_brochure">
        <div id="catalogo" className="catalogo-sectbg1">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-md-12">
                <div className="main-book">
                  <div className="cuerpo-book">
                    <iframe
                      className="iframe-ie"
                      scrolling="auto"
                      src="https://www.logosperu.com/public/catalogo/logosperu/slider.html"
                      frameBorder="0"
                      height="100%"
                      width="100%"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
