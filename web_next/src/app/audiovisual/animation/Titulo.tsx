'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation } from 'swiper/modules'
import { motion } from 'framer-motion'

export const Titulo = () => {
  return (
    <section
      className='max-w-[1300px] mx-auto pt-[80px] md:pt-[100px] overflow-hidden'
    >
      <div
        className='h-full w-full flex flex-col lg:flex-row px-4 items-center justify-center py-4 lg:py-12'
      >
        <div
          className='h-full w-full flex flex-col items-center justify-start lg:justify-center'
        >
          <h1 className='text-5xl lg:text-7xl font-extrabold font_baloo text-center text-secondary'>
            SERVICIOS AUDIOVISUALES
          </h1>
          <div className='flex justify-center items-center '>
            <hr className='hr_first' />
            <hr className='hr_second' />
          </div>
          <div className='cont_descrip_comunity_manager'>
            <p>
              En nuestro amplio cátalogo de servicios audiovisuales, destacamos
              la creación de videos corporativos, animaciones promocionales y la
              animación de logotipos. Estamos comprometidos en brindar
              soluciones visuales efectivas para diversos entornos digitales,
              permitiendo la transmisión dinámica e interactiva de ideas y
              mensajes. Garantizamos un trabajo profesional de la mas alta
              calidad.
            </p>
          </div>
        </div>
        <motion.div
          initial={{ rotate: -180, scale: 0, translateX: '200px' }}
          animate={{ rotate: 0, scale: 1, translateX: 0 }}
          transition={{
            type: 'spring',
            stiffness: 260,
            damping: 20
          }}
          className='w-full relative overflow-hidden'
        >
          <Swiper
            navigation
            modules={[Navigation]}
            className='swiper_audiovisual w-full lg:w-[90%]  h-[400px]'
          >
            <SwiperSlide>
              <video
                src='/logos/video2.mp4'
                muted
                autoPlay
                loop
                className='w-full h-full rounded-2xl object-contain group-hover:translate-x-[-100px] group-hover:scale-125 '
              />
            </SwiperSlide>
            <SwiperSlide>
              <video
                src='/logos/video2.mp4'
                muted
                autoPlay
                loop
                className='w-full h-full rounded-2xl object-contain group-hover:translate-x-[-100px] group-hover:scale-125 '
              />
            </SwiperSlide>
          </Swiper>
        </motion.div>
      </div>
    </section>
  )
}
