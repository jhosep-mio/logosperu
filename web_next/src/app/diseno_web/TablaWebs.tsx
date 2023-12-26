'use client'
import { useState } from 'react'
import { CSSTransition } from 'react-transition-group'

export const TablaWebs = () => {
  const [plan, setPlan] = useState(0)

  return (
    <div className='' data-ref='mixitup-container'>
      <div className='control_webs'>
        <ul className='head'>
          <li
            className={`${plan == 0 ? 'mixitup-control-active' : ''} cursor-pointer`}
            onClick={() => {
              setPlan(0)
            }}
          >
            LANDING PAGE
          </li>
          <li
            className={`${plan == 1 ? 'mixitup-control-active' : ''} cursor-pointer`}
            onClick={() => {
              setPlan(1)
            }}
          >
            PÁGINAS WEB INFORMATIVAS
          </li>
          <li
            className={`${plan == 2 ? 'mixitup-control-active' : ''} cursor-pointer`}
            onClick={() => {
              setPlan(2)
            }}
          >
            PÁGINAS WEB ADMINISTRABLES
          </li>
          <li
            className={`${plan == 3 ? 'mixitup-control-active' : ''} cursor-pointer`}
            onClick={() => {
              setPlan(3)
            }}
          >
            TIENDA VIRTUAL
          </li>
        </ul>
      </div>

      <div className='content_mixitup mt-10'>
        <ul className='list_mixitup' id='gallery-multimedia'>
          <CSSTransition
            in={plan == 0}
            timeout={300}
            classNames='alert'
            unmountOnExit
          >
            <li
              className={`${plan == 0 ? '' : 'hidden'} "item virtual"`}
              data-ref='mixitup-target'
            >
              <div className='contenido_web'>
                <div className='img_contenido_web'>
                  <div>
                    <img
                      src='/disenoweb/landing_page.png'
                      alt=''
                      className='w-full max-h-[600px]'
                    />
                  </div>
                </div>

                <div className='descripcion'>
                  <div className='odin font_baloo text-3xl '>
                    <p>
                      Una página de aterrizaje, también conocida como <span>landing page</span>, es una página web diseñada específicamente para convertir visitantes en leads o clientes, a menudo a través de una oferta específica y una llamada a la acción clara.
                    </p>
                    <p className=''>
                      Con una <span>Landing Page</span> podrás tener lo
                      siguiente:
                    </p>
                    <ul>
                      <li>
                        Deberá escoger una de nuestras plantillas (Plantilla
                        Landing Page)
                      </li>
                      <li>
                        Web responsive (adaptable para dispositivos móviles)
                      </li>
                      <li>
                        Página web preparada con técnicas de posicionamiento SEO
                      </li>
                      <li>
                        Interacción con redes sociales
                      </li>
                      <li>
                        Ubicación de su empresa a través de Google Maps
                      </li>
                      <li>
                        Formulario de contacto
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
          </CSSTransition>
          <CSSTransition
            in={plan == 1}
            timeout={300}
            classNames='alert'
            unmountOnExit
          >
            <li
              className={`${plan == 1 ? '' : 'hidden'} "item virtual"`}
              data-ref='mixitup-target'
            >
              <div className='contenido_web'>
                <div className='img_contenido_web'>
                  <div>
                    <img
                      src='/disenoweb/informativa.png'
                      alt=''
                      className='w-full max-h-[600px]'
                    />
                  </div>
                </div>

                <div className='descripcion'>
                  <div className='odin font_baloo text-3xl'>
                    <p>
                      Las <span>páginas web informativas</span> están enfocadas
                      principalmente a mostrar una información permanente, donde
                      el navegante se limita a obtener dicha información sin
                      poder interactuar con la página visitada. Se recomienda a
                      las empresas que no realizan cambios de nuevos productos o
                      servicios.
                    </p>
                    <p className=''>
                      Con una <span>web informativa</span> podrás tener lo
                      siguiente:
                    </p>
                    <ul>
                      <li>
                        Deberá escoger una de nuestras plantillas (Plantilla
                        Web)
                      </li>
                      <li>
                        Web responsive (adaptable para dispositivos móviles)
                      </li>
                      <li>
                        Página web preparada con técnicas de posicionamiento SEO
                      </li>
                      <li>
                        Interacción con redes sociales
                      </li>
                      <li>
                        Ubicación de su empresa a través de Google Maps
                      </li>
                      <li>
                        Formulario de contacto dinámico
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
          </CSSTransition>
          <CSSTransition
            in={plan == 2}
            timeout={300}
            classNames='alert'
            unmountOnExit
          >
            <li
              className={`${plan == 2 ? '' : 'hidden'} "item virtual"`}
              data-ref='mixitup-target'
            >
              <div className='contenido_web'>
                <div className='img_contenido_web'>
                  <div>
                    <img
                      src='/disenoweb/administrable.png'
                      alt=''
                      className='w-full max-h-[600px]'
                    />
                  </div>
                </div>
                <div className='descripcion'>
                  <div className='odin font_baloo text-3xl'>
                    <p>
                      Las <span>páginas web administrables</span> le permitirán
                      realizar cambios en la información de su web de una manera
                      muy simple, liberándolo de las dependencias de un
                      especialista y sin entrar en pagos adicionales por
                      actualización.
                    </p>
                    <p>
                      Con una <span>web administrativa</span> podrás tener lo
                      siguiente:
                    </p>
                    <ul>
                      <li>
                        Deberá escoger una de nuestras plantillas (Plantilla
                        Web)
                      </li>
                      <li>
                        Web responsive (adaptable para dispositivos móviles)
                      </li>
                      <li>
                        Página web preparada con técnicas de posicionamiento SEO
                      </li>
                      <li>
                        Interacción con redes sociales
                      </li>
                      <li>
                        Ubicación de su empresa a través de Google Maps
                      </li>
                      <li>
                        Formulario de contacto dinámico
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
          </CSSTransition>
          <CSSTransition
            in={plan == 3}
            timeout={200}
            classNames='alert'
            unmountOnExit
          >
            <li
              className={`${plan == 3 ? '' : 'hidden'} "item virtual"`}
              data-ref='mixitup-target'
            >
              <div className='contenido_web'>
                <div className='img_contenido_web'>
                  <div>
                    <img
                      src='/disenoweb/Tienda.png'
                      alt=''
                      className='w-full max-h-[600px]'
                    />
                  </div>
                </div>

                <div className='descripcion'>
                  <div className='odin font_baloo text-3xl'>
                    <p>
                      Una <span>tienda virtual</span> es una aplicación web que
                      permite el comercio como la compra y venta entre uno o
                      varios usuarios a través de internet, Por lo general, las
                      compras en una tienda virtual se pagan con tarjeta de
                      crédito en el mismo sitio web y luego los productos son
                      enviados por correo.
                    </p>
                    <p>
                      Con una web <span>tienda virtual</span> podrás tener lo
                      siguiente:
                    </p>
                    <ul>
                      <li>
                        Diseño web a la medida del cliente.
                      </li>
                      <li>
                        Web responsive (Adaptable para Dispositivos Móviles).
                      </li>
                      <li>
                        Accesos de su Sistema personalizado (podrá Subir,
                        editar, eliminar y bloquear tus productos).
                      </li>
                      <li>
                        Carrito de compras integrado.
                      </li>
                      <li>
                        Ubicación de la empresa o negocio a través de Google
                        Maps.
                      </li>
                      <li>
                        Formularios de Contacto Dinámico.
                      </li>
                      <li>
                        Interacción con Redes Sociales.
                      </li>
                      <li>
                        Pasarela de Pago integrada: Visa, Alignet, PayPal y Pago
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
  )
}
