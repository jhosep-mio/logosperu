'use client'
import { PreguntasWeb } from '@/components/shared/Preguntas/PreguntasWeb'
import { FormularioEnvio } from '@/components/shared/formularios/FormularioEnvio'
import { useState } from 'react'
import Swal from 'sweetalert2'

export const Formulario = () => {
  const [seleccion, setSeleccion] = useState(0)
  const [seleccionPreguntas, setseleccionPreguntas] = useState('')
  const [pagina, setPagina] = useState(1)

  const pasarPagina2 = (): void => {
    if (seleccion !== 0) {
      if (pagina == 2) {
        if (seleccionPreguntas) {
          setPagina(pagina + 1)
        } else {
          Swal.fire('Por favor seleccione un plan', '', 'warning')
        }
      } else {
        setPagina(pagina + 1)
      }
    } else {
      Swal.fire('Por favor seleccione una de las opciones', '', 'warning')
    }
  }

  return (
    <form
      name='example-1'
      method='POST'
      className='wizard-form cotizacion cotizacionFormulario'
      action='{$base_url}servicios/proceso/ventahosting'
    >
      <span className='respuesta' />
      <div id='bottom-wizard'>
        <button
          type='button'
          name='backward'
          className='backward bouncebutton2'
          disabled={pagina == 1}
          onClick={() => {
            setPagina(pagina - 1)
          }}
        >
          Anterior
        </button>
        <button
          type='button'
          name='forward'
          className='forward bouncebutton2'
          onClick={pasarPagina2}
          disabled={pagina == 3}
        >
          Siguiente
        </button>
      </div>

      <input id='website' name='website' type='text' value='' />
      <div
        id='middle-wizard'
        className='wizard-branch wizard-wrapper'
      >
        {pagina == 1
          ? (
            <div className='branch wizard-branch' id='venta-hosting'>
              <div className='step wizard-step' data-state='budget'>
                <div className='question_title'>
                  <h3>QUIERO UN HOSTING QUE SOPORTE...</h3>
                  <p>Nos ayudará a darte una mejor asesoría</p>
                </div>
                <div className='row justify-content-center'>
                  <div className='col-md-4 col-lg-4'>
                    <div className='item'>
                      <input
                        id='hosting_paso1_1'
                        type='radio'
                        name='servicio_hosting1'
                        value='Página Web Informativa'
                        className='required'
                      />
                      <label
                        className={`${
                                    seleccion == 1 ? 'aplicar_seleccion' : ''
                                  }`}
                        onClick={() => {
                          setSeleccion(1)
                        }}
                      >
                        <img
                          src='/ventaHosting/paginainformativo.png'
                          alt='Hosting para páginas web - Logos Perú'
                          width='130'
                          title='Hosting para páginas web - Logos Perú'
                        />
                        <strong>PÁGINA WEB INFORMATIVAS</strong>{' '}
                        Páginas web que no trabajan con base de datos
                      </label>
                    </div>
                  </div>

                  <div className='col-md-4 col-lg-4'>
                    <div className='item'>
                      <input
                        id='hosting_paso1_2'
                        name='servicio_hosting1'
                        type='radio'
                        value='Correos Corporativos'
                        className='required'
                      />
                      <label
                        className={`${
                                    seleccion == 2 ? 'aplicar_seleccion' : ''
                                  }`}
                        onClick={() => {
                          setSeleccion(2)
                        }}
                      >
                        <img
                          src='/ventaHosting/correoscorporativos.png'
                          alt='Hosting para Correos corporativos - Logos Perú'
                          width='130'
                          title='Hosting para Correos corporativos - Logos Perú'
                        />
                        <strong>CORREOS CORPORATIVOS</strong>Correos
                        con el dominio de su empresa. Por ejemplo:
                        persona@logosperu.com
                      </label>
                    </div>
                  </div>

                  <div className='col-md-4 col-lg-4'>
                    <div className='item'>
                      <input
                        id='hosting_paso1_3'
                        name='servicio_hosting1'
                        type='radio'
                        value='Sistema Web'
                        className='required precioTrabajo'
                      />
                      <label
                        className={`${
                                    seleccion == 3 ? 'aplicar_seleccion' : ''
                                  }`}
                        onClick={() => {
                          setSeleccion(3)
                        }}
                      >
                        <img
                          src='/ventaHosting/sistemaweb.png'
                          alt='Hosting para sistema - Logos Perú'
                          width='130'
                          title='Hosting para sistema - Logos Perú'
                        />
                        <strong>SISTEMA WEB</strong> Páginas web que
                        trabajan con base de datos
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            )
          : pagina == 2
            ? <PreguntasWeb
                seleccionPreguntas={seleccionPreguntas}
                setseleccionPreguntas={setseleccionPreguntas}
              />
            : pagina == 3
              ? (
                <FormularioEnvio
                  redireccion='/portafolio/diseno-de-paginas-web'
                  titulo='Hosting, Dominios, Correos corporativos'
                  name1='Hosting para'
                  name2='Dominio'
                  seleccionPreguntas={seleccionPreguntas}
                  seleccion={
                          seleccion == 1
                            ? 'PAGINA WEB INFORMATIVA'
                            : seleccion == 2
                              ? 'CORREOS CORPORATIVOS'
                              : seleccion == 3
                                ? 'SISTEMA WEB'
                                : ''
                        }
                />
                )
              : (
                  ''
                )}
      </div>
    </form>
  )
}
