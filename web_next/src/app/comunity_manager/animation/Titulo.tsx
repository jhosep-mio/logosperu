'use client'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export const Titulo = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  return (

    <section className='max-w-[1300px0] mx-auto pt-[80px] md:pt-[100px] section_screen'>
      <div
        className='h-full w-full grid grid-rows-2 items-center justify-center py-4 lg:py-12'
        ref={ref}
        style={{
          scale: isInView ? '1' : '0',
          // transform: isInView ? 'none' : 'scale: 5',
          transition: 'all 0.6s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s'
        }}
      >
        <div className='h-full flex flex-col items-center justify-start lg:justify-center'>
          <h1 className='text-5xl lg:text-7xl font-extrabold font_baloo text-center text-secondary'>
            COMUNITY MANAGER
          </h1>
          <div className='flex justify-center items-center '>
            <hr className='hr_first' />
            <hr className='hr_second' />
          </div>
          <div className='cont_descrip_comunity_manager'>
            <p>
              "Vemos más allá del diseño: buscamos conexiones genuinas. Nuestro
              Community Manager es el arquitecto digital detrás de estas
              relaciones. Construimos y mantenemos conexiones significativas en
              tu comunidad en línea. Descubre cómo transformamos interacciones
              en relaciones leales y comprometidas."
            </p>
          </div>
        </div>
        <div className='w-full mx-auto h-full shadow_comunity'>
          <img
            src='/comunity/fondo.svg'
            alt='Comunity Manager'
            className='mx-auto h-full object-contain'
          />
        </div>
      </div>
    </section>
  )
}
