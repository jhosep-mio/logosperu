'use client'
import { Preguntasweb2 } from '@/components/shared/Preguntas/PreguntasWeb2'
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
      action='{$base_url}servicios/proceso/desarrolloweb'
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
            <div className='branch wizard-branch' id='web-page'>
              <div className='step wizard-step' data-state='budget'>
                <div className='question_title'>
                  <h3>¿QUÉ TIPO DE PÁGINA WEB ESTÁS BUSCANDO?</h3>
                  <p>Nos ayudará a darte una mejor asesoría</p>
                </div>
                <div className='row justify-content-center'>
                  <div className='col-md-4 col-lg-4'>
                    <div className='item'>
                      <input
                        id='web_paso1_1'
                        type='radio'
                        name='desarrollo_web'
                        value='Página web informativas'
                        className='required subserviciosDesarrollo'
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
                          width='80'
                          alt='diseño y desarrollo de paginas web - logos perú'
                          title='Página web informativas - Logo Perú'
                        />
                        <strong>PÁGINA WEB INFORMATIVAS</strong>están
                        enfocadas principalmente a mostrar una
                        información permanente
                      </label>
                    </div>
                  </div>
                  <div className='col-md-4 col-lg-4'>
                    <div className='item'>
                      <input
                        id='web_paso1_2'
                        name='desarrollo_web'
                        type='radio'
                        value='Página web administrables'
                        className='required subserviciosDesarrollo'
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
                          src='/disenoweb/paginadministrable.png'
                          width='80'
                          alt='diseño y desarrollo de paginas web - logos perú'
                          title='Página web administrables - Logos Perú'
                        />
                        <strong>PÁGINA WEB ADMINISTRABLES</strong>
                        Podrá realizar cambios en la información de su
                        web de manera fácil
                      </label>
                    </div>
                  </div>
                  <div className='col-md-4 col-lg-4'>
                    <div className='item'>
                      <input
                        id='web_paso1_3'
                        name='desarrollo_web'
                        type='radio'
                        value='Tiendas virtuales'
                        className='required subserviciosDesarrollo'
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
                          src='/disenoweb/tiendavirtuales.png'
                          alt='diseño y desarrollo de paginas web - logos perú'
                          width='80'
                          title='Tiendas virtuales - Logos Perú'
                        />
                        <strong>TIENDAS VIRTUALES</strong>Perfecto
                        para vender tus productos por internet
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            )
          : pagina == 2
            ? (
              <Preguntasweb2
                seleccionPreguntas={seleccionPreguntas}
                setseleccionPreguntas={setseleccionPreguntas}
              />
              )
            : pagina == 3
              ? (
                <FormularioEnvio
                  redireccion='/portafolio/diseno-de-paginas-web'
                  titulo='Diseño de pagina web'
                  name1='Web'
                  name2='Web de referencia'
                  seleccionPreguntas={seleccionPreguntas}
                  seleccion={
            seleccion == 1
              ? 'Informativa'
              : seleccion == 2
                ? 'Administrable'
                : seleccion == 3
                  ? 'Tienda virtual'
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
