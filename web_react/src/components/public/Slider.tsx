import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
// @ts-expect-error: Type 'any' has no properties in common with type 'Autoplay'
import { Autoplay, FreeMode } from 'swiper'
import { useEffect, useState } from 'react'
import { type ValuesItemsPortafolio } from '../shared/Interfaces'
import { getItems2 } from '../shared/FechData'
import 'swiper/css/free-mode'
import { IoCloseOutline, IoFolderOpenOutline } from 'react-icons/io5'
import TypeIt from 'typeit-react'
import { Zoom, Slide, Rotate, Bounce } from 'react-awesome-reveal'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'swiper/css/navigation'
import 'react-lazy-load-image-component/src/effects/blur.css'
import { Link } from 'react-router-dom'
import { Global } from '../../helper/Global'
import { motion, AnimatePresence } from 'framer-motion'
import figts from './../../assets/logos/INTICAP ANIMADO 2.mp4'
import video from './../../assets/logos/video2.mp4'

export const Slider = (): JSX.Element => {
  const [logos, setLogos] = useState<ValuesItemsPortafolio[]>([])
  const [loading, setLoading] = useState(true)
  const [open, setOpen] = useState(false)
  const [posicion, setposicion] = useState<number | null>(null)
  const [selected, setselected] = useState(0)
  const [fondo, setfondo] = useState('')
  const [logos1, setLogos1] = useState<ValuesItemsPortafolio[]>([])
  const [logos2, setLogos2] = useState<ValuesItemsPortafolio[]>([])

  useEffect(() => {
    window.scrollTo(0, 0)
    Promise.all([getItems2('indexWhereCategoriaAleatorio/1', setLogos, setLogos1, setLogos2)]).then(
      () => {
        setLoading(false)
      }
    )
  }, [])

  return (
    <section
      className={`fondogeneral_incio h-screen w-full  overflow-hidden relative ${
        fondo !== '' ? 'fondogeneral_incio_before' : ''
      }`}
    >
      <section className="max-w-[1450px] mx-auto h-full lg:pt-0 flex justify-between relative w-full ">
        <div className="w-full h-full flex flex-col items-center justify-center md:px-4 lg:pl-20 lg:pr-32 md:pb-10 gap-0">
          <div className="w-full h-full  flex flex-col gap-10 justify-center lg:justify-end">
            <Zoom className="distortion-container ">
                        <h1
                            className={'text_principal_toseo text-6xl md:text-[8rem] font-bold distorted-text text-center lg:text-left w-full lg:w-fit text-white lg:text-black'}
                        >
                            Agencia de <br />
                            <span className="">Diseño grafico</span>
                        </h1>
            </Zoom>
            <Slide cascade delay={200}>
              <div className="w-full h-fit flex flex-col lg:flex-row gap-10 items-center modificate_text">
                <Link
                  to={'/portafolio'}
                  className="bg-black text-white text-[1.7rem] md:text-4xl px-6 py-5 flex gap-3 items-center justify-center button_portafolio_new rounded-xl text_principal_toseo "
                >
                  Portafolio <IoFolderOpenOutline />
                </Link>
                <TypeIt
                  className="text_principal_toseo text-3xl md:text-4xl lg:text-3xl text-white md:text-black font-normal w-full lg:w-[400px] text-center lg:text-left h-16 md:h-fit"
                  options={{
                    strings: [
                      'Diseñamos tu sitio web para destacar \n entre la multitud y atraer mas clientes',
                      ' Diseñamos tu sitio web para destacar \n  entre la multitud y atraer mas clientes',
                      ' Diseñamos tu sitio web para destacar \n  entre la multitud y atraer mas clientes'
                    ],
                    speed: 100,
                    breakLines: false,
                    loop: true
                  }}
                />
              </div>
            </Slide>
          </div>
          <div className="w-full h-full flex flex-col justify-start lg:justify-center items-center">
            <div className="w-full flex items-center justify-center lg:justify-start lg:pl-32 gap-14 lg:mt-16">
              <Slide cascade delay={300}>
                <Rotate>
                  <div
                    className="w-[14rem] md:w-[22rem] h-[14rem] md:h-[22rem] group group_box_ss"
                    onMouseEnter={() => {
                      setselected(2)
                    }}
                    onMouseLeave={() => {
                      setselected(0)
                    }}
                  >
                    <video
                        src={video}
                        muted
                        autoPlay
                        loop
                        className={`w-full h-full rounded-2xl persective_image group-hover:translate-x-[100px] group-hover:scale-125 ${
                            selected === 1 ? 'opacity-0' : ''
                          }`}
                    />
                  </div>
                </Rotate>
              </Slide>
              <Slide cascade direction="right" delay={400}>
                <Rotate>
                  <div
                    className="w-[14rem] md:w-[22rem] h-[14rem] md:h-[22rem] group group_box_ss2"
                    onMouseEnter={() => {
                      setselected(1)
                    }}
                    onMouseLeave={() => {
                      setselected(0)
                    }}
                  >
                    <video
                        src={figts}
                        muted
                        autoPlay
                        loop
                        className={`w-full h-full rounded-2xl object-contain persective_image2 group-hover:translate-x-[-100px] group-hover:scale-125 ${
                            selected === 2 ? 'opacity-0' : ''
                          }`}
                    />
                  </div>
                </Rotate>
              </Slide>
            </div>
          </div>
        </div>
        {fondo === '' && (
          <div className="grid grid-cols-3 gap-x-6 lg:gap-6 w-full lg:w-[750px] h-full justify-between styles_to_tres swiper_tres">
            {!loading
              ? (
              <>
                <div className="overflow-hidden md:px-16 md:ml-[-78px] hover:z-[997] swiper_general relative">
                  <Bounce className="h-full w-full overflow-[inhered]">
                    <Slide
                      direction="right"
                      className="h-full w-full overflow-[inhered]"
                    >
                      <Swiper
                        className="h-full w-full overflow-[inhered]"
                        loop={true}
                        freeMode={true}
                        speed={7000}
                        slidesPerView={4}
                        direction="vertical"
                        preventInteractionOnTransition={true}
                        autoplay={{
                          delay: 1000,
                          reverseDirection: true,
                          disableOnInteraction: false,
                          pauseOnMouseEnter: false
                        }}
                        spaceBetween={13}
                        modules={[Autoplay, FreeMode]}
                      >
                        {logos1.map((logo, index) => {
                          index += 200
                          return (
                            JSON.parse(logo.array)[2] &&
                            <>
                            <SwiperSlide
                             className={'hover:z-[999]'}
                             key={index}
                             onClick={() => {
                               setfondo(
                                 // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
                                 `${Global.urlImages}/itemsportafolios/${JSON.parse(logo.array)[2].imagen1.archivoName}`
                               )
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
                                whileHover={{ scale: 1.25, color: 'red', zIndex: '999', opacity: '1' }}
                                whileTap={{ scale: 1.2 }}
                                transition= { { duration: 0.5 } }
                                className={'h-full  rounded-[2rem] swiper_home_two transition-opacity relative shadow-sm shadow-black'}
                              >
                                <AnimatePresence>
                                {open && index !== posicion &&
                                  <motion.div
                                    className="absolute inset-0 bg-black opacity-50 rounded-[2rem] z-10"
                                    initial={{ opacity: 0 }} // Opacidad inicial del pseudo-elemento
                                    animate={{ opacity: 0.5 }} // Opacidad animada del pseudo-elemento
                                    transition={{ duration: 0.5 }} // Duración de la transición para el pseudo-elemento
                                    exit={{ opacity: 0 }}
                                  />
                                }
                                </AnimatePresence>
                                <LazyLoadImage
                                  effect="blur"
                                  // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
                                  src={`${Global.urlImages}/itemsportafolios/${JSON.parse(logo.array)[2].imagen1.archivoName}`}
                                  alt={JSON.parse(logo.array)[2].imagen1.archivoName}
                                  className="w-full h-full object-cover object-center"
                                />
                              </motion.div>
                            </SwiperSlide>
                            </>
                          )
                        })}
                      </Swiper>
                    </Slide>
                  </Bounce>
                </div>
                <div className="overflow-hidden md:px-16 md:ml-[-78px] hover:z-[997] swiper_general relative">
                  <Bounce
                    className="h-full w-full overflow-[inhered]"
                    delay={200}
                  >
                    <Slide
                      direction="right"
                      className="h-full w-full overflow-[inhered]"
                    >
                      <Swiper
                        className="h-full w-full overflow-[inhered]"
                        loop={true}
                        freeMode={true}
                        speed={7000}
                        slidesPerView={4}
                        direction="vertical"
                        preventInteractionOnTransition={true}
                        autoplay={{
                          delay: 0,
                          reverseDirection: false,
                          disableOnInteraction: false,
                          pauseOnMouseEnter: false
                        }}
                        spaceBetween={13}
                        modules={[Autoplay, FreeMode]}
                      >
                        {logos2.map((logo, index) => {
                          index += 100
                          return (
                            JSON.parse(logo.array)[2] &&
                            <SwiperSlide
                            className={'hover:z-[999]'}
                            key={index}
                            onClick={() => {
                              setfondo(
                                // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
                                `${Global.urlImages}/itemsportafolios/${JSON.parse(logo.array)[2].imagen1.archivoName}`
                              )
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
                                whileHover={{ scale: 1.25, color: 'red', zIndex: '999', opacity: '1' }}
                                whileTap={{ scale: 1.2 }}
                                transition= { { duration: 0.5 } }
                                className={'h-full  rounded-[2rem] swiper_home_two transition-opacity relative shadow-sm shadow-black'}
                              >
                                <AnimatePresence>
                                {open && index !== posicion &&
                                  <motion.div
                                    className="absolute inset-0 bg-black opacity-50 rounded-[2rem] z-10"
                                    initial={{ opacity: 0 }} // Opacidad inicial del pseudo-elemento
                                    animate={{ opacity: 0.5 }} // Opacidad animada del pseudo-elemento
                                    transition={{ duration: 0.5 }} // Duración de la transición para el pseudo-elemento
                                    exit={{ opacity: 0 }}
                                  />
                                }
                                </AnimatePresence>
                                <LazyLoadImage
                                  effect="blur"
                                  // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
                                  src={`${Global.urlImages}/itemsportafolios/${JSON.parse(logo.array)[2].imagen1.archivoName}`}
                                  alt={JSON.parse(logo.array)[2].imagen1.archivoName}
                                  className="w-full h-full object-cover object-center"
                                />
                              </motion.div>
                            </SwiperSlide>
                          )
                        })}
                      </Swiper>
                    </Slide>
                  </Bounce>
                </div>
                <div className="overflow-hidden md:px-16 md:ml-[-78px] hover:z-[997] swiper_general relative">
                  <Bounce
                    className="h-full w-full overflow-[inhered]"
                    delay={400}
                  >
                    <Slide
                      direction="right"
                      className="h-full w-full overflow-[inhered]"
                    >
                      <Swiper
                        className="h-full w-full overflow-[inhered]"
                        loop={true}
                        freeMode={true}
                        speed={7000}
                        slidesPerView={4}
                        direction="vertical"
                        preventInteractionOnTransition={true}
                        autoplay={{
                          delay: 0,
                          reverseDirection: true,
                          disableOnInteraction: false,
                          pauseOnMouseEnter: false
                        }}
                        spaceBetween={13}
                        modules={[Autoplay, FreeMode]}
                      >
                        {logos.map((logo, index) => {
                          index += 300
                          return (
                            JSON.parse(logo.array)[2] &&

                            <SwiperSlide
                              className={'hover:z-[999]'}
                              key={index}
                              onClick={() => {
                                setfondo(
                                  // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
                                  `${Global.urlImages}/itemsportafolios/${JSON.parse(logo.array)[2].imagen1.archivoName}`
                                )
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
                                whileHover={{ scale: 1.25, color: 'red', zIndex: '999', opacity: '1' }}
                                whileTap={{ scale: 1.2 }}
                                transition= { { duration: 0.5 } }
                                className={'h-full  rounded-[2rem] swiper_home_two transition-opacity relative shadow-sm shadow-black'}
                              >
                                <AnimatePresence>
                                {open && index !== posicion &&
                                  <motion.div
                                    className="absolute inset-0 bg-black opacity-50 rounded-[2rem] z-10"
                                    initial={{ opacity: 0 }} // Opacidad inicial del pseudo-elemento
                                    animate={{ opacity: 0.5 }} // Opacidad animada del pseudo-elemento
                                    transition={{ duration: 0.5 }} // Duración de la transición para el pseudo-elemento
                                    exit={{ opacity: 0 }}
                                  />
                                }
                                </AnimatePresence>
                                <LazyLoadImage
                                  effect="blur"
                                  // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
                                  src={`${Global.urlImages}/itemsportafolios/${JSON.parse(logo.array)[2].imagen1.archivoName}`}
                                  alt={JSON.parse(logo.array)[0].imagen1.archivoName}
                                  className="w-full h-full object-cover object-center"
                                />
                              </motion.div>
                            </SwiperSlide>
                          )
                        })}
                      </Swiper>
                    </Slide>
                  </Bounce>
                </div>
              </>
                )
              : (
                  ''
                )}
          </div>
        )}
      </section>
      <AnimatePresence>
        {fondo !== '' && (
          <motion.section
            initial={{ opacity: 0 }} // Opacidad inicial del pseudo-elemento
            animate={{ opacity: 1 }} // Opacidad animada del pseudo-elemento
            transition={{ duration: 0.5 }} // Duración de la transición para el pseudo-elemento
            exit={{ opacity: 0 }}
            className="w-1/2 h-full agregar_fondo flex items-center justify-center"
            style={
              fondo !== ''
                ? { display: 'flex' }
                : { display: 'none' }
            }
          >
            <img src={fondo} alt="" className='w-1/2 h-1/2 object-cover object-center rounded-2xl shadow-sm shadow-black '/>
            <IoCloseOutline className=" absolute text-8xl top-0 bottom-0 mt-[90px] right-36 text-white bg-[#363636cb] rounded-full cursor-pointer" onClick={() => { setfondo('') }}/>
          </motion.section>
        )}
      </AnimatePresence>

    </section>
  )
}
