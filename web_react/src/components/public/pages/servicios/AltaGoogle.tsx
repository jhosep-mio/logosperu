import { useEffect } from 'react'
import { alta_google, key, landingPage, optimizacionWeb } from '../../../shared/images'

export const AltaGoogle = (): JSX.Element => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <section className="section_seo pt-60 md:pt-72">
        <div className="seo_left">
          <div className="content_seo_left">
            <img
              src={alta_google}
              alt=""
            />
          </div>
        </div>
        <div className="seo_rigth">
          <div className="content_seo_rigth">
            <h2>
              <strong>Alta de google</strong>
            </h2>
            <div className="texto_seo_rigth">
              <p>
                En Logos Perú, nos especializamos en mejorar la visibilidad de
                tu sitio web en los motores de búsqueda y proporcionarte
                información valiosa sobre el comportamiento de los usuarios a
                través de Google Analytics.
              </p>

              <p>
                Nuestro objetivo es aumentar tu visibilidad en línea y mejorar
                la experiencia de los usuarios en tu sitio web. Utilizamos
                estrategias sólidas de SEO y analítica web para garantizar que
                estés obteniendo el máximo rendimiento de tu presencia en línea.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="caracteristicas_seo">
        <h2 className="title_caracteristicas_seo">Caracteristicas de nuestro servicio</h2>
        <div className="box_seo_general">
            <div className="box_caracteristicas_one">
                <div className="img_box_caracteristicas_one">
                  <img src={optimizacionWeb} alt=""/>
                </div>
                <div className="texto_box_caracteristicas_one">
                  <h2>Registro en Google Search Console y Google Analytics</h2>
                  <p>Nos encargamos de conectar tu sitio web con las herramientas fundamentales de Google: Google Search Console y Google Analytics. Esto nos permite tener un seguimiento detallado de cómo los usuarios interactúan con tu sitio y cómo puedes mejorar su experiencia.</p>
                </div>
            </div>
            <div className="box_caracteristicas_one">
              <div className="img_box_caracteristicas_one">
                <img src={landingPage} alt=""/>
              </div>
              <div className="texto_box_caracteristicas_one">
                <h2>Optimización de Palabras Clave y Metadatos</h2>
                <p>Investigamos y seleccionamos las palabras clave más relevantes para tu nicho. Luego, integramos estas palabras clave de manera estratégica en los títulos, encabezados, metadatos y contenidos de tus páginas. Esto asegura que tu sitio esté perfectamente alineado con las búsquedas de los usuarios.</p>
              </div>
          </div>
          <div className="box_caracteristicas_one">
            <div className="img_box_caracteristicas_one">
              <img src={key} alt=""/>
            </div>
            <div className="texto_box_caracteristicas_one">
              <h2><br/>Envío de Mapa del Sitio</h2>
              <p>Creamos y enviamos un mapa del sitio (sitemap.xml) a Google Search Console, lo que facilita la indexación de tu contenido y asegura que las páginas sean descubiertas más eficientemente por los motores de búsqueda.</p>
            </div>
        </div>
        </div>
    </section>
    </>
  )
}
