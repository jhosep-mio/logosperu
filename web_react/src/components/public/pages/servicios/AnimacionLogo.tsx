import { useEffect } from 'react'
import {
  fantasma,
  espanta,
  paso1,
  paso2,
  paso3,
  s1,
  s2,
  s3
} from '../../../shared/images'

export const AnimacionLogo = (): JSX.Element => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <section className="descrip_facebok_ads pt-60 md:pt-72">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h1>ANIMACION DE LOGOTIPO</h1>
              <hr className="hr_first" />
              <hr className="hr_second" />
              <div className="cont_descrip_facebok_ads">
                <p>
                  Damos vida a tu logotipo a través de cautivadoras{' '}
                  <span> animaciones </span>. Ya sea para tu empresa o para tus
                  estrategias publicitarias, nuestros hábiles
                  <span> diseñadores e ilustradores </span> están preparados
                  para transformar tu logotipo en una experiencia animada.
                  Inicia hoy este emocionante proyecto de animación de logotipo
                  y asegúrate de obtener un resultado que supere tus
                  expectativas.
                </p>
              </div>
              <div className="boton_portafolio">
                <a href="https://www.logosperu.com/portafolio-plan/video-animado">
                  Ver Portafolio
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sec_porque">
        <div className="container max-w-[1200px]">
          <div className="row">
            <div className="col-lg-12">
              <div className="row centrar_todo">
                <div className="col-lg-7">
                  <div className="persona_titulo">
                    <h4 className="title_animacion_video">
                      ¿BUSCAS DESTACAR ENTRE <br /> LA MULTITUD?{' '}
                    </h4>
                  </div>
                  <div className="personaje_texto">
                    <p className='text-3xl'>
                      Nuestro servicio de animación de logotipo es la solución
                      perfecta para darle vida a tu identidad visual. Trabajamos
                      con un equipo de diseñadores e ilustradores profesionales,
                      listos para convertir tu logotipo en una experiencia
                      visual sorprendente.
                    </p>
                  </div>
                </div>
                <div className="col-lg-5">
                  <div className="conte_imagen_gif">
                    <img src={fantasma} />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="boton_portafolio">
                <a href="#">Empieza Ahora</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="titulos">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h4 className="text-white text-center text-7xl font-bold">
                NUESTRO PROCESO CREATIVO
              </h4>
            </div>
          </div>
        </div>
      </section>

      <section className="contenido">
        <div className="container max-w-[1200px]">
          <div className="row">
            <div className="col-lg-5">
              <div className="conte_imagen_gif2">
                <img src={espanta} alt="" className="max-w-[150%]" />
              </div>
            </div>
            <div className="col-lg-7">
              <div className="listado2">
                <ul className="">
                  <li>
                    <p>
                      <strong>CONCEPTUALIZACIÓN</strong> <br />
                      Comprendemos tu marca <br /> y valores para crear una{' '}
                      <br /> animación que resuene con <br /> tu audiencia
                    </p>
                  </li>
                  <li>
                    <p>
                      <strong>DISEÑO PERSONALIZADO</strong>
                      <br />
                      Creamos una animación <br />
                      que captura la esencia de tu
                      <br />
                      logotipo y lo lleva más allá de <br />
                      lo estático
                    </p>
                  </li>
                  <li>
                    <p>
                      <strong>ANIMACIÓN PROFESIONAL</strong>
                      <br />
                      Nuestro equipo de expertos <br />
                      transforma el diseño en una <br />
                      secuencia fluida y cautivadora
                    </p>
                  </li>
                  <li>
                    <p>
                      <strong>REVISIÓN Y AJUSTES</strong>
                      <br />
                      Trabajamos contigo para perfeccionar
                      <br />
                      la animación según tus
                      <br />
                      comentarios y sugerencias.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="titulos">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h4 className="text-white text-center text-7xl font-bold">
                ¿PORQUE ELEGIRNOS?
              </h4>
            </div>
          </div>
        </div>
      </section>

      <section className="contenido2">
        <div className="container max-w-[1200px]">
          <div className="row">
            <div className="col-lg-4">
              <div className="body_proceso">
                <div className="head_proceso">
                  <img src={s1} className="img1 mx-auto" alt="" />
                </div>
                <div className="titulo_proceso">
                  <h2>EXPERIENCIA</h2>
                </div>
                <div className="imagenp">
                  <img src={paso1} alt="" className="mx-auto" />
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="body_proceso">
                <div className="head_proceso">
                  <img src={s2} className="img2 mx-auto" alt="" />
                </div>
                <div className="titulo_proceso">
                  <h2>CREATIVIDAD</h2>
                </div>
                <div className="imagenp">
                  <img src={paso2} alt="" className="mx-auto" />
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="body_proceso">
                <div className="head_proceso">
                  <img src={s3} className="img3 mx-auto" alt="" />
                </div>
                <div className="titulo_proceso">
                  <h2>COMPROMISO</h2>
                </div>
                <div className="imagenp">
                  <img src={paso3} alt="" className="mx-auto" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
