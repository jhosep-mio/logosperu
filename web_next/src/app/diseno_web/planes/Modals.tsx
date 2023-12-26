import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import { Dispatch, SetStateAction } from 'react'
import { IoCloseCircleOutline } from 'react-icons/io5'
import { LuBadgeCheck, LuBadgeX, LuChevronRight } from 'react-icons/lu'

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
        'Hola, estoy interesado(a) en obtener más información sobre el Plan de desarrollo web - LANDING PAGE.'
    } else if (seleccion == 2) {
      mensaje =
      'Hola, estoy interesado(a) en obtener más información sobre el Plan de desarrollo web - LANDING PAGE - ADMINISTRABLE.'
    } else if (seleccion == 3) {
      mensaje =
        'Hola, estoy interesado(a) en obtener más información sobre el Plan de desarrollo web - WEB INFORMATIVA'
    } else if (seleccion == 4) {
      mensaje =
          'Hola, estoy interesado(a) en obtener más información sobre el Plan de desarrollo web - WEB INFORMATIVA - GOOGLE  - SEO'
    } else if (seleccion == 5) {
      mensaje =
          'Hola, estoy interesado(a) en obtener más información sobre el Plan de desarrollo web - WEB ADMINISTRABLE - PLAN GOLDEN'
    } else if (seleccion == 6) {
      mensaje =
          'Hola, estoy interesado(a) en obtener más información sobre el Plan de desarrollo web - WEB ADMINISTRABLE PLAN EMPRESA'
    } else if (seleccion == 7) {
      mensaje =
          'Hola, estoy interesado(a) en obtener más información sobre el Plan de desarrollo web -  TIENDA VIRTUAL - Plan Express.'
    } else if (seleccion == 8) {
      mensaje =
          'Hola, estoy interesado(a) en obtener más información sobre el Plan de desarrollo web - TIENDA VIRTUAL - ECOMMERCE PLAN SILVER.'
    } else if (seleccion == 9) {
      mensaje =
          'Hola, estoy interesado(a) en obtener más información sobre el Plan de desarrollo web - TIENDA VIRTUAL - ECOMMERCE Plan GOLDEN.'
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
              <div className='mb-12 text-center space-y-3'>
                <h4 className='text-secondary/90 text-4xl'>LANDING PAGE</h4>
                <h1 className='text-primary text-7xl font-extrabold transition-all'>
                  S/ 299.00
                </h1>
              </div>
              <ul className='space-y-3 mb-8'>
                <li className='flex items-center gap-4 font-medium'>
                  <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                  <span className='text-2xl w-full flex-1'>
                    01 interna de Aterrizaje - <strong>LANDING PAGE</strong>, El
                    cliente elegirá una Plantilla
                  </span>
                </li>
                <li className='flex items-center gap-4 font-medium'>
                  <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                  <span className='text-2xl w-full flex-1'>
                    Formulario de Contacto Dinámico.
                  </span>
                </li>
                <li className='flex items-center gap-4 font-medium'>
                  <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                  <span className='text-2xl w-full flex-1'>
                    Administración Dominio .com <strong>GRATIS x un AÑO</strong>
                  </span>
                </li>
                <li className='flex items-center gap-4'>
                  <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                  <span className='text-2xl w-full flex-1'>
                    Alojamiento Web Hasta <strong>400 MB</strong> (Sin Cpanel
                    Independiente) <strong>GRATIS x un AÑO</strong>
                  </span>
                </li>
                <li className='flex items-center gap-4'>
                  <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                  <span className='text-2xl w-full flex-1'>
                    NO Utilizamos plantillas o CMS Gratuitos de Internet
                  </span>
                </li>
                <li className='flex items-center gap-4'>
                  <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                  <span className='text-2xl w-full flex-1'>
                    WEB desarrollada desde CERO
                  </span>
                </li>
                <li className='flex items-center gap-4'>
                  <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                  <span className='text-2xl w-full flex-1'>
                    Creación de <strong>01 cuenta de correo</strong> Manual de
                    Configuración GMAIL - Outlook
                  </span>
                </li>
                <li className='flex items-center gap-4'>
                  <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                  <span className='text-2xl w-full flex-1'>
                    Seguridad Anti Spam
                  </span>
                </li>
                <li className='flex items-center gap-4'>
                  <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                  <span className='text-2xl w-full flex-1'>
                    Interacción con Redes Sociales. (WhatsApp – Facebook –
                    YouTube)
                  </span>
                </li>
                <li className='flex items-center gap-4'>
                  <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                  <span className='text-2xl w-full flex-1'>
                    Soporte Técnico. Por 01 mes (Solo atendemos incidencias o
                    fallas en nuestro servicio).
                  </span>
                </li>

                <li className='flex flex-col items-center gap-4 py-8'>
                  <span className='text-[1.6rem] w-full flex-1 font-bold'>
                    EL CLIENTE NOS REMITE :
                  </span>
                  <ul className='w-full pl-10 space-y-3 '>
                    <li className='flex items-center gap-4 '>
                      <LuChevronRight
                        size={20}
                        className='text-2xl text-secondary'
                      />
                      <span className='text-2xl w-full flex-1'>
                        Su logotipo editable (PSD – Ai – CDR).
                      </span>
                    </li>
                    <li className='flex items-center gap-4 '>
                      <LuChevronRight
                        size={20}
                        className='text-2xl text-secondary'
                      />
                      <span className='text-2xl w-full flex-1'>
                        Entrega de textos para la página web.
                      </span>
                    </li>
                    <li className='flex items-center gap-4 '>
                      <LuChevronRight
                        size={20}
                        className='text-2xl text-secondary'
                      />
                      <span className='text-2xl w-full flex-1'>
                        Nos remite Fotos e imágenes en buena resolución.
                      </span>
                    </li>
                    <li className='flex items-center gap-4 '>
                      <LuChevronRight
                        size={20}
                        className='text-2xl text-secondary'
                      />
                      <span className='text-2xl w-full flex-1'>
                        Entrega de datos de contacto
                      </span>
                    </li>
                  </ul>
                </li>
                <li className='flex items-center gap-4'>
                  <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                  <span className='text-2xl w-full flex-1'>
                    Tiempo de Trabajo : 02 días
                  </span>
                </li>
                <li className='flex items-center gap-4'>
                  <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                  <span className='text-2xl w-full flex-1'>
                    Forma de Trabajo : Bajo contrato.
                  </span>
                </li>
                <li className='flex items-center gap-4'>
                  <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                  <span className='text-2xl w-full flex-1'>
                    Administración de dominio .com.pe o .pe se cotiza aparte
                  </span>
                </li>
                <li className='flex items-center gap-4'>
                  <LuBadgeX size={20} className='text-2xl text-secondary' />
                  <span className='text-2xl w-full flex-1'>
                    Nuestros Costos <strong>NO incluyen IGV</strong>
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
                <div className='mb-12 text-center space-y-3'>
                  <h4 className='text-secondary/90 text-4xl'>LANDING PAGE - ADMINISTRABLE</h4>
                  <h1 className='text-primary text-7xl font-extrabold transition-all'>
                    S/ 399.00
                  </h1>
                </div>
                <ul className='space-y-5 mb-8'>
                  <li className='flex items-center gap-4 font-medium'>
                    <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                    <span className='text-2xl w-full flex-1'>
                      01 interna de Aterrizaje - <strong>LANDING PAGE</strong>, El cliente elegirá una Plantilla
                    </span>
                  </li>
                  <li className='flex items-center gap-4 font-medium'>
                    <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                    <span className='text-2xl w-full flex-1'>
                      Formulario de Contacto Dinámico.
                    </span>
                  </li>
                  <li className='flex items-center gap-4 font-medium'>
                    <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                    <span className='text-2xl w-full flex-1'>
                      Desarrollo de <strong>Modulo Administrable - 1 sección</strong>
                    </span>
                  </li>
                  <li className='flex items-center gap-4'>
                    <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                    <span className='text-2xl w-full flex-1'>
                      Capación de Uso del modulo administrable
                    </span>
                  </li>

                  <li className='flex items-center gap-4'>
                    <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                    <span className='text-2xl w-full flex-1'>
                      Accesos o credenciales al administrador
                    </span>
                  </li>
                  <li className='flex items-center gap-4'>
                    <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                    <span className='text-2xl w-full flex-1'>
                      Administración Dominio .com <strong>GRATIS x un AÑO</strong>
                    </span>
                  </li>
                  <li className='flex items-center gap-4'>
                    <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                    <span className='text-2xl w-full flex-1'>
                      Alojamiento Web Hasta <strong>500 MB</strong> (Sin Cpanel Independiente) <strong>GRATIS x un AÑO</strong>
                    </span>
                  </li>
                  <li className='flex items-center gap-4'>
                    <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                    <span className='text-2xl w-full flex-1'>
                      NO Utilizamos plantillas o CMS Gratuitos de Internet
                    </span>
                  </li>
                  <li className='flex items-center gap-4'>
                    <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                    <span className='text-2xl w-full flex-1'>
                      WEB desarrollada desde CERO
                    </span>
                  </li>
                  <li className='flex items-center gap-4'>
                    <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                    <span className='text-2xl w-full flex-1'>
                      Creación de *03 cuenta de correo*  Manual de Configuración GMAIL - Outlook
                    </span>
                  </li>
                  <li className='flex items-center gap-4'>
                    <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                    <span className='text-2xl w-full flex-1'>
                      Seguridad Anti Spam
                    </span>
                  </li>
                  <li className='flex items-center gap-4'>
                    <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                    <span className='text-2xl w-full flex-1'>
                      Interacción con Redes Sociales. (WhatsApp – Facebook – YouTube)
                    </span>
                  </li>
                  <li className='flex items-center gap-4'>
                    <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                    <span className='text-2xl w-full flex-1'>
                      Soporte Técnico. Por 01 mes (Solo atendemos incidencias o fallas en nuestro servicio).
                    </span>
                  </li>
                  <li className='flex flex-col items-center gap-4 py-8'>
                    <span className='text-[1.6rem] w-full flex-1 font-bold'>
                      EL CLIENTE NOS REMITE :
                    </span>
                    <ul className='w-full pl-10 space-y-3 '>
                      <li className='flex items-center gap-4 '>
                        <LuChevronRight
                          size={20}
                          className='text-2xl text-secondary'
                        />
                        <span className='text-2xl w-full flex-1'>
                          Su logotipo editable (PSD – Ai – CDR).
                        </span>
                      </li>
                      <li className='flex items-center gap-4 '>
                        <LuChevronRight
                          size={20}
                          className='text-2xl text-secondary'
                        />
                        <span className='text-2xl w-full flex-1'>
                          Entrega de textos para la página web.
                        </span>
                      </li>
                      <li className='flex items-center gap-4 '>
                        <LuChevronRight
                          size={20}
                          className='text-2xl text-secondary'
                        />
                        <span className='text-2xl w-full flex-1'>
                          Nos remite Fotos e imágenes en buena resolución.
                        </span>
                      </li>
                      <li className='flex items-center gap-4 '>
                        <LuChevronRight
                          size={20}
                          className='text-2xl text-secondary'
                        />
                        <span className='text-2xl w-full flex-1'>
                          Entrega de datos de contacto
                        </span>
                      </li>
                    </ul>
                  </li>
                  <li className='flex items-center gap-4'>
                    <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                    <span className='text-2xl w-full flex-1'>
                      Tiempo de Trabajo : 04 días
                    </span>
                  </li>
                  <li className='flex items-center gap-4'>
                    <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                    <span className='text-2xl w-full flex-1'>
                      Forma de Trabajo : Bajo contrato.
                    </span>
                  </li>
                  <li className='flex items-center gap-4'>
                    <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                    <span className='text-2xl w-full flex-1'>
                      Administración de dominio .com.pe o .pe se cotiza aparte
                    </span>
                  </li>
                  <li className='flex items-center gap-4'>
                    <LuBadgeX size={20} className='text-2xl text-secondary' />
                    <span className='text-2xl w-full flex-1'>
                      Nuestros Costos <strong>NO incluyen IGV</strong>
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
                  <div className='mb-12 text-center space-y-3'>
                    <h4 className='text-secondary/90 text-4xl'>WEB INFORMATIVA</h4>
                    <h1 className='text-primary text-7xl font-extrabold transition-all'>
                      S/ 469.00
                    </h1>
                  </div>
                  <ul className='space-y-3 mb-8'>
                    <li className='flex items-center gap-4 font-medium'>
                      <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                      <span className='text-2xl w-full flex-1'>
                        Hasta 4 internas, bajo nuestras propuestas INGRESAR ( <strong>Plantillas Express</strong> ) el cliente elegirá una
                      </span>
                    </li>
                    <li className='flex items-center gap-4 font-medium'>
                      <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                      <span className='text-2xl w-full flex-1'>
                        Desarrollamos un Brief
                      </span>
                    </li>
                    <li className='flex items-center gap-4 font-medium'>
                      <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                      <span className='text-2xl w-full flex-1'>
                        Formularios de Contacto Dinámico. MAIL de repuesta al visitante.
                      </span>
                    </li>
                    <li className='flex items-center gap-4'>
                      <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                      <span className='text-2xl w-full flex-1'>
                        Ubicación de la empresa o negocio a través de Google Maps.
                      </span>
                    </li>
                    <li className='flex items-center gap-4'>
                      <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                      <span className='text-2xl w-full flex-1'>
                        NO Utilizamos plantillas o CMS Gratuitos de Internet
                      </span>
                    </li>
                    <li className='flex items-center gap-4'>
                      <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                      <span className='text-2xl w-full flex-1'>
                        WEB desarrollada desde CERO
                      </span>
                    </li>
                    <li className='flex items-center gap-4'>
                      <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                      <span className='text-2xl w-full flex-1'>
                        Creación de Correos corporativos hasta 03
                      </span>
                    </li>
                    <li className='flex items-center gap-4'>
                      <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                      <span className='text-2xl w-full flex-1'>
                        Seguridad Anti Spam
                      </span>
                    </li>
                    <li className='flex items-center gap-4'>
                      <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                      <span className='text-2xl w-full flex-1'>
                        Interacción con Redes Sociales. (WhatsApp – Facebook –
                        YouTube)
                      </span>
                    </li>
                    <li className='flex items-center gap-4'>
                      <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                      <span className='text-2xl w-full flex-1'>
                        Administración Dominio .com <strong>GRATIS x un AÑO</strong>
                      </span>
                    </li>
                    <li className='flex items-center gap-4'>
                      <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                      <span className='text-2xl w-full flex-1'>
                        Alojamiento Web 1 GB (Sin Cpanel Independiente)  <strong>GRATIS x un AÑO</strong>
                      </span>
                    </li>
                    <li className='flex items-center gap-4'>
                      <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                      <span className='text-2xl w-full flex-1'>
                        Soporte Técnico. Por 01 mes (Solo atendemos incidencias o
                        fallas en nuestro servicio).
                      </span>
                    </li>

                    <li className='flex flex-col items-center gap-4 py-8'>
                      <span className='text-[1.6rem] w-full flex-1 font-bold'>
                        EL CLIENTE NOS REMITE :
                      </span>
                      <ul className='w-full pl-10 space-y-3 '>
                        <li className='flex items-center gap-4 '>
                          <LuChevronRight
                            size={20}
                            className='text-2xl text-secondary'
                          />
                          <span className='text-2xl w-full flex-1'>
                            Su logotipo editable (PSD – Ai – CDR).
                          </span>
                        </li>
                        <li className='flex items-center gap-4 '>
                          <LuChevronRight
                            size={20}
                            className='text-2xl text-secondary'
                          />
                          <span className='text-2xl w-full flex-1'>
                            Entrega de textos para la página web.
                          </span>
                        </li>
                        <li className='flex items-center gap-4 '>
                          <LuChevronRight
                            size={20}
                            className='text-2xl text-secondary'
                          />
                          <span className='text-2xl w-full flex-1'>
                            Nos remite Fotos e imágenes en buena resolución.
                          </span>
                        </li>
                        <li className='flex items-center gap-4 '>
                          <LuChevronRight
                            size={20}
                            className='text-2xl text-secondary'
                          />
                          <span className='text-2xl w-full flex-1'>
                            Entrega de datos de contacto
                          </span>
                        </li>
                      </ul>
                    </li>
                    <li className='flex items-center gap-4'>
                      <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                      <span className='text-2xl w-full flex-1'>
                        Tiempo de Trabajo : 05 días
                      </span>
                    </li>
                    <li className='flex items-center gap-4'>
                      <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                      <span className='text-2xl w-full flex-1'>
                        Forma de Trabajo : Bajo contrato.
                      </span>
                    </li>
                    <li className='flex items-center gap-4'>
                      <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                      <span className='text-2xl w-full flex-1'>
                        Administración de dominio .com.pe o .pe se cotiza aparte
                      </span>
                    </li>
                    <li className='flex items-center gap-4'>
                      <LuBadgeX size={20} className='text-2xl text-secondary' />
                      <span className='text-2xl w-full flex-1'>
                        Nuestros Costos <strong>NO incluyen IGV</strong>
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
              : selected == 4
                ? (
                  <div className='w-full border-2 bg-gray-100 border-gray-500/30 py-8 px-10 rounded-3xl lg:-mr-5 relative'>
                    <div className='mb-12 text-center space-y-3'>
                      <h4 className='text-secondary/90 text-4xl'> WEB INFORMATIVA - GOOGLE  - SEO</h4>
                      <h1 className='text-primary text-7xl font-extrabold transition-all'>
                        S/ 699.00
                      </h1>
                    </div>
                    <ul className='space-y-3 mb-8'>
                      <li className='flex items-center gap-4 font-medium'>
                        <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                        <span className='text-2xl w-full flex-1'>
                          Hasta 4 internas, bajo nuestras propuestas INGRESAR ( <strong>Plantillas Express</strong> ) el cliente elegirá una
                        </span>
                      </li>
                      <li className='flex items-center gap-4 font-medium'>
                        <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                        <span className='text-2xl w-full flex-1'>
                          Desarrollamos un Brief
                        </span>
                      </li>
                      <li className='flex items-center gap-4 font-medium'>
                        <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                        <span className='text-2xl w-full flex-1'>
                          Formularios de Contacto Dinámico. MAIL de repuesta al visitante.
                        </span>
                      </li>
                      <li className='flex items-center gap-4'>
                        <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                        <span className='text-2xl w-full flex-1'>
                          Ubicación de la empresa o negocio a través de Google Maps.
                        </span>
                      </li>
                      <li className='flex items-center gap-4'>
                        <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                        <span className='text-2xl w-full flex-1'>
                          NO Utilizamos plantillas o CMS Gratuitos de Internet
                        </span>
                      </li>
                      <li className='flex items-center gap-4'>
                        <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                        <span className='text-2xl w-full flex-1'>
                          WEB desarrollada desde CERO
                        </span>
                      </li>
                      <li className='flex items-center gap-4'>
                        <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                        <span className='text-2xl w-full flex-1'>
                          Creación de Correos corporativos hasta 03
                        </span>
                      </li>
                      <li className='flex items-center gap-4'>
                        <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                        <span className='text-2xl w-full flex-1'>
                          Seguridad Anti Spam
                        </span>
                      </li>
                      <li className='flex items-center gap-4'>
                        <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                        <span className='text-2xl w-full flex-1'>
                          Interacción con Redes Sociales. (WhatsApp – Facebook –
                          YouTube)
                        </span>
                      </li>
                      <li className='flex items-center gap-4'>
                        <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                        <span className='text-2xl w-full flex-1'>
                          Administración Dominio .com <strong>GRATIS x un AÑO</strong>
                        </span>
                      </li>
                      <li className='flex items-center gap-4'>
                        <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                        <span className='text-2xl w-full flex-1'>
                          Alojamiento Web 1 GB (Sin Cpanel Independiente)  <strong>GRATIS x un AÑO</strong>
                        </span>
                      </li>
                      <li className='flex items-center gap-4'>
                        <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                        <span className='text-2xl w-full flex-1'>
                          Soporte Técnico. Por 01 mes (Solo atendemos incidencias o
                          fallas en nuestro servicio).
                        </span>
                      </li>
                      <li className='flex items-center gap-4'>
                        <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                        <span className='text-2xl w-full flex-1'>
                          Técnica de Posicionamiento Web (SEO).
                        </span>
                      </li>
                      <li className='flex items-center gap-4'>
                        <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                        <span className='text-2xl w-full flex-1'>
                          Alta del desarrollo web a los buscadores *GOOGLE* - Inicio posicionamiento *SEO* Indexación de palabras claves - Keywords , coordinación directa con el cliente
                        </span>
                      </li>
                      <li className='flex items-center gap-4'>
                        <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                        <span className='text-2xl w-full flex-1'>
                          Propiedad Verificada
                        </span>
                      </li>
                      <li className='flex items-center gap-4'>
                        <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                        <span className='text-2xl w-full flex-1'>
                          Inicio de *SEO*, trabajo con Palabras claves, Script y otras técnicas de Posicionamiento
                        </span>
                      </li>

                      <li className='flex flex-col items-center gap-4 py-8'>
                        <span className='text-[1.6rem] w-full flex-1 font-bold'>
                          EL CLIENTE NOS REMITE :
                        </span>
                        <ul className='w-full pl-10 space-y-3 '>
                          <li className='flex items-center gap-4 '>
                            <LuChevronRight
                              size={20}
                              className='text-2xl text-secondary'
                            />
                            <span className='text-2xl w-full flex-1'>
                              Su logotipo editable (PSD – Ai – CDR).
                            </span>
                          </li>
                          <li className='flex items-center gap-4 '>
                            <LuChevronRight
                              size={20}
                              className='text-2xl text-secondary'
                            />
                            <span className='text-2xl w-full flex-1'>
                              Entrega de textos para la página web.
                            </span>
                          </li>
                          <li className='flex items-center gap-4 '>
                            <LuChevronRight
                              size={20}
                              className='text-2xl text-secondary'
                            />
                            <span className='text-2xl w-full flex-1'>
                              Accesos a su email para el registro de propiedad
                            </span>
                          </li>
                          <li className='flex items-center gap-4 '>
                            <LuChevronRight
                              size={20}
                              className='text-2xl text-secondary'
                            />
                            <span className='text-2xl w-full flex-1'>
                              Nos remite Fotos e imágenes en buena resolución.
                            </span>
                          </li>
                          <li className='flex items-center gap-4 '>
                            <LuChevronRight
                              size={20}
                              className='text-2xl text-secondary'
                            />
                            <span className='text-2xl w-full flex-1'>
                              Entrega de datos de contacto
                            </span>
                          </li>
                        </ul>
                      </li>
                      <li className='flex items-center gap-4'>
                        <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                        <span className='text-2xl w-full flex-1'>
                          Tiempo de Trabajo : 06 días
                        </span>
                      </li>
                      <li className='flex items-center gap-4'>
                        <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                        <span className='text-2xl w-full flex-1'>
                          Forma de Trabajo : Bajo contrato.
                        </span>
                      </li>
                      <li className='flex items-center gap-4'>
                        <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                        <span className='text-2xl w-full flex-1'>
                          Administración de dominio .com.pe o .pe se cotiza aparte
                        </span>
                      </li>
                      <li className='flex items-center gap-4'>
                        <LuBadgeX size={20} className='text-2xl text-secondary' />
                        <span className='text-2xl w-full flex-1'>
                          Nuestros Costos <strong>NO incluyen IGV</strong>
                        </span>
                      </li>
                    </ul>
                    <button
                      type='button'
                      onClick={() => RedirigirWsp(4)}
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
                : selected == 5
                  ? (
                    <div className='w-full border-2 bg-gray-100 border-gray-500/30 py-8 px-10 rounded-3xl lg:-mr-5 relative'>
                      <div className='mb-12 text-center space-y-3'>
                        <h4 className='text-secondary/90 text-4xl'> WEB ADMINISTRABLE - PLAN GOLDEN</h4>
                        <h1 className='text-primary text-7xl font-extrabold transition-all'>
                          S/ 999.00
                        </h1>
                      </div>
                      <ul className='space-y-3 mb-8'>
                        <li className='flex items-center gap-4 font-medium'>
                          <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                          <span className='text-2xl w-full flex-1'>
                            Hasta 04 internas, a la medida del cliente. (Plantillas Express) el cliente elegirá una
                          </span>
                        </li>
                        <li className='flex items-center gap-4 font-medium'>
                          <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                          <span className='text-2xl w-full flex-1'>
                            Desarrollamos un Brief
                          </span>
                        </li>
                        <li className='flex items-center gap-4 font-medium'>
                          <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                          <span className='text-2xl w-full flex-1'>
                            Formularios de Contacto Dinámico. MAIL de repuesta al visitante.
                          </span>
                        </li>
                        <li className='flex items-center gap-4'>
                          <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                          <span className='text-2xl w-full flex-1'>
                            Ubicación de la empresa o negocio a través de Google Maps.
                          </span>
                        </li>
                        <li className='flex items-center gap-4'>
                          <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                          <span className='text-2xl w-full flex-1'>
                            Administración Dominio .com <strong>GRATIS x un AÑO</strong>
                          </span>
                        </li>
                        <li className='flex items-center gap-4'>
                          <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                          <span className='text-2xl w-full flex-1'>
                            Alojamiento Web 5GB (Sin Cpanel Independiente)  <strong>GRATIS x un AÑO</strong>
                          </span>
                        </li>
                        <li className='flex items-center gap-4'>
                          <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                          <span className='text-2xl w-full flex-1'>
                            NO Utilizamos plantillas o CMS Gratuitos de Internet
                          </span>
                        </li>
                        <li className='flex items-center gap-4'>
                          <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                          <span className='text-2xl w-full flex-1'>
                            WEB desarrollada desde CERO
                          </span>
                        </li>
                        <li className='flex items-center gap-4'>
                          <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                          <span className='text-2xl w-full flex-1'>
                            Creación de Correos corporativos hasta 15 - Cliente nos remite sus nombres
                          </span>
                        </li>
                        <li className='flex items-center gap-4'>
                          <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                          <span className='text-2xl w-full flex-1'>
                            Seguridad Anti Spam
                          </span>
                        </li>
                        <li className='flex items-center gap-4'>
                          <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                          <span className='text-2xl w-full flex-1'>
                            Interacción con Redes Sociales. (WhatsApp – Facebook –
                            YouTube)
                          </span>
                        </li>
                        <li className='flex items-center gap-4'>
                          <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                          <span className='text-2xl w-full flex-1'>
                            Podrá ADMINISTRAR Hasta 02 Internas. <strong>NOTICIAS o PRODUCTOS o SERVICIOS</strong>
                          </span>
                        </li>
                        <li className='flex items-center gap-4'>
                          <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                          <span className='text-2xl w-full flex-1'>
                            Entrega de acceso al administrador.
                          </span>
                        </li>
                        <li className='flex items-center gap-4'>
                          <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                          <span className='text-2xl w-full flex-1'>
                            Manual de Usuario.
                          </span>
                        </li>
                        <li className='flex items-center gap-4'>
                          <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                          <span className='text-2xl w-full flex-1'>
                            Capacitación del sistema (En nuestra Agencia o VIRTUAL).
                          </span>
                        </li>

                        <li className='flex items-center gap-4'>
                          <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                          <span className='text-2xl w-full flex-1'>
                            Soporte Técnico. Por 03 mes (Solo atendemos incidencias o
                            fallas en nuestro servicio + (01) cambio textuales e imágenes).
                          </span>
                        </li>

                        <li className='flex flex-col items-center gap-4 py-8'>
                          <span className='text-[1.6rem] w-full flex-1 font-bold'>
                            EL CLIENTE NOS REMITE :
                          </span>
                          <ul className='w-full pl-10 space-y-3 '>
                            <li className='flex items-center gap-4 '>
                              <LuChevronRight
                                size={20}
                                className='text-2xl text-secondary'
                              />
                              <span className='text-2xl w-full flex-1'>
                                Su logotipo editable (PSD – Ai – CDR).
                              </span>
                            </li>
                            <li className='flex items-center gap-4 '>
                              <LuChevronRight
                                size={20}
                                className='text-2xl text-secondary'
                              />
                              <span className='text-2xl w-full flex-1'>
                                Entrega de textos para la página web.
                              </span>
                            </li>
                            <li className='flex items-center gap-4 '>
                              <LuChevronRight
                                size={20}
                                className='text-2xl text-secondary'
                              />
                              <span className='text-2xl w-full flex-1'>
                                Nos remite Fotos e imágenes en buena resolución.
                              </span>
                            </li>
                            <li className='flex items-center gap-4 '>
                              <LuChevronRight
                                size={20}
                                className='text-2xl text-secondary'
                              />
                              <span className='text-2xl w-full flex-1'>
                                Entrega de datos de contacto
                              </span>
                            </li>
                          </ul>
                        </li>
                        <li className='flex items-center gap-4'>
                          <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                          <span className='text-2xl w-full flex-1'>
                            Tiempo de Trabajo : 08 días
                          </span>
                        </li>
                        <li className='flex items-center gap-4'>
                          <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                          <span className='text-2xl w-full flex-1'>
                            Forma de Trabajo : Bajo contrato.
                          </span>
                        </li>
                        <li className='flex items-center gap-4'>
                          <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                          <span className='text-2xl w-full flex-1'>
                            Administración de dominio .com.pe o .pe se cotiza aparte
                          </span>
                        </li>
                        <li className='flex items-center gap-4'>
                          <LuBadgeX size={20} className='text-2xl text-secondary' />
                          <span className='text-2xl w-full flex-1'>
                            Nuestros Costos <strong>NO incluyen IGV</strong>
                          </span>
                        </li>
                      </ul>
                      <button
                        type='button'
                        onClick={() => RedirigirWsp(5)}
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
                  : selected == 6
                    ? (
                      <div className='w-full border-2 bg-gray-100 border-gray-500/30 py-8 px-10 rounded-3xl lg:-mr-5 relative'>
                        <div className='mb-12 text-center space-y-3'>

                          <h1 className='text-primary text-5xl font-extrabold transition-all'>
                            WEB ADMINISTRABLE <br />
                            PLAN EMPRESA
                          </h1>
                        </div>
                        <ul className='space-y-3 mb-8'>
                          <li className='flex items-center gap-4 font-medium'>
                            <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                            <span className='text-2xl w-full flex-1'>
                              Hasta <strong>6 internas</strong>, <strong>A la medida del cliente</strong>. CLIENTE NOS REMITE SU EJEMPLO
                            </span>
                          </li>
                          <li className='flex items-center gap-4 font-medium'>
                            <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                            <span className='text-2xl w-full flex-1'>
                              Desarrollamos un Brief A MEDIDA
                            </span>
                          </li>
                          <li className='flex items-center gap-4 font-medium'>
                            <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                            <span className='text-2xl w-full flex-1'>
                              Formularios de Contacto Dinámico. MAIL de repuesta al visitante.
                            </span>
                          </li>
                          <li className='flex items-center gap-4'>
                            <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                            <span className='text-2xl w-full flex-1'>
                              Ubicación de la empresa o negocio a través de Google Maps.
                            </span>
                          </li>
                          <li className='flex items-center gap-4'>
                            <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                            <span className='text-2xl w-full flex-1'>
                              Programación en PHP Y JS - Framework LARAVEL Y REACT
                            </span>
                          </li>
                          <li className='flex items-center gap-4'>
                            <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                            <span className='text-2xl w-full flex-1'>
                              Base de Datos Myql
                            </span>
                          </li>
                          <li className='flex items-center gap-4'>
                            <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                            <span className='text-2xl w-full flex-1'>
                              HTML 5 , Boostrap, Tailwind, CSS3
                            </span>
                          </li>
                          <li className='flex items-center gap-4'>
                            <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                            <span className='text-2xl w-full flex-1'>
                              No usamos plantillas - No trabajamos con CMS
                            </span>
                          </li>
                          <li className='flex items-center gap-4'>
                            <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                            <span className='text-2xl w-full flex-1'>
                              Seguridad Anti Spam
                            </span>
                          </li>
                          <li className='flex items-center gap-4'>
                            <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                            <span className='text-2xl w-full flex-1'>
                              Administración Dominio .com <strong>GRATIS x un AÑO</strong>
                            </span>
                          </li>
                          <li className='flex items-center gap-4'>
                            <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                            <span className='text-2xl w-full flex-1'>
                              Alojamiento Web ilimitado (Cpanel Independiente) <strong>GRATIS x un AÑO</strong>
                            </span>
                          </li>
                          <li className='flex items-center gap-4'>
                            <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                            <span className='text-2xl w-full flex-1'>
                              Hasta 30 correos corporativos
                            </span>
                          </li>
                          <li className='flex items-center gap-4'>
                            <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                            <span className='text-2xl w-full flex-1'>
                              Interacción con Redes Sociales. (WhatsApp – Facebook –
                              YouTube)
                            </span>
                          </li>
                          <li className='flex items-center gap-4'>
                            <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                            <span className='text-2xl w-full flex-1'>
                              Podrá ADMINISTRAR Hasta 04 Internas. <strong>NOTICIAS o PRODUCTOS o SERVICIOS</strong>
                            </span>
                          </li>
                          <li className='flex items-center gap-4'>
                            <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                            <span className='text-2xl w-full flex-1'>
                              Entrega de acceso al administrador.
                            </span>
                          </li>
                          <li className='flex items-center gap-4'>
                            <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                            <span className='text-2xl w-full flex-1'>
                              Manual de Usuario.
                            </span>
                          </li>
                          <li className='flex items-center gap-4'>
                            <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                            <span className='text-2xl w-full flex-1'>
                              Capacitación del sistema (En nuestra Agencia o VIRTUAL).
                            </span>
                          </li>

                          <li className='flex items-center gap-4'>
                            <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                            <span className='text-2xl w-full flex-1'>
                              Soporte Técnico. Por 06 mes (Solo atendemos incidencias o
                              fallas en nuestro servicio + (01) cambio textuales e imágenes).
                            </span>
                          </li>
                          <li className='flex items-center gap-4'>
                            <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                            <span className='text-2xl w-full flex-1'>
                              Alta del desarrollo web a los buscadores <strong>GOOGLE</strong> - Inicio posicionamiento <strong>SEO</strong> Indexación de palabras claves - Keywords , coordinación directa con el cliente
                            </span>
                          </li>
                          <li className='flex items-center gap-4'>
                            <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                            <span className='text-2xl w-full flex-1'>
                              <strong>Google Analitics</strong> - Ud podrá medir quien lo visita - Metricas
                            </span>
                          </li>
                          <li className='flex items-center gap-4'>
                            <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                            <span className='text-2xl w-full flex-1'>
                              Retoque Fotográfico de Hasta 20
                            </span>
                          </li>

                          <li className='flex flex-col items-center gap-4 py-8'>
                            <span className='text-[1.6rem] w-full flex-1 font-bold'>
                              EL CLIENTE NOS REMITE :
                            </span>
                            <ul className='w-full pl-10 space-y-3 '>
                              <li className='flex items-center gap-4 '>
                                <LuChevronRight
                                  size={20}
                                  className='text-2xl text-secondary'
                                />
                                <span className='text-2xl w-full flex-1'>
                                  Su logotipo editable (PSD – Ai – CDR).
                                </span>
                              </li>
                              <li className='flex items-center gap-4 '>
                                <LuChevronRight
                                  size={20}
                                  className='text-2xl text-secondary'
                                />
                                <span className='text-2xl w-full flex-1'>
                                  Entrega de textos para la página web.
                                </span>
                              </li>
                              <li className='flex items-center gap-4 '>
                                <LuChevronRight
                                  size={20}
                                  className='text-2xl text-secondary'
                                />
                                <span className='text-2xl w-full flex-1'>
                                  Nos remite Fotos e imágenes en buena resolución.
                                </span>
                              </li>
                              <li className='flex items-center gap-4 '>
                                <LuChevronRight
                                  size={20}
                                  className='text-2xl text-secondary'
                                />
                                <span className='text-2xl w-full flex-1'>
                                  Entrega de datos de contacto
                                </span>
                              </li>
                            </ul>
                          </li>
                          <li className='flex items-center gap-4'>
                            <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                            <span className='text-2xl w-full flex-1'>
                              Tiempo de Trabajo : 25 días
                            </span>
                          </li>
                          <li className='flex items-center gap-4'>
                            <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                            <span className='text-2xl w-full flex-1'>
                              Forma de Trabajo : Bajo contrato.
                            </span>
                          </li>
                          <li className='flex items-center gap-4'>
                            <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                            <span className='text-2xl w-full flex-1'>
                              Administración de dominio .com.pe o .pe se cotiza aparte
                            </span>
                          </li>
                          <li className='flex items-center gap-4'>
                            <LuBadgeX size={20} className='text-2xl text-secondary' />
                            <span className='text-2xl w-full flex-1'>
                              Nuestros Costos <strong>NO incluyen IGV</strong>
                            </span>
                          </li>
                        </ul>
                        <button
                          type='button'
                          onClick={() => RedirigirWsp(6)}
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
                    : selected == 7
                      ? (
                        <div className='w-full border-2 bg-gray-100 border-gray-500/30 py-8 px-10 rounded-3xl lg:-mr-5 relative'>
                          <div className='mb-12 text-center space-y-3'>
                            <h4 className='text-secondary/90 text-4xl uppercase'> TIENDA VIRTUAL - Plan Express</h4>
                            <h1 className='text-primary text-7xl font-extrabold transition-all'>
                              S/ 999.00
                            </h1>
                          </div>
                          <ul className='space-y-3 mb-8'>
                            <li className='flex items-center gap-4 font-medium'>
                              <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                              <span className='text-2xl w-full flex-1'>
                                Hasta 5 internas. Bajo Plantillas Pre determinadas (El cliente escoge una)
                              </span>
                            </li>
                            <li className='flex items-center gap-4 font-medium'>
                              <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                              <span className='text-2xl w-full flex-1'>
                                Desarrollamos un Brief A MEDIDA
                              </span>
                            </li>
                            <li className='flex items-center gap-4 font-medium'>
                              <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                              <span className='text-2xl w-full flex-1'>
                                Integración de <strong>Carrito de COMPRAS</strong>.
                              </span>
                            </li>
                            <li className='flex items-center gap-4 font-medium'>
                              <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                              <span className='text-2xl w-full flex-1'>
                                <strong>EL COSTO POR LA INTEGRACIÓN DEL SERVICIO DE COMERCIO ELECTRÓNICO, ES ASUMIDO POR EL CLIENTE </strong>.
                              </span>
                            </li>

                            <li className='flex flex-col items-center gap-4 py-8'>
                              <span className='text-[1.6rem] w-full flex-1 font-bold'>
                                Pasarela de Pago: Mercado Pago:
                              </span>
                              <ul className='w-full pl-10 space-y-3 '>
                                <li className='flex items-center gap-4 '>
                                  <LuChevronRight
                                    size={20}
                                    className='text-2xl text-secondary'
                                  />
                                  <span className='text-2xl w-full flex-1'>
                                    Medio de pago: Tarjetas de crédito – Visa, Mastercard, American express y Diners Club.
                                  </span>
                                </li>
                                <li className='flex items-center gap-4 '>
                                  <LuChevronRight
                                    size={20}
                                    className='text-2xl text-secondary'
                                  />
                                  <span className='text-2xl w-full flex-1'>
                                    Registro de pagos en el sistema de mercado pago y en el sistema de la tienda virtual.
                                  </span>
                                </li>

                              </ul>
                            </li>

                            <li className='flex items-center gap-4 font-medium'>
                              <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                              <span className='text-2xl w-full flex-1'>
                                Trabajamos nuestra programación y Maquetación desde CERO
                              </span>
                            </li>

                            <li className='flex items-center gap-4 font-medium'>
                              <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                              <span className='text-2xl w-full flex-1'>
                                Programación en PHP - LARAVEL Y REACT
                              </span>
                            </li>
                            <li className='flex items-center gap-4 font-medium'>
                              <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                              <span className='text-2xl w-full flex-1'>
                                Base de Datos Myql
                              </span>
                            </li>
                            <li className='flex items-center gap-4 font-medium'>
                              <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                              <span className='text-2xl w-full flex-1'>
                                Soporte hasta <strong>100 productos</strong>
                              </span>
                            </li>
                            <li className='flex items-center gap-4'>
                              <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                              <span className='text-2xl w-full flex-1'>
                                Administración Dominio .com <strong>GRATIS x un AÑO</strong>
                              </span>
                            </li>
                            <li className='flex items-center gap-4'>
                              <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                              <span className='text-2xl w-full flex-1'>
                                Alojamiento Web 03 GB (Sin Cpanel Independiente) <strong>GRATIS x un AÑO</strong>
                              </span>
                            </li>
                            <li className='flex items-center gap-4'>
                              <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                              <span className='text-2xl w-full flex-1'>
                                Hasta 5 correos corporativos
                              </span>
                            </li>
                            <li className='flex items-center gap-4'>
                              <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                              <span className='text-2xl w-full flex-1'>
                                NO Utilizamos plantillas o CMS Gratuitos de Internet
                              </span>
                            </li>
                            <li className='flex items-center gap-4'>
                              <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                              <span className='text-2xl w-full flex-1'>
                                WEB desarrollada desde CERO
                              </span>
                            </li>

                            <li className='flex items-center gap-4 font-medium'>
                              <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                              <span className='text-2xl w-full flex-1'>
                                Formularios de Contacto Dinámico. MAIL de repuesta al visitante.
                              </span>
                            </li>
                            <li className='flex items-center gap-4'>
                              <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                              <span className='text-2xl w-full flex-1'>
                                Ubicación de la empresa o negocio a través de Google Maps.
                              </span>
                            </li>

                            <li className='flex items-center gap-4'>
                              <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                              <span className='text-2xl w-full flex-1'>
                                Seguridad Anti Spam
                              </span>
                            </li>

                            <li className='flex items-center gap-4'>
                              <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                              <span className='text-2xl w-full flex-1'>
                                Interacción con Redes Sociales. (WhatsApp – Facebook –
                                YouTube)
                              </span>
                            </li>
                            <li className='flex items-center gap-4'>
                              <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                              <span className='text-2xl w-full flex-1'>
                                Podrá ADMINISTRAR Hasta 02 Internas. <strong>NOTICIAS o PRODUCTOS o SERVICIOS</strong>
                              </span>
                            </li>
                            <li className='flex items-center gap-4'>
                              <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                              <span className='text-2xl w-full flex-1'>
                                Entrega de acceso al administrador.
                              </span>
                            </li>
                            <li className='flex items-center gap-4'>
                              <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                              <span className='text-2xl w-full flex-1'>
                                Manual de Usuario.
                              </span>
                            </li>
                            <li className='flex items-center gap-4'>
                              <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                              <span className='text-2xl w-full flex-1'>
                                Capacitación del sistema (VIRTUAL).
                              </span>
                            </li>

                            <li className='flex items-center gap-4'>
                              <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                              <span className='text-2xl w-full flex-1'>
                                Soporte Técnico. Por 03 mes (Solo atendemos incidencias o
                                fallas en nuestro servicio + (01) cambio textuales e imágenes).
                              </span>
                            </li>
                            <li className='flex items-center gap-4'>
                              <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                              <span className='text-2xl w-full flex-1'>
                                Técnica de Posicionamiento Web (SEO).
                              </span>
                            </li>
                            <li className='flex items-center gap-4'>
                              <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                              <span className='text-2xl w-full flex-1'>
                                Retoque Fotográfico de Hasta 15
                              </span>
                            </li>

                            <li className='flex flex-col items-center gap-4 py-8'>
                              <span className='text-[1.6rem] w-full flex-1 font-bold'>
                                EL CLIENTE NOS REMITE :
                              </span>
                              <ul className='w-full pl-10 space-y-3 '>
                                <li className='flex items-center gap-4 '>
                                  <LuChevronRight
                                    size={20}
                                    className='text-2xl text-secondary'
                                  />
                                  <span className='text-2xl w-full flex-1'>
                                    Su logotipo editable (PSD – Ai – CDR).
                                  </span>
                                </li>
                                <li className='flex items-center gap-4 '>
                                  <LuChevronRight
                                    size={20}
                                    className='text-2xl text-secondary'
                                  />
                                  <span className='text-2xl w-full flex-1'>
                                    Entrega de textos para la página web.
                                  </span>
                                </li>
                                <li className='flex items-center gap-4 '>
                                  <LuChevronRight
                                    size={20}
                                    className='text-2xl text-secondary'
                                  />
                                  <span className='text-2xl w-full flex-1'>
                                    Nos remite Fotos e imágenes en buena resolución.
                                  </span>
                                </li>
                                <li className='flex items-center gap-4 '>
                                  <LuChevronRight
                                    size={20}
                                    className='text-2xl text-secondary'
                                  />
                                  <span className='text-2xl w-full flex-1'>
                                    Entrega de datos de contacto
                                  </span>
                                </li>
                              </ul>
                            </li>
                            <li className='flex items-center gap-4'>
                              <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                              <span className='text-2xl w-full flex-1'>
                                Tiempo de Trabajo : 10 días
                              </span>
                            </li>
                            <li className='flex items-center gap-4'>
                              <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                              <span className='text-2xl w-full flex-1'>
                                Forma de Trabajo : Bajo contrato.
                              </span>
                            </li>
                            <li className='flex items-center gap-4'>
                              <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                              <span className='text-2xl w-full flex-1'>
                                Administración de dominio .com.pe o .pe se cotiza aparte
                              </span>
                            </li>
                            <li className='flex items-center gap-4'>
                              <LuBadgeX size={20} className='text-2xl text-secondary' />
                              <span className='text-2xl w-full flex-1'>
                                Nuestros Costos <strong>NO incluyen IGV</strong>
                              </span>
                            </li>
                          </ul>
                          <button
                            type='button'
                            onClick={() => RedirigirWsp(7)}
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
                      : selected == 8
                        ? (
                          <div className='w-full border-2 bg-gray-100 border-gray-500/30 py-8 px-10 rounded-3xl lg:-mr-5 relative'>
                            <div className='mb-12 text-center space-y-3'>
                              <h1 className='text-primary text-5xl font-extrabold transition-all'>
                                TIENDA VIRTUAL - ECOMMERCE <br /> Plan SILVER
                              </h1>
                            </div>
                            <ul className='space-y-3 mb-8'>
                              <li className='flex items-center gap-4 font-medium'>
                                <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                                <span className='text-2xl w-full flex-1'>
                                  Hasta 06 internas. Bajo Plantillas Pre determinadas (El cliente escoge una)
                                </span>
                              </li>
                              <li className='flex items-center gap-4 font-medium'>
                                <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                                <span className='text-2xl w-full flex-1'>
                                  Desarrollamos un Brief A MEDIDA
                                </span>
                              </li>
                              <li className='flex items-center gap-4 font-medium'>
                                <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                                <span className='text-2xl w-full flex-1'>
                                  Integración de <strong>Carrito de COMPRAS</strong>.
                                </span>
                              </li>
                              <li className='flex items-center gap-4 font-medium'>
                                <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                                <span className='text-2xl w-full flex-1'>
                                  <strong>EL COSTO POR LA INTEGRACIÓN DEL SERVICIO DE COMERCIO ELECTRÓNICO, ES ASUMIDO POR EL CLIENTE </strong>.
                                </span>
                              </li>
                              <li className='flex flex-col items-center gap-4 py-8'>
                                <span className='text-[1.6rem] w-full flex-1 font-bold'>
                                  Pasarela de Pago: Mercado Pago:
                                </span>
                                <ul className='w-full pl-10 space-y-3 '>
                                  <li className='flex items-center gap-4 '>
                                    <LuChevronRight
                                      size={20}
                                      className='text-2xl text-secondary'
                                    />
                                    <span className='text-2xl w-full flex-1'>
                                      Medio de pago: Tarjetas de crédito – Visa, Mastercard, American express y Diners Club.
                                    </span>
                                  </li>
                                  <li className='flex items-center gap-4 '>
                                    <LuChevronRight
                                      size={20}
                                      className='text-2xl text-secondary'
                                    />
                                    <span className='text-2xl w-full flex-1'>
                                      Registro de pagos en el sistema de mercado pago y en el sistema de la tienda virtual.
                                    </span>
                                  </li>

                                </ul>
                              </li>

                              <li className='flex items-center gap-4 font-medium'>
                                <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                                <span className='text-2xl w-full flex-1'>
                                  Trabajamos nuestra programación y Maquetación desde CERO
                                </span>
                              </li>

                              <li className='flex items-center gap-4 font-medium'>
                                <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                                <span className='text-2xl w-full flex-1'>
                                  Programación en PHP - LARAVEL Y REACT
                                </span>
                              </li>
                              <li className='flex items-center gap-4 font-medium'>
                                <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                                <span className='text-2xl w-full flex-1'>
                                  Base de Datos Myql
                                </span>
                              </li>
                              <li className='flex items-center gap-4 font-medium'>
                                <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                                <span className='text-2xl w-full flex-1'>
                                  Soporte hasta <strong>300 productos</strong>
                                </span>
                              </li>
                              <li className='flex items-center gap-4'>
                                <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                                <span className='text-2xl w-full flex-1'>
                                  Administración Dominio .com <strong>GRATIS x un AÑO</strong>
                                </span>
                              </li>
                              <li className='flex items-center gap-4'>
                                <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                                <span className='text-2xl w-full flex-1'>
                                  Alojamiento Web 08 GB (Sin Cpanel Independiente) <strong>GRATIS x un AÑO</strong>
                                </span>
                              </li>
                              <li className='flex items-center gap-4'>
                                <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                                <span className='text-2xl w-full flex-1'>
                                  NO Utilizamos plantillas o CMS Gratuitos de Internet
                                </span>
                              </li>
                              <li className='flex items-center gap-4'>
                                <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                                <span className='text-2xl w-full flex-1'>
                                  WEB desarrollada desde CERO
                                </span>
                              </li>
                              <li className='flex items-center gap-4 font-medium'>
                                <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                                <span className='text-2xl w-full flex-1'>
                                  Formularios de Contacto Dinámico. MAIL de repuesta al visitante.
                                </span>
                              </li>
                              <li className='flex items-center gap-4'>
                                <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                                <span className='text-2xl w-full flex-1'>
                                  Ubicación de la empresa o negocio a través de Google Maps.
                                </span>
                              </li>

                              <li className='flex items-center gap-4'>
                                <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                                <span className='text-2xl w-full flex-1'>
                                  Seguridad Anti Spam
                                </span>
                              </li>

                              <li className='flex items-center gap-4'>
                                <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                                <span className='text-2xl w-full flex-1'>
                                  Interacción con Redes Sociales. (WhatsApp – Facebook –
                                  YouTube)
                                </span>
                              </li>
                              <li className='flex items-center gap-4'>
                                <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                                <span className='text-2xl w-full flex-1'>
                                  Podrá ADMINISTRAR Hasta 03 Internas.
                                </span>
                              </li>
                              <li className='flex items-center gap-4'>
                                <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                                <span className='text-2xl w-full flex-1'>
                                  Hasta 10 correos corporativos
                                </span>
                              </li>
                              <li className='flex items-center gap-4'>
                                <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                                <span className='text-2xl w-full flex-1'>
                                  Entrega de acceso al administrador.
                                </span>
                              </li>
                              <li className='flex items-center gap-4'>
                                <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                                <span className='text-2xl w-full flex-1'>
                                  Manual de Usuario.
                                </span>
                              </li>
                              <li className='flex items-center gap-4'>
                                <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                                <span className='text-2xl w-full flex-1'>
                                  Capacitación del sistema (VIRTUAL).
                                </span>
                              </li>

                              <li className='flex items-center gap-4'>
                                <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                                <span className='text-2xl w-full flex-1'>
                                  Soporte Técnico. Por 03 mes (Solo atendemos incidencias o
                                  fallas en nuestro servicio + (01) cambio textuales e imágenes).
                                </span>
                              </li>
                              <li className='flex items-center gap-4'>
                                <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                                <span className='text-2xl w-full flex-1'>
                                  Técnica de Posicionamiento Web (SEO).
                                </span>
                              </li>
                              <li className='flex items-center gap-4'>
                                <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                                <span className='text-2xl w-full flex-1'>
                                  Retoque Fotográfico de Hasta 15
                                </span>
                              </li>

                              <li className='flex flex-col items-center gap-4 py-8'>
                                <span className='text-[1.6rem] w-full flex-1 font-bold'>
                                  EL CLIENTE NOS REMITE :
                                </span>
                                <ul className='w-full pl-10 space-y-3 '>
                                  <li className='flex items-center gap-4 '>
                                    <LuChevronRight
                                      size={20}
                                      className='text-2xl text-secondary'
                                    />
                                    <span className='text-2xl w-full flex-1'>
                                      Su logotipo editable (PSD – Ai – CDR).
                                    </span>
                                  </li>
                                  <li className='flex items-center gap-4 '>
                                    <LuChevronRight
                                      size={20}
                                      className='text-2xl text-secondary'
                                    />
                                    <span className='text-2xl w-full flex-1'>
                                      Entrega de textos para la página web.
                                    </span>
                                  </li>
                                  <li className='flex items-center gap-4 '>
                                    <LuChevronRight
                                      size={20}
                                      className='text-2xl text-secondary'
                                    />
                                    <span className='text-2xl w-full flex-1'>
                                      Nos remite Fotos e imágenes en buena resolución.
                                    </span>
                                  </li>
                                  <li className='flex items-center gap-4 '>
                                    <LuChevronRight
                                      size={20}
                                      className='text-2xl text-secondary'
                                    />
                                    <span className='text-2xl w-full flex-1'>
                                      Entrega de datos de contacto
                                    </span>
                                  </li>
                                </ul>
                              </li>
                              <li className='flex items-center gap-4'>
                                <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                                <span className='text-2xl w-full flex-1'>
                                  Tiempo de Trabajo : 15 días
                                </span>
                              </li>
                              <li className='flex items-center gap-4'>
                                <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                                <span className='text-2xl w-full flex-1'>
                                  Forma de Trabajo : Bajo contrato.
                                </span>
                              </li>
                              <li className='flex items-center gap-4'>
                                <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                                <span className='text-2xl w-full flex-1'>
                                  Administración de dominio .com.pe o .pe se cotiza aparte
                                </span>
                              </li>
                              <li className='flex items-center gap-4'>
                                <LuBadgeX size={20} className='text-2xl text-secondary' />
                                <span className='text-2xl w-full flex-1'>
                                  Nuestros Costos <strong>NO incluyen IGV</strong>
                                </span>
                              </li>
                            </ul>
                            <button
                              type='button'
                              onClick={() => RedirigirWsp(8)}
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
                        : selected == 9
                          ? (
                            <div className='w-full border-2 bg-gray-100 border-gray-500/30 py-8 px-10 rounded-3xl lg:-mr-5 relative'>
                              <div className='mb-12 text-center space-y-3'>
                                <h1 className='text-primary text-5xl font-extrabold transition-all'>
                                  TIENDA VIRTUAL - ECOMMERCE <br /> Plan GOLDEN
                                </h1>
                              </div>
                              <ul className='space-y-3 mb-8'>
                                <li className='flex items-center gap-4 font-medium'>
                                  <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                                  <span className='text-2xl w-full flex-1'>
                                    Hasta 8 internas. A medida del cliente - <strong>Remite su ejemplo</strong>
                                  </span>
                                </li>
                                <li className='flex items-center gap-4 font-medium'>
                                  <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                                  <span className='text-2xl w-full flex-1'>
                                    Desarrollamos un Brief A MEDIDA
                                  </span>
                                </li>
                                <li className='flex items-center gap-4 font-medium'>
                                  <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                                  <span className='text-2xl w-full flex-1'>
                                    Integración de <strong>Carrito de COMPRAS</strong>.
                                  </span>
                                </li>
                                <li className='flex items-center gap-4 font-medium'>
                                  <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                                  <span className='text-2xl w-full flex-1'>
                                    <strong>EL COSTO POR LA INTEGRACIÓN DEL SERVICIO DE COMERCIO ELECTRÓNICO, ES ASUMIDO POR EL CLIENTE </strong>.
                                  </span>
                                </li>
                                <li className='flex flex-col items-center gap-4 py-8'>
                                  <span className='text-[1.6rem] w-full flex-1 font-bold'>
                                    Pasarela de Pago: CULQUI -  IZI PAY:
                                  </span>
                                  <ul className='w-full pl-10 space-y-3 '>
                                    <li className='flex items-center gap-4 '>
                                      <LuChevronRight
                                        size={20}
                                        className='text-2xl text-secondary'
                                      />
                                      <span className='text-2xl w-full flex-1'>
                                        Medio de pago: Tarjetas de crédito, yape, plin, tunki, pago efectivo.
                                      </span>
                                    </li>
                                    <li className='flex items-center gap-4 '>
                                      <LuChevronRight
                                        size={20}
                                        className='text-2xl text-secondary'
                                      />
                                      <span className='text-2xl w-full flex-1'>
                                        Registro de pagos en el sistema de Culqui/iziPay y en el sistema de la tienda virtual.
                                      </span>
                                    </li>
                                    <li className='flex items-center gap-4 '>
                                      <LuChevronRight
                                        size={20}
                                        className='text-2xl text-secondary'
                                      />
                                      <span className='text-2xl w-full flex-1'>
                                        Mail de notificación al cliente automático.
                                      </span>
                                    </li>
                                    <li className='flex items-center gap-4 '>
                                      <LuChevronRight
                                        size={20}
                                        className='text-2xl text-secondary'
                                      />
                                      <span className='text-2xl w-full flex-1'>
                                        Mail de notificación al Gmail del negocio.
                                      </span>
                                    </li>
                                    <li className='flex items-center gap-4 '>
                                      <LuChevronRight
                                        size={20}
                                        className='text-2xl text-secondary'
                                      />
                                      <span className='text-2xl w-full flex-1'>
                                        Comprobante de pagos.
                                      </span>
                                    </li>
                                    <li className='flex items-center gap-4 '>
                                      <LuChevronRight
                                        size={20}
                                        className='text-2xl text-secondary'
                                      />
                                      <span className='text-2xl w-full flex-1'>
                                        Registro de datos del usuario
                                      </span>
                                    </li>
                                  </ul>
                                </li>

                                <li className='flex items-center gap-4 font-medium'>
                                  <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                                  <span className='text-2xl w-full flex-1'>
                                    Trabajamos nuestra programación y Maquetación desde CERO
                                  </span>
                                </li>

                                <li className='flex items-center gap-4 font-medium'>
                                  <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                                  <span className='text-2xl w-full flex-1'>
                                    Programación en PHP - LARAVEL Y REACT
                                  </span>
                                </li>
                                <li className='flex items-center gap-4 font-medium'>
                                  <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                                  <span className='text-2xl w-full flex-1'>
                                    Base de Datos Myql
                                  </span>
                                </li>
                                <li className='flex items-center gap-4 font-medium'>
                                  <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                                  <span className='text-2xl w-full flex-1'>
                                    Soporte <strong>ilimitado de productos</strong>
                                  </span>
                                </li>
                                <li className='flex items-center gap-4'>
                                  <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                                  <span className='text-2xl w-full flex-1'>
                                    Administración Dominio .com <strong>GRATIS x un AÑO</strong>
                                  </span>
                                </li>
                                <li className='flex items-center gap-4'>
                                  <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                                  <span className='text-2xl w-full flex-1'>
                                    Alojamiento Web 20 GB (Cpanel Independiente) <strong>GRATIS x un AÑO</strong>
                                  </span>
                                </li>
                                <li className='flex items-center gap-4'>
                                  <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                                  <span className='text-2xl w-full flex-1'>
                                    NO Utilizamos plantillas o CMS Gratuitos de Internet
                                  </span>
                                </li>
                                <li className='flex items-center gap-4'>
                                  <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                                  <span className='text-2xl w-full flex-1'>
                                    WEB desarrollada desde CERO
                                  </span>
                                </li>
                                <li className='flex items-center gap-4 font-medium'>
                                  <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                                  <span className='text-2xl w-full flex-1'>
                                    Formularios de Contacto Dinámico. MAIL de repuesta al visitante.
                                  </span>
                                </li>
                                <li className='flex items-center gap-4'>
                                  <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                                  <span className='text-2xl w-full flex-1'>
                                    Ubicación de la empresa o negocio a través de Google Maps.
                                  </span>
                                </li>

                                <li className='flex items-center gap-4'>
                                  <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                                  <span className='text-2xl w-full flex-1'>
                                    Seguridad Anti Spam
                                  </span>
                                </li>

                                <li className='flex items-center gap-4'>
                                  <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                                  <span className='text-2xl w-full flex-1'>
                                    Interacción con Redes Sociales. (WhatsApp – Facebook –
                                    YouTube)
                                  </span>
                                </li>
                                <li className='flex items-center gap-4'>
                                  <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                                  <span className='text-2xl w-full flex-1'>
                                    Podrá ADMINISTRAR Hasta 04 Internas.
                                  </span>
                                </li>
                                <li className='flex items-center gap-4'>
                                  <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                                  <span className='text-2xl w-full flex-1'>
                                    Hasta 15 correos corporativos
                                  </span>
                                </li>
                                <li className='flex items-center gap-4'>
                                  <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                                  <span className='text-2xl w-full flex-1'>
                                    Indexación del <strong>CERTIFICADO SSL</strong>
                                  </span>
                                </li>
                                <li className='flex items-center gap-4'>
                                  <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                                  <span className='text-2xl w-full flex-1'>
                                    Entrega de acceso al administrador.
                                  </span>
                                </li>
                                <li className='flex items-center gap-4'>
                                  <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                                  <span className='text-2xl w-full flex-1'>
                                    Manual de Usuario.
                                  </span>
                                </li>
                                <li className='flex items-center gap-4'>
                                  <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                                  <span className='text-2xl w-full flex-1'>
                                    Capacitación del sistema (VIRTUAL).
                                  </span>
                                </li>

                                <li className='flex items-center gap-4'>
                                  <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                                  <span className='text-2xl w-full flex-1'>
                                    Soporte Técnico. Por 06 mes (Solo atendemos incidencias o
                                    fallas en nuestro servicio + (01) cambio textuales e imágenes).
                                  </span>
                                </li>
                                <li className='flex items-center gap-4'>
                                  <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                                  <span className='text-2xl w-full flex-1'>
                                    Técnica de Posicionamiento Web (SEO).
                                  </span>
                                </li>
                                <li className='flex items-center gap-4'>
                                  <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                                  <span className='text-2xl w-full flex-1'>
                                    ALTA DE GOOGLE
                                  </span>
                                </li>
                                <li className='flex items-center gap-4'>
                                  <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                                  <span className='text-2xl w-full flex-1'>
                                    Propiedad Verificada
                                  </span>
                                </li>
                                <li className='flex items-center gap-4'>
                                  <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                                  <span className='text-2xl w-full flex-1'>
                                    Inicio de <strong>SEO</strong>, trabajo con Palabras claves, Script y otras técnicas de Posicionamiento
                                  </span>
                                </li>
                                <li className='flex items-center gap-4'>
                                  <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                                  <span className='text-2xl w-full flex-1'>
                                    Ubicación del negocio en <strong>Google MAP</strong>
                                  </span>
                                </li>
                                <li className='flex items-center gap-4'>
                                  <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                                  <span className='text-2xl w-full flex-1'>
                                    <strong>Google Analitics</strong> - Ud podrá medir quien lo visita - Metricas
                                  </span>
                                </li>
                                <li className='flex items-center gap-4'>
                                  <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                                  <span className='text-2xl w-full flex-1'>
                                    Retoque Fotográfico de Hasta 30
                                  </span>
                                </li>

                                <li className='flex flex-col items-center gap-4 py-8'>
                                  <span className='text-[1.6rem] w-full flex-1 font-bold'>
                                    EL CLIENTE NOS REMITE :
                                  </span>
                                  <ul className='w-full pl-10 space-y-3 '>
                                    <li className='flex items-center gap-4 '>
                                      <LuChevronRight
                                        size={20}
                                        className='text-2xl text-secondary'
                                      />
                                      <span className='text-2xl w-full flex-1'>
                                        Su logotipo editable (PSD – Ai – CDR).
                                      </span>
                                    </li>
                                    <li className='flex items-center gap-4 '>
                                      <LuChevronRight
                                        size={20}
                                        className='text-2xl text-secondary'
                                      />
                                      <span className='text-2xl w-full flex-1'>
                                        Entrega de textos para la página web.
                                      </span>
                                    </li>
                                    <li className='flex items-center gap-4 '>
                                      <LuChevronRight
                                        size={20}
                                        className='text-2xl text-secondary'
                                      />
                                      <span className='text-2xl w-full flex-1'>
                                        Nos remite Fotos e imágenes en buena resolución.
                                      </span>
                                    </li>
                                    <li className='flex items-center gap-4 '>
                                      <LuChevronRight
                                        size={20}
                                        className='text-2xl text-secondary'
                                      />
                                      <span className='text-2xl w-full flex-1'>
                                        Entrega de datos de contacto
                                      </span>
                                    </li>
                                  </ul>
                                </li>
                                <li className='flex items-center gap-4'>
                                  <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                                  <span className='text-2xl w-full flex-1'>
                                    Tiempo de Trabajo : 25 días
                                  </span>
                                </li>
                                <li className='flex items-center gap-4'>
                                  <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                                  <span className='text-2xl w-full flex-1'>
                                    Forma de Trabajo : Bajo contrato.
                                  </span>
                                </li>
                                <li className='flex items-center gap-4'>
                                  <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                                  <span className='text-2xl w-full flex-1'>
                                    Administración de dominio .com.pe o .pe se cotiza aparte
                                  </span>
                                </li>
                                <li className='flex items-center gap-4'>
                                  <LuBadgeX size={20} className='text-2xl text-secondary' />
                                  <span className='text-2xl w-full flex-1'>
                                    Nuestros Costos <strong>NO incluyen IGV</strong>
                                  </span>
                                </li>
                              </ul>
                              <button
                                type='button'
                                onClick={() => RedirigirWsp(9)}
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
