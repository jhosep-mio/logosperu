import { useEffect } from 'react'
import { key, landingPage, optimizacionWeb, posicionamientoSeo } from '../../../shared/images'

export const InicioSeo = (): JSX.Element => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <section className="section_seo pt-60 md:pt-72">
        <div className="seo_left">
          <div className="content_seo_left">
            <img
              src={posicionamientoSeo}
              alt=""
            />
          </div>
        </div>
        <div className="seo_rigth">
          <div className="content_seo_rigth">
            <div className="etiqueta">
              <h2>Posicionamiento Web SEO</h2>
            </div>
            <h2>
              ¿Por que es importante el <strong>Posicionamiento web SEO</strong>
              ?
            </h2>
            <div className="texto_seo_rigth">
              <p>
                La razón más importante por la que es necesario el SEO es porque
                hace más útil tu página web tanto para los usuarios como para
                los motores de búsqueda. Aunque estos aún no pueden ver una
                página web como lo hace un humano. El SEO es necesario para
                ayudar a los motores de búsqueda a entender sobre qué trata cada
                página y si es o no útil para los usuarios.
              </p>

              <ul className="lista_seo_rigth">
                <li>Atrae tráfico cualificado</li>
                <li>Mejora la experiencia del usuario</li>
                <li>Mejora de visibilidad</li>
                <li>Posibilidad de competir con grandes empresas</li>
                <li>
                  Los usuarios hacen click facilmente en los resultados
                  orgánicos
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="caracteristicas_seo">
        <h2 className="title_caracteristicas_seo">
          Caracteristicas de nuestro <strong>Posicionamiento Web SEO</strong>
        </h2>
        <div className="box_seo_general">
          <div className="box_caracteristicas_one">
            <div className="img_box_caracteristicas_one">
              <img
                src={optimizacionWeb}
                alt=""
              />
            </div>
            <div className="texto_box_caracteristicas_one">
              <h2>Optimizacion SEO OnPage</h2>
              <p>
                La tarea consiste en ajustar todos los elementos de la página
                web que no estén completamente optimizados para el
                posicionamiento web. Esto implica ajustar los títulos, enlaces
                internos, URLs para que sean amigables, palabras clave,
                etiquetas de imágenes y encabezados, entre otros aspectos.
              </p>
            </div>
          </div>
          <div className="box_caracteristicas_one">
            <div className="img_box_caracteristicas_one">
              <img
                src={landingPage}
                alt=""
              />
            </div>
            <div className="texto_box_caracteristicas_one">
              <h2>Analisis y resolución de problemas</h2>
              <p>
                Utilizamos PageSpeed para analizar y detectar problemas de
                rendimiento que se generan en su sitio Web. Con el fin de
                solucionar dichos problemas y mejorar la velocidad de carga
                jusnto con la puntuación que asocian a buenas practicas en la
                construccion de su sitio Web.
              </p>
            </div>
          </div>
          <div className="box_caracteristicas_one">
            <div className="img_box_caracteristicas_one">
              <img src={key} alt="" />
            </div>
            <div className="texto_box_caracteristicas_one">
              <h2>Analisis de las Palabras claves</h2>
              <p>
                La estrategia principal consiste en examinar cómo se comportan
                los resultados más altos en términos de los factores de SEO más
                relevantes. Al hacer esto podemos determinar si una palabra
                clave tiene una {'alta competencia'} o no. De esta manera,
                decidimos si seleccionar o no esa palabra clave.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
