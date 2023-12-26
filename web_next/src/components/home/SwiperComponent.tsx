'use client'
import { useState, Dispatch, SetStateAction } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, FreeMode } from 'swiper/modules'
import { ValuesItemsPortafolio } from '../shared/interfaces/interfaces'
import { motion, AnimatePresence } from 'framer-motion'
import { Global } from '../shared/Helper/global'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/autoplay'

export const SwiperComponent = ({
  data,
  inicio,
  move,
  setFondo
}: {
  data: ValuesItemsPortafolio[];
  inicio: number;
  move: boolean
  setFondo: Dispatch<SetStateAction<string>>;
}) => {
  const [open, setOpen] = useState(false)
  const [posicion, setposicion] = useState<number | null>(null)

  return (
    <Swiper
      className='h-full w-full overflow-[inhered]'
      loop
      freeMode
      speed={7000}
      slidesPerView={4}
      direction='vertical'
      preventInteractionOnTransition
      autoplay={{
        delay: 1000,
        reverseDirection: move,
        disableOnInteraction: false,
        pauseOnMouseEnter: false
      }}
      spaceBetween={13}
      modules={[Autoplay, FreeMode]}
    >
      {data.slice(0, 8).map((logo, index) => {
        index += inicio
        return (
          JSON.parse(logo.array)[2] && (
            <SwiperSlide
              className='hover:z-[999] cursor-pointer max-h-[202px]'
              key={index}
              onClick={() => {
                setFondo(`${Global.urlImages}/itemsportafolios/${JSON.parse(logo.array)[2].imagen1.archivoName}`)
              }}
              onMouseEnter={() => {
                setOpen(true)
                setposicion(index)
              }}
              onMouseLeave={() => {
                setOpen(false)
              }}
            >
              <motion.div
                whileHover={{
                  scale: 1.25,
                  color: 'red',
                  zIndex: '999',
                  opacity: '1'
                }}
                whileTap={{ scale: 1.2 }}
                transition={{ duration: 0.5 }}
                className='h-full  rounded-[2rem] overflow-hidden swiper_home_two transition-opacity relative shadow-sm shadow-black'
              >
                <AnimatePresence>
                  {open && index !== posicion && (
                    <motion.div
                      className='absolute inset-0 bg-black opacity-50 rounded-[2rem] z-10'
                      initial={{ opacity: 0 }} // Opacidad inicial del pseudo-elemento
                      animate={{ opacity: 0.5 }} // Opacidad animada del pseudo-elemento
                      transition={{ duration: 0.5 }} // Duración de la transición para el pseudo-elemento
                      exit={{ opacity: 0 }}
                    />
                  )}
                </AnimatePresence>
                <img
                  src={`${Global.urlImages}/itemsportafolios/${
                    JSON.parse(logo.array)[2].imagen1.archivoName
                  }`}
                  alt={JSON.parse(logo.array)[2].imagen1.archivoName}
                  className='w-full h-full object-cover object-center'
                />
              </motion.div>
            </SwiperSlide>
          )
        )
      })}
    </Swiper>
  )
}
