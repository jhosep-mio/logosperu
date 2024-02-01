/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable no-unused-expressions */
'use client'
import {
  ValuesItemsPortafolio,
  arrayCategoriasToPortafolio
} from '@/components/shared/interfaces/interfaces'
import { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'viewerjs-react/dist/index.css'
import { Global } from '@/components/shared/Helper/global'
import { Paginacion } from '@/components/shared/favoritos/Paginacion'
import { ModalVideo } from '@/components/shared/favoritos/ModalVideo'
import { AddHeard } from '@/components/shared/favoritos/AddHeard'
// import { AddProducto } from '@/components/shared/favoritos/AddProducto'
import { motion } from 'framer-motion'

export const Contenido = ({
  items,
  titulo,
  ruta
}: {
  items: ValuesItemsPortafolio[];
  titulo: string;
  ruta: string;
}) => {
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

  const [imagenFullScreen, setImagenFullScreen] = useState(false)
  const [selectedImages, setSelectedImages] = useState([])
  const [, setSelectedIndex] = useState(null)
  const [url, setUrl] = useState('')

  const openImageInFullScreen = (images: any, index: any, url: string) => {
    setSelectedImages(images)
    setUrl(url)
    setSelectedIndex(index)
    setImagenFullScreen(!imagenFullScreen)
  }

  const closeFullScreen = () => {
    setSelectedImages([])
    setSelectedIndex(null)
    setImagenFullScreen(false)
  }

  useEffect(() => {
    if (imagenFullScreen) {
      document.body.style.overflow = 'hidden' // Deshabilitar scroll
    } else {
      document.body.style.overflow = 'auto' // Habilitar scroll
    }

    // Limpieza al desmontar el componente
    return () => {
      document.body.style.overflow = 'auto' // Asegurarse de que el scroll esté habilitado al desmontar
    }
  }, [imagenFullScreen])

  const [urlPlanes, setUrlPlanes] = useState('')
  useEffect(() => {
    console.log('RUTA: ' + ruta)
    // eslint-disable-next-line no-unused-expressions
    ruta == 'diseno-de-logotipos' ? setUrlPlanes('diseno_logotipo') : ''
    ruta == 'brochure' ? setUrlPlanes('diseno_brochure') : ''
    ruta == 'diseno-de-paginas-web' ? setUrlPlanes('diseno_web') : ''
    ruta == 'identidad-corporativa'
      ? setUrlPlanes('identidad_corporativa')
      : ''
    ruta == 'flyers' ? setUrlPlanes('diseno_flyer') : ''
    ruta == 'personajes' ? setUrlPlanes('diseno_personaje') : ''
    ruta == 'etiquetas' ? setUrlPlanes('') : ''
    ruta == 'audiovisual' ? setUrlPlanes('audiovisual') : ''
  }, [ruta])
  return (
    <>
      {imagenFullScreen && (
        <div onClick={() => closeFullScreen()} className='bg-transparent flex-col fixed w-screen h-screen before:absolute before:w-full before:h-full before:bg-black before:opacity-50 before:top-0 before:left-0  flex items-center justify-center object-contain  z-[998] inset-0 m-auto'>
          <div className='flex items-center justify-center relative z-[999]'>
            <div className='titulo_portafolio'>
              <h1
                style={{
                  color: '#fff',
                  background: '#5e65f0',
                  padding: '10px 35px',
                  borderRadius: '8px'
                }}
              >
                {titulo}
              </h1>
              <hr className='hr_first' style={{ borderColor: '#5e65f0' }} />
              <hr className='hr_second' style={{ borderColor: '#5e65f0' }} />
            </div>
          </div>

          <Swiper
            slidesPerView={selectedImages.length > 1 ? 3 : 1}
            className='w-full swp_modal_efecto'
            loop
            initialSlide={0}
            breakpoints={{
              0: {
                slidesPerView: 1
              },
              1024: {
                slidesPerView: selectedImages.length > 1 ? 3 : 1
              }
            }}
          >
            {selectedImages.map((image, index) => (
              <SwiperSlide key={index}>
                {index === 1 || selectedImages.length == 1
                  ? <>
                    <motion.img
                      src={image}
                      alt=''
                      initial={{ scale: 0.5 }} // Tamaño inicial pequeño
                      animate={{ scale: 1 }} // Tamaño normal después de un tiempo
                      transition={{ duration: 0.3 }}
                      className='h-[380px] w-[380px] block object-contain z-[999]'
                    />
                    <motion.a
                      href={`/${urlPlanes}`}
                      initial={{ width: 0 }}
                      animate={{ width: '100%' }}
                      className='sha max-w-[280px] z-[999] bg-[#5e65f0] hover:bg-[#5e65f0]/80 whitespace-nowrap text-white no-underline overflow-hidden h-16 rounded-lg flex items-center justify-center text-3xl text-center mx-auto mt-12 transition-all hover:text-white hover:no-underline'
                      transition={{
                        duration: 0.5,
                        delay: 0.3,
                        ease: 'easeOut'
                      }}
                    >
                      Ver planes
                    </motion.a>
                    {url !== '' && (
                      <motion.a
                        href={url}
                        target='_blank'
                        initial={{ width: 0 }}
                        animate={{ width: '100%' }}
                        className='sha max-w-[280px] z-[999] bg-[#5e65f0] hover:bg-[#5e65f0]/80 whitespace-nowrap hover:no-underline hover:text-white text-white no-underline overflow-hidden h-16 rounded-lg flex items-center justify-center text-3xl text-center mx-auto mt-12 transition-all'
                        transition={{
                          duration: 0.5,
                          delay: 0.3,
                          ease: 'easeOut'
                        }}
                      >
                        Ver web
                      </motion.a>
                    )}
                    <motion.span
                      initial={{ visibility: 'hidden' }}
                      animate={{ visibility: 'visible' }}
                      onClick={closeFullScreen}
                      className='text-white underline text-2xl z-[999] block mt-6 cursor-pointer'
                      transition={{ duration: 0.2, delay: 3 }}
                    >
                      Cerrar
                    </motion.span>
                  </>
                  : (
                    <motion.img
                      src={image}
                      alt={`Imagen ${index + 1}`}
                      initial={{ scale: 0.5 }} // Tamaño inicial pequeño
                      animate={{ scale: 1 }} // Tamaño normal después de un tiempo
                      transition={{ duration: 0.3 }}
                      className='h-[380px] w-[380px] block object-contain z-[999]'
                    />
                    )}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
      <div className='w-full flex flex-wrap gap-10 justify-center px-5 md:px-0 mb-16'>
        {filterDate(items).map((item) => (
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
                                  <motion.img
                                    src={`${Global.urlImages}/itemsportafolios/${pro.imagen1.archivoName}`}
                                    alt='asdasdasd'
                                    className='rounded-lg object-cover w-full h-full rounded-b-none group-hover:scale-150 transition-transform overflow-hidden cursor-pointer'
                                    whileHover={{ scale: 1.1, y: -5 }}
                                    onClick={() =>
                                      openImageInFullScreen(
                                        JSON.parse(item.array).map(
                                          (img: arrayCategoriasToPortafolio) =>
                                        `${Global.urlImages}/itemsportafolios/${img.imagen1.archivoName}`
                                        ),
                                        pro.id,
                                        ''
                                      )}
                                  />
                                  )}
                            </div>
                            )
                          : item.tipo === 'redireccion'
                            ? (
                              <a
                                className='w-full h-full'
                                rel='noreferrer'
                                onClick={() =>
                                  openImageInFullScreen(
                                    JSON.parse(item.array).map(
                                      (img: arrayCategoriasToPortafolio) =>
                                    `${Global.urlImages}/itemsportafolios/${img.imagen1.archivoName}`
                                    ),
                                    pro.id,
                                    item.url
                                  )}
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
                <div className='w-1/3 flex justify-end mt-3'>
                  <AddHeard producto={item} contador={1} />
                  {/* <AddProducto producto={item} contador={1} /> */}
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
