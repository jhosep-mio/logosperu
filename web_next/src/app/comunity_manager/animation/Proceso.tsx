'use client'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export const Proceso = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  return (
    <section className='comunity_secction max-w-[1300px] mx-auto pt-10 pb-20 flex flex-col gap-6 lg:gap-0 relative px-10 overflow-hidden'>
      <div
        style={{
          transform: isInView ? 'none' : 'translateX(-200px)',
          opacity: isInView ? 1 : 0,
          transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.1s'
        }}
        className='flex flex-col lg:flex-row gap-2 lg:gap-4 lg:justify-center lg:items-center lg:max-w-[60%] mx-auto relative z-20'
      >
        <img
          src='/disenoPersonajes/s1.png'
          alt='Primer paso'
          className='w-32 h-32'
        />
        <div className='flex flex-col gap-1'>
          <h2 className='font-extrabold text-4xl font font_baloo'>
            Recopilacíon de información
          </h2>
          <p className='lg:pl-3 text-3xl text-justify lg:text-left'>
            Cuéntanos tu historia y metas. Responde nuestro breve cuestionario
            para personalizar nuestros servicios según tus necesidades.
          </p>
        </div>
        <div className='bg-secondary w-2 h-32 opacity-0 lg:opacity-100 absolute left-[3.7rem] -bottom-10 z-[-1]'>
          .
        </div>
      </div>
      <div
        ref={ref}
        style={{
          transform: isInView ? 'none' : 'translateX(200px)',
          opacity: isInView ? 1 : 0,
          transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s'
        }}
        className='flex flex-col lg:flex-row gap-2 lg:gap-4 lg:justify-center lg:items-center lg:max-w-[60%] mx-auto relative z-20'
      >
        <img
          src='/disenoPersonajes/s2.png'
          alt='Primer paso'
          className='w-32 h-32'
        />
        <div className='flex flex-col gap-1'>
          <h2 className='font-extrabold text-4xl font_baloo '>
            Creación de Diseño y cronograma
          </h2>
          <p className='lg:pl-3 text-3xl '>
            Diseñaremos gráficos y contenido para tu marca. Estableceremos un
            cronograma y gestionaremos tu comunidad en línea.
          </p>
        </div>
        <div className='bg-secondary w-2 h-32 opacity-0 lg:opacity-100 absolute left-[3.7rem] -bottom-10 z-[-1]'>
          .
        </div>
      </div>
      <div
        className='flex flex-col lg:flex-row gap-2 lg:gap-4 lg:justify-center lg:items-center lg:max-w-[60%] mx-auto relative z-20'
        style={{
          transform: isInView ? 'none' : 'translateX(-200px)',
          opacity: isInView ? 1 : 0,
          transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s'
        }}
      >
        <img
          src='/disenoPersonajes/s3.png'
          alt='Primer paso'
          className='w-32 h-32'
        />
        <div className='flex flex-col gap-1'>
          <h2 className='font-extrabold text-4xl font_baloo'>
            Publicación y resultados
          </h2>
          <p className='lg:pl-3 text-3xl text-justify lg:text-left'>
            Con piezas aprobadas y cronograma listo, iniciaremos
            publicaciones. Gestionaremos y analizaremos resultados para
            ajustar la estrategia.
          </p>
        </div>
      </div>
    </section>
  )
}
