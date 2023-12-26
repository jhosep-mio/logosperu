'use client'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
export const Requisitos = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section className='comunity_secction max-w-[1300px] mx-auto pt-10 pb-20 flex flex-col relative px-10 overflow-hidden'>
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-10 lg:py-10'>
        <div
          ref={ref}
          className='flex items-center justify-center'
          style={{
            scale: isInView ? '1' : '0',
            // transform: isInView ? 'none' : 'scale: 5',
            transition: 'all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.1s'
          }}
        >
          <div className='text-2xl lg:text-3xl border-secondary border-2 rounded-[6rem] flex items-center justify-center pl-40 lg:pl-60 pr-4 py-4 relative h-[100px]'>
            Logotipo editable en AI o cualquier otro programa de Adobe
            <div
              className='w-32 lg:w-52 h-32 lg:h-52 absolute left-3 lg:-left-4 top-4 lg:-top-10 bg-secondary rounded-full p-8 lg:p-12 flex items-center justify-center'
            >
              <img
                src='/comunity/ai.png'
                alt='Primer paso'
                className='w-full h-full object-contain'
              />
            </div>
          </div>
        </div>
        <div
          className='flex items-center justify-center w-full'
          ref={ref}
          style={{
            scale: isInView ? '1' : '0',
            // transform: isInView ? 'none' : 'scale: 5',
            transition: 'all 0.6s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s'
          }}
        >
          <div className='text-2xl lg:text-3xl border-secondary border-2 rounded-[6rem] flex items-center justify-center pl-40 lg:pl-60 pr-4 py-4 relative h-[100px]'>
            Imagenes propias en buena resolución
            <div
              className='w-32 lg:w-52 h-32 lg:h-52 absolute left-3 lg:-left-4 top-4 lg:-top-10 bg-secondary rounded-full p-8 lg:p-12 flex items-center justify-center'
            >
              <img
                src='/comunity/camara.png'
                alt='Primer paso'
                className='w-full h-full object-contain'
              />
            </div>
          </div>
        </div>
        <div
          ref={ref}
          style={{
            scale: isInView ? '1' : '0',
            // transform: isInView ? 'none' : 'scale: 5',
            transition: 'all 0.7s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s'
          }}
          className='flex items-center justify-center'
        >
          <div className='text-2xl lg:text-3xl border-secondary border-2 rounded-[6rem] flex items-center justify-center pl-40 lg:pl-60 pr-4 py-4 relative h-[100px]'>
            Enviar información o tema para los post y sobre el negocio.
            <div
              className='w-32 lg:w-52 h-32 lg:h-52 absolute left-3 lg:-left-4 top-4 lg:-top-10 bg-secondary rounded-full p-8 lg:p-12 flex items-center justify-center'
            >
              <img
                src='/comunity/lupa.png'
                alt='Primer paso'
                className='w-full h-full object-contain'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
