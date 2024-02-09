'use client'
import { LuBadgeCheck, LuBadgeX } from 'react-icons/lu'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { Autoplay, Navigation } from 'swiper/modules'
import { Modals } from './Modals'
import { useState, useEffect } from 'react'
import 'swiper/css/navigation'

const SwiperPlanes = () => {
  const [open, setOpen] = useState(false)
  const [selected, setselected] = useState(0)

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

  useEffect(() => {
    // Selecciona el botón que quieres mover y el contenedor de destino
    const swiperButtonPrev = document.querySelector('.swiper-button-prev')
    const swiperButtonNext = document.querySelector('.swiper-button-next')
    const destinationContainer = document.querySelector('#swiper_button')
    // Mueve el botón al contenedor de destino si ambos elementos existen
    if (swiperButtonPrev && destinationContainer && swiperButtonNext) {
      destinationContainer.appendChild(swiperButtonPrev)
      destinationContainer.appendChild(swiperButtonNext)
    }
  }, [])

  return (
    <div className='w-full flex flex-col lg:flex-row md:items-center gap-y-5 relative h-[700px] py-4 md:py-10'>
      <Swiper
        className='w-full flex justify-center items-center swiper_planes_logo'
        loop
        spaceBetween={30}
        speed={300}
        navigation
        // autoplay={{
        //   delay: 4000,
        //   reverseDirection: false
        // }}
        breakpoints={{
          0: {
            slidesPerView: 1,
            centeredSlides: false
          },
          768: {
            slidesPerView: 2,
            centeredSlides: false
          },
          992: {
            slidesPerView: 2,
            centeredSlides: false
          },
          1200: {
            slidesPerView: 3,
            centeredSlides: true
          }
        }}
        modules={[Autoplay, Navigation]}
      >
        <SwiperSlide className='w-full h-full my-auto transition-all'>
          <div className='w-full border-2 bg-white border-gray-500/30 py-8 px-10 rounded-3xl lg:-mr-5 plan2 transition-all relative group'>
            <div className='mb-12 text-center space-y-3'>
              <h4 className='font-semibold text-xl text-gray-500 group-hover:text-secondary/90 transition-all '>
                LANDING PAGE - ADMINISTRABLE
              </h4>
              <h1 className='text-5xl font-extrabold group-hover:text-primary transition-all'>S/ 399.00</h1>
            </div>
            <ul className='space-y-5 mb-8'>
              <li className='flex items-center gap-4 font-medium'>
                <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                <span className='text-2xl w-full flex-1'>
                  (01) interna de Aterrizaje - <strong>LANDING PAGE</strong>, El cliente elegirá una Plantilla
                </span>
              </li>
              <li className='flex items-center gap-4 font-medium'>
                <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                <span className='text-2xl w-full flex-1'>
                  <strong>1 Modulo - sección</strong> administrable
                </span>
              </li>
              <li className='flex items-center gap-4 font-medium'>
                <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                <span className='text-2xl w-full flex-1'>
                  Capación de Uso del modulo administrable
                </span>
              </li>
              <li className='flex items-center gap-4 font-medium'>
                <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                <span className='text-2xl w-full flex-1'>
                  Accesos o credenciales al administrador
                </span>
              </li>
              <li className='flex items-center gap-4'>
                <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                <span className='text-2xl w-full flex-1'>
                  Dominio .com  <strong>GRATIS x un AÑO</strong>
                </span>
              </li>
              <li className='flex items-center gap-4'>
                <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                <span className='text-2xl w-full flex-1'>
                  Alojamiento Web Hasta 500 MB <strong>(Sin Cpanel Independiente)</strong> GRATIS x un AÑO
                </span>
              </li>
              <li className='flex items-center gap-4'>
                <LuBadgeX size={20} className='text-2xl text-secondary' />
                <strong className='text-2xl w-full flex-1'>
                  NO Utilizamos plantillas o CMS Gratuitos de Internet
                </strong>
              </li>
              <li className='flex items-center gap-4'>
                <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                <span className='text-2xl w-full flex-1'>
                  <strong>03 cuentas de correos corporativos</strong>
                </span>
              </li>
              <li className='flex items-center gap-4 '>
                <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                <span className='text-2xl w-full flex-1'>
                  Soporte Técnico. Por 01 mes
                </span>
              </li>
              <li className='flex items-center gap-4 font-medium'>
                <span
                  onClick={() => {
                    setselected(2)
                    setOpen(true)
                  }}
                  className='text-2xl w-fit mx-auto block text-center text-secondary font-bold border-b border-secondary hover:text-secondary/60 transition-colors cursor-pointer'
                >
                  Ver mas
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
            {/* <p className='text-gray-500 text-center'>Its free so why not</p> */}
          </div>
        </SwiperSlide>
        <SwiperSlide className='w-full h-full my-auto transition-all'>
          <div className='w-full border-2 bg-white border-gray-500/30 py-8 px-10 rounded-3xl lg:-mr-5 plan2 transition-all relative group'>
            <div className='mb-12 text-center space-y-3'>
              <h4 className='font-semibold text-xl text-gray-500 group-hover:text-secondary/90 transition-all '>
                WEB INFORMATIVA
              </h4>
              <h1 className='text-5xl font-extrabold group-hover:text-primary transition-all'>S/ 469.00</h1>
            </div>
            <ul className='space-y-5 mb-8'>
              <li className='flex items-center gap-4 font-medium'>
                <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                <span className='text-2xl w-full flex-1'>
                  Hasta (04) internas, El cliente elegirá una <strong>Plantilla Express</strong>
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
              <li className='flex items-center gap-4 font-medium'>
                <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                <span className='text-2xl w-full flex-1'>
                  WEB desarrollada desde CERO
                </span>
              </li>
              <li className='flex items-center gap-4'>
                <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                <span className='text-2xl w-full flex-1'>
                  Dominio .com  <strong>GRATIS x un AÑO</strong>
                </span>
              </li>
              <li className='flex items-center gap-4'>
                <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                <span className='text-2xl w-full flex-1'>
                  Alojamiento Web hasta 1 GB <strong>(Sin Cpanel Independiente)</strong> GRATIS x un AÑO
                </span>
              </li>
              <li className='flex items-center gap-4'>
                <LuBadgeX size={20} className='text-2xl text-secondary' />
                <strong className='text-2xl w-full flex-1'>
                  NO Utilizamos plantillas o CMS Gratuitos de Internet
                </strong>
              </li>
              <li className='flex items-center gap-4'>
                <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                <span className='text-2xl w-full flex-1'>
                  <strong>03 cuentas de correos corporativos</strong>
                </span>
              </li>
              <li className='flex items-center gap-4 '>
                <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                <span className='text-2xl w-full flex-1'>
                  Soporte Técnico. Por 01 mes
                </span>
              </li>
              <li className='flex items-center gap-4 font-medium'>
                <span
                  onClick={() => {
                    setselected(3)
                    setOpen(true)
                  }}
                  className='text-2xl w-fit mx-auto block text-center text-secondary font-bold border-b border-secondary hover:text-secondary/60 transition-colors cursor-pointer'
                >
                  Ver mas
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
            {/* <p className='text-gray-500 text-center'>Its free so why not</p> */}
          </div>
        </SwiperSlide>
        <SwiperSlide className='w-full h-full my-auto transition-all'>
          <div className='w-full border-2 bg-white border-gray-500/30 py-8 px-10 rounded-3xl lg:-mr-5 plan2 transition-all relative group'>
            <div className='mb-12 text-center space-y-3'>
              <h4 className='font-semibold text-xl text-gray-500 group-hover:text-secondary/90 transition-all '>
                WEB INFORMATIVA - GOOGLE  - SEO
              </h4>
              <h1 className='text-5xl font-extrabold group-hover:text-primary transition-all'>S/ 699.00</h1>
            </div>
            <ul className='space-y-5 mb-8'>
              <li className='flex items-center gap-4 font-medium'>
                <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                <span className='text-2xl w-full flex-1'>
                  Hasta (04) internas, El cliente elegirá una <strong>Plantilla Express</strong>
                </span>
              </li>
              <li className='flex items-center gap-4 font-medium'>
                <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                <span className='text-2xl w-full flex-1'>
                  Técnicas de Posicionamiento Web (SEO).
                </span>
              </li>
              <li className='flex items-center gap-4 font-medium'>
                <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                <span className='text-2xl w-full flex-1'>
                  Propiedad Verificada
                </span>
              </li>
              <li className='flex items-center gap-4 font-medium'>
                <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                <span className='text-2xl w-full flex-1'>
                  Indexación de palabras claves, coordinación directa con el cliente
                </span>
              </li>
              <li className='flex items-center gap-4 font-medium'>
                <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                <span className='text-2xl w-full flex-1'>
                  Ubicación del negocio en <strong>Google MAP</strong>
                </span>
              </li>
              <li className='flex items-center gap-4'>
                <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                <span className='text-2xl w-full flex-1'>
                  Dominio .com  <strong>GRATIS x un AÑO</strong>
                </span>
              </li>
              <li className='flex items-center gap-4'>
                <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                <span className='text-2xl w-full flex-1'>
                  Alojamiento Web hasta 1 GB <strong>(Sin Cpanel Independiente)</strong> GRATIS x un AÑO
                </span>
              </li>
              <li className='flex items-center gap-4'>
                <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                <span className='text-2xl w-full flex-1'>
                  <strong>03 cuentas de correos corporativos</strong>
                </span>
              </li>
              <li className='flex items-center gap-4 '>
                <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                <span className='text-2xl w-full flex-1'>
                  Soporte Técnico. Por 01 mes
                </span>
              </li>
              <li className='flex items-center gap-4 font-medium'>
                <span
                  onClick={() => {
                    setselected(4)
                    setOpen(true)
                  }}
                  className='text-2xl w-fit mx-auto block text-center text-secondary font-bold border-b border-secondary hover:text-secondary/60 transition-colors cursor-pointer'
                >
                  Ver mas
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
            {/* <p className='text-gray-500 text-center'>Its free so why not</p> */}
          </div>
        </SwiperSlide>
        <SwiperSlide className='w-full h-full my-auto transition-all'>
          <div className='w-full border-2 bg-white border-gray-500/30 py-8 px-10 rounded-3xl lg:-mr-5 plan2 transition-all relative group'>
            <div className='mb-12 text-center space-y-3'>
              <h4 className='font-semibold text-xl text-gray-500 group-hover:text-secondary/90 transition-all '>
                WEB ADMINISTRABLE - PLAN GOLDEN
              </h4>
              <h1 className='text-5xl font-extrabold group-hover:text-primary transition-all'>S/ 990.00</h1>
            </div>
            <ul className='space-y-5 mb-8'>
              <li className='flex items-center gap-4 font-medium'>
                <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                <span className='text-2xl w-full flex-1'>
                  Hasta (04) internas, a medida del cliente <strong>Plantilla Express</strong>
                </span>
              </li>
              <li className='flex items-center gap-4 font-medium'>
                <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                <span className='text-2xl w-full flex-1'>
                  Podrá ADMINISTRAR Hasta 02 Internas. <strong>Noticias o Productos o Servicios</strong>
                </span>
              </li>
              <li className='flex items-center gap-4 font-medium'>
                <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                <span className='text-2xl w-full flex-1'>
                  Entrega de accesos al administrador
                </span>
              </li>
              <li className='flex items-center gap-4 font-medium'>
                <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                <span className='text-2xl w-full flex-1'>
                  Capacitacion y manual del sistema
                </span>
              </li>

              <li className='flex items-center gap-4'>
                <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                <span className='text-2xl w-full flex-1'>
                  Dominio .com  <strong>GRATIS x un AÑO</strong>
                </span>
              </li>
              <li className='flex items-center gap-4'>
                <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                <span className='text-2xl w-full flex-1'>
                  Alojamiento Web hasta 5 GB <strong>(Sin Cpanel Independiente)</strong> GRATIS x un AÑO
                </span>
              </li>
              <li className='flex items-center gap-4'>
                <LuBadgeX size={20} className='text-2xl text-secondary' />
                <strong className='text-2xl w-full flex-1'>
                  NO Utilizamos plantillas o CMS Gratuitos de Internet
                </strong>
              </li>
              <li className='flex items-center gap-4'>
                <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                <span className='text-2xl w-full flex-1'>
                  <strong>Hasta 15 correos corporativos</strong>
                </span>
              </li>
              <li className='flex items-center gap-4 '>
                <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                <span className='text-2xl w-full flex-1'>
                  Soporte Técnico. Por 03 mes
                </span>
              </li>
              <li className='flex items-center gap-4 font-medium'>
                <span
                  onClick={() => {
                    setselected(5)
                    setOpen(true)
                  }}
                  className='text-2xl w-fit mx-auto block text-center text-secondary font-bold border-b border-secondary hover:text-secondary/60 transition-colors cursor-pointer'
                >
                  Ver mas
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
            {/* <p className='text-gray-500 text-center'>Its free so why not</p> */}
          </div>
        </SwiperSlide>
        <SwiperSlide className='w-full h-full my-auto transition-all'>
          <div className='w-full border-2 bg-white border-gray-500/30 py-8 px-10 rounded-3xl lg:-mr-5 plan2 transition-all relative group'>
            <div className='mb-12 text-center space-y-3'>
              <h3 className='font-semibold text-6xl text-gray-500 group-hover:text-secondary/90 transition-all '>
                WEB ADMINISTRABLE <br />
                PLAN EMPRESA
              </h3>
              {/* <h1 className='text-5xl font-extrabold group-hover:text-primary transition-all'>S/ 469.00</h1> */}
            </div>
            <ul className='space-y-5 mb-8'>
              <li className='flex items-center gap-4 font-medium'>
                <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                <span className='text-2xl w-full flex-1'>
                  Hasta (06) internas a la medida del cliente. <strong>Nos remite ejemplo</strong>
                </span>
              </li>
              <li className='flex items-center gap-4 font-medium'>
                <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                <span className='text-2xl w-full flex-1'>
                  Podrá ADMINISTRAR Hasta 04 Internas.
                </span>
              </li>
              <li className='flex items-center gap-4 font-medium'>
                <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                <span className='text-2xl w-full flex-1'>
                  Entrega de accesos al administrador
                </span>
              </li>
              <li className='flex items-center gap-4 font-medium'>
                <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                <span className='text-2xl w-full flex-1'>
                  Capacitacion y manual del sistema
                </span>
              </li>
              <li className='flex items-center gap-4 font-medium'>
                <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                <span className='text-2xl w-full flex-1'>
                  Técnica de Posicionamiento Web (SEO).
                </span>
              </li>
              <li className='flex items-center gap-4 font-medium'>
                <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                <span className='text-2xl w-full flex-1'>
                  Ubicación del negocio en <strong>Google MAP</strong>
                </span>
              </li>

              <li className='flex items-center gap-4'>
                <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                <span className='text-2xl w-full flex-1'>
                  Dominio .com  <strong>GRATIS x un AÑO</strong>
                </span>
              </li>
              <li className='flex items-center gap-4'>
                <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                <span className='text-2xl w-full flex-1'>
                  Alojamiento Web ilimitado <strong>(Cpanel Independiente)</strong> GRATIS x un AÑO
                </span>
              </li>
              <li className='flex items-center gap-4'>
                <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                <strong className='text-2xl w-full flex-1'>
                  Retoque Fotográfico de Hasta 20
                </strong>
              </li>
              <li className='flex items-center gap-4'>
                <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                <span className='text-2xl w-full flex-1'>
                  <strong>Hasta 30 correos corporativos</strong>
                </span>
              </li>
              <li className='flex items-center gap-4 '>
                <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                <span className='text-2xl w-full flex-1'>
                  Soporte Técnico. Por 06 mes
                </span>
              </li>
              <li className='flex items-center gap-4 font-medium'>
                <span
                  onClick={() => {
                    setselected(6)
                    setOpen(true)
                  }}
                  className='text-2xl w-fit mx-auto block text-center text-secondary font-bold border-b border-secondary hover:text-secondary/60 transition-colors cursor-pointer'
                >
                  Ver mas
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
            {/* <p className='text-gray-500 text-center'>Its free so why not</p> */}
          </div>
        </SwiperSlide>
        <SwiperSlide className='w-full h-full my-auto transition-all'>
          <div className='w-full border-2 bg-white border-gray-500/30 py-8 px-10 rounded-3xl lg:-mr-5 plan2 transition-all relative group'>
            <div className='mb-12 text-center space-y-3'>
              <h4 className='font-semibold text-xl text-gray-500 group-hover:text-secondary/90 transition-all uppercase'>
                TIENDA VIRTUAL - Plan Express
              </h4>
              <h1 className='text-5xl font-extrabold group-hover:text-primary transition-all'>S/ 990.00</h1>
            </div>
            <ul className='space-y-5 mb-8'>
              <li className='flex items-center gap-4 font-medium'>
                <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                <span className='text-2xl w-full flex-1'>
                  Hasta (05) internas, bajo plantillas Pre determinadas
                </span>
              </li>
              <li className='flex items-center gap-4 font-medium'>
                <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                <span className='text-2xl w-full flex-1'>
                  Podrá ADMINISTRAR Hasta 02 Internas
                </span>
              </li>
              <li className='flex items-center gap-4 font-medium'>
                <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                <span className='text-2xl w-full flex-1'>
                  Integracion de carrito de compras
                </span>
              </li>
              <li className='flex items-center gap-4 font-medium'>
                <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                <span className='text-2xl w-full flex-1'>
                  <strong>Pasarela de Pago: Mercado Pago</strong>, registro de pagos en el sistema
                </span>
              </li>
              <li className='flex items-center gap-4'>
                <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                <span className='text-2xl w-full flex-1'>
                  Costo de integración es asumido por el cliente
                </span>
              </li>
              <li className='flex items-center gap-4'>
                <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                <span className='text-2xl w-full flex-1'>
                  Dominio .com  <strong>GRATIS x un AÑO</strong>
                </span>
              </li>
              <li className='flex items-center gap-4'>
                <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                <span className='text-2xl w-full flex-1'>
                  Alojamiento Web hasta 3 GB <strong>(Sin Cpanel Independiente)</strong> GRATIS x un AÑO
                </span>
              </li>
              <li className='flex items-center gap-4'>
                <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                <span className='text-2xl w-full flex-1'>
                  <strong>Hasta 5 correos corporativos</strong>
                </span>
              </li>
              <li className='flex items-center gap-4 '>
                <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                <span className='text-2xl w-full flex-1'>
                  Soporte Técnico. Por 03 mes
                </span>
              </li>
              <li className='flex items-center gap-4 font-medium'>
                <span
                  onClick={() => {
                    setselected(7)
                    setOpen(true)
                  }}
                  className='text-2xl w-fit mx-auto block text-center text-secondary font-bold border-b border-secondary hover:text-secondary/60 transition-colors cursor-pointer'
                >
                  Ver mas
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
            {/* <p className='text-gray-500 text-center'>Its free so why not</p> */}
          </div>
        </SwiperSlide>
        <SwiperSlide className='w-full h-full my-auto transition-all'>
          <div className='w-full border-2 bg-white border-gray-500/30 py-8 px-10 rounded-3xl lg:-mr-5 plan2 transition-all relative group'>
            <div className='mb-12 text-center space-y-3'>
              <h3 className='font-semibold text-6xl text-gray-500 group-hover:text-secondary/90 transition-all uppercase'>
                TIENDA VIRTUAL - ECOMMERCE <br /> Plan SILVER
              </h3>
              {/* <h1 className='text-5xl font-extrabold group-hover:text-primary transition-all'>S/ 469.00</h1> */}
            </div>
            <ul className='space-y-5 mb-8'>
              <li className='flex items-center gap-4 font-medium'>
                <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                <span className='text-2xl w-full flex-1'>
                  Hasta (06) internas bajo Plantillas Pre determinadas
                </span>
              </li>
              <li className='flex items-center gap-4 font-medium'>
                <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                <span className='text-2xl w-full flex-1'>
                  Podrá ADMINISTRAR Hasta 03 Internas.
                </span>
              </li>
              <li className='flex items-center gap-4 font-medium'>
                <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                <span className='text-2xl w-full flex-1'>
                  Entrega de accesos al administrador
                </span>
              </li>
              <li className='flex items-center gap-4 font-medium'>
                <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                <span className='text-2xl w-full flex-1'>
                  Integracion de carrito de compras
                </span>
              </li>
              <li className='flex items-center gap-4 font-medium'>
                <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                <span className='text-2xl w-full flex-1'>
                  <strong>Pasarela de Pago: Mercado Pago</strong>, registro de pagos en el sistema
                </span>
              </li>
              <li className='flex items-center gap-4'>
                <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                <span className='text-2xl w-full flex-1'>
                  Costo de integración es asumido por el cliente
                </span>
              </li>
              <li className='flex items-center gap-4 font-medium'>
                <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                <span className='text-2xl w-full flex-1'>
                  Técnica de Posicionamiento Web (SEO).
                </span>
              </li>
              <li className='flex items-center gap-4 font-medium'>
                <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                <span className='text-2xl w-full flex-1'>
                  Ubicación del negocio en <strong>Google MAP</strong>
                </span>
              </li>
              <li className='flex items-center gap-4'>
                <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                <span className='text-2xl w-full flex-1'>
                  Alojamiento Web 8GB <strong>(Sin Cpanel Independiente)</strong> GRATIS x un AÑO
                </span>
              </li>
              <li className='flex items-center gap-4 '>
                <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                <span className='text-2xl w-full flex-1'>
                  Soporte Técnico. Por 06 mes
                </span>
              </li>
              <li className='flex items-center gap-4 font-medium'>
                <span
                  onClick={() => {
                    setselected(8)
                    setOpen(true)
                  }}
                  className='text-2xl w-fit mx-auto block text-center text-secondary font-bold border-b border-secondary hover:text-secondary/60 transition-colors cursor-pointer'
                >
                  Ver mas
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
            {/* <p className='text-gray-500 text-center'>Its free so why not</p> */}
          </div>
        </SwiperSlide>
        <SwiperSlide className='w-full h-full my-auto transition-all'>
          <div className='w-full border-2 bg-white border-gray-500/30 py-8 px-10 rounded-3xl lg:-mr-5 plan2 transition-all relative group'>
            <div className='mb-12 text-center space-y-3'>
              <h3 className='font-semibold text-6xl text-gray-500 group-hover:text-secondary/90 transition-all uppercase'>
                TIENDA VIRTUAL - ECOMMERCE <br /> Plan GOLDEN
              </h3>
              {/* <h1 className='text-5xl font-extrabold group-hover:text-primary transition-all'>S/ 469.00</h1> */}
            </div>
            <ul className='space-y-5 mb-8'>
              <li className='flex items-center gap-4 font-medium'>
                <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                <span className='text-2xl w-full flex-1'>
                  Hasta (08) internas a medida del cliente <strong>Remite su ejemplo</strong>
                </span>
              </li>
              <li className='flex items-center gap-4 font-medium'>
                <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                <span className='text-2xl w-full flex-1'>
                  Podrá ADMINISTRAR Hasta 04 Internas.
                </span>
              </li>
              <li className='flex items-center gap-4 font-medium'>
                <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                <span className='text-2xl w-full flex-1'>
                  Soporte <strong>Ilimtados de productos</strong>
                </span>
              </li>
              <li className='flex items-center gap-4 font-medium'>
                <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                <span className='text-2xl w-full flex-1'>
                  Integracion de carrito de compras
                </span>
              </li>
              <li className='flex items-center gap-4 font-medium'>
                <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                <span className='text-2xl w-full flex-1'>
                  <strong>Pasarela de Pago: Culqui - Izi PAY</strong>, registro de pagos en el sistema
                </span>
              </li>
              <li className='flex items-center gap-4'>
                <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                <span className='text-2xl w-full flex-1'>
                  Costo de integración es asumido por el cliente
                </span>
              </li>
              <li className='flex items-center gap-4 font-medium'>
                <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                <span className='text-2xl w-full flex-1'>
                  Técnica de Posicionamiento Web (SEO).
                </span>
              </li>
              <li className='flex items-center gap-4 font-medium'>
                <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                <span className='text-2xl w-full flex-1'>
                  Ubicación del negocio en <strong>Google MAP</strong>
                </span>
              </li>
              <li className='flex items-center gap-4'>
                <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                <span className='text-2xl w-full flex-1'>
                  Alojamiento Web 20GB <strong>(Sin Cpanel Independiente)</strong> GRATIS x un AÑO
                </span>
              </li>
              <li className='flex items-center gap-4 '>
                <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                <span className='text-2xl w-full flex-1'>
                  Soporte Técnico. Por 06 mes
                </span>
              </li>
              <li className='flex items-center gap-4 font-medium'>
                <span
                  onClick={() => {
                    setselected(9)
                    setOpen(true)
                  }}
                  className='text-2xl w-fit mx-auto block text-center text-secondary font-bold border-b border-secondary hover:text-secondary/60 transition-colors cursor-pointer'
                >
                  Ver mas
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
            {/* <p className='text-gray-500 text-center'>Its free so why not</p> */}
          </div>
        </SwiperSlide>
      </Swiper>
      <Modals open={open} setOpen={setOpen} selected={selected} />
    </div>
  )
}

export default SwiperPlanes
