'use client'
import { useState } from 'react'
import { SwiperComponent } from './SwiperComponent'
import { motion, AnimatePresence } from 'framer-motion'
import { IoCloseOutline } from 'react-icons/io5'
import { ValuesItemsPortafolio } from '../shared/interfaces/interfaces'

export const ContentSwiper = ({
  data,
  data2,
  data3
}: {
  data: ValuesItemsPortafolio[];
  data2: ValuesItemsPortafolio[];
  data3: ValuesItemsPortafolio[];
}) => {
  const [fondo, setFondo] = useState('')

  return (
    <>
      {fondo == ''
        ? (
          <div className='grid grid-cols-3 gap-x-6 lg:gap-6 w-full lg:w-[750px] h-full justify-between styles_to_tres swiper_tres'>
            <div className='overflow-hidden md:px-16 md:ml-[-78px] hover:z-[997] swiper_general relative'>
              <div className='h-full w-full overflow-[inhered]'>
                <div className='h-full w-full overflow-[inhered]'>
                  <SwiperComponent data={data} inicio={200} setFondo={setFondo} move />
                </div>
              </div>
            </div>
            <div className='overflow-hidden md:px-16 md:ml-[-78px] hover:z-[997] swiper_general relative'>
              <div className='h-full w-full overflow-[inhered]'>
                <div className='h-full w-full overflow-[inhered]'>
                  <SwiperComponent
                    data={data2}
                    inicio={300}
                    move={false}
                    setFondo={setFondo}
                  />
                </div>
              </div>
            </div>
            <div className='overflow-hidden md:px-16 md:ml-[-78px] hover:z-[997] swiper_general relative'>
              <div className='h-full w-full overflow-[inhered]'>
                <SwiperComponent data={data3} inicio={400} setFondo={setFondo} move />
              </div>
            </div>
          </div>
          )
        : (
          <AnimatePresence>
            {fondo !== '' && (
              <motion.section
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                exit={{ opacity: 0 }}
                className='w-1/2 h-full agregar_fondo flex items-center justify-center'
                style={fondo !== '' ? { display: 'flex' } : { display: 'none' }}
              >
                <img
                  src={fondo}
                  alt='Logos Perú - Agencia de Marketing Digital'
                  className='w-1/2 h-1/2 object-cover object-center rounded-2xl shadow-sm shadow-black '
                />
                <IoCloseOutline
                  className=' absolute text-8xl top-0 bottom-0 mt-[90px] right-36 text-white bg-[#363636cb] rounded-full cursor-pointer'
                  onClick={() => {
                    setFondo('')
                  }}
                />
              </motion.section>
            )}
          </AnimatePresence>
          )}
    </>
  )
}
