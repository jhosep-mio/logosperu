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
      mensaje = 'Hola, estoy interesado(a) en obtener más información sobre el Plan de Logotipo 69.'
    } else if (seleccion == 2) {
      mensaje = 'Hola, estoy interesado(a) en obtener más información sobre el Plan de Logotipo Excepcional.'
    } else if (seleccion == 3) {
      mensaje = 'Hola, estoy interesado(a) en obtener más información sobre el Plan de Logotipo Standart.'
    } else if (seleccion == 4) {
      mensaje = 'Hola, estoy interesado(a) en obtener más información sobre el Plan de Logotipo Creativo.'
    } else if (seleccion == 5) {
      mensaje = 'Hola, estoy interesado(a) en obtener más información sobre el Plan de Logotipo Profesional.'
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
        autoplay={{
          delay: 4000,
          reverseDirection: false
        }}
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
          <div className='w-full border-2 bg-white border-gray-500/30 py-8 px-10 rounded-3xl lg:-mr-5 plan transition-all relative group'>
            <div className='mb-8 text-center space-y-3'>
              <h4 className='font-semibold text-2xl text-gray-500 group-hover:text-secondary/90 transition-all '>
                PLAN 69
              </h4>
              <h1 className='text-5xl font-extrabold group-hover:text-primary transition-all'>S/ 89.00</h1>
              <p className='text-gray-500'>Pago unico</p>
            </div>
            <ul className='space-y-5 mb-8'>
              <li className='flex items-center gap-4 font-medium'>
                <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                <span className='text-2xl w-full flex-1'>
                  (01) Propuestas de logo - Hasta 3 cambios.
                </span>
              </li>
              <li className='flex items-center gap-4 font-medium'>
                <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                <span className='text-2xl w-full flex-1'>
                  Análisis del Brief o cuestionario técnico para la construcción
                  del Logotipo.
                </span>
              </li>
              <li className='flex items-center gap-4'>
                <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                <span className='text-2xl w-full flex-1'>
                  Coordinación directa, con el cliente para el desarrollo del
                  Brief o cuestionario.
                </span>
              </li>
              <li className='flex items-center gap-4'>
                <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                <span className='text-2xl w-full flex-1'>
                  Entrega de editables: <strong>AI + JPG + PNG + PDF</strong>.
                </span>
              </li>
              <li className='flex items-center gap-4'>
                <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                <span className='text-2xl w-full flex-1'>
                  Amplia Experiencia de trabajos a Distancia.
                </span>
              </li>
              <li className='flex items-center gap-4'>
                <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                <span className='text-2xl w-full flex-1'>
                  Tiempo de entrega : 01 - 02 días Hábiles.
                </span>
              </li>
              <li className='flex items-center gap-4'>
                <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                <span className='text-2xl w-full flex-1'>
                  Forma de Trabajo : Bajo Contrato.
                </span>
              </li>
              <li className='flex items-center gap-4 '>
                <LuBadgeX size={20} className='text-2xl text-secondary' />
                <span className='text-2xl w-full flex-1'>
                  Nuestros costos NO incluyen IGV.
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
            {/* <p className='text-gray-500 text-center'>Its free so why not</p> */}
          </div>
        </SwiperSlide>
        <SwiperSlide className='w-full h-full my-auto transition-all'>
          <div className='w-full border-2 bg-white border-gray-500/30 py-8 px-10 rounded-3xl lg:-mr-5 relative plan transition-all'>
            <div className='absolute -top-8 left-0 right-0 mx-auto w-fit bg-secondary text-white text-center py-3 px-8 text-3xl rounded-xl z-10'>
              <span>Más vendido</span>
            </div>
            <div className='mb-8 text-center space-y-3'>
              <h4 className='font-semibold text-2xl text-gray-500 group-hover:text-secondary/90 transition-all '>
                PLAN EXCEPCIONAL
              </h4>
              <h1 className='text-5xl font-extrabold group-hover:text-primary transition-all'>S/ 169.00</h1>
              <p className='text-gray-500'>Pago unico</p>
            </div>
            <ul className='space-y-5 mb-8'>
              <li className='flex items-center gap-4 font-medium'>
                <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                <span className='text-2xl w-full flex-1'>
                  (02) Propuestas de logo - Hasta 3 cambios del logo escogido.
                </span>
              </li>
              <li className='flex items-center gap-4 font-medium'>
                <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                <span className='text-2xl w-full flex-1'>
                  Análisis del Brief o cuestionario técnico para la construcción
                  del Logotipo.
                </span>
              </li>
              <li className='flex items-center gap-4'>
                <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                <span className='text-2xl w-full flex-1'>
                  Coordinación directa, con el cliente para el desarrollo del
                  Brief o cuestionario.
                </span>
              </li>
              <li className='flex items-center gap-4'>
                <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                <span className='text-2xl w-full flex-1'>
                  Entrega de editables: <strong>AI + JPG + PNG + PDF</strong>.
                </span>
              </li>
              <li className='flex items-center gap-4'>
                <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                <span className='text-2xl w-full flex-1'>
                  Amplia Experiencia de trabajos a Distancia.
                </span>
              </li>
              <li className='flex items-center gap-4'>
                <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                <span className='text-2xl w-full flex-1'>
                  Tiempo de entrega : 01 - 02 días Hábiles.
                </span>
              </li>
              <li className='flex items-center gap-4'>
                <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                <span className='text-2xl w-full flex-1'>
                  Forma de Trabajo : Bajo Contrato.
                </span>
              </li>
              <li className='flex items-center gap-4 '>
                <LuBadgeX size={20} className='text-2xl text-secondary' />
                <span className='text-2xl w-full flex-1'>
                  Nuestros costos NO incluyen IGV.
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
          <div className='w-full border-2 bg-white border-gray-500/30 py-8 px-10 rounded-3xl lg:-mr-5 plan transition-all'>
            <div className='mb-8 text-center space-y-3'>
              <h4 className='text-gray-500'>
                PLAN STANDART
              </h4>
              <h1 className='text-5xl font-extrabold group-hover:text-primary transition-all'>S/ 339.00</h1>
              <p className='text-gray-500'>Pago unico</p>
            </div>
            <ul className='space-y-5 mb-8'>
              <li className='flex items-center gap-4 font-medium'>
                <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                <span className='text-2xl w-full flex-1'>
                  (03) Propuestas de logo - Hasta 3 cambios del logo escogido.
                </span>
              </li>
              <li className='flex items-center gap-4 font-medium'>
                <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                <span className='text-2xl w-full flex-1'>
                  Análisis del Brief o cuestionario técnico para la construcción
                  del Logotipo.
                </span>
              </li>
              <li className='flex items-center gap-4'>
                <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                <span className='text-2xl w-full flex-1'>
                  Coordinación directa, con el cliente para el desarrollo del
                  Brief o cuestionario.
                </span>
              </li>
              <li className='flex items-center gap-4'>
                <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                <span className='text-2xl w-full flex-1'>
                  Entrega de editables: <strong>AI + JPG + PNG + PDF</strong>.
                </span>
              </li>
              <li className='flex items-center gap-4'>
                <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                <span className='text-2xl w-full flex-1'>
                  Amplia Experiencia de trabajos a Distancia. (Fuera de Lima)
                </span>
              </li>
              <li className='flex items-center gap-4'>
                <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                <span className='text-2xl w-full flex-1'>
                  Tiempo de entrega : 03 días Hábiles.
                </span>
              </li>
              <li className='flex items-center gap-4'>
                <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                <span className='text-2xl w-full flex-1'>
                  Forma de Trabajo : Bajo Contrato.
                </span>
              </li>
              <li className='flex items-center gap-4 font-medium'>
                <span
                  onClick={() => {
                    setselected(1)
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
          </div>
        </SwiperSlide>
        <SwiperSlide className='w-full h-full my-auto transition-all'>
          <div className='w-full border-2 bg-white border-gray-500/30 py-8 px-10 rounded-3xl lg:-mr-5 plan transition-all'>
            <div className='mb-8 text-center space-y-3'>
              <h4 className='text-gray-500'>
                PLAN CREATIVO
              </h4>
              <h1 className='text-5xl font-extrabold group-hover:text-primary transition-all'>S/ 579.00</h1>
              <p className='text-gray-500'>Pago unico</p>
            </div>
            <ul className='space-y-5 mb-8'>
              <li className='flex items-center gap-4 font-medium'>
                <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                <strong className='text-2xl w-full flex-1'>
                  Recibirás (04) propuesta Creativas de diseño de logo
                  sustentadas.
                </strong>
              </li>
              <li className='flex items-center gap-4 font-medium'>
                <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                <span className='text-2xl w-full flex-1'>
                  Análisis del Brief o cuestionario técnico para la construcción
                  del Logotipo.
                </span>
              </li>
              <li className='flex items-center gap-4'>
                <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                <span className='text-2xl w-full flex-1'>
                  Coordinación directa, con el cliente para el desarrollo del
                  Brief o cuestionario.
                </span>
              </li>
              <li className='flex items-center gap-4'>
                <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                <span className='text-2xl w-full flex-1'>
                  Entrega de editables <strong>AI + JPG + PNG + PDF</strong>.
                </span>
              </li>
              <li className='flex items-center gap-4'>
                <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                <span className='text-2xl w-full flex-1'>
                  Manual de uso - Diseño de logo
                </span>
              </li>
              <li className='flex items-center gap-4'>
                <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                <strong className='text-2xl w-full flex-1'>
                  Diseño de Brochure e Identidad Visual Corporativa
                </strong>
              </li>
              <li className='flex items-center gap-4'>
                <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                <span className='text-2xl w-full flex-1'>
                  Tiempo de entrega : 04 días Hábiles.
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
              onClick={() => RedirigirWsp(4)}
              className='w-full border-2 border-secondary py-4 rounded-full my-5 hover:bg-secondary hover:text-white transition-colors duration-300'
            >
              Comprar
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide className='w-full h-full my-auto transition-all'>
          <div className='w-full border-2 bg-white border-gray-500/30 py-8 px-10 rounded-3xl lg:-mr-5 plan transition-all'>
            <div className='mb-8 text-center space-y-3'>
              <h4 className='font-semibold text-2xl text-gray-500 group-hover:text-secondary/90 transition-all '>
                PLAN PROFESIONAL
              </h4>
              <h1 className='text-5xl font-extrabold group-hover:text-primary transition-all'>S/ 1290.00</h1>
              <p className='text-gray-500'>Pago unico</p>
            </div>
            <ul className='space-y-5 mb-8'>
              <li className='flex items-center gap-4 font-medium'>
                <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                <strong className='text-2xl w-full flex-1'>
                  Recibirás (05) propuesta Creativas de diseño de logo
                  sustentadas.
                </strong>
              </li>
              <li className='flex items-center gap-4 font-medium'>
                <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                <span className='text-2xl w-full flex-1'>
                  Análisis del Brief o cuestionario técnico para la construcción
                  del Logotipo.
                </span>
              </li>
              <li className='flex items-center gap-4'>
                <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                <span className='text-2xl w-full flex-1'>
                  Coordinación directa, con el cliente para el desarrollo del
                  Brief o cuestionario.
                </span>
              </li>
              <li className='flex items-center gap-4'>
                <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                <span className='text-2xl w-full flex-1'>
                  Entrega de editables.
                </span>
              </li>
              <li className='flex items-center gap-4'>
                <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                <span className='text-2xl w-full flex-1'>
                  Manual de uso - Diseño de logo
                </span>
              </li>
              <li className='flex items-center gap-4'>
                <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                <strong className='text-2xl w-full flex-1'>
                  Diseño de Brochure, Identidad Visual Corporativa, Redes Sociales e Impresion de tarjeta de presentacion
                </strong>
              </li>
              <li className='flex items-center gap-4'>
                <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                <span className='text-2xl w-full flex-1'>
                  Tiempo de entrega : 04 días Hábiles.
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
              onClick={() => RedirigirWsp(5)}
              className='w-full border-2 border-secondary py-4 rounded-full my-5 hover:bg-secondary hover:text-white transition-colors duration-300'
            >
              Comprar
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide className='w-full h-full my-auto transition-all'>
          <div className='w-full border-2 bg-white border-gray-500/30 py-8 px-10 rounded-3xl lg:-mr-5 plan transition-all relative group'>
            <div className='absolute -top-8 left-0 right-0 mx-auto w-fit bg-secondary text-white text-center py-3 px-8 text-3xl rounded-xl z-10'>
              <span>Más vendido</span>
            </div>
            <div className='mb-8 text-center space-y-3'>
              <h4 className='font-semibold text-2xl text-gray-500 group-hover:text-secondary/90 transition-all '>
                PLAN 69
              </h4>
              <h1 className='text-5xl font-extrabold group-hover:text-primary transition-all'>S/ 89.00</h1>
              <p className='text-gray-500'>Pago unico</p>
            </div>
            <ul className='space-y-5 mb-8'>
              <li className='flex items-center gap-4 font-medium'>
                <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                <span className='text-2xl w-full flex-1'>
                  (01) Propuestas de logo - Hasta 3 cambios.
                </span>
              </li>
              <li className='flex items-center gap-4 font-medium'>
                <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                <span className='text-2xl w-full flex-1'>
                  Análisis del Brief o cuestionario técnico para la construcción
                  del Logotipo.
                </span>
              </li>
              <li className='flex items-center gap-4'>
                <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                <span className='text-2xl w-full flex-1'>
                  Coordinación directa, con el cliente para el desarrollo del
                  Brief o cuestionario.
                </span>
              </li>
              <li className='flex items-center gap-4'>
                <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                <span className='text-2xl w-full flex-1'>
                  Entrega de editables: <strong>AI + JPG + PNG + PDF</strong>.
                </span>
              </li>
              <li className='flex items-center gap-4'>
                <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                <span className='text-2xl w-full flex-1'>
                  Amplia Experiencia de trabajos a Distancia.
                </span>
              </li>
              <li className='flex items-center gap-4'>
                <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                <span className='text-2xl w-full flex-1'>
                  Tiempo de entrega : 01 - 02 días Hábiles.
                </span>
              </li>
              <li className='flex items-center gap-4'>
                <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                <span className='text-2xl w-full flex-1'>
                  Forma de Trabajo : Bajo Contrato.
                </span>
              </li>
              <li className='flex items-center gap-4 '>
                <LuBadgeX size={20} className='text-2xl text-secondary' />
                <span className='text-2xl w-full flex-1'>
                  Nuestros costos NO incluyen IGV.
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
            {/* <p className='text-gray-500 text-center'>Its free so why not</p> */}
          </div>
        </SwiperSlide>
        <SwiperSlide className='w-full h-full my-auto transition-all'>
          <div className='w-full border-2 bg-white border-gray-500/30 py-8 px-10 rounded-3xl lg:-mr-5 plan transition-all'>
            <div className='mb-8 text-center space-y-3'>
              <h4 className='font-semibold text-2xl text-gray-500 group-hover:text-secondary/90 transition-all '>
                PLAN EXCEPCIONAL
              </h4>
              <h1 className='text-5xl font-extrabold group-hover:text-primary transition-all'>S/ 169.00</h1>
              <p className='text-gray-500'>Pago unico</p>
            </div>
            <ul className='space-y-5 mb-8'>
              <li className='flex items-center gap-4 font-medium'>
                <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                <span className='text-2xl w-full flex-1'>
                  (02) Propuestas de logo - Hasta 3 cambios del logo escogido.
                </span>
              </li>
              <li className='flex items-center gap-4 font-medium'>
                <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                <span className='text-2xl w-full flex-1'>
                  Análisis del Brief o cuestionario técnico para la construcción
                  del Logotipo.
                </span>
              </li>
              <li className='flex items-center gap-4'>
                <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                <span className='text-2xl w-full flex-1'>
                  Coordinación directa, con el cliente para el desarrollo del
                  Brief o cuestionario.
                </span>
              </li>
              <li className='flex items-center gap-4'>
                <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                <span className='text-2xl w-full flex-1'>
                  Entrega de editables: <strong>AI + JPG + PNG + PDF</strong>.
                </span>
              </li>
              <li className='flex items-center gap-4'>
                <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                <span className='text-2xl w-full flex-1'>
                  Amplia Experiencia de trabajos a Distancia.
                </span>
              </li>
              <li className='flex items-center gap-4'>
                <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                <span className='text-2xl w-full flex-1'>
                  Tiempo de entrega : 01 - 02 días Hábiles.
                </span>
              </li>
              <li className='flex items-center gap-4'>
                <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                <span className='text-2xl w-full flex-1'>
                  Forma de Trabajo : Bajo Contrato.
                </span>
              </li>
              <li className='flex items-center gap-4 '>
                <LuBadgeX size={20} className='text-2xl text-secondary' />
                <span className='text-2xl w-full flex-1'>
                  Nuestros costos NO incluyen IGV.
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
          <div className='w-full border-2 bg-white border-gray-500/30 py-8 px-10 rounded-3xl lg:-mr-5 plan transition-all'>
            <div className='mb-8 text-center space-y-3'>
              <h4 className='text-gray-500'>
                PLAN STANDART
              </h4>
              <h1 className='text-5xl font-extrabold group-hover:text-primary transition-all'>S/ 339.00</h1>
              <p className='text-gray-500'>Pago unico</p>
            </div>
            <ul className='space-y-5 mb-8'>
              <li className='flex items-center gap-4 font-medium'>
                <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                <span className='text-2xl w-full flex-1'>
                  (03) Propuestas de logo - Hasta 3 cambios del logo escogido.
                </span>
              </li>
              <li className='flex items-center gap-4 font-medium'>
                <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                <span className='text-2xl w-full flex-1'>
                  Análisis del Brief o cuestionario técnico para la construcción
                  del Logotipo.
                </span>
              </li>
              <li className='flex items-center gap-4'>
                <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                <span className='text-2xl w-full flex-1'>
                  Coordinación directa, con el cliente para el desarrollo del
                  Brief o cuestionario.
                </span>
              </li>
              <li className='flex items-center gap-4'>
                <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                <span className='text-2xl w-full flex-1'>
                  Entrega de editables: <strong>AI + JPG + PNG + PDF</strong>.
                </span>
              </li>
              <li className='flex items-center gap-4'>
                <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                <span className='text-2xl w-full flex-1'>
                  Amplia Experiencia de trabajos a Distancia. (Fuera de Lima)
                </span>
              </li>
              <li className='flex items-center gap-4'>
                <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                <span className='text-2xl w-full flex-1'>
                  Tiempo de entrega : 03 días Hábiles.
                </span>
              </li>
              <li className='flex items-center gap-4'>
                <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                <span className='text-2xl w-full flex-1'>
                  Forma de Trabajo : Bajo Contrato.
                </span>
              </li>
              <li className='flex items-center gap-4 font-medium'>
                <span
                  onClick={() => {
                    setselected(1)
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
          </div>
        </SwiperSlide>
        <SwiperSlide className='w-full h-full my-auto transition-all'>
          <div className='w-full border-2 bg-white border-gray-500/30 py-8 px-10 rounded-3xl lg:-mr-5 plan transition-all'>
            <div className='mb-8 text-center space-y-3'>
              <h4 className='text-gray-500'>
                PLAN CREATIVO
              </h4>
              <h1 className='text-5xl font-extrabold group-hover:text-primary transition-all'>S/ 579.00</h1>
              <p className='text-gray-500'>Pago unico</p>
            </div>
            <ul className='space-y-5 mb-8'>
              <li className='flex items-center gap-4 font-medium'>
                <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                <strong className='text-2xl w-full flex-1'>
                  Recibirás (04) propuesta Creativas de diseño de logo
                  sustentadas.
                </strong>
              </li>
              <li className='flex items-center gap-4 font-medium'>
                <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                <span className='text-2xl w-full flex-1'>
                  Análisis del Brief o cuestionario técnico para la construcción
                  del Logotipo.
                </span>
              </li>
              <li className='flex items-center gap-4'>
                <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                <span className='text-2xl w-full flex-1'>
                  Coordinación directa, con el cliente para el desarrollo del
                  Brief o cuestionario.
                </span>
              </li>
              <li className='flex items-center gap-4'>
                <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                <span className='text-2xl w-full flex-1'>
                  Entrega de editables <strong>AI + JPG + PNG + PDF</strong>.
                </span>
              </li>
              <li className='flex items-center gap-4'>
                <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                <span className='text-2xl w-full flex-1'>
                  Manual de uso - Diseño de logo
                </span>
              </li>
              <li className='flex items-center gap-4'>
                <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                <strong className='text-2xl w-full flex-1'>
                  Diseño de Brochure e Identidad Visual Corporativa
                </strong>
              </li>
              <li className='flex items-center gap-4'>
                <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                <span className='text-2xl w-full flex-1'>
                  Tiempo de entrega : 04 días Hábiles.
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
              onClick={() => RedirigirWsp(4)}
              className='w-full border-2 border-secondary py-4 rounded-full my-5 hover:bg-secondary hover:text-white transition-colors duration-300'
            >
              Comprar
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide className='w-full h-full my-auto transition-all'>
          <div className='w-full border-2 bg-white border-gray-500/30 py-8 px-10 rounded-3xl lg:-mr-5 plan transition-all'>
            <div className='mb-8 text-center space-y-3'>
              <h4 className='font-semibold text-2xl text-gray-500 group-hover:text-secondary/90 transition-all '>
                PLAN PROFESIONAL
              </h4>
              <h1 className='text-5xl font-extrabold group-hover:text-primary transition-all'>S/ 1290.00</h1>
              <p className='text-gray-500'>Pago unico</p>
            </div>
            <ul className='space-y-5 mb-8'>
              <li className='flex items-center gap-4 font-medium'>
                <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                <strong className='text-2xl w-full flex-1'>
                  Recibirás (05) propuesta Creativas de diseño de logo
                  sustentadas.
                </strong>
              </li>
              <li className='flex items-center gap-4 font-medium'>
                <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                <span className='text-2xl w-full flex-1'>
                  Análisis del Brief o cuestionario técnico para la construcción
                  del Logotipo.
                </span>
              </li>
              <li className='flex items-center gap-4'>
                <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                <span className='text-2xl w-full flex-1'>
                  Coordinación directa, con el cliente para el desarrollo del
                  Brief o cuestionario.
                </span>
              </li>
              <li className='flex items-center gap-4'>
                <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                <span className='text-2xl w-full flex-1'>
                  Entrega de editables.
                </span>
              </li>
              <li className='flex items-center gap-4'>
                <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                <span className='text-2xl w-full flex-1'>
                  Manual de uso - Diseño de logo
                </span>
              </li>
              <li className='flex items-center gap-4'>
                <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                <strong className='text-2xl w-full flex-1'>
                  Diseño de Brochure, Identidad Visual Corporativa, Redes Sociales e Impresion de tarjeta de presentacion
                </strong>
              </li>
              <li className='flex items-center gap-4'>
                <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                <span className='text-2xl w-full flex-1'>
                  Tiempo de entrega : 04 días Hábiles.
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
              onClick={() => RedirigirWsp(5)}
              className='w-full border-2 border-secondary py-4 rounded-full my-5 hover:bg-secondary hover:text-white transition-colors duration-300'
            >
              Comprar
            </button>
          </div>
        </SwiperSlide>
      </Swiper>
      <Modals open={open} setOpen={setOpen} selected={selected} />
    </div>
  )
}

export default SwiperPlanes
