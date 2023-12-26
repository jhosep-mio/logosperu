'use client'
import { motion } from 'framer-motion'

export const Requisitos = () => {
  return (
    <section className='md:pb-20 relative' id='formCotizador'>
      <div className='bg-primary w-full h-50px'>
        <h3 className='font_baloo text-5xl lg:text-6xl py-4 font-bold text-center'>
          REQUISITOS
        </h3>
      </div>
      <div className='flex lg:gap-10 items-center max-w-[1500px] px-4 lg:px-10 mx-auto'>
        <img
          src='/audiovisual/5.png'
          alt='Decoración'
          className='w-0 lg:w-[10%]'
        />
        <div className='h-[300px] w-full  max-w-[1000px] mx-auto my-16 relative'>
          <motion.img
            initial={{ rotate: -180, scale: 0, translateX: '-200px' }}
            whileInView={{ rotate: 0, scale: 1, translateX: 0 }}
            viewport={{ once: true }}
            src='/audiovisual/4.png'
            alt=''
            className='w-0 md:w-full md:object-contain h-full md:h-fit rotate-90 md:rotate-0'
          />
          <motion.div
            initial={{ rotate: -180, scale: 0, translateX: '-200px' }}
            whileInView={{ rotate: 0, scale: 1, translateX: 0 }}
            viewport={{ once: true }}
            className='h-full mt-[-2.75rem] lg:mt-0 absolute inset-0 w-full flex flex-col md:flex-row justify-between'
          >
            <p className='w-full h-full flex items-center justify-center text-center px-20 text-3xl lg:text-4xl'>
              Tener los objetivos claros para la sesión y/o temática
            </p>
            <p className='w-full h-full flex items-center justify-center text-center px-20 text-3xl lg:text-4xl'>
              Materiales para la realización
            </p>
            <p className='w-full h-full flex items-center justify-center text-center px-20 text-3xl lg:text-4xl'>
              Identificar la localización
            </p>
          </motion.div>
        </div>
        <img
          src='/audiovisual/6.png'
          alt='Decoración'
          className='w-0 lg:w-[10%] max-h-[300px] object-contain'
        />
      </div>
    </section>
  )
}
