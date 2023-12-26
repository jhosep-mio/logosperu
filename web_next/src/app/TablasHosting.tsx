'use client'
import { useState } from 'react'
import { CSSTransition } from 'react-transition-group'

export const TablasHosting = () => {
  const [plan, setPlan] = useState(1)

  return (
    <div className=''>
      <div className='control_hosting'>
        <ul className='head'>
          <li
            className={`${
                      plan == 1 ? 'mixitup-control-active' : ''
                    }`}
            onClick={() => {
              setPlan(1)
            }}
          >
            PLANES PERSONALES
          </li>
          <li
            className={`${
                      plan == 2 ? 'mixitup-control-active' : ''
                    }`}
            onClick={() => {
              setPlan(2)
            }}
          >
            PLANES EMPRESARIALES
          </li>
          <li
            className={`${
                      plan == 3 ? 'mixitup-control-active' : ''
                    }`}
            onClick={() => {
              setPlan(3)
            }}
          >
            PLANES CORPORATIVOS
          </li>
        </ul>
      </div>
      <div className='content_mixitup pt-32'>
        <ul className='list_mixitup'>
          <CSSTransition
            in={plan == 1}
            timeout={300}
            classNames='alert'
            unmountOnExit
          >
            <li
              className={`${
                      plan == 1 ? '' : 'hidden'
                    } "item personal"`}
              data-ref='mixitup-target'
            >
              <div className=''>
                <div className='container max-w-[1200px]'>
                  <div className='row price_inner'>
                    <div className='col-lg-4'>
                      <div className='box_item'>
                        <div className='price'>
                          <div className='free' />
                          <div className='interest_img'>
                            <img
                              src='/ventaHosting/baby.svg'
                              className='img-responsive price_img'
                              alt='img'
                            />
                            <img
                              src='/ventaHosting/babyon.svg'
                              className='img-responsive price_img_hover'
                              alt=''
                            />
                          </div>
                          <h3>BABY</h3>
                          <ul>
                            <li>
                              Espacio de Disco Duro <b>(100 MB)</b>.
                            </li>
                            <li>
                              Transferencia de Ancho de Banda Mensual{' '}
                              <b>(1 GB)</b>.
                            </li>
                            <li>
                              Redirección de E-mail <b>(Ilimitado)</b>
                              .
                            </li>
                            <li>Sin Cpanel Independiente.</li>
                            <li>
                              Entrega de Contrato <b>(En Físico)</b>.
                            </li>
                            <li>
                              Manual de Configuración de Correos
                              Corporativos <b>(POP3)</b>.
                            </li>
                            <li>
                              Configuración de Correos Corporativos{' '}
                              <b>(Remoto)</b>.
                            </li>
                            <li>x</li>
                            <li>x</li>
                            <li>x</li>
                            <li>x</li>
                            <li>x</li>
                          </ul>
                          <a
                            className='modalUltra1'
                            title='Haz click aqu&#205; para enviarnos tu consulta - Logos Perú'
                          >
                            COMPRAR{' '}
                            <i className='fa fa-arrow-right' />
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className='col-lg-4'>
                      <div className='box_item'>
                        <div className='price'>
                          <div className='free' />
                          <div className='interest_img'>
                            <img
                              src='/ventaHosting/medium.svg'
                              className='img-responsive price_img'
                              alt='img'
                            />
                            <img
                              src='/ventaHosting/mediumon.svg'
                              className='img-responsive price_img_hover'
                              alt=''
                            />
                          </div>
                          <h3>MEDIUM</h3>
                          <ul />
                          <ul>
                            <li>
                              Espacio de Disco Duro <b>(200 MB)</b>.
                            </li>
                            <li>
                              Transferencia de Ancho de Banda Mensual{' '}
                              <b>(2 GB)</b>.
                            </li>
                            <li>
                              Correos Corporativos <b>(Hasta 5)</b>.
                            </li>
                            <li>
                              Redirección de E-mail <b>(Ilimitado)</b>
                              .
                            </li>
                            <li>Sin Cpanel Independiente.</li>
                            <li>
                              Entrega de Contrato <b>(En Físico)</b>.
                            </li>
                            <li>
                              Manual de Configuración de Correos
                              Corporativos <b>(POP3).</b>
                            </li>
                            <li>
                              Configuración de Correos Corporativos{' '}
                              <b>(Remoto)</b>.
                            </li>
                            <li>x</li>
                            <li>x</li>
                            <li>x</li>
                            <li>x</li>
                          </ul>
                          <a
                            className='modalUltra1'
                            title='Haz click aqu&#205; para enviarnos tu consulta - Logos Perú'
                          >
                            COMPRAR{' '}
                            <i className='fa fa-arrow-right' />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className='col-lg-4'>
                      <div className='box_item'>
                        <div className='price'>
                          <div className='interest_img'>
                            <img
                              src='/ventaHosting/large.svg'
                              className='img-responsive price_img'
                              alt='img'
                            />
                            <img
                              src='/ventaHosting/largeon.svg'
                              className='img-responsive price_img_hover'
                              alt=''
                            />
                          </div>
                          <h3>LARGE</h3>
                          <ul />
                          <ul>
                            <li>
                              Espacio de Disco Duro <b>(500 MB)</b>.
                            </li>
                            <li>
                              Transferencia de Ancho de Banda Mensual{' '}
                              <b>(4 GB)</b>.
                            </li>
                            <li>
                              Correos Corporativos <b>(Hasta 7)</b>.
                            </li>
                            <li>
                              Alojamiento <b>(Solo 1 Dominio)</b>.
                            </li>
                            <li>
                              Redirección de E-mail <b>(Ilimitado)</b>
                              .
                            </li>
                            <li>
                              Opción de subir 1 Página Web{' '}
                              <b>
                                (Sin Sistema) Previo Análisis por
                                Nuestros Programadores Web
                              </b>
                            </li>
                            <li>Sin Cpanel Independiente.</li>
                            <li>
                              Entrega de Contrato <b>(En Físico)</b>.
                            </li>
                            <li>
                              Manual de Configuración de Correos
                              Corporativos <b>(POP3)</b>.
                            </li>
                            <li>
                              Configuración de Correos Corporativos{' '}
                              <b>(Remoto)</b>.
                            </li>
                          </ul>
                          <a
                            className='modalUltra1'
                            title='Haz click aqu&#205; para enviarnos tu consulta - Logos Perú'
                          >
                            COMPRAR{' '}
                            <i className='fa fa-arrow-right' />
                          </a>
                        </div>
                      </div>
                    </div>
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
              className={`${
                      plan == 2 ? '' : 'hidden'
                    } "item empresarial"`}
              data-ref='mixitup-target'
            >
              <div className=''>
                <div className='container'>
                  <div className='row price_inner'>
                    <div className='col-lg-4'>
                      <div className='box_item'>
                        <div className='price'>
                          <div className='free' />
                          <div className='interest_img'>
                            <img
                              src='/ventaHosting/basic1.svg'
                              className='img-responsive price_img'
                              alt='img'
                            />
                            <img
                              src='/ventaHosting/basicon2.svg'
                              className='img-responsive price_img_hover'
                              alt=''
                            />
                          </div>
                          <h3>BÁSICO</h3>
                          <ul>
                            <li>
                              Espacio de Disco Duro <b>(1 GB)</b>.
                            </li>
                            <li>
                              Transferencia de Ancho de Banda Mensual{' '}
                              <b>(20 GB)</b>
                            </li>
                            <li>
                              Correos Corporativos <b>(Hasta 10)</b>
                            </li>
                            <li>
                              Alojamiento <b>(Solo 1 Dominio)</b>.
                            </li>
                            <li>
                              Base de datos MySQL <b>(Solo 1)</b>.
                            </li>
                            <li>
                              Redirección de E-mail <b>(Ilimitado)</b>
                              .
                            </li>
                            <li>
                              Setup <b>(Gratis)</b>.
                            </li>
                            <li>Sin CPanel Independiente</li>
                            <li>
                              1 Dominio Gratis <b>(.com)</b>.
                            </li>
                            <li>
                              Entrega de Contrato <b>(En Físico)</b>.
                            </li>
                            <li>
                              Manual de Configuración de Correos
                              Corporativos <b>(POP3)</b>.
                            </li>
                            <li>
                              Configuración de Correos Corporativos{' '}
                              <b>(Remoto)</b>.
                            </li>
                          </ul>
                          <a
                            className='modalUltra1'
                            title='Haz click aqu&#205; para enviarnos tu consulta - Logos Perú'
                          >
                            COMPRAR{' '}
                            <i className='fa fa-arrow-right' />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className='col-lg-4'>
                      <div className='box_item'>
                        <div className='price'>
                          <div className='free' />
                          <div className='interest_img'>
                            <img
                              src='/ventaHosting/standar.svg'
                              className='img-responsive price_img'
                              alt='img'
                            />
                            <img
                              src='/ventaHosting/standaron.svg'
                              className='img-responsive price_img_hover'
                              alt=''
                            />
                          </div>
                          <h3>ESTANDAR</h3>

                          <ul>
                            <li>
                              Espacio de Disco Duro <b>(3 GB)</b>.
                            </li>
                            <li>
                              Transferencia de Ancho de Banda Mensual{' '}
                              <b>(40 GB)</b>
                            </li>
                            <li>
                              Correos Corporativos <b>(Hasta 20)</b>
                            </li>
                            <li>
                              Alojamiento <b>(Solo 1 Dominio)</b>.
                            </li>
                            <li>
                              Base de datos MySQL <b>(Solo 1)</b>.
                            </li>
                            <li>
                              Redirección de E-mail <b>(Ilimitado)</b>
                              .
                            </li>
                            <li>
                              Setup <b>(Gratis)</b>.
                            </li>
                            <li>Sin CPanel Independiente</li>
                            <li>
                              1 Dominio Gratis <b>(.com)</b>.
                            </li>
                            <li>
                              Manual de Configuración de Correos
                              Corporativos <b>(POP3)</b>.
                            </li>
                            <li>
                              Configuración de Correos Corporativos{' '}
                              <b>(Remoto)</b>.
                            </li>
                          </ul>
                          <a
                            className='modalUltra1'
                            title='Haz click aqu&#205; para enviarnos tu consulta - Logos Perú'
                          >
                            COMPRAR{' '}
                            <i className='fa fa-arrow-right' />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className='col-lg-4'>
                      <div className='box_item'>
                        <div className='price'>
                          <div className='interest_img'>
                            <img
                              src='/ventaHosting/profesional.svg'
                              className='img-responsive price_img'
                              alt='img'
                            />
                            <img
                              src='/ventaHosting/profesionalon.svg'
                              className='img-responsive price_img_hover'
                              alt=''
                            />
                          </div>
                          <h3>PROFESIONAL</h3>

                          <ul>
                            <li>
                              Espacio de Disco Duro <b>(5 GB)</b>.
                            </li>
                            <li>
                              Transferencia de Ancho de Banda Mensual{' '}
                              <b>(100 GB)</b>.
                            </li>
                            <li>
                              Correos Corporativos <b>(Hasta 30)</b>.
                            </li>
                            <li>
                              Alojamiento <b>(Solo 2 Dominio)</b>.
                            </li>
                            <li>
                              Base de datos MySQL <b>(Solo 2)</b>.
                            </li>
                            <li>
                              Redirección de E-mail <b>(Ilimitado)</b>
                              .
                            </li>
                            <li>
                              Setup <b>(Gratis)</b>.
                            </li>
                            <li>Sin Cpanel Independiente.</li>
                            <li>
                              1 Dominio Gratis<b> (.com)</b>.
                            </li>
                            <li>
                              Entrega de Contrato <b>(En Físico)</b>.
                            </li>
                            <li>
                              Manual de Configuración de Correos
                              Corporativos <b>(POP3)</b>.
                            </li>
                            <li>
                              Configuración de Correos Corporativos{' '}
                              <b>(Remoto)</b>.
                            </li>
                          </ul>
                          <a
                            className='modalUltra1'
                            title='Haz click aqu&#205; para enviarnos tu consulta - Logos Perú'
                          >
                            COMPRAR{' '}
                            <i className='fa fa-arrow-right' />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </CSSTransition>
          <CSSTransition
            in={plan == 3}
            timeout={300}
            classNames='alert'
            unmountOnExit
          >
            <li
              className={`${
                      plan == 3 ? '' : 'hidden'
                    } "item corporativos"`}
              data-ref='mixitup-target'
            >
              <div className=''>
                <div className='container'>
                  <div className='row price_inner'>
                    <div className='col-lg-4'>
                      <div className='box_item'>
                        <div className='price'>
                          <div className='free' />
                          <div className='interest_img'>
                            <img
                              src='/ventaHosting/profesional.svg'
                              className='img-responsive price_img'
                              alt='img'
                            />
                            <img
                              src='/ventaHosting/profesionalon.svg'
                              className='img-responsive price_img_hover'
                              alt=''
                            />
                          </div>
                          <h3>PLUS</h3>

                          <ul>
                            <li>
                              Espacio de Disco Duro <b>(20 GB)</b>.
                            </li>
                            <li>
                              Transferencia de Ancho de Banda Mensual{' '}
                              <b>(Ilimitado)</b>.
                            </li>
                            <li>
                              Correos Corporativos <b>(Hasta 100)</b>.
                            </li>
                            <li>
                              Alojamiento <b>(Solo 8 Dominio)</b>.
                            </li>
                            <li>
                              Cuentas FTP <b>(Hasta 4)</b>
                            </li>
                            <li>
                              Base de datos MySQL <b>(Solo 8)</b>.
                            </li>
                            <li>
                              Redirección de E-mail <b>(Ilimitado)</b>
                              .
                            </li>
                            <li>
                              Setup <b>(Gratis)</b>.
                            </li>
                            <li>
                              Panel de control{' '}
                              <b>(Propiedad del Cliente)</b>
                            </li>
                            <li>
                              1 Dominio Gratis<b> (.com)</b>.
                            </li>
                            <li>
                              Entrega de Contrato <b>(En Físico)</b>.
                            </li>
                            <li>
                              Manual de Configuración de Correos
                              Corporativos <b>(POP3)</b>.
                            </li>
                            <li>
                              Configuración de Correos Corporativos{' '}
                              <b>(Remoto)</b>.
                            </li>
                          </ul>
                          <a
                            className='modalUltra1'
                            title='Haz click aqu&#205; para enviarnos tu consulta - Logos Perú'
                          >
                            COMPRAR{' '}
                            <i className='fa fa-arrow-right' />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className='col-lg-4'>
                      <div className='box_item'>
                        <div className='price'>
                          <div className='free' />
                          <div className='interest_img'>
                            <img
                              src='/ventaHosting/corporative.svg'
                              className='img-responsive price_img'
                              alt='img'
                            />
                            <img
                              src='/ventaHosting/corporativeon.svg'
                              className='img-responsive price_img_hover'
                              alt=''
                            />
                          </div>
                          <h3>CORPORATIVO</h3>
                          <ul>
                            <li>
                              <h2>S/ A convenir / ANUAL</h2>
                            </li>
                          </ul>
                          <ul>
                            <li>
                              Espacio de Disco Duro <b>(60 GB)</b>.
                            </li>
                            <li>
                              Transferencia de Ancho de Banda Mensual{' '}
                              <b>(Ilimitado)</b>.
                            </li>
                            <li>
                              Correos Corporativos <b>(Ilimitado)</b>.
                            </li>
                            <li>
                              Alojamiento <b>(Hasta 12 Dominios)</b>.
                            </li>
                            <li>
                              Cuentas FTP <b>(Hasta 6)</b>
                            </li>

                            <li>
                              Base de datos MySQL <b>(Hasta 12)</b>.
                            </li>
                            <li>
                              Redirección de E-mail <b>(Ilimitado)</b>
                              .
                            </li>
                            <li>
                              Setup <b>(Gratis)</b>.
                            </li>

                            <li>
                              Panel de control{' '}
                              <b>(Propiedad del Cliente)</b>.
                            </li>
                            <li>
                              1 Dominio Gratis<b> (.com)</b>.
                            </li>

                            <li>
                              Entrega de Contrato <b>(En Físico)</b>.
                            </li>
                            <li>
                              Manual de Configuración de Correos
                              Corporativos <b>(POP3)</b>.
                            </li>
                            <li>
                              Configuración de Correos Corporativos{' '}
                              <b>
                                (1 Profesional visitará su Empresa
                                para la Configuración)
                              </b>
                              .
                            </li>
                          </ul>
                          <a
                            className='modalUltra1'
                            title='Haz click aqu&#205; para enviarnos tu consulta - Logos Perú'
                          >
                            COMPRAR{' '}
                            <i className='fa fa-arrow-right' />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className='col-lg-4'>
                      <div className='box_item'>
                        <div className='price'>
                          <div className='interest_img'>
                            <img
                              src='/ventaHosting/ultra.svg'
                              className='img-responsive price_img'
                              alt='img'
                            />
                            <img
                              src='/ventaHosting/ultraon.svg'
                              className='img-responsive price_img_hover'
                              alt=''
                            />
                          </div>
                          <h3>ULTRA</h3>
                          <ul>
                            <li>
                              <h2>S/ A convenir / ANUAL</h2>
                            </li>
                          </ul>
                          <ul>
                            <li>
                              Espacio de Disco Duro <b>(Ilimitado)</b>
                              .
                            </li>
                            <li>
                              Transferencia de Ancho de Banda Mensual{' '}
                              <b>(Ilimitado)</b>.
                            </li>
                            <li>
                              Correos Corporativos <b>(Ilimitado)</b>.
                            </li>
                            <li>
                              Alojamiento <b>(Dominios Ilimitados)</b>
                              .
                            </li>
                            <li>
                              Cuentas FTP <b>(Ilimitado)</b>
                            </li>
                            <li>
                              Base de datos MySQL <b>(Hasta 20)</b>.
                            </li>
                            <li>
                              Redirección de E-mail <b>(Ilimitado)</b>
                              .
                            </li>
                            <li>
                              Setup <b>(Gratis)</b>.
                            </li>
                            <li>
                              Panel de control
                              <b> (Propiedad del Cliente)</b>
                            </li>
                            <li>
                              1 Dominio Gratis<b> (.com)</b>.
                            </li>
                            <li>
                              Certificado SSL{' '}
                              <b>(Seguridad de Portal Web)</b>
                            </li>
                            <li>
                              Entrega de Contrato <b>(En Físico)</b>.
                            </li>
                            <li>
                              Manual de Configuración de Correos
                              Corporativos <b>(POP3)</b>.
                            </li>
                            <li>
                              Configuración de Correos Corporativos
                              <b>
                                {' '}
                                (1 Profesional visitará su Empresa
                                para la Configuración)
                              </b>
                              .
                            </li>
                          </ul>
                          <a
                            className='modalUltra1'
                            title='Haz click aqu&#205; para enviarnos tu consulta - Logos Perú'
                          >
                            COMPRAR{' '}
                            <i className='fa fa-arrow-right' />
                          </a>
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
  )
}
