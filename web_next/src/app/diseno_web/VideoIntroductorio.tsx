'use client'
import React from 'react'
import { motion } from 'framer-motion'

export const VideoIntroductorio = () => {
  return (
    <section className='publicidad_logotipo border-y-gray-700 border-y-[6px]'>
      <div className='w-full text-center font_baloo  text-secondary font-bold flex justify-center gap-3 lg:gap-10 items-center mb-10'>
        <hr className='bg-primary h-2 w-[5%] lg:w-[10%] rounded-xl' />
        <motion.p
          initial={{ opacity: 0, translateY: '200px' }}
          whileInView={{ opacity: 1, translateY: '0px' }}
          viewport={{ once: true }}
          className='w-fit px-10 m-0 text-5xl lg:text-7xl'
        >
          VIDEO EXPLICATIVO
        </motion.p>
        <hr className='bg-primary h-2 w-[5%] lg:w-[10%] rounded-xl' />
      </div>

      <div className='w-full flex flex-col md:flex-row gap-10 max-w-[1000px] h-[300px] md:h-[500px] mx-auto px-4'>
        <iframe
          width='full'
          height='full'
          src='https://www.youtube.com/embed/Yn6cG-usrZI'
          title='YouTube video player'
          className='w-full h-full mx-auto'
          frameBorder='0'
          allowFullScreen
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
        />
      </div>
    </section>
  )
}
