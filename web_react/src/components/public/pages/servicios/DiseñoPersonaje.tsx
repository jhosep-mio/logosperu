import { useEffect } from 'react'
import {
  tituloPersonaje2,
  fantasma,
  tituloPersonaje,
  espanta,
  TITULO3,
  paso1,
  paso2,
  paso3,
  s1,
  s2,
  s3
} from '../../../shared/images'

export const DiseñoPersonaje = (): JSX.Element => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <section className="descrip_facebok_ads pt-60 md:pt-72">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h1>DISEÑO DE PERSONAJES O MASCOTA DIGITAL</h1>
              <hr className="hr_first" />
              <hr className="hr_second" />
              <div className="cont_descrip_facebok_ads">
                <p>
                  Realizamos el diseño de tu
                  <span> mascota o personaje digital </span> ya sea para tu
                  negocio o publicidad, el servicio cuenta con
                  <span> diseñadores e ilustradores profesionales</span> listos
                  para crear el personaje perfecto para ti. Comienza este
                  proyecto de diseño de personajes hoy y obtén un personaje que
                  te encantará.
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

      <section className="sec_porque">
        <div className="container max-w-[1200px]">
          <div className="row">
            <div className="col-lg-12">
              <div className="row">
                <div className="col-lg-7">
                  <div className="persona_titulo">
                    <img
                      className="change1 mx-auto"
                      src={tituloPersonaje}
                      alt=""
                      width="100%"
                    />
                  </div>
                  <div className="personaje_texto">
                    <p>
                      Deje que nuestra experiencia lo guie a través de un
                      proceso de planificación para su nueva mascota o
                      personaje. Sabemos qué tipo de cosas funcionan para
                      diferentes industrias y cuáles no. Podemos aconsejarle
                      sobre ideas par probar y otras para evitar. Conocemos y
                      entendemos qué tipo de cualidades de diseño atraen a las
                      personas.
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
              <img className="mx-auto" src={tituloPersonaje2} alt="" />
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
                      PROTOTIPADO DE PERSONAJES <br />
                      Definir qué personaje ilustrar
                      <br />
                      para luego digitalizar
                    </p>
                  </li>
                  <li>
                    <p>
                      DEFINIR CONCEPTOS
                      <br />
                      Análisis del BRIEF
                      <br />
                      Que desea trasmitir
                      <br />
                      primeros bocetos del personaje
                      <br />
                      definir características visuales
                      <br />
                      importantes del personaje.
                    </p>
                  </li>
                  <li>
                    <p>
                      DIGITALIZAR
                      <br />
                      Se define detalles y aspecto visual
                      <br />
                      Colores (Transmitir su carácter
                      <br />y sus características esenciales)
                    </p>
                  </li>
                  <li>
                    <p>
                      MÁS CREATIVIDAD
                      <br />
                      Con diseñadores de personajes
                      <br />
                      PROFESIONALES , recibirá las mejores
                      <br />
                      ideas de personajes: solo necesita
                      <br />
                      elegir lo mejor.
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
              <img src={TITULO3} alt="" className="mx-auto" />
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
                  <img
                    src={s1}
                    className="img1 mx-auto"
                    alt=""
                  />
                </div>
                <div className="titulo_proceso">
                  <h2>BRIEF</h2>
                </div>
                <div className="imagenp">
                  <img src={paso1} alt="" className='mx-auto'/>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="body_proceso">
                <div className="head_proceso">
                  <img
                    src={s2}
                    className="img2 mx-auto"
                    alt=""
                  />
                </div>
                <div className="titulo_proceso">
                  <h2>PROTOTIPADO</h2>
                </div>
                <div className="imagenp">
                  <img src={paso2} alt="" className='mx-auto'/>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="body_proceso">
                <div className="head_proceso">
                  <img
                    src={s3}
                    className="img3 mx-auto"
                    alt=""
                  />
                </div>
                <div className="titulo_proceso">
                  <h2>DIGITALIZAR</h2>
                </div>
                <div className="imagenp">
                  <img src={paso3} alt="" className='mx-auto'/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
