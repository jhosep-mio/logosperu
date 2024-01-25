import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import { Dispatch, SetStateAction } from 'react'
import { IoCloseCircleOutline } from 'react-icons/io5'
import { LuBadgeCheck } from 'react-icons/lu'

interface valuesProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  selected: number;
}

export const Modals = ({ open, setOpen, selected }: valuesProps) => {
  const handleClose = () => {
    setOpen(false)
  }

  const RedirigirWsp = (seleccion: number): void => {
    const numero = '+51987038024' // Reemplaza con el número de teléfono en formato internacional sin el signo + o 00.
    let mensaje = '' // Tu mensaje.
    if (seleccion == 1) {
      mensaje =
        'Hola, estoy interesado(a) en obtener más información sobre el Plan de Comunity Manager Cobre.'
    } else if (seleccion == 2) {
      mensaje =
        'Hola, estoy interesado(a) en obtener más información sobre el Plan de Comunity Manager Silver.'
    } else if (seleccion == 3) {
      mensaje =
        'Hola, estoy interesado(a) en obtener más información sobre el Plan de Comunity Manager Golden.'
    }
    // Codificar el mensaje para URL
    const mensajeCodificado = encodeURIComponent(mensaje)
    // Construir la URL completa
    const urlWhatsApp = `https://wa.me/${numero}?text=${mensajeCodificado}`
    // Abrir la nueva pestaña con la URL
    window.open(urlWhatsApp, '_blank')
  }

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby='alert-dialog-title'
      aria-describedby='alert-dialog-description'
      className='modal_planes_logos'
    >
      <DialogContent>
        {selected == 1
          ? (
            <div className='w-full border-2 bg-gray-100 border-gray-500/30 py-8 px-10 rounded-3xl lg:-mr-5 relative'>
              <div className='mb-8 text-center space-y-3'>
                <h4 className='text-secondary/90 text-6xl font_baloo'>
                  PLAN <span className='text-primary'>COBRE</span>
                </h4>
              </div>
              <ul className='space-y-3 mb-8'>
                <li className='flex items-center gap-4 '>
                  <LuBadgeCheck size={20} className='text-3xl text-secondary' />
                  <span className='text-3xl text-secondary font_baloo'>
                    3 Publicaciones por semana <strong> (Lunes a Sábado)</strong>
                  </span>
                </li>
                <li className='flex items-center gap-4'>
                  <LuBadgeCheck size={20} className='text-3xl text-secondary' />
                  <span className='text-3xl w-full flex-1 font_baloo'>
                    Diseño de Flyer o Post{' '}
                    <strong>(Entregable cronograma)</strong>
                  </span>
                </li>
                <li className='flex items-center gap-4 '>
                  <LuBadgeCheck size={20} className='text-3xl text-secondary' />
                  <span className='text-3xl w-full flex-1 font_baloo'>
                    <strong>Respuestas o Comentarios a potenciales</strong>{' '}
                    (clientes o seguidores)
                  </span>
                </li>
                <li className='flex items-center gap-4'>
                  <LuBadgeCheck size={20} className='text-3xl text-secondary' />
                  <span className='text-3xl w-full flex-1 font_baloo'>
                    <strong>1 Diseño de Perfil</strong> (facebook - instagram)
                  </span>
                </li>
                <li className='flex items-center gap-4'>
                  <LuBadgeCheck size={20} className='text-3xl text-secondary' />
                  <span className='text-3xl w-full flex-1 font_baloo'>
                    <strong>1 Diseño de portada</strong> (facebook - WSP Bussines)
                  </span>
                </li>
                <li className='flex items-center gap-4'>
                  <LuBadgeCheck size={20} className='text-3xl text-secondary' />

                  <span className='text-3xl w-full flex-1 font_baloo'>
                    <strong>Asesoria en creación de redes</strong> (facebook -
                    instagram)
                  </span>
                </li>
              </ul>
              <button
                type='button'
                onClick={() => RedirigirWsp(1)}
                className='w-full border-2 border-secondary py-4 rounded-full my-5 hover:bg-secondary hover:text-white transition-colors duration-300'
              >
                Comprar
              </button>
              <span
                className='absolute top-6 right-6 text-5xl cursor-pointer text-primary'
                onClick={handleClose}
              >
                <IoCloseCircleOutline />
              </span>
            </div>
            )
          : selected == 2
            ? (
              <div className='w-full border-2 bg-gray-100 border-gray-500/30 py-8 px-10 rounded-3xl lg:-mr-5 relative'>
                <div className='mb-8 text-center space-y-3'>
                  <h4 className='text-secondary/90 text-6xl font_baloo'>
                    PLAN <span className='text-primary'>COBRE</span>
                  </h4>
                </div>
                <ul className='space-y-3 mb-8'>
                  <li className='flex items-center gap-4 '>
                    <LuBadgeCheck size={20} className='text-3xl text-secondary' />
                    <span className='text-3xl text-secondary font_baloo'>
                      3 Publicaciones por semana <strong> (Lunes a Sábado)</strong>
                    </span>
                  </li>
                  <li className='flex items-center gap-4'>
                    <LuBadgeCheck size={20} className='text-3xl text-secondary' />
                    <span className='text-3xl w-full flex-1 font_baloo'>
                      Diseño de Flyer o Post{' '}
                      <strong>(Entregable cronograma)</strong>
                    </span>
                  </li>
                  <li className='flex items-center gap-4 '>
                    <LuBadgeCheck size={20} className='text-3xl text-secondary' />
                    <span className='text-3xl w-full flex-1 font_baloo'>
                      <strong>Respuestas o Comentarios a potenciales</strong>{' '}
                      (clientes o seguidores)
                    </span>
                  </li>
                  <li className='flex items-center gap-4'>
                    <LuBadgeCheck size={20} className='text-3xl text-secondary' />
                    <span className='text-3xl w-full flex-1 font_baloo'>
                      <strong>1 Diseño de Perfil</strong> (facebook - instagram)
                    </span>
                  </li>
                  <li className='flex items-center gap-4'>
                    <LuBadgeCheck size={20} className='text-3xl text-secondary' />
                    <span className='text-3xl w-full flex-1 font_baloo'>
                      <strong>1 Diseño de portada</strong> (facebook - WSP Bussines)
                    </span>
                  </li>
                  <li className='flex items-center gap-4'>
                    <LuBadgeCheck size={20} className='text-3xl text-secondary' />

                    <span className='text-3xl w-full flex-1 font_baloo'>
                      <strong>1 Desarrollo de Reel max. 10s</strong> (dentro del mes)
                    </span>
                  </li>
                  <li className='flex items-center gap-4'>
                    <LuBadgeCheck size={20} className='text-3xl text-secondary' />

                    <span className='text-3xl w-full flex-1 font_baloo'>
                      <strong>Desarrollo de respuestas</strong> (Fan Page)
                    </span>
                  </li>
                  <li className='flex items-center gap-4'>
                    <LuBadgeCheck size={20} className='text-3xl text-secondary' />

                    <span className='text-3xl w-full flex-1 font_baloo'>
                      <strong>Asesoria en creación de redes</strong> (facebook -
                      instagram - Tik Tok)
                    </span>
                  </li>
                  <li className='flex items-center gap-4'>
                    <LuBadgeCheck size={20} className='text-3xl text-secondary' />

                    <span className='text-3xl w-full flex-1 font_baloo'>
                      <strong>Reporte de metricas - Quincenal</strong>
                    </span>
                  </li>
                </ul>
                <button
                  type='button'
                  onClick={() => RedirigirWsp(2)}
                  className='w-full border-2 border-secondary py-4 rounded-full my-5 hover:bg-secondary hover:text-white transition-colors duration-300'
                >
                  Comprar
                </button>
                <span
                  className='absolute top-6 right-6 text-5xl cursor-pointer text-primary'
                  onClick={handleClose}
                >
                  <IoCloseCircleOutline />
                </span>
              </div>
              )
            : selected == 3
              ? (
                <div className='w-full border-2 bg-gray-100 border-gray-500/30 py-8 px-10 rounded-3xl lg:-mr-5 relative'>
                  <div className='mb-8 text-center space-y-3'>
                    <h4 className='text-secondary/90 text-6xl font_baloo'>
                      PLAN <span className='text-primary'>GOLDEN</span>
                    </h4>
                  </div>
                  <ul className='space-y-3 mb-8'>
                    <li className='flex items-center gap-4 '>
                      <LuBadgeCheck size={20} className='text-3xl text-secondary' />
                      <span className='text-3xl text-secondary font_baloo'>
                        5 Publicaciones por semana - Incluye retoque fotográfico<strong> (Lunes a Sábado)</strong>
                      </span>
                    </li>
                    <li className='flex items-center gap-4'>
                      <LuBadgeCheck size={20} className='text-3xl text-secondary' />
                      <span className='text-3xl w-full flex-1 font_baloo'>
                        <strong>Investigación Digital</strong>
                      </span>
                    </li>
                    <li className='flex items-center gap-4 '>
                      <LuBadgeCheck size={20} className='text-3xl text-secondary' />
                      <span className='text-3xl w-full flex-1 font_baloo'>
                        <strong>Análisis de Marketing Digital</strong>{' '}
                        (Documentación, Linea Grafica)
                      </span>
                    </li>
                    <li className='flex items-center gap-4'>
                      <LuBadgeCheck size={20} className='text-3xl text-secondary' />
                      <span className='text-3xl w-full flex-1 font_baloo'>
                        <strong>1 Diseño de Perfil</strong> (facebook - instagram)
                      </span>
                    </li>
                    <li className='flex items-center gap-4'>
                      <LuBadgeCheck size={20} className='text-3xl text-secondary' />
                      <span className='text-3xl w-full flex-1 font_baloo'>
                        <strong>Diseño de Flyer o Post</strong> (Entregable cronograma)
                      </span>
                    </li>
                    <li className='flex items-center gap-4'>
                      <LuBadgeCheck size={20} className='text-3xl text-secondary' />

                      <span className='text-3xl w-full flex-1 font_baloo'>
                        <strong>Respuestas o Comentarios</strong>
                      </span>
                    </li>
                    <li className='flex items-center gap-4'>
                      <LuBadgeCheck size={20} className='text-3xl text-secondary' />

                      <span className='text-3xl w-full flex-1 font_baloo'>
                        <strong>1 Diseño de Perfil</strong> (facebook - instagram)
                      </span>
                    </li>
                    <li className='flex items-center gap-4'>
                      <LuBadgeCheck size={20} className='text-3xl text-secondary' />

                      <span className='text-3xl w-full flex-1 font_baloo'>
                        <strong>1 Diseño de portada</strong> (facebook - WSP Bussines)
                      </span>
                    </li>
                    <li className='flex items-center gap-4'>
                      <LuBadgeCheck size={20} className='text-3xl text-secondary' />

                      <span className='text-3xl w-full flex-1 font_baloo'>
                        <strong>2 Desarrollo de Reel max. 20s</strong> (dentro del mes
                        - efecto y sonido)
                      </span>
                    </li>
                    <li className='flex items-center gap-4'>
                      <LuBadgeCheck size={20} className='text-3xl text-secondary' />

                      <span className='text-3xl w-full flex-1 font_baloo'>
                        <strong>Indexación de Fan page al WSP Business</strong> (fan
                        page)
                      </span>
                    </li>
                    <li className='flex items-center gap-4'>
                      <LuBadgeCheck size={20} className='text-3xl text-secondary' />

                      <span className='text-3xl w-full flex-1 font_baloo'>
                        <strong>Desarrollo de campañas interactivas - WEB - Redes</strong>
                      </span>
                    </li>
                    <li className='flex items-center gap-4'>
                      <LuBadgeCheck size={20} className='text-3xl text-secondary' />

                      <span className='text-3xl w-full flex-1 font_baloo'>
                        <strong>Capacitación de campaña pagada</strong>
                        (Inversión a
                        cargo del cliente)
                      </span>
                    </li>
                    <li className='flex items-center gap-4'>
                      <LuBadgeCheck size={20} className='text-3xl text-secondary' />

                      <span className='text-3xl w-full flex-1 font_baloo'>
                        <strong>Asesoria en creación de redes</strong>
                        (facebook -
                        instagram)
                      </span>
                    </li>
                    <li className='flex items-center gap-4'>
                      <LuBadgeCheck size={20} className='text-3xl text-secondary' />

                      <span className='text-3xl w-full flex-1 font_baloo'>
                        <strong>Reporte de metricas - Quincenal</strong>

                      </span>
                    </li>
                  </ul>
                  <button
                    type='button'
                    onClick={() => RedirigirWsp(3)}
                    className='w-full border-2 border-secondary py-4 rounded-full my-5 hover:bg-secondary hover:text-white transition-colors duration-300'
                  >
                    Comprar
                  </button>
                  <span
                    className='absolute top-6 right-6 text-5xl cursor-pointer text-primary'
                    onClick={handleClose}
                  >
                    <IoCloseCircleOutline />
                  </span>
                </div>
                )
              : null}
      </DialogContent>
    </Dialog>
  )
}
