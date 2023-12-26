import { Link } from 'react-router-dom'
import { faqbl, videoconferenceb, wandbl } from '../images'
import { CSSTransition } from 'react-transition-group'
import { useState } from 'react'

export const TabsAudiovisual = (): JSX.Element => {
  const [plan, setPlan] = useState(1)

  return (
    <section className="bg-[#F5F5F5] py-24">
      <div className="container max-w-[1200px] mx-auto">
        <div className="row">
          <div className="col-lg-12">
            <div className="" data-ref="mixitup-container3">
              <div className="control_webs">
                <ul className="head">
                  <li>
                    <Link
                      to="#"
                      className={`${
                        plan === 1 ? 'mixitup-control-active' : ''
                      }`}
                      onClick={() => {
                        setPlan(1)
                      }}
                    >
                      VIDEO CORP. ANIMADO
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="#"
                      className={`${
                        plan === 2 ? 'mixitup-control-active' : ''
                      }`}
                      onClick={() => {
                        setPlan(2)
                      }}
                    >
                      VIDEO CORP. GRABADO
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="#"
                      className={`${
                        plan === 3 ? 'mixitup-control-active' : ''
                      }`}
                      onClick={() => {
                        setPlan(3)
                      }}
                    >
                      ANIMACIÓN DE VIDEO PROMOCIONAL
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="#"
                      className={`${
                        plan === 4 ? 'mixitup-control-active' : ''
                      }`}
                      onClick={() => {
                        setPlan(4)
                      }}
                    >
                      EDICIÓN DE VIDEO
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="content_mixitup mt-24">
                <ul className="list_mixitup">
                  <CSSTransition
                    in={plan === 1}
                    timeout={300}
                    classNames="alert"
                    unmountOnExit
                  >
                    <li
                      className={`${
                        plan === 1 ? '' : 'hidden'
                      } "item videoanimado"`}
                      data-ref="mixitup-target"
                    >
                      <div className="contenido_audiovisual">
                        <div className="container ">
                          <div className="row">
                            <div className="col-lg-12">
                              <div className="titulo_opcion">
                                <h2>VÍDEO CORPORATIVO ANIMADO</h2>
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
                                  Los <span>videos corporativos animados</span>{' '}
                                  obtienen muy buenos resultados por su forma
                                  didáctica y entretenida de explicar lo que las
                                  empresas quieren transmitir, ya sea en sus
                                  procesos, actividades u organización.
                                </p>
                              </div>
                            </div>
                            <div className="col-lg-4">
                              <div className="box_item">
                                <div className="box_cabeza">
                                  <img src={faqbl} alt="diseño de logotipo" />
                                </div>
                                <div className="box_body flex items-center justify-center box_modifcate">
                                  <p className="">
                                    Se enviará un <b>cuestionario</b> con la
                                    finalidad de obtener la información
                                    requerida para el{' '}
                                    <strong>
                                      desarrollo del guión literario
                                    </strong>
                                    , el cual podrá realizarle{' '}
                                    <strong>modificaciones.</strong>
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-4">
                              <div className="box_item">
                                <div className="box_cabeza">
                                  <img src={wandbl} alt="diseño de logotipo" />
                                </div>
                                <div className="box_body items-center justify-center box_modifcate">
                                  <p>
                                    Luego se iniciara con la{' '}
                                    <b>animación del video</b> en la cual se
                                    seleccionarán imágenes, efectos y fondos que
                                    se utilizarán en el video, teniendo en
                                    cuenta los{' '}
                                    <strong>colores corporativos</strong> de la
                                    empresa.
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-4">
                              <div className="box_item">
                                <div className="box_cabeza">
                                  <img
                                    src={videoconferenceb}
                                    alt="diseño de logotipo"
                                  />
                                </div>
                                <div className="box_body items-center justify-center box_modifcate">
                                  <p>
                                    Al finalizar se hará{' '}
                                    <b>entrega del video corporativo</b>{' '}
                                    completo, ya modificado y{' '}
                                    <strong>aprobado por usted.</strong>
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  </CSSTransition>

                  <CSSTransition
                    in={plan === 2}
                    timeout={300}
                    classNames="alert"
                    unmountOnExit
                  >
                    <li
                      className={`${
                        plan === 2 ? '' : 'hidden'
                      } "item videograbado"`}
                      data-ref="mixitup-target"
                    >
                      <div className="contenido_audiovisual">
                        <div className="container">
                          <div className="row">
                            <div className="col-lg-12">
                              <div className="titulo_opcion">
                                <h2>VÍDEO CORPORATIVO GRABADO</h2>
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
                                  Los <b>videos corporativos grabados</b>{' '}
                                  permiten{' '}
                                  <strong>
                                    conocer de forma completa a una empresa
                                  </strong>
                                  , ya sea sus instalaciones, personal de
                                  trabajo y las personas que la representan. Es
                                  importante que una empresa cuente con un video
                                  para{' '}
                                  <strong>
                                    diferenciarse de su competencia
                                  </strong>
                                  , resaltando su ventaja diferencial y los
                                  servicios que brinda.
                                </p>
                              </div>
                            </div>
                            <div className="col-lg-4">
                              <div className="box_item">
                                <div className="box_cabeza">
                                  <img
                                    src={faqbl}
                                    alt="diseño de logotipo"
                                  />
                                </div>
                                <div className="box_body flex items-center justify-center box_modifcate">
                                  <p>
                                    Se enviará un <b>cuestionario</b> con la
                                    finalidad de obtener la información
                                    requerida para la creación del{' '}
                                    <strong>guion literario</strong>, el cual
                                    podrá realizarle{' '}
                                    <strong>modificaciones</strong>; luego se
                                    desarrollará el{' '}
                                    <strong>guion técnico</strong>, el{' '}
                                    <strong>
                                      plan de producción y rodaje.
                                    </strong>
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-4">
                              <div className="box_item">
                                <div className="box_cabeza">
                                  <img
                                    src={wandbl}
                                    alt="diseño de logotipo"
                                  />
                                </div>
                                <div className="box_body flex items-center justify-center box_modifcate">
                                  <p>
                                    <b>Recolección y creación de elementos</b>{' '}
                                    que requiera la realización del video, ya
                                    sea: Grabación de video, locución en off,
                                    efectos de sonidos, música de fondo,
                                    fotografías, etc.
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-4">
                              <div className="box_item">
                                <div className="box_cabeza">
                                  <img
                                    src={videoconferenceb}
                                    alt="diseño de logotipo"
                                  />
                                </div>
                                <div className="box_body flex items-center justify-center box_modifcate">
                                  <p>
                                    El material obtenido de las grabaciones
                                    serán <b>editadas de manera secuencial</b>{' '}
                                    de acuerdo al guion, al culminar te{' '}
                                    <strong>
                                      enviaremos el video corporativo
                                    </strong>{' '}
                                    para su aprobación. (Podrás realizar
                                    cambios).
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  </CSSTransition>

                  <CSSTransition
                    in={plan === 3}
                    timeout={300}
                    classNames="alert"
                    unmountOnExit
                  >
                    <li
                      className={`${
                        plan === 3 ? '' : 'hidden'
                      } "item videopromocional"`}
                      data-ref="mixitup-target"
                    >
                      <div className="contenido_audiovisual">
                        <div className="container">
                          <div className="row">
                            <div className="col-lg-12">
                              <div className="titulo_opcion">
                                <h2>ANIMACIÓN DE VIDEO PROMOCIONAL</h2>
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
                                  El <span>video promocional animado</span>{' '}
                                  sirve para promocionar un{' '}
                                  <span>servicio o producto</span> en específico
                                  de manera interactiva y dinámica, sin perder
                                  la esencia de su empresa. Es imprescindible
                                  contar con un video de este tipo en la era
                                  digital en que nos encontramos actualmente.
                                </p>
                              </div>
                            </div>
                            <div className="col-lg-4">
                              <div className="box_item">
                                <div className="box_cabeza">
                                  <img
                                    src={faqbl}
                                    alt="diseño de logotipo"
                                  />
                                </div>
                                <div className="box_body flex items-center justify-center box_modifcate">
                                  <p>
                                    Se enviará un <b>cuestionario</b> con la
                                    finalidad de obtener los{' '}
                                    <strong>
                                      datos específicos de la promoción
                                    </strong>{' '}
                                    para el desarrollo del{' '}
                                    <strong>guion literario</strong>, el cual
                                    podrá realizar{' '}
                                    <strong>modificaciones.</strong>
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-4">
                              <div className="box_item">
                                <div className="box_cabeza">
                                  <img
                                    src={wandbl}
                                    alt="diseño de logotipo"
                                  />
                                </div>
                                <div className="box_body flex items-center justify-center box_modifcate">
                                  <p>
                                    Luego de aprobar el guion, se inicia con la{' '}
                                    <b>animación del video</b> en la cual se
                                    seleccionarán imágenes, efectos y fondos que
                                    se utilizarán en el video, teniendo en
                                    cuenta los{' '}
                                    <strong>colores corporativos</strong> de la
                                    empresa.
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-4">
                              <div className="box_item">
                                <div className="box_cabeza">
                                  <img
                                    src={videoconferenceb}
                                    alt="diseño de logotipo"
                                  />
                                </div>
                                <div className="box_body flex items-center justify-center box_modifcate">
                                  <p>
                                    Al finalizar se le hará{' '}
                                    <b>entrega del video promocional</b>{' '}
                                    completo, ya modificado y aprobado por
                                    usted.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  </CSSTransition>

                  <CSSTransition
                    in={plan === 4}
                    timeout={300}
                    classNames="alert"
                    unmountOnExit
                  >
                    <li
                      className={`${
                        plan === 4 ? '' : 'hidden'
                      } "item videoedicion"`}
                      data-ref="mixitup-target"
                    >
                      <div className="contenido_audiovisual">
                        <div className="container">
                          <div className="row">
                            <div className="col-lg-12">
                              <div className="titulo_opcion">
                                <h2>EDICIÓN DE VIDEO</h2>
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
                                  En la <span>edición de video</span>{' '}
                                  analizaremos el video,{' '}
                                  <span>seleccionaremos sus mejores tomas</span>{' '}
                                  para mejorarlas, ya sea por la baja
                                  exposición, sobreexposición, falta de
                                  contraste o colerización. Muchas de estas
                                  fallas se producen por{' '}
                                  <span>defectos técnicos</span> pero pueden
                                  solucionarse en el momento de la{' '}
                                  <span>edición</span> con la finalidad de{' '}
                                  <span>
                                    optimizarlas y obtener un buen material.
                                  </span>
                                </p>
                              </div>
                            </div>
                            <div className="col-lg-4">
                              <div className="box_item">
                                <div className="box_cabeza">
                                  <img
                                    src={faqbl}
                                    alt="diseño de logotipo"
                                  />
                                </div>
                                <div className="box_body flex items-center justify-center box_modifcate">
                                  <p>
                                    <b>Análisis del material</b> obtenido por el
                                    cliente, se enviará un{' '}
                                    <strong>cuestionario</strong> con la
                                    finalidad de obtener la información
                                    requerida para el{' '}
                                    <strong>
                                      desarrollo del guión literario
                                    </strong>
                                    , el cual podrá realizarle{' '}
                                    <strong>modificaciones.</strong>
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-4">
                              <div className="box_item">
                                <div className="box_cabeza">
                                  <img
                                    src={wandbl}
                                    alt="diseño de logotipo"
                                  />
                                </div>
                                <div className="box_body flex items-center justify-center box_modifcate">
                                  <p>
                                    <b>Recolección y creación de elementos</b>{' '}
                                    que requiera la edición del video, ya sea:
                                    Locución en off, efectos de sonidos, música
                                    de fondo, fotografías, etc.
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-4">
                              <div className="box_item">
                                <div className="box_cabeza">
                                  <img
                                    src={videoconferenceb}
                                    alt="diseño de logotipo"
                                  />
                                </div>
                                <div className="box_body flex items-center justify-center box_modifcate">
                                  <p>
                                    El material obtenido por el cliente será{' '}
                                    <b>editado de manera secuencial</b> de
                                    acuerdo al guion, al culminar le{' '}
                                    <strong>enviaremos el video</strong> editado
                                    para su aprobación. (Se podrá realizar
                                    modificaciones).
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  </CSSTransition>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
