'use client'
import {
  ValuesItemsPortafolio,
  arrayCategoriasToPortafolio
} from '@/components/shared/interfaces/interfaces'
import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'viewerjs-react/dist/index.css'
import { Global } from '@/components/shared/Helper/global'
import { Paginacion } from '@/components/shared/favoritos/Paginacion'
import { ModalVideo } from '@/components/shared/favoritos/ModalVideo'
import { AddHeard } from '@/components/shared/favoritos/AddHeard'
import { AddProducto } from '@/components/shared/favoritos/AddProducto'

export const Contenido = ({ items }: { items: ValuesItemsPortafolio[] }) => {
  const [paginaActual, setpaginaActual] = useState<number>(1)
  const [cantidadRegistros] = useState(15)
  const indexOfLastPost = paginaActual * cantidadRegistros
  const indexOfFirstPost = indexOfLastPost - cantidadRegistros
  const totalPosts = items.length
  const [open, setOpen] = useState(false)
  const [video, setVideo] = useState('')

  const isVideo = (fileName: string): boolean => {
    const videoExtensions = ['.mp4', '.avi', '.mov'] // Agregar más extensiones de video si es necesario
    const fileExtension = fileName
      .substr(fileName.lastIndexOf('.'))
      .toLowerCase()
    return videoExtensions.includes(fileExtension)
  }

  const filterDate = (
    entrada: ValuesItemsPortafolio[]
  ): ValuesItemsPortafolio[] => {
    return entrada.slice(indexOfFirstPost, indexOfLastPost)
  }

  return (
    <>
      <div className='w-full flex flex-wrap gap-10 justify-center px-5 md:px-0 mb-16'>
        {filterDate(items)
          .map((item) => (
            <div
              className=' box_portafolio_new rounded-lg group relative marg_b_0 h-[270px] w-full max-w-[300px] md:h-[320px] md:max-w-full md:w-[320px] lg:w-[280px] hover:translate-y-[-10px] hover:scale-105 transition-transform overflow-hidden'
              key={item.id}
            >
              <div className='p-0 rounded-t-lg h-[70%] md:h-[82%] relative '>
                <Swiper
                  slidesPerView={1}
                  modules={[Autoplay]}
                  loop
                  autoplay={{
                    delay: 2000,
                    disableOnInteraction: false
                  }}
                  className='h-full'
                >
                  {JSON.parse(item.array).map(
                    (pro: arrayCategoriasToPortafolio) => (
                      <SwiperSlide
                        className='w-full h-full overflow-hidden'
                        key={pro.id}
                      >
                        <>
                          {item.tipo == 'imagen'
                            ? (
                              <div className='w-full h-full'>
                                {isVideo(pro.imagen1.archivoName)
                                  ? (
                                    <video
                                      src={`${Global.urlImages}/itemsportafolios/${pro.imagen1.archivoName}`}
                                      muted
                                      autoPlay
                                      loop
                                      className='rounded-lg object-cover w-full h-full rounded-b-none group-hover:scale-12  transition-transform overflow-hidden '
                                    />
                                    )
                                  : (
                                    <img
                                      src={`${Global.urlImages}/itemsportafolios/${pro.imagen1.archivoName}`}
                                      alt=''
                                      className='rounded-lg object-cover w-full h-full rounded-b-none group-hover:scale-150 transition-transform overflow-hidden cursor-pointer'
                                    />
                                    )}
                              </div>
                              )
                            : item.tipo === 'redireccion'
                              ? (
                                <a
                                  href={item.url}
                                  target='_blank'
                                  className='w-full h-full'
                                  rel='noreferrer'
                                >
                                  {isVideo(pro.imagen1.archivoName)
                                    ? (
                                      <video
                                        src={`${Global.urlImages}/itemsportafolios/${pro.imagen1.archivoName}`}
                                        muted
                                        autoPlay
                                        loop
                                        className='rounded-lg object-cover w-full h-full rounded-b-none group-hover:scale-12  transition-transform overflow-hidden '
                                      />
                                      )
                                    : (
                                      <img
                                        alt=''
                                        src={`${Global.urlImages}/itemsportafolios/${pro.imagen1.archivoName}`}
                                        className='rounded-lg object-cover w-full h-full rounded-b-none group-hover:scale-125 transition-transform overflow-hidden cursor-pointer'
                                      />
                                      )}
                                </a>
                                )
                              : (
                                  item.tipo === 'youtube' && (
                                    <button
                                      type='button'
                                      className='w-full h-full'
                                      rel='noreferrer'
                                      onClick={() => {
                                        setVideo(item.url)
                                        setOpen(true)
                                      }}
                                    >
                                      {isVideo(pro.imagen1.archivoName)
                                        ? (
                                          <video
                                            src={`${Global.urlImages}/itemsportafolios/${pro.imagen1.archivoName}`}
                                            muted
                                            autoPlay
                                            loop
                                            className='rounded-lg object-cover w-full h-full rounded-b-none group-hover:scale-12  transition-transform overflow-hidden '
                                          />
                                          )
                                        : (
                                          <img
                                            alt=''
                                            src={`${Global.urlImages}/itemsportafolios/${pro.imagen1.archivoName}`}
                                            className='rounded-lg object-cover w-full h-full rounded-b-none group-hover:scale-125 transition-transform overflow-hidden cursor-pointer'
                                          />
                                          )}
                                    </button>
                                  )
                                )}
                        </>
                      </SwiperSlide>
                    )
                  )}
                </Swiper>
              </div>
              <div className='w-full h-[20%] absolute bottom-0 z-50 asignar_before'>
                <div className=' asignar_before flex items-center justify-center px-3 gap-3 relative z-10 w-full h-full'>
                  <div className='w-2/3 mt-3'>
                    <p className='w-full text-[#252525] font-semibold p-4 text-2xl text-left rounded-b-lg flex items-start justify-center flex-col'>
                      {item.titulo}
                    </p>
                  </div>
                  <div className='w-1/3 flex gap-3 mt-3'>
                    <AddHeard producto={item} contador={1} />
                    <AddProducto producto={item} contador={1} />
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
      <section className='w-full flex items-center justify-center contenedor_paginacion mb-12 md:mb-0'>
        <Paginacion
          totalPosts={totalPosts}
          cantidadRegistros={cantidadRegistros}
          paginaActual={paginaActual}
          setpaginaActual={setpaginaActual}
        />
      </section>
      <ModalVideo
        video={video}
        open={open}
        setVideo={setVideo}
        setOpen={setOpen}
      />
    </>
  )
}
