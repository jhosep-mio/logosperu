'use client'
import { PreguntasLogos } from '@/components/shared/Preguntas/PreguntasLogos'
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
      method='post'
      className='wizard-form cotizacion cotizacionFormulario'
      action='{$base_url}servicios/proceso/logotipos'
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

      <div id='middle-wizard' className='wizard-branch wizard-wrapper'>
        {pagina == 1
          ? (
            <div className='branch wizard-branch' id='logotipo-design-paso1'>
              <div className='step wizard-step' data-state='budget'>
                <div className='question_title'>
                  <h3>SELECCIONA UNA DE LAS OPCIONES POR FAVOR</h3>
                  <p>Nos ayudará a darte una mejor asesoría</p>
                </div>
                <div className='row flex justify-center'>
                  <div className='col-lg-4'>
                    <div className='item'>
                      <input
                        id='logotipo_design_1'
                        type='radio'
                        name='opciones_diseno_logotipo'
                        value='Ya cuento con un logotipo'
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
                          src='/disenologotipo/yacuentoconlogotipo.png'
                          width='100'
                          alt='diseño de logotipo'
                          title='Diseño de Logotipo - Agencia de diseño Gráfico - logotipos'
                        />
                        <strong>YA CUENTO CON UN LOGOTIPO</strong>
                      </label>
                    </div>
                  </div>

                  <div className='col-lg-4'>
                    <div className='item'>
                      <input
                        id='branch_2_answer_2'
                        name='opciones_diseno_logotipo'
                        type='radio'
                        value='No cuento con un logotipo'
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
                          src='/disenologotipo/nocuentoconlogotipo.png'
                          width='100'
                          alt='diseño de logotipo'
                          title='Diseño de Logotipo - Agencia de diseño Gráfico - logotipos'
                        />
                        <strong>NO CUENTO CON UN LOGOTIPO</strong>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            )
          : pagina == 2
            ? (
              <PreguntasLogos
                seleccionPreguntas={seleccionPreguntas}
                setseleccionPreguntas={setseleccionPreguntas}
              />
              )
            : (
                pagina == 3 && (
                  <FormularioEnvio
                    redireccion='/portafolio/diseno-de-logotipos'
                    titulo='Diseño de Logotipo'
                    name1='Logo'
                    name2='Plan'
                    seleccionPreguntas={seleccionPreguntas}
                    seleccion={
                seleccion == 1
                  ? 'YA CUENTO CON UN LOGOTIPO'
                  : seleccion == 2
                    ? 'NO CUENTO CON UN LOGOTIPO'
                    : ''
              }
                  />
                )
              )}
      </div>
    </form>
  )
}
