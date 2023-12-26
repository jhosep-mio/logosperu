'use client'
import { motion } from 'framer-motion'
import { BsFillArrowRightSquareFill } from 'react-icons/bs'

export const Proceso = () => {
  return (
    <section className='publicidad_logotipo border-t-gray-700 border-t-[6px]'>
      <div className='w-full text-center font_baloo  text-secondary font-bold flex justify-center gap-3 lg:gap-10 items-center mb-10'>
        <hr className='bg-primary h-2 w-[5%] lg:w-[10%] rounded-xl' />
        <motion.p
          initial={{ opacity: 0, translateY: '200px' }}
          whileInView={{ opacity: 1, translateY: '0px' }}
          viewport={{ once: true }}
          className='w-fit px-10 m-0 text-5xl lg:text-7xl'
        >
          NUESTRO PROCESO
        </motion.p>
        <hr className='bg-primary h-2 w-[5%] lg:w-[10%] rounded-xl' />
      </div>

      <div className='w-full flex flex-col md:flex-row gap-10 max-w-[1000px] h-fit md:h-[200px] px-20 md:px-10 mx-auto justify-between my-10 lg:mb-10 mt-40'>
        <div className='w-full relative h-full'>
          <div className='border-[5px] border-primary h-[150px] md:h-full w-full rounded-2xl bg-white shadow-xs relative flex justify-center items-center'>
            <span className='text-4xl md:text-5xl font_baloo font-semibold text-secondary text-center'>Revisión del material</span>
            <div className='absolute top-[-4rem] md:top-[-6rem] right-0 left-0 mx-auto h-[80px] w-[80px] md:h-[100px] md:w-[100px]'>
              <img
                src='/fotografia/1.png'
                alt='Recopilacion de datos'
                className='w-full h-full object-contain hover:scale-105 '
              />
            </div>
          </div>
        </div>
        <div className=' md:h-full flex items-center justify-center mb-[53px] lg:mb-0'>
          <BsFillArrowRightSquareFill className='text-7xl text-secondary rotate-90 md:rotate-0' />
        </div>
        <div className='w-full relative h-full'>
          <div className='border-[5px] border-primary h-[150px] md:h-full w-full rounded-2xl bg-white shadow-xs relative flex justify-center items-center'>
            <span className='text-4xl md:text-5xl font_baloo font-semibold text-secondary text-center opacity-0 lg:opacity-100 absolute lg:relative inset-0'>Proceso <br /> creativo</span>
            <span className='text-4xl md:text-5xl font_baloo font-semibold text-secondary text-center w-fit md:opacity-0 md:absolute md:inset-0'>Proceso creativo</span>
            <div className='absolute top-[-4rem] md:top-[-6rem] right-0 left-0 mx-auto h-[80px] w-[80px] md:h-[100px] md:w-[100px]'>
              <img
                src='/fotografia/2.png'
                alt='Recopilacion de datos'
                className='w-full h-full object-contain hover:scale-105 '
              />
            </div>
          </div>
        </div>
        <div className=' md:h-full flex items-center justify-center mb-[53px] lg:mb-0'>
          <BsFillArrowRightSquareFill className='text-7xl text-secondary rotate-90 md:rotate-0' />
        </div>
        <div className='w-full relative h-full'>
          <div className='border-[5px] border-primary h-[150px] md:h-full w-full rounded-2xl bg-white shadow-xs relative flex justify-center items-center'>
            <span className='text-4xl md:text-5xl font_baloo font-semibold text-secondary text-center'>Entregables</span>
            <div className='absolute top-[-4rem] md:top-[-6rem] right-0 left-0 mx-auto h-[80px] w-[80px] md:h-[100px] md:w-[100px]'>
              <img
                src='/fotografia/3.png'
                alt='Recopilacion de datos'
                className='w-full h-full object-contain hover:scale-105 '
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
