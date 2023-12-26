'use client'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import { motion } from 'framer-motion'

export const Titulo = () => {
  return (
    <section className='max-w-[1300px] mx-auto pt-[80px] md:pt-[100px] overflow-hidden'>
      <div className='h-full w-full flex flex-col md:gap-8 lg:flex-row px-4 items-center justify-center py-4 lg:py-12'>
        <motion.div
          initial={{ rotate: -180, scale: 0, translateX: '-200px' }}
          animate={{ rotate: 0, scale: 1, translateX: 0 }}
          transition={{
            type: 'spring',
            stiffness: 260,
            damping: 20
          }}
          className='h-full w-full flex flex-col items-center justify-start lg:justify-center'
        >
          <h1 className='text-5xl lg:text-7xl font-extrabold font_baloo text-center text-secondary'>
            PRODUCCIÓN FOTOGRÁFICA
          </h1>
          <div className='flex justify-center items-center '>
            <hr className='hr_first' />
            <hr className='hr_second' />
          </div>
          <div className='cont_descrip_comunity_manager'>
            <p>
              La preproducción es la fase que precede y acompaña a la sesión
              fotográfica, en la cual se materializa la visión o propuesta del
              cliente. Dentro de este ámbito, las sesiones fotográficas
              corporativas capturan la esencia de la empresa y su talentoso
              equipo de trabajo, mientras que las sesiones fotográficas
              promocionales se enfocan en resaltar los productos o servicios
              ofrecidos por la empresa, con la finalidad de integrarlos en
              diversos elementos de diseño publicitario.
            </p>
          </div>
        </motion.div>
        <div className='w-full mx-auto h-full shadow_comunity'>
          <img
            src='/fotografia/principal.svg'
            alt='Comunity Manager'
            className='mx-auto h-full p-12 object-contain'
          />
        </div>
      </div>
    </section>
  )
}
