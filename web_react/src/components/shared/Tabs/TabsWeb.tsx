import { Link } from 'react-router-dom'
import { administrable, informatica } from '../images'
import { CSSTransition } from 'react-transition-group'
import { useState } from 'react'

export const TabsWeb = (): JSX.Element => {
  const [plan, setPlan] = useState(1)

  return (
    <section className="nosotros">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="" data-ref="mixitup-container">
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
                      PÁGINAS WEB INFORMATIVAS
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
                      PÁGINAS WEB ADMINISTRABLES
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
                      TIENDA VIRTUAL
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="content_mixitup mt-10">
                <ul className="list_mixitup" id="gallery-multimedia">
                  <CSSTransition
                    in={plan === 1}
                    timeout={300}
                    classNames="alert"
                    unmountOnExit
                  >
                    <li
                      className={`${plan === 1 ? '' : 'hidden'} "item virtual"`}
                      data-ref="mixitup-target"
                    >
                      <div className="contenido_web">
                        <div className="img_contenido_web">
                          <div>
                            <img
                              src={informatica}
                              alt=""
                              className="w-full max-h-[600px]"
                            />
                          </div>
                        </div>

                        <div className="descripcion">
                          <div className="odin">
                            <p>
                              Las <span>páginas web informativas</span> están
                              enfocadas principalmente a mostrar una información
                              permanente, donde el navegante se limita a obtener
                              dicha información sin poder interactuar con la
                              página visitada. Se recomienda a las empresas que
                              no realizan cambios de nuevos productos o
                              servicios.
                            </p>
                            <p className="">
                              Con una <span>web informativa</span> podrás tener
                              lo siguiente:
                            </p>
                            <ul>
                              <li>
                                <i className="fa fa-check-circle"></i>Deberá
                                escoger una de nuestras plantillas (Plantilla
                                Web)
                              </li>
                              <li>
                                <i className="fa fa-check-circle"></i>Web
                                responsive (adaptable para dispositivos móviles)
                              </li>
                              <li>
                                <i className="fa fa-check-circle"></i>Página web
                                preparada con técnicas de posicionamiento SEO
                              </li>
                              <li>
                                <i className="fa fa-check-circle"></i>
                                Interacción con redes sociales
                              </li>
                              <li>
                                <i className="fa fa-check-circle"></i>Ubicación
                                de su empresa a través de Google Maps
                              </li>
                              <li>
                                <i className="fa fa-check-circle"></i>Formulario
                                de contacto dinámico
                              </li>
                              <li>
                                <i className="fa fa-check-circle"></i>Chat
                                online
                              </li>
                            </ul>
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
                      className={`${plan === 2 ? '' : 'hidden'} "item virtual"`}
                      data-ref="mixitup-target"
                    >
                      <div className="contenido_web">
                        <div className="img_contenido_web">
                          <div>
                            <img
                              src={administrable}
                              alt=""
                              className="w-full max-h-[600px]"
                            />
                          </div>
                        </div>
                        <div className="descripcion">
                          <div className="odin">
                            <p>
                              Las <span>páginas web administrables</span> le
                              permitirán realizar cambios en la información de
                              su web de una manera muy simple, liberándolo de
                              las dependencias de un especialista y sin entrar
                              en pagos adicionales por actualización.
                            </p>
                            <p>
                              Con una <span>web administrativa</span> podrás
                              tener lo siguiente:
                            </p>
                            <ul>
                              <li>
                                <i className="fa fa-check-circle"></i>Deberá
                                escoger una de nuestras plantillas (Plantilla
                                Web)
                              </li>
                              <li>
                                <i className="fa fa-check-circle"></i>Web
                                responsive (adaptable para dispositivos móviles)
                              </li>
                              <li>
                                <i className="fa fa-check-circle"></i>Página web
                                preparada con técnicas de posicionamiento SEO
                              </li>
                              <li>
                                <i className="fa fa-check-circle"></i>
                                Interacción con redes sociales
                              </li>
                              <li>
                                <i className="fa fa-check-circle"></i>Ubicación
                                de su empresa a través de Google Maps
                              </li>
                              <li>
                                <i className="fa fa-check-circle"></i>Formulario
                                de contacto dinámico
                              </li>
                              <li>
                                <i className="fa fa-check-circle"></i>Chat
                                online
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </li>
                  </CSSTransition>
                  <CSSTransition
                    in={plan === 3}
                    timeout={200}
                    classNames="alert"
                    unmountOnExit
                  >
                    <li
                      className={`${plan === 3 ? '' : 'hidden'} "item virtual"`}
                      data-ref="mixitup-target"
                    >
                      <div className="contenido_web">
                        <div className="img_contenido_web">
                          <div>
                            <img
                              src={administrable}
                              alt=""
                              className="w-full max-h-[600px]"
                            />
                          </div>
                        </div>

                        <div className="descripcion">
                          <div className="odin">
                            <p>
                              Una <span>tienda virtual</span> es una aplicación
                              web que permite el comercio como la compra y venta
                              entre uno o varios usuarios a través de internet,
                              Por lo general, las compras en una tienda virtual
                              se pagan con tarjeta de crédito en el mismo sitio
                              web y luego los productos son enviados por correo.
                            </p>
                            <p>
                              Con una web <span>tienda virtual</span> podrás
                              tener lo siguiente:
                            </p>
                            <ul>
                              <li>
                                <i className="fa fa-check-circle"></i>Diseño web
                                a la medida del cliente.
                              </li>
                              <li>
                                <i className="fa fa-check-circle"></i>Web
                                responsive (Adaptable para Dispositivos
                                Móviles).
                              </li>
                              <li>
                                <i className="fa fa-check-circle"></i>Accesos de
                                su Sistema personalizado (podrá Subir, editar,
                                eliminar y bloquear tus productos).
                              </li>
                              <li>
                                <i className="fa fa-check-circle"></i>Carrito de
                                compras integrado.
                              </li>
                              <li>
                                <i className="fa fa-check-circle"></i>
                                Ubicación de la empresa o negocio a través de
                                Google Maps.
                              </li>
                              <li>
                                <i className="fa fa-check-circle"></i>
                                Formularios de Contacto Dinámico.
                              </li>
                              <li>
                                <i className="fa fa-check-circle"></i>
                                Interacción con Redes Sociales.
                              </li>
                              <li>
                                <i className="fa fa-check-circle"></i>Pasarela
                                de Pago integrada: Visa, Alignet, PayPal y Pago
                                Efectivo.
                              </li>
                            </ul>
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
