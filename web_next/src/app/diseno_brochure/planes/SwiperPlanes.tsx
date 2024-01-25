'use client'
import { LuBadgeCheck, LuBadgeX, LuChevronRight } from 'react-icons/lu'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { Autoplay, Navigation } from 'swiper/modules'
import { useEffect } from 'react'
import 'swiper/css/navigation'

const SwiperPlanes = () => {
  const RedirigirWsp = (seleccion: number): void => {
    const numero = '+51987038024' // Reemplaza con el número de teléfono en formato internacional sin el signo + o 00.
    let mensaje = '' // Tu mensaje.
    if (seleccion == 1) {
      mensaje =
        'Hola, estoy interesado(a) en obtener más información sobre el plan Brochure de S/. 129.'
    } else if (seleccion == 2) {
      mensaje =
        'Hola, estoy interesado(a) en obtener más información sobre el plan Brochure de S/. 160.'
    } else if (seleccion == 3) {
      mensaje =
        'Hola, estoy interesado(a) en obtener más información sobre el Plan Brochure de S/. 219.'
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
              {/* <h4 className='font-semibold text-2xl text-gray-500 group-hover:text-secondary/90 transition-all '>
                PLAN 69
              </h4> */}
              <h1 className='text-5xl font-extrabold group-hover:text-primary transition-all'>
                S/ 129.00
              </h1>
              <p className='text-gray-500'>Pago unico</p>
            </div>
            <ul className='space-y-5 mb-8'>
              <li className='flex items-center gap-4 font-medium'>
                <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                <span className='text-2xl w-full flex-1'>
                  Diseño de (01) Propuesta de Brochure de (2) hojas - (4) Caras
                </span>
              </li>
              <li className='flex items-center gap-4 font-medium'>
                <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                <span className='text-2xl w-full flex-1'>
                  Entregable : Versión Digital
                </span>
              </li>
              <li className='flex items-center gap-4'>
                <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                <span className='text-2xl w-full flex-1'>
                  Diagramación : AsesorÍa en el la posiciones de textos y fotos
                </span>
              </li>

              <li className='flex items-center gap-4'>
                <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                <span className='text-2xl w-full flex-1'>
                  Tiempo de Trabajo : 1 - 3 días
                </span>
              </li>

              <li className='flex items-center gap-4 '>
                <LuBadgeX size={20} className='text-2xl text-secondary' />
                <span className='text-2xl w-full flex-1'>
                  Nuestros costos NO incluyen IGV.
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
                      Logotipo en versión de Editable
                    </span>
                  </li>
                  <li className='flex items-center gap-4 '>
                    <LuChevronRight
                      size={20}
                      className='text-2xl text-secondary'
                    />
                    <span className='text-2xl w-full flex-1'>
                      Textos E Imágenes o Fotos en alta resolución
                    </span>
                  </li>
                </ul>
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
            <div className='mb-8 text-center space-y-3'>
              {/* <h4 className='font-semibold text-2xl text-gray-500 group-hover:text-secondary/90 transition-all '>
                PLAN EXCEPCIONAL
              </h4> */}
              <h1 className='text-5xl font-extrabold group-hover:text-primary transition-all'>
                S/ 160.00
              </h1>
              <p className='text-gray-500'>Pago unico</p>
            </div>
            <ul className='space-y-5 mb-8'>
              <li className='flex items-center gap-4 font-medium'>
                <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                <span className='text-2xl w-full flex-1'>
                  Diseño de (01) Propuesta de Brochure de (3) hojas - (6) Caras
                </span>
              </li>
              <li className='flex items-center gap-4 font-medium'>
                <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                <span className='text-2xl w-full flex-1'>
                  Entregable : Versión Digital e Impresión
                </span>
              </li>
              <li className='flex items-center gap-4'>
                <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                <span className='text-2xl w-full flex-1'>
                  Diagramación : Asesoria en el la posiciones de textos y fotos
                </span>
              </li>

              <li className='flex items-center gap-4'>
                <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                <span className='text-2xl w-full flex-1'>
                  Tiempo de Trabajo : 1 - 3 días
                </span>
              </li>

              <li className='flex items-center gap-4 '>
                <LuBadgeX size={20} className='text-2xl text-secondary' />
                <span className='text-2xl w-full flex-1'>
                  Nuestros costos NO incluyen IGV.
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
                      Logotipo en versión de Editable
                    </span>
                  </li>
                  <li className='flex items-center gap-4 '>
                    <LuChevronRight
                      size={20}
                      className='text-2xl text-secondary'
                    />
                    <span className='text-2xl w-full flex-1'>
                      Textos E Imágenes o Fotos en alta resolución
                    </span>
                  </li>
                </ul>
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
              {/* <h4 className='text-gray-500'>
                PLAN STANDART
              </h4> */}
              <h1 className='text-5xl font-extrabold group-hover:text-primary transition-all'>
                S/ 219.00
              </h1>
              <p className='text-gray-500'>Pago unico</p>
            </div>
            <ul className='space-y-5 mb-8'>
              <li className='flex items-center gap-4 font-medium'>
                <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                <span className='text-2xl w-full flex-1'>
                  Diseño de (01) Propuesta de Brochure de (4) hojas - (8) Caras
                </span>
              </li>
              <li className='flex items-center gap-4 font-medium'>
                <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                <span className='text-2xl w-full flex-1'>
                  Entregable : Versión Digital e Impresión
                </span>
              </li>

              <li className='flex items-center gap-4'>
                <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                <span className='text-2xl w-full flex-1'>
                  Diagramación : Asesoria en el la posiciones de textos y fotos
                </span>
              </li>

              <li className='flex items-center gap-4'>
                <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                <span className='text-2xl w-full flex-1'>
                  Tiempo de Trabajo : 1 - 3 días
                </span>
              </li>
              <li className='flex items-center gap-4 '>
                <LuBadgeX size={20} className='text-2xl text-secondary' />
                <span className='text-2xl w-full flex-1'>
                  Nuestros costos NO incluyen IGV.
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
                      Logotipo en versión de Editable
                    </span>
                  </li>
                  <li className='flex items-center gap-4 '>
                    <LuChevronRight
                      size={20}
                      className='text-2xl text-secondary'
                    />
                    <span className='text-2xl w-full flex-1'>
                      Textos E Imágenes o Fotos en alta resolución
                    </span>
                  </li>
                </ul>
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
          <div className='w-full border-2 bg-white border-gray-500/30 py-8 px-10 rounded-3xl lg:-mr-5 plan transition-all relative group'>
            <div className='mb-8 text-center space-y-3'>
              {/* <h4 className='font-semibold text-2xl text-gray-500 group-hover:text-secondary/90 transition-all '>
                PLAN 69
              </h4> */}
              <h1 className='text-5xl font-extrabold group-hover:text-primary transition-all'>
                S/ 129.00
              </h1>
              <p className='text-gray-500'>Pago unico</p>
            </div>
            <ul className='space-y-5 mb-8'>
              <li className='flex items-center gap-4 font-medium'>
                <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                <span className='text-2xl w-full flex-1'>
                  Diseño de (01) Propuesta de Brochure de (2) hojas - (4) Caras
                </span>
              </li>
              <li className='flex items-center gap-4 font-medium'>
                <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                <span className='text-2xl w-full flex-1'>
                  Entregable : Versión Digital
                </span>
              </li>
              <li className='flex items-center gap-4'>
                <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                <span className='text-2xl w-full flex-1'>
                  Diagramación : AsesorÍa en el la posiciones de textos y fotos
                </span>
              </li>

              <li className='flex items-center gap-4'>
                <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                <span className='text-2xl w-full flex-1'>
                  Tiempo de Trabajo : 1 - 3 días
                </span>
              </li>

              <li className='flex items-center gap-4 '>
                <LuBadgeX size={20} className='text-2xl text-secondary' />
                <span className='text-2xl w-full flex-1'>
                  Nuestros costos NO incluyen IGV.
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
                      Logotipo en versión de Editable
                    </span>
                  </li>
                  <li className='flex items-center gap-4 '>
                    <LuChevronRight
                      size={20}
                      className='text-2xl text-secondary'
                    />
                    <span className='text-2xl w-full flex-1'>
                      Textos E Imágenes o Fotos en alta resolución
                    </span>
                  </li>
                </ul>
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
            <div className='mb-8 text-center space-y-3'>
              {/* <h4 className='font-semibold text-2xl text-gray-500 group-hover:text-secondary/90 transition-all '>
                PLAN EXCEPCIONAL
              </h4> */}
              <h1 className='text-5xl font-extrabold group-hover:text-primary transition-all'>
                S/ 160.00
              </h1>
              <p className='text-gray-500'>Pago unico</p>
            </div>
            <ul className='space-y-5 mb-8'>
              <li className='flex items-center gap-4 font-medium'>
                <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                <span className='text-2xl w-full flex-1'>
                  Diseño de (01) Propuesta de Brochure de (3) hojas - (6) Caras
                </span>
              </li>
              <li className='flex items-center gap-4 font-medium'>
                <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                <span className='text-2xl w-full flex-1'>
                  Entregable : Versión Digital e Impresión
                </span>
              </li>
              <li className='flex items-center gap-4'>
                <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                <span className='text-2xl w-full flex-1'>
                  Diagramación : Asesoria en el la posiciones de textos y fotos
                </span>
              </li>

              <li className='flex items-center gap-4'>
                <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                <span className='text-2xl w-full flex-1'>
                  Tiempo de Trabajo : 1 - 3 días
                </span>
              </li>

              <li className='flex items-center gap-4 '>
                <LuBadgeX size={20} className='text-2xl text-secondary' />
                <span className='text-2xl w-full flex-1'>
                  Nuestros costos NO incluyen IGV.
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
                      Logotipo en versión de Editable
                    </span>
                  </li>
                  <li className='flex items-center gap-4 '>
                    <LuChevronRight
                      size={20}
                      className='text-2xl text-secondary'
                    />
                    <span className='text-2xl w-full flex-1'>
                      Textos E Imágenes o Fotos en alta resolución
                    </span>
                  </li>
                </ul>
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
              {/* <h4 className='text-gray-500'>
                PLAN STANDART
              </h4> */}
              <h1 className='text-5xl font-extrabold group-hover:text-primary transition-all'>
                S/ 219.00
              </h1>
              <p className='text-gray-500'>Pago unico</p>
            </div>
            <ul className='space-y-5 mb-8'>
              <li className='flex items-center gap-4 font-medium'>
                <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                <span className='text-2xl w-full flex-1'>
                  Diseño de (01) Propuesta de Brochure de (4) hojas - (8) Caras
                </span>
              </li>
              <li className='flex items-center gap-4 font-medium'>
                <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                <span className='text-2xl w-full flex-1'>
                  Entregable : Versión Digital e Impresión
                </span>
              </li>

              <li className='flex items-center gap-4'>
                <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                <span className='text-2xl w-full flex-1'>
                  Diagramación : Asesoria en el la posiciones de textos y fotos
                </span>
              </li>

              <li className='flex items-center gap-4'>
                <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                <span className='text-2xl w-full flex-1'>
                  Tiempo de Trabajo : 1 - 3 días
                </span>
              </li>
              <li className='flex items-center gap-4 '>
                <LuBadgeX size={20} className='text-2xl text-secondary' />
                <span className='text-2xl w-full flex-1'>
                  Nuestros costos NO incluyen IGV.
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
                      Logotipo en versión de Editable
                    </span>
                  </li>
                  <li className='flex items-center gap-4 '>
                    <LuChevronRight
                      size={20}
                      className='text-2xl text-secondary'
                    />
                    <span className='text-2xl w-full flex-1'>
                      Textos E Imágenes o Fotos en alta resolución
                    </span>
                  </li>
                </ul>
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

      </Swiper>
    </div>
  )
}

export default SwiperPlanes
