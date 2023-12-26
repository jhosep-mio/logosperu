'use client'
import { motion } from 'framer-motion'

export const Proceso = () => {
  return (
    <section className='publicidad_logotipo border-t-gray-700 border-t-[6px]'>
      <div className='w-full text-center font_baloo  text-secondary font-bold flex justify-center gap-3 lg:gap-10 items-center'>
        <hr className='bg-primary h-2 w-[5%] lg:w-[10%] rounded-xl' />
        <motion.p
          initial={{ opacity: 0, translateY: '200px' }}
          whileInView={{ opacity: 1, translateY: '0px' }}
          viewport={{ once: true }}
          className='w-fit px-10 m-0 text-5xl lg:text-7xl'
        >NUESTRO PROCESO
        </motion.p>
        <hr className='bg-primary h-2 w-[5%] lg:w-[10%] rounded-xl' />
      </div>

      <div className='w-full flex flex-col md:flex-row gap-10 max-w-[1300px] px-20 md:px-10 mx-auto justify-between my-10 lg:my-20'>
        <div className='w-full relative'>
          <motion.img
            initial={{ opacity: 0, translateY: '200px' }}
            whileInView={{ opacity: 1, translateY: '0px' }}
            viewport={{ once: true }}
            src='/audiovisual/7.png'
            alt='Recopilacion de datos'
            className='w-full h-full object-contain hover:scale-105 '
          />
        </div>
        <div className='w-full relative'>
          <motion.img
            initial={{ opacity: 0, translateY: '-200px' }}
            whileInView={{ opacity: 1, translateY: '0px' }}
            viewport={{ once: true }}
            src='/audiovisual/8.png'
            alt='Recopilacion de datos'
            className='w-full h-full object-contain hover:scale-105 '
          />
        </div>
        <div className='w-full relative'>
          <motion.img
            initial={{ opacity: 0, translateY: '200px' }}
            whileInView={{ opacity: 1, translateY: '0px' }}
            viewport={{ once: true }}
            src='/audiovisual/9.png'
            alt='Recopilacion de datos'
            className='w-full h-full object-contain hover:scale-105 '
          />
        </div>
      </div>
    </section>
  )
}
