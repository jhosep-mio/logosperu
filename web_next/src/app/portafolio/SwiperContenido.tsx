'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { Autoplay } from 'swiper/modules'
import { Global } from '@/components/shared/Helper/global'
import { ValuesCategoriasPortafolio, arrayCategoriasToPortafolio } from '@/components/shared/interfaces/interfaces'

export const SwiperContenido = ({ categoria }: {categoria: ValuesCategoriasPortafolio}) => {
  const isVideo = (fileName: string): boolean => {
    const videoExtensions = ['.mp4', '.avi', '.mov'] // Agregar más extensiones de video si es necesario
    const fileExtension = fileName
      .substr(fileName.lastIndexOf('.'))
      .toLowerCase()
    return videoExtensions.includes(fileExtension)
  }

  return (
    <Swiper
      slidesPerView={1}
      modules={[Autoplay]}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false
      }}
      className='h-full w-full'
    >
      {JSON.parse(categoria.array).map(
        (pro: arrayCategoriasToPortafolio) => (
          <SwiperSlide
            className='w-full h-full overflow-hidden'
            key={pro.id}
          >
            {isVideo(pro.imagen1.archivoName)
              ? (
                <video
                  src={`${Global.urlImages}/categoriasportafolio/${pro.imagen1.archivoName}`}
                  muted
                  autoPlay
                  loop
                  className='rounded-lg w-full h-full object-cover rounded-b-none group-hover:scale-125 group-hover:blur-[2px] transition-transform overflow-hidden'
                />
                )
              : (
                <img
                  src={`${Global.urlImages}/categoriasportafolio/${pro.imagen1.archivoName}`}
                  alt=''
                  className='rounded-lg w-full h-full object-cover rounded-b-none group-hover:scale-125 group-hover:blur-[2px] transition-transform overflow-hidden'
                />
                )}
          </SwiperSlide>
        )
      )}
    </Swiper>
  )
}
