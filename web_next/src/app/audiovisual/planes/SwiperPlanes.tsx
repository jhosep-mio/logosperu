'use client'
import { LuBadgeCheck } from 'react-icons/lu'
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
        'Hola, estoy interesado(a) en obtener más información sobre el Plan SILVER'
    } else if (seleccion == 2) {
      mensaje =
      'Hola, estoy interesado(a) en obtener más información sobre el Plan GOLDEN'
    } else if (seleccion == 3) {
      mensaje =
        'Hola, estoy interesado(a) en obtener más información sobre el Plan GOLDEN'
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
                Plan SILVER
              </h4>
              <h1 className='text-5xl font-extrabold group-hover:text-primary transition-all'>S/ 109.00</h1>
            </div>
            <ul className='space-y-5 mb-8'>
              <li className='flex items-center gap-4 font-medium'>
                <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                <span className='text-2xl w-full flex-1'>
                  01  Desarrollo de <strong>Reel</strong> o <strong>Edición de Video</strong> de <strong>10 SEGUNDOS</strong>. Saludo o presentación de su empresa o negocio

                </span>
              </li>
              <li className='flex items-center gap-4 font-medium'>
                <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                <span className='text-2xl w-full flex-1'>
                  Incluye Efectos y Musicalización
                </span>
              </li>
              <li className='flex items-center gap-4'>
                <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                <span className='text-2xl w-full flex-1'>
                  Desarrollo <strong>StoryBoard</strong> : Presentación al cliente
                </span>
              </li>
              <li className='flex items-center gap-4'>
                <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                <span className='text-2xl w-full flex-1'>
                  Locución en Off. <strong>Se cotiza aparte</strong>
                </span>
              </li>
              <li className='flex items-center gap-4'>
                <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                <strong className='text-2xl w-full flex-1'>
                  Entregable vía DRIVE
                </strong>
              </li>

              <li className='flex items-center gap-4 '>
                <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                <span className='text-2xl w-full flex-1'>
                  Nuestros COSTOS <strong>NO INCLUYEN IGV</strong>
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
          <div className='w-full border-2 bg-white border-gray-500/30 py-8 px-10 rounded-3xl lg:-mr-5 plan2 transition-all relative group'>
            <div className='mb-12 text-center space-y-3'>
              <h4 className='font-semibold text-xl text-gray-500 group-hover:text-secondary/90 transition-all '>
                Plan GOLDEN
              </h4>
              <h1 className='text-5xl font-extrabold group-hover:text-primary transition-all'>S/ 149.00</h1>
            </div>
            <ul className='space-y-5 mb-8'>
              <li className='flex items-center gap-4 font-medium'>
                <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                <span className='text-2xl w-full flex-1'>
                  01  Desarrollo de <strong>Reel</strong> o <strong>Edición de Video</strong> de <strong>20 SEGUNDOS</strong>. Saludo o presentación de su empresa o negocio

                </span>
              </li>
              <li className='flex items-center gap-4 font-medium'>
                <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                <span className='text-2xl w-full flex-1'>
                  Incluye Efectos y Musicalización
                </span>
              </li>
              <li className='flex items-center gap-4'>
                <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                <span className='text-2xl w-full flex-1'>
                  Desarrollo <strong>StoryBoard</strong> : Presentación al cliente
                </span>
              </li>
              <li className='flex items-center gap-4'>
                <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                <span className='text-2xl w-full flex-1'>
                  Locución en Off. <strong>Se cotiza aparte</strong>
                </span>
              </li>
              <li className='flex items-center gap-4'>
                <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                <strong className='text-2xl w-full flex-1'>
                  Entregable vía DRIVE
                </strong>
              </li>

              <li className='flex items-center gap-4 '>
                <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                <span className='text-2xl w-full flex-1'>
                  Nuestros COSTOS <strong>NO INCLUYEN IGV</strong>
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
                Plan DIAMOND
              </h4>
              <h1 className='text-5xl font-extrabold group-hover:text-primary transition-all'>S/ 219.00</h1>
            </div>
            <ul className='space-y-5 mb-8'>
              <li className='flex items-center gap-4 font-medium'>
                <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                <span className='text-2xl w-full flex-1'>
                  01  Desarrollo de <strong>Reel</strong> o <strong>Edición de Video</strong> de <strong>30 SEGUNDOS</strong>. Saludo o presentación de su empresa o negocio

                </span>
              </li>
              <li className='flex items-center gap-4 font-medium'>
                <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                <span className='text-2xl w-full flex-1'>
                  Incluye Efectos y Musicalización
                </span>
              </li>
              <li className='flex items-center gap-4'>
                <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                <span className='text-2xl w-full flex-1'>
                  Desarrollo <strong>StoryBoard</strong> : Presentación al cliente
                </span>
              </li>
              <li className='flex items-center gap-4'>
                <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                <span className='text-2xl w-full flex-1'>
                  Locución en Off. <strong>Se cotiza aparte</strong>
                </span>
              </li>
              <li className='flex items-center gap-4'>
                <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                <strong className='text-2xl w-full flex-1'>
                  Entregable vía DRIVE
                </strong>
              </li>

              <li className='flex items-center gap-4 '>
                <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                <span className='text-2xl w-full flex-1'>
                  Nuestros COSTOS <strong>NO INCLUYEN IGV</strong>
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
                Plan SILVER
              </h4>
              <h1 className='text-5xl font-extrabold group-hover:text-primary transition-all'>S/ 109.00</h1>
            </div>
            <ul className='space-y-5 mb-8'>
              <li className='flex items-center gap-4 font-medium'>
                <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                <span className='text-2xl w-full flex-1'>
                  01  Desarrollo de <strong>Reel</strong> o <strong>Edición de Video</strong> de <strong>10 SEGUNDOS</strong>. Saludo o presentación de su empresa o negocio

                </span>
              </li>
              <li className='flex items-center gap-4 font-medium'>
                <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                <span className='text-2xl w-full flex-1'>
                  Incluye Efectos y Musicalización
                </span>
              </li>
              <li className='flex items-center gap-4'>
                <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                <span className='text-2xl w-full flex-1'>
                  Desarrollo <strong>StoryBoard</strong> : Presentación al cliente
                </span>
              </li>
              <li className='flex items-center gap-4'>
                <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                <span className='text-2xl w-full flex-1'>
                  Locución en Off. <strong>Se cotiza aparte</strong>
                </span>
              </li>
              <li className='flex items-center gap-4'>
                <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                <strong className='text-2xl w-full flex-1'>
                  Entregable vía DRIVE
                </strong>
              </li>

              <li className='flex items-center gap-4 '>
                <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                <span className='text-2xl w-full flex-1'>
                  Nuestros COSTOS <strong>NO INCLUYEN IGV</strong>
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
          <div className='w-full border-2 bg-white border-gray-500/30 py-8 px-10 rounded-3xl lg:-mr-5 plan2 transition-all relative group'>
            <div className='mb-12 text-center space-y-3'>
              <h4 className='font-semibold text-xl text-gray-500 group-hover:text-secondary/90 transition-all '>
                Plan GOLDEN
              </h4>
              <h1 className='text-5xl font-extrabold group-hover:text-primary transition-all'>S/ 149.00</h1>
            </div>
            <ul className='space-y-5 mb-8'>
              <li className='flex items-center gap-4 font-medium'>
                <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                <span className='text-2xl w-full flex-1'>
                  01  Desarrollo de <strong>Reel</strong> o <strong>Edición de Video</strong> de <strong>20 SEGUNDOS</strong>. Saludo o presentación de su empresa o negocio

                </span>
              </li>
              <li className='flex items-center gap-4 font-medium'>
                <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                <span className='text-2xl w-full flex-1'>
                  Incluye Efectos y Musicalización
                </span>
              </li>
              <li className='flex items-center gap-4'>
                <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                <span className='text-2xl w-full flex-1'>
                  Desarrollo <strong>StoryBoard</strong> : Presentación al cliente
                </span>
              </li>
              <li className='flex items-center gap-4'>
                <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                <span className='text-2xl w-full flex-1'>
                  Locución en Off. <strong>Se cotiza aparte</strong>
                </span>
              </li>
              <li className='flex items-center gap-4'>
                <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                <strong className='text-2xl w-full flex-1'>
                  Entregable vía DRIVE
                </strong>
              </li>

              <li className='flex items-center gap-4 '>
                <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                <span className='text-2xl w-full flex-1'>
                  Nuestros COSTOS <strong>NO INCLUYEN IGV</strong>
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
                Plan DIAMOND
              </h4>
              <h1 className='text-5xl font-extrabold group-hover:text-primary transition-all'>S/ 219.00</h1>
            </div>
            <ul className='space-y-5 mb-8'>
              <li className='flex items-center gap-4 font-medium'>
                <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                <span className='text-2xl w-full flex-1'>
                  01  Desarrollo de <strong>Reel</strong> o <strong>Edición de Video</strong> de <strong>30 SEGUNDOS</strong>. Saludo o presentación de su empresa o negocio

                </span>
              </li>
              <li className='flex items-center gap-4 font-medium'>
                <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                <span className='text-2xl w-full flex-1'>
                  Incluye Efectos y Musicalización
                </span>
              </li>
              <li className='flex items-center gap-4'>
                <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                <span className='text-2xl w-full flex-1'>
                  Desarrollo <strong>StoryBoard</strong> : Presentación al cliente
                </span>
              </li>
              <li className='flex items-center gap-4'>
                <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                <span className='text-2xl w-full flex-1'>
                  Locución en Off. <strong>Se cotiza aparte</strong>
                </span>
              </li>
              <li className='flex items-center gap-4'>
                <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                <strong className='text-2xl w-full flex-1'>
                  Entregable vía DRIVE
                </strong>
              </li>

              <li className='flex items-center gap-4 '>
                <LuBadgeCheck size={20} className='text-2xl text-secondary' />
                <span className='text-2xl w-full flex-1'>
                  Nuestros COSTOS <strong>NO INCLUYEN IGV</strong>
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

      </Swiper>
    </div>
  )
}

export default SwiperPlanes
