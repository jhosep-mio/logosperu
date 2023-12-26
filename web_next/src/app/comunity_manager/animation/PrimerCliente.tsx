'use client'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
export const PrimerCliente = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  return (
    <section
      className='comunity_secction max-w-[1300px] mx-auto pt-10 pb-20 flex flex-col relative px-10 overflow-hidden'
      ref={ref}
    >
      <div className='flex flex-col lg:flex-row gap-10 w-full lg:h-[500px] justify-center items-center overflow-hidden'>
        <img
          src='/comunity/primercliente.png'
          alt="CasaDet's"
          className='w-full h-full object-contain '
          style={{
            transform: isInView ? 'none' : 'translateX(-200px)',
            opacity: isInView ? 1 : 0,
            transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.1s'
          }}
        />
        <div className='w-full flex flex-col gap-10'>
          <img
            src='/comunity/logo_casadet.png'
            alt="Logo CasaDet's"
            className='w-0 lg:w-[250px] mx-auto'
            style={{
              transform: isInView ? 'none' : 'translateX(200px)',
              opacity: isInView ? 1 : 0,
              transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s'
            }}
          />
          <p
            style={{
              transform: isInView ? 'none' : 'translateX(400px)',
              opacity: isInView ? 1 : 0,
              transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s'
            }}
            className='text-2xl lg:text-3xl bg-[#EFEFEF] rounded-tl-[7rem] py-12 px-10 relative before:bg-[#EFEFEF] before:h-full before:w-[1000%] before:absolute before:inset-0 before:left-full'
          >
            Somos una Corporación dedicada a la venta de acabados y decoración
            para tu hogar, con productos exclusivos y de calidad.
          </p>
        </div>
      </div>
    </section>
  )
}
