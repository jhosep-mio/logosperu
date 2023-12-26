'use client'
import { PreguntasAudiovisual } from '@/components/shared/Preguntas/PreguntasAudiovisual'
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
    <>
      <form
        name='example-1'
        method='POST'
        className='wizard-form cotizacion cotizacionFormulario'
      >
        <span className='respuesta' />
        <div id='bottom-wizard mb-10'>
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

        {pagina == 1
          ? (
            <div className='flex flex-col lg:flex-row gap-0 lg:gap-10 justify-content-center items-center lg:pt-[40px]'>
              <div className='w-full h-full'>
                <div className='item'>
                  <input
                    id='audiovisual_paso1_1'
                    type='radio'
                    name='videos_institucionales1'
                    value='Videos Institucionales'
                    className='required subserviciosAudiovisual'
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
                      src='/audiovisual/1.png'
                      alt='Videos institucionales - Logos Perú'
                      width='150'
                      title='Videos institucionales - Logos Perú'
                    />
                    <strong>VIDEO CORPORATIVO</strong>Creamos videos de
                    presentación para su empresa
                  </label>
                </div>
              </div>
              <div className='w-full'>
                <div className='item'>
                  <input
                    id='audiovisual_paso1_1'
                    name='videos_institucionales1'
                    type='radio'
                    value='Creación de videos animados'
                    className='required subserviciosAudiovisual'
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
                      src='/audiovisual/2.png'
                      alt='Creación de videos animados - Logos Perú'
                      width='120'
                      title='Creación de videos animados - Logos Perú'
                    />
                    <strong>ANIMACIÓN DE LOGOS</strong>
                    Realizamos videos animados que lleguen a ser atractivos y den a conocer tu logo.
                  </label>
                </div>
              </div>

              <div className='w-full'>
                <div className='item'>
                  <input
                    id='audiovisual_paso1_3'
                    name='videos_institucionales1'
                    type='radio'
                    value='Edición de videos'
                    className='required subserviciosAudiovisual'
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
                      src='/audiovisual/3.png'
                      alt='Edición de videos - Logos Perú'
                      width='150'
                      title='Edición de videos - Logos Perú'
                    />
                    <strong>VIDEOS PROMOCIONALES</strong>Si ya cuentas con un
                    video, nos encargamos de hacerlo más dinámico e
                    interactivo
                  </label>
                </div>
              </div>
            </div>
            )
          : pagina == 2
            ? (
              <PreguntasAudiovisual
                seleccionPreguntas={seleccionPreguntas}
                setseleccionPreguntas={setseleccionPreguntas}
              />
              )
            : pagina == 3
              ? (
                <FormularioEnvio
                  redireccion='/portafolio/audiovisual'
                  titulo='Producción Audiovisual'
                  name1='Servicio'
                  name2='Tipo de video'
                  seleccionPreguntas={seleccionPreguntas}
                  seleccion={
                  seleccion == 1
                    ? 'Video corporativo'
                    : seleccion == 2
                      ? 'Animacion de videos promocionales'
                      : seleccion == 3
                        ? 'Edicion de videos'
                        : seleccion == 4
                          ? 'Sesión o retoque fotografico'
                          : ''
                }
                />
                )
              : (
                  ''
                )}
      </form>
    </>
  )
}
